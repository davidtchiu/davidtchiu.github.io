## CS 161 - Intro to Computer Science

### Homework 6: A Brute-Force Combo Guesser

David is pretty impressed with all the programs that you've been writing. He has been talking you up to his buddies. One of them, who wishes to remain anonymous, wants your help installing a new electronic lock on the safe (like the one shown to the right) to store their valuables. The safe is one of those fancy ones that allow you to "program" its combination.

The "key" for the lock is just a sequence (array) of integers, and David's friend is trying to decide how long this key sequence should be (how many numbers it contains), and the range of values used for each number in the key (between zero and some upper limit). They want to make sure it's hard for intruders to guess, but their memory isn't what it used to be, so they also to keep it on the simple side, if possible.

Your job is to help estimate the "strength" of various combination configurations. Sure, you could just calculate the total number of possible combinations (permutations), given the length of a combination and the range of possible values at each position, and use that to estimate the strength of a configuration but it'll be more fun to write a program to test it!

#### Student Outcomes

- Practice writing methods for object comparison
- Using arrays
- Using loops to access array elements

#### Required Files

The following file(s) have been provided for this homework.

- [Lab_ComboGuesser.zip](Lab_ComboGuesser.zip)

#### Instructions

Your program will consist of two classes: A `Combination` class that represents the sequence of integers that make up a combination, and a `ComboGuesser` class that repeatedly creates `Combination` instances, and compares them to the "right answer". I've created a new project to get you started, but it only contains the beginnings of the `Combination` class. You'll need to create a new class for `ComboGuesser` when the time comes, but I'm recommending that you start by getting the `Combination` class working before writing the `ComboGuesser` class.

##### Combination Class

Your `Combination` class should contain the following elements:

- A Combination is nothing more than an integer array! Store one as your instance variable.

- A constructor that inputs two integer arguments: `length` and `max`. 
  - The `length` refers to the length of the combination sequence (array) to be constructed.
  - The `max` refers to the highest value for each of the numbers in the combination. A single number in the combination can therefore range from 0 to `max` (both inclusive).
  
  The constructor should initialize the `Combination` instance to hold random values within the appropriate range for each of the values in the sequence. You still remember how to generate radom numbers right? Remember to handle erroneous input such as negatives.

- A method called` toString()` that returns a string containing the values in the combination. For full credit, the values should be separated by commas and a space (except for the last number), with square brackets around the whole thing.  For example, if the combination contains the values 5, 2, 2, and 3, the returned value from this method should be `"[5, 2, 2, 3]"`.

  The sample interactions below illustrate the creation of several different `Combination` objects, and output from `toString` for each:

  ```java
  Combination c = new Combination(4, 2);
  System.out.println(c.toString())
  > [2, 1, 2, 0]

  c = new Combination(4, 2);
  System.out.println(c.toString())
  > [1, 1, 0, 2]

  c = new Combination(6, 10);
  System.out.println(c.toString())
  > [1, 6, 10, 8, 7, 0]

  c = new Combination(1, 2);
  System.out.println(c.toString())
  > [2]
  ```

- A `setValue(int index, int newValue)` method that takes two integer arguments: The (zero-based) index of the value within the sequence to be changed, and the new value to be stored there. The value should only be changed if the index is valid, and the specified value is within the allowed range.

  ```java
  //create a 4-number combination, and each number can range from 0 to 2
  Combination c = new Combination(4, 2);
  System.out.println(c.toString())
  > [1, 0, 0, 2]

  c.setValue(0, 2);   //set the number at the 0-position to 2
  System.out.println(c.toString())
  > [2, 0, 0, 2]

  c.setValue(-4, 2);  //invalid position (-4) given: should have no effect
  System.out.println(c.toString())
  > [2, 0, 0, 2]

  c.setValue(3, 1);   //set the number at the 3-position to 1
  System.out.println(c.toString())
  > [2, 0, 0, 1]

  c.setValue(3, 3);   //trying to set a number out of range (3): should have no effect
  System.out.println(c.toString())
  > [2, 0, 0, 1]

  c.setValue(4, 0);   //invalid position (4) given: should have no effect
  System.out.println(c.toString())
  > [2, 0, 0, 1]

  c.setValue(1, -3);  //trying to set a number out of range (-3): should have no effect
  System.out.println(c.toString())
  > [2, 0, 0, 1]
  ```

- A method called `equals(Combination other)` that takes a `Combination` object as its only argument, and returns a `boolean`. If the `Combination` object passed in has the same length _and_ sequence as the object on which the method is called, the method should return true. It should return false if the length and/or if its contents differ.

  ```java
  Combination c1 = new Combination(4, 2);
  System.out.println(c1.toString())
  > [0, 0, 0, 1]

  Combination c2 = new Combination(4, 2);
  System.out.println(c2.toString())
  > [2, 0, 2, 1]

  System.out.println(c1.equals(c2));
  > false

  System.out.println(c1.equals(c1));
  > true

  c2.setValue(0, 0);  //set the number at the 0 position to 0
  c2.setValue(2, 0);  //set the number at the 2 position to 0
  System.out.println(c2.toString())
  > [0, 0, 0, 1]

  System.out.println(c1.equals(c2));
  > true
  ```

##### ComboGuesser Class

After testing your `Combination` class thoroughly, create a new `ComboGuesser` class. The `ComboGuesser` class will keep track of a specific `Combination` (we'll call it the `key`), and repeatedly generate random `Combination` instances until it finds one that matches. Your `ComboGuesser` class should contain the following methods:

- A constructor that takes three arguments: The length of the combination and the maximum value, and a `Combination` instance to use as the key. Store all these inputs as instance variables. (You may assume that the length and maximum value passed as arguments are the same as the values used to create the `Combination` instance that is input.)

- A method called `public void guessCombo()` that generates random Combination instances until it finds one that matches the key. It should then print information about the key and the number of guesses required.

- The sample outputs below first show a `ComboGuesser` guessing at a randomly-determined key. Then, a specific key is constructed (setting values within the key to the maximum and minimum possible helps ensure thorough testing), and a new `ComboGuesser` is created to guess the specified key. (The output from `guessCombo()` would appear in the terminal window, not the codepad.)

  ```java
  // Create a key first
  Combination myKey = new Combination(5, 10);
  System.out.println(myKey.toString());
  > [10, 3, 9, 4, 0]

  // Hmm, how strong is my key? Let's see how many tries it would take to "crack it"
  ComboGuesser cracker = new ComboGuesser(5, 10, myKey);
  cracker.guessCombo();
  > It took 116561 guesses to guess
  > [10, 3, 9, 4, 0]
  ```

#### Grading

```
This assignment will be graded out of 65 points:

[15pt]  Your Combination constructor properly initializes the a 
        array of random integers of the given range and length.

[15pt]  Your Combination's toString() method generates and returns
        the combination sequence. It must be enclosed in square brackets.
        Each number in the combination must be separated by a comma and a
        space.

[10pt]  Your Combination's equals(Combination other) method is properly
        implemented. Two combinations are equal if they have the same
        array sequence.

[5pt]   The setValue() method allows users to (re)set a specific value at a
        given position. Your method handles bad inputs (range and position)

[15pt]   The ComboGuesser's guess() method is properly implemented. There should
        be a loop to repeatedly generate random combination objects, and comparing
        it to the given "key" combination. It needs to keep track of how many guesses
        it's taking, and it outputs this number after it's cracked the key!

[5pt]   All methods include a JavaDocs comment describing its interface.
```


#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by Brad Richards.
