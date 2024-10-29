## CS 261 - Computer Science II

### Homework: A Min-Heap Based Priority Queue

## Overview
In this assignment, you will implement a  priority queue in Java called `MyPriorityQueue<E>`. This class will use a **min-heap** as its underlying data structure, where the smallest element always appears at the root of the heap. You will implement this priority queue by following the `PriorityQueueInt<E>` interface provided below. 

## Student Objectives
- Understand and implement the properties of a **min-heap**.
- Use **generic types** in Java.
- Implement a custom **priority queue** with standard queue operations.
- Practice **recursive methods** for percolation (moving elements up and down the heap).

## Class Requirements

1. **Interface**: You are given an interface `PriorityQueueInt<E>` that defines the essential methods of a priority queue. Your `MyPriorityQueue<E>` class must implement this interface. 

	```java
	public interface PriorityQueueInt<E> {
		boolean offer(E item);   // Adds an item to the queue.
		E poll();                // Removes and returns the smallest item.
		E peek();                // Returns the smallest item without removing it.
		E remove(E item);        // Removes a specified item from the queue.
		int size();              // Returns the number of items in the queue.
	}
	```

2. Create a new class called `MyPriorityQueue<E>` that will Use a min-heap as the data structure to store elements. Elements must be stored in an ArrayList<E> for dynamic resizing.

#### Program Defensively

You can't control how another user or program chooses to use your methods. For each method, think critically about all the things that could go wrong and cause an unintended result (e.g., a runtime error, infinite loop/recursion, etc.). Chances are, I'll be trying all kinds of inputs (negative values, zeroes, nulls, empty-strings, etc.) when I grade your program. The mark of a good programmer is one that can anticipate such scenarios ahead of time and ensure that their program handles all sorts of errors gracefully.

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 95pts.

[90pts] Each problem is worth 15 pts regardless of "spiciness" level.

[5pts] You provide Javadocs style comments for any new methods implemented. You include
sufficient inline comments to explain the logic of your methods.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu.
