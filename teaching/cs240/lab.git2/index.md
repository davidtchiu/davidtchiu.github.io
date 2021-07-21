## Code Along: Git Branching Exercise

In this exercise you will be trying out basic git operations, including staging, committing, and undoing.

### Student Outcomes

- Creating and switching between branches
- Merging branches and resolving conflicts

### Part 1 - Working with Branches

We will continue our work on the Zoo project. Open this project in VS Code, and use the Terminal to navigate within the `zoo/` directory. Type `git status` in the terminal to make sure you're in the right place, and that git is properly tracking the Zoo project.

- Previously, we worked on inventories of different sections of the Zoo. In this exercise, we want to work on a "new feature," that is, an inventory of food options for zoo-goers. We'll start by creating a new branch called `food`, but before we do, list all branches on the terminal:

  ```
  git branch
  ```

  Unless you created branches previously (you weren't really supposed to), this command should show a single branch, named `master` by default.

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

- At this moment, your manager interrupts you to add two new animals to the `arctic.txt` inventory ASAP! In a panic, **you forget to switch back** to the `main` branch.... so still under the `food` branch, open up the `arctic.txt` file and add _6 penguins_ and _14 yaks_ to the file in alphabetical order. Your file should now contain:

  ```
  2 narwhals
  6 penguins
  3 polar bears
  10 snowy owl
  4 walruses
  14 yaks
  ```

- Go ahead and commit using the message `"added yaks and penguins to the arctic"`.

- Now create another file, `kiosk.txt` and paste the following inside:

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

- Your manager interrupts you _again_ to add _5 baby seals_ to `arctic.txt`. This time you remember to switch over to the `main` branch, so go ahead and do so before continuing. Open `arctic.txt` back up and add _5 baby seals_ in alphabetical order. You should notice that the penguins and yaks aren't in this version of the file, because they were added under a different branch. Don't worry, we'll merge them together in the next section.

- Commit again with the message `"added 5 baby seals to arctic.txt"`.

### Part 2 - Merging Branches and Resolving Conflicts

- Remember that the `main` branch generally represents the most stable and visible version of your code, so merging feature branches back into it is a pretty big deal. It usually undergoes rounds of review and testing. Let's see what can go wrong.

- Your manager reviewed your work in the food branch, and tells you it looks good. They suggest that it's time to merge that branch in with the `main` branch. Before doing anything, verify that you're still on the `main` branch. If not, then switch over to the `main` branch now. Make sure there are no outstanding commits. If there are staged files or pending saves, go ahead save and commit now.

- From the terminal, merge the `food` branch to `main`. You may recall that the syntax to do so is:

  ```
  git merge <incoming-branch>
  ```

  You're currently on `main`, so the incoming branch in this case would be `food`. When you try this, git detects a merge conflict for `arctic.txt`, and won't let you merge until the conflict is resolved. There are now two competing versions of it: the version on the `food` branch has yaks and penguins, and the version on the `main` branch has baby seals. We want all three lines.

- To resolve the conflict, git should've caused VS Code to pop up with `arctic.txt` already open. You should find the **conflict markers**, which looks like this:

  ```
  <<<<<<<
  local stuff
  =======
  incoming stuff
  >>>>>>>
  ```

  Go ahead and make the changes directly, keeping all three animals. Remove the `>>>>>>`, `<<<<<<<`, `=======` markers.
  Save the file, and commit again to merge the branches.

<!-- - Having no more need for the `food` branch, go ahead and remove it. List your branches to verify that only the `main` branch exists. -->

- Verify that the contents of `arctic.txt.`, `kiosk.txt`, and `cafeteria.txt` are as you'd expect under the `main` branch:

  - In `arctic.txt`:
    ```
    3 arctic foxes
    5 baby seals
    2 narwhals
    6 penguins
    3 polar bears
    10 snowy owls
    4 walruses
    14 yaks
    ```
  - In `kiosk.txt`:

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

  - In `cafeteria.txt`:

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

### Part 3: Taking It to Github

Happy with your contributions, your manager wants you to put this project on Github for backing up your code.

- Sign in to github now, and create a new public repo called `cs240-zoolab`.

- After you've created this repo, go back on your local machine and save any unsaved file, and commit any unstaged changes now. (You shouldn't have any at this point, but maybe you added some more foods and animals in the meantime).

- Before you can upload your local repository to github, you need to first add the remote:

  ```
  git remote add <remote-name> <endpoint-url>
  ```

  Generally, the remote name is `origin` and the endpoint should be your new github project's URL.

- After you've done this, type the following to verify that the remote has been added for push and fetch operations:

  ```
  git remote -v
  ```

  If you see two lines for `origin`, then we should be set up!

- Now `push` your `main` branch to the remote `main` branch:

  ```
  git push <remote-name> <remote-repo-branch>
  ```

  You may be asked to provide your github password.

- Wait a few moments and refresh the github repo to verify that the three files are there. Let's suppose you also want to push the `food` branch up. To do this, use the following syntax:

  ```
  git push <remote-name> <local-branch>:<remote-repo-branch>
  ```

  For consistency, we'll name the remote repo branch `food` as well.

- Verify that the `food` branch is also up.
