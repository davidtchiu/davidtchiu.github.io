## CS 161 - Intro to Computer Science

### Homework 5: Loops Loops Loops

Loops are among the most important and fundamental elements of programming. They allow us to repeat instructions efficiently, making our programs more robust and scalable. Whether iterating over a list of data, counting down a timer, or running a simulation, loops provide a way to automate repetitive tasks.

In this homework, you'll work through various exercises designed to reinforce your understanding of loops and how they work. These problems will challenge you to recognize when and why loops are necessary, choose the appropriate type of loop (e.g., for, while), and write clear, effective code that makes use of code repetition. Mastering loops will not only help you write better programs but will also build the foundation for more complex problem-solving in computer science.

As you complete these exercises, think about the real-world applications of loops—how they are used in automation, data processing, game development, and many other fields. Developing a strong grasp of loops now will make future programming concepts easier to understand and apply.

#### Student Outcomes

- Understand the need for loops
- Differentiate between different loop types, and determine when each is most appropriate
- Write syntactically correct and logically sound loop statements
- Recognize and correct common looping mistakes
- Use loops in combination with other constructs, such as conditionals and class APIs


#### Instructions

- Open BlueJ and create a new project called `Hwk5_Loops`. This class will not have any fields or constructors. You'll just be writing and testing various methods. 

- Before you start, read through each of the prompts and decide if it is a **counter-controlled** loop or an **event-controlled** loop. Once you've determined the type of loop, go back to your notes and use the 4-step template that I provided you for writing each loop type.


#### Loop Problems

1. (Mild) We'll start with an easy one, and I'll guide you through it. The **Collatz Conjecture** is stated as follows. Given a positive integer `n`, divide `n` by 2 if it is even, otherwise, multiply `n` by 3 and add 1 to it. If you do this repeatedly, the Collatz conjecture states that `n` will eventually reach 1. (Interestingly, this conjecture still has not been proven, but no one has been able to find a counter-example.) Write a method called `collatz` that inputs a positive integer `n` and prints the sequence by which `n` ends at 1. (Fun fact: The numbers that appear in a sequence are also called "Hailstone Numbers.")

    Clues: This is an event-controlled loop, so I would suggest using a `while` loop instead of a `for` loop. You want your loop to repeat as long as `n` isn't 1.

    Output:

    ```java
    Loops loopie = new Loops();
    loopie.collatz(1);
    1

    loopie.collatz(2);
    2
    1

    loopie.collatz(3);
    3
    10
    5
    16
    8
    4
    2
    1
    ```

2. (Mild) Write a method `hammingDistance` that inputs two strings, and returns the number of positions in which the two strings differ. Return `-1` if the two strings are not of equal length. Have the [String API](StringAPI.pdf) handy to help you out. Particularly, you will need a way to extract each individual character out of both strings (sounds like the `charAt()` method?) and compare them. 

    - Clue: Recall to compare two `char`s, which is the data type returned by `charAt()`, you can use the `==` operator.

    ```java
    Loops loopie = new Loops();
    System.out.println(loopie.hammingDistance("01010101", "10101010"));
    > 8

    System.out.println(loopie.hammingDistance("David", "Davis"));
    > 1

    System.out.println(loopie.hammingDistance("david", "Davis"));
    > 2

    System.out.println(loopie.hammingDistance("david", ""));
    > -1

    System.out.println(loopie.hammingDistance("Grace Hopper", "Grace Hopper"));
    > 0
    ```
    

3. (Medium) Write `multiply()` which inputs two integers `A` and `B` and returns the product from multiplying them together. I would start by creating a variable to hold the product (which initializes to 0), and write a loop to add `A` to that product `B` times. It must also handle negative inputs, so make sure you test vigorously for different values of `A` and `B`.

    ```java
    Loops loopie = new Loops();
    System.out.println(loopie.multiply(3,4));
    > 12

    System.out.println(loopie.multiply(19,0));
    > 0
    
    System.out.println(loopie.multiply(0,19));
    > 0
    
    System.out.println(loopie.multiply(-2,9));
    > -18
    
    System.out.println(loopie.multiply(10,-9));
    > -90
    
    System.out.println(loopie.multiply(-4,-5));
    > 20
    ```


