## Homework: Personal Homepage on github.io

In this assignment you'll create a personal homepage on Github's free web hosting service, github.io. The purpose of this assignment serves a dual purpose: it tries ensure that you understand the basics of HTML, CSS, and git. It also prepares you for the process of submitting future assignments in this course, as we will be working exclusively with git and github for the remainder of this course.

### Student Outcomes

- Use of HTML and CSS
- Exposure to various git operations and Github

### Program Requirements

For full credit, your project should observe the following requirements.

- By this time, you should already have an account on Github. If you still don't have an account, [create one now](https://github.com/). Sign in to github, and create a new repository called `gh-pages`. This is where the code for your homepage will live.

- If you're reading online tutorials on how to create a Github page, ignore all references to their markdown (.md) support. You are required to do this assignment using HTML and CSS that _you_ write.

- On your local machine, create a new project in VS Code and have git manage it. Rename your local branch from `master` to `main` for compability with Github.

- Working in VS Code, you are to create the following documents.

  - `index.html` file is your landing (home) page. You are required to upload and show an image of yourself, and write a little about who you are. You don't have to write a novel -- just a few paragraph synopsis will do.
  - `resume.html` file serves as your resume. You must link to it from your index page. To put yourself in the right mindset, suppose that you're in the early stages applying for an internship, job, grad school, etc. Place your name and contact info (you don't have to put your physical addresson there) in the heading. Following that, these sections must be included in this order:
    - Education: List your collegiate history here; your major and minor (if you've declared -- write "undeclared" if you haven't). You do not need to share your GPA.
    - Experience: List any relevant work history and/or leadership/volunteering experiences here. A title and a short one-paragraph synopsis per item will be sufficient per item.
    - Coursework: List your CS and CS-adjacent (such as Math) courses here. Use an unordered list containing course number and course title.
    - Technical Projects: List any significant technical projects here. A title and short one-paragraph synopsis per project will be sufficient. Since it's so early in your studies, you can just list some CS 1 or CS 2 projects here.
    - Affiliations: List any academic clubs you might be a part of, including athletics and Greek life.
  - `default.css` file should contain some CSS elements to style your homepage. You can style it however you like. In other words, I won't be grading on "good" design. Though, it should be emphasized that this page will be "live" and goal of this assignment is to introduce to the online world who you are as a software developer, so you might want to make sure it looks presentable. Inside this file, there should be:
    - At least 2 element selectors and 1 class selector
    - You must style your paragraphs to use helvetica point 10 font.
    - You must style your image to have a solid border, and set to the left of your self-summary.

- As you're editing your homepage, make commits often, as you will be graded on the frequency and quality of your commit history. Push your commits up to github to see the live page at [https://yourUserName.github.io](https://yourUserName.github.io).

### Optional Extensions

Have some free time? Add the following features:

- The real Simon(e) game speeds up the intervals between each button in higher rounds. You could implement
  increasingly faster reveals of the solution at the beginning of each round.

- The real Simon(e) also keeps a time limit that a user has between pressing each button, which
  makes the game even harder. To induce even more anxiety, I would recommend showing the countdown timer
  to the user, and resetting it after each correct button-press.

- Do a better job approaching the Axios errors. Currently, you're only asked to display the error on the
  console, but would a real player know what was happening? You could tell the user there was a problem
  starting up the game, or you could take the user back to the beginning state of the game.

### Grading

```
CS 240 Homework (Github Homepage)


----------------------------------------------------------
[20/20pts] AJAX

> Your program must use the provided Simone Web Service API
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




Total: 100 pt
```
