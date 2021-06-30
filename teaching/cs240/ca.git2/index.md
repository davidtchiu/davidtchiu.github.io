## Code Along: Git Branching Exercise

In this exercise you will be trying out basic git operations, including staging, committing, and undoing.

### Student Outcomes

- Creating and switching between branches
- Merging branches and resolving conflicts
- Learning how to collaborate over github
- Generating pull requests (github)

### Part 1 - Working with Branches

We will continue our work on the Zoo project. Open this project in VS Code, and use the Terminal to navigate within the `zoo/` directory. Type `git status` in the terminal to make sure you're in the right place, and that git is properly tracking the Zoo project.

- Previously, we worked on inventories of different sections of the Zoo. In this exercise, we want to work on a "new feature," that is, an inventory of food options for zoo-goers. We'll start by creating a new branch called `food', but before we do, let's make sure we remember the syntax to list branches:

  ```
  git branch
  ```

  Unless you created branches previously, this commaand should show a single branch, still named `master` by default.

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
