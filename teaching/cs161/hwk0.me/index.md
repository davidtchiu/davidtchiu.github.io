## CS 161 - Intro to Computer Science

### Hwk: About Me

The purpose of this first assignment is to get you even more familiarized with BlueJ, and the submission process.

#### Student Outcomes

- To practice writing print statements.
- To practice homework submission.

#### Required Files

The following file(s) have been provided for this assignment.

- [Hwk0_AboutMe.zip](Hwk0_AboutMe.zip)

#### Instructions

Start by downloading a fresh copy of the starter file from the above link. Extract `Hwk0_AboutMe.zip`. **Windows users:** remember from Lab that you cannot simply double-click on the zip file to extract it! You must right-click on the file, and choose `Extract...`. (Mac users: you _can_ simply double-click on the zip file to extract it!) Commit this to memory!

- and open the project in BlueJ, and you should see a single class called `AboutMe` (orange box icon). Double click to open the source code editor.

- Once you have the editor open, you should see a code block that looks like the following:

  ```java
  public void printMyName() {

  }
  ```

  This block is called a **method** in Java. Let's dissect it a bit:

  - The method is basically our way of expressing an _algorithm_ in Java. For now, ignore the `public` and `void` keywords. We'll talk about them later in class.
  - **Method Name:** The name of this method is `printMyName`
  - **Parameter List:** Any input data that a method accepts is listed in between the set of parentheses `(` and `)` immediately following the method's name. (In this case, our method does _not_ accept any input data because the parameter list is empty.)
  - **Body:** Following the parameter list, we now see a set of curly braces `{` and `}`. The instructions of the `printMyName` algorithm goes in between these braces, as such, the algorithm is called the method's _body_.

- Most of the code you'll be writing in this class will be inside method bodies, so let's play with our first Java instruction: printing to the screen. The instruction to do this is:

  ```java
  System.out.println(stringYouWantPrinted);
  ```

- Go ahead and test this out. Write a print statement inside the body of the `printMyName` method to print out your name. Now be careful here... strings in Java are enclosed between a pair of double quotes, `"like this"`. If you tried to print out a your name without using the quotes, the code won't compile. (You should test that too, just to see how Java reacts!)

- After you're done with `printMyName`, it's time to test it. Save your code, and go back to the BlueJ project screen. Hit the `Compile` button, and if your code works, you shouldn't see any errors. Right click on the `AboutMe` class and choose `new AboutMe()`. You will see a new `Object` made on the "workbench." Right click and choose the `printMyName()` method. You should see your name printed to the screen. Let me know if you don't!

- Now create a new method called `printBday` that prints your birthday in `mm/dd/yyyy` format. For instance, someone born on Feb 26, 1980 would print `02/26/1980`. To create a new method, you can just copy the `printMyName` code. The new method block can go before or after the `printMyName` method. I would copy the code "by hand," instead of using copy-and-paste. Compile and test it out.

- Next, create a method called `printBio` that prints a short bio about yourself. 3-4 sentences ought to do. I want each sentence, however, on its own line in the output. There are two ways to do this, and I encourage you to try out both ways:

  - First way is the obvious one: You can simply use a separate print statement to print out each sentence. `System.out.println(...)` will insert a line break each time it's used.
  - Second way: Let's say you wanted to use only a single print statement. How would you insert a line break in your string? In Java, a line break character is denoted `\n`. Insert a few of those in your string to see what happens.
  - Compile and test it out.

- Finally, it sure would be nice to have a method that would print out your name, birthday, and bio **all at once**. Write a method called `printMyInfo`. Here's the key: You wouldn't want to have to rewrite all those print statements from before! (Code duplication should be avoided always!)

  Instead, We want to simply call (re-use) the other three methods you've just written. To call an existing method, you just have to write `methodName();`, e.g., `printMyName();` would cause Java to find and run the `printMyName` method. Here's an example of what someone's output might like:

  ```
  Grace Hopper
  12/09/1906
  Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral.
  One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers.
  Hopper was the first to devise the theory of machine-independent programming languages, and the FLOW-MATIC programming language she created using this theory was later extended to create COBOL, an early high-level programming language still in use today.
  ```

#### Grading

```
This assignment will be graded out of a total of 22pts.

[3pts] Correct implementation of the printMyName.

[3pts] Correct implementation of printBio.

[3pts] Correct implementation of printBday.

[3pts] Correct implementation of printMyInfo.

[10pts] Correctly zipped and submitted your assignment (see below).
       Check with me or with tutors if you're not sure!

```

#### Submitting Your Assignment

After you have completed the assignment, use the following to submit your work.
Exit BlueJ

- Open your computer's File Finder (sometimes called File Explorer). Locate the project folder.

- Right-click on the project folder, then:

  - If using Windows, select Send to then Zip file
  - If using MacOS, select Compress ... items
  - This step takes your selected creates a .zip file that you will submit to me.

  It's really important you got this right. If you have doubts, ask one of us to check for you! I recommend that you double-check by opening the zip file, and investigating the contents to ensure that all the files are in there.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting.

- Click on Submit Assignment, and you should be able to "browse" for your file

- Select the `.zip` you just created, and click Submit Assignment again to upload it.

- You may submit as often as you'd like before the deadline. I will grade the most recent copy.
