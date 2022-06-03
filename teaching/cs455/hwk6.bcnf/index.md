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

Also, it's imperative for this assignment that you're careful about avoiding side-effects: All of the static methods you need to write must **not** alter the contents of the input structures. I have provided a **copy constructor**  in both `FD` and `FDSet` for this purpose. For instance:

    ```java
    public static method(FD originalFDset) {
      FDSet badcopy = originalFDset;   // No!!! badcopy simply points to the input.
                                        // Any changes to badcopy will cause side effects.
      FDSet truecopy = new FD(originalFDset);   // Yes! Creates a deep copy of originalFDset
    }
    ```
  
  - Note that Java's HashSet and TreeSet classes also provide copy constructors! Use them where applicable.
  



#### Instructions
You are to provide several methods to support BCNF decomposition. These are algorithms you should already be familiar with, and have been given in class (and are also covered in Chapter 8 of the book). Given a relation and a set of functional dependencies, your program should allow you to (1) determine all its superkeys and (2) normalize the schema to BCNF. Here's an example output for the Employee schema example we've been seeing in class:


```java
// Employee(ssn, name, cartID, title, wage)
Set<String> employee = new HashSet<>(Arrays.asList("ssn", "name", "cartID", "title", "wage"));
FD e1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
FD e2 = new FD(Arrays.asList("ssn", "cartID"), Arrays.asList("title","wage")); // ssn,cartID --> title,wage
FDSet empFDs = new FDSet(e1, e2);
System.out.println("Final BCNF Schemas: " + Normalizer.BCNFDecompose(employee, empFDs));
```
Here's the output (though I've formatted the superkeys by hand for readability). As the outputs are sets, it follows no particular ordering.
```
BCNF START
  Current schema = [cartID, name, title, ssn, wage]
  Current schema's FD Set = [[ssn] --> [name], [cartID,ssn] --> [title,wage]]
  Current schema's superkeys = [[cartID, title, wage, ssn], [cartID, title, ssn], [cartID, wage, ssn], [cartID, ssn], [cartID, name, wage, ssn], [cartID, name, ssn], [cartID, name, title, ssn], [cartID, name, title, wage, ssn]]
  *** Splitting on [ssn] --> [name] ***
  Left Schema = [name, ssn]
  Left Schema's FD Set = [[ssn] --> [name]]
  Left Schema's superkeys = [[name, ssn], [ssn]]
  Right Schema = [cartID, title, ssn, wage]
  Right Schema's FD Set = [[cartID,ssn] --> [title,wage]]
  Right Schema's superkeys: [[cartID, title, wage, ssn], [cartID, title, ssn], [cartID, wage, ssn], [cartID, ssn]]
BCNF END

Final BCNF Schemas: [[cartID, title, ssn, wage], [name, ssn]]
```



#### Program Requirements

1.  **You must write this program in Java.** I've provided skeleton code for you to implement. 

2. Because this assignment builds on the previous one, I have provided the working version of the `FDUtil` class as a .jar file. (Can't be giving out last assignment's solution source for the world to see now, can we?) You will need to import this jar file into your project so that you have access to the `FDUtil` methods. There are lots of tutorials online on how to do this in your preferred Java editor.

    - Here's the [documentation](FDUtil/) on the `FDUtil` class.


