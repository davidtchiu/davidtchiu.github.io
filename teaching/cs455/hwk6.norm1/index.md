## CS 455 - Principles of Database Systems

### Hwk: Normalization
In this assignment you will implement algorithms that we've been learning in the DB theory lectures. Specifically, you will implement methods to find the FD set closure, attribute set closure, and BCNF decomposition.


#### Student Outcomes

- To gain insight into the process of design by decomposition.

#### Required Files


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

- Next, open up the `FDSet` class, which contains a set of FDs. Again this class has been completed for you, but read it over. Do not make any changes to this class.

- Now open the `FDUtil` class, and write the following two static methods. You're welcome to add as many other helper methods as you need (and you will need to write several helper methods!). Don't worry about the efficiency of these algorithms -- just focus on correctness.

  - `public static FDSet fdClosure(FDSet fdset)` -- This method accepts a set of FDs and returns its *closure*, that is, the *full* set of FDs generated through the repeated applications of Armstrong's Axioms. This method should be immutable, that is, it should not modify the contents of the `fdset` that was input.
  
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

  - `public static Set<Set<String>> attrClosure(Set<String> attrs, FDSet fdset)` -- This method accepts a set of attribute names and  a set of FDs, then the attribute set's closure. The closure of an attribute set is the full set of attributes that can be functionally determined by it. This method should be immutable, so leave the contents of the input parameters alone. 

- Finally, open the `Normalizer` class, and provide the following two methods.

  - `public static Set<Set<String>> findSuperKeys(Set<String> relation, FDSet fdset)` -- This method accepts a relation (which is just a set of attribute names) and a set of FDs. It returns the set of super keys in this relation with respect to the given FD set. If any FD contains an attribute that is not listed in the given relation, then thrown an `IllegalArgumentException`.

  ```java
  FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B"));       // A --> B
  FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C"));  // AB --> C
  FDSet fdset = new FDSet(f1, f2);

  Set<String> R1 = new HashSet<>(Arrays.asList("A", "B", "C"));
  System.out.println(Normalizer.findSuperkeys(R1, fdset));
  > [[A], [A, B], [A, C], [A, B, C]]

  Set<String> R2 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
  System.out.println(Normalizer.findSuperkeys(R2, fdset));
  > [[D, A], [D, A, B], [D, A, C], [A, B, C, D]]

  Set<String> R3 = new HashSet<>(Arrays.asList("X", "Y"));
  System.out.println(Normalizer.findSuperkeys(R3, fdset));
  > Exception in thread "main" java.lang.IllegalArgumentException: FD refers to unknown attributes: [A] --> [B]
  ```

  - `public static Set<Set<String>> BCNFDecompose(Set<String> relation, FDSet fdset)` -- Finally, this method accepts a relation and a corresponding FD set. It decomposes the given relation into a set of relations that satisfy BCNF. In the examples below, given the same FD set as before, we see that `R1 = [A,B,C]` was already in BCNF (since both `A` and `AB` are superkeys), so the algorithm returns a set containing just `R1`. On the other hand, `R2 = [A,B,C,D]` is decomposed into `[A,B]` and `[A,C,D]`.

  ```java
  FD f1 = new FD(Arrays.asList("A"), Arrays.asList("B"));       // A --> B
  FD f2 = new FD(Arrays.asList("A", "B"), Arrays.asList("C"));  // AB --> C
  FDSet fdset = new FDSet(f1, f2);

  Set<String> R1 = new HashSet<>(Arrays.asList("A", "B", "C"));
  System.out.println(Normalizer.findSuperkeys(R1, fdset));
  > [[A, B, C]]

  Set<String> R2 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
  System.out.println(Normalizer.findSuperkeys(R2, fdset));
  > [[A, B], [A, C, D]]
  ```

#### Grading

```
This assignment will be graded out of 80 points.

[15pt] Your program demonstrates abstraction and modularity.
       e.g., multiple classes, good use of information hiding, etc.
[10pt] All files in the data directory are read into relations on program's start.
[5pt]  The common attribute is projected only once in the natural-join result.
[10pt] Nested loop join is properly implemented.
[15pt] Hash join is properly implemented.
[15pt] Sort-merge join is properly implemented.
[5pt]  When sort-merge is called, the tuples are sorted on-demand only if the
       relations are not already sorted on the common attribute.
[5pt]  Your algorithms are proper timed, and elapsed time should be reported
       in milliseconds (ms).
[misc] Your program must be written in Java. Non-Java programs will be returned
       without a grade.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on canvas.
Remove all .class files from the program directory and zip up your project.

Navigate to our course on Canvas. You should see the Homework 6 Dropbox. Click on this link, and you should be able to drag your file right into the submission box. Click "Save Changes". You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu.
