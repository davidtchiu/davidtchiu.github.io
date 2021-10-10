## CS 240 - Software Engineering

### In-Class Exercise: DOM and Event Handling (~65min)

In this exercise you will get some practice working with DOM elements. This exercise assumes that you are familiar with using objects and callbacks.

#### Student Outcomes

- Learn how to dispatch and consume Promises
- Learn the newer JS syntax for dealing with Promises: async/await

#### Solution/Demo

- [Link to Demo](demo/)

#### Overview: Why Promises?

As I mentioned in lecture, browsers can't afford to execute code sequentially and wait for requests to finish, especially when Web requests may take seconds or even longer to fulfill.

It's probably still not very clear at this moment why we're spending time handling asynchronous execution and Promises, because the examples we've seen have been contrived. The fact is, we can't really talk about one of the important functionalities, _handling web requests_, without understanding how Promises really work.

#### Instructions

- Open a terminal and navigate to your directory for this course. Then clone a copy of the starter files:

```
git clone https://github.com/davidtchiu/cs240-lab-promise
```

- Note that do not need to make changes to the `index.html` or the CSS file for this lab, but study the files you just pasted to get a sense of what's in there.

- The `app.js` file has an object literal that maps different emotions to paths locating the corresponding emoji images.

- The `app.js` file also has a `fakeMoodRequest()` function that's being called. Let's unpack what this method does:

  - Because we haven't learned how to make a real Web request, we'll have to **fake** it for now.
  - We generate a random `delay` of 0 to 3 seconds to simulate a random network delay.
  - After the delay, there is a 20% chance that the request will fail and `"unavailable"` will be returned.
  - When the request succeeds, then one of `"hangry", "sad", "shocked", "happy", "scared"` will be returned.

- Notice that in the middle of the `app.js` file, you'll see `fakeMoodRequest()` being called and its results printed to the console.

#### Part 1: Promisifying the Fake Request

- Let's go ahead and try this code out. Right-click on `index.html` on the left-hand panel, and choose `Open with Live Server`. Remember to open the browser's inspector to see the output.... _Hmm, it's coming up undefined_.

  - **Important:** You should take a moment to understand why `mood` was undefined when printed. Because the fake request could take a while to resolve, JavaScript decided it wasn't going to wait around for it. By the time it prints, `mood` simply hasn't gotten a value back from the fake request yet! This would happen with a real web request, so let's see how to fix this problem.

- We have to set `fakeMoodRequest()` up so that the calling thread will wait for it to complete; and so that it will produce a value to be consumed by the calling thread.

- **Data-Producing Side** We will start "promisifying" `fakeMoodRequest()`. To do this, we need to wrap the code currently done inside a `Promise` object and return it. Here's the syntax to create and return a `Promise`.

  ```js
  return new Promise((resolve, reject) => {
    // stuff that you want to run in another thread
    // remember to call resolve("str") on success and
    // call reject("str") on failure.
  });
  ```

  In the syntax block given above, the `Promise` constructor inputs a single callback function, which itself accepts two callback functions named `resolve` and `reject` -- the good news is that we don't need to define those. JavaScript supplies those on its own.

- Refactor the `fakeMoodRequest()` method now using the syntax shown above. Once you think it's working, the output should now show a `Promise` instead of `undefined` as before. Good, the data-producing and signaling side is done.

- **Data-Consuming Side** The next piece is now to define data-consuming side of the `Promise`. This can be done using the following syntax:

  ```js
  fakeMoodRequest()
    .then(function (resultFromThread) {
      // code to run when thread resolved()
    });
    .catch(function (errorFromThread) {
      // code to run when thread rejected()
    })
  ```

  For our purpose, if the request was successful, then `resultFromThread` would hold an emotion `"hangry", "sad", "shocked", "happy", "scared"`. Look in the emojiMap to display the corresponding image. If the request failed, then you need to set the `.innerHTML` to `index.html`'s `<div>` element to say `"unavailable"`.

- If everything's working, you should now see [my demo's](demo/) behavior. Congrats you just set up and handled a Promise!

#### Part 2: `async` and `await`
