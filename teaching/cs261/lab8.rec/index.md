## CS 261 - Computer Science II

### Lab 8: Thinking Recursively

This lab is all about recursion and getting used to thinking recursively. 
Recursive algorithms call <i>themselves</i> repeatedly to solve a problem. They are useful when the problem
is reducible to a smaller subproblem of the same nature.
<center><img width="400px" src="https://miro.medium.com/max/1338/1*Hgviugi5d0AZcFgy1-xVqQ.jpeg"></center>

As I mentioned in class, recursive solutions are usually not necessary (i.e., you could always do recursion with a loop). However, solutions to some problems are naturally recursive, and when that is the case, recursive algorithms tend to be more readable, simple, and elegant. Finding the sum from $$1$$ up to $$n$$ (for $$n \ge 1$$) is one such problem that is naturally recursive.
Consider the method $$sum(n)$$ to find the sum of $$1$$ up to $$n$$, for $$n \ge 1$$:

$$sum(n) = 1 + 2 +  ... + (n-1) + n$$

In a step toward thinking recursively, observe that due to the commutativity of addition, this sum could be rewritten as
adding $$n$$ to the sum of the remaining numbers, that is,

$$sum(n) = n + [1 + 2 + ... + (n-1)]$$

Now, isn't the partial sum expressed in the square brackets just $$sum(n-1)$$? Say... we're calling $$sum(\cdot)$$ again to solve for another sum? That's a self (recursive) definition! Indeed, let's rewrite it as such:

$$sum(n) = n + sum(n-1)$$

Now we just need to find $$sum(n-1)$$, and using the same argument above, $$sum(n-1)$$ can be written as follows:

$$sum(n-1) = (n-1) + sum(n-2)$$

After substitution we now have $$sum(n) = n + (n-1) + sum(n-2)$$. We repeat this process for $$sum(n-2)$$, and $$sum(n-3)$$, and so on. If you write  out each substitution on a new line, you'd get something that looks like this:

$$\begin{align}
sum(n) & =  n + sum(n-1)\\
 & =  n + (n-1) + sum(n-2)\\
 & =  n + (n-1) + (n-2) + sum(n-3)\\
 & =  n + (n-1) + (n-2) + (n-3) + sum(n-4)\\
& \cdots
\end{align}$$

That's swell and all, but when do we ever stop? A terminating condition (known as the <b>base case</b>) 
is crucial for you to identify! It is the only way we can avoid <i>infinite recursion!</i>
Notice that the input to $$sum(\cdot)$$ reduces by $$1$$ on each line. Well, you'd have to ask yourself, &quot;When does
the input become so small that the problem can be solved trivially (without making another recursive call)?&quot;
This occurs when the input becomes $$1$$ for this problem. Why? Consider the problem statement once
again: the sum from $$1$$ <i>up to</i> $$n=1$$ is simply $$1$$. That terminates the recursion. Okay, let's finish the substitution:

$$\begin{align}
sum(n) & =  n + sum(n-1)\\
 & =  n + (n-1) + sum(n-2)\\
 & =  n + (n-1) + (n-2) + sum(n-3)\\
 & =  n + (n-1) + (n-2) + (n-3) + sum(n-4)\\
 & \cdots\\
 & =  n + (n-1) + (n-2) + (n-3) + ... + sum(2)\\
 & =  n + (n-1) + (n-2) + (n-3) + ... + 2 + sum(1)\\
 & =  n + (n-1) + (n-2) + (n-3) + ... + 2 + 1\\
\end{align}$$

In defining this method, note that there are just two cases we need worry about depending on
the value of $$n$$. The result is $$sum(n) = 1$$ when $$n = 1$$, and $$sum = n + sum(n-1)$$ when $$n > 1$$. The method can be written as follows,

```java
public int sum(int n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n-1);
}
```

The first section of the lab involves code reading, the second section asks you to fix some bugs in recursive methods. The third section asks you to write some recursive methods.

#### Objectives
- Comprehend and debug recursive methods
- Write recursive methods
- Think recursively in order to solve computational problems

#### Required Files
The following file(s) have been provided for this lab.
- [Lab_Recursion.zip](Lab_Recursion.zip)



#### Part 1: Recursive Code Comprehension
Open up the `README.txt` file, where you'll find some questions you need to answer. For each of the code snippets found below (and in the `MysteryMethods` class), answer these questions and any followup questions found below the code snippets:

  - Identify the base case(s), i.e., the terminating condition(s).

  - Identify the recursive (or general) case(s), i.e., condition(s) under which a recursive call is made. What is the unit of work that is being done, and how does the recursive call reduce the problem size?

  - Describe what the method does in a couple brief sentences. To get in the right mindset, imagine if you were tasked with writing the Javadocs comment describing this method. I will not accept a line-by-line description of the method!

Because these are meant to be code reading exercises, do not run the code in BlueJ unless you're ready to check your answers! I have provided the code to you as `static` methods in the `MysteryMethods` class. Here are the mystery methods you need to consider:

- I'll do the first one for you to get the juices flowing. Consider the following method. Enter various values for x and y and trace the result. You should start with small numbers, increasing them, and see how it affects the trace.

  ```java
  public static int mystery1(int x, int y) {
      if (y == 1) {
          return x;
      }
      return x + mystery1(x, y-1);
  }
  ```

  - Identify the base case(s), i.e., the terminating condition(s).

    *The base case occurs when `y` reaches 1, and the value of `x` is returned.*

  - Identify the recursive case(s), i.e., condition(s) under which a recursive call is made. What is the unit of work that is being done, and how does the recursive call break down the problem size?

    *The recursive case occurs when `y != 1`. A copy of `x` is added to the result of `mystery1(x,y−1)`. The problem size, `y`, therefore decreases by 1, reducing the problem size toward the base case of `y == 1`.*

  - Describe what the method does in a couple brief sentences.

    *This method assumes `y > 0` and returns the value of `x * y`. (It adds `x` to itself `y` times). Notice that the base case must check out. That is, when `y == 1`, it returns `x`.*

  - Is this algorithm actually correct for all inputs (Hint: "no"). Check some base cases (for instance, throw some 0s in there, and negative numbers). How might you fix everything?


- Answer the three questions above for the code below:

  ```java
  public static int mystery2(int i, int j) {
      if (i == 0) {
          return j;
      }
      else {
          return mystery2(i-1, j+1);
      }
  }
  ```

  In addition to the three questions, answer the following. Check your edge cases: What inputs for `i` and `j` might produce a stack overflow? How would you fix the code so that an overflow is not possible?

- Harder still, let's try this one. When tracing its execution, you must remember that, after it receives the value returned from the recursive call, it still has work to do! Trace it with about 5 random numbers thrown in 

#### Grading

```
This assignment will be graded out of 2 points, provided that:

- You were in attendance and on-time.
- Your classes are fully implemented.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Based on a previous lab by Professor Henry Walker, Grinnell College.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
