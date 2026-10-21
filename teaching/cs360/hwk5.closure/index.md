## CS 360 - Principles of Database Systems

### Hwk 5: FD Set Closure and Armstrong's Axioms
In this assignment you will implement algorithms that we've been learning in the DB theory lectures. Specifically, you will implement methods to find the FD set closure, attribute set closure, and BCNF decomposition.


#### Student Outcomes

- To gain insight into the fundamentals and algorithms of relational design theory

###### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- The starter code is provided here [https://github.com/davidtchiu/db-fdclosure](https://github.com/davidtchiu/db-fdclosure).

- Click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is to hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```

- This should download the starter code in a directory called `db-fdclosure`. After you've done this, you can work freely from VS Code or any other editor. 


#### Preliminary
You will need to be familiar with [Java's Set interface](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html). Know how to take a set union, intersection, difference, and how to iterate through Sets. **You must write this program in Java.** I've provided skeleton code for you to implement. 

Also, it's imperative for this assignment that you're careful about avoiding side-effects: All of the static methods you need to write must **not** alter the contents of the input structures. I have provided a **copy constructor**  in both `FD` and `FDSet` for this purpose. For instance:

```java
public static void method(FD originalFDset) {
  FDSet badcopy = originalFDset;  // No!!! badcopy simply points to the input FD set.                                  
  FDSet truecopy = new FD(originalFDset);   // Do this instead!
}
```

Note that Java's `HashSet` and `TreeSet` classes also provide "copy constructors!" Use them where applicable.
  


#### Program Requirements

For this assignment, you're welcome to add as many other helper methods as you need (and you will need to write several helper methods!). Don't worry about the efficiency of these algorithms -- just focus on correctness.

1. Open up the `FD` class, which models a functional dependency. This class has already been completed for you, but it's worth reading through it to understand its interface, and how I chose to model it. Of particular note:

    - An `FD` has an attribute set on the left and on the right. The left-hand side attribute set determines the right-hand side.

    - An attribute set is just a set of Strings (that is `Set<String>`). I used `TreeSet` in my implementation  to order the attribute names when they're printed. (Easier on the eyes when grading.)

    - For example, $$AD \rightarrow B$$ can be constructed using:

        ```java
        FD fd = new FD(Set.of("A", "D"), Set.of("B"));
        ```

    - Do not make any changes to this class.

2. Next, open up the `FDSet` class, which represents a set of FDs. It's really just a wrapper class that I wrote to make grading easier. Read it over, but also do not make any changes to this class.

3. Now open the `FDUtil` class, and implement the following static methods:

    - `powerSet(Set<E> inputSet)` -- This method returns the power set of the given set, so it returns a Set of Sets. Recall that the power set of $$S$$ is all subsets of $$S$$, including the empty set. You'll want to write this method recursively. Here's a hint: The base case of the recursion is reached when the `inputSet` is empty, and in that case, you'll  return a new set containing just an empty set. I'll leave the general case to you to figure out -- how will you  reduce $$S$$ at each step? Say the set containing `[A,B]` was input. This algorithm should return the set containing `[], [A], [B], [A,B]`. Here's one possible output. Your output order may vary.

      ```java
      Set<String> s = new TreeSet<>(Set.of("A", "B", "C"));
      System.out.println(FDUtil.powerSet(s));
      ```
      ```
      [[], [A], [B], [C], [A, B], [A, C], [B, C], [A, B, C]]
      ```

4. Now complete these methods in the `FDUtil` class.

    - `trivial(Set<String> attrs)` -- This method accepts the relation's attribute set and returns all trivial FDs over those attributes. Recall that an FD $$\alpha \rightarrow \beta$$ is trivial when $$\beta \subseteq \alpha$$. For every non-empty subset $$\alpha$$ of `attrs`, generate $$\alpha \rightarrow \beta$$ for every non-empty subset $$\beta$$ of $$\alpha$$. Omit FDs with empty right-hand sides. **Hint:**  `powerSet()` seems useful here.

      For example:

      ```java
      System.out.println(FDUtil.trivial(Set.of("A","B")));
      ```

      Output:

      ```text
      [
        A --> A
        B --> B
        A,B --> A
        A,B --> B
        A,B --> A,B
      ]
      ```




<!-- 
    - `trivial(FDSet fdset)` -- This method accepts a set of FDs and returns a new set of trivial FDs stemming from the input set. Recall the trivial rule says that any subset of the left-side attributes can be functionally determined by the left-side attributes. For each FD $$\alpha\rightarrow \beta$$ in the input set, find all non-empty subsets $$\gamma \subseteq \alpha$$. (Hint: Use `powerSet()` to generate the subsets of each left-hand side.) Generate a new FD $$\alpha \rightarrow \gamma$$. Omit FDs with empty right-hand sides. Here's an example output for $$F = \{A \rightarrow B, AB \rightarrow C\}$$:

      ```java
      FD f1 = new FD(Set.of("A"), Set.of("B"));       // f1 = A -> B
      FD f2 = new FD(Set.of("A", "B"), Set.of("C"));  // f2 = A,B -> C
      FDSet fdset = new FDSet(f1, f2);
      System.out.println(FDUtil.trivial(fdset));
      ```
      ```
      [
        A,B -> A      // This comes from A,B -> C, since A is a subset of A,B
        A,B -> B      // This comes from A,B -> C, since B is a subset of A,B
        A,B -> AB     // This comes from A,B -> C, since A,B is a subset of A,B
      ]
      ``` -->

    - `augment(FDSet fdset, Set<String> attrs)` -- This method accepts a relation's FD set `fdset` and some attribute set `attrs` and returns a new set of FDs generated from combining both sides of each FD in `fdset` with the given set of attributes `attrs`. Here's an example output for $$F = \{A \rightarrow B, AB \rightarrow C\}$$ augmented with attribute set $$\{C\}$$:

      ```java
      FD f1 = new FD(Set.of("A"), Set.of("B"));       // f1 = A --> B
      FD f2 = new FD(Set.of("A", "B"), Set.of("C"));  // f2 = A,B --> C
      FDSet fdset = new FDSet(f1, f2);

      // We want to augment fdset with {C}
      Set<String> attrs = new HashSet<>(Set.of("C"));
      System.out.println(FDUtil.augment(fdset, attrs));
      ```
      ```
      [
        A,C --> B,C   // This comes from augmenting A --> B with C
        A,B,C --> C   // This comes from augmenting A,B --> C with C
      ]
      ```

    - `transitive(FDSet fdset)` -- This method returns a new set of FDs after *repeatedly* applying the transitive rule until no more new FDs are detected. Here's an example output for $$F = \{A \rightarrow AB, AB \rightarrow C, C \rightarrow D\}$$:

      ```java
      FD f1 = new FD(Set.of("A"), Set.of("A", "B")); // f1 = A --> A,B
      FD f2 = new FD(Set.of("A", "B"), Set.of("C")); // f2 = A,B --> C
      FD f3 = new FD(Set.of("C"), Set.of("D"));      // f3 = C --> D
      FDSet fdset = new FDSet(f1, f2, f3);
      System.out.println(FDUtil.transitive(fdset));
      ```
      ```
      [
        A --> C     // This comes from A --> A,B and A,B --> C
        A --> D     // This comes from A --> C and C --> D
        A,B --> D    // This comes from A,B --> C and C --> D
      ]
      ```
      Notice that $$A \rightarrow D$$ (via $$A\rightarrow C$$ and $$C \rightarrow D$$) is  generated, even though it took an iteration to first generate $$A \rightarrow C$$. Therefore, this method is exhaustive. (Just keep iterating and generating new transitive FDs as long as the returned set keeps changing.)

      Here's another example:
      ```java
      FD f1 = new FD(Set.of("A"), Set.of("C", "B")); // f1 = A --> C,B
      FD f2 = new FD(Set.of("C"), Set.of("D", "E")); // f2 = C --> D,E
      FDSet fdset = new FDSet(f1, f2);
      System.out.println(FDUtil.transitive(fdset));
      ```
      ```
      [
        A --> D,E     // This comes from A --> C,B and C --> D,E
      ]
      ```

    - Finally, `fdSetClosure(FDSet fdset)` -- This method accepts a set of FDs and returns its closure $$F^+$$, generated through repeated applications of Armstrong's Axioms. Assume the relation's attributes are exactly those appearing on either side of the FDs in the input set. For this assignment, omit FDs with empty right-hand sides.

      First, collect the relation's attributes and use `trivial()` to generate all trivial FDs. Then repeatedly apply augmentation and transitivity until no new FDs are generated:

      ```text
      Input: F, a set of functional dependencies

      R = All attributes appearing on either side of the FDs in F
      subsets = powerSet(R)
      F+ = Copy of F

      // reflexivity
      Add all FDs returned by trivial(R) to F+

      Repeat:
        // augmentation
        For every Z in subsets:
          Apply augment(F+, Z) and add the results to F+

        // transitivity
        Apply transitive(F+) and add the results to F+
      Until no change to F+

      return F+
      ```

      The method must not modify the input FD set.

<!-- 
    - Finally, `fdSetClosure(FDSet fdset)` -- This method accepts a set of FDs and returns its closure $$F^+$$, i.e., it returns the full set of FDs generated through the repeated applications of Armstrong's Axioms. Assume the relation’s attributes are exactly those appearing on either side of the FDs in the input FD set. You can find the pseudocode algorithm in the notes or in the book, but I'll repeat it here:
  
      ```
      Input: F, a set of functional dependencies

      R = All attributes appearing on either side of the FDs in F
      F+ = Copy (clone) of F // Don't want this algorithm to affect F

      Subs = powerSet(R)  // Subs has all subsets of attributes
      For every non-empty set X in Subs:
        Add the FD X -> X to F+

      Repeat:
        // augmentation
        For every Z in Subs:
          Apply augment(F+, Z) and add the results to F+

        // trivial
        Apply trivial(F+) and add the results to F+

        // transitivity
        Apply transitive(F+) and add the results to F+
      Until no change to F+

      return F+
      ```
      -->
    
      The example below shows the FD set closure for $$F = \{A \rightarrow B, AB \rightarrow C\}$$:

      ```java
      FD f1 = new FD(Set.of("A"), Set.of("B"));       // f1 = A --> B
      FD f2 = new FD(Set.of("A", "B"), Set.of("C"));  // f2 = A,B --> C
      FDSet fdset = new FDSet(f1, f2);
      System.out.println(FDUtil.fdSetClosure(fdset));
      ```
      ```
      [
        A --> A
        A --> B
        A --> C
        A --> A,B
        A --> A,C
        A --> B,C
        A --> A,B,C
        A,B --> A
        A,B --> B
        A,B --> C
        A,B --> A,B
        A,B --> A,C
        A,B --> B,C
        A,B --> A,B,C
        A,C --> A
        A,C --> B
        A,C --> C
        A,C --> A,B
        A,C --> A,C
        A,C --> B,C
        A,C --> A,B,C
        A,B,C --> A
        A,B,C --> B
        A,B,C --> C
        A,B,C --> A,B
        A,B,C --> A,C
        A,B,C --> B,C
        A,B,C --> A,B,C
        B --> B
        C --> C
        B,C --> B
        B,C --> C
        B,C --> B,C        
      ]
      ```

4. Once you have FD Set Closure algorithm working, you should be able to test the logical equivalence between two FD sets. Recall that two FD sets are logically equivalent if-and-only-if their closures (F+) are equal. There's nothing you need to do here, except  to try out more test cases in order to verify that the equals method works as intended.

    ```java
    // One FD Set = A --> A,B and A,B --> C
    FD f1 = new FD(Set.of("A"), Set.of("A", "B")); // A --> A,B
    FD f2 = new FD(Set.of("A", "B"), Set.of("C")); // A,B --> C
    FDSet fdset = new FDSet(f1, f2);

    // Another FD set: A,B --> B and A --> B,C and A,B --> C
    FD g1 = new FD(Set.of("A", "B"), Set.of("B")); // A,B --> B
    FD g2 = new FD(Set.of("A"), Set.of("C", "B")); // A --> B,C
    FD g3 = new FD(Set.of("A", "B"), Set.of("C")); // A,B --> C
    FDSet fdset2 = new FDSet(g1, g2, g3);

    // Test FD set equality: fdset and fdset2 are logically equivalent iff their closures are equivalent
    System.out.println("Logically Equivalent? " + (fdset.isEquivalentTo(fdset2)));
    ```
    
  The above test case should return `true`.

#### Grading

```
This assignment will be graded out of 100 points.

[20pts] The PowerSet method is completed.

[10pts] Trivial rule.

[20pts] Augmentation rule.

[20pts] Transitivity rule. Must be exhaustive (i.e., repeatedly apply
transitivity until there is no change.)

[20pts] Implementation of the FD Set closure algorithm

[10pts] Immutability: None of the methods should modify the content of 
any input structure. (No side effects -- use copy constructors!)

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
