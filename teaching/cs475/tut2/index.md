## CS 475 - Operating Systems

### Lab 2: Pointers and Addressing (Not Graded)

This is the second part of a multi-part primer on C. In this tutorial-assignment, you'll gain an appreciation for the way values and variables are stored in memory. You'll be introduced to pointers, as well as the connection between pointers and arrays.

#### Related Reading

- [Dive into Systems Chapter 2.1-2.3](https://diveintosystems.org/book/C2-C_depth/index.html)

#### Student Outcomes

- To understand how values and variables are stored in memory.
- To be familiar with pointers and references.
- To understand the connection between pointers and arrays.


#### Instructions

Open your VS Code and get connected to your Remote Development environment. If you don't know what I'm referring to, then you need to complete [Hwk 1](../hwk1.vscode).

  - Once you're logged in, you can open a terminal from the `Terminal` menu.

##### Preamble: Notepads, Street Addresses, and Buildings
Pointers are powerful structures in C. To get a sense of what pointers are, let's use a real-world analogy:
  - Data in this analogy are like buildings in a city.
  - A **pointer** to that data is like a building's *street address*.
  - A **pointer variable** is just a *notepad* with a *street address* written on it that you can pass to other people.

Therefore, you wouldn't ever say that a street address is itself a building, but it does tell you where to go to find it.

| Real-World Analogy                                                                                    | Explanation                                                                                                   |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Any building always has a street address. You just have to ask for it.       | *In C this is what the address-of operator `&` provides.*                                                        |
| You can navigate to the building located at an address: examine it, destroy it, change it. | *This is what it means to de-reference (or lookup) a pointer.*                                                          |
| You can reuse a notepad by writing a different building address on it.                   | *A pointer variable can be reassigned to refer to a different piece of data.*                               |
| You can write an address on a notepad, and share the notepad with others.                  | *A pointer can be passed in as function input-parameters so it can find the piece of data too.*               |
| You can check out the neighboring building, and the one after that, ...                    | *This is called pointer arithmetic. Once you have an address, you can visit the nearby element effortlessly.* |

Under this scheme, think about what pointers would enable us to do:
  - You can efficiently pass massive data structures into functions. (Don't pass the whole building, pass its street address!)
  - You can create linked structures (linked lists, trees). A node contains a data element, and a pointer variable (notepad) holding the address of the next node.


##### Part 1:  Memory and Data Types
How is data stored and managed inside your machine? Think of your computer's memory as being a giant array of bytes. Each byte corresponds to a unique *address* in memory. Depending on the data's *type*, a piece of data may occupy a range of bytes.  Consider the following code snippet:

```c
char letter = 'p';    // chars are 1 byte long
int days = 365;       // ints are 4 bytes long
double amt = 90000.75;    // doubles are 8 bytes long
```

Let's take a look at a snapshot of what my memory might look like as it runs the above code\
 <img border="1" width="450px" src="figures/proj2-ex1.png"/>

There are several things worth noting:
1. There's no guarantee that the variables are grouped together like this in memory.
2. A *word* (4 contiguous bytes in this figure) is what we call a unit of data transfer between the memory and CPU. Although the figure only shows the starting addresses for each word, it should be noted that each byte is also addressable.
3. *Word Alignment:* There are 3 wasted bytes that follow the `'p'` character. Sure, we *could* use those bytes to store 3 out 4 bytes of `days`, but now `days` would span across two words. This is not ideal, because it would require 2 transfers just to read/write the `days` variable. To avoid this, your system prefers to align data on the order of words.
4. Yes, it would require this system to make 2 transfers to read/write `amt` since it spans 2 words -- a reason why earlier systems preferred avoiding `double`s if you didn't need its range and precision. This is why `float` types exist -- they are only 1 word wide!


**Important C Operator: `sizeof()`**
Notice from the figure above that that an `int` takes up four contiguous bytes, a `char` requires just one byte, and a `double` requires eight. The specific space requirements for each data type actually vary across architectures, so how did I know these storage requirements apply to my machine? C provides an important operator `sizeof()` for this purpose. It inputs the name of a variable, a data type, or an expression, and returns the size in bytes that it occupies in memory.

<!-- 
Let's see what it does.

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    char letter = 'p';
    int days = 365;
    double amt = 90000.75;
    double nums[10];

    printf("\n*** sizes of data types ***\n");
    printf("size of char: %lu bytes\n", sizeof(char));
    printf("size of short: %lu bytes\n", sizeof(short));
    printf("size of int: %lu bytes\n", sizeof(int));
    printf("size of long: %lu bytes\n", sizeof(long));
    printf("size of float: %lu bytes\n", sizeof(float));
    printf("size of double: %lu bytes\n", sizeof(double));
    printf("size of long double: %lu bytes\n", sizeof(long double));

    printf("\n*** sizes of vars ***\n");
    printf("size of letter: %lu bytes\n", sizeof(letter));
    printf("size of days: %lu bytes\n", sizeof(days));
    printf("size of amt: %lu bytes\n", sizeof(amt));
    printf("size of nums array: %lu\n", sizeof(nums));

    printf("\n*** sizes of constants and expressions ***\n");
    printf("size of 50: %lu bytes\n", sizeof(50));
    printf("size of '#': %lu bytes\n", sizeof('#'));
    printf("size of 54.999: %lu bytes\n", sizeof(54.999));
    printf("size of hello: %lu bytes\n", sizeof("hello"));
    printf("size of 3/2: %lu bytes\n", sizeof(3/2));
    printf("size of 0.5 * 400 / 2: %lu bytes\n", sizeof(0.5 * 400 / 2));

    return 0;
}
```

When I compile and run it, I get the following output.

```
*** sizes of data types ***
size of char: 1 bytes
size of short: 2 bytes
size of int: 4 bytes
size of long: 8 bytes
size of float: 4 bytes
size of double: 8 bytes
size of long double: 16 bytes

*** sizes of vars ***
size of letter: 1 bytes
size of days: 4 bytes
size of amt: 8 bytes
size of nums array: 80

*** sizes of constants and expressions ***
size of 50: 4 bytes
size of '#': 4 bytes
size of 54.999: 8 bytes
size of hello: 6 bytes
size of 3/2: 4 bytes
size of 0.5 * 400 / 2: 8 bytes
```

1. The unsigned integer that is returned by `sizeof()` is the number of bytes required to store that data. A couple other things worth pointing out about the code:



   - **Lines 10-17**: We're now introduced to a few more data types (`short`, `long`, `long double`), which are all variants of the four original primitives. 

   - **Line 23:** shows how `sizeof()` can be used to determine the size of the array `nums` in bytes: 80, or `(10 * sizeof(double))`, bytes.

     ```c
     printf("size of nums array: %lu\n", sizeof(nums));
     ```


   - **Line 28:** shows that a floating-point literal is interpreted as a `double`, not a `float`. (This is also true in Java.)

     ```c
     printf("size of 54.999: %lu bytes\n", sizeof(54.999));
     > 80
     ```

   - **Line 29**: the string literal `"hello"` occupies 6 bytes (not 5!) Why do you think this is?

     ```c
     printf("size of hello: %lu bytes\n", sizeof("hello"));
     > 6
     ```

   - **Line 30**: holds the result of an integer expression, which returns an `int`

     ```c
     printf("size of 3/2: %lu bytes\n", sizeof(3/2));
     > 4
     ```

   - **Line 31**: holds the result of a mixed arithmetic expression, which returns a `double`

     ```c
     printf("size of 0.5 * 400 / 2: %lu bytes\n", sizeof(0.5 * 400 / 2));
     > 8
     ```

2. Remember the `sizeof()` operator for later and for the future lab tutorial. `sizeof()` is one of the important built-in operators in C.

3. One of the benefits of a typed language like C and Java should be somewhat apparent now. When a programmer declares a variable's type, the executable files knows *exactly* how many contiguous bytes to read and write memory.

- **Practice Questions**

  - Although a  single`char` requires just one byte of storage, most CPUs will insist on wasting, or "padding" the remaining 3 bytes (see figure above). Why do you think CPUs prefer this, instead of, say, having `amt` start from address `1117` to save you space? *(Ans: It's all about word-alignment. Recall that a unit of transfer between memory and CPU is a word. If we didn't pad the remaining unused bits of the word, then the start of the next data will begin in the same word, and must span across two words.)*

  - What is the point of an `unsigned integer`, and when would it be appropriate to declare an unsigned variable? Does it take up more space for an integer to be signed vs. unsigned? Does Java support unsigned integers? *(Ans: Recall from your Architecture course that the most-significant bit, called the sign-bit, determines the +/- sign of that number. But the sign-bit wastes a bit! So a regular `int` can only cover the range $$[-2^{31}, 2^{31}-1]$$), and an `unsigned int` can cover $$[0, 2^{32}-1]$$, recalling that an `int` is 32 bits. If you know that a value cannot be negative (such as salary), it is appropriate to use unsigned ints. Java does not support unsigned ints.*

  - If a `struct X` element was declared to contain a `char`, a `long`, and an array of 100 `doubles`, what is the size of each instance of `struct X`? *(Essentially, each instance of `struct X` would require 1 + 8 + 100 * 8 = 809 bytes, but it will actually take up 812 bytes for preserving word alignment)* 
-->

##### Part 2: Understanding Addressing and Pointers

Every piece of data in your program, whether it's a  variable or a literal (like `3.14`), is stored in two pieces: its content and its address. It is possible, for programmers to ask the OS for the addresses of your data, but we can't tell it *where* to place them. This section focuses on the support for working with a variable's location in C. In particular, we will focus on three syntax items: the **address-of** operator, the **pointer-declaration** operator, and the **de-referencing** operators.

1. Let's now consider the code below. Read through it before moving on.

   ```c
   char letter = 'p';
   int days = 365;
   double amt = 90000.75;

   int *ptr;       //declare pointer to an int
   ptr = &days;    //point ptr at days
   printf("There are %d days\n", days);
   printf("There are %d days\n", *ptr);

   (*ptr)--;   //decrement days by 1
   printf("There are now %d days\n", days);
   printf("There are now %d days\n", *ptr);

   //print addresses
   printf("Location of days: %p\n", &days);
   printf("Location of ptr: %p\n", &ptr);
   printf("Value of ptr: %p\n", ptr);
   ```

2. In this simplified example, we'll assume that the operating system places `days` in bytes **1112** to **1115**, `letter` in byte **1116**, and `amt` in bytes **1120** to **1127**.

3. Here is an example output when this program is executed.

   ```
   There are 365 days
   There are 365 days
   There are now 364 days
   There are now 364 days
   Location of days: 0x458
   Location of ptr: 0x8A2C
   Value of ptr: 0x458
   ```

4. Let's now go back and explain the source code.

   - On **Line 5**, we see a new kind of variable-declaration syntax:

     ```c
     int *ptr;       //declare pointer to an int
     ```

     This declares a new variable named `ptr`, and unlike anything we've seen before, it holds a memory address, which references an `int` value. In other words, `ptr` is a pointer to an integer. Of course, `ptr` is itself a variable that requires storage, and our figure shows that `ptr` itself is located in byte addresses `35372` to `35375`.

   - On **Line 6**:

     ```c
     ptr = &days;    //point ptr at the address of days
     ```

     The operator `&var` returns the address of `var`. Even though `day` occupies four bytes because it is an `int`, only the address of its first byte (**1112**) is returned. Thus, `ptr = &days` will assign **1112** to `ptr`. That's how pointers (called "references" in Java) work! They're just variables that store addresses to data.

   - **Line 8** introduces an important operation, called **dereferencing**.

     ```c
     printf("There are %d days\n", *ptr); // *ptr is used to chase the pointer to the content!
     ```

     Dereferencing is used when we're interested in uncovering the _content_ that's referenced by `ptr`. If we simply output the value of `ptr`, we'd still get **1112**, which is not what we want in this case. Therefore, when the objective is to "follow" the pointer to its destination, we use the  dereferencing operator `*var`, where `var` is a pointer variable. **(This irks me a bit, because the * operator now has 3 interpretations in C: multiply,  declaration of a pointer variable, and pointer dereference. Expect this to lead to headaches down the line.)**

   - On **Line 10**:

     ```c
     (*ptr)--;   //decrement the content of 'days' by 1
     ```

     Okay this is a strange one. `ptr` is first de-referenced to return the content `365`. The de-referenced content is then decremented to `364`.

   - On **Lines 15-17**: shows that we can use the output specifier, `%p` to print an address (in hexadecimal).

     ```c
     printf("Location of days: %p\n", &days);   // 0x458
     printf("Location of ptr: %p\n", &ptr);     // 0x8A2C
     printf("Value of ptr: %p\n", ptr);         // 0x458
     ```

     The addresses of `days` (0x458 == 1112) and `ptr` (0x8A2C == 35372) are first printed. This is followed by printing the contents of `ptr`, which unsurprisingly, stores the address of `days`.

- *Important:* In the examples above, we demonstrated that the `&` address-of operator returns only the address of the *first byte* of the associated variable (just like in our earlier figure). For instance, `&days` returns simply `0x458`, even though `days` occupies the next three bytes as well. When we de-reference `*ptr` on **Line 8** and **Line 12**, the system was *intelligent* enough to know that the next three bytes are part of `days`'s value. How does the system know **exactly three** more bytes (and not zero, or one, or seven, or a hundred) trailed first byte of `days`.
  -  **Answer: Because you told the system how big it was!** It's why we declare data types in the first place. When you declared `days` as an `int`, the C compiler knows it needs to reserve 4 bytes.

- **Exercises (ungraded)**

  - Suppose we know that a pointer to an int (`int*`) occupies 4 bytes on my machine by calling `sizeof(int*)`. What would the size be for a pointer to a `char`, or a pointer to a `double`, or a pointer to some `struct` on my machine? **(Ans: 4 bytes. Pointers are nothing more than addresses, no matter what kind of data you're pointing to. Addresses are fixed length.)**

  - You can also create a pointer to a `void` data type, which seems odd at first. Do some searching on the web, and figure out what a `void*` pointer means, and why it's useful. (Hint: Think generics in Java).

##### Part 3: Pointer Operators: &, *
Let's put everything together.

1. Address-Of Operator: Given a variable var, `&var` returns the address of var's location in memory.

2. A pointer variable stores the address of some data. This data can be a variable, an array, or even another pointer. To declare a pointer, you use the following syntax:

   ```c
   data-type *ptr;          // Pointer to some data that's described by the given data type.
   ```

   When assigning a pointer `q` to another pointer `p`, it causes them both to point to the same data.

   ```c
   double *a = NULL, *b = NULL;
   double c = 10;
   b = &c; // point b at c
   a = b;  // point a at c (why don't I need to use &b here?)
   ```

   - Memory contents after the declaration:\
     <img border="1" width="250px" src="figures/proj2-ptrAssign1.png" />

   - Memory contents after the assignment statements on Lines 3, 4:\
     <img border="1" width="250px" src="figures/proj2-ptrAssign2.png" />

   - You must first `#include <stdlib.h>` to get access to the `NULL` constant.

3. The De-reference Operator: Given an already-declared pointer `ptr`, we use `*ptr` to access the value at the location referenced by `ptr`. As I lamented earlier, I wish we chose a different syntax for dereferencing, because `*ptr` already has a different meaning!
   ```c
   *b = 15; // de-reference b to get to c's content! c is now 15
   *a += 5; // de-reference a to get to c's content! c is now 20
   ```

- Memory contents after  `*b = 15`.\
  <img border="1" width="250px" src="figures/proj2-ptrAssign3.png" />

- Memory contents after `*a += 5`.\
  <img border="1" width="250px" src="figures/proj2-ptrAssign4.png" />

- **Practice Questions**
  
  - What happens to your program when you try to de-reference a pointer to `NULL`? *(Ans:  In Java, you'd get the NullPointerException, but there are no such things as Exceptions in C... This really is something you should try out.)*


##### Part 4: Pointers as Input Parameters
Remember how I mentioned that, for efficiency, you can pass an address/pointer into a function instead of passing the entire building? Consider the following function that modifies a large `struct` without using pointers. 
```c
typedef struct employee_t {
  char ssn[11];
  char name[100];
  int salary;
  // more members omitted
  // ...
} employee_t;

employee_t increaseSalary(employee_t emp) {
  emp.salary *= 1.03;
  return emp;
}

void main() {
  employee_t david;
  strcpy(david.ssn, "123");
  strcpy(david.ssn, "David C");
  david.salary = 20000;
  david = increaseSalary(david); // yikes
}
```

This code runs, but it's really cumbersome. To call `increaseSalary(david)`, C needs to package up all those values in the struct and pass the whole thing as a value.  Because any changes done in `increaseSalary(david)` are local to it, they'd be lost if you didn't return the entire struct back to the caller! *Look, we're moving the entire building ... twice!*

Intead, let's just pass the address of the employee to the function. The function can follow the address to make the salary updates. This saves the C runtime system from making a clone of the employee and passing it around!

```c
typedef struct employee_t {
  char ssn[11];
  char name[100];
  int salary;
  // more members omitted
  // ...
} employee_t;

/** Now inputs a pointer to an employee! */
void increaseSalary(employee_t *emp) {
  emp->salary *= 1.03;  // What's this struct->member operator???? 
}

void main() {
  employee_t david;
  strcpy(david.ssn, "123");
  strcpy(david.ssn, "David C");
  david.salary = 20000;
  increaseSalary(&david); // done in place!
}
```
In the code above, notice:
1. Main simply sends along an employee's address (using the `&` operator), not their entire content!
2. If `increaseSalary()` knows exactly where to go to reach the affected employee, then any changes to it are done directly! No need to return the employee anymore. (That's what we remember doing in Java!)
3. **Important:** When `p` is a pointer to a `struct`, you can de-refernce one of `p`'s members using either:
   - `(*p).member = expression` -- this de-references `p` first, then applies the usual dot notation to access its member.
   - Or a nice shortcut is usually done in practice: `p->member = expression`



<!-- 

1. Consider the following function used to swap the values of two integer variables:

   ```c
   void swap(int *x, int *y) {
     int tmp = *x;  // dereference x and store value in tmp
     *x = *y;
     *y = tmp;      // you don't need to deference `tmp` (why)?
   }

   // later on ...

   int a = 10, b = 20;
   swap(&a, &b);
   printf("%d\n", a); // 20
   printf("%d\n", b); // 10
   ```

   How would you call this function? The method inputs two pointer parameters. Therefore, you have to pass the addresses of (using `&`) the variables you want to swap. Trace execution of calling `swap()` by drawing out the memory contents like you saw me do in earlier examples.
   
2. This version of swap doesn't work.  Can you see why?

   ```c
   void swap2(int *x, int *y) {
       int *tmp = x;
       x = y;
       y = tmp;
   }

   //(code omitted)
   //...
   int a = 4, b = 3;
   swap2(&a, &b); //swap?
   ```

3. Consider a final version of swap that accepts two variables (not pointers) as input. Will this method work? Trace its execution.

   ```c
   void swap3(int x, int y) {
       int *x_ptr = &x;
       int *y_ptr = &y;
       int tmp = *x_ptr;
       *x_ptr = *y_ptr;
       *y_ptr = tmp;
   }

   //(code omitted)
   //...
   int a = 4, b = 3;
   swap3(a,b); //swap?
   ``` -->

##### Part 5:  "Output" Parameters
Have you ever wished that a function/method could return more than one thing? To do this Java, you always had to create a new class that stored multiple values and return an object of that class, or you returned an array of values. Sure, you can also do any of the above in C, but pointers give us another way to emulate "returning" multiple values (without actually calling `return` to do it).

 **"Output Parameters"**: An output parameter refers to a pointer that is input into a function, and the function modifies its contents before exiting. After the function call, one just needs to dereference the pointer to obtain the updated value(s).

   - You've also seen this in action already when you used `scanf()` to accept user input. For example, when `scanf("%d", &var)` is used, we input the address of `var` (i.e., a pointer), and we expect the contents of `var` to have changed afterwards.

   - I strongly recommend that you clearly name and comment when a parameter is an output parameter. For instance:

     ```c
     void sum(int inX, int inY, int* outSum) {
       *outSum = inX + inY;
     }
     ```

   - In practice you often see the above function written out like this for clarity. Yeah it's ugly, but it makes clear to the reader that this function will put something in the location given to `*sum`.

     ```c
     void sum(
       int x,    /* IN */
       int y,    /* IN */
       int *sum  /* OUT */) {
       *sum = x + y;
     }
     ```

  - **Do this output parameter exercise:** Write a function `void compareAndAssign(int n, int m, int *larger, int *smaller)` that puts the larger of `n` and `m` in `larger` and the smaller value in `smaller`. How would you call this function? 

<!--

   - Here's another example:

     ```c
     #include <stdio.h>

     typedef struct Student {
      float gpa;
      char name[25];
     } Student;

     /**
     * Clears a GPA to 0
     * @param gpaOut (OUT) A pointer to the GPA to be cleared
     */
     void clearGPA(float *gpaOut) {
       //de-reference pointer, clear the value
       *gpaOut = 0.0;
     }

     int main(int argc, char *argv[]) {
       Student stu;

       printf("Enter a name: ");
       scanf("%s", &stu.name);  //value expected in stu.name
       printf("Enter a GPA: ");
       scanf("%f", &stu.gpa);

       printf("Name: %s, GPA: %.2f\n", stu.name, stu.gpa);
       clearGPA(&stu.gpa);  //stu.gpa gets cleared
       printf("Name: %s, GPA: %.2f\n", stu.name, stu.gpa);

       return 0;
     }
     ``` 
     ```
     Enter a name: David
     Enter a GPA: 4.0
     Name: David, GPA: 4.00
     Name: David, GPA: 0.00
     ```
-->



##### Part 6: Connection to Arrays  (Pointer Arithmetic)
In this section, we'll explore the relationship between pointers and arrays.
    
1.  Study the following source file, then compile and run it.

    ```c
    #include <stdio.h>

    #define BUFFERSIZE 4

    int main(int argc, char* argv[])
    {
        int arr[BUFFERSIZE] = {9,8,7,6};
        int i;

        printf("*** where is arr[0] stored? ***\n");
        printf("arr[0] location: %p\n", &arr[0]);

        printf("\n*** where is arr stored? ***\n");
        printf("arr location: %p\n", arr);

        printf("\n*** print out contents using pointer arithmetic ***\n");
        for (i = 0; i < BUFFERSIZE; i++)
            printf("%d ", *(arr+i));

        printf("\n\n*** print out contents using familiar subscript syntax ***\n");
        for (i = 0; i < BUFFERSIZE; i++)
            printf("%d ", arr[i]);

        return 0;
    }
    ```

2.  Arrays represent a contiguous sequence of elements in memory. It is therefore not surprising to find `arr` being represented as in the figure below, with each `int` element occupying 4 bytes. When compiled and executed, this program outputs something akin to the following:

    <img border="1" width="250px" src="figures/proj2-ex3.png" />

    ```
    *** where is arr[0] stored? ***
    arr[0] location: 0x4318

    *** where is arr stored? ***
    arr location: 0x4318

    *** print out contents using pointer arithmetic ***
    9 8 7 6

    *** print out contents using familiar subscript syntax ***
    9 8 7 6
    ```

3.  Looking at the source code,

    - **Lines 11 and 14**: Suppose we want to find the address of the 0th
      element in `arr`. We can simply apply the `&` operator on element `arr[0]` to get its address:

      ```c
      printf("arr[0] location: %p\n", &arr[0]);
      ```

      The code on **Line 14**, however, may be slightly unexpected, and it's equivalent! There's no address-of operator (that's not a typo!)

      ```c
      printf("arr location: %p\n", arr);
      ```

      It would appear that an array's variable name is **already** a pointer to the location of its 0th element! By the way, `0x4318` is hexadecimal for `17176` (for the figure below).

    - **Line 16-18**: Knowing this, let's try something else. Because  `arr` is just a pointer, can we also dereference it to access the array elements? Yes!!

      - `*(arr+0)`, or simply, `*arr` returns 9

      **Pointer Arithmetic** Exciting! How would we access the array element at index 1? The runtime is smart enough to know that the next element is 4 bytes away because the array was declared to store `int`s. So adding 1 to the pointer will automatically skip the next 3 bytes and move the pointer to the next item in the array!

      - `*(arr+1)` returns 8
      - `*(arr+2)` returns 7
      - `*(arr+3)` returns 6

    - **Line 20-22 (Important!)** Finally, the array indexing syntax `[i]` we're all familiar with, is merely a convenience for programmers: Indeed, `arr[i]` is _actually_ just a shorthand for `*(arr+i)`

      - (Full circle now -- Zero-based Addressing): This may have only come up briefly in a previous course, but now we can appreciate why array indices are **0-based** in just about every language, and it's due to pointer arithmetic! If we store the first item in location `[1]`, then the C compiler would need to subtract 1 when performing each array index lookup. That's just an unnecessary overhead!

4.  **Arrays are "passed by reference":** Now that we know an array variable is just the address of its 0th element, take a look at the following functions that manipulate the array. Each of the following functions have the same effect (initializes all elements to -1)! Make sure you read through each and understand why.

    ```c
    void initArray(int *A, const int SIZE) {
      int i;
      for (i = 0; i < SIZE; i++) {
          A[i] = -1;
      }
    }
    ```

    By the way, the following code also works:
    ```c
    void initArray(int A[], const int SIZE) {
      int i;
      for (i = 0; i < SIZE; i++) {
          A[i] = -1;
      }
    }
    ```

    **Important side note:** Because arrays are passed as pointers, you can now appreciate why modifications to arrays persist after the function terminates (this is also true in Java!).


##### Important Summary: Why Do We Need Pointers?
Let's pause here and ask why pointers are needed at all?  There are several reasons to use pointers:

- **Pass by Reference**. Suppose you want a function to make changes to a `struct`, array, or any other variable that's input into it. Without pointers, the input would be "passed to the function by value," so the function gets a local copy of the input *which can be huge!* Any changes you make to the local copy are lost when the function exits, so you'd have to return it to the caller. *But that's a lot of data transfer and space usage!* (Imagine wanting to sort a large array and your functions have to copy and return all elements in the array each time it's called!) Instead, it's far more efficient to pass the argument "by reference (by its address)" and have the changes be made directly, without making a separate, local copy.

- **For returning structs from functions.** For the same reasons outlined above, consider a function that creates and returns a complex structure or array. It is far more efficient to return a pointer to the structure rather than the entire structure itself!


- **For "returning" multiple values** Sometimes, you might want a function to return mutiple values. For instance, say you wrote a function that can find the min and max of an array. In C (and most languages), you are limited to one return value. However, if you use output parameters (which are just pointers to variables), you can just store the results in there directly. You're not actually returning anything, *per se*, but the net effect is that those variables will be populated with the correct results after your function call.

- **For memory management at runtime.** Last, but not least, pointers are  necessary when you need to ask the OS for an arbitrary chunk of memory during runtime. Say you want to create a new node in a linked list. Each node that's created at runtime requires that you request space to store the data for that node. The OS, for reasons just mentioned, returns a pointer to the memory storing the node, rather than returning the entire chunk of data pertaining to the node itself. We tackle this point (dynamic memory allocation) in the next Lab.


<!-- 5.  Here's another example with char arrays (strings). Take a look at the code below, where we define a function `strToUpper(char *s)`:

    ```c
    #include <stdio.h>

    /**
    * Converts given string to upper case
    * @param s A pointer to a string
    */
    void strToUpper(char *s) {
        while (*s) {
            if (*s >= 'a' && *s <= 'z') {
                *s -= 32;   //convert character to to upper case (offset by -32 in ASCII)
            }
            s++;    //move to next character
        }
    }

    int main(int argc, char *argv[]) {
        char univ[] = "puget sound";
        strToUpper(univ);
        printf("%s\n", univ);
        return 0;
    }
    ```

    - **Line 7**: the input parameter `char *s` declares a pointer to a `char`, which we know can _also_ be interpreted as the 0th element in an array of chars. Strings are always input into functions with a type of `char *`.

    - **Line 9:** checks the dereferenced value of pointer `s` to see if we've reached the end of the string. This syntax looks strange, so let's unpack it.
      - Recall that `*s` is an attempt to dereference the pointer `s`.
      - `s` is initially pointing to the 0th character in the string. Once dereferenced, it will return the character at that location, which generally has a non-zero value (recall that any non-zero value is interpreted to be `true`).
      - Remember that all strings must end with the null character `'\0'`, which has an integer value of `0` (implying boolean `false`).
      - Putting it all together: the loop will run for each character in the string, until the null character is reached.

    - **Line 11-12:** checks to see if the character currently being pointed to by s is a lower case letter, and if it is, subtract by 32, which is the offset from its upper-case counterpart.

    - **Line 13:** this will move to pointer to the next element in sequence in memory. Because `s` points to a `char`, we know from pointer arithmetic that the `++` operator moves the pointer (since `sizeof(char) == 1`).

    - **Line 19:** The main function creates a string and we assume it is placed in bytes 272372 to 272383.

    - **Line 20 (and Line 7):** calls `strToUpper(univ)`, which implicitly creates a pointer variable `s` that refers to the first character in `univ`. The memory contents at this point is shown below:\
      <img border="1" width="350px" src="figures/proj2-str2upper1.png" />\
      Right before `strToUpper()` returns, the memory contents are shown below:\
      <img border="1" width="350px" src="figures/proj2-str2upper2.png" />\
      Every time `s++` is called (Line 13), it increments the pointer to the next character in `univ`. Eventually, `s` points to `univ[11]`, allowing it to break out of the loop. -->

<!-- 
###### Do these exercises (not graded):

- The following is a well-known function. What does it do?
  ```c
  void mystery(char *s, char *t) {
     while (*s++ = *t++) { //assignment, not equivalence (i.e., not a typo)
         ;
     }
  }
  ```
- Using pointer arithmetics, implement the string function `strcat(char *s, char *t)`, which concatenates the string referred to by `t` to the end of the string referred to by `s`. -->

#### Credits

Written by David Chiu. 2022.
