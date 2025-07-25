## CS 161 - Intro to Computer Science

### Lab 3: Writing the Stomach Class

In this assignment you will write your first class from scratch. This class models a very rudimentary stomach, which can ingest food, regurgitate, and digest food. (Image source: Flaticon License)

<img src="figures/stomach.png" width="300px" />

#### Student Outcomes

- Practice basic class writing from scratch
- Practice with integer operations
- To learn to use objects of the `Random` class to generate random integers

<!-- 
#### Working with Partners (Please Read)

You are required to work _together_ on labs. As I mentioned the first day of class, some of you may have had some prior programming experience, and this lab may come more naturally for you. Please be humble and be supportive to one another, and don't leave your partner behind. Labs are _very_ low-stakes, and you'll get full credit for being here, working through it, and being a good citizen. We'll be around to help.

Here are your assigned partners for today's lab.

```
[Murayama, E, Strash, K]
[Culpepper, A, Steller, L]
[Jones, S, Rodriguez, C]
[Beardsley, M, Roppolo, G]
[Camblin, F, Murphy, C]
[Jones, B, Brown, A]
[Wissing, A, Miller, D]
``` -->

#### The Stomach Class

There is no starter code this week to download. You need to create a new project in BlueJ. Open BlueJ and use the Project > New Project menu. It'll want you to choose a location on your computer to store and save this project. Make sure you choose somewhere appropriate that you won't forget.

You should see a blank project window. Using the button, create a new class called Stomach. Go ahead and remove everything in the **body** of the class, so that you should just see something like this:

```java
/**
 * Some comments here about my stomach class
 * @author <your name>
 */
public class Stomach {
  // instance variables first

  // constructors next

  // methods last
}
```

Recall that to write a new class, we need to specify three sections: (1) Fields, (2) Constructors, and (3) Methods. In the future, you'll be doing this on your own, but in this early lab, I'm going to tell you what you'll need in each section.

- **Instance Variables:** Your stomach needs to have two fields:

  - A whole number variable to hold the current amount of food sitting in the stomach. `ingested` would be a good name for this field.

  - A whole number variable to hold the total amount of food that has been digested. `digested` would be a good name for this field.

- **Constructors:** Recall that it is the job of the constructor to set up initial values for the instance variables. Your class should have two constructors:

  - A **default constructor**. The assumption here is that, when the stomach is created using this constructor, it is empty and has digested no food. In other words they should both be assigned to 0.

  - A **second constructor** that lets users input a pre-existing whole-number amount of food that's already been ingested in the stomach. (I know, gross.)

    ```java
    /**
     * This constructor creates a stomach object
     */
    public Stomach(list-of-parameters) {
      // code to initialize fields
    }
    ```

