## CS 475 - Operating Systems

### Hwk: Thread-Safe HashMap

Have you ever wondered why Java offers both a `Hashtable<K,V>` class and a `HashMap<K,V>` class? If you compare their interfaces and behaviors, they have the same functionality. When would you prefer one over another? It has everything to do with synchronization and multithreading. It turns out that `HashMap<K,V>` is not *safe* to be accessed by multiple thread, there are no built-in synchronization mechanisms that avoid race conditions. Therefore, if you're ever writing a  program in which multiple threads are putting/getting/searching a shared HashMap, you must use its thread-safe counterpart, `Hashtable<K,V>`.

When programming, you should always check the documentations to ensure that the data structure is thread safe. (Other thread-safe structures include `Vector<E>` and `Stack<E>`.) On the other hand, if you know that your implementation will always be single-threaded, then a `HashMap<K,V>` would not only suffice, but would even be faster to use, because it has been implemented without any synchronization considerations. And since all of your programs have been single-threaded, a `HashMap<K,V>` has always served its purpose.

#### Thread Safety Example
A data structure is called *thread-safe* if it can be accessed by multiple threads concurrently without risking correctness. Take an unsafe linked list, for instance. The code to remove the head element may look something like the following:

   ```c
   void* removeHead(LinkedList *list) {
      if (list->head == NULL) {
         return NULL;   // do nothing!
      }
      void* retval = list->head->data; // save for return
      list->head = list->head->next;   // unlink the current head
      free(list->head); // deallocate head node
      return retval;
   }
   ```

If no provisions has been made to make it thread safe, then when two threads both seek to remove the head element simultaneously, they may end up in a race condition.    Suppose the linked list stores `[A,B,C,D,E]`, then two concurrent calls to `removeHead()` should yield `A` and `B` and leave only `[C,D,E]` remaining in the list.

   ```
   Thread T1 and T2 both run removeHead(list);
   T1 sees that there's a head element A
   T1 saves A for later return
   T2 sees that there's a head element A (!race here!)
   T1 unlinks the head element
   T2 saves A for later return
   T1 frees A
   T1 returns A
   T2 unlinks the head element (head is now C! B is lost!)
   T2 frees A 
   T2 returns A
   ``` 

In this scenario, `A` is returned by both threads, and the list is now `[C,D,E]`. And that's just *one* way things could've gone wrong. To make this linked list thread-safe, the threads *should have* locked out the list so that another thread can't enter and make progress in the critical section. Something like this pseudocode would suffice.

   ```c
   void* removeHead(LinkedList *list) {
      acquire(lock); // acquire lock
      if (list->head == NULL) {
         release(lock); // release lock to let another thread in
         return NULL;
      }
      void* retval = list->head->data;
      list->head = list->head->next;
      free(list->head);
      release(lock); // release lock to let another thread in
      return retval;
   }
   ```

Because any thread running `removeHead()` must first lock (or possibly wait for another thread to release) the function, if the only possible outcomes are correct. Here's one correct run:

   ```
   Thread T1 and T2 both run removeHead(list);
   T1 locks
   T1 sees that there's a head element A
   T2 locks (and waits)
   T1 saves A for later return
   T1 unlinks the head element (Head now B)
   T1 frees A
   T1 returns A
   T1 unlocks (T2 is released)
   T2 sees that there's a head element B
   T2 saves B for later return
   T2 unlinks the head element (Head now C)
   T2 frees B
   T2 returns B
   ``` 

In this assignment, you are to provide a thread-safe hash table library for C.


#### ZyBooks References

- Memory allocation of 2D arrays

#### Student Outcomes

