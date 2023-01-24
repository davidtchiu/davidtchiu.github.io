## CS 161 - Intro to Computer Science

### Lab: Variables and Scope

In this lab, you'll get familiarized with the concepts of data types, variables, assignment statements, and scope. You'll be modifying the `Triangle` shape class to add some functionalities.

#### Student Outcomes

- To understand variable assignment statements
- To understand the difference between local and object (instance) scope
- To understand the lifetime of certain variables


#### Required Files

The following file(s) have been provided for this lab.

- [Lab2_Triangle.zip](Lab2_Triangle.zip)

#### Preliminary

You might've already done this, but just in case, let's take some time to customize your BlueJ environment:

- Open up the project you just downloaded in BlueJ,
- If you're on _Windows_, go to the `Tools` menu on the top, and click `Preferences`. If you're on a _Mac_, from the `BlueJ` menu on the top, select `Preferences`.
- The `Editor` tab should already be selected. Please select the `Display Line Numbers` setting. You can also enlarge the font size, so that you code might be easier on the eyes. Click OK to exit.
  - If you're on a Windows machine, you can get to `Preferences` from the `Tools` menu on top.
- Now click on the `View` menu on the top. Please make sure `Show Code Pad` is selected.
- That should be it for now. Go ahead and start reading the lab assignment with your partner.

#### Part 1: Instance Variables

**Read this, don't skim**

In Java (and all other programming languages), a variable refers to some unit of storage with a name. Before you can use a variable, the programmer must first declare what kind of data a particular variable can store and then the programmer should give it a good name to avoid confusion later. You have already seen several common data types: `int`, `double`, `String`, `char`, and `boolean` (yes, these are case sensitive).

The particular variable that we have been using thus far in lectures is used to store an object's state. We call these fields (or instance variables). Later in lab, we'll introduce you to a couple other types of variables, each with different usages. Recall the basic class syntax, shown below.

```java
/**
 * Some comment about the class as a whole.
 * @author David
 */
public class SomeClassName {
    /* FIELDS (INSTANCE VARIABLES) GO HERE */

    /* CONSTRUCTORS GO HERE */

    /* METHODS GO HERE */
}
```

You can declare any number of instance variables to store your object's state. Any time you need an instance variable, you must first declare it using the following syntax:

```java
private dataType variableName;
```

For instance, I might declare `private int speed;` to store the current speed of my vehicle objects. I could declare `private String firstName;` to store the first name of `Student` objects.

1. Modify the `Triangle` class to store a new instance variable, its `area` and its `perimeter`. It doesn't matter if they go first or last in line of your instance-variable section. Before you declare each one, you ought to be thinking ahead --- what kind of data do they hold? Integers? Strings? Doubles? Choose the right data type, and declare them now.

2. Back in the BlueJ workbench, create a new `Triangle` instance and inspect its state by double clicking it. You should see the two new instance variables you just declared, but alas, they are showing up as zeroes.

    - It's important to use this moment to reflect. Even though you gave these fields good names, they don't just magically get values. (Computers have no insight, remember?)

    - It's up to *you* to assign values to these fields. Let's do so now.

