## CS 261 - Computer Science II

### Lab 11: Open Addressing

This week you'll implement the open-addressing version of a `HashMap` from scratch, and testing its performance, verifying that it does indeed support `O(1)`-time search/insert when space is effectively being traded for time. 

![](figures/Lab11OA.png)


#### Required Files
The following file(s) have been provided for this lab.
- [Lab_MapLab.zip](Lab_MapLab.zip)


#### Part I: Open Addressing

- Start by downloading the lab project, extract its contents, and open it in your editor. First, you'll find two interfaces. The `MapInt` interface, which extends the `MapPerf` interface, contains a reduced set of methods that must be implemented (same as we saw in lecture), and the `MapPerf` interface contains methods that will let us evaluate the performance of the HashMap. The `OpenMap` class implements `MapInt`, which by extension means that it must also implement `MapPerf`. There's also an Experiment class that we'll fill out later.

- Look through `OpenMap`, which is supposed to implement the open-addressing map that we've been studying in lecture. Focus on the inner class, `Entry<K,V>`, which encapsulates a key-value pair of type `K` and `V`, respectively. Recall that an inner class' fields are accessible anywhere from the outer class. Now notice that the inner class, as well as both of its instance variables are declared as `protected`. This implies that the inner class and its fields are also accessible from any subclass of `OpenMap` too. (Remember that for later.)

- Read through the two constructors. The default constructor instantiates the table array with the `INITIAL_CAPACITY`. The one-argument constructor allows the user to input the initial capacity. If the argument is not positive, throw an `IllegalArgumentException`.

- Now read through the `get()` method, which implements the linear probing algorithm we learned in class, and make sure you understand it fully. We hash the key and (possibly) perform a linear probe of the array for the key. Return the corresponding value when you find the key, or `null` if the key isn't found.

- Understanding how `get()` works, now implement the `put()` method. Recall from lecture that you need to do a couple of things:

  - Take the absolute value of the given `key`'s `hashCode()`, and `mod` it by the capacity of the hash table. This will tell you the location in the hash table where the key-value can be found or inserted.

  - Next, check to see if that location is empty. If it is, insert the key-value `Entry` there. If not, you need to perform linear probing. That is, increment the array index until (1) you examine a `null`, or (2) you find the given `key`. You may have to "wrap around" to the beginning of the hash table as you search. If (1), insert the `Entry`. If (2), replace the value with the given value, and return the old value. If the table is full, you need to throw an `IllegalArgumentException` (just for now).

- Now you can fill in the `size` and `toString` methods. The size is simply the number of stored entries. Note that toString() should return a string containing all the key-value entries stored in the map. Remember that maps do not guarantee a particular order, so don't be surprised if your output is in a different order than mine.

  ```java
  MapInt<String,Double> map = new OpenMap<>(6);
  map.put("David", 4.0);
  map.put("Aaron", 3.2);
  map.put("Brad", 3.9);
  map.put("Adam", 3.2);
  map.put("Tony", 3.0);
  map.put("Jan", 2.7);

  System.out.println(map.toString());
  > [Adam=3.2, Jan=2.7, Tony=3.0, Aaron=3.2, David=4.0, Brad=3.9]

  double x = map.get("Tony");
  double y = map.get("Aaron");
  System.out.println((x+y)/2.0);
  > 3.1

  map.put("Jan", 2.5);
  System.out.println(map.toString());
  > [Adam=3.2, Jan=2.5, Tony=3.0, Aaron=3.2, David=4.0, Brad=3.9]

  map.put("Tina", 4.0);
  > IllegalArgumentException: Hashtable is full!

  System.out.println(map.toString());
  > [Adam=3.2, Jan=2.5, Tony=3.0, Aaron=3.2, David=4.0, Brad=3.9]
  ```

#### Part II: Load Factor and Performance
- Now let us work on the `MapPerf` implementations. There's a `getLoadFactor()` method that is intended to return a value between 0 and 1, indicating the ratio between the number of stored entries and the capacity of the underlying array. A load factor of 0 means that the underlying array is completely empty, and 1 means it's totally full. Modify the appropriate methods in OpenMap so that the load factor returned correctly by `getLoadFactor()`.

  ```java
  // Just enough capacity to hold all entries..
  MapInt<String,Double> map = new OpenMap<>(6);
  map.put("David", 4.0);
  map.put("Aaron", 3.2);
  map.put("Brad", 3.9);
  System.out.println("Load factor: " + map.getLoadFactor());
  > Load factor: 0.5

  map.put("Adam", 3.2);
  System.out.println("Load factor: " + map.getLoadFactor());
  > Load factor: 0.6666666666666666

  map.put("Tony", 3.0);
  map.put("Jan", 2.7);
  System.out.println("Load factor: " + map.getLoadFactor());
  > Load factor: 1.0
  ```

- The `OpenMap` class also has methods that are supposed to track and report how many "probes" have been done. The `getProbes()` and `resetProbes()` methods are "provided," but the returned value won't be correct until you fix up the code a bit. We'll define a probe to be a loop iteration taken, as we're adding or looking up keys. In the illustration given in the Overview, it takes one probe to lookup "David." It would take 4 probes to lookup "Tony."

