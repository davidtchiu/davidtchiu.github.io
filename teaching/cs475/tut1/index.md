## CS 475 - Operating Systems

### Lab 1: The Basics of C (Not Graded)

This is the first part of a multi-part primer on C, a lower-level language that is commonly used in systems programming. This tutorial is written for students who have prior experience in another language (say, Java), so you will often see me making comparisons to language features found in Java.

#### Related Reading

- [Dive into Systems Chap 16.1-16.4](https://diveintosystems.org/book/Appendix1)


#### Student Outcomes

- To become familiar with the programming environment.
- To become familiar with compiling single-source C programs.
- To become familiar with C's supported data types, arrays (and strings), function writing, structs, and input/output functions.

#### Instructions

Open your VS Code and get connected to your Remote Development environment.

  - Once you're logged in, you can open a terminal from the `Terminal` menu.

##### Part I: The Basics

- From your shell terminal, create a directory to store your first program. Let's call this directory `lab1_types`, like this:

  ```bash
  $ mkdir lab1_types
  $ cd lab1_types
  $ code types.c
  ```

  That should navigate your commandline into the new directory and open a fresh new file called `types.c` in VS Code. Paste in the following code, and we'll discuss what each line means later in this assignment.

  ```c
  /**
   * A simple C program
   *
   * @author <your-name>
   */

  #include <stdio.h>  // Line 7

  #define VAL 0
  #define PI 3.14

  int main(int argc, char *argv[])  // Line 12
  {
      char a = 'X'; // Line 14
      int b = 9;
      float c = 6;
      double d = 0;
      char str[] = "Hello world!";

      if (VAL == d) 
      {
          printf("Value of a is %c\n", a);  // Line 22
          printf("Value of b is %d\n", b);
          printf("Value of c is %f\n", c);
          printf("Value of d is %f\n", d);
          printf("Value of str is %s\n", str);

          //printf can input varying amounts of arguments
          printf("Values of a, b, and c are %c, %d, and %f\n", a, b, c);

          //controlling floating point output 
          printf("c/b is: %f\n", c/b);  // Line 32
          printf("c/b is: %0.0f\n", c/b);
          printf("c/b is: %25.3f\n", c/b);
          printf("c/b is: %0.9f\n", c/b);

          //obtaining input
          printf("Enter a character: ");
          scanf("%c", &a);  // Line 39
          printf("Enter an integer: ");
          scanf("%d", &b);
          printf("You entered %c and %d\n", a, b);
          printf("Enter an float: ");
          scanf("%f", &c);
          printf("You entered %f\n", c);
      }
      return 0; // Line 44
  }
  ```

- Save this file, and return to the Terminal to compile it:

  ```bash
  $ gcc -Wall -g -o types types.c
  ```

  Now run it, which prints this to the screen:

  ```bash
  $ ./types
  Value of a is X
  Value of b is 9
  Value of c is 6.000000
  Value of d is 0.000000
  Value of str is Hello world!
  Values of a, b, and c are X, 9, and 6.000000
  c/b is: 0.666667
  c/b is: 1
  c/b is:                     0.667
  c/b is: 0.666666687
  Enter a character: h
  Enter an integer: 8
  You entered h and 8
  Enter a float: 30
  You entered 30.000000
  ```

- Referring back to the `types.c` source code:

  - **Lines 7-10**: are called preprocessor directives. The `#include <stdio.h>` is like an `import` statement in Java. The `stdio.h` library provides many useful functions for input/output. The `#define <name> [value]` directive defines constant with an optional value.

  - **Line 12**: In C, the only necessary function you need to write is `main()`. Its functionality is the same as Java's `main()` method, in that, it's where the program execution begins. Studying its declaration, we find that it returns an `int` and like Java, it allows arguments to be input directly from the command-line (more on command-line arguments later).
  
  - **Lines 14 to 18**: defines some local variables. C supports: `char` (8-bits), `int` (32-bits), `float` (32-bits), and `double` (64-bits). Finally, note that strings in C are simply `char` arrays (more on strings later).
    
  - **Lines 22-26**: uses the `printf()` function (provided in `stdio.h`) to print. The first argument is a formatted string, followed by any number of values to be inserted into the formatted string. It is worth spending some time understanding C's **format specifiers** (those `%` thingies). Here are some common format specifiers:
    - `%c` - a character
    - `%d` - a signed integer
    - `%u` - an unsigned integer
    - `%f` - a floating point number
    - `%s` - a string (or rather, a char array)
  
  - **Lines 32-35**: shows that you can further format the above specifiers by prefixing it with `width.precision` modifier. For example, if left without a modifier (Line 32) `printf()` rounds up to six places after the floating point. Line 33 tells `printf()` to display 0 left-margin and display no values after the decimal, causing it to round 0.666667 up to 1. Line 34 specifies a `width`, which left-justifies the output to begin on the 25th place, rounded up to the third decimal place. Finally, Line 35 tries to output to the ninth decimal place, but here, you can see that floats can only be trusted up to six decimal places.
  
  - **Lines 38-41**: shows how we might obtain user-input with `scanf()`, which inputs a format string, and a reference to the address of the variable where the input should be stored. Let's study Line 39 in particular. The first argument, `%c` tells `scanf()` to read in the next `char` from the input stream. It will ignore white-spaces until it reaches a character, then reads until the next white-space is encountered. The data is then stored in the variable `a`.
  
    - Important: In C the `&` operator is known as the address-of operator when it prefixes a variable var. It give the variable's location in memory. ( What data type do you think `&var` returns? Answer: An int!)

  - **Line 44**: returns `0` before exiting the program. This value is not arbitrary -- the `0` signifies a normal exit, while a non-zero value indicates an error.

- **Do these exercises (not graded):**

  - Edit the `types.c` program so that you input a string using `scanf()` from the user.
    - I'll guess that the compiler may yell at you about your `scanf()` syntax to read a string into `&str`. Try reading it into `str` instead of `&str`, and it should work (hold on this thought for later).
      - But you should ask yourself, "What is different about strings that it doesn't require the address-of operator?" (Tutorial 2).
    - What happens when there's a whitespace in your input? Does whole line get read into `str`?
    - What happens when you try to read a string whose length is longer than 12? (Hint: The original string, "Hello World!" was length 12).

  - Write a program `temperature.c` that prompts the user for a temperature in Fahrenheit, and converts it to Celsius. Round temperatures off to the nearest hundredth degree.

  - Update `temperature.c` so that it asks the user whether they'd like to do another conversion after each conversion. If the user enters `'y'` then perform another conversion, exit the program if the user enters `'n'`, and if the user enters neither of those options, prompt again. (Hint: C's while-loop syntax is exactly the same as Java's). 

<!-- 

##### More about `char`

It is worth giving special attention to the `char` type. A `char` is essentially an 8-bit integer. That means chars can represent $$2^8 = 256$$ numbers, and each map to a unique character under the ASCII standard. Below I list a few notable mappings, but click here to see the [full list of ASCII codes](https://www.asciitable.com/).

- Do not confuse the character, `'0'` (which has an ASCII integer value of `48`), with `'\0'` (which has an ASCII integer value of 0). The character `\0` is called the "null character" and it plays a huge role, once we get to covering C strings.

- To see that `char`s are stored numerically, you can print them out using the `%d` formatter to view their ASCII values. You can even type-cast `int`s into `char`s, and vice versa.

  ```c
  printf("%c = %d\n", 'A', 'A');  //prints A = 65
  printf("%c = %d\n", 'a', 'a');  //prints a = 97

  //casting an int to a char
  int x = 33;
  char c = (char) x;  // cast 33 to a char
  printf("%c\n", c);  // prints '!'

  //casting char to an int
  c = '#';
  x = (int) c;
  printf("%d\n", x);  //prints 35, the ASCII value of '#'
  ```

- Therefore, it is possible to do arithmetic directly on chars, which may look a bit wonky at first, but can be extremely useful. For instance, we could use the following code to convert any letter to upper case by subtracting an offset of `32`:

  ```c
  if (c >= 'a' && c <= 'z') {
      c -= 32;
  }
  ```

- Check out the [ctype](https://www.cplusplus.com/reference/cctype/) library for other useful functions on chars. -->

##### Array Basics

C has array support, but unlike Java, arrays in C are not considered objects. That means we don't have that nice `array.length` variable to tell us the length of an array, so it is the programmer who must always keep track of, and pass along, each array's length! There's also no memory protection (like ArrayIndexOutOfBoundsException) -- so you may be able to access out of bounds elements, without your program crashing at runtime! Therefore it is especially important to defend against 1-off errors in your code.

- The syntax to create an array is:

  ```c
  data-type arrayName[N];
  ```

  where `N` is the integer size of your array. Alternatively, you can use this array-literal initialization syntax to create an array with predefined  values:

  ```c
  data-type arrayName[] = {val0, val1, val2, ...};
  ```

- Now create the following program, called `array.c`:

  ```c
  #include <stdio.h>
  #include <stdlib.h>
  #include <time.h>

  #define MAX_VALS 5

  int main(int argc, char *argv[])
  {
      int A[] = { 4, 3, 2, 1 };
      double B[MAX_VALS];

      //print out contents of A
      int i;
      for (i = 0; i < 4; i++)
          printf("%d ", A[i]);
      printf("\n");

      //seed the random number generator
      srand(time(NULL));

      //fill B[..] with random numbers
      for (i = 0; i < MAX_VALS; i++)
          B[i] = rand() % 100;    //get a number from 0 (inclusive) to 100 (exclusive)

      //print out contents of B
      for (i = 0; i < MAX_VALS; i++)
          printf("%.2f ", B[i]);
      printf("\n");

      return 0;
  }
  ```

- You should get something like:

  ```c
  4 3 2 1
  50.00 95.00 79.00 37.00 92.00
  ```

- Note a few important differences from Java's handling of arrays:

  - You *should not* input the size of the array from the user, then create the array later. There will be a workaround for this limitation after we introduce memory allocation (`malloc`) in a later lab.

  - There is no easy way to ask for the size of an existing array. So if you're writing a function (method) that inputs an array, you should also pass along that array's size so you know when to stop looping!

- Back to the above source file:

  - **Lines 2-3**: the random number generator functions `srand()` and `rand()` are imported from `stdlib.h`. We also include `time.h` to gain access to the `time()` function, which returns the number of seconds elapsed since 00:00 Jan 1, 1970 (known as Unix Time or Epoch Time).

  - **Line 19**: to use the random number generator, we need to first seed it with an unsigned integer. It is common to the current time as the seed.

  - **Lines 23**: after seeding, we can call `rand()` return a number in the range of [0, RAND_MAX].

- **Do these exercises**

  - Set a value at an out-of-bounds index for one of the arrays (e.g.,` B[6] = 10;`), and then print out the array element at that index. Do you get runtime errors?

  - What happens if you use `rand()` without seeding it first? Eliminate the call to `srand()`, and run the program a few times. What does this tell you about the connection between `srand()` and `rand()`?


##### Important: Strings and the NULL Terminating Character

This section is extremely important. Please pay close attention to how strings are handled in C, which is unlike other languages that simplify strings for us. For starters, there is no `String` type or a concatenation operator `+`. Strings must be handled with great care in C, as an array of chars.

A string in C is a sequence of $$k$$ `char`s stored in an array of size $$n$$, with $$k < n$$. For example, we can create a `char` array of size 10, and store `"cat"` or `"hello"`, or anything up to size 9.

- Yep, size 9, that's not a typo! One important caveat about C strings is that the stored sequence **must** be terminated with the NULL character `'\0'` so that C knows when your string actually ends!

- The following code creates a `char` array of size 20, and is initialized with a string of length 11, `"Puget Sound"`. Note that, although the string is only 11 characters long, it actually occupies 12 elements to store the terminating NULL character.

  ```c
  char str[20]; // hold strings of up to length 20 (including '\0')

  // now assign "Puget Sound" to be stored in str
  str[0] = 'P';
  str[1] = 'u';
  str[2] = 'g';
  str[3] = 'e';
  str[4] = 't';
  str[5] = ' ';
  str[6] = 'S';
  str[7] = 'o';
  str[8] = 'u';
  str[9] = 'n';
  str[10] = 'd';
  str[11] = '\0';
  ```

- After this initialization, the contents of `str` are shown below. The null character is appended at `str[11]` automatically. Although the remaining unused characters (`str[12]`, ..., `str[19]`) are shown in the figure as having `'\0'`, C may not make any guarantee of this.\
  <img src="figures/str1.png" width="65%" />

<!-- 
- Like Java, a string-literal in C is enclosed in double-quotes. When assigned as follows, it has the same effect as the code above. The NULL character does not appear in this syntax. however, string initialization is the **only time** you can assign a literal to a string variable.

  ```c
  char str[20] = "Puget Sound";
  ```

- **Caveat: This is a biggie, and is very different than other languages.** The *only* time you should be using the assignment operator for strings is during initialization (above). Let's suppose we want to re-assign `str` to the string `"Loggers"`. Unfortunately, the assignment operator will not work!

  ```c
  #include <stdio.h>
  #define MAX_LEN 20

  int main(int argc, char *argv[]) {
      char str[MAX_LEN] = "Puget Sound";
      char str2[MAX_LEN] = "Loggers";

      str = str2;       // won't compile!!
      str = "Loggers";    // won't compile either!!

      printf("%s ", str);
      return 0;
  }
  ``` 


- Instead, we need to write this very cumbersome code to copy one string to another variable.

  ```c
  //assign str2 to str by copying str2 over
  int i;
  for (i = 0; i < MAX_LEN && str2[i] != '\0'; i++) {
    str[i] = str2[i];
  }
  str[i] = '\0';  //don't forget to terminate str!
  ```

  After the code runs, `str` would contain:
  ![](figures/str2.png)

- Important! You need to be sure that `str` was declared with enough storage to hold the newly assigned string _plus_ the terminating NULL character!  For now, strings in C are usually declared as `char` arrays having "too much capacity," but that'll change once we talk about memory allocation (malloc).

  -->


- **The string.h Library:** As you can imagine, manipulating strings would be a pain because you need to do everything at the array level, and forgetting something as simple as terminating the string could have dire consequences. Fortunately, C provides a standard string library `string.h` to help us out. 
  - You should really check out [string.h](http://www.cplusplus.com/reference/cstring/) library for the full list of string functions, but here are the most useful ones.
  - `strcpy(target, src)`: assigns `src` to `target`.
  - `strdup(str)`: returns a cloned copy of the given string.
  - `sprintf(target, format, listing-of-expr)`: the most versatile way of building a string that has mixed types. (See example below!)
  - `strcat(target, src)`: concatenates  `src` to `target`, and null terminates.
  - `strlen(str)`: returns the length of `str`.
  - `strcmp(str1, str2)`: Just like `compareTo(String)` in Java. This function compares the given strings lexicographically and returns `0` if equal, a positive integer if `str1` is greater than `str2`, and a negative integer otherwise.
  - `strtok(target, delimiter)`: tokenizes (splits) the `target` string into smaller pieces, separated by the delimiter.

- Example Use of String Functions:

  ```c
  #include <stdio.h>
  #include <string.h>
  #define MAX_LEN 20

  int main(int argc, char *argv[]) {
      char str[MAX_LEN];
      char str2[MAX_LEN];

      str = "Puget Sound";  // this won't compile! (Can't assign strings using =)

      // string assignment
      strcpy(str, "Puget Sound"); // use strcpy() to assign strings!
      strcpy(str2, "Loggers");
      strcpy(str, str2);    // Line 12: replace "Puget Sound" with "Loggers"
      printf("%s\n", str);  // prints "Loggers"

      // concatenation
      strcat(str, " Rule");   // Line 18: concatenates " Rule" to str
      printf("%s\n", str);    // prints "Loggers Rule"

      // string building with sprintf()
      int x = 0, y = 1;
      sprintf(str, "x is %d, y is %d", x, y); // Line 22: easiest way to assign a formatted string
      printf("%s\n", str);    //prints "x is 0, y is 1"

      return 0;
  }
  ```

- Referring back to the source file:

  - **Line 9**: Warning! The familiar string assignment operator does not work in C! That's because string assignment is actually a multistep process that other languages (like Java and Python) had always simplified for us. As you saw earlier, to assign a string, you need to plug in each character in the array!

  - **Lines 12-14**: Thankfully, the string library provides an easy way to do assignment through the `strcpy()` (sting copy) function. Happily, all string.h functions automatically appends the terminating NULL character, so we don't have to do it ourselves!

  - **Lines 12**: concatenates `" Rule"` to the end of str, and appends terminating character.

  - **Lines 22**: When building strings, we often need to mix types (e.g. strings  with numbers). The `sprintf()` function that is used like `printf()`, but the string gets stored inside the variable. (Yes it NULL terminates.)

    - Warning: Assert that you allocated enough space in the `char` array in the first place, before using `sprintf()`, `strcpy()`, `strcat()`.


**Capturing and Parsing Keyboard Input** When getting keyboard input, recall that `scanf()` only reads up to the next whitespace in the input. That's good for reading individual tokens, but what if you wanted to read an entire line of input that could contain white spaces?
  - You need to use the [fgets()](https://www.geeksforgeeks.org/fgets-gets-c-language/) function to read an entire line of input from user into a string. 

    ```c
    #include <stdio.h>
    int main() {
        char buff[100];  
      
        printf("Enter a string: \n");
      
        // Read a line of input from the user
        fgets(buff, sizeof(buff), stdin);
        printf("You entered: %s", buff);
        return 0;
    }
    ```
    
    ```txt
    Enter a string: 
    Hello World !!     <-- entered by user
    You entered: Hello World !!
    ```


    The `fgets(buff, n, source)` function is described as follows: 
    - `buff` is a reference to the `char` array to store the user input. This is where the input string (including the NULL terminating character) will land.
    - `n` is the maximum allowable size (including the NULL terminating character) to be read from the input source.
    - `source` is the input source, which could be a file handler, a socket, or in this case, your standard input device (`stdin`).

  - Java provides the `split()` method in its `String` class to tokenize strings by a delimiter. Look into C's `strtok()` function. Test it out - you will need to use it later.

  - Java provides the useful `Integer.parseInt(String x)` to convert a string `x` into an int. What's the equivalent in C? What about converting strings to floats?

##### Writing Functions

Methods in Java are called functions in C. For now, we assume that, all functions must precede its use. That is, before you can call `foo()` inside `main()`, you must first define `foo()` before `main()`. We'll get around this restriction later with function *declarations*.


Function definitions follow this syntax:

```c
return-type function-name(param1, param2, ...) {
    //body
}
```

- Let's write our own function that concatenates two strings: `void my_strcat(char s[], char t[])` appends string `t` to the back of string `s` (basically, it performs `strcat()`).

  ```c
  #include <stdio.h>

  void my_strcat(char s[], char t[]) {
      int i = 0, j = 0;

      // assign i to the position immediately following the existing string s
      while (s[i] != '\0') {  // Line 12
          i++;
      }

      // i is now at the NULL character position of s[]
      // now append string t[] starting at position s[i]
      while (t[j] != '\0') {  // Line 17
          s[i] = t[j];
          i++;
          j++;
      }
      s[i] = '\0';    // don't forget to NULL-terminate string s
  }

  int main(int argc, char *argv[]) {
      char str[20] = "Hello";
      my_strcat(str, " World!!");
      printf("%s", str);
      return 0;
  }
  ```

- Let's check out the code:

  - **First**, note that the function must be defined **before** it can be used in `main()`.

  - **Lines 12-13:** We want `i` be the length of string `s`, and to do that, we simply traverse all characters of `s` until we encounter the `NULL` terminating character `'\0'`.

  - **Lines 17-20**: The second loop will copy into `s` all elements of `t` until `t`'s NULL character is encountered.

  - **Lastly**, we must insert a NULL terminating character to the end of `s`. As is true in Java, any changes made to an array passed as a parameter will persist beyond the scope of the function call! Therefore, it would be redundant to return `s` in `my_strcat()`.

**Managing Multiple Files** Putting all of our functions in the same file will become hard to manage. It would be ideal to split related functions into different files and then import those functions later. [Go here to learn more about organizing multi-file programs](http://www.cs.cf.ac.uk/Dave/C/node35.html).

- **Do These Exercises**

  - Write a function `void strToUpper(char str[])` that inputs a string, and converts it to upper-case.

  - It would be useful to convert a string into different types. Can you figure out how a Java function like `Integer.parseInt(s)` might be implemented in C? That is, given a string like `"365"`, return `365 (int)`.

##### C Structures (struct)

C is not an object-oriented language, but that doesn't mean you can't create user defined types that are object-like. These are called structures, frequently used to combine multiple pieces of data in a single type (just as objects do in Java). A C struct is nothing more than a listing of data fields (called *members*).

- To create a `struct` type in C:

  ```c
  struct structure-name {
      type-0 member-0;
      type-1 member-1;
      // ... other members
      type-N member-N;
  };
  ```

  Just like functions, `structs` must also be declared above any code where they are used.

  ```c
  #include <stdio.h>
  #include <math.h>

  /**
   * Define a Point struct
   */
  struct Point {
      double xCoord;
      double yCoord;
  };

  /**
  * Finds distance between two points
  * @param u one point
  * @param v another point
  * @return distance between points u and v
  */
  double getDistance(struct Point u, struct Point v) {
      return sqrt(pow(u.xCoord - v.xCoord, 2) + pow(u.yCoord - v.yCoord, 2));
  }

  int main(int argc, char *argv[]) {
      struct Point p, q;  //declare two Points (yes the struct keyword is required -- for now)

      //set Points' location
      p.xCoord = 0;
      p.yCoord = 0;
      q.xCoord = 5.1;
      q.yCoord = 10.75;

      printf("The distance from p to q is: %.3f\n", getDistance(p,q));
      return 0;
  }
  ```


##### Important Aside: Renaming Types with `typedef`

C allows us to give new names to established data types. For instance, I could create an alias `employee_t` to stand for `unsigned short int`, and use `employee_t` everywhere in my code to improve readability. We do this using the following syntax:

```c
typedef <data-type> <alias>;
```

- Let's alias `employee_t` to represent an `unsigned short int`. This makes for much more readable  code:

  ```c
  #include <stdio.h>

  typedef unsigned short int employee_t;   //alias employee_t to unsigned short int

  /**
  * Returns a pointer to a string containing an employee's name
  */
  int getSalary(employee_t id) {
      //(code omitted)
  }

  /**
  * Main function
  */
  int main(int argc, char *argv[]) {
      employee_t employeeID;
      printf("Enter an employee id: ");
      scanf("%u", &employeeID);   // read input as unsigned int (%u) into employeeID.

      int salary = getSalary(employeeID);

      // (code omitted)

      return 0;
  }
  ```

- Typedefs are particularly useful when alaising `structs`. It's mildly annoying that we have to use `struct Point p;` syntax just to declare a `struct Point` variable. Using `typedef` totally optional here, but it *would* make the syntax a little easier on the eyes:

  ```c
  typedef struct <structure-name> {
      //members
  } <structure-name>;
  ```

  We can now declare the `Point` struct as follows,

  ```c
  typedef struct Point {
      double xCoord;
      double yCoord;
  } Point;
  ```

  and now we can declare new points simply using `Point p;` instead of `struct Point p;`



#### Credits

Written by David Chiu. 2022.