4. (Spicy)  Write a method called `vowelRatio()` which inputs a String and returns the fraction of letters (`double`) that are vowels in the string. Assume that `y` is not a vowel. 
    - In the spirit of divide-and-conquer, I'd write a helper (`private`) method that returns whether a given character (`char`) is a vowel as a boolean. Beware of upper vs. lower case. (Yes this method should work for both cases.) 
    - Beware of integer divide!

    ```java
    Loops loopie = new Loops();
    System.out.println(loopie.vowelRatio("Hello world"));
    > 0.2727272727

    System.out.println(loopie.vowelRatio("eieieieieieieaaaaa"));
    > 1.0

    System.out.println(loopie.vowelRatio("abba"));
    > 0.5
    ```

##### Part II: Nested Loop Problems
Let's try our hand at writing some nested loops. Remember that there's a formula to writing doubly-nested loops. You should always be thinking 2-dimensionally. For the problems below, I would first figure out what you need to do for each "row." (Inner Loop). Afterwards, determine how many "rows" (height) you need (the Outer Loop). 

5. (Mild) Write a method, `hollowSquare`, that accepts an integer `n`, and prints a hollow square of dimension `n`.  To draw a hollow square, you just need to make sure that you only print the first and final `*` if you're not printing out the first or last rows! This problem requires you to write nested loops even though you can solve it without one. The outer loop should control the number of rows. The inner loop: For each row of the outer loop, print an entire row of `*` only for the first and last rows. Otherwise, print `*` for the first and last columns of other rows, with spaces in between. (Hint: You might start by writing a nested loop that prints a solid square filled with only asterisks first.)

    Here's what I would expect to see if your method is working properly. 

    ```java
    Loops loopie = new Loops();
    loopie.hollowSquare(4);
    > * * * * 
    > *     * 
    > *     * 
    > * * * *

    loopie.hollowSquare(1);
    > *

    loopie.hollowSquare(7);
    > * * * * * * * 
    > *           * 
    > *           * 
    > *           * 
    > *           * 
    > *           * 
    > * * * * * * * 
    ```


6. (Medium)  Write a method `reveal(int n)` that gradually reveals each number 1, 2, 3, ..., up to `n` (inclusive), on each line (see below). Ignore negative input. (Hint: For each row `r`, how many numbers do you need to print up to? How many dashes follow? Use the `printRightTriangle()` method we saw in class for inspiration.) The outer loop should control the number of rows from 1 to `n`. The inner loop: For each row, display a counter that goes from 1 to the `n`, but if the counter is greater than the current row number, then display a hyphen instead.


    ```java
    Loops loopie = new Loops();
    loopie.reveal(4);
    1---
    12--
    123-
    1234

    loopie.reveal(8);
    1-------
    12------
    123-----
    1234----
    12345---
    123456--
    1234567-
    12345678
    ```

7. (Medium) Write a method `pyramid(int n)` that prints a pyramid pattern of asterisks (`*`) based on the number of rows (`n`) provided by the user. Outer Loop controls the number of rows (from 0 up to `n`). There are two inner loops inside: The first inner loop prints spaces for center-alignment (decreasing with each row). The second inner loop, placed right below (but within) the first inner loop, prints asterisks (`*`) to form the pyramid (increasing with each row).

    - I would start by figuring out the math to determine how many spaces you need before you print out the asterisk, as a function of `n` and the row number. For instance, on row `r`, you would need ??? spaces.
    - Next, you need to do the same for determinine how many asterisks to print for a given row. It looks like it's always an odd number.

    ```java
    Loops loopie = new Loops();
    loopie.pyramid(4);
       *
      ***
     *****
    *******

    loopie.pyramid(8);
           *
          ***
         *****
        *******
       *********
      ***********
     *************
    ***************
    ```

8. (Spicy) The factorial of $$x$$, written $$x!$$ is defined $$x \times (x-1) \times (x-2) \times ... \times 2 \times 1$$. There's also a special case of $$0! = 1$$. Write a method `printFactorials()` which inputs an integer `n`. It prints out the factorial of all numbers between `0` and `n`. You may assume that `n` is nonnegative. (Hint: 0! should be printed out unconditionally. Then start into the loops!) Again, in designing this method, think about how many rows you need (starting from 1! -- and that's your outer loop), then decide what you need to do per row to compute the factorial at that row number and that's your inner loop.

    ```java
    Loops loopie = new Loops();
    loopie.printFactorials(5);
    0! == 1
    1! == 1
    2! == 2
    3! == 6
    4! == 24
    5! == 120

    loopie.printFactorials(0);
    0! == 1

    loopie.printFactorials(1);
    0! == 1
    1! == 1

    loopie.printFactorials(20);
    0! == 1
    1! == 1
    2! == 2
    3! == 6
    4! == 24
    5! == 120
    6! == 720
    7! == 5040
    8! == 40320
    9! == 362880
    10! == 3628800
    11! == 39916800
    12! == 479001600
    13! == 6227020800
    14! == 87178291200
    15! == 1307674368000
    16! == 20922789888000
    17! == 355687428096000
    18! == 6402373705728000
    19! == 121645100408832000
    20! == 2432902008176640000
    ```