- Modify the `get()` and `put()` methods so that it counts the number of probes properly.

  ```java
  // Just enough capacity to hold all entries..
  MapInt<String,Double> map = new OpenMap<>(6);
  map.put("David", 4.0);
  map.put("Aaron", 3.2);
  map.put("Brad", 3.9);
  map.put("Adam", 3.2);
  map.put("Tony", 3.0);
  map.put("Jan", 2.7);
  System.out.println("Probes: " + map.getProbes() + "\n");
  > Probes: 17

  map.resetProbes();  // reset
  map.put("Adam", 4.0);
  System.out.println("Adam: " + map.get("Adam"));
  > Adam: 4.0

  System.out.println("Tony: " + map.get("Tony"));
  > Tony: 3.0

  System.out.println("Jan: " + map.get("Jan"));
  > Jan: 2.7

  System.out.println("Probes: " + map.getProbes() + "\n");
  > Probes: 16
  ```

  Do some more testing to verify that your load factor and probe-counting code works as expected. (You don't have to write test code — testing via the code pad or point-and-click is enough.)

#### Part III: Experimentation
Now it's time to see how well our implementations work! We're going to create instances of each kind of map, add a bunch of random entries, and then see how many probes it takes on average to look up data values in the maps. Professor Donald Knuth came up with a formula to predict the average number of probes needed per operation, as a function of load factor, $$L$$:

$$T = \frac{1}{2}\left(1 + \frac{1}{1-L}\right)$$

The table below is from the book, showing some predicted values of 
$$T$$ (ignore the right-hand section of this table).

![](figures/KnuthTable.png)

- Finish the definition of `fillAndTest()` in the `Experiment` class. It's supposed to take a `Map` object and a load factor, add random entries to the map until it reaches the desired load factor, then calculate and print the average number of probes required to do a bunch of get calls. We'll use maps that map strings to strings (both the key and value will be of type String) to keep things simple. You can therefore create random (key, value) pairs by calling my randomString to get a key and value.

  When you write the code to test the number of probes, start by resetting the probe counter, then doing at least 1000 get calls for random keys. After all of the gets, use 1 to see how many total probes were done, and use that to calculate and print an average value.

- In Experiment's main method I've left code that creates an OpenMap and passes it to fillAndTest. See how many probes are required for the maps for a load factor of .75.

  Are your probes a bit higher than the formula predicts? In all my few runs, my average probes were quite a bit higher than 2.5 (I'm getting values in the 10s). What could be going on? Could we have proven Donald Knuth, famous computer scientist, wrong? Lol no. Read on.

- The experiment you performed in the previous step used random strings as keys when doing the lookups. But wait!! The behavior might be different if we looked for keys that were actually in the map. Go back and add some additional code to `fillAndTest`: As you're adding random (key, value) pairs, keep track of the keys you use. (Store them in a list, for example, or a set.) After you've populated your map, reset the number of probes. Now retrieve all the keys you stored in the list, and report the average probes once you're done.

- Knuth's formulas predicted that an open-addressing implementation would require 2.5 probes per access, on average, if the load factor was 0.75. After a few runs, mine is reporting a much more expected 2.498 or so. Knuth's formula is on point!

- Run the experiment again with a load factor of, say, 0.9. My results show 5.368 when Knuth predicted 5.5. Wow! Almost spot on!

#### Part IV: Importance of Rehashing
The last experiment you ran showed that high load factors generally lead to worse performance. One question that remains is how we can keep our `HashMap` performing at a high level. If you guessed that we may need to occasionally increase the size of our underlying table, you guessed right!

- Open up a new class, called FastOpenMap, which extends OpenMap, so we don't have to rewrite all the methods. This version of the open-addressing HashMap will always keep your load factor at or lower than 0.5. You'll start by providing the same two constructors for this class. They should just call OpenMap's corresponding constructors.

- Write a private method called `rehash()`, accepting no inputs that first doubles the capacity of the hash table (array), then it re-inserts all the keys into this new table. (Since you're calling `OpenMap`'s get method to re-insert the keys into the new hash table, make sure you reset the size first!).

- Override the `put()` method so that every time after it inserts a new entry (ignore the case where it replaces an entry), it checks the current load factor, and if it's greater than `0.5`, it rehashes.

- If you did everything properly, your output should match mine below!
  
  ```java
  // Just enough capacity to hold all entries..
  MapInt<String,Double> map = new FastOpenMap<>(6);
  map.put("David", 4.0);
  map.put("Aaron", 3.2);
  map.put("Brad", 3.9);
  System.out.println("Load factor: " + map.getLoadFactor());
  > Load factor: 0.5

  // Should cause rehash
  map.put("Adam", 3.2);
  System.out.println("Load factor: " + map.getLoadFactor());
  > Load factor: 0.3333333333333333

  map.put("Tony", 3.0);
  map.put("Jan", 2.7);
  System.out.println("Load factor: " + map.getLoadFactor());
  > Load factor: 0.5

  map.resetProbes();  // reset
  map.put("Adam", 4.0);
  System.out.println("Adam: " + map.get("Adam"));
  > Adam: 4.0

  System.out.println("Tony: " + map.get("Tony"));
  > Tony: 3.0

  System.out.println("Jan: " + map.get("Jan"));
  > Jan: 2.7

  System.out.println("Probes: " + map.getProbes() + "\n");
  > Probes: 8
  ```

Notice that, due to rehashing, this sequence only takes 8 probes compared to 16 before on a fuller HashMap. The tradeoff between time and space is in full action. While the fast HashMap performs better, its hashtable will likely occupy a lot more space than the original HashMap.

#### Extension
- Implement the `V remove(K key)` method in the `OpenMap` class. It returns `null` if the key is not found, or it returns the removed value. Recall that, if the key is found, you cannot simply set the entry to `null` because it breaks the linear probing algorithm. Instead, you must keep the entry in place, but set the key of the entry to a sentinel value (you can use `null` as the value for the `key`!).

- After you've implemented and tested this, you have to go back and update the `put()` method. It needs to check for the sentinel `key` value, and if found, it can place the new entry there.

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

Based on a previous lab by Professor Henry Walker, Grinnell College.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
