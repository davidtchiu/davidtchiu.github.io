## CS 455 - Principles of Database Systems

### Hwk 6: B+Tree Implementation
In this assignment, you will build a Java program that simulates the search and insertion of search keys into a B<sup>+</sup>-Tree index.

You may use Java or Python for this assignment. 


#### Student Outcomes

- To understand the basics of extendible hashing.


#### Program Requirements

1. Upon running your program, your main method must accept a single command-line argument:
    - Degree of the tree (integer): This is the maximum number of children that each node can store. You should ensure that the degree ≥ 3. If degree is not within this range, inform the user and exit.

    - You may assume that an integer will be given for both parameters (e.g., and not a double, or a string).

2. Your program should now wait for instructions of the following format:
    - `i <x>` Inserts key `x` (integer) into the tree, such as `"i 54"`, and then prints then prints `SUCCESS` or `FAILED` (the latter only if `x` already exists). 
    - `s <x>` Searches the index for key `x`. Prints `x FOUND` or `x NOT FOUND`.
    - `r <start> <end>` Retrieves all keys within the range `start` and `end` inclusive. If result is empty, print `NONE FOUND`, otherwise, print the list of all keys in the range.
    - `p` Prints the tree in level order (details below).
    - `q` Exits the program.

3. Search Algorithm Sketch
    - 

3. Splitting a Node

Upon inserting a new search key into node N, it may overflow when N contains more than d - 1 keys. When this happens, split the overflown node N into a new sibling node N'. Handle two cases:

    - N is a leaf: Let N contain the d - 1 keys plus the newly inserted key (temporarily violating B<sup>+</sup>-Tree properties). Next, let N retain the first ⌈(d - 1)/2⌉ keys and ⌈(d - 1)/2⌉ + 1 pointers, while moving the remaining keys and pointers onto N'. The leaf level is a linked list, so update the links to include N'. Promotion: Insert both the smallest search key in N' and a pointer to N' into the parent of N. This may cause an overflow at the parent, triggering the non-leaf case below.

    - N is a non-leaf node: The process is similar to splitting a leaf node, except during promotion the smallest search key in N' and a pointer to N' must be inserted into the parent of N, but this key is not retained in N'. Its immediate trailing pointer remains in N' as its first pointer at P₀. Remember to add a pointer to N' from the parent node.

In either case, if the parent of the overflown node N is `null` (meaning N was the root), create a new root node and insert the promoted key with N and N' as children.

4. Printing the Tree: When your application receives a print query `p`, it must write output to the given output file.

    - The first line of output should be `PRINTING TREE`.
    - Print all nodes of the tree in *level order*, which means printing the tree one level at a time, from top to bottom, left to right. Think of it like looking at the tree row by row:

        - First you print the root (the very top).
        - Then you print all the nodes that are children of the root (that’s level 2).
        - Then you print all of their children (that’s level 3), and so on, until you reach the leaf level.
        - To do this correctly, you should use a queue.
        - Starting from the root:
            - Print all keys in the root node
            - Traverse each pointer in the root node from left to right and place in queue
            - For each node in the queue, recursively print it (using the algorithm just described)

    - Key values in a node are separated by commas.
    - Each levels of the tree are printed on a separate line.
    - Each nodes on a level is terminated by the character `#`.

5. Miscellanea. Other items worth considering include:

    - You are free touse a programming language of your choice, but if you do not use Java you must include a `README.md` explaining how to run it.

    - You are welcome (but not required) to support generics. At minimum, integer keys are expected.

    - Style and effective commenting are expected. Please include your name at the top of every class file.

    - You will be graded on generating correct output, code documentation, and code design. Handle exceptions gracefully.

### Example Interaction (degree = 3)
```txt
$ java BPlusTree 3

> p
PRINTING TREE
#

> i 8
SUCCESS

> i 5
SUCCESS

> i 1
SUCCESS

> p
PRINTING TREE
5 #
1 # 5,8 #

> i 7
SUCCESS

> p
PRINTING TREE
5,7 #
1 # 5 # 7,8 #

> i 3
SUCCESS

> i 12
SUCCESS

> p
PRINTING TREE
7 #
5 # 8 #
1,3 # 5 # 7 # 8,12 #

> i 9
SUCCESS

> s 56
56 NOT FOUND

> s 8
8 FOUND

> p
PRINTING TREE
7 #
5 # 8,9 #
1,3 # 5 # 7 # 8 # 9,12 #

> i 6
SUCCESS

> p
PRINTING TREE
7 #
5 # 8,9 #
1,3 # 5,6 # 7 # 8 # 9,12 #

> i 13
SUCCESS

> i 14
SUCCESS

> i 15
SUCCESS

> p
PRINTING TREE
9 #
7 # 13 #
5 # 8 # 12 # 14 #
1,3 # 5,6 # 7 # 8 # 9 # 12 # 13 # 14,15 #
```

### Example (degree = 4)
Same insertion order, but final tree would be:
```txt
9 # 
5,7 # 13 # 
1,3 # 5,6 # 7,8 # 9,12 # 13,14,15 #
```

### Example (degree = 20)
Same insertion order, but final tree would be:
```txt
1,3,5,6,7,8,9,12,13,14,15 #
```


#### Grading

```
This assignment will be graded out of 90 points.

[10pts] Implementation of the user interface to insert, search, print, and quit.

[10pts] The search method is properly implemented, and takes O(1) time.

[20pts] The print function prints the global directory and the buckets in the format
given in this assignment.

[50pts] The insert function is properly implemented according to the algorithm given
in lecture. This method only attempts to insert when the key is not already contained
in the index. Splitting of the local directory requires the correct keys from the overflown
bucket to be transferred to the new bucket based on those keys' most significant bits.
Pointers in the global directory need to be updated to point to the new bucket, 
regardless of whether the global directory needs to be doubled in size. 

This method must run in amortized O(1) time. On a split, you may observe that this method runs
in O(d) where d is the number of entries in the global directory. However, because each split allows
for addressing 2 times more buckets, the insert operations between global-splits averages out to O(1).
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.
2. Alternatively, you can zip up all your files (minus the `.class` files) and submit the `.zip` file on Canvas.
3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2024.
