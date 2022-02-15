## CS 161 - Intro to Computer Science

### Java Syntax Cheat Sheet

#### Lecture 1

Java syntax was not emphasized in this lecture. It focuses more on CS as a discipline, and what computers and algorithms can actually do.

#### Lecture 2

- **Comments** let us markup and annotate the code to describe what it's doing to ourselves, or to future programmers. Comments are ignored by the compiler.

  - Line comment

    ```java
    // This is a line comment
    ```

  - Block (multi-line) comment

    ```java
    /*
    This is a multi-line comment. It's
    usually used to describe larger segments
    of code below it.
    */
    ```

  - Javadocs comments

    ```java
    /**
     * Javadocs comments are also multi-line. They are
     * used to describe classes, constructors,
     * and methods.
     *
     * They use @tags like @param, @author, @return, etc.
     */
    ```

    Example

    ```java
    /**
     * This method returns the larger of the two inputs.
     * @param x First number
     * @param y Second number
     * @return The larger of x and y
     */
    public double max(double x, double y) {
      if (x > y) {
        return x;
      }
      return y;
    }
    ```

- **Class Definition**

  ```java
  /**
   * This class represents a ...
   * @author David, Michelle
   */
  public class ClassName {
    // field(s) go here

    // constructor(s) next

    // method(s) last
  }
  ```

- **Fields** - Each field stores a "property" for an instance of the class. For example, a Ticket Machine has to remember its "ticket price" among other properties.

  ```java
  private dataType fieldName;
  ```

  where `dataType` is any primitive (`int`, `double`, `boolean`, ...) or class name (`String`, `Circle`, ...)

  Examples

  ```java
  private double taxRate;
  ```

  ```java
  private String firstName;
  private String lastName;
  ```

- **Constructors** - A constructor is code that is run when an instance of the class is created. Generally, the code inside the constructor sets up initial values for all the fields defined in the class.

  ```java
  public ClassName(param1, param2, ...) {
    // code to initialize fields
  }
  ```

  where `ClassName` is the name of the class that the constructor is written for. The input parameters `param1`, `param2`, and so on, can be used to accept inputs, and are entirely optional. When a constructor does not accept any input parameters, it is called the **default constructor**.

  Examples

  ```java

  ```
