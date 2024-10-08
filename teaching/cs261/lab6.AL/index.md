## CS 261 - Computer Science II

### Lab 6: Code-Along (MyArrayList)

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

#### Part 3: Generic Typing
Our `MyArrayList` can store unlimited `doubles`, but as we know, Arraylists are supposed to be able to store any type of object. In this section we refactor our `MyArrayList` to accept generic types.

- First Copy and paste the following code directly into your `MyList` interface file, replacing what used to be there. All references to `double` have been replaced with `E`.

  ```java
   /**
    * An abbreviated List<E> interface
    *
    * @author David
    * @version 10/6/19
    */
    public interface MyList<E> {
        /**
        * Adds an item to the tail of the list
        * 
        * @param item the item to add
        * @return always return true
        */
        boolean add(E item);

        /**
        * Adds item to specified location in the list
        * 
        * @param index the position in which to add the item
        * @param item a new item to add
        * @return always return true
        * @throws ArrayIndexOutOfBoundsException if the given index is illegal
        */
        boolean add(int index, E item);

        /**
        * Gets the item at the specified index
        * 
        * @param index the item's position
        * @return the item
        * @throws ArrayIndexOutOfBoundsException if the given index is illegal
        */
        E get(int index);

        /**
        * Sets the position at the specified index to a new item
        * 
        * @param index the item's position
        * @param new_item the new item
        * @return a reference to the displaced item
        * @throws ArrayIndexOutOfBoundsException if the given index is illegal
        */
        E set(int index, E new_item);

        /**
        * Removes an item at the given position
        * 
        * @param index the index to the item to remove
        * @return a reference to the item that was removed
        * @throws ArrayIndexOutOfBoundsException if the given index is illegal
        */
        E remove(int index);

        /**
        * Removes an item from the list.
        * 
        * @param item a reference to the item to remove
        * @return true if successful, and false otherwise
        */
        boolean remove(E item);

        /**
        * @return current size of the list
        */
        int size();

        /**
        * Searches the list for the specified item
        * @param item the item to look for
        * @return the index of the first occurrence if found, -1 otherwise
        */
        int indexOf(E item);

        /**
        * @return string representation of the array list
        */
        @Override
        String toString();
    }
  ```

- Back in your `MyArrayList` class, you need to update the class header so that it accepts a generic type. We will name this type `E`. If you need a reminder on this syntax, click on the button below.

  ```java
  public class MyArrayList<E> implements MyList<E> {
    // ...
  }
  ```

- Refactoring the Instance Variables: Anywhere you make a reference to the old type of the stored data (it was an array of doubles), you must now replace its declaration with `E`. You see, once the user fills in `E` with a concrete type (like `String`, `Double`, `Integer`, `BasicDie`, etc.), Java plugs that into where ever `E` appears. If you need a reminder, click on the button.

  ```java
  public class MyArrayList<E> implements MyList<E> {
    private E[] the_data;  // an array of generic objects

    /** other code omitted */
  }
  ```

- Refactoring the Constructor: The constructor gives initial values to instance variables. In our case the generic array needs to be instantiated as an array of `Objects`. But as we know, the array of `Object`s is hardly an array of type `E`, and therefore we must type cast. Notice that there is no diamond notation in the signature of the constructor.

  ```java
  public MyArrayList(int init_cap) {
    this.capacity = init_cap;
    this.the_data = (E[]) new Object[init_cap]; //initiates the array of Objects
                                           //the cast to E[] is required
  }
  ```

- Refactoring the Remaining Code: Go through the remaining methods and replace any reference to the old data type to the generic type, `E`. This includes all return types, local variables, and input parameters. Important: One thing you need to pay attention to is anywhere you're testing for equivalence using `==` or `!=`. You had to use these operators when comparing `doubles`, but now you're comparing objects, and `==` and `!=` are no longer useful. Use the `equals()` method instead.

- Important! Testing: After you're done making all the changes, let's make sure things are working as we'd expect. Here's an example showing my list holding Doubles and Strings.

  ```java
  MyArrayList<Double> list_of_nums = new MyArrayList<>();
  list_of_nums.add(3.14);
  list_of_nums.add(2.718);
  System.out.println(list_of_nums.toString());
  > [3.14, 2.718]

  MyArrayList<String> list_of_names = new MyArrayList<>();
  list_of_names.add("Julie");
  list_of_names.add("Jill");
  list_of_names.add("Janice");
  System.out.println(list_of_names.indexOf("Jill"));
  > 1
  ```

#### Part 4: On Your Own 

There are still three methods remaining that you need to implement on your own.

1. Start with the easy one, `indexOf(E item)`. It searches your underlying `data` array for the given element. If it's found, it returns the index at which it was first encountered. If not found, it returns -1. This is just linear search. Beware, the input `item` is an object of type E. Do not use `==` to compare two objects. Use its `.equals()` method instead.

2. Move on to the `E remove(int index)` method. This method needs to first check to see if the index is legal (throw that exception if it's not). You need to save the current element at the given index, because you have to return it later. After you've saved it, you need to shift every element over to the left of index by one spot. Don't forget to decrement `this.size`.

3. Finally, write the `boolean remove(E item)` method. This method searches for the given `item`, and if found, it removes it from the list. Hmm, you just wrote a method to search and a method to remove. I wonder if this can be done in a couple of lines? Return a true if found and removed, or false if not found.



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
