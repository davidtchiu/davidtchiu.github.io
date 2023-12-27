## CS 475 - Operating Systems

### Hwk: Suped-up `ls`


#### Related Reading

- [Dive into Systems Chapter 2.4-2.7](https://diveintosystems.org/book/C2-C_depth/dynamic_memory.html)


#### Student Outcomes

- To understand the motivation for dynamic memory allocation.
- To become familiar with memory management functions:`malloc()`, `realloc()`, and `free()`.
- To learn how to debug heap memory access using valgrind.
- To make system calls.


#### Assignment
As you know,  the `ls` UNIX command lists all files and directories in a given directory. Your task is to write a recursive version of the `ls` command so that it not only lists all files/directories in the current working directory, but also traverses all subdirectories. On top of the recursive descent into subdirectories, your version of `ls` can also perform a search.

###### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- **This step is imperative:** Login to github, and go here: [https://github.com/davidtchiu/cs475-hwk3-ls2](https://github.com/davidtchiu/cs475-hwk3-ls2). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From your VS Code remote development environment, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```

- This should download the starter code in a directory called `cs475-hwk3-ls2`. After you've done this, you can work freely from VS Code or any other editor. You should see these files inside your new homework directory:

###### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `ls2Sol`. 


###### Detailed Instructions

1. Your program should accept up to two command-line arguments:
    ```bash
    $ ./ls2 <path> [exact-match-pattern]
    ```
   Only the `<path>` argument is required, and your program should re-prompt the command if no arguments are given, or if more than 2 are given. Here's an example:
    ```bash
    $ ./ls2 
    Usage: ./ls2 <path> [exact-match-pattern]

    $ ./ls2 . hello.c hello.o
    Usage: ./ls2 <path> [exact-match-pattern]
    ```

   You need to look into how to handle command-line arguments in `main(int argc, char *argv[])`.
    - `int argc` gives a count of the number of terms given on the command line (including `./ls2` as a term)
    - `char *argv[]` is an array of strings, with `argv[i]` being the ith term given on the command line

2. Your program will run in one of *two modes*:

    - **Mode 1:** The first mode runs when the user only passes the `path`. Your program should attempt to open the directory given by `path` and recursively show all files' name and size (in bytes). You do not need to worry about displaying anything other than regular files and directories (ignore anything that isn't a directory or a regular file).

      Here's me running `ls2` on the `.git/logs` directory, which is inside my current working directory:
      ```bash
      $ ./ls2 .git/logs
      HEAD (691 bytes)
      refs/ (directory)
          heads/ (directory)
              main (503 bytes)
          remotes/ (directory)
              origin/ (directory)
                  main (154 bytes)
      ```

      Here's me running `ls2` just on my current working directory `.`:
      ```bash
      $ ./ls2 .
      main.c (387 bytes)
      Makefile (182 bytes)
      ls2.h (173 bytes)
      .git/ (directory)
          description (73 bytes)
          HEAD (21 bytes)
          COMMIT_EDITMSG (6 bytes)
          hooks/ (directory)
              prepare-commit-msg.sample (1492 bytes)
              update.sample (3650 bytes)
              fsmonitor-watchman.sample (4655 bytes)
              pre-applypatch.sample (424 bytes)
              pre-rebase.sample (4898 bytes)
              pre-commit.sample (1643 bytes)
              pre-push.sample (1374 bytes)
              commit-msg.sample (896 bytes)
              applypatch-msg.sample (478 bytes)
              pre-merge-commit.sample (416 bytes)
              pre-receive.sample (544 bytes)
              push-to-checkout.sample (2783 bytes)
              post-update.sample (189 bytes)
          info/ (directory)
              exclude (240 bytes)
          objects/ (directory)
              ad/ (directory)
                  927129ffd942e63b356db9b811e0444a84b11f (223 bytes)
              15/ (directory)
                  6fe5a856f0ed83ddae54f2d4f235b03d07f21f (258 bytes)
              d5/ (directory)
                  626a4f84a73f58f39d63e07443a50b69041570 (111 bytes)
              24/ (directory)
                  537710b1c7599c061928d6f89bbf938b7c7d8a (590 bytes)
              2c/ (directory)
                  048c6621060d8242659e595220f8ec9da228f4 (4250 bytes)
              0b/ (directory)
                  738a7918e62ea8552a7997abd81c831304b846 (35 bytes)
              13/ (directory)
                  d87d094f4135b4c4199a9dfd901439288492c2 (155 bytes)
              cc/ (directory)
                  c1cb19b88b7163654e765a8bf552c6274b6b0c (53 bytes)
              f7/ (directory)
                  d900f3c17317cb30529d11dde2ed673eb29f69 (130 bytes)
              7b/ (directory)
                  2d469eb73ea748e5dacd44cda5071144fa6c7b (143 bytes)
              85/ (directory)
                  6bfad918cfaabf4db52fd50240934cd31e9b28 (121 bytes)
              16/ (directory)
                  3eff427411413e9b4b83a19dc20bb87d9f4814 (246 bytes)
          config (269 bytes)
          logs/ (directory)
              HEAD (691 bytes)
              refs/ (directory)
                  heads/ (directory)
                      main (503 bytes)
                  remotes/ (directory)
                      origin/ (directory)
                          main (300 bytes)
          refs/ (directory)
              heads/ (directory)
                  main (41 bytes)
              remotes/ (directory)
                  origin/ (directory)
                      main (41 bytes)
          index (641 bytes)
      stack.h (438 bytes)
      ls2.c (183 bytes)
      stack.c (1428 bytes)
      ls2Sol (16792 bytes)
      README.md (34 bytes)
      ```
    
    - **Mode 2:** The second mode runs when the user passes both `path` and the `exact-match-pattern` arguments. When this is the case, your program should only show files with names exactly matching the given `exact-match-pattern`. It should only include all the directories (and subdirectories) that contain files with names matching the given argument and ignore all the others in the print-out. The program should avoid showing the directory chain if the given pattern is not found in its subdirectory. Here's an example of me looking for any files or directories matching `main`.

      ```bash
      $ ./ls2 . main
      .git/ (directory)
          logs/ (directory)
              refs/ (directory)
                  heads/ (directory)
                      main (503 bytes)
                  remotes/ (directory)
                      origin/ (directory)
                          main (154 bytes)
          refs/ (directory)
              heads/ (directory)
                  main (41 bytes)
              remotes/ (directory)
                  origin/ (directory)
                      main (41 bytes)     
      ```

      In this run, I only want to search for the directories/files named `main` from within the `.git/refs` directory:
      ```bash
      ./ls2 .git/refs main
      heads/ (directory)
          main (41 bytes)
      remotes/ (directory)
          origin/ (directory)
              main (41 bytes)
      ```

