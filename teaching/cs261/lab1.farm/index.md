## CS 261 - Computer Science II

### Warmup Lab: Around the Farm

This lab serves a dual purpose: as a review, and as motivation for introducing higher abstraction concepts in Java. Backstory: David hails from the midwest, and thus has spent a considerable amount of time hanging around quintessential midwesterner things like flea markets, state fairs, corn fields, farms, and oh yeah, more farms. He is pictured below with a piglet at an Ohio county fair (yes, wearing a pig shirt). Anyway, David is interested in writing a program that simulates what animal life might be on the farm... so let's get to it.

<img width="300px" src="figures/pig.jpg" />


This assignment does not require you to apply inheritance techniques.

#### Objectives
- To review introductory Java concepts
- To motivate higher level class abstraction
- To practice the procedure for submitting your work

#### Preliminary: Where to Save My Files?
If you are using your laptop, you must first download and install BlueJ or any other Java editor. You cannot proceed until the installation is complete. Backing up your work is really important for this class. I strongly recommend you use the college-provided [Google Drive](https://drive.google.com) account, and drop all files relating to this class in there.


#### Part I: Cows Go "Moo"
- There is no starter file for this lab. Open your Java editor and create a new project.

- Once the project is created, go ahead and create a new class called `Cow`. Recall the generic template for writing classes looks like this code block below. 
  ```java
  /* import statements (if needed) go here */

  /**
  * This is a block-comment describing the Cow class.
  * @author David
  * @version 9/1/2020
  */
  public class Cow {
      // instance variables (fields) go here

      // constructors go here

      // methods go here
  }
  ```

- Every cow needs to remember these three pieces of data, so these should all be declared as **instance variables**.  A `Cow` class has a `name` (String), another string `quote` that it *utters* (no, not *"udders"* LOL!) when it's excited (String), and the `gallons` of milk it has produced (let's make that a `double`). You should recall that instance variables are generally declared to be `private`. For example, the name of the `Cow` should be declared as:

  ```java
  private String name;  // stores a cow's name
  ```


- Write two **constructors** for the Cow class. Remember that the constructor's task is to set up (initialize) a new Cow object's state. In our case, we just need to give initial values to the three instance variables we previously declared. The *default* (no-input-argument) constructor creates a garden variety Cow, named `"Bessie"` and it utters, `"Moo."` 

  ```java
  /**
   * This constructs a default Cow named Bessie that says "Moo"
   */
  public Cow() {
    // code to initialize values of instance variables
  }
  ```

- Now write a second constructor taking two input arguments, allowing the caller to provide a Cow's name and a customized quote. Both constructors should also initialize the gallons milked to `0.0`. This `Cow` constructor's syntax looks like the following:
  ```java
  /**
   * This constructs a named cow with the specified utterance
   */
  public Cow(String cowName, String utterance) {
    // code to initialize values of instance variables
  }
  ```

- Next, write the following methods (your method signatures must match those below). As you write your methods, don't forget to test intermittently. In order to succeed in this course, you have to develop the good coding habit of "write-a-little, test-a-little."

  - `public String getName()`: simply `return`s the cow's name.
  - `public void moo()`: prints the cow's name followed by its quote on the screen.
  - `public void milk()`: causes the cow to `moo()` and it *accumulates* a half gallon of milk.
  - `public void display()`: prints the cow's name, followed by quote, followed by amount of milk produced all on a different line (see below).

- **Tester class and the main method** Now it's time to test your code. Create a new classed named `Tester` that contains a single *static* method `public static void main(String[] args)`.

  ```java
  public class Tester {
    /**
     * My testing method
     */
    public static void main(String[] args) {
        Cow myCow = new Cow("Tuffy", "Mewwww");
        myCow.moo();
        myCow.display();
        myCow.milk();
        myCow.milk();
        myCow.display();
    }
  }
  ```

  Now *run* this main method. Here's the output you should expect minus the line spacing that I threw in here for readability.
  ```
  > Tuffy: Mewwww       <---- From calling myCow.moo()

  > Name: Tuffy         <---- From calling myCow.display()
  > Quote: Mewwww
  > Milk produced: 0.0 gallons

  > Tuffy: Mewwww       <---- From calling myCow.milk()

  > Tuffy: Mewwww       <---- From calling myCow.milk() a second time

  > Name: Tuffy         <---- From calling myCow.display()
  > Quote: Mewwww
  > Milk produced: 1.0 gallon
  ```

#### Part II: A Cow Farm

- Once you're sure the `Cow` class is in working order, let's now create a `Farm` class to hold all them cows. Any number of cows can roam on this farm. We will use an `ArrayList` to hold `Cows`. Recall that you have to first `import java.util.ArrayList;` at the very top of the new class file. Do you remember how the ArrayList works? Here's a [short tutorial](https://www.w3schools.com/java/java_arraylist.asp).

