## CS 161 - Intro to Computer Science

### Lab: Conway's Game of Life
Conway's Game of Life is not just a fun curiosity (although it may have started as one). It has applications in biology (modeling evolutionary and life processes), physics (Modeling Reaction-Diffusion Systems), gaming, and artificial intelligence.

In this lab, you will implement <a href="http://conwaylife.com/" target="_new">Conway's Game of Life</a>, a classic example of a cellular automaton. The Game of Life simulates a grid-based "universe" of cells, where each cell can be either alive or inactive. The state of each cell evolves over time based on a simple set of rules that consider the states of neighboring cells. Despite its simplicity, the Game of Life can produce surprisingly complex and beautiful patterns, making it a powerful tool for exploring how complexity can emerge from simple rules.

Fun fact: The flooring in our CS student lounge inspired by "glider patterns" that emerge from playing Game of Life using hexagonal tiles instead of square tiles.

<center><img border="1" src="figures/life1.png" width="200px" />&nbsp;&nbsp;
<img border="1" src="figures/life2.png" width="200px" />&nbsp;&nbsp;
<img border="1" src="figures/life3.png" width="200px" /></center>


#### Student Outcomes

- Experience with 2D arrays
- Practice with nested loops for traversing 2D arrays

#### Required Files

The following file(s) have been provided for this project.

- [Lab_Life.zip](Lab_Life.zip)


#### Part 1: Cell Class
The game is played on a square grid of cells. Each cell can either be alive or inactive, so this should be a very simple class to write.

- Create a new class `Cell`, which has a single instance variable that represents whether it is alive or inactive (a `boolean` ought to work).

- Write two constructors:

  - The default constructor has a 50%-50% chance of setting the state to inactive or alive. The `Random` class will again be useful here. It has a method called `nextBoolean()` that will randomly return `true` or `false` with 50%-50% probability.

  - A second constructor should allow users to input the initial value for the Cell's living state, instead of being randomly assigned.

  - Write a getter method named `isAlive()` that takes no inputs and returns the state of your `Cell`'s living status

  - You can test your code from within the Code Pad:

    ```java
    Cell c = new Cell();
    c.isAlive()
    > false  (boolean)  <--- your result may vary given 50-50 probability

    Cell anotherCell = new Cell(true);
    anotherCell.isAlive()
    > true  (boolean)
    ```

#### Part 2: Life Class
You will need to modify the `Life` class in order to make things work. Important: In our board, the axes are flipped: `x` refers to the vertical axis, and `y` refers to the horizontal axis. Please remember this!

- Instance Variables: Because the Game of Life needs store a grid of Cell objects, you will need a 2D array of `Cells`. You should name this instance variable `board`. To declare a 2D array as an instance variable, you can use:
  ```java
  private data-type[][] array-name;
  ```

- Constructor: Fill in the constructor, which inputs the height and width of the `board`. Instantiate your `board` using these row and column dimensions. Recall that, you can use the syntax:
  ```java
  array-name = new data-type[number-of-rows][number-of-columns];
  ```

- Complete the `isAlive()` method, which inputs the `x` and `y` coordinates of the board, and returns whether the `Cell` at that location is alive.

- Next, write the `fillRandom()` method. This method should fill your board with random `Cells` (that is randomly alive or inactive). Hey, your `new Cell()` default constructor already does that!

- Now you need to go back to modify your constructor to call this method after it instantiates the 2D array.

- Remember to test your code! When you try compiling... the compiler complains that `countLivingNeighbors()` isn't implemented. Just have it return 0 for now, and take it out after you've tested the following: Compile the classes, right-click on `LifeFrame` and instantiate a new object.

- In the window that appears, hit the "Random" button to create a random community of cells. You may hit the "Random" button repeatedly to test whether `fillRandom()` is generating random cell communities. None of the other buttons should be working at this point. Close the window and move on to the next step.


#### Part 3: Counting Neighbors
We will now implement the methods that determine if a `Cell` should live or die. To do this, one of the key methods we need is a way to count the number of live neighbors for any given `Cell` at position `x` and `y`.

