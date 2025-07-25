## CS 161 - Intro to Computer Science

### Homework 3: Fractions

The key to the object-oriented programming (OOP) paradigm is to write classes, then create objects of those classes to accomplish a greater goal. In this assignment, you'll get first-hand experience with object interaction, e.g., storing references (pointers) to objects and calling methods on them. 

For this assignment, you'll build a class that deals with fractions. Here's an example of object
interaction. For one fraction $$A/B$$ to divide another fraction, you need to input
another fraction object, say $$C/D$$, that you want to divide with. Then you tell this *other* 
fraction to invert itself to become $$D/C$$. Then you need to ask it for its numerator $$D$$ 
and denominator $$C$$ and multiply them with $$A$$ and $$B$$, respectively. In the above interaction, it's
essential that you see how you'd need to ask this other fraction to manipulate itself by calling methods on it to transform $$C/D$$ into $$D/C$$. But it's also essential that, because of object aliasing, you revert this other fraction back to its original form $$C/D$$.

For this assignment, you'll build a class that deals with fractions as individual "objects."

#### Student Outcomes

- Exposure to object interaction.
- Exposure to object aliasing.
- Exposure to making method calls on object references.
- Exposure to integer divide and type conversion.
- Exposure to type casting.
- Putting defensive programming into practice.

#### Instructions

