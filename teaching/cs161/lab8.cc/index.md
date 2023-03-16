## CS 161 - Intro to Computer Science

### Lab: Book ISBN Validation

Many things across the world are associated with unique identifiers. For instance, just about every item for sale has a 12 or 13-digit universal product code (UPC barcode) that can be scanned to identify the product being sold. Every car has a unique 17-character vehicle identification number (VIN), and most credit cards have a unique 16-digit number. With the average code length being quite long, it is expected that people might make mistakes when typing them out. (Just think of the number of times you've screwed up typing your credit card number when making an online purchase!) What's worse, even if you typed the code out correctly, it can be corrupted when it's sent over a network and while it's being stored on disk. That's a big problem! How would we efficiently ensure that a given code is correct?


#### Student Outcomes

- Practice writing methods for object comparison
- Using arrays
- Using loops to access array elements



#### Required Files

The following file(s) have been provided for this homework.

- [Lab8_CC.zip](Lab8_CC.zip)

##### Validating Credit Cards (Luhn's Algorithm)

- Download the lab file, extract it, and open it up. For this project, you don't need to make any changes to the `Main` or the `GUI` class. Right-click on the `Main` class and run the `main` method. In the window that pops up, leave everything as is, and click "OK". This should bring up a graphical user interface (GUI -- pronounced "gooey") that asks for a credit card number. Nothing you enter will work at this point.

- Open the `CCValidator` class. You just need the two instance variables:

  - An int array that we will call `payload`. This array will be used to represent the first 15 digits of a 16-digit credit card number.
  - An int we'll call `checksum`. The checksum is always the last (16th) digit of a credit card number.

- Write a method called `loadSequence()` that takes as input a `String` credit card number. This method should first check to see if the number is 16 digits. If not, then return `false` immediately. You will want to refer to your **String API**. Otherwise, you'll need to do the following:

  - Use the `charAt()` method in the **String API** to extract and store the final digit in the credit card number in your `checksum` field. However, `charAt()` returns a `char` and not an `int` data type. So you'll also need to convert this `char` into an `int` by calling `Character.getNumericValue()` on the character to return the `int` for storage.

  - Next, you'll want to instantiate your `payload` array (recall that the payload of a credit card number is the first 15 digits). Then iterate through the input string and extract every digit (just as you did previously) into its corresponding position in `payload`.

  - After all that is done, return `true`.

- Write a method called `validate()` that returns a `boolean` and inputs nothing. The algorithm you're about to write is known as [Luhn's Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) and it's implemented in just about every credit-card reading device in the world! 

  - Starting with the right-most digit of the payload, double that digit and moving left, you need to double every other digit you encounter. Of the numbers that you doubled, add all digits of those numbers up (for instance, `18` becomes `1 + 8 == 9`). Now sum up all the digits including the checksum. Then take `s % 10`, where `s` is the sum from the previous step. If the modulo is zero, then the credit number is valid. Otherwise, it's invalid.

  - For instance, let's say that I entered my 16-digit credit card info manually into an online form: 3979250428219432. The payload is 397925042821943 and the checksum is the last number of my credit card number: 2. Starting from the right-most digit of the payload, we'll double every other digit to obtain "Step 1":

    <table border="1">
      <tr>
        <td>Original Payload</td>
        <td>3</td>
        <td>9</td>
        <td>7</td>
        <td>9</td>
        <td>2</td>
        <td>5</td>
        <td>0</td>
        <td>4</td>
        <td>2</td>
        <td>8</td>
        <td>2</td>
        <td>1</td>
        <td>9</td>
        <td>4</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Step 1: Doubling Every Other Digit</td>
        <td>6</td>
        <td>9</td>
        <td>14</td>
        <td>9</td>
        <td>4</td>
        <td>5</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
        <td>8</td>
        <td>4</td>
        <td>1</td>
        <td>18</td>
        <td>4</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Step 2: Sum the Digits in Each Position</td>
        <td>6</td>
        <td>9</td>
        <td>5</td>
        <td>9</td>
        <td>4</td>
        <td>5</td>
        <td>0</td>
        <td>4</td>
        <td>4</td>
        <td>8</td>
        <td>4</td>
        <td>1</td>
        <td>9</td>
        <td>4</td>
        <td>6</td>
      </tr>
      </table>


- Then in "Step 2" we add up all the all the digits for any number that we doubled in Step 1. This seems hard, but there's pattern to it all. But because you're only doubling a single digit that ranges from 0 to 9 in Step 1, the doubled numbers here can only range from 0, 2, 4, 6, ..., 18. Of those, you only need to worry about half of them, because you just need to be concerned about adding up the two-digit numbers: 10, 12, 14, 16, and 18. These numbers add up to 1, 3, 5, 7, and 9, respectively. Say, there's a pattern ... do you recognize it?

Write a helper method called `twoDigitSum()` that inputs an integer, adds up the digits in the input, and returns this sum. If the number is a single-digit, then just return the number trivially. If you did it properly, you should get outputs like:

  ```java
  twoDigitSum(5)
  > 5

  twoDigitSum(0)
  > 0

  twoDigitSum(12)
  > 3

  twoDigitSum(16)
  > 7
  ```

- After you've implemented and tested `twoDigitSum()` we can finally finish off "Step 2". Back inside the `validate()` method, place all the sums in another array of size 15 (because we don't want to overwrite the original `payload`.) To do this, you can just instantiate a local array variable inside the method. Fill this local array with the numbers you obtained in "Step 2."

- Finally, we add up all the values resulting from "Step 2" in your local array to obtain: 
6 + 9 + 5 + 9 + 4 + 5 + 0 + 4 + 4 + 8 + 4 + 1 + 9 + 4 + 6 == 78. Then add in the checksum to obtain 78 + 2 == 80, and calculate 80 % 10. Because this result is zero, this credit card number validates.

- To test, go back and run the `main` method. You may not want to use your own credit card numbers to test, which is understandable, but <a href="https://www.dcode.fr/luhn-algorithm">this link</a>
	lets you generate  valid credit card numbers! 


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

Written by David Chiu. 2023.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
