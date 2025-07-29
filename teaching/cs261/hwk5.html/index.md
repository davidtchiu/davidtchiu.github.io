## CS 261 - Computer Science II

### Homework 5: HTML Tag Validator
HTML (hypertext markup language) is the language of the web. Every webpage (and most of our mobile apps) look and feel the way they do thanks to HTML. It describes the basic structure of a webpage using elements called *"tags."* These tags mark where different parts of the page start and end --- things like headings, paragraphs, bold text, images, and more. Most HTML elements consist of two tags:

- An opening tag, like `<p>` or `<div>`
- A closing tag, like` </p>` or `</div>`

Before your browsers can render the HTML into a webpage, it must do a bit of syntax checking. Importantly, HTML tags must be properly *nested*, like parentheses in Java and algebraic expressions. That means if you open a tag inside another, you must close it before closing the outer one.

#### Proper Nesting Rules
When writing HTML:
- Every opening tag (like `<div>`) must be matched by a closing tag (like `</div>`). If tags are mismatched or missing, the HTML is said to be not properly nested, and the syntax is invalid.
- Exceptions:
  - Some tags (called "void" tags) like `<br/>` for line-break, or `<hr/>` for horizontal rule, do not need to be matched. They stand alone.
  - Comment tags (`<!-- this is a comment -->`) do not need to be matched either. They also stand alone.


**✔ Example 1: Properly nested**
```html
<div><p><i>Text<br/></i></p></div>
```
Notice that each open tag is closed with respect to nested ordering. The exception is a void tag, `<hr/>` that stands alone and does not need to be matched.

**❌ Example 2: Incorrect nesting**
```html
<div><p><b>Text</p></b></div>
```
`<b>` is closed after `</p>`, which is improper nesting.

**❌ Example 3: Extraenous closing tag**
```html
</div><p>Paragraph</p>
```
The `</div>` tag never had a corresponding opening `<div>`.

In this assignment, you’ll write a class that can:
- Check if a given HTML string is properly nested (isProperlyNested)
- Suggest corrections for invalid nesting (suggestFixes)
- Print tags with indentation to show structure (prettyPrint)

You’ll use a `Queue` to store the tags in order, and a `Stack` to track nesting. We’ve provided code that breaks a string into a sequence of HTML-like tags for you — no parsing required!



#### Student Learning Outcomes
- Use a `Stack` to check proper nesting of HTML tags
- Use a `Queue` to hold tags in the order they appear
- Reinforce string traversal, abstraction, and debugging through nested data

#### Required Files
There are no required files. You will be writing the following classes from scratch:
- `TagReader.java` — parses HTML input into tags
- `HtmlValidator.java` — checks whether the tags are properly nested


#### Part 1: Writing the HTML Tag Extractor
The first thing we need to work on is to extract every HTML tag from a given string. Create a new class called `TagReader.java`. This class provides a `static` method `extractTags()` that takes a raw HTML string (with content and tags mixed in) and teases out the tags in the order in which they appear in the string, storing them in a `Queue<String>`. Just focus on the task of extracting each tag here. Do not worry about whether the tag nesting is correct.

```java
public class TagReader {

    /**
     * Extracts and returns all HTML tags (as strings) in the order they 
     * appear in the givem HTML string.
     * Tags are anything between '<' and '>' characters.
     * Ignores all text outside of tags.
     */
    public static Queue<String> extractTags(String html) {
        // TODO: Implement this method
        // Use a loop to scan the string and extract substrings between '<' and '>'
        // For each found tag, add it to a Queue and return it
    }
}
```

Hints: The `html` is stored as a `String`, so we have the [String API](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) at our disposal.
- `html.split(" ")` is not effective here, because tags aren't necessarily separated by spaces.
- Use the 2-argument `html.indexOf("<", i)` to find opening (or `">"` to find closing) angle brackets.
- Use the 2-argument `html.substring(start, end + 1)` to extract tags from the file.

