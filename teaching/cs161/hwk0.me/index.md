## CS 161 - Intro to Computer Science

### Hwk: About Me

The purpose of this first assignment is to get you even more familiarized with the BlueJ coding editor and with the code-submission process.

#### Student Outcomes

- To download and use Google Drive for storing and backing up your code.
- To set up your programming environment.
- To practice writing print statements.
- To practice homework submission.

#### Required Files

The following file(s) have been provided for this assignment.

- [Hwk_AboutMe.zip](Hwk_AboutMe.zip)

#### Getting Started: Setting up

1. Start by downloading a fresh copy of the starter file from the above link. Extract `Hwk_AboutMe.zip`. Place it into your folder for this class, preferably within Google Drive. Then extract the contents of this folder:

   - **Windows users:** remember from Lab that you cannot simply double-click on the zip file to extract it! You must right-click on the file, and choose `Extract...`. Remember where you choose to extract its content.
   - **Mac users:** you can simply double-click on the zip file to extract it!

2. Navigate into the folder, and double-click the file called `package.bluej` (It should look like a small blue jay icon.) This should open the project inside the BlueJ code editor, and you should see a single icon called `AboutMe` (looks like an orange box).

3. Before you do anything else, let's customize your BlueJ environment:

   - From the menu bar on top, select `Tools` then `Preferences`.
   - Enable the `Display Line Numbers` setting. You can also enlarge the font size, so that you code might be easier on the eyes. Click OK.
   - Now click on the `View` menu bar. Make sure `Show Code Pad` is selected. Click OK to exit.

4. You should be back to the project overview window that shows the `AboutMe` orange (class) icon. Double-click on it to open the code editor. Verify that the line numbers are showing up to the left margin, and that the font is appropriate.


#### Instructions

1. Once you have the code editor open for `AboutMe`, you should see the following code block:

   ```java
   public void printMyName() {
     // TODO: First line of your code goes here (remove this "line comment" later)
   }
   ```

   The above code block is called a **method** in Java. Let's dissect it:

      - The method is our way of expressing an _algorithm_. For now, ignore the `public` and `void` keywords. We'll talk about them later.
      - **Method Name:** The name of this method is `printMyName`
      - **Parameter List:** The pair of parentheses `()` following the method's name are used to enclose any inputs that may be accepted for this method. In this case, our method does _not_ accept any input data, so the parentheses simply open and close, enclosing no inputs.
      - **Body:** Following the parameter list, we now see a pair of "curly" braces `{` and `}` on different lines. All the instructions of your algorithm must go in between the pair of curly braces. The first instruction would go where the "TODO" line currently is. Each instruction should be placed on a separate line below it.
      - **Line Comment:** I put a _comment_ inside the body (the "TODO" line). In Java, anything that follows `//`  is ignored. This makes it easy for programmers to make notes about their code. Clear and effective commenting is imperative in good programming, and will be emphasized in this course. I've used a line comment here to direct your attention to where you need to start writing your code. You can remove that line comment later.

2. Most of the code you'll be writing in this class will be inside method bodies, so let's test out our very first Java instruction: printing something to the screen. The syntax to print a something to the screen is:

   ```java
   System.out.println(thing-you-want-printed);
   ```

   When coding, a sequence of letters is called a _String_. Strings in Java are always enclosed between a pair of double quotes, `"like this"`. If you tried to print out your name without using the quotes, the code won't compile.

3. Go ahead and test this instruction out. Write a print statement inside the body of the `printMyName()` method to print out your name.

4. After you're done with `printMyName()`, it's time to test it out. Save your code, and go back to the BlueJ project window (the one with all the orange boxes). Hit the `Compile` button on your left. If coded it right, you shouldn't see any compile errors. Right click on the `AboutMe` class and choose `new AboutMe()`. You will see a new `Object` made on the "workbench" below. Right-click on the new object and choose the `printMyName()` method. You should see your name printed to the screen. Now go back to the code and remove the quotes around your name to see how Java reacts. It _should_ inform you of the problem.

   - Yay! You just wrote your first method!

