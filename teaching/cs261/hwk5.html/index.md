## CS 261 - Computer Science II

### Homework 5: HTML Tag Validator
HTML (hypertext markup language) is the language of the web. It is the standard language used to create and structure content on the web. Every webpage (and many mobile apps) you visit is built using HTML, and it defines how content is grouped and displayed. HTML uses *tags* to mark different parts of a page — like paragraphs, headings, images, lists, links, and more.

#### Basic Structure of an HTML Document
An HTML document consists of nested elements, where tags wrap around content and other tags. Every page starts with a `<html>` tag, and usually includes a `<head>` section (for metadata like the page title and information a search engine can use) and a `<body>` section (which contains what appears on the screen).

Here’s a simplified example:
```html
<html>
  <head>
    <title>Welcome!</title>
  </head>
  <body>
    <h1>Main Title</h1>
    <p>
      This is a paragraph with <b>bold</b> text.
    </p>
    <br/>
  </body>
</html>
```
In this example:
`<html>`, `<head>`, `<body>`,` <h1>`, `<p>`, and` <b>` are **open tags.** Each open tag must have a corresponding close tag (`</html>`, `</p>`, etc.) On the other hand, `<br/>` is called a void tag, meaning it stands alone and doesn't need a closing tag

Web browsers are surprisingly forgiving — they'll try to render a page even if your tags aren't matched correctly. But behind the scenes, improper nesting can cause: Unexpected layout issues, broken page structure, problems for screen readers, and so on.

In this assignment, you'll write an HTML validator that checks structural correctness, using `Stacks` and `Queues` to manage and examine tags in order.


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
Notice that each open tag is closed with respect to nested ordering. The exception is that void tag, `<br/>` that stands alone and does not need to be matched.

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
- [TagReader.java](TagReader.java) — parses HTML input into tags
- [Syntax.java](Syntax.java) - an interface for you to implement
- [HTMLValidator.java](HTMLValidator.java) — checks whether the tags are properly nested. Implements the `Syntax` interface.


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
[<p>, <strong>, <emph>, </emph>, </strong>, </p>]

