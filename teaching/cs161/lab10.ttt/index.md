## CS 161 - Intro to Computer Science

### Lab 10: TicTacToe



#### Student Outcomes

- Experience with 2D arrays
- Practice with nested loops for traversing 2D arrays


#### TTT Class
Create a new class called `TTT`. As we know, TicTacToe is played on a 3 by 3 grid of 'x' and 'o'. 

- Declare an instance variable that is a 2D array of `char`s (each cell will eventually hold either `'x'`, `'o'`, or `' '`)

- Write the default constructor. It instantiates the 2D array. Then, you must traverse the entire 2D array and assign a `' '` (space) in every cell. Use a nested loop to do this.

- Write the `public boolean makeMove(int row, int col, char player)` to attempt filling out the spot at the given `[row][col]` with the `player`'s marker. Return `true` if move was made, and return `false` if position was already taken.

- Write the `public void printBoard()` method that prints the current TicTacToe board. You need to traverse the board, row by row as we usually do. For each row, build up a string to print out. If you come across an `'x'` or `'o'`, concatenate it to the string. If you come across a space, then concatenate a dash `-` character. After you've built up a row, print it out.
  
  ```java
  TTT board = new TTT();
  board.makeMove(1,1,'x');
  board.makeMove(0,0,'o');
  board.makeMove(1,1,'o');  /* no change (taken) */
  board.printBoard();
  o _ _  
  _ x _
  _ _ _
  ```

- Write the `public boolean autoMove(char player)`: if center or corners are free, take those first. If not, take first free space from top-left to bottom-right.
  
  ```java
  TTT board = new TTT();
  board.makeMove(2,1,'x');
  board.makeMove(0,0,'o');
  board.makeMove(0,1,'x');
  board.printBoard();
  o x _
  _ _ _
  _ x _

  board.autoMove('o'); /* auto move for player o (take center) */
  board.printBoard();
  o x _
  _ o _
  _ x _
  
  board.autoMove('x'); /* auto move for player x (take top-right corner) */
  board.printBoard();
  o x x
  _ o _
  _ x _
  ```

- Write a method `public boolean isWinner(char player)` that returns true if the given player has won. You need to write loops to check whether the given `player` occupies any row, col, or either diagonal.

#### Extras
Complete the following for extra practice!

- (Medium) Write `public int countMoves(char player)` that counts the number of moes the given player has made to the board.

- (Mild) Write `public boolean catsTail()` that returns if the board is full and there are no winners.

- (Mild) Write `public boolean gameOver()` that returns if there's a winner OR if the board is full.

- (Medium) Write `public char catchCheater()` that determines if cheating occurred. Cheating must have occurred if there are two more symbols for a player compared to the other player's symbol. Return the player's symbol that cheated, or a space `' '` if cheating was not detected.

- (Medium-Spicy) Write `public void scramble()` that scrambles the board randomly. To do this, traverse all spots on the board and randomly swap places with another spot!

- (Spicy) Write `public void defensiveMove(char player)` that plays in the first spot it finds that defends against a 3 in-a-row by the opposing player.


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

Written by David Chiu. Updated 2026.

#### Lab Attendance Policies

Attendance is required for lab. Unexcused absence = no credit even if you turned in the lab. Unexcused tardiness = half credit.
