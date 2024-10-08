## CS 261 - Computer Science II

### Lab 6: Code-Along Lab (ArrayList)

In this lab, you will begin implementing the `MyArrayList` class, which is an analog to the *real* `ArrayList` class provided by Java. As I mentioned, the real `ArrayList` must implement Java's `List` interface, which is massive. We'll implement the `MyList` interface, which is just a subset `List` methods. You'll also learn how to deal with generic typing (i.e., "diamond notation"). 


#### Objectives
- To understand the internal implementation of the `ArrayList` class.

#### Required Files
The following file(s) have been provided for this lab.
- [Lab_MyArrayList.zip](Lab_MyArrayList.zip)


#### Part 1: "Code Along" with David
0. Download the project file and extract it into somewhere convenient. Open the project up in your preferred IDE, and you shall find a `MyList` interface and a class, `MyArrayList` that we've started implementing in class.

1. Open up the `MyList` interface first, and scan through the array list methods you must implement today. One thing to pay attention to is that our `ArrayList` currently only stores `double`s, which we'll fix later. Now open up the `MyArrayList` class to find a barebones version that needs filled in.

2. The array list  needs to track four `private` instance variables:
  - `data` - an array of doubles (`double[]`).
  - `capacity` - an integer that represents the underlying `data` array's length.
  - `size` - an integer that represents the number of elements currently stored in the underlying `data` array.
  - `INITIAL_CAPACITY` - a constant (`final`) integer assigned to `10` by default.

3. Next, we will write two constructors to initialize those instance variables:
  - A 1-argument constructor inputs an integer *initial capacity* for the `data` array. If the initial capacity is given to be 0 or negative, then it is reassigned to `INITIAL_CAPACITY`. Instantiate the `data` array, and set `size` to 0.
  - The default constructor instantiates the `data` array to be of length `INITIAL_CAPACITY`.
  - Test both constructors to ensure that they're working.

4. **Getters and Setters**: Let's start with the easy ones. Write the following methods:
  - `get(int index)` simply returns the element at the given index.
  - `set(int index, double replacement)` replaces the element at the given index with `replacement`. It also returns the old value at the index.
  - In both methods, you need to be sure that the given index is valid before you can do anything! Regardless of `capacity`, if the `size` of the list is $$n$$, but you want to access position $$n$$ or greater, you have to disallow that! The same goes for indices that are given to be lower than 0.
  - So, what should you do in those cases? It's customary to "raise" or "throw" an exception, which is just another name for "error." In our case, we'll throw  an `ArrayIndexOutOfBoundsException`.

    ```java
    // The given index is illegal! Throw an exception to alert the user!
    if (index < 0 || index >= size) {
      throw new ArrayIndexOutOfBoundsException(index);
    }
    ```

  - We don't have to know what that block means yet, but anytime in your code, if a given index is invalid, use this code to alert users!

#### Code Along Part 2: Reallocation and the Add Methods

1. Before we can write the "add" methods, recall that the underlying array has a maximum of `capacity` spots available, but what can we do if we need more spots? 

2. When more room is needed, you need to do several things. First, create a new array that's twice the current `capacity`. Second, you need to copy over the existing elements to the new array in their existing positions. Finally, you need to assign this new bigger array as the new `data` field (which will in turn cause Java to forget about the old array -- but that's okay because we copied over all the elements.)

3. Java calls this method `reallocate()`. Implement `reallocate()` now. It's not a part of the `MyList` public interface, so make it `private`. 

4. Next, work on the 2-argument add method. First, check to see if the given index is valid, and throw an exception if it's not. Unlike before, a valid index is in the range between 0 and `this.size`. This is to allow new elements be added right-adjacent to the current tail. If the current `capacity` is full, then we need to call `reallocate()` to get more space. Next, you have to shift all elements both at and to the right of the given index by 1 space. Finally, you can insert the given element into the indexed spot. Don't forget to increment `this.size`.

5. Finally, add the 1-argument add method. Because the 1-argument add method simply adds the given element to a specific index, we can just call the 2-argument method (that's why we wrote it first!). This should just require one line.


#### Part 3: On Your Own 

There are still three methods remaining that you need to implement on your own.

1. Start with the easy one, `indexOf(double item)`. It searches your underlying `data` array for the given element. If it's found, it returns the index at which it was first encountered. If not found, it returns -1. This is just linear search.

2. Move on to the `double remove(int index)` method. This method needs to first check to see if the index is legal (throw that exception if it's not). You need to save the current element at the given index, because you have to return it later. After you've saved it, you need to shift every element over to the left of index by one spot. Don't forget to decrement `this.size`.

3. Finally, write the `boolean remove(double item)` method. This method searches for the given `item`, and if found, it removes it from the list. Hmm, you just wrote a method to search and a method to remove. I wonder if this can be done in a couple of lines? Return a true if found and removed, or false if not found.

#### Grading

```
This assignment will be graded out of 2 points, provided that:

- You were in attendance and on-time.
- Your classes are fully implemented.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu. 2023.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
