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

I have included a working solution of my program along with the starter code. The binary executable file is called `hashmapSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./hashmapSol`. 

#### Program Requirements

In this assignment you are to create a thread-safe hashmap library `ts_hashmap_t`. Before getting too far, we should remind ourselves of the basic structure of a hashmap. A hashmap can be implemented using an array of lists of key-value entries, as follows:

![](figures/hashmap.png)

**Index calculation:** In the example above, to calculate the array index, you take the `key`  of the entry and (1) cast it into an `unsigned int`, then (2) modulo by the size of the array. That should tell you which array position to focus on. Because the array element points to the head of the entry list, you can then walk the list to search for a key.


```c
#define INITIAL_CAPACITY 37

// A hashmap entry stores the key, value
// and a pointer to the next entry
typedef struct ts_entry_t {
   void *key;
   void *value;
   struct entry_t *next;
} ts_entry_t;

// A hashmap contains an array of pointers to entries,
// the capacity of the array, and the size (number of entries stored)
typedef struct ts_hashmap_t {
   ts_entry_t **table;
   int capacity;
   int size;
} ts_hashmap_t;
```

The `ts_hashmap_t` supports the following functions:

   - `ts_hashmap_t *initmap()`: returns a pointer to a new thread-safe hashmap. The initial  size of the array should be allocated to be `INITIAL_CAPACITY`.

   - `int containsKey(ts_hashmap_t *map, void *key)`: returns 1 if the `key` is found in the hashmap, or 0 otherwise.

   - `int containsValue(ts_hashmap_t *map, void *value)`: returns 1 if the `value` is found in the hashmap, or 0 otherwise.

   - `void* get(ts_hashmap_t *map, void* key)`: searches for the given `key` and returns the associated value if found. Otherwise, return `NULL`.

   - `void* put(ts_hashmap_t *map, void *key, void *value)`: inserts a new entry that contains the given `key` and `value` and return `NULL`. If the `key` already exists, then its associated value is replaced with the given `value` and the old value is returned. 

   - `void rehash*(ts_hashmap_t *map)`: allocates a new hash array, doubling its current capacity. All existing entries must be "rehashed" (or re-put) into the correct places in this larger table.

#### Example Output

It should be noted that your mileage may vary. I'm running this on a MacOS X system with a an Intel 2.8 GHz Core i7 processor (quad core, hyper-threading enabled) and 16 GB of RAM.

```
# ./mmm
Usage: ./mmm <mode> [num threads] <size>


# ./mmm S
Usage: ./mmm <mode> [num threads] <size>


# ./mmm S 10
========
mode: sequential
thread count: 1
size: 10
========
Sequential Time: 0.000577 sec


# ./mmm S 100
========
mode: sequential
thread count: 1
size: 100
========
Sequential Time: 0.004690 sec


# ./mmm P 100
Error: parallel mode requires <size>


# ./mmm P 2 10
========
mode: parallel
thread count: 2
size: 10
========
Sequential Time: 0.000616 sec
Parallel Time: 0.000086 sec
Speedup: 7.177778
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 2 100
========
mode: parallel
thread count: 2
size: 100
========
Sequential Time: 0.004705 sec
Parallel Time: 0.001822 sec
Speedup: 2.582439
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 4 200
========
mode: parallel
thread count: 4
size: 200
========
Sequential Time: 0.042224 sec
Parallel Time: 0.006170 sec
Speedup: 6.843651
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 4 300
========
mode: parallel
thread count: 4
size: 300
========
Sequential Time: 0.150054 sec
Parallel Time: 0.019833 sec
Speedup: 7.565840
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 4 1000
========
mode: parallel
thread count: 4
size: 1000
========
Sequential Time: 11.276177 sec
Parallel Time: 0.743291 sec
Speedup: 15.170611
Verifying... largest error between parallel and sequential matrix: 0.000000
```

#### Grading

```
This assignment will be graded out of 45 points:

[5pt] User input is properly handled, and invalid commands generates an error.

[5pt] Sequential version of mmm is properly implemented.

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
