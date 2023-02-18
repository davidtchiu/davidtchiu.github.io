## CS 161 - Intro to Computer Science

### Homework: Loop Practice (The Basics!)

In this assignment, you'll be working with loops. It helps to use the David's 4-Step Process for Writing Loops handout I passed out to you in class.

#### Student Outcomes

- Exposure to writing loops.

#### Instructions

- Open BlueJ and create a new project called `Hwk5_Loops`. This class will not have any fields or constructors. You'll just be writing and testing various methods.Write the following methods:

- Write `stringRepeat()` which inputs a String `str` and an integer `num` respectively. It returns a String in which `str` is
  is appended to itself `num` times. An empty string should be returned if `nums <= 0`.

  If you typed the following into BlueJ's code pad, you should get the corresponding results.

  ```java
  Loops loopie = new Loops();
  System.out.println(loopie.stringRepeat("$", 5));
  > $$$$$

  System.out.println(loopie.stringRepeat("wuff ", 3));
  > wuff wuff wuff

  System.out.println(loopie.stringRepeat("$", 1));
  > $

  System.out.println(loopie.stringRepeat("$", 0));
  >

  System.out.println(loopie.stringRepeat("$", -5));
  >

  System.out.println(loopie.stringRepeat(loopie.stringRepeat("!", 2), 4));
  > !!!!!!!!
  ```

- Write a method called `hammingDistance` that inputs two equal-length strings, and returns the number of positions in which the two strings differ. Return `-1` if the two strings are not of equal length. Have the String API handy to help you.

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

  System.out.println(loopie.hammingDistance("Grace", "Grace"));
  > 0
  ```

- Write `multiply()` which inputs two integers `A` and `B` and returns the product from multiplying them together. Your solution must use a loop to add `A` together `B` times (or vice versa). It must also handle negative inputs. Your loops can iterate at most `|A|` or `|B|` times, and ensure that your solution does not rely on integer overflow. Nested loops are not necessary for this problem. As an optional challenge, can you do this with only one loop?

  ```java
  Loops l = new Loops();
  System.out.println(l.multiply(3,4));
  > 12
  System.out.println(l.multiply(19,0));
  > 0
  System.out.println(l.multiply(0,19));
  > 0
  System.out.println(l.multiply(-2,9));
  > -18
  System.out.println(l.multiply(10,-9));
  > -90
  System.out.println(l.multiply(-4,-5));
  > 20
  ```

- Write `findPrimes()` inputs an integer `n` and prints the first `n` prime numbers, beginning with `2`. (We had written a prime number checker in class. Use it!) This method requires just a single loop if you use the `isPrime()` method we wrote in class.

  ```java
  Loops l = new Loops();
  l.findPrimes(5);
  2
  3
  5
  7
  11

  l.findPrimes(1);
  2

  l.findPrimes(0);
  (no output)

  l.findPrimes(10);
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

- Write a method `String decimal2Binary(int num)` that inputs a non-negative integer, and returns the binary representation of that integer. You may assume that the input is non-negative. You might remember the algorithm from class: If `num` is 0, simply return the string `"0"` and you're done (zero is just 0 in both binary and in decimal!). Otherwise, divide `num` by `2`. The remainder, which is either a one or zero, is appended to the *left* of the current binary string. Repeat these steps until `num` reduces to 0.
  ```java
  Loops l = new Loops();
  l.decimal2Binary(0)
  > "0"   (String)

  l.decimal2Binary(1)
  > "1"   (String)

  l.decimal2Binary(5)
  > "101"

  l.decimal2Binary(6)
  > "110"

  l.decimal2Binary(7)
  > "111"

  l.decimal2Binary(55)
  > "110111"

  l.decimal2Binary(256)
  > "100000000"
  ```

#### Extra Challenge
For no extra credit points, write the method `int binary2Decimal(String num)` that converts a binary number to an integer in base 10. For your reference, to take 2 to the *ith* power, you can use the method `Math.pow(2,i)`.

  ```java
  Loops l = new Loops();
  l.binary2Decimal("0")
  > 0   (int)

  l.binary2Decimal("1")
  > 1   (int)

  l.binary2Decimal("100")
  > 4   (int)

  l.binary2Decimal("1001")
  > 9   (int)

  l.binary2Decimal("1010")
  > 10   (int)

  l.binary2Decimal("1011")
  > 11   (int)

  l.binary2Decimal("1010100")
  > 84   (int)
  ```

#### Program Defensively

You can't control how another user or program chooses to use your methods. For each method, think critically about all the things that could go wrong and cause an unintended result (e.g., a runtime error, infinite loop/recursion, etc.). Chances are, I'll be trying all kinds of inputs (negative values, zeroes, nulls, empty-strings, etc.) when I grade your program. The mark of a good programmer is one that can anticipate such scenarios ahead of time and ensure that their program handles all sorts of errors gracefully.

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 50pts.

[5pts] stringRepeat() is properly implemented. It returns the product of two given ints.
It works with negative inputs.

[10pts] hammingDistance() is properly implemented. It returns the number of spots where
two strings differ.

[10pts] multiply() is properly implemented. It returns the product of two given ints.
It works with negative inputs.

[10pts] findPrimes() is implemented. It inputs a positive integer, n, and prints the first
n primes, each on a separate line.

[10pts] decimal2Binary() is implemented. 

Misc.
    [5pts] You provide Javadocs style comments for any new methods implemented. You include
           sufficient inline comments to explain the logic of your methods.
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

Written by David Chiu.
