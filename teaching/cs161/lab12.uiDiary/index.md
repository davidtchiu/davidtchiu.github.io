## CS 161 - Intro to Computer Science

### Lab 12: An Interactive Diary
<img src="figures/diary.png" width="400px" />

#### Student Outcomes

- Use of the Scanner object for obtaining user input.
- Experience with String parsing.
- Experience with try-catch.


#### Preliminary

Open up the enclosed project file to find the `Diary` class and a `DiaryUI` class. Before starting, peruse over the Diary source code recall all the methods it supports.

Take note of the public methods in `Diary`, and how to use them. Create a Diary object, and call some methods to remind yourself of what every method does.

#### Requirements
The Diary is somewhat hard to use simply by pointing-and-clicking to call its methods. The goal of this assignment is to build a user-interface (UI) for users to interact with their Diary. You will be using the Scanner class, among other things, to get this going.

1. Open up the `DiaryUI` class to find the skeleton code that's been provided. As you can see, there's only one method, called `start()`, that you will need to modify for this lab. 

2. Take a look at the figure below to get an understanding of how the UI is supposed to behave after its `start()` method is called. 
    ```
    You are using the Diary App!

    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: new
    What's on your mind? Dear diary, today I learned about Scanners. I like them a lot.


    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: new
    What's on your mind? DDDDear ddiary, yesterday I learned canners. I like them even moe now.


    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: print
    #0: Dear diary, today I learned about Scanners. I like them a lot.
    #1: DDDDear ddiary, yesterday I learned canners. I like them even moe now.


    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: edit
    Please enter the entry number you want to edit: 1
    Please enter the new entry: Dear diary, yesterday I learned about Scanners. I like them even more today.


    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: print
    #0: Dear diary, today I learned about Scanners. I like them a lot.
    #1: Dear diary, yesterday I learned about Scanners. I like them even more today.


    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: search
    Enter the keyword: yesterday
    1 match(es) found!
    Dear diary, yesterday I learned about Scanners. I like them even more today.


    The Diary App supports the following commands.
    'new': write a new entry
    'edit': modify an existing entry
    'search': perform a keyword search
    'print': prints out all entries of your diary
    'quit'
    Your command: quit
    Thanks for using diary!
    ```

3. Inside `start()`, you need to create a `Scanner` object in order to capture user inputs. Recall you can create `Scanners`, you first need to:

    ```java
    import java.util.Scanner;
    ```
    on the top of your file.

    Now create a scanner object immediately following the welcome message, connected to the user's keyboard device. It's a bit to memorize, so here it is:

    ```java
    Scanner keyboard = new Scanner(System.in);
    ```

4. Directly following the scanner line, create a string variable to capture the command that the user inputs. Set the variable to `""` for now. Then write a while loop that runs as long as this string variable is not equal to `quit`. Most of your work will go inside this loop.
   - Recall that using `==` is no good for testing a string's equality! You must use the `.equals()` or `.equalsIgnoreCase()` method instead.

5. The first thing you need to do in the loop is to print out the menu options. Go ahead and do so now. That method is already provided. Note that the *only* valid commands are: `new`, `edit`, `print`, `quit`, and `search`. (All other commands shall be ignored.)

6. Next, write the code to assign the scanned user input into your string variable. Recall that the scanner object will cause the code to wait (indefinitely until something is entered!)

7. Afterwards, you need to check what the user actually input as their command. Let's test to see if a user entered the command `new`. When this is the case, you need to prompt the user for a new diary entry ("What's on your mind?"). You need to use the scanner again to capture the new entry. Once you have it, add it to the `Diary`.

   - Abstraction: While we know that `Diary` internally keeps a list of entries, we don't really care about its details, nor do we need access to this list. This is because `Diary` gives us an easy way to save an entry through its `writeEntry()` method.

   - Call this method on `myDiary` to save the entry.

   - After you've implemented the `new` command, test it out. Create a `DiaryUI` object and call `start()`. Make sure it prints the welcome banner and prompts with the menu options. Type `new` in the terminal to see if it allows you to add a new entry. To see if the entry's been successfully added, You can double-click on the `DiaryUI` object, and follow the pointer in `myDiary`. Inside it, look for the ArrayList of strings, and check to see if your new entry is stored within.


