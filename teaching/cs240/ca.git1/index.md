## Git Basics

In this exercise you will be trying out basic git operations, including staging, committing, and undoing.

### Student Outcomes

- Starting a git project from scratch
- Staging and committing changes
- Undoing changes

### Part 1 - Initializing and Committing

- From your file system, create a new directory called `zoo/`. This directory will store an inventory of animals in different sections of our zoo.

- Now open up that directory from VS Code, and open up the Terminal to that project. (Ask for help if you don't remember how to open the integrated terminal). From the terminal, go ahead and initialize git in the zoo directory. The command-line syntax to initialize git is given below. **It's important** to make sureyour current working directory is in `zoo/` before issuing this command.

```
git init
```

- Create and save three empty files: `arctic.txt` and `jungle.txt`. Let's now make our first commit to include all three files. Remember that committing is a 2-step process. You must first stage the files you want to include in your commit with:
  `git add file1 file2 ...`
  Or, if you want to stage all file changes, like in this case, use:
  `git add .`
  After staging, we can now commit with the message `"created a new zoo with 3 sections"`
