## CS 240 - Software Engineering

### In-Class Exercise: DOM and Event Handling (~50min)

In this exercise you will get some practice working with DOM elements. This exercise assumes that you are familiar with using objects and callbacks.

#### Student Outcomes

- Learn how to query for certain DOM elements
- Learn how to manage event listeners
- Access the `event` object in the event-handler callback

#### Solution/Demo

- [Link to Demo](demo/)

#### Instructions

- Create a new project directory in VS Code, called `cs240-lab-js3-evt`. You don't have to manage it using git for this lab, but there's also nothing stopping you!

- Create an `app.css` file, and paste the following:

  ```css
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #eeeeee;
  }
  ```

- Next, create an `index.html` file. In it, simply paste the following:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="app.css" />
      <title>Grocery List</title>
    </head>
    <body>
      <h1>Grocery List</h1>
      <input type="text" name="itemName" placeholder="Ex: whiskey" />
      <ul id="list"></ul>
      <script src="app.js"></script>
    </body>
  </html>
  ```

- You do not need to make changes to the `index.html` file, but study both files you just pasted to get a sense of what's in there. In the HTML file, there is an input field, but curiously, no "submit" button. There's also an un-ordered list `<ul>` that doesn't have any items in it, so it's not showing up on the page. Right-click on `index.html` on the left-hand panel, and choose `Open with Live Server`.

- Try typing a grocery item in the input box and hitting enter. You should see no effect, but what _should_ happen is that the item you just input should show up in the ordered list. To do that, we need to listen for events to occur in the input field!

- Create a new file, `app.js`.

  - Write some code to attach an event handler to the `<input>` field, but recall that you have to capture (or _select_) it first.

  - After the input field has been selected, we can attach an event listener as follows:

    ```javascript
    node.addEventListener("eventType", function (evt) {
      // code goes here when eventName fires!
      // << your code goes here>>
    });
    ```

  where `node` is the variable name that references your input field. Find the appropriate `eventType` we should be listening to on the cheatsheet I handed out (also linked at the top of this page). Finally, write the code for the unnamed callback function directly in the space I provided in the comments above. Here's what you'll need to do:

  - Check the `evt` event object that is passed automatically by JavaScript to see what key was pressed. You're interested seeing if the user pressed the "Enter" key.

  - If it's not the enter key, do nothing, but if it is, you need to take the contents in the input field and transfer it to the end of the un-ordered list! The HTML you want JS to generate is

    ```html
    <li>
      <span>item name</span>
    </li>
    ```

    That means you'll need to create a new `li` node, and a new `span` node using

    ```js
    let node = document.createElement("elementName");
    ```

    Put the string in between the `span` tags by storing to its `.innerHTML` property. The `span` tag should then be appended to the `li` node, which in turn is appended to the unordered list.

  - If you coded this right, then the input item should show up in the list every time you press enter. Test this now, and do not move on until finished.

#### Part 2: Crossing out

- Adding things to the grocery list is a great reminder of what you'll need, but you should also have a way to <del>cross things out</del> that you've put in your shopping cart!

- Modify your event listener code so that it also adds a checkbox to the left of the item name. In HTML, a checkbox is formed using

  ```html
  <input type="checkbox" name="varName" />
  ```

  so to create above, you'll need to use `document.createElement(..)` again to create an `input` element. Store the string `"checkbox"` to its `type` attribute. You should also give it a good unique variable name, as this will be important later on. Under your list-item node, _insert_ this new `<input>` node _before_ the `<span>` node. If you did this correctly, you should see something like the following:
  <div>
  <ul>
    <li><input type="checkbox" name="ex"/><span>Grapes</span>
  </ul>
  </div>

- Finally, we want it so that, when the checkbox next to the item is selected, the item is <span style="color: 'grey';"> greyed out</span> and <span style="text-decoration: line-through">crossed out</a>!
  - This sounds like a good opportunity to add a new `.class` of style in your CSS file. Let's call `.itemChecked`. Go ahead and set the `color` property to `grey` and set `text-decoration` to `line-through`.
  - Next, you need to write another event listener to listen to _all_ the checkboxes. But how do you select only the checkboxes and not the text input box? They're both `<input>` elements. You need to remember that `document.querySelector(pattern)` accept a CSS selector pattern. Therefore, you need to figure out the CSS pattern to select all the `input`s that have a `type` attribute value of `checkbox`.
  - Once selected, for each checkbox you need to add an event listener to it.
    - These event listeners are checking for the `"change"` event type. When it fires, you should tell the associated list item (which is the checkbox's sibling) add the `.itemChecked` style to its CSS class list -- this is stored as the node's `classList` property.
    - If this works, you should now be seeing something like:
      <div>
      <ul>
        <li><input type="checkbox" checked="checked" name="ex"/><span style="text-decoration: line-through; color: gray">Grapes</span>
      </ul>
      </div>

#### Part 3: Ordering and Managing Duplicates

- One rather annoying issue is that duplicates are allowed. It was suggested to you that, when the list gets longer, it's harder to know that a grocery item is already on the list, because it's not sorted in any way. Modify your "add to list" event listener so that it inserts the items to the list in alphabetical order. (Note that you don't need to `sort()` anything.)

- Still, people make mistakes. Write the necessary code to first test if the input item is already on the list. Don't add it to the list if that's the case. (Or even better, you can store and increment the quantity of that item.)