- To write a multi-threaded program using the `pthread` library.
- To work with the work-sharing paradigm in parallel computing.
- To be exposed to timing runs and producing results for performance evaluation.

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- If you want to submit your code on Github, do this step. If not, you may skip this step. Make sure you already have a Github account. Login to github, and go here: [https://github.com/davidtchiu/cs475-hwk5-mmm](https://github.com/davidtchiu/cs475-hwk5-mmm). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From your Ubuntu virtual machine, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

```

git clone <your-github-url-for-this-project>

```

- If you aren't planning to submit your assignment via a Github link, then you can simply download the starter files onto your Ubuntu virtual machine using:

```

git clone https://github.com/davidtchiu/cs475-hwk5-mmm

```

#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `hashtestSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./hashtestSol`. 

#### Program Requirements

In this assignment you are to create a thread-safe (ts) hashmap library `ts_hashmap_t`. A hashmap can be implemented using an array of linked-lists of key-value entries, as follows:

<img src="figures/hashmap.png" width="200px">

Here are some properties you should keep in mind while programming:

   - **Hash Map Structure** There are two basic hashmap implementations: open-addressing vs. chaining. You will consider the chaining approach for this assignment. In this approach (which is pictured above), you will allocate a fixed array (`table`) of pointers to a list of key-value entries. The size of this array (i.e., the maximum number of lists you can have) is given as the `capacity` of your hashmap. The `size` refers to the number of entries stored in the map.

      ```c
      // A hashmap contains an array of pointers to entries,
      // the capacity of the array, and the size (number of entries stored)
      typedef struct ts_hashmap_t {
         ts_entry_t **table;  // pointer to an array of entry pointers
         int capacity;  // size of the table (table[] array length)
         int size;      // number of entries currently stored
      } ts_hashmap_t;
      ```

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
   
      - While a true hashmap allows for any type of data to serve as both key and value, to simplify our implementation, we will assume that all keys and values are `int`s.

      - If you have time, you should look into how to support arbitrary key and value types.

   - **Index Calculation** In the example above, to calculate the array index, you take the `key` of the entry and (1) cast it into an `unsigned int`, then (2) modulo by the size of the array. That should tell you which array position to hone in on. Because the array element points to the head of the entry list (or `NULL`), you can then walk the list of entries to search for a key.

1. Your program should accept exactly 2 arguments on the command line:
    ```bash
    $ ./hashtest <num threads> <hashmap capacity>
    ```
   - The `num threads` argument tells your program how many threads it must create to randomly get/put/del keys.
   - The `hashmap capacity` argument is the size of the table array that your hashmap should initialize.

2. You must provide the following thread-safe functions:

   - `ts_hashmap_t *initmap(capacity)`: returns a pointer to a new thread-safe hashmap. The initial  size of the array should be allocated to `capacity`. This function **does not** need to be thread-safe.

   - `int containsKey(ts_hashmap_t *map, int key)`: returns 1 if the `key` is found in the hashmap, or 0 otherwise.

   - `int containsValue(ts_hashmap_t *map, int value)`: returns 1 if the `value` is found in the hashmap, or 0 otherwise.

   - `int get(ts_hashmap_t *map, int key)`: searches for the given `key` and returns the associated value if found. Otherwise, return constant `INT_MAX`.

   - `int put(ts_hashmap_t *map, int key, int value)`: inserts a new entry that contains the given `key` and `value` and return constant `INT_MAX`. If the `key` already exists, then its associated value is replaced with the given `value` and the old value is returned. 

   - `int del(ts_hashmap_t *map, int key)`: deletes an entry that contains the given `key` and return the previously associated value. If the `key` did not exist, return the constant `INT_MAX`. 


3. **Thread-Safety Considerations** I would start by writing and testing (aggressively) the above functions without considering threads. Make sure everything is working before you worry about threads and mutual exclusion. Next, I would play around with locks just to get used to them. To explore locks, you'll need to `#include <pthread.h>`. A lock is of the type `pthread_mutex_t`, and you can use the constructor `pthread_mutex_init(..)` to initialize it. Once initialized, you can use `pthread_mutex_lock(..)` and `pthread_mutex_unlock(..)`. 

   The next thing you'll want to do is to determine how you'll enforce mutual exclusion in the hashmap functions. Should you introduce one lock? Multiple locks? How would this decision affect the parallel performance of your hashmap? Where do you declare the lock(s) to ensure that all threads can access them?

   Once you have your locks declared in initialized in the right place, you'll just have to go back into the hashmap functions and add in the lock/unlock calls to enforce mutual exclusion. 

4. **Writing a Tester (main)** Testing the correctness of your implementation takes a bit of effort. I would write a main function to create any number of threads, and each thread continuously puts/gets/dels 1000s of keys into the same shared hashmap. Use the `printmap()` function that I provided to print out the contents of the map after the threads join back up.

   - You may want to figure out how to "control" the randomness your tests so that you can repeat the same test on a single-threaded version vs. a multi-threaded version and produce the same output.

   - You won't be graded on this, because I'll use my own tester. So, I'll leave it up to you on how to systematically test the correctness of your hashmap, but it should be rigorous and revealing.


#### Example Output
In the output below, my tester spawns the given number of threads from the command line. Each thread has a 33% chance of doing either a del, get, or put. Then a random key  between 0 and 99 is generated for that chosen operation. Each thread runs this in a loop 100 times. Obviously, due to the randomness of the tests I'm running, the outputs below are mine alone. If there were race conditions, you would likely expect a segmentation fault and/or duplicated entries during the test. 

Here's a run with 2 threads on a capacity of 1
```
$ ./hashtest 2 1
[0] -> (9,9) -> (10,10) -> (13,13) -> (14,14) -> (18,18) -> (21,21) -> (22,22) -> (24,24) -> (29,29) -> (31,31) -> (35,35) -> (39,39) -> (41,41) -> (46,46) -> (50,50) -> (51,51) -> (58,58) -> (67,67) -> (68,68) -> (74,74) -> (78,78) -> (76,76) -> (77,77) -> (84,84) -> (90,90) -> (85,85) -> (86,86) -> (87,87) -> (88,88) -> (97,97)
```

Here's a run with 40 threads on a capacity of 1
```
$ ./hashtest 40 1
[0] -> (63,63) -> (36,36) -> (37,37) -> (38,38) -> (45,45) -> (49,49) -> (4,4) -> (6,6) -> (8,8) -> (56,56) -> (57,57) -> (66,66) -> (50,50) -> (76,76) -> (84,84) -> (17,17) -> (29,29) -> (9,9) -> (30,30) -> (33,33) -> (34,34) -> (41,41) -> (74,74) -> (77,77) -> (48,48) -> (52,52) -> (53,53) -> (78,78) -> (82,82) -> (83,83) -> (85,85) -> (89,89) -> (92,92) -> (93,93) -> (97,97)
```

Here's a run with 400 threads on a capacity of 13.
```
$ ./hashtest 400 13
[0] -> (13,13) -> (39,39) -> (78,78) -> (65,65)
[1] -> (27,27) -> (53,53) -> (79,79) -> (92,92)
[2] -> (28,28) -> (54,54) -> (15,15) -> (41,41)
[3] -> (16,16) -> (94,94) -> (29,29) -> (81,81)
[4] -> (69,69) -> (17,17) -> (30,30) -> (43,43)
[5] -> (5,5) -> (18,18) -> (83,83) -> (96,96)
[6] -> (58,58) -> (71,71) -> (84,84)
[7] -> (98,98)
[8] -> (34,34)
[9] -> (61,61) -> (87,87)
[10] -> 
[11] -> (50,50) -> (24,24)
[12] -> (64,64) -> (77,77)
```

#### Grading

```
This assignment will be graded out of 45 points:

[5pt] User input is properly handled, and invalid commands generates an error.

[10pt] initmap() dynamically allocates a new thread-safe map on the heap. All 
fields are initialized.

[20pt] Parallel version of mmm is properly implemented.

[5pt] You must verify that parallel version is correct by comparing the result
      matrix with one generated using the sequential algorithm.

[5pt] Your work-sharing model for the parallel version is producing good
      performance.

[5pt] You are properly timing your results over multiple runs, and timing only
      relevant portions of code.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. I assume you wrote your program inside your virtual machine. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.

2. If you'd rather submit a "zipped" file on Canvas, do the following:

   - From the Terminal, navigate to the directory that contains your homework directory.
   - Navigate to the directory that contains your homework directory.
   - Zip up your homework directory: `tar -czvf <file_name>.tar.gz <homework_dir>`

     - For example, if my homework directory is called `hwk5/`, and I want the zipped file to be called `hwk5.tar.gz`, use: `tar -czvf hwk5.tar.gz hwk5/`
     - You can un-zip this file later using: `tar -xzvf <file_name>.tar.gz`

   - Navigate to our course on Canvas, and find the assignment submission box.

   - Click on Submit Assignment, and you should be able to "browse" for your file

   - When you've selected the proper file, click Submit Assignment again to upload it.

3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2022.
