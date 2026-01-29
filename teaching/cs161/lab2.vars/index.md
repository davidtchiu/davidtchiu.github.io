## CS 161 - Intro to Computer Science

### Lab 2: All about Variables

In this lab, you'll get familiarized with the concepts of data types, variables, assignment statements, and scope. You'll be modifying the `Triangle` shape class to add some functionalities.

#### Student Outcomes

- To understand variable assignment statements
- To understand the difference between local and object (instance) scope
- To understand the lifetime of certain variables


#### Required Files

The following file(s) have been provided for this lab.

- [Lab_Triangle.zip](Lab_Triangle.zip)

#### Preamble: What Are Variables?
In programming, *variables* are used to store data as part of your algorithm.  A variable associates a name (like `diameter`, `xPosition` or `color`) with a value so that the program can refer to that value later, modify it, or use it in computations. The value stored in a variable can change (varies) over time as the program executes, which is why it is called a “variable.”

Recall that every variable has:
- a data type (what kind of data it can store, such as `int`, `double`, `String`, and `boolean`)
- a name (how the program refers to it)
- a value (the actual data currently stored)

By using variables, programs can work with input, track intermediate results, and produce output in a flexible and reusable way. There are four kinds of variables in Java. We've seen a couple of these already:
  - **Instance Variables:** These variables are used to store values pertaining to an object's (instance's) state. They exist until the object is deleted (or when your program terminates).
  - **Input Parameters:** These variables are used to accept input data in order to run a method or constructor. They exist  until the method or constructor exits.
  - **Local Variables:** These variables are used for temporary storage within a method or constructor. They exist until you exit the segment of code (that is, the code within curly braces `{` ... `}`) in which the local variable was declared.
  - **Static Variables** (Covered later in the semester)

#### Part 1: Instance Variables

**Don't skim**
The particular kind of variable that we have been using thus far in lectures is used to store an object's state. We call these **instance variables** or **fields**. Later in lab, we'll introduce you to a couple other types of variables, each with different usages. Recall the basic class syntax, shown below.

```java
/**
 * Some comment about the class as a whole.
 * @author David
 */
public class YourClassName {
    /* INSTANCE VARIABLES GO HERE */

    /* CONSTRUCTORS GO HERE */

    /* METHODS GO HERE */
}
```


1. Open up the Triangle class, find the section of code (usually towards the top of the class) that lists all the instance variables. Modify it to store a new instance variable: `area`. It doesn't matter if these go first or last in line of your instance-variable segment.
    - Before you declare `area`, you ought to be thinking ahead --- what nature of data does each hold? Integers? Strings? Doubles? Something else? (Do you remember how to calculate areas and perimeters of triangles? What kind of value do you need to capture?)
    - Choose the right data types, and declare `area`  now as an instance variable.
    Remember the syntax to declare an instance variable using:
       ```java
       private data-type variable-name;
       ```


2. Back in the BlueJ project window, click the compile button, and then *instantiate* a new `Triangle` object by right-clicking on that icon, and selecting `new Triangle()` from the menu. Once the object is created below,  inspect its instance variables by double-clicking on the new object. You should see the the new instance variable you just declared, but alas, they show up as zeroes.

    - It's important to use this moment to reflect. Even though you gave these instance variables good names that indicate what they are, they don't just magically get values. (Computers are morons!) It's up to *the programmer* to assign values to these instance variables, and to keep track of them if the triangle ever changes size.

