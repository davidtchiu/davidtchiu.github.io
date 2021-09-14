## CS 240 - Software Engineering

### In-Class Exercise: Git Basics

In this exercise, you will be trying out basic git operations, including staging, committing, and undoing.

#### Student Outcomes

- Starting a git project from scratch
- Staging and committing changes
- Undoing changes

#### Part 1 - Initializing and Committing

As I noted in lectures, if you were to `clone` an existing git project, it would download the project directories from the remote repo (e.g., github), and automatically run `git init` to track this project. In this lab I want to show you how to set up a git repo for an existing project directory on your local machine.

- From your file system, create a new directory called `zoo/`. This directory will store an inventory of animals in different sections of our zoo.

- Now open up that directory from VS Code, and open up the terminal to that project. (Ask for help if you don't remember how to open the integrated terminal). From the terminal, go ahead and initialize git in the zoo directory. The command-line syntax to initialize git is given below. **It's important** to make sure your current working directory is in `zoo/` before issuing this command.

  ```
  git init
  ```

- Create two empty files: `arctic.txt` and `jungle.txt`. (You can do this in VS Code, or with the `touch` command directly in the terminal). Let's now make our first commit to include all three files. Remember that committing is a 2-step process. You must first stage the files you want to include in your commit with:

  ```
  git add <file1> <file2> ...
  ```

  Or if you want to stage all file changes, like in this case, use:

  ```
  git add .
  ```

  After staging, we can now commit with the message `"created a new zoo with 3 sections"`

- In `arctic.txt`, add the following content:

```
2 narwhals
3 polar bears
1 snowy owls
4 walruses
```

Now open up jungle.txt and add:

```
10010 piranhas
1 tiger
3 wild boars
11 warthogs
1 panthers
112 tree frogs
1 python
```

Save both files.

- Make a commit with only the changes in arctic.txt. Use the message `"Added arctic animals"`

- Now make another commit with only the changes in jungle.txt. Use the message `"Added jungle animals"`

- Create a new file, aquarium.txt and add the following content:

```
1 pacific octopus
10 starfish
6 manta rays
```

- Now add "3 arctic foxes" to `arctic.txt`.

Now commit all changes with the message `"Added aquarium, and updated arctic and jungle's inventory"`

#### Part 2 - Undoing Changes at the File Level

Your manager noticed a clerical mistake and said that all animal quantity of "1" is actually supposed to be "10" in all the files. Open up each of the files and do a search-and-replace for the string "1" and replace it with "10" and save each file. Go ahead and do this now (yes, this is a bad idea). Your files should now have the contents below:

```
1000100 piranhas
10 tiger
3 wild boars
1010 warthogs
10 panthers
10102 tree frogs
10 pythons
```

```
3 arctic foxes
2 narwhals
3 polar bears
10 snowy owls
4 walruses
```

```
10 pacific octopus
100 starfish
6 manta rays
```

Right after you saved these files, you realize right away that the quantities for some of the other animals are now wrong! You don't remember what they used to be, and you don't want to make a mistake changing them back! It's a pain to have to re-open all the files to which you made changes. What if you missed one? (Use your imagination -- this could've been a lot worse in a real program where multiple classes are affected because you renamed a method or instance variable).

- Using the `git restore` command, restore these files to the state before you made these global replacements.

- Now, go through each file one-by-one, and make the quantity changes by hand. After you're done, save all files and commit with the message `"Replaced all quantities: 1-to-10."`

#### Part 3 - Undoing Changes at the Commit Level

- Due to a loss of funding, plans for the aquarium are being scrapped. Your manager asks you to remove aquarium.txt, but to distribute its contents into two new files: `wishlist.txt` and `seacritters.txt`.

- Place the octopus and the manta ray on the `wishlist.txt` file, and commit with the message `"octopus and ray now in wishlist"`

- If you made changes to `aquarium.txt` make sure you save the file now.

- Place the starfish on the seacritters.txt file, and commit with the message `"aquarium now reduced to small sea-critters section"`

- With its contents redistributed, you can now delete `aquarium.txt` using the proper git operation:

```
git rm <file>
```

Note that you could also simply drag the file into your trash bin and git will know what to do. Go ahead and commit with the message `"removed aquarium file."`

- Pretend that weeks go by, and you learn the good news that the aquarium has been reinstated!! To get the aquarium file back, you simply have to time travel to an earlier commit. List all your commits using:

```
git log --oneline
```

If you used descriptive commit messages, like we've been doing, it should easy to trace yourselves back to the right commit.

- But let's say you're not sure if you're looking at the right commit, and doing a hard reset to a commit is super dangerous. You can check out the files at different commit points by using:

```
git checkout <commit-id>
```

After you checkout, the file contents should update automatically in VS Code to its state in the given commit point! Once you find the most recent commit with the aquarium data, copy that commit id.

- Before we do a hard reset to this earlier commit, **we must return to our current commit point!** Check out the most recent commit now.

- Now, do a hard reset to the earlier commit point. Open the aquarium file to ensure that it exists, and you should no longer see the wishlist and seacritter files.