3. **What's the stack library for?** You'll notice that I prepared you with the `stack.h` and `stack.c` files, which is a fully implemented stack. You should study `stack.c` to see how I use `malloc()` in various spots and later `free()` up the allocated memory.
    - When designing this program, you'll notice that you can't simply print every file or directory as soon as you encounter them. You can get away with this approach in Mode 1, but Mode 2 requires that you keep a collection of directories and files you actually want to print at the end.
    - You can use the given stack to store the set of files/directories that you wish to print.

4. **UNIX system calls**

    - To open up directories and check what's inside, you will want to check out the following system calls through `#include <unistd.h>`:`opendir()`, `readdir()`, `closedir()`.
      - When you read the contents of a directory, ignore any references to `.` and `..`
      - Why? Remember that `.` means the current directory, and `..` means the parent directory. These references exist in *every* directory you open. So if you recursively open those up, then you'll just end up in an infinite recursion/loop!

    - You should be able to traverse the contents of a directory using `readdir()`. Once you have a name of a file or directory, you need to to test if it's actually a regular file? A link? A directory? To get information on the file (how big is it?) you'll want to look into using the important `lstat(..)` system call provided in `#include <sys/stat.h>` 
      - [sys/stat.h](https://pubs.opengroup.org/onlinepubs/007908799/xsh/sysstat.h.html)
      - Note that the second parameter of `lstat(..)` accepts an *output parameter* (remember what those are from the previous assignment?), where it will store a `struct` with the file/directory's information.
      - One of the fields in the output struct is a `mode_t st_mode`. You can run the following tests on this field to check if the file that you `lstat(..)`ed is a *regular file* or a *directory* using `S_ISREG(mode_t m)` and `S_ISDIR(mode_t m)` functions respectively. As mentioned earlier, you should ignore all other types of files.

5. Other header files you may want to look into before getting started on this assignment:
    - [dirent.h](https://pubs.opengroup.org/onlinepubs/7908799/xsh/dirent.h.html) for `DIR` type for representing a directory stream. This is to be used in conjunction with `opendir()` system call.
    - [sys/types.h](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/sys/types.h.html) for `mode_t`.

6.  **Output formatting:** The names of *directories* must be followed with the suffix `"/ (directory)"`. Names of *regular files* must be followed by the suffix `"(nnn bytes)"` where `nnn` is the number of bytes occupied by that file. If a file or directory is found within a subdirectory, its name must be indented by four spaces to signify that it is enclosed within the above directory.
    - Luckily, the listing does not needed to sorted in any particular order.

7. Although the `.git/` directory exists (as it did in my sample output), it still may be wise to create your own "test-dummy" directory structure so that you test your program. 



#### Grading

```
This assignment will be graded out of 50 points:
[5pt] Your program recursively descends down all subdirectories.
[10pt] Implementation of Mode 1.
[25pt] Implementation of Mode 2.
[3pt] Your output of files and directories conforms to the specified format.
[2pt] Your program properly resolves command line arguments.
[5pt] Your program is free of memory leaks and dangling pointers.
```

#### Submitting Your Assignment

1. Commit and push your code to your Github repo. Make sure your repo is public.

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.


#### Credits

Written by David Chiu. 2022.
