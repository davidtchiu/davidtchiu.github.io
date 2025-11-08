## CS 455 - Principles of Database Systems

### Hwk 6: B+Tree Implementation
In this assignment, you will build a Java program that simulates the search and insertion of search keys into a B+Tree index.

You may use Java or Python for this assignment. 


#### Student Outcomes

- To understand the basics of extendible hashing.


#### Program Requirements

1. Constructor
Prompt: Implement the constructor for BPlusTree that initializes a new B+ tree with the specified degree.
Stub:
```java
public BPlusTree(int degree) {
    // TODO: Implement constructor
}
```

2. Insert Method
Prompt: Implement the main insert method that handles inserting a key into the B+ tree, including root splitting when necessary.
Stub:
```java
public boolean insert(E key) {
    // TODO: Implement insert method
    // 1. If root is null, create a new leaf node as root
    // 2. Call insertKey(root, key) to insert the key
    // 3. If root is now over-full (keys.size() > DEGREE - 1):
    // - Create new internal node as new root
    // - Add old root as first child
    // - Split the old root
    // 4. Return the result from insertKey

return false;
}
```


3. InsertKey Helper Method
Prompt: Implement the recursive helper method that inserts a key into a node, allowing temporary overflows and handling splits.
Stub:
```java
private boolean insertKey(Node node, E key) {
    // 1. If node is a leaf:
    // - Check for duplicate using contains()
    // - If duplicate found, return false
    // - Find insertion position (maintain sorted order)
    // - Insert key at that position
    // - Return true
    // 2. Else (internal node):
    // - Find appropriate child index to recurse into
    // - Recursively call insertKey on that child
    // - If child is now over-full after insertion:
    //     - Split the child
    //     - Recalculate child index (tree structure changed)
    // - Return result from recursive call
    
    // return false;
}
```


4. SplitChild Method
Prompt: Implement the method that splits an over-full child node, redistributing keys and children appropriately for both leaf and internal nodes.
Stub:
```java
private void splitChild(Node parent, int idx, Node child) {
    // TODO: Implement splitChild method
//     1. Calculate leftKeyCount = DEGREE / 2
// 2. Create new sibling node with same leaf status as child
// 3. If child is a leaf:
//    - Move keys from leftKeyCount to end to sibling
//    - Remove those keys from child
//    - Add first key of sibling to parent at index idx
//    - Add sibling as child of parent at index idx + 1
//    - Update leaf node chaining (next pointers)
// 4. Else (internal node):
//    - Move keys from leftKeyCount to end to sibling
//    - Remove those keys from child
//    - Move children from leftKeyCount to end to sibling
//    - Remove those children from child
//    - Move leftmost key of sibling up to parent
//    - Remove that key from sibling
//    - Add sibling as child of parent at index idx + 1
}
```

5. LevelPrint Method
Prompt: Implement the public method that prints the B+ tree structure level by level.
Stub:
```java
public void levelPrint() {
    // TODO: Implement levelPrint method
}
```

6. Private LevelPrint Method
Prompt: Implement the private helper method that performs level-order traversal and prints each level of the tree.
Stub:
```java
private void levelPrint(Queue<Node> queue) {
    // TODO: Implement private levelPrint method
// 1. While queue is not empty:
//    - Get current level size (queue.size())
//    - For each node at current level:
//      - Remove node from queue
//      - Print node's keys (remove spaces)
//      - If node is not a leaf:
//        - Add all children to queue
//    - Print newline after each level

}
```

7. Search Method
Prompt: Implement the public search method that checks if a key exists in the B+ tree.
Stub:
```java
public boolean search(E key) {
    // 1. If root is null, return false
    // 2. Call searchNode(root, key) and return result
    return false;
}
```

8. SearchNode Helper Method
Prompt: Implement the recursive helper method that traverses the tree to find a key.
Stub:
```java
private boolean searchNode(Node node, E key) {
// 1. While node is not null:
//    - If node is a leaf:
//      - Search through all keys in the node
//      - If key found, return true
//      - If not found, return false
//    - Else (internal node):
//      - Find appropriate child index to descend into
//      - Ensure index is within bounds
//      - Set node to that child
// 2. Return false (should not reach here)

return false;
}
```

