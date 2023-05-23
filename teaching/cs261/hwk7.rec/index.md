## CS 261 - Computer Science II

### Homework: Recursion Exercises

In this assignment, you'll be working with arrays, loops, and nested loops. This assignment can be quite challenging, so start early. Don't get too frustrated if you can't figure out how to write a method. Use the design approaches that you've learned in class. Seek tutoring or office-hours help from me.

#### Student Outcomes

- Writing recursive algorithms of varying degrees of difficulty.

#### Instructions

Create a new project and create a class called `Recursion`. Put all of the following static methods in this class.


1. Write a static method called `Queue<E> reverseQueue(Queue<E> queue)` that reverses the content of the given queue before returning it. Note that the reversal of an empty queue is itself.

		```java
    Queue<Double> q0 = new LinkedList<>();
    System.out.println(q0);
		> []
    System.out.println(Recursion.reverseQueue(q0));
		> []

    Queue<String> q1 = new LinkedList<>();
    q1.add("A");
    q1.add("B");
    q1.add("C");
    q1.add("D");
    q1.add("E");
    System.out.println(q1);
		> [A, B, C, D, E]

    System.out.println(Recursion.reverseQueue(q1));
		> [E, D, C, B, A]

    Queue<Integer> q2 = new LinkedList<>();
    q2.add(100);
    q2.add(200);
    q2.add(300);
    System.out.println(q2);
		> [100, 200, 300]

    System.out.println(Recursion.reverseQueue(q2));
		> [300, 200, 100]

    System.out.println(Recursion.reverseQueue(q2));
		> [100, 200, 300]
		```

2. Write a static method, `void printPrimeFactors(int x)` that prints all prime factors of the given integer. If your code is working, it should list all prime integers such that their product is equal to `x`. Any value of `x` that is less than 2 by definition does not have any prime factors. **Hint:** 

		```java
    System.out.println("Prime factors of 0");
    Recursion.printPrimeFactors(0);
		> (no output)

    System.out.println("Prime factors of 2");
    Recursion.printPrimeFactors(2);
		> 2

    System.out.println("Prime factors of 4");
    Recursion.printPrimeFactors(4);
		> 2
		> 2

    System.out.println("Prime factors of 6");
    Recursion.printPrimeFactors(6);
		> 2
		> 3

    System.out.println("Prime factors of 7");
    Recursion.printPrimeFactors(7);
		> 7

    System.out.println("Prime factors of 99");
    Recursion.printPrimeFactors(99);
		> 3
		> 3
		> 11

    System.out.println("Prime factors of 121");
    Recursion.printPrimeFactors(121);
		> 11
		> 11

    System.out.println("Prime factors of 1024");
    Recursion.printPrimeFactors(1024);
		> 2
		> 2
		> 2
		> 2
		> 2
		> 2
		> 2
		> 2
		> 2
		> 2
		```

1. A permutation is a sequencing of the elements in a given set. Write a static method called `List<List<E>> permute(List<E> items)` that takes as input a list of elements recursively determines all permutations of the given list. For instance, if a list contains 3 elements `[A,B,C]` then this method should return the list containing $$3! = 6$$ permuted lists: `[A,B,C]`, `[A,C,B]`, `[B,A,C]`, `[B,C,A]`, `[C,A,B]`, and `[C,B,A]`. Do not report duplicate permutations. It should be noted that the permutation of an empty list is also empty list. Also note that, if your list is size $$n$$, then you have $$n!$$ permutations. 

	 **Hint:** Write a private helper method that inputs 

    ```java
    AdvancedLoops loopie = new AdvancedLoops();
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


#### Program Defensively

You can't control how another user or program chooses to use your methods. For each method, think critically about all the things that could go wrong and cause an unintended result (e.g., a runtime error, infinite loop/recursion, etc.). Chances are, I'll be trying all kinds of inputs (negative values, zeroes, nulls, empty-strings, etc.) when I grade your program. The mark of a good programmer is one that can anticipate such scenarios ahead of time and ensure that their program handles all sorts of errors gracefully.

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 90pts.

[15pts] reveal() is implemented. It inputs a positive integer, n, and prints n lines
of output. Each line of output reveals one more digit.

[15pts] printFactorials() is implemented. It inputs a non-negative integer, n, and prints
out 0!, 1!, 2!, ..., (n-1)!, n!, each on a separate line.

[15pts] rotateRight() is properly implemented. Each element in the array is shifted 
by one place to the right. The last element is dropped in the front.

[20pts] vowelRatio() is implemented. This method returns the fraction of letters that are
vowels in the given string.

[20pts] barGraph() is implememted. This method prints out a horizontal bar graph, with
each bar of asterisks representing the number in the corresponding array element.

Misc.
[5pts] You provide Javadocs style comments for any new methods implemented. You include
sufficient inline comments to explain the logic of your methods.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu.
