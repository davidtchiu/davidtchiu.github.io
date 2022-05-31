## CS 455 - Principles of Database Systems

### Hwk: Normalization
In this assignment you will implement algorithms that we've been learning in the DB theory lectures. Specifically, you will implement methods to find the FD set closure, attribute set closure, and BCNF decomposition.


#### Student Outcomes

- To gain insight into the process of design by decomposition.


#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me via Github.

- The start code is provided here [https://github.com/davidtchiu/cs455-hwk6-norm](https://github.com/davidtchiu/cs455-hwk6-norm). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project.

-  _*Clone*_ your forked Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```

#### Program Requirements

**You must write this program in Java.** I've provided skeleton code for you to implement. 

- Open up the `FD` class, which models a functional dependency. This class has already been completed for you, but it's worth reading through it to understand its interface, and how I chose to model it. Of particular note:
  - An `FD` has an attribute set on the left and on the right. The left-hand side attribute set determines the right-hand side.
  - An attribute set is just a set of `String`s (that is `Set<String>`). I used the slightly slower `TreeSet` in my implementation just to order the attribute names when they're printed. (Easier on the eyes when grading.)
  - There are two ways of constructing an `FD` object. The first way accepts the left and right attribute sets as `List`s. Another way accepts them as `Set`s.

    For instance, $$AD \rightarrow B$$ can be constructed using:
    ```java
    FD fd = new FD(Arrays.asList("A", "D"), Arrays.asList("B"));
    ```
    or
    ```java
    Set<String> left = new TreeSet<>();
    left.add("A");
    left.add("D");

    Set<String> right = new TreeSet<>();
    right.add("B")
    
    FD fd = new FD(left, right);
    ```
  - Do not make any changes to this class.

- Next, open up the `FDSet` class, which contains a set of FDs. Again this class has been completed for you. Read it over. Do not make any changes to this class.

- Now open the `FDUtil` class, and implement  the following static methods:
  - Before you start: All of the static methods you need to write must be *immutable*, that is, it should not modify the contents of any structures that are input. In other words, you should begin each method by first cloning (deep copying) the input structures.

  - `public static FDSet trivial(FDSet fset)` -- This method accepts a set of FDs and applies the trivial rule to all FDs, generating a new (potentially larger) FD set. Recall the trivial rule specifies that any subset of the left-side attributes can be functionally determined by the left-side attributes. For example, if we have $$UXW \rightarrow Z$$, then we also have $$UXW \rightarrow U$$ $$UXW \rightarrow X$$ $$UXW \rightarrow W$$ $$UXW \rightarrow UX$$ $$UXW \rightarrow UW$$ $$UXW \rightarrow XW$$ and $$UXW \rightarrow UXW$$.
  
  Here's an example output for $$FD = {A \rightarrow B, AB \rightarrow C}$$:
    ```java
    FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B")); // A --> B
    FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C")); // AB --> C
    FDSet fdset = new FDSet(f1, f2);
    System.out.println(FDUtil.trivial(fdset));
    ```
    ```
    [A] --> [A]
    [A] --> [B]
    [A, B] --> [A]
    [A, B] --> [B]
    [A, B] --> [C]
    [A, B] --> [A, B]
    ```


  - Finally, `public static FDSet fdClosure(FDSet fdset)` -- This method accepts a set of FDs and returns its closure, i.e., the full set of FDs generated through the repeated applications of Armstrong's Axioms. 
    
    The example below shows the FD set closure for $$FD = {A \rightarrow B, AB \rightarrow C}$$:
    ```java
    FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B"));       // A --> B
    FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C"));  // AB --> C
    FDSet fdset = new FDSet(f1, f2);
    System.out.println(FDUtil.fdClosure(fdset));
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

- You're welcome to add as many other helper methods as you need (and you will need to write several helper methods!). Don't worry about the efficiency of these algorithms -- just focus on correctness.


#### Grading

```
This assignment will be graded out of 100 points.

[50pt] Correct implementation of the FD Set closure algorithm [20pts], 
which is dependent on your implementations of:
  - trivial rule [10pts]
  - augmentation rule [10pts]
  - transitive rules [10pts]

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