For full credit, your class should contain all of the methods described below. They should have exactly the same name as shown, take the correct input arguments, and return the correct information. (I will run a program that creates instances of your class and tests them, and if your names or other details differ, my testing code won't compile.) The assignment is less specific about the instance variables (fields) you'll need — you'll have to figure out what you need to store in order to implement the methods below.

#### Constructor and Instance Variables

- Start by creating a new BlueJ project, called `Fraction`. Inside, create a new class called `Fraction`. `Fractions` are simple to model: You just need two instance variables, the numerator and the denominator (both integers). Do not add any other instance variables.

- You need to implement a constructor, which accepts two whole-number arguments (a fraction's numerator and denominator). Store these values in your instance variables. After you've done that, you need to obey this rule: the denominator is never allowed to be negative (only the numerator is). If you receive a negative denominator, you *must* turn it positive, but you must also negate the numerator. Once you think you've implemented it properly, you should test it many times. Try creating a fraction `3/-4`. Does it turn it into `-3/4` (it should!) What if you tried `-3/-4`? Does the turn the fraction `3/4` (it should!)

#### Basic Methods and Testing
We need to provide some methods to our `Fraction` class. Let's start with writing some easier ones.

- Write methods `getNumerator()` and `getDenominator()` that simply return the numerator and denominator, respectively. That's all they do -- they don't print or do anything else. These are one-liners.

- We also know that a `Fraction` is *undefined* if its denominator is `0`. Write a method called `isDefined()` that returns `true` or `false` based on whether this fraction is defined.

- The next method you'll write is called `toString()`. This method accepts no inputs, and it returns a string that represents the current `Fraction` object. Here are some rules you must follow:
  - If the denominator is `1`, then you should just return a string containing the numerator.
  - If the denominator is instead `0`, you need to simply return the string `"undefined"`.
  - If neither of the above cases apply, then you should just return a string `"NUM/DENOM"` where `NUM` is the current Fraction's integer numerator, and `DENOM` is the current integer denominator. For instance, the string`"-4/11"` would be returned for the fraction $$\frac{-4}{11}$$.


  You should test this method before moving on. Sure, you can do things the old way using point-and-click, but it's also about time that we show you how to test in BlueJ's *code pad*. From BlueJ,
  click on the `View` menu and make sure `Show CodePad` is selected. A window pops up on the bottom right corner
  of BlueJ to accept inputs. Type these in line by line. You do not have to include my comments. They are there
  for instruction.

  ```java
  Fraction f = new Fraction(1,8); // create a fraction object
  System.out.println(f.toString()); // this should print 1/8
  ```

- Returning the string representation is one way to communicate the Fraction. But sometimes, we're just interested to know what a fraction's decimal (floating-point) representation is. Create a method called `toDouble()` that accepts no inputs and returns the fraction as a `double` value. Now here's the catch -- what's the value if the fraction is undefined? When that is the case, you need to return `Double.NaN` (which stands for Not-a-Number). Beware of integer divide... you will need to *type cast* for this method. For instance:

  ```java
  Fraction f1 = new Fraction(1,4);
  Fraction f2 = new Fraction(1,2);
  System.out.println(f1.toDouble());  // this should print 0.25
  System.out.println(f2.toDouble());  // this should print 0.5

  // since the method returns doubles, we can add them up
  double sum = f1.toDouble() + f2.toDouble();
  System.out.println(sum);  // this should print 0.75
  ```


- Here's another simple one. Write a method called `negate()` that negates the numerator. If it's positive, turn it negative. If it's negative, turn it positive. The denominator is untouched. Here's some code to test it out in the codepad:

  ```java
  Fraction f = new Fraction(1,3);   // create 1/3
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

- Write a method called `equals()` that accepts *another* `Fraction` object to compare with. This method needs to return true if the two fractions are equal, and false otherwise. Follow these rules. If either `Fraction` is undefined (say, you just wrote that method earlier, and it can be called!) then they can't be equal. If both `Fraction`s are defined, then they are equal when both their numerators and denominators agree. To test if they agree, you are going to want to *ask* the `Fraction` you input for its numerator and denominator. Good thing we wrote those "getters" earlier too!

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

#### Arithmetic Operations (Inputting Other Fractions as Arguments!)
Now that we have the basics down, we can finally implement add, subtract, multiply, and divide! Before diving in, when implementing methods that take another `Fraction` object as input, you need to ensure that the input `Fraction` remains unchanged. Your methods should not modify the state of the input `Fraction` under any circumstances. Only the current (this) `Fraction` is changed.

- Let's first write `add(Fraction other)`, which accepts a `Fraction` object named `other` to add to  *this* one. This method does not return a value. First, check if either one of the fractions is *undefined*, then take no action. If it passes this check, then you need to ensure that both fractions' denominators agree (are equal). If they already *are* equal, then simply add the *other* numerator to the current one, and you're done. If they don't agree, then you need to multiply the *this* numerator by the *other* fraction's denominator, and multiply the *other* numerator with the *this* denominator and add the two products together to obtain the new numerator. Finally, multiply their denominators together to obtain the new denominator. Test this out with different cases to prove to yourself that it works before moving on.
  ```java
  Fraction f1 = new Fraction(2,15);
  Fraction f2 = new Fraction(2,3);
  f1.add(f2);
  System.out.println(f1.toString());  // Now 36/45 (the denominators don't agree so, 6/45 + 30/45)
  System.out.println(f2.toString());  // Still 2/3
  ```
  Remember to ensure that the *other* fraction is left unchanged after calling this method.


- Now start working on `minus(Fraction other)`, which accepts a single `Fraction` object to subtract from the current one. You can go about this in similar fashion to `add()`, and that's totally fine, but do you need to do all that work again? Isn't subtraction just adding a fraction that's been *negated*? (Hmm, you already wrote `negate()` and `add()` ... do you need to reinvent the wheel?) Remember to ensure that the *other* fraction is left unchanged after calling this method.

  ```java
  Fraction f1 = new Fraction(2,3);
  Fraction f2 = new Fraction(3,10);
  f1.minus(f2);
  System.out.println(f1.toString());  // Now 11/30
  System.out.println(f2.toString());  // Still 3/10
  ```

- Write `multiply(Fraction other)`, which is likely the easiest of the bunch. Simply multiply the numerators and denominators together with the given `Fraction`. This method, like all the others, does not return a value. Remember to ensure that the *other* fraction is left unchanged after calling this method.

- Finally, write `divide(Fraction other)`. To  divide two `Fraction`s you need to first invert the *other* one. Then multiply them together. (There's a reason I had to implement `invert()` and `multiply()` first!) Remember to ensure that the *other* fraction is left unchanged after calling this method.
  ```java
  Fraction f1 = new Fraction(2,3);
  Fraction f2 = new Fraction(5,11);
  f1.divide(f2);
  System.out.println(f1.toString());  // Now 22/15
  System.out.println(f2.toString());  // Still 5/11
  ```


<!-- #### Reduced Form (Need to Loop)

A fraction can be put in *reduced form*. For instance 6/8 reduces to 3/4 and  25/1000 reduces to 1/40. An important step towards finding the reduced form is to first determine the greatest common divisor (GCD) between two integers, that is, the GCD is the largest positive integer that divides evenly into two integers. 

- Write a method called `gcd()` that inputs two integers `a` and `b`. We'll use the famous [Euclidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm). You need to write the following loop: as long as `a` and `b` aren't equal, test to see if `a` is larger than `b`. If so, subtract `b` from `a`. otherwise, subtract `a` from `b`. This loop is guaranteed to terminate. Once you're out, simply return `a`. Test it out. The GCD between 6 and 8 is 2 and the GCD between 25 and 1000 is 25. Test more cases to convince yourself that you've implemented it properly.

- Finally, we're ready to write `reduce()`. It does not input anything and it does not return a value. To perform a reduction of a fraction, you simply need to divide both the numerator and the denominator by their GCD. 

  ```java
  Fraction f1 = new Fraction(4,8);
  f1.reduce();
  System.out.println(f1.toString()); // this should print 1/2, since gcd(4,8) == 4.

  Fraction f2 = new Fraction(27,9);
  f2.reduce();
  System.out.println(f2.toString()); // this should print 3/1, since gcd(27, 9) == 9.
  ```

- Because `gcd()` should only be called in another method of this class, you should make it `private` instead of `public`. 
 -->



#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 90 pts.

[10pts] The constructor creates a fraction object with the given numerator 
and denominator. Only the numerator can be negative. If the denominator is
given as a negative, then negate the numerator and the denominator.

[4pts] The getNumerator() and getDenominator() methods are implemented.

[2pts] The invert() method exchanges the numerator and denominator.

[2pts] The negate() method simply negates the the numerator.

[2pts] The isDefined() method determines if the current fraction is (un)defined.

[5pts] The toString() method is working as specified to return (not print!)
a string that represents the current fraction object.

[5pts] The toDouble() method returns the floating-point representation of
the current fraction if it's defined. Otherwise (denominator is zero), this
method returns the constant Double.NaN (Not a Number).

[5pts] The equals() method returns true if both fractions are defined, and that
the numerators and denominators are equal. Your equals method does not need to
check to see if their reduced forms are equal.

[10pts] The add() method adds another (input) fraction to the current one. 
The current fraction could change, but the other fraction should remain unchanged.
This method only runs if both fractions are *defined*.

[10pts] The minus() method subtracts another (input) fraction from the current one. 
The current fraction could change, but the other fraction should remain unchanged.
This method only runs if both fractions are *defined*.

[10pts] The multiply() method multiplies another (input) fraction to the current one. 
The current fraction could change, but the other fraction should remain unchanged.
This method only runs if both fractions are *defined*.

[10pts] The divide() method divides the current fraction by another (input) one. 
The current fraction could change, but the other fraction should remain unchanged.
This method only runs if both fractions are *defined*.

[15pts] Avoiding side-effects: When implementing methods that take another 
Fraction object as input, you need to ensure that the input Fraction remains 
unchanged. Your methods should not modify the state of the input Fraction under 
any circumstances. 
```

<!-- [5pts] The reduce() method, which calls gcd(), puts the current fraction in "reduced form."

[10pts] The private gcd() method returns the greatest common divisor between two integers. -->


#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Adapted for use from a previous assignment by Adam Smith.