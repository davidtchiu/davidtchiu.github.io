## CS 261 - Computer Science II

### Homework 5: HTML Tag Validator
HTML (hypertext markup language) is the language of the web. It describes the structure of a webpage using elements called "tags." These tags mark where different parts of the page start and end --- things like headings, paragraphs, bold text, images, and more. Most HTML elements consist of two tags:

- An opening tag, like `<p>` or `<div>`
- A closing tag, like` </p>` or `</div>`

These tags must be properly nested, like parentheses in Java expressions. That means if you open a tag inside another, you must close it before closing the outer one.

#### Proper Nesting Rules
When writing HTML:
- Every opening tag (like `<div>`) must be matched by a closing tag (like `</div>`).
- "Void" tags (like `<br />`) and comments (like `<!-- this is a comment -->`) do not need to be matched — they stand alone.
- If tags are mismatched or missing, the HTML is said to be not properly nested.


**✔ Example 1: Properly nested**
```html
<div><p><b>Text</b></p></div>
```

**❌ Example 2: Incorrect nesting**
```html
<div><p><b>Text</p></b></div>
```
`<b>` is closed after `</p>`, which is incorrect.

**❌ Example 3: Extraenous closing tag**
```html
</div><p>Paragraph</p>
```
There’s a `</div>` tag that never had a corresponding `<div>`.

In this assignment, you’ll write a class that can:
- Check if a given HTML string is properly nested (isProperlyNested)
- Suggest corrections for invalid nesting (suggestFixes)
- Print tags with indentation to show structure (prettyPrint)

You’ll use a `Queue` to store the tags in order, and a `Stack` to track nesting. We’ve provided code that breaks a string into a sequence of HTML-like tags for you — no parsing required!



#### Objectives
- Use a `Stack` to check proper nesting of HTML tags
- Use a `Queue` to hold tags in the order they appear
- Reinforce string traversal, abstraction, and debugging through nested data

#### Required Files
There are no required files. You will be writing the following classes from scratch:
- `TagReader.java` — parses HTML input into tags
- `HtmlValidator.java` — checks whether the tags are properly nested




#### Part 1: Writing the HTML Tag Parser (TagReader)

Create a new class called `TagReader.java`. This class provides a single static method `extractTags()` that takes a raw HTML string (with content and tags mixed in) and extracts the tags in the order in which they appear, storing them in a `Queue<String>`. 

```java
public class TagReader {

    /**
     * Extracts and returns all HTML tags in the order they appear in the string.
     * Tags are anything between '<' and '>' characters.
     * Ignores all text outside of tags.
     */
    public static Queue<String> extractTags(String html) {
        // TODO: Implement this method
        // Use a loop to scan the string and extract substrings between '<' and '>'
        // For each found tag, add it to a LinkedList<String> as a Queue
        return null; // replace with real queue
    }
}
```

Hints: The `html` is stored as a string, so have the entire String API at our disposal.
- `html.split()` is not effective here, because tags aren't necessarily separated by spaces.
- Use the 2-argument `html.indexOf("<", i)` to find opening (or `">"` to find closing) angle brackets.
- Use the 2-argument `html.substring(start, end + 1)` to extract tags from the file.

If you got this class working, your output should match mine below:

```java
import java.util.Queue;
Queue<String> allTags = TagReader.extractTags("<p><strong><emph>Hello</emph> world!</strong></p>");
System.out.println(allTags);
> [<p>, <strong>, <emph>, </emph>, </strong>, </p>]

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
