## CS 240 - Software Engineering

### In-Class Exercise: Embedded JavaScript (EJS)

Last lab, we got installed Express and wrote a web server to respond with a JSON object (basically, we wrote the Simone Web API). As discussed in lecture, besides JSON objects, web servers can also respond with the HTML+CSS+JS combo. This is, of course, what _most_ web servers are asked to do, so let's see how we'd go about serving up entire web pages.

#### Student Outcomes

- To learn how to develop on a remote machine.
- To learn how to develop and start an Express web server.
- To learn how to use the EJS view engine.

#### Part 1 - Getting Connected

- If you need a refresher on how to get connected to your remote server, please refer to the [previous lab](../lab.express).

- Once again, we'll begin by connecting to your remote server. Once connected, you should find the `expressLab` directory that we created for the previous lab. From the terminal, navigate inside that directory and install the `ejs` NPM package.

#### Part 2: Setting up a Simple Web Server

- Open up the main server file, `index.js`. You should already see the code we wrote for the previous lab, and that's okay. Our web server can continue to serve up the Simone JSON object given the `simone` route, and we'll just do everything in this lab under a new route.

- Inside, you'll see the express server being instantiated:

  ```js
  const express = require("express");
  const app = express();
  ```

  Below these lines, we need to set EJS to be our _view engine_:

  ```js
  // Use EJS for rendering HTML content
  app.set("view engine", "ejs");
  ```

- Heads up: I've read that you may have to re-install the Express package too, but I didn't need to. If you get "express not found" errors on your terminal in the next section, you'll know what to do.

#### Part 3: Add an EJS template

- Create a `views` directory inside the project. This is where you will be storing all your EJS templates.