#### Extra Puzzles
For a modest amount of extra credit on your homework assignments!

- (Mild: +1pt) Write a method called `runningSum` that inputs two integers `low` and `high`, and adds all numbers between `low` to `high` (inclusive), and returns this sum. If `low` is greater than `high`, then you must exchange these values before proceeding with the summation.

    Clues:
    - Hmm there seems to be a definite beginning and end to this problem.

    ```java
    Loops loopie = new Loops();
    System.out.println(loopie.runningSum(0,1));
    > 1
    
    System.out.println(loopie.runningSum(9,9));
    > 9
    
    System.out.println(loopie.runningSum(1,100));
    > 5050
    
    System.out.println(loopie.runningSum(100,1));
    > 5050
    
    System.out.println(loopie.runningSum(500,-500));
    > 0

    System.out.println(loopie.runningSum(-1000,-150));
    > -489325
    ```

- (Medium: +2pt) Write the method `int binary2Decimal(String num)` that converts a binary number to an integer in base 10. For your reference, to take 2 to the *ith* power, you can use the method `Math.pow(2,i)`.

  ```java
  Loops loopie = new Loops();
  loopie.binary2Decimal("0")
  > 0   (int)

  loopie.binary2Decimal("1")
  > 1   (int)

  loopie.binary2Decimal("100")
  > 4   (int)

  loopie.binary2Decimal("1001")
  > 9   (int)

  loopie.binary2Decimal("1010")
  > 10   (int)

  loopie.binary2Decimal("1011")
  > 11   (int)

  loopie.binary2Decimal("1010100")
  > 84   (int)
  ```


- (Medium: +2pts) Write `findPrimes()` inputs an integer `n` and prints the first `n` prime numbers, beginning with `2`. (We had written a prime number checker in class. Use it!) This method requires just a single loop if you use the `isPrime()` method we wrote in class.

    ```java
    Loops loopie = new Loops();
    loopie.findPrimes(5);
    2
    3
    5
    7
    11

    loopie.findPrimes(1);
    2

    loopie.findPrimes(0);
    (no output)

    loopie.findPrimes(10);
    2
    3
    5
    7
    11
    13
    17
    19
    23
    29
    ```


#### Program Defensively

You can't control how another user or program chooses to use your methods. For each method, think critically about all the things that could go wrong and cause an unintended result (e.g., a runtime error, infinite loop/recursion, etc.). Chances are, I'll be trying all kinds of inputs (negative values, zeroes, nulls, empty-strings, etc.) when I grade your program. The mark of a good programmer is one that can anticipate such scenarios ahead of time and ensure that their program handles all sorts of errors gracefully.

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 80 pts.

[15 pts] Mild (x 3) at 5 pts each

[30 pts] Medium (x 3) at 10 pts each

[30 pts] Spicy (x 2) at 15 pts each

Misc.
[5pts] You provide Javadocs style comments for any new methods implemented. You include
           sufficient inline comments to explain the logic of your methods.

Bonus:
[+5 pts] Bonus problems attempted?
```

<!-- [10pts] runningSum() is properly implemented. It returns the sum of all numbers between
low and high, inclusive. If low is greater than high, then you should exchange those
values.

[10pts] collatz() is properly implemented. It prints out the collatz sequence from the 
given positive integer n to 1.

[10pts] hammingDistance() is properly implemented. It returns the number of spots where
two strings differ.

[10pts] multiply() is properly implemented. It returns the product of two given ints.
It works with negative inputs.

[10pts] findPrimes() is implemented. It inputs a positive integer, n, and prints the first
n primes, each on a separate line.

[10pts] decimal2Binary() is implemented.  -->


#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu.