Assumptions: You can make the following simplifying assumptions about the `String html` input:
- Nested angle brackets will not appear. For instance, things like `<p <b>>` will not be input.
- Void tags always end in `/>`. For instance, `<img/>` and `<br/>`, not `<img>` and `<br>`.
- `<!-- comments -->` do not need to be handled by this method.


If you got this class working, your output should match mine below:
```java
import java.util.Queue;
Queue<String> myTags = TagReader.extractTags("<p><strong><emph>Hello</emph> world!</strong></p>");
System.out.println(myTags);
> [<p>, <strong>, <emph>, </emph>, </strong>, </p>]

Queue<String> myTags2 = TagReader.extractTags("<p>  <strong><emph><hr/><br/><br/>Hello<br /></emph> world!</hello></p>");
System.out.println(myTags2);
> [<p>, <strong>, <emph>, <hr/>,  <br/>, <br/>,  <br/>, </emph>, </hello>, </p>]
```

#### Part 2: HTML Syntax Validator
Open the given `HTMLValidator` class which implements the `Syntax` interface. Note that it does not hold the original code string -- instead, it stores a `Queue` of tags. Read over the abstract methods and the private helper methods that have been given to understand what they do. All the methods below require that you use both a `Queue` and `Stack`, so you might want to refresh yourself of their API. 

**Important:** In all the methods below, you must preserve the contents of the original `Queue` of tags. One easy way to do this is to make a copy before processing it. If you're using a `LinkedList` as your `Queue` implementation, you can create a shallow copy like this:
```java
Queue<String> copy = new LinkedList<>(original);
```
This lets you safely poll from `copy` without modifying the `original` Queue.


1. Override the method `public boolean isProperlyNested()`. For each tag in the queue:
    - If it’s an **opening tag**, `push()` it onto a stack.
    - If it’s a **closing tag**:
      - First check if the stack is empty: reject — this means there's no matching open tag.
      - Otherwise, `pop()` the most recent opening tag from the stack.
        - Use the helper method tagsMatch(open, close) to check if they match.
          - If they don't match, reject immediately.
    - If it's a **void tag** or a **comment**, ignore it.
    - After processing all tags:
      - If the stack is not empty, reject — this means there are unclosed tags.
      - If the stack is empty, accept the input as valid.

<!-- For each tag you examine in FIFO order, test if it's an opening tag, then push it onto a stack. If it's a close tag, pop a tag (if possible) from the top of the stack, and check to see if it *matches* the close tag (e.g., `<div>` matches `</div>`) -- check out the helper method `tagsMatch()`. If they don't match, reject. Also reject if the stack was empty (which means you have a closing tag without a corresponding opening tag.) Once you've examined all tags in the queue, check to see if the stack is empty. If not, then reject based on there being an unclosed opening tag. Ignore any comments and void tags. -->

    ```java
    HTMLValidator syntax = new HTMLValidator();
    syntax.load("</u><p><hello></yes><emph>Hello</emph> world!</i>");
    System.out.println(syntax.isProperlyNested());
    > false

    syntax.load("<p> <strong><emph>Hello<br /></emph> world!</hello></p>");
    System.out.println(syntax.isProperlyNested());
    > false
      
    syntax.load("<p><strong><emph>Hello</emph> world!</strong></p>");
    System.out.println(syntax.isProperlyNested());
    > true
    ```