3. There's quite a bit of work involving *attribute sets* in this assignment. Superkeys are attribute sets, and so are relational schemas. Assume that attribute sets are just a (hash)set of attribute names (strings). For instance, the relational schema $$R(A,B,C)$$ can be constructed using this simple inline syntax:

    ```java
    // R(A,B,C)
    Set<String> R = new HashSet<>(Arrays.asList("A", "B", "C"));
    ```

    So just like the previous assignment, you will need to be familiar with [Java's Set interface](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html). Know how to take a set union, intersection, difference, and how to iterate through Sets.


4. All of your work will go inside the `Normalizer` class. Implement the following methods. As before, you don't need to emphasize the efficiency of your algorithms. You are welcome to implement as many helper methods as you need.

    - `findSuperkeys(Set<String> rel, FDSet fdset)` -- This method accepts a relational schema and an FD set and returns a set of superkeys for the given schema. A superkey is a set of attributes that can functionally determine all attributes in the relational schema. This is an algorithm we've gone through in class and is also in the book. You should thrown an `IllegalArgumentException` if an FD refers to an attribute that is not in the given relational schema. Here is an example that we saw in the slides:

      ```java
      // people(ssn, name, eyecolor)
      Set<String> people = new HashSet<>(Arrays.asList("ssn", "name", "eyecolor"));
      FD f1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
      FD f2 = new FD(Arrays.asList("ssn", "name"), Arrays.asList("eyecolor")); // ssn,name --> eyecolor
      FDSet fdset = new FDSet(f1, f2);
      System.out.println("Superkeys: " + Normalizer.findSuperkeys(people, fdset));
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
      Here's an IllegalArgumentException because `eyecolor` is not an attribute in the given schema, but appears in an FD:
      ```java
      // People(ssn, name)
      Set<String> People = new HashSet<>(Arrays.asList("ssn", "name"));
      FD f1 = new FD(Arrays.asList("ssn"), Arrays.asList("name")); // ssn --> name
      FD f2 = new FD(Arrays.asList("ssn", "name"), Arrays.asList("eyecolor")); // ssn,name --> eyecolor
      FDSet fdset = new FDSet(f1, f2);

      System.out.println("Superkeys: " + Normalizer.findSuperkeys(People, fdset));
      ```
      ```
      Exception in thread "main" java.lang.IllegalArgumentException: FD refers to unknown attributes: [name,ssn] --> [eyecolor]
        at Normalizer.findSuperkeys(Normalizer.java:132)
        at Main.main(Main.java:15)
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

      Here's an example in which People violates BCNF (due to `f3`, as `name` is not a superkey):
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
      FDSet fdsetR = new FDSet(g1, g2, g3, g4);
      System.out.println("Final BCNF Schemas: " + Normalizer.BCNFDecompose(R, fdsetR);
      ```
      ```
      BCNF START
        Current schema = [A, B, C]
        Current schema's FD Set = [A --> B, A --> BC, B --> C, AB --> C]
        Current schema's superkeys = [[A], [A, B], [A, C], [A, B, C]]
        *** Splitting on B --> C ***
        Left Schema = [B, C]
        Left Schema's FD Set = [B --> C]
        Left Schema's superkeys = [[B], [B, C]]
        Right Schema = [A, B]
        Right Schema's FD Set = [A --> B]
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
      FDSet fdsetU = new FDSet(f1, f2, f3);
      System.out.println("Final BCNF Schemas: " + Normalizer.BCNFDecompose(U, fdsetU));
      ```
      ```
      BCNF START
        Current schema = [A, B, C, D, E]
        Current schema's FD Set = [D --> B, AB --> C, AE --> D]
        Current schema's superkeys = [[A, E], [A, B, E], [A, C, E], [A, D, E], [A, B, C, E], [A, B, D, E], [A, C, D, E], [A, B, C, D, E]]
        *** Splitting on D --> B ***
        Left Schema = [B, D]
        Left Schema's FD Set = [D --> B]
        Left Schema's superkeys = [[D], [B, D]]
        Right Schema = [A, C, D, E]
        Right Schema's FD Set = [AE --> D]
        Right Schema's superkeys: [[A, C, E], [A, C, D, E]]
          Current schema = [A, C, D, E]
          Current schema's FD Set = [AE --> D]
          Current schema's superkeys = [[A, C, E], [A, C, D, E]]
          *** Splitting on AE --> D ***
          Left Schema = [A, D, E]
          Left Schema's FD Set = [AE --> D]
          Left Schema's superkeys = [[A, E], [A, D, E]]
          Right Schema = [A, C, E]
          Right Schema's FD Set = []
          Right Schema's superkeys: [[A, C, E]]
      BCNF END
      Final BCNF Schemas: [[B, D], [A, C, E], [A, D, E]]
      ```



#### Optional Extensions
If you're done early and are looking for an additional challenge, you could try implementing the following extensions:

- Implement a `public static Set<String> findCandidateKeys(Set<String> superkeys)` method in `Normalizer` that inputs a set of super keys and determines the set of candidate key(s).

- Implement a method that will decompose a relational schema in 2NF.

- Implement the canonical cover algorithm that finds the minimalistic representation of an FD set.


#### Grading

```
This assignment will be graded out of 70 points.

[20pts] Implementation of findSuperKeys() exhaustively generates all superkeys
of a given relational schema and its FD set. You throw an exception if there is an 
FD that refers to an unknown attribute in the given schema. Ensure that, when 
the FD set is empty, then all attributes in the given schema serves as the only superkey.

[10pts] Implementation of isBCNF(). It returns true if the left-hand side of all
non-trivial FDs is a superkey.

[30pts] Implementation of BCNFDeompose(). It returns a set of relational schemas that
satisfy BCNF. At every split point, you output the schema being split, the violating FD,
the superkeys for that schema. Also print the same information for the two schemas after
the split. 

[10pts] Immutability and no-side effects: None of the methods should modify the content of 
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
