## CS 475 - Operating Systems

### Hwk: Thread-Safe HashMap

HashMaps (also called Hash Tables or Dictionaries) are one of the most versatile and powerful data structures due to its support of O(1) operations. Besides arrays, they are quite possibly the most ubiquitous data structures in use today.

But have you ever wondered why Java offers both a `Hashtable<K,V>` class and a `HashMap<K,V>` class? If you compare their interfaces and behaviors, they have the same functionality. When would you prefer one over another? This choice, it turns out, has everything to do with synchronization and multithreading. A `HashMap<K,V>` cannot be *safely*  accessed by multiple threads. It has  no built-in synchronization mechanisms that avoid race conditions when many threads are concurrently calling `put`, `get`, and `delete` on it. If you're ever writing a multithreaded program, you must use its thread-safe counterpart, `Hashtable<K,V>`.

When programming, you should always check the documentation to ensure that the data structure is thread safe. (For instance, another thread-safe approach includes using `Vector<E>` instead of `ArrayList<E>`.) On the other hand, if you know that your program will always be single-threaded, then a `HashMap<K,V>` would not only suffice, but it would even be faster to use, because it has been implemented without any synchronization considerations. Same goes for `ArrayLists`.

#### Thread Safety 
A data structure is called *thread-safe* if it can be accessed by multiple threads concurrently without risking losing data. Take an unsafe linked list, for instance. Assume that a node in a linked list has a `data` and `next` fields. The `LinkedList` structure itself only stores a pointer to the head node. The code to remove the head element may look something like the following:

   ```c
   void* removeHead(LinkedList *list) {
      if (list->head == NULL) {
         return NULL;   // do nothing!
      }
      Node *oldHead = list->head;
      void* retval = oldHead->data; // save for return
      list->head = oldHead->next;   // update the head
      free(oldHead);  // deallocate old head node
      return retval;
   }
   ```