1. Complete the `countLivingNeighbors()` method, which inputs a `Cell`'s position at x and y, and returns the its number of _living_ neighboring `Cell` objects. Previously, I had you simply return 0 in this method so that we could test the code. Remove that line of code. Now, for a `Cell` object at any location `board[x][y]`, its 8 neighboring `Cells` are located at positions:

    1. `board[x-1][y-1]`
    2. `board[x-1][y]`
    3. `board[x-1][y+1]`
    4. `board[x][y-1]`
    5. `board[x][y+1]`
    6. `board[x+1][y-1]`
    7. `board[x+1][y]`
    8. `board[x+1][y+1]`

    Recall that you can ask an individual Cell to see if it's alive or not, by using its `isAlive()` method. Therefore, you can write something like:

      ```java
      if (board[x-1][y-1].isAlive()) {
        // This one's alive!
      }
      ```

2. **But does a neighbor exist?** Depending on where the current cell is positioned, some of those 8 neighbors may be out of bounds. 

    - In the **left-hand figure** below, we're examining the number of neighbors for the `Cell` at `board[4][2]` (marked in blue). All eight of its neighbors are in range and therefore can be checked on whether they are living or dead. Tally up a count for each neighbor determined to be alive, and return the count.

    - In the **right-hand figure**, we see two cases where a `Cell` lies along one or two borders of the board. They therefore have fewer neighbors within range (the invalid `Cell` are greyed out). You  need to skip over the invalid neighbor when counting, because attempting to access its position would result in an IndexOutOfBounds exception and crash your program! **Put in the necessary tests to ensure that your `x` and `y` are indeed in range before trying to access that cell.**

    	  <img src="figures/lab10_fig1.png" width="650px"/>

3. Complete the `nextGeneration()` method that updates the state of the `board` by:

    - First, declare and instantiate a _local_ 2D array of Cells. It should be the same dimensions as your current `board` instance variable. You can call this temporary 2D array `nextGenBoard`.

    - Iterate (zig-zag) through all cells in `board`: for each individual Cell, call the `countLivingNeighbors()` method on it to determine whether the cell should be living or inactive in the "next generation." The rules are:

      - Any living cell with fewer than two living neighbors dies in the next generation (due to underpopulation).
      - Any living cell with more than three living neighbors dies in the next generation (due to overcrowding).
      - Any inactive cell with exactly three living neighbors becomes alive in the next generation (slightly awkward reproduction).
      - By inference, any living cell with exactly two or three living neighbors stays alive.

    - Record the new living status of this Cell by updating its corresponding position in `nextGenBoard`. To do this, you simply have to create a `new Cell(...)` assign it to the same `[x][y]` position in `nextGenBoard`.

    - When you're done, and the whole `nextGenBoard` has been populated, simply re-assign `board` to point to `nextGenBoard`. This replaces your board with the new one!

4. Remember to test your code! At this point, you should be able to hit the `"Next"` button to see a single generation (everytime you hit the `"Next"` button, your `nextGeneration()` method is called.) You could also use the "Start" and `"Stop"` buttons to run through generations continuously to see your board evolve! Try running the game multiple times (or hitting `"Random"` to reset the board). Does everything die out? Or does it keep going for a long time? Does it eventually settle into a steady state? Or alternate between two closely related states?

5. Although it's random, if your board always stabilizes after only 4-5 generations, something is probably a bit off in your `countLivingNeighbors()` code. Our results consistently either never converges to a steady state, or takes  dozens of generations to settle.

#### Part 4: Gliders, Spaceships, and Oscillators --- Oh my!
There are known patterns that produce interesting results over time. 

- Instead of calling `fillRandom()`, write a another method called `fillMyPattern()`, and only activate certain cells to your liking!

- For instance, one class of patterns you might try are known as [Gliders](https://en.wikipedia.org/wiki/Glider_(Conway%27s_Game_of_Life)), perpetually move across the screen.

- Explore [other patterns](https://conwaylife.appspot.com/library/), including spaceships, oscillators, and other gliders.

- **Resizing the grid:** You may want to make your board larger than 25x25 to really appreciate their lifecycle though!
  - To do this, change `DEFAULT_SIZE` constant in the Life class to something large, say 200.
  - Then, in LifePanel, change the `BOARD_WIDTH` and `BOARD_HEIGHT` instance variables to 200 as well.

#### Grading

```
This assignment will be graded out of 2 points, provided that:
- You were in attendance and on-time.
- Completed all required methods.
```


#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all files ending in  `.java` from your project folder.

- Click "Submit Assignment" again to upload it.

#### Credits

Written by David Chiu and Joel Ross.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