Queue<String> myTags2 = TagReader.extractTags("<p>  <strong><emph><hr/><br/><br/>Hello<br /></emph> world!</hello></p>");
System.out.println(myTags2);
[<p>, <strong>, <emph>, <hr/>, <br/>, <br/>, <br/>, </emph>, </hello>, </p>]
```

#### Part 2: HTML Syntax Validator
Open the given `HTMLValidator` class which implements the `Syntax` interface. Note that it does not hold the original code string -- instead, it stores a `Queue` of tags. Read over the abstract methods and the private helper methods that have been given to understand what they do. All the methods below require that you use both a `Queue` and `Stack`, so you might want to refresh yourself of their API. 

**Important:** In all the methods below, you must preserve the contents of the original `Queue` of tags. One easy way to do this is to make a copy before processing it. For instance, you can create a copy like this:
```java
Queue<String> copyOfQueue = new LinkedList<>(originalQueue);
```
This lets you safely modify `copyOfQueue` without affecting the `originalQueue`.

##### Requirements

1. Override the method `public boolean isProperlyNested()`. For each tag in the queue:
    For each **opening tag**, `push()` it onto a stack.
    
    For each **closing tag**:
    - If the stack is empty: reject — this means there's no matching open tag.
    - Otherwise, `pop()` the most recent opening tag from the stack.
      - Use the helper method `tagsMatch()` to check if they match. If they don't, reject.
    
    Ignore all **void tag** and **comment**.
    - After processing all tags:
      - If the stack is not empty, reject — this means there are unclosed tags.
      - If the stack is empty, accept the input as valid.

    ```java
    HTMLValidator syntax = new HTMLValidator();
    syntax.set(TagReader.extractTags("</u><p><hello></yes><emph>Hello</emph> world!</i>"));
    System.out.println(syntax.isProperlyNested());
    > false

    syntax.set(TagReader.extractTags("<p> <strong><emph>Hello<br /></emph> world!</hello></p>"));
    System.out.println(syntax.isProperlyNested());
    > false
      
    syntax.set(TagReader.extractTags("<p><strong><emph>Hello</emph> world!</strong></p>"));
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
    syntax.set(TagReader.extractTags("</u><p><hello></yes><emph>Hello</emph> world!</i>"));
    syntax.prettyPrint();  /* pretty-print only works on valid syntax! */
    > invalid syntax!

    syntax.set(TagReader.extractTags("<p><strong><emph>Hello</emph> world!<br/></strong></p>"));
    syntax.prettyPrint(); /* pretty-print ignores non-tags */
    <p>
      <strong>
        <emph>
        </emph>
        <br/>
      </strong>
    </p>
    ```

3. Finally, override `public Queue<String> suggestFixes()`. What good is a syntax checker if it doesn't try to suggest possible fixes to malformed code? This method fixes malformed HTML by returning a new `Queue` that includes inserted or commented-out tags where needed to correct nesting errors. You will first need to create:

    - A `Stack<String>` to track open tags.
    - A `Queue<String>` to build and return your corrected tag sequence.
    - Remember to copy the original queue for iteration.

    As before, process each tag in FIFO order:
    - For each **void tag** and **comment**: Just enqueue it in the new queue.
    - For each **open tag**:
      - Push it onto the stack.
      - Enqueue it into the new queue.
    - If it's a **closing tag**:
      - Test if the stack is empty (invalid!)
        - It means there’s no matching open tag. Enqueue a comment like:
          `<!-- </tag> removed! -->`
        - (Do not enqueue the invalid closing tag.)
      - If the stack was not empty:
        - Pop the most recent open tag from the stack.
        - If it matches the closing tag, enqueue the closing tag.
        - If it doesn't match:
          - Comment out the invalid closing tag as shown above.
          - Enqueue the correct closing tag for the open tag you just popped (e.g., if you popped `<div>`, enqueue `</div>`).
    - After processing all tags from the original queue:
      - There may still be open tags left in the stack. For each one, enqueue a corresponding closing tag (e.g., `</div>`) to close any remaining unclosed tags.

   ```java
   HTMLValidator syntax = new HTMLValidator();

   /* un-matched </hello> tag fixed */
   syntax.set(TagReader.extractTags("<p> <strong><emph>Hello<br /></emph> world!</hello></p>"));
   syntax.prettyPrint();
   > invalid syntax!

   syntax.set(syntax.suggestFixes());
   syntax.prettyPrint();
   <p>
     <strong>
       <emph>
         <br />
       </emph>
       <!-- </hello> removed -->
     </strong>
   </p>

   /* un-matched </u>, </yes>, </i> tag fixed */
   /* closing </hello> tag added */
   syntax.set(TagReader.extractTags("</u><p><hello></yes><emph>Hello</emph> world!</i>"));
   syntax.prettyPrint();
   > invalid syntax!
   
   /* fix the syntax and set it! */
   syntax.set(syntax.suggestFixes());
   syntax.prettyPrint();
   <!-- </u> removed -->
   <p>
     <hello>
       <!-- </yes> removed -->
     </hello>
     <emph>
     </emph>
     <!-- </i> removed -->
   </p>

   /* this syntax is sound */
   syntax.set(TagReader.extractTags("<p><strong><emph>Hello</emph> world!<br/></strong></p>"));
   syntax.prettyPrint();
    <p>
      <strong>
        <emph>
        </emph>
        <br/>
      </strong>
    </p>

   /* syntax was sound -- no fixes suggested! */
   syntax.set(syntax.suggestFixes());
   syntax.prettyPrint();   
    <p>
      <strong>
        <emph>
        </emph>
        <br/>
      </strong>
    </p>
   ```

#### Grading

```
HTM LValidator Assignment Rubric (80 points total)

[25 pts] isProperlyNested()
> Uses a Stack to manage nesting correctly (no List-style access) (5 pts)
> Processes tags in FIFO order using a Queue copy (5 pts)
> Correctly handles matching open/close tags using tagsMatch() (5 pts)
> Properly ignores void tags (e.g., <br/>) (3 pts)
> Rejects on extra closing tags (stack empty) or mismatches (3 pts)
> Returns false if any tags are left open at the end (stack not empty) (4 pts)

----------------------------------------------------------

[30 pts] suggestFixes() (30 points)
> Uses both Queue and Stack correctly (no List methods like get(i)) (5 pts)
> Preserves order of tags in output where no fix is needed (3 pts)
> Detects unmatched closing tags and inserts correct comment (5 pts)
> Detects mismatched closing tags, inserts correct comment and correct closing tag (5 pts)
> Inserts missing closing tags for leftover open tags in stack at the end (5 pts)
> Does not remove valid tags — only inserts or comments to fix structure (5 pts)
> Returns a new queue (does not modify original queue directly) (2 pts)

----------------------------------------------------------

[20pts] prettyPrint()
> Calls isProperlyNested() and exits early with "invalid syntax" if false (4 pts)
> Correctly tracks indentation level using Stack size (4 pts)
> Indents each tag by 2×nesting level spaces (4 pts)
> Pushes open tags and pops on matching close tags (4 pts)
> Void tags are printed with correct indentation but not pushed/popped (4 pts)

----------------------------------------------------------
Misc.

- Abstraction Violations (Up to -10 pts per method!)
If student accesses elements in a stack/queue using non-abstract methods 
like get(i), remove(i), or peek(index), take up to 10 points off across 
affected methods. These are meant to be FIFO (Queue) and LIFO (Stack), 
not general-purpose Lists!!

----------------------------------------------------------

[5 pts] Comments and Style (5 points)

> Code is clearly formatted and indented (2 pts)

> Descriptive comments explain purpose of methods and tricky logic (2 pts)

> Variables and method names follow Java conventions and are meaningful (1 pt)
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.
