## CS 161 - Intro to Computer Science

### Lab 4: The Guessing Game

In this lab, you will create the "number guessing game" --- the computer will pick a random number between 1 and 50 (inclusive), and then the player will try to guess it in as few guesses as possible.

The player will enter guesses through the BlueJ interface, calling a `guess()` method and providing a parameter. The program will let the player know how close their guess is (if they are "hot" or "cold", and whether their guess was too high or too low). When finished, your program's output might look something like:

Note that I called a `guess()` method multiple times with parameters 25, -10, 15, 30, 40, 38, and 37. If you have BlueJ's Terminal set to "Clear screen at method call", then you will only see one of these at a time. Uncheck that option to be able to see your game history!

```
Welcome to the Guessing Game!
I picked a number between 1 and 50. Try and guess!

You guessed 25.
Your guess is cold.
It's higher.

you guessed -10.
Error: Your guess -10 is outside the legal range of 1 and 50!

You guessed 15.
Your guess is icy freezing miserable cold.
It's higher.

You guessed 30.
Your guess is warm.
It's higher.

You guessed 40.
Your guess is extremely warm.
It's lower.

You guessed 38.
Your guess is scalding hot!
It's lower.

You guessed 37.
Congratulations, you figured it out in 7 guesses!
Meh, I've seen better.
```

#### Student Outcomes

- To practice with writing conditional statements
- More practice with class writing

<!-- 
#### Working with Partners (Please Read)

You are required to work _together_ on labs. As I mentioned the first day of class, some of you may have had some prior programming experience, and this lab may come more naturally for you. Please be humble and be supportive to one another, and don't leave your partner behind. Labs are _very_ low-stakes, and you'll get full credit for being here, working through it, and being a good citizen. We'll be around to help.

Here are your assigned partners for today's lab.

```
[Jones, B, Murayama, E]
[Steller, L, Strash, K]
[Beardsley, M, Miller, D]
[Roppolo, G, Wissing, A, Rodriguez, C]
[Culpepper, A, Grey, E]
[Brown, A, Camblin, F]
[Jones, S, Murphy, C]
``` -->

#### Part 1: The Bare-Bones Guessing Game

- Create a new project in BlueJ using the `Project > New Project` menu option. Inside, you will create just one Java class: `GuessingGame`. We'll start by building a "barebones" game, and eventually build it out to be more robust. Have fun!

- **What instance variables do you need?** You'll actually need several to complete this program, but I'll get you started on one obvious one: your game needs to remember a `secret number`, which is just an integer.

- **Two Constructors**:

  - Write a *default* constructor that simply picks a random integer between 1 and 50, and remembers it as its secret number.

    - You may want to return to your notes to remind yourself how to generate random values.

  - Write another constructor that inputs the upper-bound for the secret number. It then picks a random number between 1 and that upper-bound (inclusively). So if the user starts a game with 200 input as the upper-bound, the game would randomly choose a secret number between 1 and 200.

    - You need to practice defensive programming here. If the user enters a value less than 1. Think about what should you do instead to start the game.

  - Your constructors should also greet the player with a message and inform them of the range of numbers from which to guess. See the interaction in the beginning of this lab for a sample greeting.

- **Making a Guess** You will need to provide a method for users to make a guess. Write a `guess()` method that takes a number as input. It does not need to `return` a value. When the user calls `guess()`, it first compares the input parameter with the stored *secret number*.
  - If the guess is correct, you should print out a message congratulating the user, and let them know how many guesses it took them. (Again, see the sample output at the top of this page to understand the format of your printed message).
  - Otherwise, the user's guess is wrong.
    - In this case, you need to tell the user whether their guess needs to be **"higher"** or **"lower"**.
    - However, if the user guessed something outside of the valid range, you should print an error message instead of telling them whether they need to go higher or lower.
    
  - Double-check that your program works by playing games multiple times. To make testing easier, remember that you can inspect the game object to see what the *secret number* actually is. If there is ever any behavior that seems wrong, go back to your code and try to figure out what caused that!

      - Don't be afraid to go in your code to print out the values of variables when figuring out what went wrong! That's common practice while "debugging."

#### Part 2: Upgrading the Game

