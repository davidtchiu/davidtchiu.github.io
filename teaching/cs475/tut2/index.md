## CS 475 - Operating Systems

### Lab 2: Pointers and Addressing (Not Graded)

This is the second part of a multi-part primer on C. In this tutorial-assignment, you'll gain an appreciation for the way values and variables are stored in memory. You'll be introduced to pointers, as well as the connection between pointers and arrays.

#### Related Reading

- [Dive into Systems Chapter 2.2-2.3](https://diveintosystems.org/book/C2-C_depth/index.html)

#### Student Outcomes

- To understand how values and variables are stored in memory.
- To be familiar with pointers and references.
- To understand the connection between pointers and arrays.


#### Instructions

Open your VS Code and get connected to your Remote Development environment. If you don't know what I'm referring to, then you need to complete [Hwk 1](../hwk1.vscode).

  - Once you're logged in, you can open a terminal from the `Terminal` menu.

From your shell terminal, create a directory to store your first program. Let's call this directory `lab2_pointers`, like this:

  ```bash
  $ mkdir lab2_pointers
  $ cd lab2_pointers
  $ code types.c
  ```



##### Preamble:  Memory and Data Types
How is data stored and managed inside your machine? Think of your computer's memory as being a giant array of bytes. Each byte corresponds to a unique *address* in memory. Depending on the data's *type*, a piece of data may occupy a range of bytes.  Consider the following code snippet:

```c
char letter = 'p';    // chars are 1 byte 
int days = 365;       // ints are 4 bytes 
double amt = 90000.75;    // doubles are 8 bytes 
```

Let's take a look at a snapshot of what my memory might look like as it runs the above code\
 <img border="1" width="450px" src="figures/proj2-ex1.png"/>

There are several things worth noting:
1. There's no guarantee that the variables are grouped together like this in memory.
2. A *word* or *CPU word* (4 contiguous bytes in this figure) is the standard unit of data transfer between the memory and CPU. Although the figure only shows the starting addresses for each word, it should be noted that each byte is also addressable.
3. *Word alignment:* There are 3 wasted bytes that follow the `'p'` character. Sure, we *could* use those bytes to store 3 out 4 bytes of `days`, but then `days` would span across two words. This is not ideal, because it would require 2 transfers just to read/write to it. To avoid this, your system prefers to align data on the size of words, even if it means we have to waste space.
4. Due to the size of `amt`, it would indeed require this system to make two transfers to read/write `amt` since it spans 2 words -- a reason why earlier systems preferred avoiding `double`s if you didn't need its range and precision. (This is why `float` data types exist -- they are only 1-word wide!)


**Important C Operator: `sizeof`**
Notice from the figure above that that an `int` takes up four contiguous bytes, a `char` requires just one byte, and a `double` requires eight. The specific space requirements for each data type actually vary across architectures, so how did I know these storage requirements apply to my machine? C provides an important operator `sizeof()` for this purpose. It inputs the name of a variable, a data type, or an expression, and returns the size in bytes that it occupies in memory.


Let's see what it does. Create a new file inside your `lab2_pointers` directory, called `memsizes.c` and paste in the following:

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

Compile and run it. Recall that to compile, you can use the following terminal command:
```bash
$ gcc -Wall -g -o memsizes memsizes.c 
```

Run using:
```bash
$ ./memsizes 
```

Read through the output and make sure it all makes sense to you. It's interesting to see how much space each data type (and data literal) takes up. Remember this `sizeof()` operator for the future lab tutorials. It is one of the important built-in operators in C.

<!-- 
- **Practice Questions**

  - What is the point of an `unsigned integer`? Does it take up more space for an integer to be signed vs. unsigned? Does Java support unsigned integers? *(Ans: All data is represented using bit sequences. The leftmost bit of that sequence, called the sign-bit, determines the +/- of that number. But the sign-bit wastes a bit. so a regular `int` can only cover the range $$[-2^{31}, 2^{31}-1]$$), and an `unsigned int` can cover $$[0, 2^{32}-1]$$, recalling that an `int` is 32 bits. If you know that a value cannot be negative (such as salary), it is appropriate to use `unsigned int`s. Higher level languages like Java does not support unsigned ints.*

  - If a `struct X` element was declared to contain a `char`, a `long`, and an array of 100 `doubles`, what is the size of each instance of `struct X`? *(Essentially, each instance of `struct X` would require 1 + 8 + 100 * 8 = 809 bytes, but it will actually take up 812 bytes for preserving word alignment)*  -->


##### Part 1: Notepads, Street Addresses, and Buildings
Pointers are powerful structures in C. To get a sense of what pointers are, let's use a real-world analogy:
  - Data in this analogy are like buildings in a city.
  - A **pointer** to that data is like a building's *street address*.
  - A **pointer variable** is just a *notepad* with a *street address* written on it that you can pass to other people.

<img src="figures/ptrBuilding.png" width="300px" />\

You wouldn't ever say that a street address is itself a building, but it does tell you where to go to find it.

| Real-World Analogy                                                                                    | Explanation                                                                                                   |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| It doesn't matter how big or small a building is, every building has a street address. You just have to ask for it.       | *In C this is called the address-of operator: `&`*                                                        |
| You can write its address on a notepad, and share its with others.                  | *A "pointer" variable stores an address to a piece of data.*               |
| You can go to the building given its address: examine it, modify it. | *This is what it means to de-reference (or lookup) a pointer.*                                                          |
| You can check out the adjacent building, and the one after that, ...                    | *This is called pointer arithmetic. Once you have an address, you can visit the nearby elements effortlessly.* |

Under this scheme, consider what pointers  enable us to do:
  - You can efficiently pass massive data structures into functions. (Don't pass the whole building, pass its street address and let the function modify it from afar.)
  - You can create linked structures (linked lists, trees). A node contains a data element, and a pointer variable (notepad) holding the address of the next node.


##### Part 2: Understanding Addressing and Pointers

Every piece of data is stored in your memory in two pieces: its content and its address. We can ask the OS for the addresses of existing data, but we can't tell your OS *where* to place them. We will focus on three syntax elements:

  - Pointer Declaration: To declare a pointer variable, use `data-type *ptr;` (Creates a "notepad")
  - Address-Of: To get the address of an existing variable, use `&var`. (Gets the address of a building)
  - Pointer Assignment: `ptr1 = ptr2;` (Write another address on the notepad)
  - De-reference: To chase the pointer to its content, use `*ptr`. (Follows the address to the building)
  - Arrow (struct de-reference): `p->x` De-reference a pointer `p` to a struct, then access a field `x`.


1. Consider the code below. Read through it before moving on.

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
   printf("Address of days: %p\n", &days);
   printf("Address of ptr: %p\n", &ptr);
   printf("Value of ptr: %p\n", ptr);
   ```

2. In this simplified example, we'll assume that the operating system places `days` in bytes **1112** to **1115**, `letter` in byte **1116**, and `amt` in bytes **1120** to **1127**, shown below:

    <img border="1" width="400px" src="figures/proj2-ex2.png" />


3. Here is a possible output of this program:

   ```
   There are 365 days
   There are 365 days
   There are now 364 days
   There are now 364 days
   Address of days: 0x458   <-- Which is 1112 (in hex)
   Address of ptr: 0x8A2C   <-- Which is 35372 (in hex)
   Value of ptr: 0x458      <-- Which is 1112 (in hex)
   ```

4. Let's now go back and explain the source code.

   - On **Line 5**, we see a new kind of variable-declaration syntax:

     ```c
     int *ptr;       //declare pointer to an int 
     ```

     This declares a pointer variable (like a notepad we can write an address on) named `ptr`. It can hold a single memory address that stores an `int`. Of course, `ptr` is itself a variable that requires storage, and our figure shows that `ptr` itself is located in byte addresses `35372` to `35375`.

   - On **Line 6**:

     ```c
     ptr = &days;    //point ptr to the address of days
     ```

     The operator `&var` returns the address of the variable `var`. Even though `day` occupies four bytes because it is an `int`, only the address of its first byte (**1112**) is returned. Thus, `ptr = &days` will assign **1112** to `ptr`. 

   - **Line 8** introduces an important operation, called **De-referencing**.

     ```c
     printf("There are %d days\n", *ptr); // *ptr is used to chase the pointer to the content!
     ```

     De-referencing is used when we're interested in examining the _content_ that's referenced by `ptr` (what building is located at the given street address?).  **(This syntax honestly irks me, because the * operator now has 3 interpretations in C: multiply,  declaration of a pointer variable, and pointer dereference. Expect this to lead to headaches down the line.)**

   - On **Line 10**:

     ```c
     (*ptr)--;   //decrement the content of 'days' by 1
     ```

     Due to the parentheses, `ptr` is first de-referenced to examine the content `365`. The content is then decremented to `364`.
      - This begs the question: what would `*ptr--;` do? This syntax would attempt to decrement the pointer to the previous memory location, before examining the contents.

   - On **Lines 15-17**: shows that we can use the output format specifier, `%p` to print an address (in hexadecimal).

     ```c
     printf("Location of days: %p\n", &days);   // 0x458
     printf("Location of ptr: %p\n", &ptr);     // 0x8A2C
     printf("Value of ptr: %p\n", ptr);         // 0x458
     ```

     The addresses of `days` (0x458 == 1112) and `ptr` (0x8A2C == 35372) are first printed. This is followed by printing the contents of `ptr`, which unsurprisingly, stores the address of `days`, (0x458 == 1112).

<!-- 5. *Important:* In the examples above, we demonstrated that the `&` address-of operator returns only the address of the *first byte* of the associated variable. For instance, `&days` returns simply `0x458`, even though `days` occupies the next three bytes as well. When we de-reference `*ptr` on **Line 8** and **Line 12**, the system was smart enough to know that the next three bytes are part of `days`'s value. How does the system know **exactly three** more bytes (and not zero, or one, or seven, or a hundred) trailed first byte of `days`?
    -  **Answer: This is why we declare types!** When you declared `days` to be an `int`, the C compiler knows it needs to reserve 4 bytes, and any references to it always requires 4 bytes to be read.

6. **Exercises (ungraded)**

    - Suppose we know that a pointer to an int (`int*`) occupies 4 bytes on my machine. We can verify this by calling `sizeof(int*)`. What would the size be for a pointer to a `char`, or a pointer to a `double`, or a pointer to some `struct` on my machine? **(Ans: All 4 bytes. Pointers are nothing more than addresses, so it doesn't matter what kind of data you're pointing to.)**

    - You can also create a pointer to a `void` type, which seems odd. Do some searching on the web, and figure out what a `void*` pointer means, and why it's useful. Declare a `void*` pointer. Can you point it at an int? A char? A struct? (Hint: Think generics in Java). -->

<!-- 
##### Part 3: Pointer Operators: `&` and `*`
Let's put everything together.

1. A pointer variable stores the address of some data. This data can be a variable, an array, or even another pointer. 

2. When assigning a pointer `q` to another pointer `p`, it causes them both to point to the same data. This is called *aliasing*, and it should not be a new concept to you as Java programmers.

   ```c
   double *a = NULL, *b = NULL;
   double c = 10;
   b = &c; // point b at c
   a = b;  // point a at c (why don't I use &b here?)
   ```

   - Memory contents after the declaration:\
     <img border="1" width="250px" src="figures/proj2-ptrAssign1.png" />

   - Memory contents after the assignment statements on Lines 3, 4:\
     <img border="1" width="250px" src="figures/proj2-ptrAssign2.png" />

   - You must first `#include <stdlib.h>` to get access to the `NULL` constant.

3. Consider the following segment:
   ```c
   *b = 15; // de-reference b to get to c's content! c is now 15
   *a += 5; // de-reference a to get to c's content! c is now 20
   ```

    - Memory contents after  `*b = 15`.\
      <img border="1" width="250px" src="figures/proj2-ptrAssign3.png" />

    - Memory contents after `*a += 5`.\
      <img border="1" width="250px" src="figures/proj2-ptrAssign4.png" />

  
4. What happens if you try to de-reference a pointer referencing `NULL`? *(Ans:  In Java, you'd get the NullPointerException, but there are no such things as Exceptions in C... This really is something you should try out.)* -->

##### Part 3: Pass by Reference (Pointers as Input Arguments)
Remember how I mentioned that for efficiency, you should pass an address into a function instead of passing the entire building? Consider the following function that modifies a large `struct` without using pointers. 
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
  strcpy(david.ssn, "123");   // recall: you can't use simply assign strings. Use strcpy() or sprintf() instead.
  strcpy(david.name, "David C");
  david.salary = 20000;
  david = increaseSalary(david); // yikes
}
```

This code runs, but it's really cumbersome. To call `increaseSalary(david)`, C needs to package up all those values in the `struct` and pass the whole thing as input.  Because any changes done in `increaseSalary(david)` are local to it, they'd be lost if you didn't return the entire struct back to the caller! *We'd be moving the entire building ... twice!*

Intead, let's just pass the address of the employee `struct`. The function can deference the address to make the salary updates directly. This saves the C runtime system from making a clone of the employee and moving it around!

```c
/** Rewritten to input a pointer to an employee */
void increaseSalary(employee_t *emp) {
  // Arrow operator dereferences emp, then accesses salary
  emp->salary *= 1.03;
}

void main() {
  ...
  // Done without passing the whole struct to `increaseSalary()`, just the address!
  increaseSalary(&david);
}
```
In the code above, notice:
1. The main function simply passes along an employee's memory address (using the `&` operator).
2. If `increaseSalary(&david)` knows where to go to reach the affected employee, and any changes to it are done directly to the struct! No need to return the employee as a whole anymore.
3. **Important:** When `p` is a pointer to a `struct`, you can de-refernce one of `p`'s members using either:
   - `(*p).member = expression;` -- this de-references `p` first, then applies the usual dot notation to access its member.
   - Or a nice shortcut is usually done in practice: `p->member = expression;`



##### Part 4: Pointers as "Output Parameters"
Have you ever wished that a function/method could return more than one thing? To do this Java, you always had to write a new class that stored multiple values, or you returned an array of values. Sure, you can also do any of the above in C, but pointers give us another way to emulate "returning" multiple values.

An output parameter refers to a pointer that is input into a function, and the function modifies its contents directly before exiting. 

  - You've actually already seen this in action when you used `scanf()` to accept user input. When you use `scanf()`, you first declared a variable `var` to hold the input, then called `scanf("%d", &var)` to change the contents of `var`.

  - I strongly recommend that you clearly name and comment when a parameter is an output parameter. For instance:

    ```c
    void sum(int inX, int inY, int* outSum) {
      *outSum = inX + inY;
    }

    int main() {
      int a = 10;
      int b = 20;
      int mySum = 0;
      sum(a, b, &mySum);  // result stored in mySum
      printf("%d\n", mySum);
    }
    ```

  - Write a method called `swap` that can be used to swap the values of two integer variables. Here's how it can be used.

   ```c
   void main() {
    int a = 10, b = 20;
    swap(&a, &b);
    printf("%d\n", a); // 20
    printf("%d\n", b); // 10
   }
   ```
   

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



##### Part 5: Connection to Arrays and Strings (Pointer Arithmetic)
In this section, we'll explore the relationship between pointers and arrays.
    
1.  Study the following source file, then compile and run it.

    ```c
    #include <stdio.h>

    #define BUFFERSIZE 4

    int main(int argc, char* argv[])
    {
        int arr[BUFFERSIZE] = {9,8,7,6};

        printf("*** where is arr[0] stored? ***\n");
        printf("arr[0] location: %p\n", &arr[0]);

        printf("\n*** where is arr stored? ***\n");
        printf("arr location: %p\n", arr);

        printf("\n*** print out contents using pointer arithmetic ***\n");
        for (int i = 0; i < BUFFERSIZE; i++)
            printf("%d ", *(arr+i));

        printf("\n\n*** print out contents using familiar subscript syntax ***\n");
        for (int i = 0; i < BUFFERSIZE; i++)
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
      for (int i = 0; i < SIZE; i++) {
          A[i] = -1;
      }
    }
    ```

    By the way, the following code also works:
    ```c
    void initArray(int A[], const int SIZE) {
      for (int i = 0; i < SIZE; i++) {
          A[i] = -1;
      }
    }
    ```

    **Important side note:** Because arrays are passed as pointers, you can now appreciate why modifications to arrays persist after the function terminates (this is also true in Java!).


###### Do these exercises (not graded):

- The following is a well-known string function. What does it do?
    ```c
    /*
    * This method accepts two char pointers (char arrays, or strings)
    */
    void mystery(char *s, char *t) {
      // not a typo below
      while (*s++ = *t++)
        ;
    }
    ```
- Using pointer arithmetics, implement the string function `strcat(char *s, char *t)`, which concatenates the string referred to by `t` to the end of the string referred to by `s`. (Hint, traverse `s` using pointer arithmetic until you hit the null terminating character.)


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

#### Credits

Written by David Chiu. 2022. Edited 2026.
