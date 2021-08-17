## CS 240 - Software Engineering

### Homework: Simone the Memory Game

One of David's favorite childhood games was
a hand-held memory-skill game called Simon, shown below. The four buttons
light up (each making a corresponding sound) on press.
When the game starts up, it greets the player by playing out
a random pattern. A noticeable pause of a few seconds follows,
before the game officially starts.

**_Gameplay:_** Internally, Simon computes some random
predetermined random pattern of a fixed
length. The game starts by revealing to the player only the first
button in the pattern, and it's the player's job to repeat that
pattern. Pressing the wrong
button at any point ends the game, and the player loses.
Successfully mimicking the
pattern moves the player to the next "round," in which the current
pattern increases by a step. When a player successfully executes the last round
without ever making a mistake in previous rounds, they win!

  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1Yqj76Q4jJ4" title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this assignment, you will create a version of this game using
JavaScript called **_Simone_**, the copyright-friendlier(?) version of Simon.

#### Student Outcomes

- Exposure to OOP in JavaScript
- Use of asynchronous functions/methods
- Calling Web Service APIs with the Axios library
- More practice with manipulating DOM objects
- More practice using event listeners and callbacks

#### Starter Code and Git

Starter code for this assignment is provided in the github repo [https://github.com/davidtchiu/cs240-hwk-simone](https://github.com/davidtchiu/cs240-hwk-simone). On my github repo, _fork_ this repository to your github account to obtain your own copy. Then _clone_ your copy down to your local working directory. After you've done this, you can work freely in VS Code. Remember to commit when appropriate, with substantive messages.

<!--
#### Simone Web API

First, we describe the API to the Simone Web Service. The API is located here
`http://cs.pugetsound.edu/~dchiu/cs240/api/simone/`.
**_You must use_** this API to retrieve the random pattern sequences for an instance of your game.

Two commands are accepted, and all others will be rejected with an HTTP 400 error. The commands
must be issued as part of the URL's _query string_:

- `cmd`: The command we request the API to run. The two acceptable values are `start` and `getSolution`.
  Issuing the `start` command will request the "greeting sequence" that Simone will play when a player first starts the game.
  Issuing the `getSolution` command will request the "solution sequence" that the player must then repeat.
- `rounds`: If the `getSolution` command is issued, then the client is further required to request the length of the
  solution sequence, or in other words, the number of rounds to be played.

Successful executions of both commands will return a JSON object with the corresponding sequence. Test the API out using PostMan
or even within your browser. Try on different or invalid values to see what the API returns. -->

#### Working Solution

[Click here](demo/) for my working solution of this App.

#### Prelims: Writing the Simone Web API

Before you code up the Simone client, you need to consider some server-side support using Express. Create a new project called `simoneAPI/` and install `express` package using `node`. In an `index.js` file, add the necessary server logic to respond to the following queries:

- Two commands are accepted, and all others will be rejected with an HTTP 400 error. The commands
  must be issued as part of the URL's _query string_:

  - `cmd`: The command we request the API to run. The two acceptable values are `start` and `getSolution`.

    - If `cmd == start` the server should send the "greeting sequence" that Simone will play when a player first starts the game.
    - If `cmd == getSolution` the server should send the "solution sequence" that the player must then repeat.

  - `rounds`: If the `getSolution` command is issued, then the client is further required to request the length of the
    solution sequence, or in other words, the number of rounds to be played.

Successful executions of both commands will return a JSON object with the corresponding sequence. Test your API out using PostMan
or even within your browser. Try on different or invalid values to see what the API returns.

The server's return object should adhere to the following JSON formats. An example output is given below if the `start` command was issued.

```json
{
  "type": "start",
  "sequence": ["Y", "R", "Y", "B", "G", "B", "R", "R", "G", "B", "B", "Y"]
}
```

An example output is given below if `getSolution` was issued for 10 rounds.

```json
{
  "type": "solution",
  "key": ["B", "R", "B", "G", "Y", "R", "G", "Y", "Y", "R"]
}
```

In the returned sequence, B, R, G, Y correspond to Blue, Red, Green, and Yellow, respectively. You can play with my working web service (below) to see the expected behavior. Try it with different commands and combinations (for instance, what would happen if you asked for -2 rounds, or what if you misspelled a command or variable?)

- Get a Random Start Sequence: [http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start](http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start)
- Get a Solution of 10 Rounds: [http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=getSolution&rounds=10](http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=getSolution&rounds=10)

#### Program Requirements

For full credit, your project should observe the following requirements.

- Your program must use the Simone server-side API that you wrote in the previous section. However, if you're anxious to get the client up and running, you could always do your testing against my Simone API (`http://cs.pugetsound.edu/~dchiu/cs240/api/simone`) first.

- Use the file templates that were provided to you.
  **_DO NOT_** modify `index.html`. Take a look through `index.html`
  to find the structure and the IDs of the useful HTML elements. Also look through the CSS file
  to get a sense of what's been provided.

- To play sounds using JavaScript is quite simple: look into the [Audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) class.
  8 music files (wav) have been provided to you in the `sounds/` directory:

  - `green.wav`, `blue.wav`, `red.wav`, `yellow.wav` should be played when the corresponding button is pressed.
  - `nextRound.wav` should be played after the user successfully repeats the pattern for the current round. The exception is when the user wins the last round.
  - `wrong.wav` followed directly with `lose.wav` should be played at any point when the user presses the wrong button in the sequence.
  - `win.wav` should be played instead of `nextRound.wav` when the player correctly repeats the pattern in the final round.

- Your solution must be object-oriented, so before putting down code, read through the requirements and come up with a good class diagram. (For reference, my solution only required two classes, but yours may differ.) Your program should therefore demonstrate good modularity and abstraction.

- You must use the Simone Web Service API to get the welcome sequence and gameplay sequence. That is,
  do not generate a sequence on your own. Use the Axios library (already included in the index.html)
  for making requests. The user starts by typing in a number of rounds (the length of the sequence)
  they wish to play, and pressing on the "Play Simone!" button. Your game needs to make two consecutive
  API requests -- first for the greeting sequence, and then the solution sequence given the number of
  rounds that was input by the user. If things go wrong (for instance, the server is down, or your wifi
  is out), you should catch the error and report it on the console.

- **_Button presses:_** Be careful when implementing the event listeners for button presses. Go to my
  solution to make sure your interactions match mine. For instance, the sound does not register on a
  click-down, but the button does light up. What happens when you press down, but move your mouse
  off of the button? Notice that hovering your mouse over a button during gameplay also "highlights"
  its border.

- **_Transitions:_** As you play my version of the solution, you'll notice that some actions have delays. These
  are required:

  - There must be a <b>4 second</b> delay between the greeting sequence and the start of the first round.
  - When displaying the greeting sequence, there is a <b>120 ms</b> interval between each button.
  - When display the solution sequence at the beginning of each round, there is a <b>400 ms</b> interval between each button.
  - During gameplay, each correctly pressed button should cause your game to display a status message to the player `"So far so good! x more to go!"` where x is the number of remaining buttons to press in the round.
  - At the end of each successfully played round, you must display a status message to the player
    `"Good job! Prepare for next round."`, which is followed by an <b>800 ms</b> delay, followed by another status message `"Round x of y"`, which is again followed by an <b>800 ms</b> delay.

- If the player loses at any point by pressing the wrong button in a sequence, you must play the appropriate sound bites, and change the
  background to `hotpink`. Further, you must display the message `"Incorrect! You lose!"` to the user. Optionally, you could display the solution, but it makes it that much more frustrating (or fun) to the user that they might never know how they screwed up.

- If the player wins, you must play the appropriate sound bites, and change the
  background to `DeepSkyBlue`. Further, you must display the message `"Yay you win!"` to the user.

#### Optional Extensions

Have some free time? Add the following features:

- The real Simon(e) game speeds up the intervals between each button in higher rounds. You could implement
  increasingly faster reveals of the solution at the beginning of each round.

- The real Simon(e) also keeps a time limit that a user has between pressing each button, which
  makes the game even harder. To induce even more anxiety, I would recommend showing the countdown timer
  to the user, and resetting it after each correct button-press.

- Do a better job approaching the Axios errors. Currently, you're only asked to display the error on the
  console, but would a real player know what was happening? You could tell the user there was a problem
  starting up the game, or you could take the user back to the beginning state of the game.

#### Submission

Assignment submission is simple. Simply make sure that the latest code is committed and pushed into your forked repo on github (before the 12am deadline). Then send me the link to your repository on [canvas](https://canvas.pugetsound.edu).

### Grading

```
CS 240 Homework (Simone)


----------------------------------------------------------
[25/25pts] Server-side Simone API

> You must write the server-side API according to my specifications
using the Express package.

> All invalid commands or command combinations should result in an
HTTP 400 error.

----------------------------------------------------------
[15/15pts] Class design

> Your class design demonstrates good modularity and avoids
  code duplication. Use of inheritance if appropriate.


----------------------------------------------------------
[20/20pts] AJAX

> Your program must use your Simone Web Service API
  to retrieve a start sequence and solution-key sequence.

> Your program gracefully handles all asynchronous execution,
  including retrieval of HTTP responses from the API.

> Use of .then() chaining of promises or await is necessary.

----------------------------------------------------------
[50/50pts] Events and Transitions

> Pressing the "Play Simone!" button will create a new instance
  of the game with the user-specified number of rounds.

> Hovering over a button will cause its borders to be highlighted.
  Hovering off a button will return the button to original state.

> Pressing down on a button will cause it to be lit up. If mouse
  press is released while still hovering over a button, it should
  play the button's sound, return the color back to original, and
  register the user's selection as part of the pattern.

> When the user presses the wrong button, the appropriate wavs
  are played, background changes, and the game ends.

> When the user presses on the correct button, either:
    * The game ends if it was the last button of the last round.
    * Transitions to the next round if it was the last button of
      the current round.
    * Waits for the next button in the sequence to be pressed if
      still in the middle of the round.

> All transitions must "look and feel" according to program
  description.

----------------------------------------------------------
[10/10pts] Implementation and Efficiency

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




Total: 125 pt
```
