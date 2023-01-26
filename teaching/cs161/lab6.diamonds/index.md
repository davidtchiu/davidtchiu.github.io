## CS 161 - Intro to Computer Science

### Lab: Diamonds (Abstraction and Modularity)


#### Student Outcomes

- Practice abstract thinking
- Practice with basic loops

<!-- 
#### Working with Partners (Please Read)

You are required to work _together_ on labs. As I mentioned the first day of class, some of you may have had some prior programming experience, and this lab may come more naturally for you. Please be humble and be supportive to one another, and don't leave your partner behind. Labs are _very_ low-stakes, and you'll get full credit for being here, working through it, and being a good citizen. We'll be around to help.

Here are your assigned partners for today's lab.

```
[Strash, K, Steller, L, Jones, S]
[Roppolo, G, Culpepper, A]
[Rodriguez, C, Jones, B]
[Murphy, C, Beardsley, M]
[Grey, E, Brown, A]
[Miller, D, Murayama, E]
[Wissing, A, Camblin, F]
``` -->

#### Required Files

The following file(s) have been provided for this homework.

- [Lab6_Diamonds.zip](Lab6_Diamonds.zip)

#### Instructions

In this lab, you'll create a new shape that's been missing from our toolkit, diamonds. But instead of creating diamonds from scratch (and reinventing the wheel), we'll make a keen observation that a diamond can be constructed using two triangles -- only that one of the triangles needs to be flipped upside down. Given that we have a `Triangle` class to our disposal, it will vastly simplify our work in constructing `Diamond`s.

  <img src="figures/lab6_diamond.png" />


#### Preliminary: An Improved Triangle Class

Open up the BlueJ project. You'll find that there's a slightly improved `Triangle` class. This `Triangle` sports a new method called `flip()`, which requires no input arguments and returns void. Play around with it to see it in action, but there shouldn't be any surprises as to what it does.

#### Part I: Diamonds

Our objective is to create a new class that can create  `Diamond`s with the same set of methods as all the other shape classes. But as you know, there are code in the other shape classes that we still don't know how to read. But no worries, such is the power of abstraction! Let's get started...

1. Create a new class called `Diamond`. For now, a diamond needs only to store references to two `Triangles` as its instance variables. Declare those now. Because of their placement, I would name them `top` and `bottom`.

2. Now write the `Diamond()` constructor. It takes no inputs, and instantiates both `top` and `bottom`. But that's not all. You need to flip the bottom one upside down, and then move it into place so that the *bases* of the triangles are touching. Make the diamond visible too (by making `top` and `bottom` visible.)

3. Write a second constructor that accepts two inputs: the `height` and `width` of the new diamond. This constructor should, of course, create a diamond that is of the given dimensions. 

4. Next, write in the `makeInvisible()` and `makeVisible()` methods to toggle visibility of the diamond. Then move on to `changeColor(String newColor)` to change the color of the diamond. As you write these methods, you should notice how satisfying it is to be able to call the individual triangle's methods.

    - We don't even have to care about *how* the Triangle goes about performing its own actions. All we need to do is trust that it works, and use those methods where we need it!

    - In each of these methods, you should not be writing more than 2 lines of code to get the job done.

5. Now write in `moveVertical(int distance)` and `moveHorizontal(int distance)`. Again, the work we have to do is minimal.

6. Let's move on to something a little more challenging: `changeSize(int newHeight, int newWidth)`. You'll need to change the sizes of the two triangles in such a way that the sum of the heights is equal to `newHeight` and the `width` is adjusted to `newWidth`. Okay, easy enough with a couple calls to the Triangles' `changeSize()` method. 

    - However, this will introduce a new problem. The triangles, upon changing size, may be overlapping each other, or they could be spread apart!

    - You'll need to do some more work to bring them back together so that their bases touch again! That means you'll need to move one of the triangles up or down to adjust for the offset. But how much do you move by...?

7. Nice work! The last piece we're missing are the "slow move" methods. Go ahead and start writing the `slowMoveHorizontal(int distance)` method. Again, this is trickier than expected. You can't just tell the top and bottom triangles to `slowMoveHorizontal` themselves, because the diamond would be split apart, instead of moving along as one shape.

    - Here's a hint: the `moveHorizontal(int distance)` method you wrote previously *does* appear to move the whole diamond instantaneously. What if you called this method repeatedly on a distance of 1? (Write a loop!)

    - Don't forget that you need to ensure that a negative distance input should slow move the diamond to the left!

8. Finally, finish `slowMoveVertical(int distance)`.

#### Reflections: Problem Decomposition and Thinking Abstractly
Hopefully, through this lab, you can see how useful it is to think abstractly. We broke down a bigger problem (how to build a diamond?) and made the key insight that diamonds are no more than 2 triangles, which we already have. Then all the rest is just a matter of getting the triangles to do our bidding. Knowing this, it's easy to see how we might create new shapes and add them to our toolkit. 

#### Extra Challenge
Can you create a **parallelogram** with two diamonds? Can you create a restricted **rectangle** with two squares? How about a **wand** with a skinny rectangle and a circle on top? How about a pac-man object that gets automatically drawn every time you create it (it's just 2 circles and a white triangle!), and you can slow move it, close and open its mouth, and so on.

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
