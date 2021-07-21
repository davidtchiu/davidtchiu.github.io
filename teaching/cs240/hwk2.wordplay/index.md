## Homework: Wordplay

True Story: David was on a long flight home with his kids recently, and to kill time, he found himself playing a few games on the back of the seats. One among them, a game called _Wordplay_, was by far the most interesting and challenging. It also happens to make for a nice homework assignment. Here's how the game goes. The computer selects a random 6-letter word from the English dictionary. We'll call this the _root word_. The computer tells this word to the player, and it is the player's job to list as many other words as they can think of that uses a subset of the root word's letters. To reduce possibilities, the computer only considers words that are 3 or more letters in length.

To accomplish gameplay, the computer must run some internal computation to determine a list of all possible English words of lengths 3 to 6 that can be formed using those letters. For instance, suppose the selected 6-letter root word is "popped", then the following words can be formed using a subset of its letters: "popped" (by default), "pop", "ode", "dope", "pope", "pod", and "pep". To give you a hint on how many there are, the computer lists the possible words in hidden form (think Hangman). Every correct answer will reveal a hidden word, and it's up to the player to try to guess them all. For instance, after guessing a few on the root word "popped", it might display:

```
Letters: e o p d p p

- - -
- - -
o d e
- - -
d o p e
- - - -
- - - - - -
```

The available letters from the root word are scrambled and listed on top. The player can also re-scramble those letters if it helps their mental block. In the real game, there is a 3 minute timer before the game ends, but we'll ignore that for our implementation.

### Student Outcomes

- Use of JavaScript: Functions, arrays, objects, etc.

### Starter Code and Git

Starter code for this assignment is provided in the github repo [https://github.com/davidtchiu/cs240-hwk-wordplay](https://github.com/davidtchiu/cs240-hwk-wordplay). On my github repo, _fork_ this repository to your github account to obtain your own copy. Then from your local machine, open a terminal, navigate to your directory for this class, and _clone_ your copy down to your local working directory. After you've done this, you can work freely in VS Code. Remember to commit when appropriate, with substantive messages. Push your commits up to your github repo for submission.

### Working Solution

- [Click here](demo/) for my working solution of this App. This is how your solution should behave when it's done.

- [Click here](demo2/) for testing against my App. This version lets you enter the root word and it does not hide the possible English words, so you can see if your results actually match mine. Try root words like: "popped" or "joists".

### Program Requirements

For full credit, your project should observe the following requirements.

- The starter code provides you with a file containing the English dictionary formatted as an array. It's easy to include this in your code. Create an `index.html` file that first includes the dictionary file, and then includes your own `app.js` file.

- The game starts by randomly selecting a 6-letter root word from the English dictionary. This word is not revealed to the user.

- The bulk of your work is the next step. Given root word, you are then to compute all the valid English words using a subset of its letters. A root letter cannot be used more than once, unless it appears more than once in the root word. For instance, the root word "hello" can't generate the word "lee" because 'e' only appears once in "hello". However, "hell" can be generated because 'l' appears twice in "hello". There are multiple ways to tackle this problem, so I'll leave it up to you to solve this problem, but keep in mind that time-efficiency does matter -- we wouldn't want those pesky airplane passengers to lose their patience and exit the game before it even starts!

- Scramble the root word and output to the console so the player knows what they have to work with. Then display to the console the current list of guessed/unguessed words to the user, and get their inputs. Repeat until all words have been guessed, or if the user presses cancel. To prompt the user for an input, use:

  ```js
  let input = prompt(someString);
  ```

  To print and display a dialog window, use:

  ```js
  alert(someOtherString);
  ```

  To print something to the console window, use:

  ```js
  console.log(someOtherString);
  ```

  For the words that have not been guessed, hide them using a dashes (one dash per letter, like for Hangman). Print this output to the console.

- Your program outputs an appropriate message on a given input. These messages are appropriate on a given input word:

  - Alert to the user: `word` is not a valid English word (or too short/long)
  - Alert to the user: `word` has already been found
  - Alert to the user: Correct!

- The game ends on two conditions: if the user guesses all words, or if the user inputs null for a guess, which can be accomplished by pressing `Cancel` on the prompt.

  - Congratulate the user if they mananged to get all the words!
  - Otherwise, display the solution (all the valid words), as well as the number of words the player got right!

### Submission

Assignment submission is simple. Simply make sure that the latest code is committed and pushed into your forked `cs240-hwk-wordplay` on github (before the 12am deadline). Then send me the link to your repository on [canvas](https://canvas.pugetsound.edu).

### Grading

```
CS 240 Homework (Word Play)

----------------------------------------------------------
[40/40pts] Algorithms

> Given a string, your program can determine a complete set of
  of English words that use a subset of letters in that string.

> Entering "*" for a guess will shuffle the available letters.

----------------------------------------------------------
[10/10pts] Game Play

> Your program hides all words initially (except for the root
  word), revealing them only as the player answers correctly.

> Your program outputs an appropriate message on a given input.
  These messages are appropriate on a given input word:
    * $word$ is not a valid English word (or too short/long)
    * $word$ has already been found
    * Correct!

> Your program congratulates the user and terminates when
  they guess all words.

> Your program terminates and reveals the key if null is
  given as input.

> Your program also outputs the number answered right.

----------------------------------------------------------
[5/5pts] Implementation and Efficiency

> Your program should demonstrate reasonable runtime
  efficiency of all algorithms. Appropriate data structures
  should be used.

----------------------------------------------------------
[5/5pts] Comments

> You include sufficient block comments for each class and method.

> You include sufficient inline comments in your methods.


----------------------------------------------------------
[0pts] Misc. Deductions
> Late?

----------------------------------------------------------
Suggestions (No Deductions)


Total: 60 pt
```
