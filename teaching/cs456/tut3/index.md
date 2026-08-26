## CS 475 - Operating Systems

### Lab 3: Dynamic Memory Allocation (Not Graded)

Pointers might still feel pretty mysterious, largely because we have not yet seen a compelling reason to use them. In this section, we introduce the primary motivation for pointers in C: dynamic memory allocation on the heap.


#### Related Reading

- [Dive into Systems Chapter 2.4-2.7](https://diveintosystems.org/book/C2-C_depth/dynamic_memory.html)


#### Student Outcomes

- To understand process address spaces.
- To understand the motivation for dynamic memory allocation.
- To become familiar with memory management.
- To understand the problems of memory leaks and dangling pointers.

#### Instructions

Open your VS Code and get connected to your Remote Development environment. 

  - Once you're logged in, you can open a terminal from the `Terminal` menu.

##### Part 1: Motivation

<!-- In most of the programs we write, the exact space requirements may not be known until runtime. Suppose we are writing a program that  defines the max number of employees `MAX` as a constant, and then we ask the user for the number of employees they expect to have in this particular run:

```c
#include <stdio.h>
#include "employee.h"

#define MAX 100000

int getNumEmployees() {
    int num;
    do {
        printf("Number of employees you need to store: ");
        scanf("%d", &num);
    } while (num > MAX || num <= 0);
    return num;
}

int main(int argc, char *argv[]) {
    int i;
    Employee my_employees[MAX];             // create array that can hold up to 100,000 employees
    int num_employees = getNumEmployees();  // how many does the user *really* need?

    // fill employee info
    for (i = 0; i < num_employees; i++) {
        //(code omitted)
    }
}
```

**The code above is undesirable for several reasons.** First, `MAX` is entirely arbitrary and defined at the programmer's discretion. Secondly, for the runs that do not require anywhere close to
`MAX` employees, this program ends up wasting quite a bit of space.

Okay. You might think the above example is contrived. After all, why didn't we ask the user for the number of employees first, and then create the array using that size.  -->

In most of the programs we write, the exact space requirements won't be known until you run it. Consider the following code that asks the user how many employees they need to store, and then creates an array to store that many employees. This approach works in Java **but is unsafe in C!**

```c
#include <stdio.h>
#include "employee.h"

/** prompts and returns an employee count */
int getNumEmployees() {
    int num;
    do {
        printf("Number of employees you need to store: ");
        scanf("%d", &num);
    } while (num <= 0);
    return num;
}

int main(int argc, char *argv[]) {
    int num = getNumEmployees();  // ask for the employee count
    Employee my_employees[num];   // <--- this is dangerous!

}
```

If `num` was input as a *large enough* number, this code could crash the program! It's really important to understand why (Stack Overflow), so we need to have a handle on how the OS manages a process' memory during its execution.

##### Part 2: Address Spaces

When your program is in execution (it's called a **process** at that point), the OS assigns it an **address space**. Think of this space as the process' very own sandbox. It's where all its data (e.g., variables, data structures) will live, and you can rest assured that it's private and protected from other processes. The OS organizes the address space using the following scheme:

<img src="figures/proj3-memlayout.png" width="400px">

- **Code (Text) Segment** stores the binary (executable) file that's currently running. (The compiled CPU instructions of your code.) It is placed near the lowest addresses.

- **Data/BSS Segment** stores global and static variables that have been initialized with a non-zero or non-NULL value. String literals like "hello" in the code are also placed in the data segment. The BSS segment stores *uninitialized* global and static variables.

- **Heap** stores data that is requested by the process during runtime. For instance, your program decides after it's run that it needs 200 doubles, or 526 employees. (In other words, the amount is only determined at runtime.)

- **Stack and Stack Frames**  stores all of your variables (besides globals) and other data needed to track program state across function calls. When a function is called, the stack grows by pushing a new **"stack frame"**, containing the function’s parameters, its local variables, and the return address. The "return address" refers to the location of the instruction that a code must jump back to after a called-function exits. When that function returns, the entire frame is popped off the program stack, causing it to shrink and restoring the caller function’s execution context (or scope).

###### How the Program Stack Works (And What Is a Stack Overflow?)
When a process starts running, the OS loads the text and data segments with the compiled code and global variables, respectively. The heap starts empty. The OS allocates `RLIMIT_STACK` bytes for the stack segment. Here's how the stack is used:

- Starting from the `main(int argc, char *argv[])` function, its command-line arguments `int argc` and `char *argv[]` and any local variables declared in `main` are pushed onto the stack separately, which grows towards address `MAX - RLIMIT_STACK`. 

- When `main()` calls another function, a new stack frame is for *that* function is created by pushing any return address, arguments, and local variables onto the stack. When that function returns, all the values in its frame are *popped*, and control jumps back to main function's **scope**.

- **Stack Overflow**: The stack is allowed to grow and shrink so as long as it stays within the bounds imposed by `RLIMIT_STACK`, but violating this threshold is easy. Take a look at the following example, which contains an infinite recursion:

  ```c
  #include <stdio.h>

  void badrecursion(int depth) {
      printf("depth = %d\n", depth);
      badrecursion(depth + 1);
  }

  int main(int argc, char* argv[]) {
      badrecursion(1);
      return 0;
  }
  ```

- All infinite recursions _will_ eventually crash. Let's see a possible output of this program:

  ```c
  ...
  depth = 393031
  depth = 393032
  depth = 393033
  depth = 393034
  depth = 393035
  Segmentation fault (crashed)
  ```

- A **segmentation fault** occurs when the OS detects that a process has accessed memory outside its allowable (mapped) address segment (stack, heap, code, data). Each recursive call to `badrecursion(..)` consumes additional stack space by pushing new stack frames. Because none of the recursive calls ever return (since there's no base case), the program stack is never unwound. Eventually, the process exceeds its stack allocation (as constrained by the `RLIMIT_STACK` limit). When the stack grows past the threshold,  the CPU raises a memory-protection fault, which the OS captures, terminating the process.


<!-- 
- What's my machine's `RLIMIT_STACK` you ask? This value varies across systems. To find out what this value is on your machine, you can use the shell command `ulimit`. The `-a` option shows all resource limits defined by your OS. If you're only interested in the stack size, you can specify the `-s` flag.

  ```
  $ ulimit -s
  10240
  ```

- The number reported by `ulimit` is in KB ($$2^{10}$$ bytes), so my machine gives each running process a 10 MB stack. -->

##### Part 3: Revisiting the "Dangerous Code"

Now that we understand how the program stack works, we return to our risky Employee code:

- The problem can be traced to this line:

    ```c
    Employee my_employees[num];
    ```

  Because all local variables are automatically pushed on the stack, if the user entered a large enough `num`, a segmentation fault can occur at runtime if the  `Employee` array is too large. Stacks typically only have a soft limit of around 8-10 MB, so you generally do *not* want to create massive data structures on the stack by simply declaring them in your code!

- Check out the output of the following two runs:

  ```bash
  $ ./employees
  Number of employees you need to store: 2
  Enter a name: David
  Enter salary: 30000

  Enter a name: Michelle
  Enter salary: 40000

  [name=Michelle, salary=40000], [name=David, salary=30000]
  ```

  The above run succeeded since we pushed an array of 2 Employees, which fit comfortably. What if we pushed 2 million Employees? Let's do the math here. Let's say that each Employee struct has a string name (say 20 character bytes) and an integer salary (4 bytes). That's pushing 2 million * 24 bytes = ~48 MB, far exceeding the stack limits.

  ```
  $ ./employees
  Number of employees you need to store: 2000000
  Segmentation fault
  ```

- Clearly, a program that crashes depending on the the user's input is troubling, and this is why you should *never* declare unknown-sized structures on the _stack_.  We have all that sweet sweet heap space for a reason...

##### Part 4: Heap to the Rescue!
I hope this discussion has convinced you to be vigilant when creating data structures at runtime in C. Whenever you introduce a new variable, structure, or array, you should always consider whether its size or lifetime could cause the program stack to overflow!

We need a way to allocate arbitrarily sized memory away from the program stack. The **heap segment** serves this purpose. When a program needs a new array, struct, string, or similar object whose size is determined at runtime, it should allocate that storage on the heap and use a pointer to refer to it. **This is why pointers are fundamental to C programming!** 

- While more exist, there are two basic memory allocation calls you need to know. To gain access to them, we need to  `#include <stdlib.h>`.

  1. **Allocate Runtime Memory:** The `void* malloc(size_t size)` function: allocates `size` bytes on the heap, and returns a pointer to the first byte. Note that `size_t` is just an `unsigned int`. On success, it returns a `void*` pointer to the first byte of the newly allocated chunk. If allocation fails (rare), it returns `NULL`.
     ```c
     // give me an array of 50 ints on the heap
     int *ptr = malloc(sizeof(int) * 50);

     //ptr[0] is the zeroth int, ptr[1] is the first int, ...
     ```

  2. **De-allocate Memory:** The `void free(void *ptr)` function is used to reclaim the space that was previously malloc'd. It inputs a pointer to the allocated memory block.
      - **Important!** It is  crucial that you free heap-allocated memory when it's no longer useful (Unlike Java, C does not garbage collect memory automatically).
      
      - When a user fails to deallocate, it can lead to **memory leaks** in your program, which can cause your process to bloat and take up lots of space over its lifetime.

      - Have you ever suspected that an app you use suffers from memory leaks? This is a very common problem in games and other memory-intensive applications. Next time an app that you use seems to be growing in memory usage in uncontrolled ways, it's probably a memory leak that needs to be fixed.

<!--
  2.  `void* calloc(size_t num, size_t size)`: is an alternate function to  `malloc()`. It takes as input an unsigned integer `num` (number of elements) and `size` (number of bytes per element). It attempts to allocate `num * size` bytes on the heap. One difference from `malloc()` is that it will also initialize the entire allocated block to zeroes. Like `malloc()`, on success, it returns a `void*` pointer to the first byte of the newly allocated block. On failure, `NULL` is returned.

   3.  `void* realloc(void *ptr, size_t size)`: is used to change the size of an already-allocated block of memory on the heap. It takes as input a pointer to an existing block of memory on the heap, and a new `size`, which may be smaller or larger than the current allocation. On failure, `NULL` is returned. Caveat: the location of the allocated block might change, which is why a `void*` pointer to a potentially different starting address is returned. -->


- Let's see how I could fix the risky `Employee` code so that it allocates the employee array on the heap instead of on the stack.

  ```c
  int main(int argc, char *argv[]) {
      int num_employees = getNumEmployees();

      // Allocate space for an array of Employees on the heap
      Employee *my_employees = malloc(num_employees * sizeof(Employee));  // heap allocation

      if (my_employees == NULL) {
          // Allocation failed (out of memory)
          return 1;
      }

      // Fill employee information
      for (int i = 0; i < num_employees; i++) {
          // Array syntax works with heap-allocated memory too!!
          strcpy(my_employees[i].name, getName());
          my_employees[i].salary = getSalary();
      }

      // (code omitted)

      // Reclaim heap memory when done
      free(my_employees);   // Line 30
      my_employees = NULL;  // Line 31 avoid dangling pointer

      return 0;
  }
  ```

- In the code:

  - On **Line 17:** there's a lot of information on this line. Let's break it down into pieces and talk about each one separately.

      ```c
      Employee *my_employees = malloc(num_employees * sizeof(Employee));  // <--- On the heap!
      ```

    Remember the goal is to create an array on the *heap* that contains `num_employees` elements of type `Employee`. Therefore, we need to use `malloc` to request `num_employees * sizeof(Employee)` bytes on the heap.

    - For example, assume that the `Employee` structure is declared as follows:

      ```c
      typedef struct Employee {
          char name[20];
          int salary;
      } Employee;
      ```

    - Then `sizeof(Employee) == 24` because `name` is a char array of length 16 and `salary` is an 4-byte integer. So `malloc()` will  allocate a chunk of `num_employees * 24` bytes, and return a pointer to the *zeroth* Employee. 

  - **Important: We can use array syntax over the heap-allocated space!** This is what we learned in the previous tutorial. Array syntax is really pointer arithmetic!

    ```c
    //fill employee info
    for (int i = 0; i < num_employees; i++) {
        strcpy(my_employees[i].name, getName());  // assign the ith name using strcpy()
        my_employees[i].salary = getSalary(); // assign the ith salary
    }
    ```

  - On **Line 30 (freeing heap memory)**: This line reclaims the `num_employees * sizeof(Employee)` bytes back to the heap so they can be reused by future mallocs.

  - On **Line 31 (avoiding dangling pointers)**: Be careful. `free(my_employees)` does not change the value of `my_employees`, so after the call `my_employees` becomes a "dangling" pointer. Dangling pointers are bad news.
  
    It is generally good  practice to set the pointer to `NULL` right after freeing their allocated space - here's why. After freeing memory, the pointer is *still* pointing at that location. It doesn't magically point elsewhere. However, once memory has been freed, that chunk of memory can be re-used by another call to `malloc` elsewhere in your program! If you by accident de-reference or write to that pointer later, you'd have undefined behavior, usually leading to corrupted data or segfault.


##### Part 5: Dynamic Memory Allocation Examples
So we've seen how to create an array on the heap, but `malloc()` is more general than just creating arrays. It can be used to allocate _any_ amount of memory on the heap, even a single `int`, `double`, or just a `struct`. It is often the case that we'll need to `malloc` to create new structs and strings of varying size. Here are a couple oft-used examples.

###### Working with Arbitrarily-Sized Strings (Know this!)
Pay attention here, because you'll be doing this kind of work a lot in your next few assignments! Because strings are arbitrarily sized arrays, it's very common to `malloc` *just enough* space to hold strings. For instance, suppose I wanted to write a function `createEmail()` that accepts two strings `user` and `domain`, and returns the string `user@domain`.

  ```c
  #include <string.h>
  char *createEmail(char *user, char *domain) {
    // BAD DON'T DO THIS: char email[strlen(user) + strlen(domain) + 2];    <-- this is on the stack!

    // GOOD: Allocate just enough space for "user@domain\0" on the heap
    char *email = malloc(strlen(user) + strlen(domain) + 2);    
    email[0] = '\0';  // initialize as empty string (just good habit)

    strcpy(email, user); // copy user over
    strcat(email, "@"); // append @
    strcat(email, domain);  // append domain
    return email;   // Caller of this function is responsible to free()
  }
  ```

  - In this code, we dynamically allocate just enough heap memory to store the string "user@domain", where `user` and `domain` are given as input strings. The call to `malloc` allocates `strlen(user) + strlen(domain) + 2` bytes: one byte for the `'@'` character and one byte for the terminating `'\0'`. (That's sneaky!)

  - Memory returned by `malloc` is uninitialized, so we explicitly set `email[0] = '\0'` to ensure the string buffer starts as a valid empty string. While this initialization is not strictly necessary before `strcpy()`, it is essential if the first operation were a concatenation!

  - The calls to `strcpy()` and `strcat()` safely build the final string because sufficient space was allocated in advance. These functions maintain the required NULL terminator. (`sprintf()` could also have been used instead to build this string)

  - The function returns a pointer to the allocated memory containing the newly formed email address. Because the memory lives on the heap, it remains in scope even after the function returns. 
     - The caller (whomever called this `createEmail()` function) is responsible for freeing this pointer when it is no longer needed!!

**Check-In Exercise** Doing the exercise below will be fruitful, because you'll likely use it for future assignments.

  - Suppose you wrote this line of code: `printf("%s\n", createEmail("david", "pugetsound.edu"));` Why would it be wrong? How would you fix it? **(Ans: memory leak! Who frees the returned email address)**
      <!-- memory leak. You needed a pointer to it, and free it later -->

  - Write a function `char* strrepeat(char *str, unsigned int nrepeat)` to return a newly allocated string `nrepeat` copies of `str` concatenated together. For instance, `strrepeat("hi", 3)` returns a pointer to `hihihi`, and `strrepeat("hi", 0)` returns simply an empty string (that is, a char array of size 1, which contains just `\0`).


###### Allocating Structs and the Arrow Syntax (`->`)
A great strength of `malloc` lies in allowing us to create and manage dynamic data structures that are unbounded in size, like linked lists and trees. Assume we've declared the following `struct` for a Linked List node:

```c
/** Say here's a node structure for a linked list */
typedef struct Node {
    int data;
    struct Node *next;
} Node;
```

We can use `malloc` to create a `Node` on the heap as follows.

```c
// here's how to construct a Node element
Node *newNode = malloc(sizeof(Node));

// here's how to initialize the structure (note the '->' operator)
newNode->data = 0;
newNode->next = NULL;
```

Familiar with Java? That chunk of code above is precisely what Java's `new` keyword does when instantiating an object! Underneath the hood, Java's `new` keyword calls `malloc` and then initializes its fields, and returns a pointer (reference) to the new object.



#### Short Problems
1. Spot the bug:
    ```c
    Node *n;
    n->data = 10;
    n->next = NULL;
    ```

2. Consider the two declarations below:
    ```c
    Node a;
    Node *b = malloc(sizeof(Node));
    ```

    For each, Where is the memory allocated? What happens to the memory when the enclosing function returns? Which one must be explicitly freed?

3. Why is the following loop incorrect for the traversal of our linked list? What should be used instead of `curr++`, and why?

    ```c
    Node *curr = head;
    while (curr != NULL) {
        curr++;
    }
    ```

4. Write a function `createNode(int value)` that: Allocates a `Node` struct on the heap, initializes data to `value`, sets next to `NULL`. Returns a pointer to the new node. State who is responsible for freeing the memory.



###### Food for Thought: 2D structures
You will need to know these for future assignments, but it won't hurt to think about these problems early.
- How would you allocate a 2D array on the heap? Related: How about an array of strings?
- How would you free up these 2D structures?

#### Credits

Written by David Chiu. 2022. Edited 2026.
