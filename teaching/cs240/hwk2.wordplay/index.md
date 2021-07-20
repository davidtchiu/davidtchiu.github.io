## Homework: Wordplay

David was on a long flight recently, and to kill time he found himself playing a few games on the back of the seats. Among them, a game called _Wordplay_ was by far the most interesting and it just so happens to make for a nice homework assignment.

Here's how it goes. The computer selects a random 6-letter word from the English dictionary. We'll call this the _root word_. The computer tells this word to the player, and it is the player's job to list as many words as they can think of that uses a subset of the root word's letters.

To accomplish gameplay, the computer must run some internal computation to determine a list of all possible English words of lengths 3 to 6 that can be formed using those letters. For instance, suppose the selected 6-letter root word is "popped", then the following words can be formed using a subset of its letters: "popped" (by default), "pop", "ode", "dope", "pope", "pep", ... and so on. To give you a hint on how many there are, the computer lists the possible words in hidden form (think Hangman). Every correct answer will reveal a hidden word, and it's up to the player to try to guess them all.

### Student Outcomes

- Use of JavaScript: Functions, arrays, objects, etc.

### Starter Code and Git

Starter code for this assignment is provided in the github repo [https://github.com/davidtchiu/cs240-hwk-wordplay](https://github.com/davidtchiu/cs240-hwk-wordplay). On my github repo, _fork_ this repository to your github account to obtain your own copy. Then from your local machine, open a terminal, navigate to your directory for this class, and _clone_ your copy down to your local working directory. After you've done this, you can work freely in VS Code. Remember to commit when appropriate, with substantive messages. Push your commits up to your github repo for submission.

### Working Solution

[Click here](demo/) for my working solution of this App.

### Program Requirements

For full credit, your project should observe the following requirements.

- The starter code provides you with a file containing the English dictionary formatted as an array. It's easy to include this in your code. Create an `index.html` file that first includes the dictionary file, and then includes your own `app.js` file.

- The game starts by randomly selecting a 6-letter root word from the English dictionary.

- The bulk of your work is the next step. Given root word, you are then to compute all the valid English words using a subset of its letters. A root letter cannot be used more than once, unless it appears more than once in the root word. For instance, the root word "hello" can't generate the word "lee" because 'e' only appears once in "hello". However, "hell" can be generated because 'l' appears twice in "hello". There are multiple ways to tackle this problem, so I'll leave it up to you to solve this problem, but keep in mind that time-efficiency does matter -- we wouldn't want those pesky airplane passengers to lose their patience and exit the game before it even starts!

- Display the current list of guessed/unguessed words to the user, and get their inputs. Repeat until all words have been guessed, or if the user presses cancel. To prompt the user for an input, use:

  ```js
  let input = prompt(someString);
  ```

  And to print and display a dialog window, use:

  ```js
  alert(someOtherString);
  ```

  For the words that have not been guessed, hide them using a dashes (one dash per letter, like for Hangman).

- On end-game, display the solution (all the valid words), as well as the number of words the player got right!

### Submission

Assignment submission is simple. Simply make sure that the latest code is committed and pushed into your forked `cs240-hwk-wordplay` on github (before the 12am deadline). Then send me the link to your repository on [canvas](https://canvas.pugetsound.edu).

### Grading

```
CS 240 Homework (Scoreboard Operator)


----------------------------------------------------------
[20/20pts] HTML + CSS

> The design and feel of your Scoreboard app looks exactly as
  is specified in the description. The exception is if you
  added a few more buttons if you completed some of the
  "extra" items.

----------------------------------------------------------
[30/30pts] DOM and Events

> Your program queries for, and reads in all "inning" and "runs"
  boxes as DOM nodes, storing them in an appropriate data
  structure for easy access.

> Pressing + or - will make the appropriate scoring changes
  in the box currently specified by the "Inning" and "Who" values.
  Additionally, the total runs in the "R" column should reflect
  the new scores.

> Ensure that runs never go negative.

> The music buttons play sound effects and updates images as
  as described.

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