9. Range Method
Prompt: Implement the range method that returns all keys within a specified range [start, end].
Stub:
```java
public List<E> range(E start, E end) {
    // 1. Create empty result list
    // 2. If root is null, return empty list
    // 3. Find leftmost leaf node that may contain 'start':
    // - Start at root
    // - While not at leaf:
    //     - Find appropriate child index
    //     - Descend to that child
    // 4. Traverse leaf nodes using next pointers:
    // - For each key in current leaf:
    //     - If key is in range [start, end], add to result
    //     - If key > end, return result (done)
    // - Move to next leaf node
    // 5. Return result list
    return new ArrayList<>();
}```





1. Your program must be run with a single command-line argument:
    - Degree of the tree (integer): This is the maximum number of children that each node can store. You should ensure that the degree ≥ 3. If the degree is not within this range, inform the user and exit.

    - You may assume that an integer will be given for both parameters (e.g., and not a double, or a string).

2. Your program should now wait for instructions of the following format:
    - `i <x>` Inserts key `x` (integer) into the tree, such as `"i 54"`, and then prints then prints `SUCCESS` or `FAILED` (the latter only if `x` already exists). 
    - `s <x>` Searches the index for key `x`. Prints `x FOUND` or `x NOT FOUND`. (Equality query)
    - `r <start> <end>` Retrieves all keys within the range `start` and `end` inclusive. If result is empty, print `NONE FOUND`, otherwise, print the list of all keys in the range. (Range query)
    - `p` Prints the tree in level order (details below).
    - `q` Exits the program.

3. Search Algorithm Sketch


3. Splitting a Node: Upon inserting a new search key into node N, it may overflow when N contains more than d - 1 keys. When this happens, split the overflown node N into a new sibling node N'. Handle two cases:

- **When N is a leaf node:** Let N store the d - 1 keys plus the newly inserted key (momentarily violating B+Tree properties). Next, retain the first ⌈(d - 1)/2⌉ keys and ⌈(d - 1)/2⌉ + 1 pointers in N, while transferring the remaining keys and pointers onto N'. The leaf level is a singly linked list of Nodes, so update the links to include N'. Promotion: Insert both the smallest search key in N' and a pointer to N' into the parent of N. This may cause an overflow at the parent, triggering the non-leaf case below.

- **When N is a non-leaf node:** The process is similar to splitting a leaf node, except during promotion the smallest search key in N' and a pointer to N' must be inserted into the parent of N, but this key is not retained in N'. Its immediate trailing pointer remains in N' as its first pointer at P₀. Remember to add a pointer to N' from the parent node.

In either case, if the parent of the overflown node N is `null` (meaning N used to be the root), create a new root node and insert the promoted key with N and N' as its left and right children.

4. Printing the Tree: When your application receives a print query `p`, it must write output to the given output file.

    - The first line of output should be `PRINTING TREE`.
    - Print all nodes of the tree in *level order*, which means printing the tree one level at a time, from top to bottom, left to right. Think of it like looking at the tree row by row.
    - Key values in a node are separated by commas, each level of the tree is printed on a separate line, and each node is terminated by the character `#`.
    - If using Java, here is an outline of a recursive helper method:
        ```java
        private void levelPrint(Queue<Node> levelNodes) {
            /*
            For each node in the queue:
                Print all its keys and terminate with `#`
                Put all its child nodes in a queue
            Call the method recursively using the this new node queue
            */
        }
        ```


5. Miscellanea. Other items worth considering:

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
7#
5# 8#
1,3# 5# 7# 8,12#

> i 9
SUCCESS

> s 56
56 NOT FOUND

> s 8
8 FOUND

> p
PRINTING TREE
7#
5# 8,9#
1,3# 5# 7# 8# 9,12#

> i 6
SUCCESS

> p
PRINTING TREE
7#
5# 8,9#
1,3# 5,6# 7# 8# 9,12#

> i 13
SUCCESS

> i 14
SUCCESS

> i 15
SUCCESS

> p
PRINTING TREE
9#
7# 13#
5# 8# 12# 14#
1,3# 5,6# 7# 8# 9# 12# 13# 14,15#
```

### Example (degree = 4)
Same insertion order, but final tree would be:
```txt
9# 
5,7# 13# 
1,3# 5,6# 7,8# 9,12# 13,14,15#
```

### Example (degree = 20)
Same insertion order, but final tree would be:
```txt
1,3,5,6,7,8,9,12,13,14,15#
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