2. Override the method `public void prettyPrint()` prints out each tag on a separate line, with indentation based on nesting level. Each "degree of nesting" calls for 2 spaces to be printed before the tag. This method is not expected to work if the HTML code is invalid -- print `"invalid syntax"` instead and stop. Otherwise, use a `Stack` to track **open tags**, and poll each tag off the `Queue`:
For each **open tag**:
    - Print it with `2 × stack.size()` spaces in front
    - Then `push()` it onto the stack
    For each **close tag**:
    - First, `pop()` from the stack (which reduces the nesting level)
    - Then print the tag using the updated stack size for indentation
    For **void tags** (e.g.,` <br/>`,` <img/>`) and comments, just print them with current indentation; don’t push or pop.

    ```java
    HTMLValidator syntax = new HTMLValidator();
    syntax.load("</u><p><hello></yes><emph>Hello</emph> world!</i>");
    syntax.prettyPrint();  /* pretty-print only works on valid syntax! */
    > invalid syntax!

    syntax.load("<p><strong><emph>Hello</emph> world!<br/></strong></p>");
    syntax.prettyPrint(); /* pretty-print ignores non-tags */
    <p>
      <strong>
        <emph>
        </emph>
        <br/>
      </strong>
    </p>
    ```

3. Finally, override `public Queue<String> suggestFixes()`. What good is a syntax checker if it doesn't try to suggest possible fixes to malformed code? This method first grabs a queue of HTML tags (from calling your static method as before), and will return a *new Queue* of tags with fixes. The fixes can be the insertion of a missing tag, or the removal of a given tag that was in the wrong place. Here's how we'll tackle it. If the tag is void or a comment, then just enqueue it in the new queue. If it's an open tag, push it onto the stack and enqueue it in the new queue.

   Here's where things get tricky: If the next tag is a closing tag, then you have to first check if the stack is empty. If so, then this `</tag>` never had a corresponding opening tag -- therefore, enclose the `</tag>` in a comment like this: `<!-- </tag> removed! -->` and enqueue the comment (not the closing tag) in the new queue. On the other hand, if the stack was non-empty, you need to pop the opening `<tag>` from the stack to test if it matches the closing `</tag>`. If they match, then enqueue the closing `</tag>`. If they *don't match*, then surround the closing `</tag>` in a comment as we did before, and enqueue it. Furthermore, enqueue the *correct* closing tag! 

   Phew that was a lot, but there's one more fix! Once you've examined all the tags from the queue, you need to check to see if there are any extraneous openings left in the stack. For each, enqueue a corresponding closing `</tag>` for it.

   ```java
   HTMLValidator syntax = new HTMLValidator();
   syntax.load("</u><p><hello></yes><emph>Hello</emph> world!</i>");
   System.out.println(syntax.suggestFixes());
   > [<!-- </u> removed! -->, <p>, <hello>, <!-- </yes> removed! -->, </hello>, <emph>, </emph>, <!-- </i> removed! -->, </p>]

   syntax.

   syntax.load("<p> <strong><emph>Hello<br /></emph> world!</hello></p>");
   System.out.println(syntax.suggestFixes());
   > [<p>, <strong>, <emph>, <br />, </emph>, <!-- </hello>-->, </strong>, </p>]
   ```

#### Grading

```
MelodyPlayer Rubric

----------------------------------------------------------
[5 pts] Everywhere in your code, you are limited to using only the Stack<E> and
        Queue<E> methods. You are not allowed to use any method besides those
        specified in those interfaces, for instance, get(int i)

[5 pts] The play() method restores all the notes in the queue after playing.

[10 pts] changeTempo(): It takes a percentage (as a
        fraction, and multiplies the length of each note by this percentage).

[10 pts] append(): It appends the given Melodic structure
         to the current Melody.

[10 pts] reverse(): Uses a Stack<E> to reverse the current melody.

[25 pts] play() must properly handle repeated sections.

[10 pts] getDuration() returns the duration (including repeated sections!) of
         the melody.

----------------------------------------------------------
Fun Stuff:

[15 pts] You created your own song in a text file.

----------------------------------------------------------
[5 pts] Comments

> You include sufficient Javadocs comments for each class and method.

> You include sufficient inline comments in your methods.

Total: 100
```


<!-- ```
This assignment will be graded out of 2 points, provided that:

- You were in attendance and on-time.
- Your classes are fully implemented.
``` -->

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.