3. Let's start by thinking about all the places where the `area` need to be assigned values.

    - The first place is in the code that runs when `Triangles` get created -- Remember that we called the object-instantiation code the **constructor**. Find the constructor, which usually appears right after all your instance variables. It should look something like this:

      ```java
      public Triangle()
      ```

    - Update the constructor code to assign the proper value to `area`. Remember the syntax to assign a value to a variable is:

        ```java
        variable-name = expression;
        ```
        where `expression` is some Java or mathematical expression. For instance, if I were assigning the area of a *square*, my expression would be `area = width * length;` (assuming `width` and `length` are the instance variable's names.)

4. Compile your source code, and instantiate a new `Triangle` to see if your `area` instance variable is now populating. Double click on the object (the red box near the bottom). If you did everything above correctly, you should've gotten `300.0` for area.

5. But is this the only place where a triangle's `area` needs to be assigned? Wasn't there a method to *change* a triangle's size? Try calling `changeSize(int height, int width)` to change the triangle's size somehow and inspect the area again afterwards. Alas, the `area` field doesn't update. 

6. Find the `changeSize(int height, int width)` method in your source code, and make sure you reassign values to `area` to reflect the new dimensions. Test `changeSize` again to make sure area is updating whenever you change the triangle's size.

#### Part II: Local Variables

So far, all of the variables you have worked with in this class have been instance variables. Instance variables represent the *state* of an object. They stick around for as long as the object exists, and they describe what the object is. However, **not every value a program computes deserves** to be remembered as part of an object’s state. Sometimes, a value is  only used inside a single method, and is not meaningful once that method finishes running.

For these cases, we use **local variables**. A local variable is declared inside a constructor or method and exists only while that constructor/method is executing. Once the constructor/method is done, the local variable disappears. Here's how to declare a local variable inside a method:

```java
data-type variable-name;
```
It's that simple! Just drop the preceding `private` keyword. Let's have a look at where a local variable might be appropriate.

1. Start by adding yet another *instance variabl*e called `perimeter` to the top of your file. Decide on its data type and code it in. 

2. As we know, we have to edit our *constructor* to give `perimeter` a value. You can calculate the  perimeter of an *isosceles triangle* given its `height` and `width`, which we have. In the figure below, you know the `width` and `height` of the Triangle, so you just need to figure out the length of the three sides, which you can determine using Pythagorean Theorem.

    - In an isosceles triangle, there are two sides of equal length. If we know the triangle’s `width` and `height`, we can compute the length of these equal sides using the Pythagorean Theorem by splitting the triangle down the middle. Specifically, you want to find the *hypotenuse*:

        <img src="figures/lab2_fig1.png"/>

    - In Java, if you need to take the square root of some value `xxxx`, you can use the Java method `Math.sqrt(xxxx)`. Also, to take `a` to the power of `b` (i.e., $$a^b$$), you can use `Math.pow(a, b)`.

    - This is the perfect opportunity to use a *local variable* to store the hypotenuse. At the bottom of the constructor's code, let's decare a new local variable:
        ```java
        double hypotenuse;
        ```

    - Next, *assign* the expression to compute the hypotenuse to this variable.

    - Finally, *assign* the `perimeter` its value, which is 2 times the hypotenuse plus the width.

3. Test it! Compile and go back to the project window. Create a new Triangle and inspect its contents. If you did it all correctly, your perimeter should show up as `112.111025...`, because the triangle starts off with a height of 30 and a width of 40.

4. Notice that the `hypotenuse` local variable does not show up as a field when you inspect the object! It's vanished, which is exactly what we wanted. It serves little purpose outside of the constructor.

5. Just as before, you need update the `changeSize(int height, int width)` method in your source code to ensure that the perimeter reflects the new size.

<!-- 
1. Find the `moveHorizontal()` method in your source code. Here's what it should look like:
    ```java
    public void moveHorizontal(int distance) {
        erase();
        xPosition += distance;
        draw();
    }
    ```
    - Studying its algorithm, this method does nothing more than simply erasing the Triangle off the canvas, updating the `xPosition`, then drawing the Triangle back on the canvas. The erasing and re-drawing happens so quickly that it appears as if the Triangle moved places instantly.

2. Suppose we now want the Triangle to output (print) its *old* coordinate position before the Triangle moved. To do that, we need to *save* its old x and y positions *before* they get updated in the `moveHorizontal()` code. To save the current positions, we'll need to introduce two variables  (one for each coordinate).

3. For now, add two **instance variables** near the top of the source code, and you can name them `oldXPosition` and `oldYPosition`. Go back to your notes (or book) to see the syntax for declaring new instance variables. 

4. Then go back in your `moveHorizontal()` method, and assign the current x and y positions to the `oldXPosition` and `oldYPosition` instance variables anytime before `xPosition` is updated.

5. Now, below the call to `draw()`, print out the old positions and the new positions. Recall that, to print something to the screen, you can use this syntax:

    ```java
    System.out.println("string-you-want-printed");
    ```
    But if you need to evaluate variables in your print-out, then you need to concatenate (`+`) the variables to the string you want printed. For instance:
    ```java
    System.out.println("string-you-want-printed" + some-variable + "more-string" + another-variable);
    ```

    For instance, the following will print something to the effect of: `"Old X is 50"` on the *same* line.
    ```java
    System.out.println("Old X is " + oldXPosition);
    ```
    Play with the string to print both old X and old Y values on the *same* line.

6. Test it out and see if everything's working before moving on.

7. Once everything checks out, inspect the `Triangle`'s state and you should see the `oldXPosition` and `oldYPosition` instance variables. **But this begs the question:** Why are a Triangle's *old* positions even stored as part of its state? *You should always ask yourself these questions when you declare new variables:*
    - Would the object benefit from memorizing these new values in the future? Should these variables be an intrinsic part of the object's state of existence? (If so, the variable should be an instance variable.)
    - Are the new variables used in only one or two methods, and serve no purpose elsewhere? Is it okay for these variables to be destroyed as soon as the method exits? (If so, the variable should be a local variable.)

8. The purpose of these questions is to gauge whether you need variables everywhere, or just inside a method or two.

    - In our case, `oldXPosition` and `oldYPosition` serve a very specific purpose inside only one method!
    - This suggests that `oldXPosition` and `oldYPosition` do not need to be instance variables.

9. Remove the two instance variables `oldXPosition` and `oldYPosition` from the top of your source code. Go back in your `moveHorizontal()` method and declare the variables within. The major difference in syntax is that, you must remove the `private` keyword when declaring local variables. This ought to do:

    ```java
    public void moveHorizontal(int distance) {
        //declare local variables (there's no private keyword!)
        int oldXPosition;
        int oldYPosition;
 
        // remainder code omitted
    }
    ```

10. After you've made these changes, compile and create another `Triangle`. Move it around horizontally to ensure that the print-outs are working. Now double-click on the `Triangle` object and you should find that the `oldXPosition` and `oldYPosition` instance variables are no longer a part of its state.

    - **Tip: Keep the set of instance variables as tidy as possible.** Less state (i.e., fewer instance variables) is generally preferable. Having too many instance variables could mean that the programmer may lose track of variables and have too much to manage in the future.
 -->

#### Part III: Input Parameters
The last type of variables in Java are called "input parameters." These allow users to provide values (values given to input parameters are called **arguments**) to a constructor or a method. 

1. Find the `moveHorizontal()` method again. You only need to examine the first line of the method. Here it is:

    ```java
    public void moveHorizontal(int distance)
    ```

2. This line tells us a lot about the method. It says that `moveHorizontal` accepts one input parameter called `int distance`. In fact, this method can't even be executed until the caller inputs a valid argument for `distance`. 
    - The `distance` parameter captures the given input value (called an *argument*), and `distance` essentially becomes a local variables in the code for `moveHorizontal()`, except that it already has a value assigned to it!

3. Like local variables, input parameters are also destroyed when the method finishes.

4. Write a new `public Triangle(int startingHeight, int startingWidth)` constructor that accepts the starting height and width. You may name these input parameters `startingHeight` and `startingWidth` (honestly, you can name them whatever you like as long as their names make sense and are legal). 
    
    - Next, assign the instance variables `height` and `width` to these starting values in order to save them.
    
    - All other instance variables still need to be assigned to the old values, so you can basically copy and paste the old constructor. 
    
5. Test out your code to ensure that you can now create Triangles of customized `height` and `width`.

    - You might as well ensure that the perimeter and areas still check out too!

    
#### Part IV: Writing Effective Comments

I've mentioned that effective commenting is an important habit for programmers to form. The reason is for documenting your code for posterity. There are generally two types of comments that I look for when grading: *line comments* and *Javadocs comments*.

`// Line Comments` are free-form and inline with your algorithm. They are used to describe blocks of code that you write. Their syntax is easy to remember. For instance:

```java
public void moveHorizontal(int distance) {
    // This is a line comment!
    erase();
    xPosition += distance;
    draw();

    // This is another line comment!
}
```
Use line comments whenever you've written a chunk of code and its purpose and function may not be obvious.


`/* Block (multi-line) Comments */` Sometimes you need to write a little more, spanning a few lines, and while you can comment each line individually, line comments just aren't as convenient here. You can comment out an entire paragraph by using block or multi-line comments instead:

```java
public void moveHorizontal(int distance) {
    /*
    This is a block comment!
    Anything I write in here is ignored
    by the compiler!
    Yippee!!
    */
    erase();
    xPosition += distance;
    draw();
}
```

`/** Javadocs Comments */` are more structured forms of block comments. You should write a Javadocs comment on top of every class definition, on top of each constructor, and on top of each method. For instance. Here's an example class comment:

```java
/**
 * This is a class that simulates cars. blah blah blah
 * @author David
 * @version 1/26/2023
 */
public class Car {
    // code omitted
}
```

Here's a Javadocs comment for a method:

```java
/**
 * This method moves a Triangle horizontally by the 
 * given distance.
 * 
 * @param distance A distance (in pixels) to displace
 */
public void moveHorizontal(int distance) {
    // This is a line comment!
    erase();
    xPosition += distance;
    draw();
}
```

Note the use of `@tags` in the Javadocs comments. Go ahead and add comments to the new constructor and method that you wrote for this lab. If your method or constructor requires multiple input parameters, then you should list each `@param` in your Javadocs comment on a separate line.

#### Grading

```
This assignment will be graded out of 2 points, provided that:

- You were in attendance and on-time.
- Your Triangle class is fully modified.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu. 2023. Updated 2026.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