- **Methods:** Add the following methods to your class. Test to make sure a method is working before writing the next! Remember what I told you about writing methods? Don't start writing until you've designed it.

  - First, determine what inputs (if any) the method requires (It's early in the semester, so I will tell you in this lab.) For each input, also determine its data type.
  - Next, determine what, if any, this method "owes" the caller. The owed value is called the return value. The data type of the return value is called the return type. The return type is void if the method does not owe the caller anything.
  - Now you're ready to write the method.

- Here are all the methods that your class needs to support. Read each description carefully. After you've designed each method, write it in BlueJ, and test it vigorously before moving on!

  - `ingest()` - This method accepts one input, and does not `return` a value. Running this method causes the stomach to ingest the amount of food given in the input parameter, and this amount should be added to the current amount of food sitting in the stomach.

  - `regurgitate()` - This method does not accept inputs, and it does not need to return. It simply clears out all amounts of food in the stomach back to zero. It has no effect on the amount that has already been digested. It should also print `Gacked up <X>`, where `<X>` is the total amount of food that had been ingested in the stomach prior to zeroing it out. Recall that to print, you can use the method,

    ```java
    System.out.println(thing-you-want-to-print);
    ```
    Make sure you're testing these methods out!

  - `digest()` - This method accepts no inputs and does not `return` a value. Running it causes a random amount of the food that's currently in the stomach to be "digested" and pulled out of the stomach. For example, suppose there are 13 units of food in the stomach, and 30 units have been digested. Select a random number between 0 and 13 (see below on how) to digest. Let's say the random number, 6, is chosen. After the method is finished, the stomach should now contain 7 units of food ingested, with 36 units digested.

    - To write this method, you need to figure out how to ask Java to generate a random value. **Read on.** Java has a convenient built-in class called `Random`, and to use it, you need to import it into your code. Place this line at the very top of your class file, above the class header:

      ```java
      import java.util.Random;
      ```

    - In the body of `digest()`, create a local variable of type `Random` (Yes classes can be used like data types!) as follows:

      ```java
      Random rng = new Random();   // Create a local variable containing a random number generator
      ```

      Now, `rng` is a variable that stores a `Random` object. You can think of it as a random number generator that you can request to spit out a number whenever you need one!

    - Then you can call  `nextInt(int low, int high)` on `rng` method to fetch a random integer between `low` (inclusive) and `high` (exclusive). For example:

      ```java
      Random rng = new Random();
      int x = rng.nextInt(0, 10);     // Returns a random number between 0 and 9, and
                                      // stores it in local variable 'x'
      ```

      This will store a random integer between 0 and 9 in `x`.

    - **As a reminder,** you don't just want to generate a number between 0 and 9 as shown in the example above. It should be a random number between 0 and X, where X is the current amount of food currently in the stomach!


  - `getAmountFood()` - Inputs nothing, and `returns` (doesn't print!) the current amount of food in the stomach.

  - `getAmountDigested()` - Inputs nothing, and `returns` the total amount of food that the stomach has digested.

  - `toString()` - Inputs nothing, and `returns` a String that summarizes the state of the stomach. This method does not print to the screen! In other words, you need to define a local `String` variable that is assigned something like `In stomach: xx, out of stomach: yy`, where `xx` and `yy` refer to those respective  values that are stored in those instance variables.

    - To do this method, you'll probably want to start by creating a local `String` variable that you'll later `return`. You can initially assign an empty string to it: `""`, and build this string up piece by piece using the `+=` operator. For example,

      ```java
      int x = 3;
      String s = "";
      s += "Hello ";
      s += x;
      s += " world";  // s now stores "Hello 3 world"
      ```

<!-- - **Defensive Programming:** Our Stomach is not very robust to erroneous inputs. For instance, Try creating a new Stomach with a negative amount of food in it. It lets you! Now try ingesting a negative amount of food. It lets you! You need to fix these problems next.

  Use an if-then-else statement to alert the user that they've entered an invalid input, and ignore further actions on the stomach's state. For fixing your constructor, it is appropriate to just let Java create an empty stomach.
 -->

- **The Test Code:** Here's some code to test your Stomach class. Copy and paste **all** of the following code block into Blue's code pad. Ask one of us if you don't remember where the code pad is. If your class is bug-free, your output should look similar to mine farther down below.

  ```java
  System.out.println("Creating a new stomach...");
  Stomach s = new Stomach();
  System.out.println(s.toString());
  System.out.println();

  System.out.println("Eating breakfast...");
  s.ingest(5);
  System.out.println(s.toString());
  System.out.println();

  System.out.println("Digesting...");
  s.digest();
  System.out.println(s.toString());
  System.out.println();

  System.out.println("Eating lunch...");
  s.ingest(10);
  System.out.println(s.toString());
  System.out.println();

  System.out.println("Eating an early dinner...");
  s.ingest(20);
  System.out.println(s.toString());
  System.out.println();

  System.out.println("Digesting...");
  s.digest();
  System.out.println(s.toString());
  System.out.println();

  int a = s.getAmountFood();
  System.out.println("We still have " + a + " units of food in our stomach");

  int d = s.getAmountDigested();
  System.out.println("Total we have digested " + d + " units of food");
  System.out.println();
  ```

- If everything is working, you should get something similar to what I got below. Because `digest()` is random, most your values will likely differ. But read through your output carefully to make sure everything makes sense.

  ```
  Creating a new stomach...
  Ingested: 0,  digested: 0

  Eating breakfast...
  Ingested: 5,  digested: 0

  Digesting...
  Ingested: 1,  digested: 4

  Eating lunch...
  Ingested: 11,  digested: 4

  Eating an early dinner...
  Ingested: 31,  digested: 4

  Digesting...
  Ingested: 3,  digested: 32
  ```

#### Average Digested Amount
This last challenge is a tiny bit trickier. It would be nice to know how "efficiently" our stomach is working. On average, how much are we digesting every time the `digest()` method is called? This might be a useful piece of information to know. (E.g., if we’re digesting a very small amount on average then we might have a blockage in our stomach that needs to be examined.)

- Add the following method to your Stomach class: `public double getAverageAmountDigested()`. This method should return the average amount of food that has been digested. For example, if 10 units of food was digested the first time we called `digest()` and 4 units of food the second time we called `digest()`, then on average, we are digesting 7 units of food.


#### Grading

```
This assignment will be graded out of 2 points, provided:

- You were in attendance and on-time.
- Your Stomach class is properly implemented and passes all tests.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all files ending in  `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Adapted for use from a previous lab by America Chambers.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
