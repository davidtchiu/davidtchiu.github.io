## CS 261 - Computer Science II

### Lab 2: Inheritance

This week you'll reinforce inheritance topics you've learned in class by working with a set of Java classes that inherit from one another. You'll see how one class can build off of another, get practice with constructors, learn about the relationship between types and functionality, and wrap up with an exercise that combines inheritance and parameter types.

Note: I *strongly* suggest that you use BlueJ for this lab. The lab involves lots of interactions with the code — creating instances, inspecting their state, and calling methods on them. BlueJ is a much better tool for that than Eclipse or IntelliJ.


#### Objectives
- To practice with inheritance and subtyping.
- To understand the behavior of `super()` and `this()`

#### Required Files
- [Lab_DieInheritance.zip](Lab_DieInheritance.zip)



#### Part I: Basic Inheritance
Take a moment to familiarize yourself with the three `Die` classes. The `BasicDie` class models a die (the kind you roll) — you can create a `Die` with any number of sides, then `roll()` it to get a random result. The `HistoryDie` class extends `BasicDie` such that it keeps track of how many times each possible result has been rolled. `CrookedDie` cheats: Every third roll, an instance of this class returns the die's maximum value.

![hierarchy.png](figures/hierarchy.png)


- Create instances of each of the three `Die` classes. Look to see which methods can be called on each instance.

  - In case you're using Eclipse or IntelliJ, you'll want to create a new class -- we can just call it `Main`, and write the `public static void main(String[] args)` method, and creating objects, like `BasicDie bd = new BasicDie(6);`. To see what methods are available, type `bd.` and your editor should show you a list of visible methods you can call on `bd`.

  - Read the code and play around with the three classes until you see how each of them works. 
    
    - Remind yourself (or ask) what the `static` keyword does. In `BasicDie`, why do you think we chose to make make `gen` a `static` variable?

    - Remind yourself (of ask) what the `protected` keyword does. In `BasicDie`, the `numRolls` variable is protected. In `HistoryDie` the `history` array is also `protected`. How do you expect these variables to be used in the project?

    - Check out `CrookedDie`. What is the `final` keyword mean when associated with the variable `LIE_FREQUENCY`? Why do you think it's important to mark it `final` for this project?

    - Can you tell when the `CrookedDie` cheats? Does a `CrookedDie` have a history? Does it match the rolled values? Why or why not?

- Add a `public int getNumRolls()` method to `BasicDie` that returns the number of times the die has been rolled. After compiling and testing this method on a `BasicDie`, do some experiments to see in which other classes the new method is available.

  - Think: If the `BasicDie`'s `numRolls` is already `protected` (which means you can access this field in any subclass), why might we still want to write a `getNumRolls()` method? 

- Add a `printHistory()` method to the `HistoryDie` class. It should loop through the history array and print out its contents. Try to make the printout look pretty and informative, and make sure you include both the face value and the number of times it has been rolled in your output. For example, on a six-sided die that has been rolled 29 times, the output might look like this (where the left hand side is the face value, and the right hand value is the number of times it has landed on the corresponding face value.):

  ```
  1: 5
  2: 3
  3: 4
  4: 5
  5: 7
  6: 5
  ```

  When you've got it working, do some experiments to see in which other classes the new method is available.
  
- When testing with `CrookedDie`, you'll notice that it will lie on every 3rd roll, but its history doesn't reflect the lie! (Test and see for yourself.) Modify the code so that the crooked die's `history` also reflects the lie!



#### Part II: Constructor Chaining

- Put print statements at the bottom of all of the constructors in all three `Die` classes. Make sure that the statements print out the name of the class as well as specifics about the constructor in the cases where a class has more than one. For instance, in the `BasicDie` 1-argument constructor, you might print the string `"Inside BasicDie 1-arg constructor!"`.

- Create an instance of each kind of Die and observe the output. Pay particular attention to the ordering of the constructor print-outs. What message gets printed first? What gets printed second? Last? Understand what the ordering implies.

- In the `HistoryDie` class, comment out the first line of code in the constructor (the `super();` call). Compile your code and create an instance of `HistoryDie`. What happens? Why? Make sure you understand before moving on. Ask us if you'd like some explanation!

- Leave the `super()` call commented out in `HistoryDie`, and now comment out the default constructor in the `BasicDie` class. What happens when you compile `HistoryDie`? (This is the case we saw in class — make sure you understand what happens and why before moving on.)