- Create a single instance variable, an `ArrayList` of cows:
  ```java
  private ArrayList<Cow> allCows;
  ```


- Write the default (no input arguments!) constructor for `Farm`, which simply instantiates an empty `ArrayList` of cows. You might recall (it's okay if you don't!) that, to instantiate (or create) an new ArrayList, you need to use the following syntax. That's the only line of code you need here!

  ```java
  allCows = new ArrayList<Cow>();
  ```

- Next, write the following methods:

  - `public void addCow(Cow someCow)`: adds the given cow to the farm. In other words, add the cow to your list. Order does not matter.
  - `public void exciteAll()`: causes all cows to moo.
  - `public void summary()`: prints out the list of cows' information. (see below)

- Now modify your Tester's `main()` method to test the `Farm` class. Here's one example of how I tested it:

  ```java
  Farm myFarm = new Farm();
  myFarm.addCow(new Cow());  // construct a "default cow" and pass it into addCow()
  myFarm.addCow(new Cow("Tuffy", "Mewww"));
  myFarm.addCow(new Cow("Fred", "Meh"));
  myFarm.exciteAll();
  myFarm.summary();
  ```

- And your output should match mine:

  ```
  > Bessie: Moo      <---- From calling myFarm.exciteAll()
  > Tuffy: Mewww
  > Fred: Meh
  
  > -------------      <---- From calling myFarm.summary()
  > Farm Summary
  > -------------
  > # 1
  > Name: Bessie
  > Quote: Moo
  > Milk produced: 0.0 gallons
  >
  > # 2
  > Name: Tuffy
  > Quote: Mewww
  > Milk produced: 0.0 gallons
  >
  > # 3
  > Name: Fred
  > Quote: Meh
  > Milk produced: 0.0 gallons
  ```

#### Part III: Birds
So, I'm not sure you know this, but it turns out that birds like to hang out on farms too. Create a `Bird` class.

- Write two constructors. The default constructor creates a "garden-variety" bird, which is named `Fowl` and it says `"Chirp."` A second constructor allows the caller to input a bird's name and a custom quote. A bird also must track the number of eggs it has laid (integer).


- Next, write the following methods with these exact signatures:

  - `public String getName()`: returns the bird's name.
  - `public void squawk()`: prints the bird's name followed by its quote on the screen.
  - `public void layEgg()`: causes the bird to squawk and produces an egg.
  - `public void display()`: prints the bird's name, followed by quote, followed by the number of eggs laid, all on a different line (see below).


- Go back and modify your `main()` method to test the `Bird` functionalities. Bird objects behave mostly like Cow objects, with only some minor differences.

#### Part IV: Updating the Farm

- Now that Birds are allowed on the farm, we need to make some changes to our `Farm` class to account for them too. In addition to the list of `Cows`, the `Farm`  now needs a second ArrayList to hold all the `Birds`. Go ahead and add this in now.

- Add a `public void addBird(Bird someBird)` method that adds the given bird to the farm.

- Modify the `exciteAll()` method to also make the birds squawk. Similarly, `summary()` should also print all the birds' info.

- Here's my test, though yours might look differently:

  ```java
  Farm farm = new Farm();
  farm.addCow(new Cow());
  farm.addBird(new Bird());
  farm.addBird(new Bird("Prailine", "Squawk"));
  farm.exciteAll();
  farm.summary();
  ```

- Here's my output:
  ```
  > Bessie: Moo
  > Fowl: Chirp
  > Prailine: Squawk
  >
  > -------------
  > Farm Summary
  > -------------
  > # 1
  > Name: Bessie
  > Quote: Moo
  > Milk produced: 0.0 gallons
  >
  > # 2
  > Name: Fowl
  > Quote: Chirp
  > Eggs produced: 0 eggs
  >
  > # 3
  > Name: Prailine
  > Quote: Squawk
  > Eggs produced: 0 eggs
  ```

#### Food for Thought
... And that's it! Before you submit the lab, though, you probably already see where this is going. Take a little bit of time to reflect on the following issues you likely encountered. Much of the code in `Bird` were very similar to those in `Cow`. Were there code that were exact duplications? Seems like there should be a way for two classes to share the same code? Also reflect on the amount of code you needed to update (and often duplicate) in the `Farm` class every time a new animal is introduced to the farm. Tomorrow, we'll learn techniques to address these issues: *Object Inheritance!*


#### Grading

```
This assignment will be graded out of 2 points, provided that:

- You were in attendance and on-time.
- Your Bird, Cow, and Farm classes are fully implemented.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu. 

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