If no provision has been made to make access to the list thread safe, when two (or more) threads seek to remove the head element simultaneously, they may end up in a race condition. Suppose the linked list currently stores `[A,B,C,D,E]`, then two calls to `removeHead()` should yield `A` and `B` respectively (we don't care whether `A` and `B` ends up in T1's hands or T2's), but it should leave `[C,D,E]` remaining in the list. However, consider the following scenario:

   ```
   Thread T1 and T2 concurrently call removeHead(list)
   T1 sees that there's a head element, with data A
   T1 saves an oldHead pointer to the current head
   T1 saves A for later return
   T2 sees that there's a head element, with data A (!! Race Here !!)
   T2 saves an oldHead pointer to the current head (oldHead still gets A.)
   T2 saves A for later return (Nope. Should've gotten B.)
   T1 updates the head element to B
   T2 updates the head element to B (Nope.)
   T1 frees oldHead
   T1 returns A
   T2 frees oldHead (Double-free Error.)
   T2 returns A
   ``` 

In this scenario, `A` is incorrectly returned by both threads, and the list is still `[B,C,D,E]`. And that's just *one* way (among many) that things could go wrong. (Honestly, most incorrect runs would probably seg-fault.) To make this linked list thread-safe, each thread *should have* locked out access to the list so that another thread can't enter and make progress in the critical section. In other words, something to this effect:

   ```c
   void* removeHead(LinkedList *list) {
      lock();

      // <<entering critial section>>
      if (list->head == NULL) {
         return NULL;   // do nothing!
      }
      Node *oldHead = list->head;
      void* retval = oldHead->data; // save for return
      list->head = oldHead->next;   // update the head
      free(oldHead);  // deallocate old head node
      // <<leaving critial section>>

      release();
      return retval;
   }
   ```

In this assignment, you are to provide a thread-safe hashmap library for C.


#### Student Outcomes

- To implement a classic dynamically allocated hashmap in C.
- To understand the concept of thread safe structures.
- To be exposed to synchronization of threads using mutex locks.

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- Login to github, and go here: [https://github.com/davidtchiu/os-hash](https://github.com/davidtchiu/os-hash). 

- **Please do not fork from my repository!** Instead, click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```


- This should download the starter code in a directory named after your Github repository. 


#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `hashtestSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./hashtestSol`. 

#### Introduction: HashMap Structure and Functions

In this assignment you are to create a thread-safe (ts) hashmap library `ts_hashmap_t`. A hashmap can be implemented using an array of linked-lists of key-value entries, as follows:

<img src="figures/hashmap.png" width="350px">

Here are some properties you should keep in mind while programming:

   - **Entries** Each key-value pair must be encapsulated in a `ts_entry_t` struct. Besides the key and value, the struct also stores a pointer to the next struct, allowing us to form a linked list of entries. The struct is declared in `ts_hashmap.h`:

      ```c
      // A hashmap entry stores the key, value
      // and a pointer to the next entry
      typedef struct ts_entry_t {
         int key;
         int value;
         struct ts_entry_t *next;   // pointer to next entry
      } ts_entry_t;
      ```

   - **HashMap Structure** There are two basic hashmap implementations: open-addressing vs. chaining. You will consider the chaining approach for this assignment. In this approach (which is pictured above), you will allocate a fixed array (`table`) of pointers to a list of key-value entries. The size of this array (i.e., the maximum number of lists you can have) is given as the `capacity` of your hashmap. The `size` refers to the number of entries stored in the map.

      ```c
      // A hashmap contains an array of pointers to entries,
      // the capacity of the array, and the size (number of entries stored)
      typedef struct ts_hashmap_t {
         ts_entry_t **table;  // pointer to an array of entry pointers
         int capacity;  // size of the table (table[] array length)
         int size;      // number of entries currently stored
      } ts_hashmap_t;
      ```


   
      - While a true hashmap allows for any type of data to serve as both key and value, to simplify our implementation, we will assume that all keys and values are `int`s.

      - If you have time, you should look into how to support arbitrary key and value types.

   - **Index Calculation** In the example above, to calculate the array index, you take the `key` of the entry and (1) cast it into an `unsigned int`, then (2) modulo by the size of the array. That should tell you which array position to hone in on. Because the array element points to the head of the entry list (or `NULL`), you can then walk the list of entries to search for a key.


#### Program Requirements

1. Your program should accept exactly 2 arguments on the command line:
    ```bash
    $ ./hashtest <num threads> <hashmap capacity>
    ```
   - The `num threads` argument tells your program how many threads it must create to randomly get/put/del keys.
   - The `hashmap capacity` argument is the size of the table array that your hashmap should initialize.

2. You must provide the following thread-safe functions:

   - `ts_hashmap_t *initmap(capacity)`: returns a pointer to a new thread-safe hashmap. The initial  size of the array should be allocated to `capacity`. This function **does not** need to be thread-safe.

   - `int get(ts_hashmap_t *map, int key)`: searches for the given `key` and returns the associated value if found. Otherwise, return constant `INT_MAX`.

   - `int put(ts_hashmap_t *map, int key, int value)`: inserts a new entry that contains the given `key` and `value` and return constant `INT_MAX`. If the `key` already exists, then its associated value is replaced with the given `value` and the old value is returned. 

   - `int del(ts_hashmap_t *map, int key)`: deletes an entry that contains the given `key` and return the previously associated value. If the `key` did not exist, return the constant `INT_MAX`. 


3. **Thread Synchronization Considerations** I would start by playing around with the locking mechanism just to get used to them. To explore locks, you'll need to `#include <pthread.h>`. A (self blocking) lock is of the type `pthread_mutex_t`, and you can use the constructor `pthread_mutex_init(..)` to initialize it. Once initialized, you can use `pthread_mutex_lock(..)` and `pthread_mutex_unlock(..)`. 

   Once you feel pretty good about how to create and use locks, you'll want  determine how you'll enforce mutual exclusion in the hashmap functions. Should you introduce one lock for each hashmap? Multiple locks per hashmap? How would this decision affect the parallel performance of your hashmap? Where do you declare the lock(s) to ensure that all threads can access them? Once you have your locks declared in initialized in the right place, you'll just have to go back into the hashmap functions and add in the lock/unlock calls to enforce mutual exclusion. 

   **Important** Users of your hashmap library must not be burdened with the creation and management of any locks on their own. That is, users should be totally oblivious to the fact that locks even exist. Therefore, all of the management of your locks should all be done in above functions, hidden  from users.

4. The `main.c` file is provided to you, and you should not modify it (unless while debugging). This program stress tests your implementation. Each thread runs `NUM_OPS_PER_THREAD` operations on your hashmap. These operations have 50% to be a `put()` and 25% each to be a `get()` or `del()`. Each hash-key is randomly generated and limited to a maximum value of 100 so as to induce sufficient amounts of hash conflicts.

#### Hints
- You should begin by implementing and testing the single-threaded version without synchronization. You can do this by just spawning a thread count of 1 in the command-line prompt.

- Pay particular attention to memory management. Nodes are possibly created in `put()` and freed in `del()`. Be careful of ordering -- don't try to free a node before it's been completely unlinked from the map. In case of `del()`, you also need to return the old value, so make sure you save that value in a temporary variable before freeing the node and returning!

- Speaking of memory management, you'll need to free up the memory allocated to your `pthread_lock_t` object(s) when you're done. To do this, use `pthread_mutex_destroy()`. It frees the resources for you, so you will not need to `free()` them explicitly after calling this function.


#### Example Output
In the output below, my tester spawns the given number of threads from the command line. Each thread has a 33% chance of doing either a `del`, `get`, or `put`. Then a random key between 0 and 99 is generated for that chosen operation. Each thread runs this in a loop 100 times. Obviously, due to the randomness of the tests I'm running, the outputs below are mine alone. 

If race conditions were present, however, you would likely expect a segmentation fault and/or duplicated keys during the test. You may also get invalid read/write memory errors from valgrind in the multithreaded version (but not in the single threaded version) if races exist.

Here's a run with 1 thread on a capacity of 1
```
$ ./hashtest 1 1
[0] -> (60,60) -> (20,20) -> (64,64) -> (93,93) -> (83,83) -> (2,2) -> (7,7) -> (62,62) -> (85,85) -> (4,4) -> (84,84) -> (8,8) -> (47,47) -> (37,37) -> (100,100) -> (5,5) -> (41,41) -> (50,50) -> (23,23) -> (1,1) -> (95,95) -> (6,6) -> (32,32) -> (45,45) -> (74,74) -> (3,3) -> (11,11) -> (54,54) -> (99,99) -> (40,40) -> (75,75) -> (73,73) -> (92,92) -> (53,53) -> (57,57) -> (89,89) -> (76,76) -> (17,17) -> (59,59) -> (61,61) -> (68,68) -> (81,81) -> (19,19) -> (33,33) -> (91,91) -> (21,21) -> (34,34) -> (63,63) -> (65,65) -> (49,49) -> (31,31) -> (16,16) -> (24,24) -> (90,90) -> (96,96) -> (67,67) -> (29,29) -> (86,86) -> (12,12) -> (79,79) -> (72,72) -> (80,80) -> (69,69) -> (87,87) -> (56,56) -> (43,43)
```


Here's a run with 40 threads on a capacity of 1
```
$ ./hashtest 40 1
[0] -> (15,15) -> (96,96) -> (90,90) -> (53,53) -> (74,74) -> (97,97) -> (95,95) -> (13,13) -> (42,42) -> (18,18) -> (20,20) -> (84,84) -> (43,43) -> (80,80) -> (6,6) -> (85,85) -> (57,57) -> (89,89) -> (76,76) -> (58,58) -> (77,77) -> (100,100) -> (55,55) -> (37,37) -> (44,44) -> (86,86) -> (21,21) -> (93,93) -> (52,52) -> (19,19) -> (70,70) -> (39,39) -> (41,41) -> (40,40) -> (61,61) -> (5,5) -> (75,75) -> (99,99) -> (51,51) -> (56,56) -> (67,67) -> (22,22) -> (65,65) -> (46,46) -> (59,59) -> (78,78) -> (10,10) -> (69,69) -> (3,3) -> (28,28) -> (87,87) -> (12,12) -> (16,16) -> (83,83) -> (82,82) -> (25,25) -> (48,48) -> (38,38) -> (35,35) -> (0,0) -> (14,14) -> (26,26) -> (30,30) -> (7,7) -> (9,9) -> (98,98)
```

Here's a run with 400 threads on a capacity of 13.
```
$ ./hashtest 400 13
[0] -> (39,39) -> (52,52) -> (91,91)
[1] -> (14,14) -> (1,1) -> (66,66) -> (79,79) -> (40,40) -> (27,27) -> (53,53)
[2] -> (67,67) -> (54,54)
[3] -> (94,94) -> (29,29)
[4] -> (56,56) -> (4,4) -> (69,69) -> (43,43) -> (95,95) -> (17,17) -> (82,82) -> (30,30)
[5] -> (44,44) -> (18,18) -> (57,57) -> (31,31) -> (70,70) -> (96,96) -> (5,5)
[6] -> (6,6) -> (19,19) -> (71,71) -> (58,58) -> (45,45) -> (84,84)
[7] -> (85,85) -> (33,33) -> (46,46) -> (59,59) -> (98,98) -> (72,72)
[8] -> (34,34) -> (21,21) -> (99,99) -> (73,73) -> (60,60)
[9] -> (61,61) -> (87,87) -> (100,100) -> (48,48) -> (35,35)
[10] -> (23,23) -> (88,88) -> (62,62) -> (10,10)
[11] -> (11,11) -> (50,50) -> (24,24) -> (76,76) -> (89,89) -> (37,37) -> (63,63)
[12] -> (51,51) -> (64,64) -> (12,12) -> (90,90) -> (77,77)
```

Here's a run with 500 threads on a capacity of 53.
```
$ ./hashtest 500 53
[0] -> (53,53) -> (0,0)
[1] -> (54,54) -> (1,1)
[2] -> (2,2)
[3] -> (56,56) -> (3,3)
[4] -> (57,57) -> (4,4)
[5] -> (5,5)
[6] -> (6,6)
[7] -> (7,7) -> (60,60)
[8] -> (8,8) -> (61,61)
[9] -> (9,9) -> (62,62)
[10] -> (63,63) -> (10,10)
[11] -> (64,64)
[12] -> (65,65) -> (12,12)
[13] -> (66,66) -> (13,13)
[14] -> 
[15] -> (15,15)
[16] -> (16,16) -> (69,69)
[17] -> (70,70)
[18] -> (18,18)
[19] -> (72,72)
[20] -> (20,20)
[21] -> (21,21)
[22] -> (22,22)
[23] -> (76,76) -> (23,23)
[24] -> (24,24)
[25] -> (78,78)
[26] -> (79,79)
[27] -> (27,27) -> (80,80)
[28] -> (28,28) -> (81,81)
[29] -> (82,82) -> (29,29)
[30] -> (83,83) -> (30,30)
[31] -> (84,84)
[32] -> (85,85) -> (32,32)
[33] -> (86,86) -> (33,33)
[34] -> (87,87) -> (34,34)
[35] -> (88,88) -> (35,35)
[36] -> 
[37] -> (90,90) -> (37,37)
[38] -> (91,91) -> (38,38)
[39] -> (39,39) -> (92,92)
[40] -> (40,40) -> (93,93)
[41] -> (41,41) -> (94,94)
[42] -> (95,95)
[43] -> (43,43) -> (96,96)
[44] -> (97,97) -> (44,44)
[45] -> 
[46] -> (99,99)
[47] -> (100,100) -> (47,47)
[48] -> (48,48)
[49] -> (49,49)
[50] -> (50,50)
[51] -> (51,51)
[52] -> (52,52)
```

#### Grading

```
This assignment will be graded out of 90 points:

[5pt] Handling of user input.

[10pt] initmap() dynamically allocates a new hashmap. All 
fields are initialized.

[15pt] A thread-safe version of get() is implemented. 

[15pt] A thread-safe version of put() is implemented. 

[25pt] A thread-safe version of del() is implemented. 

[5pt] All locking mechanisms should be hidden from users.

[15pt] Your program is free of memory leaks and dangling pointers.
```

#### Submitting Your Assignment
1. Commit and push your code to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.

#### Credits

Written by David Chiu. 2022.