8. Now work on the `print` command. In the same way as shown above, you need to check if the user's command was `print`. If so, you just need to call the Diary method to print all its entries! (This one's easy!)

    - Test this out too. First use `new` to write a couple entries. Then use `print` and see if both entries are printed to the screen!

9. Now work on supporting the `edit` command. This one's a bit more challenging. If you take a peek over at the `edit()` method in the `Diary` class, you'll note that you need two pieces of information to call it: (1) an integer specifying the diary entry, and (2) the replacement entry. First, ask the user for the entry number that they want to modify, followed by a second ask for the replacement entry. But here's the catch: everything that gets read in by the scanner is a `String`. How do you convert a `String` into an `int`? Type-casting won't work!

    - To convert from string to int, you need to call Java's built-in method, 
      ```java 
      Integer.parseInt(some-string)
      ```
      which inputs a string like `"33"` and returns the int `33`!!

    - Here's the "catch" though. What if the user screws up and enters a non-number here like, `"ABCD"`? When that's the case, what's there to convert into an `int`? Java would raise an exception (specifically, a `NumberFormatException`) and crash the program. Instead, you need to catch this potential exception, and alert the user, circumventing a program crash! We can do this with a `try-catch` clause.

10. Recall the syntax to write a try-catch clause:
    ```java
    try {
      // potentially risky instructions here
    }
    catch (NumberFormatException e) {
      // alert the user that they entered a non-numerical value
    }
    ```

11. After you've successfully converted their entry number into an int, grab the replacement entry from them, and call the `edit()` method on your diary. (Yes all of that goes inside the `try` clause). Test it out!

12. Now work on the `search` command, which should further prompt the user to enter a keyword. Run the `search()` method on your Diary object to return a list of entries that match the given keyword. Your code should first print how many matches were found (ask the list that was returned!) and print out all of the matching entries.

13. Finally, test if the command was entered as `quit`. You should output a good bye message here.

14. After you're done, make sure you're closing out the scanner object outside the while loop.

#### Refactoring for a New Feature
1. Your customers say that they like this app, but demand a new menu option! They would you to add a new menu command `random` (yes, first add this option to your `printMenu()` code). Now go in your loop to add the code to print out a random diary entry.

2. Recalling from lecture how to obtain a random element from a list, you know that you need to generate a random number between 0 (inclusive) and the size of the diary (exclusive). Once you've done this, it's easy to see how you would ask your diary to return an entry using `getEntry()`. 

3. But there's no method in the `Diary` class that tells you its size (i.e. the number of entries it stores)! Go into the `Diary` class to add a `countEntries()` method to simply return the number of entries in its ArrayList.

4. Now back in your DiaryUI, use the `countEntries()` method to obtain the size of your diary. Using this, you can now generate a random entry number.

#### Other Considerations:
- **Undoing (Very Mild)** There's another method in Diary that we never supported in our UI, called `undo()`. If you have time, add support for this method too.

- **Deleting (Medium)** Go back into `Diary` and add a method to remove an entry given its entry number. Then add in a new command in `DiaryUI` called `delete`. It just needs to further prompt the user for an entry number to remove. (Yes, you have to convert their input into an int, just like you did for `edit`.)

- **Reordering Entries (Spicy)** How would you go about reordering entries? Say you wanted to swap the positions of two entries. What `Diary` method would you have to write? Then how do you add this feature to your UI?

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.


#### Grading

```
This assignment will be graded out of 2 points, provided that:
- You were in attendance and on-time.
- Completed all required methods.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu.