3. Let's start by thinking about all the places where the `area` and `perimeter` need to be updated.

    - One place is in the code that runs when `Triangles` get created -- Remember that we called the object-creation code the class' **constructor**. Find the constructor, which appears as follows, and usually appears right after all your instance variables:

      ```java
      public Triangle() {
        ...
      }
      ```

    - Update the constructor to assign values to `area` and `perimeter`.

      - Recall that the syntax to assign a value to a variable is: `variableName = expr;`, where `expr` is any algebraic expression. For instance, if I were inputing the area of a *square*, the expression would be `width * length;` (assuming `width` and `length` are the instance variable's names.)

      - You may want to lookup (on Google) how to find the area and perimeter of an isosceles triangle, given its height and width.

      - You'll need know this for calculating the perimeter. If you need to take the square root of a value `x`, you can use the built-in Java function `Math.sqrt(x)`. Also, to take `x` to the `y`th power ($$x^y$$), you can use `Math.pow(x,y)`

4. Create a new `Triangle` to see if your `area` and `perimeter` fields are now populating. If you did everything above correctly, you should've gotten 600.0 for area and 140.0 for perimeter.

5. But is this the only place where a triangle's `area` and `perimeter` need to be updated? Scroll further down the source code and see if there are any methods that might require the `area` and `perimeter` to be updated. Put in the assignment statements in those method(s) as well. Test again to make sure everything's working.

#### Part II: Local Variables
We know that instance variables store an object's current *state*. But that's not the only kind of variable that exists. In Java, there are actually four kinds:
  - Instance Variables: Used to store an object's state. Exists until the object is removed (or when your program terminates).
  - Local Variables: Used for temporary storage within a method or constructor. Exists until you exit the segment of code (enclosed between curly braces `{` ... `}`) in which the local variable was declared.
  - Input Parameters: Used for accepting input to a method or constructor. Exists until you exit the method or construct.
  - Static Variables (We'll cover these later in the semester)

In this section, let's focus on local variables, so you can appreciate when they should be used.

1. Find the `moveHorizontal()` method in your source code. Suppose we now want the Triangle to output (print) its *old* coordinate position after you call `moveHorizontal()` to move it. Here's what it should look like:
    ```java
    public void moveHorizontal(int distance) {
        erase();
        xPosition += distance;
        draw();
    }
    ```
    - Studying its algorithm, this method does nothing more than simply erasing the Triangle off the canvas, updating the `xPosition` of its instance state, then re-drawing the Triangle on the canvas. The erasing and re-drawing happens to quickly that your eyes don't perceive it.

2. If you wanted to print its old position, then we need to *save* its x and y positions *before* they get updated. To save the current positions, we'll need to introduce two variables (again, it's up to you to determine what the data types should be for the 2 variables.)

3. For now, go ahead and add two instance variables near the top of the source code, and you can name them `oldXPosition` and `oldYPosition`.

4. Then go back in your `moveHorizontal()` method, and assign the current x and y positions to the `oldXPosition` and `oldYPosition` instance variables. I would do these assignment statements before `erase()` is called.

5. Now, under `draw()`, print out the old positions and the new positions. Recall that, to print something to the screen, you can use this syntax:

    ```java
    System.out.println("stringYouWantToPrint");
    ```
    But if you need to evaluate variables in your print-out, then you need to concatenate (`+`) the variables to the string you want printed. For instance:
    ```java
    System.out.println("stringYouWantToPrint" + someVariable + "moreString" + anotherVariable);
    ```

    For instance, the following will print something to the effect of: `Old X: 50` on one line.
    ```java
    System.out.println("Old X: " + oldXPosition);
    ```
    Play with the string to print both old X and old Y on the same line.


6. Test it out, and see if everything's working. 

7. Once everything checks out, inspect the `Triangle`'s state and you should see the `oldXPosition` and `oldYPosition` instance variables. **But this begs the question.** Why are these stored as part of a Triangle's current state? 

    You should always ask yourself these questions when you have introduce new variables:
    - Would the object benefit from memorizing and carrying these new values in the future? Should they be an intrinsic part of the object's state of existence?
    - Are the new variables used in only one or two methods, and serve no purpose elsewhere?
    - It is okay for these variables to be destroyed as soon as the method exits?

8. The purpose of these questions is to gauge whether you need variables that are "global" (and accessible by any method) or just "local" to each method.

    - In our case, `oldXPosition` and `oldYPosition` serve a very specific purpose, inside only 1 method!
    - This suggests that `oldXPosition` and `oldYPosition` do not need to be instance variables.

9. Remove their declaration from the top. Go back into your `moveHorizontal()` method and declare these variables within. The major difference in syntax is that, you can must the `private` keyword when declaring local variables. This ought to do:

    ```java
    public void moveHorizontal(int distance) {
        //declare local variables (you can name them whatever)
        int oldXPosition;
        int oldYPosition;
 
        // remainder code omitted
    }
    ```

10. After you've made these changes, compile and create another `Triangle`. Move it around horizontally to ensure that the print-outs are working. Now double-click on the `Triangle` object and you should find that the `oldXPosition` and `oldYPosition` instance variables are gone.

   - Less state (fewer instance variables) is generally a good thing. Having too much state could mean that the programmer may lose track of things in the future.


#### Part III: Input Parameters
The last type of variable are input parameters. Input parameters allow users to provide input to a constructor or method. Therefore, they are only found on the first line of constructors and methods. Here's the syntax:

```java
public void someMethod(listOfInputParameters) {
  // body of method omitted
}
```

1. Go down to the `moveHorizontal()` method again, and you need to only examine the first line of the method. Here it is again:

    ```java
    public void moveHorizontal(int distance) {
    ```

2. There is one input parameter, `int distance`, that is accepted by this method. In fact, this method can't even be executed until the caller inputs a valid value for `distance`. 
    - The value that is given to `distance` upon calling it is known as an **argument** for that input.
    - The `distance` parameter captures the given argument, and it can be used as a variable in the remaining code for `moveHorizontal()`
    - If your method or constructor accepts multiple parameters, then you can separate them with a comma.

3. Therefore, input parameters are nothing more than local variables to the method, except that they store the value of given arguments! All input parameters are destroyed when the method exits.

4. Create a new `Triangle` constructor that accepts the starting height and width. You may name these input parameters `initialHeight` and `initialWidth`. Don't forget that you'll need to declare their data types.
    - Assign the instance variables `height` and `width` to these values in order to save them.
    - All other instance variables should be assigned to the same values as in the original constructor.

5. Test out your code to ensure that you can now create Triangles of customized height and width.

6. Go back in your new constructor and rename the input parameters to just `height` and `width` (yes, the same names as your instance variables.)
    - Does it still compile?
    - Does it still work when you construct a new Triangle? Think about why this is.


#### Grading

```
This assignment will be graded out of 2 points, provided that:

You were in attendance.
Your Triangle class is fully modified.
```

#### Submitting Your Assignment

After you have completed the assignment, use the following to submit your work.
Exit BlueJ

- Open your computer's File Finder (some times called File Explorer). Locate the project folder.

- Right-click on the project folder, then:

  - If using Windows, select Send to then Zip file
  - If using MacOS, select Compress ... items
  - This step takes your selected creates a .zip file that you will submit to me.

  It's really important you got this right. If you have doubts, ask one of us to check for you! I recommend that you double-check by opening the zip file, and investigating the contents to ensure that all the files are in there.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting.

- Click on Submit Assignment, and you should be able to "browse" for your file

- Select the `.zip` you just created, and click Submit Assignment again to upload it.

- You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by Brad Richards.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
