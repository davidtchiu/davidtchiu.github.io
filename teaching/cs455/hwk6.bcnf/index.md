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

<!-- #### Preliminary
- Just like the previous assignment, you will need to be familiar with [Java's Set interface](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html). Know how to take a set union, intersection, difference, and how to iterate through Sets. **You must write this program in Java.** I've provided skeleton code for you to implement. 
 -->

#### Instructions
You are to provide several methods to support BCNF decomposition. These are algorithms you should already be familiar with, and have been given in class (and are also covered in Chapter 8 of the book). Given a relation and a set of functional dependencies, your program should allow you to (1) determine all its superkeys and (2) normalize the schema to BCNF. Here's an example output for the Employee schema example we've been seeing in class:


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

1.  **You must write this program in Java.** I've provided skeleton code for you to implement. 

2. Because this assignment builds on the previous one, I have provided the working version of the `FDUtil` class as a .jar file. (Can't be giving out last assignment's solution source for the world to see now, can we?) You will need to import this jar file into your project so that you have access to the `FDUtil` methods. There are lots of tutorials online on how to do this in your preferred Java editor.

    - Here's the [documentation](FDUtil/) on the `FDUtil` class.


3. There's quite a bit of work involving *attribute sets* in this assignment. For instance, superkeys are attribute sets, and so are relational schemas. Assume that attribute sets are just a (hash)set of attribute names (strings). For instance, the relational schema $$R(A,B,C)$$ can be represented using:

    ```java
    // R(A,B,C)
    Set<String> R = new HashSet<>(Arrays.asList("A", "B", "C"));
    ```

    So just like the previous assignment, you will need to be familiar with [Java's Set interface](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html). Know how to take a set union, intersection, difference, and how to iterate through Sets.


4. All of your work will go inside the `Normalizer` class. Implement the following methods. As before, you don't need to emphasize the efficiency of your algorithms. You are welcome to implement as many helper methods as you need.

    - `findSuperkeys(Set<String> rel, FDSet fdset)` -- This method accepts a relational schema and an FD set and returns a set of superkeys for the given schema. A superkey is a set of attributes that can functionally determine all attributes in the relational schema. This is an algorithm we've gone through in class and is also in the book. Here is an example that we saw in the slides:

      ```java
      FD f1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
      FD f2 = new FD(Arrays.asList("ssn", "name"), Arrays.asList("eyecolor")); // ssn,name --> eyecolor
      FDSet fdset = new FDSet(f1, f2);

      Set<String> People = new HashSet<>(Arrays.asList("ssn", "name", "eyecolor"));
      System.out.println("Superkeys: " + Normalizer.findSuperkeys(People, fdset));
      ```
      I've formatted the output below for readability:
      ```
      Superkeys: [
        [ssn],
        [ssn, eyecolor],
        [name, ssn],
        [name, ssn, eyecolor]
      ]
      ```

    - `isBCNF(Set<String> rel, FDSet fdset)` -- This method determines if the given relational schema is in BCNF with respect to the FD set. Recall that a relational schema is in BCNF iff the left-hand side of all **non-trivial** FDs is a superkey. In the following example, the relational schema we showed previously is in BCNF:

      ```java
      FD f1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
      FD f2 = new FD(Arrays.asList("ssn", "name"), Arrays.asList("eyecolor")); // ssn,name --> eyecolor
      FDSet fdset = new FDSet(f1, f2);

      Set<String> People = new HashSet<>(Arrays.asList("ssn", "name", "eyecolor"));
      System.out.println("BCNF? " + Normalizer.isBCNF(People, fdset));
      ```
      ```
      BCNF? true
      ```

      Here's an example in which People violates BCNF (due to `f3` -- `name` is not a superkey):
      ```java
      FD f1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
      FD f2 = new FD(Arrays.asList("ssn", "name"), Arrays.asList("eyecolor")); // ssn,name --> eyecolor
      FD f3 = new FD(Arrays.asList("name"), Arrays.asList("eyecolor")); // name --> eyecolor (violates BCNF)
      FDSet fdset = new FDSet(f1, f2, f3);

      Set<String> People = new HashSet<>(Arrays.asList("ssn", "name", "eyecolor"));
      System.out.println("BCNF? " + Normalizer.isBCNF(People, fdset));
      ```
      ```
      BCNF? false
      ```
      

    - Finally, `BCNFDecompose(Set<String> rel, FDSet fdset)` -- This method accepts a relational schema and an FD set, and then returns a set of relational schemas that satisfy BCNF. For ease of grading, please print some information (the current relational schema, its FD Set, and its superkeys) at each decision point (as we do on the board in class) so that I can trace the correctness of your algorithm.

      ```java
      // R(A,B,C)
      Set<String> R = new HashSet<>(Arrays.asList("A", "B", "C"));

      FD g1 = new FD(Arrays.asList("A"), Arrays.asList("B", "C")); // A --> BC
      FD g2 = new FD(Arrays.asList("B"), Arrays.asList("C")); // B --> C
      FD g3 = new FD(Arrays.asList("A"), Arrays.asList("B")); // A --> B
      FD g4 = new FD(Arrays.asList("A", "B"), Arrays.asList("C")); // AB --> C
      FDSet fdset2 = new FDSet(g1, g2, g3, g4);

      System.out.println("BCNF START");
      Set<Set<String>> bcnfSchemas2 = Normalizer.BCNFDecompose(R, fdset2);
      System.out.println("BCNF END");
      System.out.println("Final BCNF Schemas: " + bcnfSchemas2);
      ```
      ```
      BCNF START
        Current schema = [A, B, C]
        Current schema's FD Set = [A --> B, A --> BC, B --> C, AB --> C]
        Current schema's superkeys = [[A], [A, B], [A, C], [A, B, C]]
        [A, B, C] is not in BCNF. Splitting on B --> C ...
        Left Schema = [B, C]
        Left Schema's FD Set = [B --> C]
        Left Schema's superkeys = [[B], [B, C]]
        Right Schema = [A, B]
        Right Schema's FD Set: [A --> B]
        Right Schema's superkeys: [[A], [A, B]]

      BCNF END
      Final BCNF Schemas: [[A, B], [B, C]]
      ```

      Here's another example:
      ```java
      // U(A,B,C,D,E)
      Set<String> U = new HashSet<>(Arrays.asList("A", "B", "C", "D", "E"));

      FD f1 = new FD(Arrays.asList("A", "E"), Arrays.asList("D")); // AE --> D
      FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C")); // AB --> C
      FD f3 = new FD(Arrays.asList("D"), Arrays.asList("B")); // D --> B
      FDSet fdset = new FDSet(f1, f2, f3);

      System.out.println("BCNF START");
      Set<Set<String>> bcnfSchemas = Normalizer.BCNFDecompose(U, fdset);
      System.out.println("BCNF END");
      System.out.println("Final BCNF Schemas: " + bcnfSchemas);
      ```
      ```
      BCNF START
        Current schema = [A, B, C, D, E]
        Current schema's FD Set = [D --> B, AB --> C, AE --> D]
        Current schema's superkeys = [[E, A], [E, A, B], [E, A, C], [D, E, A], [A, B, C, E], [A, B, D, E], [A, C, D, E], [A, B, C, D, E]]
        [A, B, C, D, E] is not in BCNF. Splitting on D --> B ...
        Left Schema = [B, D]
        Left Schema's FD Set = [D --> B]
        Left Schema's superkeys = [[D], [D, B]]
        Right Schema = [A, C, D, E]
        Right Schema's FD Set: [AE --> D]
        Right Schema's superkeys: [[E, A, C], [A, C, D, E]]

          Current schema = [A, C, D, E]
          Current schema's FD Set = [AE --> D]
          Current schema's superkeys = [[E, A, C], [A, C, D, E]]
          [A, C, D, E] is not in BCNF. Splitting on AE --> D ...
          Left Schema = [A, D, E]
          Left Schema's FD Set = [AE --> D]
          Left Schema's superkeys = [[E, A], [D, E, A]]
          Right Schema = [A, C, E]
          Right Schema's FD Set: []
          Right Schema's superkeys: [[E, A, C]]

      BCNF END
      Final BCNF Schemas: [[B, D], [A, C, E], [A, D, E]]
      ```

    - Finally, `fdSetClosure(FDSet fdset)` -- This method accepts a set of FDs and returns its closure, i.e., the full set of FDs generated through the repeated applications of Armstrong's Axioms. You can find the full algorithm in the notes or in the book, but I'll summarize it here:
  
      ```
      Inputs: FD(R), a set of functional dependencies for relational schema R
      FD+ = FD(R).clone()
      Repeat until no change to FD+:
        // augmentation
        Get the set of attributes represented in FD(R)
        Union all subsets of these attributes to both sides of all FDs in FD+
        Add these augmented FDs to FD+

        // trivial
        Find all trivial FDs in FD+ and add them to FD+

        // transitivity
        Find all transitive FDs in FD+ and add them to FD+
      return FD+
      ```
    
      The example below shows the FD set closure for $$FD = \{A \rightarrow B, AB \rightarrow C\}$$:

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

- Implement a method that will decompose a relational schema in 2NF.


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
