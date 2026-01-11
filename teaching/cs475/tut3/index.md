## CS 475 - Operating Systems

### Lab 3: Dynamic Memory Allocation (Not Graded)

Pointers are still a bit mysterious, because we still haven't seen a real need for them yet. Sure, it was cool to know that they are intrinsically connected to arrays, but still, with exception to `swap()`, all the code examples shown in the previous tutorial can be done easily without pointers. In this section, we introduce the prevailing motivation for pointers: heap memory allocation.

#### Related Reading

- [Dive into Systems Chapter 2.4-2.7](https://diveintosystems.org/book/C2-C_depth/dynamic_memory.html)


#### Student Outcomes

- To understand the motivation for dynamic memory allocation.
- To become familiar with memory management functions:`malloc()`, `realloc()`, and `free()`.
- To learn how to debug heap memory access using valgrind.
- To make system calls.

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

In most of the programs we write, the exact space requirements may not be known until runtime. Consider the following code that asks the user how many employees they need to store, and then creates an array to store that many employees. This approach works in Java **but not C!**:

```c
#include <stdio.h>
#include "employee.h"

void getNumEmployees(int *numEmployees) {
    printf("Number of employees you need to store: ");
    scanf("%d", numEmployees);
    return num;
}


int main(int argc, char *argv[]) {
    int num;
    getNumEmployees(&num);  // ask for the array size first
    Employee my_employees[num];   // <--- this could crash the program!!!

    // (code omitted)
}
```

If the number is big enough, this code will crash the C program when it's run! It's really important to understand why (Stack Overflow), so we need to have a handle on how the OS manages a process' memory during execution.

##### Part 2:  Process Address Spaces

When your program is in execution (it's called a **process** at that point), the OS assigns it an **address space**. Think of this space as the process' very own sandbox. It's where all its resources (variables, open files, etc.) will live, and you can rest assured that it's private and protected from other processes. The OS organizes each process' address space in the following **segments**:

<img src="figures/proj3-memlayout.png" width="400px">

- **Code (Text) Segment** stores the binary (executable) file that's currently running. It is placed near the lowest address.

- **Data Segment** stores global and static variables that have been initialized with a non-zero or non-NULL value. The related BSS segment stores uninitialized global and static variables.

- **Heap** stores arbitrary amounts of data that is requested by the process during runtime. 

- **Program Stack** stores data (e.g., local variables, function parameters, return addresses) needed to keep track of program execution and scope of function calls. When your program makes a function call, your program stack *grows* by pushing input parameters, local variables declared within that function, and a return address onto it. Collectively, the set of these values make up the function's **frame**. As the function returns, all elememts in its frame are popped off the stack, causing the stack to now *shrink*.

###### How the Program Stack Works (And What Is a Stack Overflow?)

When a process starts running, the OS allocates `RLIMIT_STACK` bytes for that process' stack. A user cannot increase this stack size without changing the OS's configuration. Here's how the stack is used:

- From the `main(int argc, char *argv[])` function, where the program starts running, its command-line arguments `argc` and `argv` and any local variables declared in `main` are pushed onto the stack, which grows  towards  address `MAX - RLIMIT_STACK`. When `main()` calls another function, a new stack frame is for *that* function is created by pushing any return address, arguments, and local variables onto the stack. When that function returns, all the values in its frame are popped off, and control jumps back to the return address that was also pushed on, thus restoring the caller function's **scope**.

- **Stack Overflow**: The stack is allowed to grow and shrink so as long as it stays within the bounds imposed by `RLIMIT_STACK`. Unfortunately, violating this threshold is easy. Take a look at the following example, which contains an infinite recursion:

  ```c
  #include <stdio.h>

  void f(int depth) {
      printf("depth = %d\n", depth);
      f(depth+1);
  }

  int main(int argc, char* argv[]) {
      f(1);
      return 0;
  }
  ```

- Unlike a program that gets stuck in an infinite loop, programs infinite recursions _will_ eventually crash. Let's see the output of a run of this program:

  ```c
  ...
  depth = 393031
  depth = 393032
  depth = 393033
  depth = 393034
  depth = 393035
  Segmentation fault
  ```

- When your program's execution results in a **segmentation fault**, it means that the OS detected that the program code tried to access an address in memory that it does not have permission to. In this particular example, each recursive call to `f(..)` involves pushing the return address followed by pushing a new value for `int depth` onto  the stack. Once enough data has been pushed to the program stack, it will eventually breach the `RLIMIT_STACK` limit on the *393036th* recursive call to `f(..)`. When the program tries to push data beyond that threshold, the memory-management unit (MMU)  detects this violation and throws a segmentation fault, and terminates the offending process.


<!-- 
- What's my machine's `RLIMIT_STACK` you ask? This value varies across systems. To find out what this value is on your machine, you can use the shell command `ulimit`. The `-a` option shows all resource limits defined by your OS. If you're only interested in the stack size, you can specify the `-s` flag.

  ```
  $ ulimit -s
  10240
  ```

- The number reported by `ulimit` is in KB ($$2^{10}$$ bytes), so my machine gives each running process a 10 MB stack. -->

##### Part 3: Revisiting the Problem of Unknown Space Requirements at Runtime

Now that we understand how the program stack works, we return to our problematic code:

- The problem is on this line (by the way, this syntax is totally legal in Java!)

    ```c
    Employee my_employees[num];
    ```

  If the user entered a large enough integer for `num`, a segmentation fault can occur when at runtime it tries to push too-large of an `Employee` array onto the stack.

- Check out the output for the following two runs:

  ```
  $ ./employees
  Number of employees you need to store: 2
  Enter a name: David
  Enter salary: 30000

  Enter a name: Michelle
  Enter salary: 40000

  [name=Michelle, sal=40000], [name=David, sal=30000]
  ```

  That run succeeded because only needed to store 2 employees on the stack. But what about... 2000000?

  ```
  $ ./employees
  Number of employees you need to store: 2000000
  Segmentation fault
  ```

- Clearly, a program that crashes depending on the magnitude of a user's input is troubling, and this is why you should avoid creating unknown-sized arrays on the _program stack_. 

##### Part 4: Program Heap to the Rescue!!

- To deal with the stack-overflow problem, we need to be able allocate arbitrarily-sized memory off of the program stack! The **Heap** segment serves this purpose. So, whenever we need a new array, struct, string, etc., at runtime, you should be creating a pointer  to refer to some location on the **heap** where this potentially large structure will live. In this section, we'll see how C supports memory allocation (and deallocation) on the heap.

  - In fact, allocating memory on the heap is  what Java does every time the `new` keyword is used to instantiate an object. 

- There are four main memory allocation functions you need to know. To gain access to them, we need to  `#include <stdlib.h>`. These functions are:

  1.  `void* malloc(size_t size)`: allocates `size` contiguous bytes on the heap, and returns a pointer to the first byte. Note that `size_t` is just a `typedef` alias to `unsigned int`. On success, it returns a `void*` pointer to the first byte of the newly allocated block. Importantly, because the returned pointer is `void*`, the programmer _must_ cast it to the desired data type before it can be de-referenced (Think the `Object` type in Java, and how you must cast it before making sense of it). On failure, `NULL` is returned. (Why might `malloc` fail?)

  2.  `void* calloc(size_t num, size_t size)`: is an alternate function to  `malloc()`. It takes as input an unsigned integer `num` (number of elements) and `size` (number of bytes per element). It attempts to allocate `num * size` bytes on the heap. One difference from `malloc()` is that it will also initialize the entire allocated block to zeroes. Like `malloc()`, on success, it returns a `void*` pointer to the first byte of the newly allocated block. On failure, `NULL` is returned.

  <!-- 3.  `void* realloc(void *ptr, size_t size)`: is used to change the size of an already-allocated block of memory on the heap. It takes as input a pointer to an existing block of memory on the heap, and a new `size`, which may be smaller or larger than the current allocation. On failure, `NULL` is returned. Caveat: the location of the allocated block might change, which is why a `void*` pointer to a potentially different starting address is returned. -->

  3.  `void free(void *ptr)`: is used to reclaim the space that was previously allocated. It takes as input a pointer to the already-allocated memory block. **Important!** It is crucial that you free up memory as soon as it is no longer being used (Unlike Java, C does not garbage collect user-allocated memory automatically). When a user fails to free up unused space, it leads to **memory leaks** in your program, which can cause your process to bloat and take up lots of space over its lifetime.

      - Have you ever suspected that an app you use suffers from memory leaks? This is a very common problem in games and other memory-intensive applications. Next time an app that you use seems to be growing in memory usage in uncontrolled ways, it may be a memory leak that needs to be fixed.

- Let's see how I could refactor the problematic employee code so that it allocates the array on the heap instead of on the stack.

  ```c
  #include <stdio.h>
  #include <string.h>
  #include <stdlib.h> // For malloc(), free(), ...
  #include "employee.h"

  int getNumEmployees() {
    int num;
    do {
       printf("Number of employees you need to store: ");
       scanf("%d", &num);
    } while (num <= 0);
    return num;
  }

  int main(int argc, char *argv[]) {
    int num_employees = getNumEmployees();
    Employee *my_employees = (Employee*) malloc(num_employees * sizeof(Employee));  // <--- Array is on the heap!

    //fill employee info
    int i;
    for (i = 0; i < num_employees; i++) {
        strcpy(my_employees[i].name, getName());
        my_employees[i].salary = getSalary();
    }

    //(code omitted)

    free(my_employees);  // deallocate space after we're done!
    my_employees = NULL; // clean up "dangling pointer"
    return 0;
  }
  ```

- In the code:

  - On **Line 17:** there's a lot of information on this line. Let's break it down into pieces and talk about each one separately.

      ```c
      Employee *my_employees = (Employee*) malloc(num_employees * sizeof(Employee));  // <--- On the heap!
      ```

    Remember the goal is to create an array on the *heap* that contains `num_employees` elements of type `Employee`. Therefore, we need to use `malloc()` to request `num_employees * sizeof(Employee)` bytes on the heap.

    - For example, assume that the `Employee` structure is declared as follows:

      ```c
      #define MAX_NAME_LEN 16

      typedef struct Employee {
          char name[MAX_NAME_LEN];
          int salary;
      } Employee;
      ```

    - Then `sizeof(Employee) == 20` because `name` is a char array of length 16 and `salary` is an 4-byte integer. So `malloc()` will  allocate a chunk of `num_employees * 20` bytes, and return a pointer to the *first* Employee (at location [0]).

    - `malloc()` is returns a pointer that is type-agnostic; it doesn't care about what kind of data you intend to store in the newly allocated memory. Therefore, it returns a `void*` pointer, so we need to cast this pointer into the desired type. Without the cast, C wouldn't know what the byte-boundaries are for each `Employee` object to do pointer-arithmetic! For example, it wouldn't be able to associate `.name` with the first 16 bytes, nor `.salary` with the next 4 bytes!

  - Important: We can use array syntax over the allocated space! Yes!!!

    ```c
    //fill employee info
    int i;
    for (i = 0; i < num_employees; i++) {
        strcpy(my_employees[i].name, getName());  // assign the ith name using strcpy()
        my_employees[i].salary = getSalary(); // assign the ith salary
    }
    ```

    Remember from the previous lab that we learned the array-index syntax `my_employees[i]` is really just a short-hand for `*(my_employees+i)`. Because of the earlier cast to `Employee*`, C now knows to skip `sizeof(Employee)` bytes every time `i` is incremented. How convenient that we can use the array-index syntax in this context to dereference each 20-byte block as an `Employee` object!

  - On **Line 30 (important word on Garbage Collection)**: This line _frees_ up the `num_employees * sizeof(Employee)` bytes off the heap, so that the space can be reclaimed. Be careful! After freeing it, `my_employees` now points to an *invalid* address. If you try to dereference `my_employees` after freeing, you'll receive a **segmentation fault**!

    - While "garbage collection" is automatically handled by many modern languages like Java and Python, we don't have that luxury in C. It is completely up to the programmer to decide *when* free any memory that you allocated. Be very sensitive to this when you're programming!

  - On **Line 31 (avoiding dangling pointers)**: It is generally good  practice to set pointers to `NULL` after freeing their allocated space - here's why. After freeing memory, the pointer is *still* pointing at that location. However, once heap memory has been freed, that chunk of memory can be re-used by another call to `malloc` elsewhere in your program! 


##### Part 5: Dynamic Memory Allocation Examples
So we've seen how to create an array on the heap, but `malloc()` is more general than that. It can be used to allocate _any_ amount of memory on the heap, even a single `int`, `double`, or just a `struct`. It is often the case that we'll need to malloc to create new structs and strings of varying size. Here are a couple oft-used examples.

###### Part 5a: Creating Strings (Know this!)
Pay attention here, because you'll be doing this a lot! We can now use `malloc()` to create *just enough* space to hold  strings. For instance, suppose I wanted to write a function `createEmail()` that accepts two strings `user` and `domain`, and returns the string `user@domain`.

  ```c
  #include <string.h>
  char* createEmail(char* user, char* domain) {
    // create a new string buffer on the heap
    char *email = (char*) malloc(strlen(user) + strlen(domain) + 2);    
    email[0] = '\0';  // empty the string (just good habit)

    strcpy(email, user); // copy user over
    strcat(email, "@"); // append @
    strcat(email, domain);  // append domain
    return email;
  }
  ```

In the above code:
  - We `malloc()` the exact amount of space for the email string. The size is the length of the `user` + `domain` + `2`. Why add `2`? (1 byte for the `@` symbol. 1 byte for the terminating `\0` character)!

  - Next, we're presented with a rather annoying thing with `malloc()`. It does not clear out the contents after it allocates the space  to you (it's actually a "feature," because it's faster to leave the memory as-is). All `malloc()` does is return the pointer to the first byte. That means there could be existing *garbage* stored in the memory that was allocated! Therefore, we set the string to empty (which is equivalent to setting a string's 0th position to the `\0` character.)

    - You might say that this step was not needed since we reassign it immediately, and you'd be right in this case. However, consider if the first thing you did was to concatenate a string to `email`. If `email` wasn't cleared out, you may get some interesting results.

    - If you would rather that C clears out the contents of newly-allocated memory for you, you should use `calloc()` instead, but it's a bit slower.

  - With enough buffer on hand now, the subsequent `strcpy()` and `strcat()` calls now have enough space to concatenate and build up this email string. `strcpy()` and `strcat()` automatically adds the `\0` character to the modified string.

  - On the Last Line, we return the address to the `email`, or rather, to the first byte of the allocated memory. Because the memory to store `email` is created on the heap, it does not disappear after the `return` statement.

**Check-In Exercise** Doing the exercise below will be fruitful, because you'll likely use it for future assignments.

  - Write a function `char* strrepeat(char *str, unsigned int nrepeat)` to return a newly allocated string `nrepeat` copies of `str` concatenated together. For instance, `strrepeat("hi", 3)` returns a pointer to `hihihi`, and `strrepeat("hi", 0)` returns simply an empty string (that is, a char array of size 1, which contains just `\0`).




###### Part 5b: Instantiating Structs and the Arrow Syntax (`->`)
A great strength of `malloc()` lies in allowing us to create and manage dynamic data structures that are unbounded in size, like linked lists and trees. Assume we've declared the following `struct` for a Linked List node:

```c
/** Here's a node for a linked list, say */
typedef struct Node {
    int data;
    struct Node *next;
} Node;
```

We can use `malloc()` to create a single `struct` element on the heap as follows.

```c
// here's how to construct a Node element
Node *newNode = (Node*) malloc(sizeof(Node));

// here's how to initialize it (note the '->' operator!!!!)
newNode->data = 0;
newNode->next = NULL;
```

Notice the new operator `->` that can be used to access pointers to `struct`s. It automatically dereferences the pointer. The alternative way to access `data` and `next` is to use dot-notation after de-referencing the struct pointer, as follows:

```c
(*newNode).data = 0;
(*newNode).next = NULL;
```

But the arrow operator `->` just provides a much cleaner syntax to de-reference a pointer to a struct's data member!

###### Food for Thought
These will come back to us in future assignments, but it won't hurt to think about these problems early.
- How would you allocate a 2D (or 3D, 4D, ...)  array on the heap?
- How would you allocate an array of strings on the heap?
- How would you free up these structures?

#### Credits

Written by David Chiu. 2022.
