## CS 161 - Intro to Computer Science

### Lab 9: Array Sorcery!!!
Welcome to the world of arrays — where order matters and one-off errors lurk in the shadows around every corner. In this lab, you’ll sharpen your skills in one of the most fundamental (and honestly, most satisfying) parts of programming: array manipulation.

Why do arrays matter? Because whether you’re building a video game inventory system, crunching scientific data, or decoding alien transmissions (hey, you never know), arrays are simply everywhere in our everyday lives. Being able to slice, swap, shift, and scan through them with ease is a superpower every programmer needs.

You’ll write methods that flip, shift, filter, and transform arrays — and maybe even feel a little like a wizard doing it. 

#### Student Outcomes
By the end of this lab, students will be able to:
- Access and manipulate elements in an array using index-based operations.
- Implement common array algorithms such as swapping, shifting, reversing, and filtering.
- Apply control structures (loops and conditionals) to process and transform array data.
- Demonstrate problem-solving skills in breaking down array challenges into manageable steps.

#### Instructions

- Open BlueJ and create a new project called `ArrayLab`. This class will not have any fields or constructors. You'll just be writing and testing various methods. 

- For convenience all the methods below require you to write `static` methods, so you don't need to instantiate an `ArrayLab` object in order to run and test your code.

- To test, you can just copy and paste the test code that I supply you directly in the BlueJ "Code Pad"

#### Array Problems

1. (Mild) Write a method `public static int countOccurrences(int[] array, int target)` that returns the number of occurrences of the `target`  in the array.

    Code Pad:

    ```java
    int[] array1 = {1, 2, 3, 2, 4, 2};
    System.out.println(ArrayLab.countOccurrences(array1, 2));
    > 3

    System.out.println(ArrayLab.countOccurrences(array1, 9));
    > 0
    ```

2. (Mild) Write a method `public static int[] threshold(int[] array, int t)` that returns a new integer array with the same length as the input array. For each index i, the new array should contain 0 if `array[i]` is strictly less than the threshold `t`, and the old value otherwise.

    Code Pad:

    ```java
    import java.util.Arrays;
    int[] array = {1, 2, 3, 2, 4, 2};
    System.out.println(Arrays.toString(ArrayLab.threshold(array, 3)));
    > [0, 0, 3, 0, 4, 0]
    ```

3. (Mild) Write a method `public static String stringify(String[] array)` that inputs an array of strings, then produces and returns a string that is the concatenation of all the strings in the array. (See examples below)

    Code Pad:

    ```java
    String[] array1 = {"blue", "green", "red"};
    System.out.println(ArrayLab.stringify(array1));
    > bluegreenred

    String[] array2 = {"A", " ", "B", " ", "A"};
    System.out.println(ArrayLab.stringify(array2));
    > A B A
    ```


4. (Medium) Write a method, `public static int[] cumulativeSum(int[] array)`, that creates a new array where each element is the sum of itself and all of its previous elements. Hint: Notice the new array is the same length as the input array, and the first element is always the same. Write a loop to fill the cumulative array with the sum of the current array element and the previous element of the cumulative array.

   Code Pad:

    ```java
    import java.util.Arrays;
    int[] array1 = {1, 2, 3};
    System.out.println(Arrays.toString(ArrayLab.cumulativeSum(array1)));
    > [1, 3, 6]

    int[] array2 = {10, 30, 50, 70};
    System.out.println(Arrays.toString(ArrayLab.cumulativeSum(array2)));
    > [10, 40, 90, 160]
    ```


5. (Spicy) Write the method `public static int[] mirror(int[] array)` that returns a new array that mirrors the original (i.e., the original + reverse of original). Hint: Notice the length of the mirrored array is twice as long as the input array. Write two loops -- one that simply copies the first half, and one that copies the second half in reverse order.

    Code Pad:

    ```java
    import java.util.Arrays;
    int[] array1 = {100, 200};
    System.out.println(Arrays.toString(ArrayLab.mirror(array1)));
    > [100, 200, 200, 100]

    int[] array2 = {10, 30, 50, 70};
    System.out.println(Arrays.toString(ArrayLab.mirror(array2)));
    > [10, 30, 50, 70, 70, 50, 30, 10]
    ```



#### Extra Puzzles (Strongly Encouraged)
You won't get any extra credit for these, but doing them will bring you to enlightenment. (And great practice for exams!)

- (Mild) Write a method `public static int[] removeEvens(int[] array)` that returns a new array containing only the odd numbers from the input array. Hint: You need to count the number of odds before you can create the array to return. Recall that you can test to see if a value `x` is odd by using `x % 2` and testing if it equates to 1.

   Code Pad:

    ```java
    import java.util.Arrays;
    int[] array1 = {1, 2, 3, 4, 5, 6};
    int[] oddsOnly1 = ArrayLab.removeEvens(array1);
    System.out.println(Arrays.toString(oddsOnly1));
    > [1, 3, 5]

    int[] array2 = {10, 30, 50, 70};
    int[] oddsOnly2 = ArrayLab.removeEvens(array2);
    System.out.println(Arrays.toString(oddsOnly2));
    > []
    ```

- (Medium) Write a method `public static double secondLargest(double[] array)` that returns the second largest element in the input array. If the second-largest element doesn't exist, return `Double.NaN`. Hint: Find the largest (max) element first, then ignore it in the second pass. 

   Code Pad:

    ```java
    double[] array1 = {2, 0, 4, 5, 6, 3, 1};
    System.out.println(ArrayLab.secondLargest(array1));
    > 5.0

    double[] array2 = {80, 30, 20, 50, 70, 10, 100};
    System.out.println(ArrayLab.secondLargest(array2));
    > 80.0

    double[] array3 = {10, 10, 10};
    System.out.println(ArrayLab.secondLargest(array3));
    > NaN
    ```

- (Spiciest) Write a method, `public static void zeroes2End(int[] array)` that moves all zero values to the end of the array, but what makes it tough is that you need to maintain the order of non-zero elements. Your code must work on the input array directly. Do not create a new array as there's nothing to return! Hint: You need two indices: one from the left that moves right to find a zero. Once you find a zero, introduce a second index starting at that same position and moves to the right, finding a non-zero. If you find a non-zero using the second index, swap the two elements. Continue until the first index reaches the end.

   Code Pad:

    ```java
    double[] array1 = {0, 1, 0, 3, 12};
    ArrayLab.zeroes2nd(array1);
    System.out.println(Arrays.toString(array1));
    > [1, 3, 12, 0, 0]

    double[] array2 = {50, 0, 0, 0, 70, 0, 10, 100, 0, 0};
    ArrayLab.zeroes2nd(array2);
    System.out.println(ArrayLab.toString(array2));
    > [50, 70, 10, 100, 0, 0, 0, 0, 0, 0]
    ```


#### Grading

```
This lab assignment will be graded out of a total of 2 pts.
```


#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu.
