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

1. (Mild) Write a method `public static int countOccurrences(int[] array, int target)` that returns the number of occurrences of the `target` in the array. You just need to traverse and examine every element in the array and cmpare it with the `target`. 

    Code Pad:

    ```java
    int[] array1 = {1, 2, 3, 2, 4, 2};
    System.out.println(ArrayLab.countOccurrences(array1, 2));
    > 3

    System.out.println(ArrayLab.countOccurrences(array1, 9));
    > 0
    ```

2. (Mild) Write a method `public static String stringify(String[] array)` that inputs an array of strings, then produces and returns a string that is the concatenation of all the strings in the array. (See examples below). 

    Code Pad:

    ```java
    String[] array1 = {"blue", "green", "red"};
    System.out.println(ArrayLab.stringify(array1));
    > bluegreenred

    String[] array2 = {"aaa", " ", "bbbb", " ", "aaa"};
    System.out.println(ArrayLab.stringify(array2));
    > aaa bbbb aaa
    ```

    If you found this too easy,  try to capitalizing each word to create camel case.
    ```java
    String[] array1 = {"blue", "green", "red"};
    System.out.println(ArrayLab.stringify(array1));
    > BlueGreenRed

    String[] array2 = {"aaa", " ", "bbbb", " ", "aaa"};
    System.out.println(ArrayLab.stringify(array2));
    > Aaa Bbbb Aaa
    ```


3. (Medium) Write a method, `public static int[] cumulativeSum(int[] array)`, that creates a new array where each element is the sum of itself and all of its previous elements. **Hint:** Notice the new array is the same length as the input array, and the first element is always the same.

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

4. (Medium) Write a method `public static boolean palindrome(int[] array)`  that determines an array can be read the same forwards and backwards. Your algorithm must be "in-place" (in other words, you are not allowed to create another array). Consider the following usage:

    Code Pad:

    ```java
    int[] array1 = {1, 2, 3, 2, 1};
    System.out.println(palindrome(array1));
    > true

    int[] array2 = {1, 2, 3, 4, 4, 3, 2, 1};
    System.out.println(palindrome(array2));
    > true

    int[] array3 = {1, 2, 3, 1};
    System.out.println(palindrome(array3));
    > false
    ```

5. (Spicy) Write the method `public static int[] mirror(int[] array)` that returns a new array that mirrors the original (i.e., the original + reverse of original). **Hint:** Notice the length of the mirrored array is twice as long as the input array. Would it help to write two loops? One that simply copies the first half down, and one that copies the second half in reverse order.

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


6. (Spiciest) Write the method `public static int[] interleave(int[] array1, int[] array2)` that returns a new array that interleaves the two input arrays by alternating their elements. The first element of the combined array should come from `array1`. You may not assume that the input arrays are of the same length. If they differ in length, the remaining elements left over from the longer input array are copied to the back of the combined array. **Hint:** I would use 3 iterators, one for traversing each array.

    Code Pad:

    ```java
    import java.util.Arrays;
    int[] array1 = {100, 200, 300};
    int[] array2 = {1, 2, 3};
    System.out.println(Arrays.toString(ArrayLab.interleave(array1, array2)));
    > [100, 1, 200, 2, 300, 3]

    int[] array3 = {100, 200, 300, 400, 500};
    int[] array4 = {5, 6};
    System.out.println(Arrays.toString(ArrayLab.interleave(array3, array4)));
    > [100, 5, 200, 6, 300, 400, 500]
    ```


#### Extra Puzzles (Strongly Encouraged)
You won't get any extra credit for these, but doing them will bring you enlightenment. (And great practice for exams!)

- (Medium) Write a method `public static int[] removeEvens(int[] array)` that returns a new array containing only the odd numbers from the input array. **Hint:** You need to count the number of odds before you can create the array to return. Recall that you can test to see if a value `x` is even by using `x % 2` and testing if it equates to 0.

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

- (Medium) Write a method `public static double secondLargest(double[] array)` that returns the second largest element in the input array. If the second-largest element doesn't exist, return `Double.NaN`. Hint: Find the largest (max) element first, then write a similar loop to find the largest again while ignoring the largest element. 

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


- (Spiciest) Write a method, `public static void zeroes2End(int[] array)` that moves all zero values to the end of the array, but what makes it tough is that you need to maintain the order of non-zero elements. Your code must work on the input array directly. You must do this "in-place" (Do not create a new array as there's nothing to return!)  **Hint:** Though you don't necessary *need* to, if you ever needed to end a loop early, you can use the command `break;`

   Code Pad:

    ```java
    import java.util.Arrays;
    int[] array1 = {0, 1, 0, 3, 12};
    ArrayLab.zeroes2End(array1);
    System.out.println(Arrays.toString(array1));
    > [1, 3, 12, 0, 0]

    int[] array2 = {50, 0, 0, 0, 70, 0, 10, 100, 0, 0};
    ArrayLab.zeroes2End(array2);
    System.out.println(Arrays.toString(array2));
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