- Uncomment the code from the last two steps. (Put the super call back in `HistoryDie`, and make sure `BasicDie` has its default constructor again.) Now comment out the entire constructor in the `HistoryDie` class. Try to create an instance of `HistoryDie` and see what happens. Can you create one? What sort of output is printed? What can you learn about its internal state (the contents of its instance variables)? What happens when you try to roll it?

- We can create a `CrookedDie` via its one-argument constructor — the one that takes the desired number of sides as a parameter. As shown in the code example below, it's not possible to create a `CrookedDie` using a default constructor. Modify the code so `CrookedDie` has a default constructor that creates a `CrookedDie` with six sides. Feel free to modify other classes as well, but try to accomplish the goal without making `numSides` either `public` or `protected` in the `BasicDie` class.

  You should confirm that this works. If you're using Eclipse/IntelliJ, in `public static void main(String[] args)` method type in the following code. (Or alternatively, you can type out the following code in BlueJ's codepad, if you're using BlueJ.)

  ```java
  CrookedDie cd = new CrookedDie();
  > Error: cannot find symbol - constructor CrookedDie()

  CrookedDie cd = new CrookedDie(6);
  System.out.println(cd.toString());
  > "This die has 6 sides and has rolled 0 times"
  ```

#### Part III: Polymorphism and Subtyping

Before you start this part, make sure your code compiles and works normally again. Feel free to start with a fresh copy of the project if things have gotten too messy or broken. For the rest of this section, use the codepad in BlueJ rather than the object workbench. (That is, type your code rather than using point-and-click to create objects and run methods.) If not using BlueJ, accomplish the rest of this lab inside a main method.

- Start by typing the code below into the `public static void main(String[] args)` method (or in BlueJ's codepad) to create three variables — one for each type of Die.

  ```java
  BasicDie basic;
  HistoryDie history;
  CrookedDie crooked;
  ```

- Next, create an instance of `BasicDie` and store it in basic as shown below. Run some methods on it to convince yourself that everything's working:

  ```java
  basic = new BasicDie(6);
  System.out.println(basic.roll());
  > 1

  System.out.println(basic.roll());
  > 3

  System.out.println(basic.toString());
  > "Die has 6 sides and has rolled 2 times"
  ```

- Now create a `HistoryDie` instance and try to assign it to the `basic` variable. Does this work? If so, which methods can you invoke? Can you run `roll()`? `toString()`? `printHistory()`?

  ```java
  basic = new HistoryDie(6);
  ```

- Try it again with a `CrookedDie` instance. Does this work? If so, which methods can you invoke?

  ```java
  basic = new CrookedDie(6);
  ```

- Now assign a `CrookedDie` instance to `history`, our variable of type `HistoryDie`. Does this work? If so, which methods can you invoke?

  ```java
  history = new CrookedDie(6);
  ```

- Try some more combinations of variable and object types until a pattern emerges. How would you describe the pattern in a sentence or two?

#### Part IV: More Polymorphism

- Open the `DieRoller` class and take a look at the `rollRepeatedly()` method. It takes a `BasicDie` as its input, rolls it the specified number of times, and returns the sum of the outputs. Test it out on a `BasicDie` instance first, then see what happens if you pass other kinds of dice to the method:

  ```java
  DieRoller roller = new DieRoller();
  System.out.println(roller.rollRepeatedly(new BasicDie(6), 100));
  > 369

  System.out.println(roller.rollRepeatedly(new HistoryDie(6), 100));  //does this work?

  System.out.println(roller.rollRepeatedly(new CrookedDie(6), 100)); //does this work?
  ```

- Edit the code in `rollRepeatedly()` so that it expects a `HistoryDie` as input instead. Repeat the tests above and see what happens.

- Now edit the code in `rollRepeatedly()` so that it expects a `CrookedDie` as input instead. Repeat the tests above and see what happens.

- What's the pattern? How would you describe how the type of the parameter in `rollRepeatedly()` influences the kinds of objects that can be passed in?

- Add the line `die.printHistory();` to the `rollRepeatedly()` method, just before the return statement. The code will only compile now if the method's first parameter is of certain types. For which parameter types (`BasicDie`, `HistoryDie`, `CrookedDie`) will the code compile? Why?

  - But that seems silly! If you pass in a `HistoryDie` or `CrookedDie` object, they do have the `printHistory()` method that we can call. There must be a way to first test if an object is a `HistoryDie`, and if it is, to call its `printHistory()` method. 

    - We do the check through the `instanceof` operator.
    - Then we downcast it in order to have access to `printHistory()`
    - You don't need to do anything, as we'll learn more about this tomorrow!

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

Written by Brad Richards. 

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
