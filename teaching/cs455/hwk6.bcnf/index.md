## CS 455 - Principles of Database Systems

### Hwk: BCNF Normalization
In this assignment you will implement algorithms that we've been learning in the DB theory lectures. Specifically, you will implement methods to find the attribute set closure on your way to generating superkeys, and BCNF decomposition.


#### Student Outcomes

- To gain insight into the fundamentals and algorithms of relational design theory


#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me via Github.

- The start code is provided here [https://github.com/davidtchiu/cs455-hwk-bcnf](https://github.com/davidtchiu/cs455-hwk-bcnf). Choose to **fork** this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project.

-  Clone **your** forked Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```

#### Preliminary
- Just like the previous assignment, you will need to be familiar with [Java's Set interface](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html). Know how to take a set union, intersection, difference, and how to iterate through Sets. **You must write this program in Java.** I've provided skeleton code for you to implement. 

- Because this assignment builds on the previous one, I have provided the working version of the `FDUtil` class as a .jar file. (Can't be giving out last assignment's solution source for the world to see now, can we?) You will need to import this jar file into your project so that you have access to the `FDUtil` methods. There are lots of tutorials online on how to do this in your preferred Java editor.

- Here's the [documentation](FDUtil/) on the `FDUtil` class.

#### Instructions
You are to provide several supporting methods to perform BCNF decomposition. These are algorithms you should already be familiar with, and have been given in class (and are also covered in Chapter 8 of the book). Given a relation, your program should allow you to (1) determine all superkeys and (2) normalize any given relation to BCNF, with respect to a set of FDs. Here's an example output for the Employee example we've been seeing in class:


```java
// Employee(ssn, name, cartID, title, wage)
FD e1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
FD e2 = new FD(Arrays.asList("ssn", "cartID"), Arrays.asList("title", "wage")); // ssn,cartID --> title,wage
FDSet cartFDs = new FDSet(e1, e2);

Set<String> Employee = new HashSet<>(Arrays.asList("ssn", "name", "cartID", "title", "wage"));
System.out.println("Superkeys: " + Normalizer.findSuperkeys(Employee, cartFDs));
System.out.println("BCNF Relations: " + Normalizer.BCNFDecompose(Employee, cartFDs));
```
Here's the output (though I've formatted the superkeys by hand for readability). As the outputs are sets, it follows no particular ordering.
```
Superkeys: [
  [title, wage, ssn, cartID]
  [title, ssn, cartID]
  [wage, ssn, cartID],
  [ssn, cartID],
  [name, wage, ssn, cartID],
  [name, ssn, cartID],
  [name, title, ssn, cartID],
  [name, title, wage, ssn, cartID]
]

BCNF Relations: [
  [cartID, title, ssn, wage],
  [name, ssn]
]
```



#### Program Requirements

1. Attribute sets. There's quite a bit of work involving attribute sets in this assignment. For instance, superkeys are attribute sets, as well as relations. Assume that attribute sets are just a (hash)set of attribute names (strings). For instance, the relation $$R(A,B,C)$$ can be represented using:

```java
// R(A,B,C)
Set<String> R = new HashSet<>(Arrays.asList("A", "B", "C"));
```




1. Open up the `FD` class, which models a functional dependency. This class has already been completed for you, but it's worth reading through it to understand its interface, and how I chose to model it. Of particular note:

    - An `FD` has an attribute set on the left and on the right. The left-hand side attribute set determines the right-hand side.

    - An attribute set is just a set of Strings (that is `Set<String>`). I used the slightly slower `TreeSet` in my implementation just to order the attribute names when they're printed. (Easier on the eyes when grading.)

    - There are two ways of constructing an `FD` object. The first way accepts the left and right attribute sets as Lists. Another way accepts them as Sets.

    - For instance, $$AD \rightarrow B$$ can be constructed using:

        ```java
        Set<String> left = new TreeSet<>();
        left.add("A");
        left.add("D");

        Set<String> right = new TreeSet<>();
        right.add("B")
        
        FD fd = new FD(left, right);
        ```
        or simply,
        ```java
        FD fd = new FD(Arrays.asList("A", "D"), Arrays.asList("B"));
        ```

    - Do not make any changes to this class.

2. Next, open up the `FDSet` class, which contains a set of FDs. Again this class has been completed for you. It's really just a wrapper class I wrote to make my grading-life easier. Read it over. Do not make any changes to this class.

3. Now open the `FDUtil` class, and implement the following static methods:

    - Before you start: All of the static methods you need to write must **not** alter the contents of the input structures. In other words, you should begin each method by first cloning (deep copying) the input structures. I have provided the `clone()` method in both `FD` and `FDSet` for this purpose. 

    - You're welcome to add as many other helper methods as you need (and you will need to write several helper methods!). Don't worry about the efficiency of these algorithms -- just focus on correctness.

    - `trivial(FDSet fdset)` -- This method accepts a set of FDs and returns a set of trivial functional dependencies. Recall the trivial rule specifies that any subset of the left-side attributes can be (trivially) determined by the left-side attributes. Here's an example output for $$FD = \{A \rightarrow B, AB \rightarrow C\}$$:

      ```java
      FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B"));       // A --> B
      FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C"));  // AB --> C
      FDSet fdset = new FDSet(f1, f2);
      System.out.println(FDUtil.trivial(fdset));
      ```
      ```
      [A] --> [A]
      [A, B] --> [A]
      [A, B] --> [B]
      [A, B] --> [A, B]
      ```

    - `augment(FDSet fdset, Set<String> attrs)` -- This method returns a new set of FDs generated by combining of both sides of each FD  with the given set of attributes `attrs`. Here's an example output for $$FD = \{A \rightarrow B, AB \rightarrow C\}$$ augmented with attribute set $$\{C\}$$:

      ```java
      FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B"));       // A --> B
      FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C"));  // AB --> C
      FDSet fdset = new FDSet(f1, f2);

      // We want to augment with C
      Set<String> attrs = new HashSet<>(Arrays.asList("C"));
      System.out.println(FDUtil.augment(fdset, attrs));
      ```
      ```
      [A, C] --> [B, C]
      [A, B, C] --> [C]
      ```

    - `transitive(FDSet fdset)` -- This method returns a new set of FDs after repeatedly applying the transitive rule until no more changes are detected. Here's an example output for $$FD = \{A \rightarrow AB, AB \rightarrow C, C \rightarrow D\}$$:

      ```java
      FD f1 = new FD(Arrays.asList("A"), Arrays.asList("A", "B")); // A --> B
      FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C")); // AB --> C
      FD f3 = new FD(Arrays.asList("C"), Arrays.asList("D")); // C --> D
      FDSet fdset = new FDSet(f1, f2, f3);
      System.out.println(FDUtil.transitive(fdset));
      ```
      ```
      [A] --> [C]
      [A] --> [D]
      [A, B] --> [D]
      ```
      Take particular note of the fact that $$A \rightarrow D$$ (via $$A\rightarrow AB$$ and $$AB \rightarrow D$$) is also generated, even though it took an iteration to first generate $$AB \rightarrow D$$. Therefore, this method is exhaustive.


    - Finally, `fdSetClosure(FDSet fdset)` -- This method accepts a set of FDs and returns its closure, i.e., the full set of FDs generated through the repeated applications of Armstrong's Axioms. The example below shows the FD set closure for $$FD = \{A \rightarrow B, AB \rightarrow C\}$$:

      ```java
      FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B"));       // A --> B
      FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C"));  // AB --> C
      FDSet fdset = new FDSet(f1, f2);
      System.out.println(FDUtil.fdSetClosure(fdset));
      ```
      ```
      [A] --> [A]
      [A] --> [B]
      [A] --> [C]
      [A] --> [A, B]
      [A] --> [A, C]
      [A] --> [B, C]
      [A] --> [A, B, C]
      [A, B] --> [A]
      [A, B] --> [B]
      [A, B] --> [C]
      [A, B] --> [A, B]
      [A, B] --> [A, C]
      [A, B] --> [B, C]
      [A, B] --> [A, B, C]
      [A, C] --> [A]
      [A, C] --> [B]
      [A, C] --> [C]
      [A, C] --> [A, B]
      [A, C] --> [A, C]
      [A, C] --> [B, C]
      [A, C] --> [A, B, C]
      [A, B, C] --> [A]
      [A, B, C] --> [B]
      [A, B, C] --> [C]
      [A, B, C] --> [A, B]
      [A, B, C] --> [A, C]
      [A, B, C] --> [B, C]
      [A, B, C] --> [A, B, C]
      ```

4. Once you have FD Set Closure working, you should be able to test the equality between two FD sets. Recall that two FD sets are equal iff their closures are equal. There's nothing you need to do here, except  to try out more test cases in order to verify that the equals method works as intended.

  ```java
  // One FD Set = A --> B, AB --> C
  FD f1 = new FD(Arrays.asList("A"), Arrays.asList("A", "B")); // A --> B
  FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C")); // AB --> C
  FDSet fdset = new FDSet(f1, f2);

  // Another FD set: AB --> B, A --> BC, AB --> C
  FD g1 = new FD(Arrays.asList("A", "B"), Arrays.asList("B")); // AB --> B
  FD g2 = new FD(Arrays.asList("A"), Arrays.asList("C", "B")); // A --> BC
  FD g3 = new FD(Arrays.asList("A", "B"), Arrays.asList("C")); // AB --> C
  FDSet fdset2 = new FDSet(g1, g2, g3);

  // Test FD equality: fdset and gdset are equal iff their closures are equal
  System.out.println("Equals? " + (fdset.equals(fdset2)));
  ```
  The above test case should return `true`.


#### Optional Extensions
If you're done early and are looking for an additional challenge, you could try implementing the following extensions:

- Implement a `public static Set<String> findCandidateKeys(Set<String> superkeys)` method in `Normalizer` that inputs a set of super keys and determines the set of candidate key(s).

- Implement a method that will decompose a relation in 2NF.


#### Grading

```
This assignment will be graded out of 75 points.

[10pts] Trivial rule

[10pts] Augmentation rule

[15pts] Transitivity rule. Must be exhaustive (i.e., repeatedly apply
transitivity until there is no change.)

[20pts] Implementation of the FD Set closure algorithm

[10pts] Immutability: None of the methods should modify the content of 
any input structure.

[Misc] Your program must be written in Java. Non-Java programs will be returned
       without a grade.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.
2. Alternatively, you can zip up all your files (minus the `.class` files) and submit the `.zip` file on Canvas.
3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2022.
