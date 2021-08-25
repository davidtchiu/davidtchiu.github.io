## CS 240 - Software Engineering

### In-Class Exercise: Unit Testing (Jasmine)

As your team continues to develop personas and scenarios by which they interact with your software, we can begin refining some user stories for development. This lab is meant to help you jumpstart the requirements needed for Project 1.

#### Student Outcomes

- To identify and write user stories
- To practice the agile design process: sprint planning

#### Starter Code and Git

Starter code for this assignment is provided in the github repo [https://github.com/davidtchiu/cs240-lab-testing](https://github.com/davidtchiu/cs240-lab-testing). On my github repo, _fork_ this repository to your github account to obtain your own copy. Then _clone_ your copy down to your local working directory. After you've done this, you can work freely in VS Code. Remember to commit when appropriate, with substantive messages.

#### Part 1 - Getting Started with Jasmine

- Open up the `cs240-lab-testing` project with VS Code. Check out the code (stored inside the `src/` directory) before doing anything. All that's there is an `app.js` file, and there are a couple functions that need to be tested, and a third one that needs to be implemented.

- Next, open up the integrated Terminal, because we will be using node to install jasmine. Type the following:

  ```
  npm install geckodriver
  npm install --save-dev jasmine-browser-runner
  npx jasmine-browser-runner init
  ```

  This will download and initialize Jasmine for this project.

- Next, run:

  ```
  npx jasmine-browser-runner serve
  ```

  This command shouldn't return on the terminal, as long as it's running.

- Now go to [http://localhost:8888/](http://localhost:8888/) in your browser. You should see a Jasmine page that says something to the order of `Incomplete: No specs found, , randomized with seed ...`. That's good news! Jasmine is running, but we just haven't written any tests (specs) yet!

#### Part 2 - Writing Tests
