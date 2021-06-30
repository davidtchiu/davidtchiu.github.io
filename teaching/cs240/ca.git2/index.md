## Code Along: Git Branching Exercise

In this exercise you will be trying out basic git operations, including staging, committing, and undoing.

### Student Outcomes

- Creating and switching between branches
- Merging branches and resolving conflicts
- Learning how to collaborate over github
- Generating pull requests (github)

### Part 1 - Working with Branches

We will continue our work on the Zoo project. Open this project in VS Code, and use the Terminal to navigate within the `zoo/` directory. Type `git status` in the terminal to make sure you're in the right place, and that git is properly tracking the Zoo project.

- Previously, we worked on inventories of different sections of the Zoo. In this exercise, we want to work on a "new feature," that is, an inventory of food options for zoo-goers. We'll start by creating a new branch called `food`, but before we do, list all branches on the terminal. If you forget the syntax, refer to my notes. Unless you created branches previously (you weren't really supposed to), this command should show a single branch, still named `master` by default.

- For reasons discussed in lecture, it is considered good practice to rename the default branch to `main`. Let's do this now.

  ```
  git branch -M <new-branch-name>
  ```

  List branches again to verify that the `master` branch has been renamed to `main`.

- Okay, to organize our next set of feature development, create a new branch called `food`. Now, it's super important to remember that just because you created a branch doesn't mean you're working under it yet! Switch to this new branch, and list branches again to make sure the asterisk (\*) is now tracking `food`.

- Now under the `food` branch, create a new file called `cafeteria.txt`. Copy and paste the following food items in the file:

  ```
  Pizza
        _....._
      _.:`.--|--.`:._
    .: .'\o  | o /'. '.
  // '.  \ o|  /  o '.\
  //'._o'. \ |o/ o_.-'o\\
  || o '-.'.\|/.-' o   ||
  ||--o--o-- |

  Strawberries
          /> //  __
      ___/ \// _/ /
    ,' , \_/ \/ _/__
  /    _/ |--\  `  `~,
  ' , ,/  /`\ / `  `   `,
  |    |  |  \> `  `  ` |
  |  ,  \/ ' '    `  `  /
  `,   '  '    ' `  '  /
    \ `      '  ' ,  ,'
    \ ` ` '    ,  ,/
      `,  `  '  , ,'
        \ `  ,   /
        `~----~'

    Popscicle
            _.-.
          ,'/ //\
          /// // /)
        /// // //|
        /// // ///
      /// // ///
      (`: // ///
      `;`: ///
      / /:`:/
      / /  `'
    / /
    (_/
  ```

- Make a commit with the message `"added cafeteria.txt with popsicles, strawberries, and pizza"`.

- Your manager rudely interrupts you to add two new animals to the `arctic.txt` inventory ASAP! In a panic, **you forget to switch back** to the `main` branch.... so still under the `food` branch, open up the `arctic.txt` file and add _6 penguins_ and _14 yaks_ to the file in alphabetical order. Your file should now contain:

  ```
  2 narwhals
  6 penguins
  3 polar bears
  10 snowy owl
  4 walruses
  14 yaks
  ```

- Go ahead and commit using the message `"added yaks and penguins to the arctic"`.

- Getting back to our food feature. Now create another file, `kiosk.txt` and paste the following inside:

  ```
  Banana
  //\
  V  \
  \  \_
  \,'.`-.
   |\ `. `.
   ( \  `. `-.                        _,.-:\
    \ \   `.  `-._             __..--' ,-';/
     \ `.   `-.   `-..___..---'   _.--' ,'/
      `. `.    `-._        __..--'    ,' /
        `. `-_     ``--..''       _.-' ,'
          `-_ `-.___        __,--'   ,'
             `-.__  `----"""    __.-'
                `--..____..--'

  Milk
      _________
     | _______ |
    / \         \
   /___\_________\
   |   | \       |
   |   |  \      |
   |   |   \     |
   |   | M  \    |
   |   |     \   |
   |   |\  I  \  |
   |   | \     \ |
   |   |  \  L  \|
   |   |   \     |
   |   |    \  K |
   |   |     \   |
   |   |      \  |
   |___|_______\_|
  ```

- Commit with the message `"Added kiosk.txt, initially milk and bananas"`.

- Your manager interrupts _again (ughhhhh! Am I right?)_ to get you to add _5 baby seals_ to `arctic.txt`. This time you remember to switch over to the `main` branch, so go ahead and do so before continuing. Open `arctic.txt` back up add _5 baby seals_ in alphabetical order. You should notice that the penguins and yaks aren't in this version of the file, because they were added under a different branch. Don't worry, we'll merge them together in the next section.

- Commit again with the message `"added 5 baby seals to arctic.txt"`.

### Part 2 - Merging and Resolving Conflicts
