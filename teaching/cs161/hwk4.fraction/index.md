## CS 161 - Intro to Computer Science

### Homework: Fractions

The key to object oriented programming is to write classes to create objects, then to boss them
around to accomplish a greater goal. In this assignment, you'll get first hand
experience with object interaction, e.g., storing objects and calling methods on them. 

For this assignment, you'll build a class that deals with fractions. Here's an example of object
interaction. For one fraction $$a/b$$ to divide another fraction, you need to first input
another fraction object, say $$c/d$$, that you want to divide with. Then you tell this *other* 
fraction to invert itself to become $$d/c$$. Then you need to ask it for its numerator $$d$$ 
and denominator $$c$$ and multiply them with $$a$$ and $$b$$, respectively. 

For this assignment, you'll build a class that deals with fractions.

#### Student Outcomes

- Exposure to object interaction.
- Exposure to making method calls.
- Exposure to integer divide and type conversion.
- Putting defensive programming into practice.

#### Instructions

For full credit, your class should contain all of the methods described below. They should have exactly the same name as shown, take the correct input arguments, and return the correct information. (I will run a program that creates instances of your class and tests them, and if your names or other details differ, my testing code won't compile.) The assignment is less specific about the instance variables (fields) you'll need — you'll have to figure out what you need to store in order to implement the methods below.

#### Constructor and Instance Variables

- Start by creating a new BlueJ project, called `Fraction`. Inside, create a new class called `Fraction`. `Fractions` are simple to model: You just need two instance variables, the numerator and the denominator. They are both integers.

- You need to implement a single constructor, which accepts two integer arguments (its starting numerator and denominator). Store these values into your instance variables. However, the denominator is never allowed to be negative (only the numerator is). If you receive a negative denominator, you *must* turn it positive, but you must also negate the numerator. Once you think you've implemented it properly, you should test it. Try creating a fraction `3/-4`. Does it turn to `-3/4`? What if you tried `-3/-4`? Does the turn the fraction `3/4`?

#### Basic Methods and Testing
We need to provide some methods to our `Fraction`s. Let's start with writing some easier ones.

- Write methods `getNumerator()` and `getDenominator()` that returns the numerator and denominator respectively. That's all they do -- they don't print or do anything else.

- A fraction should always be in *reduced form*. For instance 6/8 reduces to 3/4. To do a reduction, you need to divide the numerator and the denominator by their greatest common divisor (GCD). Luckily, I have given you a `gcd()` method for you to call. For instance, `gcd(6,8)` produces `2` (because `2` is the largest integer that evenly divides both 6 and 8), and if you simply divide both numerator and denominator by the GCD, you'll get 3/4! Write a method called `reduce()` that does not input anything and it does not return a value. It simply reduces the current fraction based on the description here.

  ```java
  Fraction f1 = new Fraction(4,8);
  f1.reduce();
  System.out.println(f1.toString()); // this should print 1/2

  Fraction f2 = new Fraction(27,9);
  f2.reduce();
  System.out.println(f2.toString()); // this should print 3/1
  ```

- Now, it's a bit unsettling that your constructor even allows an un-reduced `Fraction`. Simple, add a call to `reduce()` in the last line of the constructor. Now any fraction you construct should automatically be in reduced form! Let's try testing again!

  ```java
  Fraction f1 = new Fraction(4,8);
  System.out.println(f1.toString()); // this should print 1/2 without having to call reduce()!
  ```


- The next method you'll write is called `toString()`. This method accepts no inputs, and it returns a string that represents the current `Fraction` object. Here are some rules you must follow:
  - If the denominator is `1`, then you should just return a string containing the numerator.
  - If the denominator is instead `0`, you need to simply return the string `"undefined"`.
  - If neither of the above cases apply, then you should just return a string `"N/D"` where `N` is the current Fraction's numerator, and `D` is the denominator. For instance, `"-4/11"` would be returned for  the fraction $$\frac{-4}{11}$$.


  You should test this method vigorously before moving on. Sure, you can do things the old way using point-and-click, but it's also about time that we show you how to test in BlueJ's *code pad*. From BlueJ,
  click on the `View` menu and make sure `Show CodePad` is selected. A window pops up on the bottom right corner
  of BlueJ to accept inputs. Type these in line by line. You do not have to include my comments. They are there
  for instruction.

  ```java
  Fraction f = new Fraction(1,8); // create a new fraction object
  System.out.println(f.toString()); // this should print 1/8
  ```

- Here's another simple one. Write a method called `negate()` that negates the numerator. If it's positive, turn it negative. If it's negative, turn it positive. The denominator is untouched. Here's some code to test it in the codepad:

  ```java
  Fraction f = new Fraction(1,3); // create 1/3
  System.out.println(f.toString()); // this should print 1/3
  f.negate();
  System.out.println(f.toString()); // this should print -1/3
  f.negate();
  System.out.println(f.toString()); // this should print 1/3 again!
  ```

- Write a method called `invert()` to exchange its numerator and denominator. This method does not `return` any values.

  ```java
  Fraction f = new Fraction(20,95);
  f.invert();
  System.out.println(f.toString()); // this should now print 95/20
  ```

- We also know that a `Fraction` is *undefined* if its denominator is `0`. Write a method called `isDefined()` that returns `true` or `false` based on whether this fraction is defined.

  ```java
  Fraction f = new Fraction(9,0); // create 9/0
  System.out.println(f.isDefined()); // this should print false
  f.invert();
  System.out.println(f.isDefined()); // this should now print true
  ```

- Sometimes, we're just interested to know what a fraction's decimal (floating-point) representation is. Create a method called `toDouble()` that accepts no inputs and returns the fraction as a `double` value. Now here's the catch -- what's the value if the fraction is undefined? When that is the case, you need to return `Double.NaN` (which stands for Not-a-Number). Beware of integer divide... you will need to *type cast* for this method. For instance:

  ```java
  Fraction f1 = new Fraction(1,4);
  Fraction f2 = new Fraction(1,2);
  System.out.println(f1.toDouble());  // this should print 0.25
  System.out.println(f2.toDouble());  // this should print 0.5

  // since the method returns doubles, we can add them up
  double sum = f1.toDouble() + f2.toDouble();
  System.out.println(sum);  // this should print 0.75
  ```

- Remember our discussion on content (deep) equality? Write a method called `equals()` that accepts *another* `Fraction` object to compare with. This method needs to return true if the two fractions are equal, and false otherwise. Follow these rules. If either `Fraction` is undefined (say, you just wrote that method earlier, and it can be called!) then they can't be equal. If both `Fraction`s are defined, then they are equal when their numerators and denominators agree. To test if they agree, you are going to want to *ask* the `Fraction` you input for its numerator and denominator. Good thing we wrote those "getters" earlier too!

  ```java
  Fraction f1 = new Fraction(2,5);
  Fraction f2 = new Fraction(2,5);
  System.out.println(f1.equals(f2));  // this should print true
  f1.invert();
  System.out.println(f1.equals(f2));  // this should print false
  ```

  Test if your "undefined" checker is working:
  ```java
  Fraction f3 = new Fraction(1,0);  // this is undefined...
  Fraction f4 = new Fraction(1,0);  // this is also undefined... but they're the "same"
  System.out.println(f3.equals(f4));  // this should print false!
  ```

#### Arithmetic Operations
Now we can finally implement add, subtract, multiply, and divide! Before diving in, you must ensure two things:

1. Only the current fraction changes value from calling one of these functions. The *other* fraction that you're adding, subtracting, etc., must remain unchanged.

2. After an operation has been successfully applied, the current fraction should be reduced!

Okay, let's get to writing the last four methods!

- Let's first write `add()`, which accepts a single `Fraction` object to add to the current one. This method does not return a value. If one of the fractions is *undefined*, then take no action. Otherwise, you need to ensure that both fractions' denominators agree. If they already are equal, then simply add the *other* numerator to the current one, and you're done. If they don't agree, then you need to multiply their denominators together. Then multiply the current numerator by the *other* fraction's denominator. Then multiply the other fraction's numerator with the current fraction's denominator and add that sum to your current numerator. 

- Now start working on `minus()`, which accepts a single `Fraction` object to subtract from the current one. You can go about this in similar fashion to `add()`, and that's totally fine, but do you need to do all that work again? Isn't subtraction just adding a fraction that's been  *negated*?

- Write `multiply()`, which is likely the easiest of the bunch. Simply multiply the numerators and denominators together with the given `Fraction`. This method, like all the others, does not return a value.

- Finally, to do divide two `Fraction`s you need to first invert the *other* one. Then multiply them together. (There's a reason I had to implement `multiply()` first!)


#### Sample Output
You can test out your class in BlueJ's code pad. Your output should match mine exactly for full credit. Outputs on the terminal are shown directly below.

  Create an Orca Card with a balance of $20.50, and print its summary.
  ```java
  OrcaCard myCard = new OrcaCard();
  myCard.topUp(20.5);
  myCard.printSummary();
  ```

  ```
  $20.5 left after 0 trip(s)
  Your balance is high!
  Your costliest trip so far: $0.0
  ```

  Let's purchase a $10 trip. But remember, your balance needs to reflect the cost of the trip and the tax.
  ```java
  myCard.buyTrip(10.00);
  ```

  ```
  Success: Ticket purchased.  $9.85 remaining.
  ```

  Given a tax rate of 6.5%, the card should have collected $0.65 of taxes for the $10 trip.
  ```java
  System.out.println(myCard.getTax());
  ```

  ```
  0.65
  ```

  Now buy a $5 trip.
  ```java
  myCard.buyTrip(5);
  ```

  ```
  Success: Ticket purchased.  $4.5249999999999995 remaining
  ```

  We've bought 2 trips for $15 total (not including tax), so the average trip should be $7.50.
  ```java
  System.out.println(myCard.getAverageTripCost());
  ```

  ```
  7.5
  ```

  The amount of taxes collected should now be:
  ```java
  System.out.println(myCard.getTax());
  ```

  ```
  0.9750000000000001
  ```

  ```java
  myCard.printSummary();
  ```

  ```
  $4.5249999999999995 left after 2 trip(s)
  Your balance is low!
  Your costliest trip so far: $10.0
  ```

  
  ```java
  myCard.buyTrip(4.50);
  ```

  ```
  Fail: You cannot afford this trip.
  ```

  ```java
  myCard.topUp(1.00);
  myCard.buyTrip(4.50);
  ```

  ```
  Success: Ticket purchased.  $0.732499999999999 remaining
  ```

  ```java
  myCard.printSummary();
  ```

  ```
  $0.732499999999999 left after 3 trip(s)
  Your balance is low!
  Your costliest trip so far: $10.0
  ```

#### Extending the Homework

Looking for additional challenges? Add code to the `buyTrip()` method so that it also prints out a simulated ticket, showing the cost, the amount paid in tax, and the remaining balance on the card. You could add a `cheatIRS()` method that moves the amount you've collected as tax over to the balance of the card. Look into ways to tidy up the dollar amounts so that they always have two digits after the decimal point. In my output, I printed trip(s) so that it sounded ok whether there had been one trip or more. It would look even better if you added some code that looked at the number of trips and either used trip or trips as appropriate.

#### Program Defensively

You can't control how another user or program chooses to use your methods. For each method, think critically about all the things that could go wrong and cause an unintended result (e.g., a runtime error, infinite loop/recursion, etc.). Chances are, I'll be trying all kinds of inputs (negative values, zeroes, nulls, empty-strings, etc.) when I grade your program. The mark of a good programmer is one that can anticipate such scenarios ahead of time and ensure that their program handles all sorts of errors gracefully.

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 75pts.

[5pts] Proper fields have been defined. No more -- no less than what is needed
       by the OrcaCard class.

[5pts] Default constructor generates a default card with a 6.5% sales tax.

[5pts] The overloaded constructor that verifies the input value for the sales tax.

[5pts] The topUp() method must verify that the given amount is non-negative.

[10pts] The buyTrip() method adjusts your balance after purchasing a trip of
        the specified amount. Don't forget to add the tax. It must also verify
        that the trip of the given amount can be purchased, and if not, it should
        output an error message.

[5pts] The getTax() method is properly implemented.

[5pts] The getAverageTripCost() method is properly implemented.

[10pts] The getCostliestTrip() method is properly implemented.

[10pts] The balanceLevel() method returns a single, appropriate message based on
       your card's balance.

[5pts] The printSummary() method is properly implemented.

[5pts] You re-use code whenever possible.

[5pts] You provide Javadocs style comments for any new methods implemented, and
       sufficient inline comments to explain the logic of your methods.
```


#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Adapted for use from a previous assignment by Brad Richards. Shape classes provided by BlueJ.