5. Now create a new method called `printBday()` that prints your birthday in `mm/dd/yyyy` format (you can make this up -- I don't need to know your real birthday, LOL). For instance, someone born on February 26, 2000 would print `02/26/2000`. To create a new method, you can just copy the `printMyName()` code. The new method can go before or after the `printMyName()` method block. I would type out the code for this method "by hand," instead of using copy-and-paste. Compile and test it out.

   - Did the print-out from the previous interactions get reset when you called `printBday()`? Don't worry, there's an easy way to change that behavior. Click anywhere on the output screen, and from the menu up top, click `Options` then uncheck `Clear screen at method call`. This should save all the outputs on the screen from before.

   - Saving old outputs on the screen *will* get annoying though, when your programs get more complicated. So just remember that you can always re-enable this option.

6. Let's try something a little more involved. Write a method called `printInitials()` that prints out your first, middle (if applicable), and last initials in "block form" (see how I printed mine below). There's not a pre-built command print a design like this, so you'll need to do it yourself! Notice the formatting below --- mine has multiple rows that I need to print out. Mine also uses the letter itself to create the block shape. For instance, my initials, DTC, might be output as follows:

   ```
   DDDDDD   TTTTTTTTT   CCCCCC
   DD  DDD     TTT     CC
   DD  DDD     TTT     CC
   DDDDDD      TTT      CCCCCC
   ```

   - The first way to do this is perhaps the obvious way: You can simply call `System.out.println(...)` multiple times, one for each "row" of the print-out. Each call will automatically insert a line-break.
   - Second way: Let's say you wanted to use only a _single_  statement to print out multiple lines. How would you insert a "line break" in your string? In Java, a line-break character is denoted with the sequence `\n`. Insert a few of those in your string to see what happens in the output.
   - Compile and test it out.

7. Next, create a new method called `printBio()` that prints a short bio about yourself. 3-4 sentences ought to do. I want each sentence on its own line in the output. For instance, mine might print:

    ```
    I am a professor of computer science at University of Puget Sound.
    I started teaching here in 2014.
    I live in Tacoma, WA.
    ```

8. Finally, it sure would be nice to have a method that would print out your initials, your name, birthday, and bio **all at once**, instead of having to call separate methods. Write a method called `printMyInfo()`. Here's the key: You wouldn't want to have to _rewrite_ all those print statements from before! (Pro-tip: Code duplication should be avoided --- always!)

    - Instead, We want to simply call (re-use) the other three methods you've already written. To **call** an existing method from the code itself, you just have to write `methodName();` in the body of `printMyInfo()`.

    Here's an example of what someone's output might like after calling `printMyInfo()`:

    ```
     GGGGGGGG   HHH   HHH
    GG      GG  HHH   HHH
    GG          HHHHHHHHH
    GG   GGGGG  HHH   HHH
     GGGGGGG G  HHH   HHH

    Grace Hopper
    12/09/1906
    Grace Brewster Murray Hopper was an American computer scientist and 
    United States Navy rear admiral. One of the first programmers of the 
    Harvard Mark I computer, she was a pioneer of computer programming 
    who invented one of the first linkers.
    
    Hopper was the first to devise the theory of machine-independent 
    programming languages, and the FLOW-MATIC programming language she 
    created using this theory was later extended to create COBOL, an 
    early high-level programming language still in use today.
    ```

9. Feel free to play with it more and customize your outputs however you like. You're free to add as many methods or statements as you like! Experiment with things like:

      - How would you print out a "tab?"
      - How would you print out a double quote (")?
      - What if you didn't want `System.out.println(...)` to automatically insert a line-break at the end of the line? Is there another method to print without a line break?


#### How to Submit

1. **Final check:** It's important to note that everything you write in Java is case-sensitive. You _must_ adhere to the proper casing. For instance, when I specify that your method should be named `printMyName()`, you should not name it `printmyname()`. Typos, using the wrong name, or wrong case will screw up our automatic _grading_ tool.

    - Go back to make sure your methods adhere to my given specification.
    - Remember to do this for all remaining homework and labs.

2. **Submission:** Exit out of BlueJ. Then from your operating system's file finder or file explorer, navigate to the folder that you previously extracted. If you did everything correctly, this folder should be somewhere in your Google Drive. It should contain files like these:
    - `AboutMe.class`
    - `AboutMe.java`
    - `package.bluej`
    - `README.txt`

3. For this assignment, you only need to locate the file, `AboutMe.java`. This is called your *source code*, and it contains all the code you just wrote! Now go to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."
   
    - Upload this filefrom your project folder.
    - Click "Submit Assignment" again to save.
    - Feel free to write me an email to ensure that I received the right file on my end.

#### Grading

```
This assignment will be graded out of a total of 25pts.

[3pts] Implementation of the printMyName() method and printBday() method.

[3pts] Implementation of the printInitials() method.

[3pts] Implementation of printBio().

[3pts] Implementation of printMyInfo(). This method should
       not duplicate any code that you had previously written
       (i.e., the print statements). This method should simply call
       the existing methods that you'd written.

[3pts] Your method names adhere to my specification, down to the
       casing (upper case, lower case) of each individual character.
       Check and fix any typos and inconsistent casing before submission.

[10pts] Submitted your assignment as per the instructions. Check with me 
or with tutors if you're not sure!
```