With a bare-bones version of  `GuessingGame` written, you should now include the following functionalities.

- **Upgrade #1 - Congratulate (or Mock) the Player:** After the user *correctly* guesses the answer, we want the game to say something depending on the number of guesses that it took them. (Now your game needs to remember how many guesses it's taken the player!) Take a look at the table below. Print out the appropriate message when the guess is correct.

  | Guesses    | Message to Print                 |
  | ---------- | -------------------------------- |
  | 1          | "All luck!"                      |
  | 2 to 4     | "Okay, that was amazing!"        |
  | 5 to 6     | "Not bad!"                       |
  | 7          | "Meh, I've seen better."    |
  | 8 to 9     | "Bruh."                 |
  | 10 or more | "Delete your account."            |

  It may be helpful to get out a piece of paper and draw the **flowchart** before you start writing the code.

- **Upgrade #2 - Game Over:** Once the user correctly guesses the secret number, currently your game still allows more guesses to be made (go ahead try it). Update your code so that, when more guesses are made after the game ends, you should print out something like the following instead:

  ```
  Game Over: You won!
  You guessed that the secret number was 37 in 5 tries.
  ```

  Hint: Your game *now* needs to further know whether the player has _already_ won... sounds like an instance variable that stores a `boolean` value could be of use? Remember that boolean variables can only store either `true` or `false`.

- **Upgrade #3 - Hot or Cold:** This next one is a little more challenging, but it will force you to work with `else if` statements. It may be helpful to get out a piece of paper and draw the **flowchart** before you start writing the code.

  When a user guesses wrong, currently your code only tells them to go higher or lower. In addition to this, we now want to print out a message corresponding to how *close* their guess was. Print a different message depending on its _distance_ from the secret number.

    - For example, if the secret number is 35, and the user guesses either 34 or 36, then both guesses should print "scalding hot." It’s inconvenient to check whether the guess is exactly +1 above or -1 below the secret number. What we’re really interested in is the **absolute distance** between the guess and the secret number. For example:

      - If the guess is 34 or 36 and the secret number is 35, the absolute distance is 1.
      - If the guess is 41 or 29 and the secret number is 35, the absolute distance is 6.

    - It seems like you would just want the *absolute value* of the distance, but how?  What if you wrote a new method, called `public int abs(int x)`, to `return` the **absolute value** of an integer `x`?

    | Absolute Distance from Secret | Message to Print              |
    | -------------------- | ----------------------------- |
    | Within 1             | "scalding hot"                |
    | Within 2             | "extremely warm"              |
    | Within 3             | "very warm"                   |
    | Within 5             | "warm"                        |
    | Within 8             | "cold"                        |
    | Within 13            | "very cold"                   |
    | Within 20            | "extremely cold"              |
    | More than 20 away    | "icy freezing miserably cold" |


#### Optional Extensions

- If you're done and want a bit more challenge, do this upgrade. It would be really nice if we could limit the numbers of guesses the player gets to make each time they play. Before you dive into the code, think critically about what needs to happen inside your `guess(..)` method. Here are its specifications:

  - You are going to want to another constructor that allows you to initialize the game with a parameter that inputs the limit on the number of guesses. Store this limit. Make sure you update the existing constructor to give initialize limit with a value. Worth considering: What value should you set this limit if there is no limit?

  - If the limit has been reached without the user successfully guessing, then the game is over, and you need to flag it as such (the work you did previously in `Upgrade #2` may come in handy).

  - However, this breaks the code you wrote for `Upgrade #1`. That is, when the user tries to `guess(..) `again, the message it prints assumes they got it right! This is no longer correct. If the user met the limit, and still didn't get it right, you should instead print:

    ```
    Game Over: You Lost!
    You've reached the limit of 25 tries.
    The secret number was 46.
    You have reached the guess limit!
    ```

- Food for Thought: By now, you've probably played the game several times to test your program. Have you figured out a guessing strategy based on the "higher" or "lower" information that minimizes the number of guesses you need to find the secret number? (Foreshadowing: Could such a strategy be useful in other ways...?)

#### Grading

```
This assignment will be graded out of 2 points, provided:

- You were in attendance and on-time.
- You got through part 1 at the minimum, and made good progress on part 2.
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
