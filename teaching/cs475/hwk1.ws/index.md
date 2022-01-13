## CS 161 - Intro to Computer Science

### Hwk: Getting Started with C

This is the first part of a multi-part primer on C. You will be programming a simple interactive program in C, and getting familiarized with your programming environment on Linux.

#### Student Outcomes

- To become familiar with the programming environment
- To become familiar with compiling single-source C programs.
- To become familiar with C's supported data types, arrays (and strings), function writing, structs, and input/output functions.

#### Required Files

The following file(s) have been provided for this assignment.

- [develop-end.ova](TBD TBD)

#### Instructions

- Open your virtual machine, and log in. Open up a Terminal window to the shell.

- From your shell, create a directory to store your first program. Let's call this directory `learningTypes/`.
  ```bash
  mkdir learningTypes
  ```
- Now navigate inside this directory:
  ```bash
  cd learningTypes
  ```
- Now let's create a new file using the VSCode editor.
  ```bash
  code types.c
  ```
  Paste in the following code, and we'll discuss what each line means later in this assignment.
  ```c
    1  /**
    2  * A simple C program
    3  *
    4  * @author David
    5  */
    6
    7 #include <stdio.h>
    8
    9  #define VAL 0
    10 #define PI 3.14
    11
    12 int main(int argc, char *argv[])
    13 {
    14     char a = 'X';
    15     int b = 9;
    16     float c = 6;
    17     double d = 0;
    18     char str[] = "Hello world!";
    19
    20     if (VAL == d)
    21     {
    22         printf("Value of a is %c\n", a);
    23         printf("Value of b is %d\n", b);
    24         printf("Value of c is %f\n", c);
    25         printf("Value of d is %f\n", d);
    26         printf("Value of str is %s\n", str);
    27
    28         //printf can input varying amounts of arguments
    29         printf("Values of a, b, and c are %c, %d, and %f\n", a, b, c);
    30
    31         //controlling floating point output
    32         printf("c/b is: %f\n", c/b);
    33         printf("c/b is: %0.0f\n", c/b);
    34         printf("c/b is: %25.3f\n", c/b);
    35         printf("c/b is: %0.9f\n", c/b);
    36
    37         //obtaining input
    38         printf("Enter a character: ");
    39         scanf("%c", &a);
    40         printf("Enter an integer: ");
    41         scanf("%d", &b);
    42         printf("You entered %c and %d\n", a, b);
    43         printf("Enter an float: ");
    44         scanf("%f", &c);
    45         printf("You entered %f\n", c);
    46     }
    47     return 0;
    48 }
  ```

#### Grading

```
This assignment will be graded out of 20 points:

[1pt] Appropriate constants have been defined

[1pt] Array(s) and strings are created using a constant size

[3pt] Your program is multi-file, contains multiple well-defined functions.
      A Makefile must be included with all and clean targets defined.

[5pt] Your program handles multiple-word inputs

[4pt] Your program updates counts and histogram appropriately

[3pt] Your program prints a vertical (not horizontal) histogram

[1pt] Basic error checking is handled, such as entering invalid menu options.

[1pt] Your program runs repeatedly until sentinel inputs are entered

[1pt] The README is written and placed in your project directory. Your
      program observes good style and commenting.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas.
I assume you wrote your program inside VirtualBox.

- From the Terminal in your VirtualBox,
- Navigate to the directory that contains your homework directory.
- Zip up your homework directory: `tar -czvf <file_name>.tar.gz <homework_dir>`

  - For example, if my homework directory is called `hwk1/`, and I want the zipped file to be called `hwk1.tar.gz`, use: `tar -czvf hwk1.tar.gz hwk1/`
  - You can un-zip this file later using: `tar -xzvf <file_name>.tar.gz`

- Navigate to our course on Canvas, and find the assignment submission box.

- Click on Submit Assignment, and you should be able to "browse" for your file

- When you've selected the proper file, click Submit Assignment again to upload it.

- You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2015.
