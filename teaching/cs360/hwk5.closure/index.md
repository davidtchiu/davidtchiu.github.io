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
**You must write this program in Java.** I've provided starter code for you to implement. Before starting, you will need to be familiar with [Java's Set interface](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html). Know how to do all the set operations (check membership, take a union, intersection, ...), and how to iterate through `Sets` when there are no indices. 

Also, it's imperative that you're careful about avoiding side-effects from object aliasing: All of the static methods you need to write must **not** alter the contents of the input structures. I have provided a **copy constructor**  in both `FD` and `FDSet` for this reason. For instance:

```java
public static void method(FD originalFDset) {
  FDSet badcopy = originalFDset;  // No!!! badcopy simply aliases the original FD set.
  badcopy.remove(...);  // Oh no, the original FDset has changed too.

  FDSet truecopy = new FDSet(originalFDset);   // Do this instead!
  truecopy.remove(...); // Yay, originalFDset remains unchanged due to copy-construction.
}
```

Note that Java's `HashSet` and `TreeSet` classes also provide "copy constructors!" Use them where applicable.
  


#### Program Requirements

1. Comprehension: Open  the `FD` class, which models a single functional dependency. **Do not make changes to this class.** But you must read through it to understand its interface, and how I chose to model an FD. Of particular note:

    - An `FD` has an attribute set on the left and on the right. The left-hand side attribute set "functionally determines" the right-hand side, as we've come to understand from class lectures.

    - An attribute set is just a set of Strings (that is `Set<String>`). I used `TreeSet` in my implementation  to order the attribute names when they're printed. (The choice of `TreeSet` was only to make it easier on the eyes when grading your work.)

    - For example, $$A,D \rightarrow B$$ can be constructed using:

        ```java
        FD fd = new FD(Set.of("A", "D"), Set.of("B"));
        ```

    - Do not make any changes to this class.

2. Next, open up the `FDSet` class, which represents a set of FDs. It's really just a wrapper class that I wrote to make grading easier. **Read it over, but you do not need to make any changes to this class either.**

3. Now open the `FDUtil` class, and implement the `static` methods.

    - `powerSet(Set<E> inputSet)` -- This method returns the _power set_ of the given set, so it returns a `Set` of `Set`s. Recall that the power set of $$S$$ is the set of all subsets of $$S$$, including the empty set. You'll want to write this method recursively. Here's a hint: The base case of the recursion is reached when the `inputSet` is empty, and in that case, you'll  return a new set containing just the empty set. I'll leave the general case of the recursion to you to figure out -- think about how will you reduce the input set at each step. Here's one example output.

      ```java
      Set<String> s = new TreeSet<>(Set.of("A", "B", "C")); // s = {A,B,C}
      System.out.println(FDUtil.powerSet(s)); // P(s) = { {}, {A}, {B}, ... , {A,B,C} }
      ```
      ```
      [[], [A], [B], [C], [A, B], [A, C], [B, C], [A, B, C]]
      ```

4. The method above is a fundamental helper method that we'll need to call in various spots. Now let's focus on the implementation of Armstrong's 3 Axioms: trivial rule, augmentation rule, and transitive rule.

    - `trivial(Set<String> attrs)` -- This method accepts the relation's attribute set and returns all trivial FDs over those attributes. Recall that an FD $$\alpha \rightarrow \beta$$ is trivial when $$\beta \subseteq \alpha$$. For every non-empty subset $$\alpha$$ of `attrs`, generate $$\alpha \rightarrow \beta$$ for every non-empty subset $$\beta$$ of $$\alpha$$. Omit FDs with empty right-hand sides. **Hint:**  `powerSet()` seems useful here. You may also want to look into the `containsAll()` method in Java's Set interface, which is the implementation of $$\subseteq$$.

      For example:

      ```java
      // if relation R has attributes (A,B), then give me all the trivial dependencies!
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
        A,C --> B,C   // This comes from augmenting f1: A --> B with C
        A,B,C --> C   // This comes from augmenting f2: A,B --> C with C
      ]
      ```

    - `transitive(FDSet fdset)` -- This method returns a new set of FDs after repeatedly applying the transitive rule until no more new FDs are detected. Here's an example output for $$F = \{A \rightarrow AB, AB \rightarrow C, C \rightarrow D\}$$:

      ```java
      FD f1 = new FD(Set.of("A"), Set.of("A", "B")); // f1 = A --> A,B
      FD f2 = new FD(Set.of("A", "B"), Set.of("C")); // f2 = A,B --> C
      FD f3 = new FD(Set.of("C"), Set.of("D"));      // f3 = C --> D
      FDSet fdset = new FDSet(f1, f2, f3);
      System.out.println(FDUtil.transitive(fdset));
      ```
      ```
      [
        A --> C     // This comes from transitivity between f1: A --> A,B and f2: A,B --> C
        A --> D     // This comes from transitivity between A --> C (generated previously) and f3: C --> D
        A,B --> D    // This comes from f2: A,B --> C and f3: C --> D
      ]
      ```
      Notice that $$A \rightarrow D$$ (via $$A\rightarrow C$$ and $$C \rightarrow D$$) is  generated, even though it took an iteration to first generate $$A \rightarrow C$$. Therefore, this method is exhaustive. (Just keep generating new transitive FDs in an infinite loop, breaking out when the FDSet stops changing.)

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

    - Finally, `fdSetClosure(FDSet fdset)` -- This method accepts a set of FDs $$F$$ and returns its closure $$F^+$$, generated through repeated applications of Armstrong's Axioms. Assume the relation's attributes are exactly those appearing on either side of the FDs in the input set. For this assignment, omit FDs with empty right-hand sides. This method must not modify the input FD set.

      First, collect the relation's attributes and use `trivial()` to generate all trivial FDs. Then repeatedly apply augmentation and transitivity until no new FDs are generated. 

      ```text
      Input: F, a set of functional dependencies

      R = All attributes appearing on either side of all the FDs in F
      subsets = powerSet(R)
      F+ = Copy of F

      // apply trivial rule
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

4. Now, test: Once you have FDSet Closure algorithm working, you should be able to test the logical equivalence between two FD sets. Recall that two FD sets are logically equivalent if-and-only-if their closures are equal. There's nothing you need to do here, except  to try out more test cases in order to verify that the equals method works as intended. Here's one test case, but you should come up with more on your own.

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
    
  The above test case should return `true`. Even though `fdset2` initially contains more FDs, both sets logically infer the same full set of FDs.

#### Grading

```
This assignment will be graded out of 100 points.

[25pts] The PowerSet method is completed.

[10pts] Trivial rule.

[10pts] Augmentation rule.

[20pts] Transitivity rule. Must be exhaustive (i.e., repeatedly apply
transitivity until there is no change.)

[25pts] Implementation of the FD Set closure algorithm

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
