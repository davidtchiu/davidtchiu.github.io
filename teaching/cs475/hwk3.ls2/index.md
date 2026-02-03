## CS 475 - Operating Systems

### Hwk 3: ls2 -  A Suped-Up `ls` Command
As you already know,  the `ls` UNIX command lists all files and directories in a given directory. The default mode of `ls` is to only list the top-level contents in the given path. It does not, unless instructed to, automatically descend into all the subdirectories to print out a file system tree.

Your task is to write a suped-up variant of the `ls` command so that it not only lists all files/directories in the current working directory, but also traverses all subdirectories. On top of the recursive descent into subdirectories, your version of `ls` must also also be able to perform a file name search.

#### Related Reading

- [Dive into Systems Chapter 2.4-2.7](https://diveintosystems.org/book/C2-C_depth/dynamic_memory.html)


#### Student Outcomes

- To become familiar with memory management functions.
- More work with strings.
- To make system calls.
- To learn how to debug heap memory access using valgrind.

#### Preamble: Debugging Memory Errors with Valgrind (Read This!)
Coming off the heels of the last C tutorial on memory management, we how important it is to avoid memory leaks in your code. Recall that "memory leaks" occur when you malloc memory at runtime, but fail to reclaim it when you're done. As your program continues to run, that heap memory is allocated, but unreachable, causing your footprint to increase. 

Correct memory management is tricky business, so we'll need help. Valgrind is a debugging tool to help us find memory access errors that you allocated on the heap using `malloc`. To use Valgrind, you just have to compile your C code using the `-g` flag (don't worry, the provided `Makefile` already builds this flag in). Then "run" your program like this:

```bash
$ valgrind --leak-check=full -s <your-executable-file>
```

Valgrind runs your program under instrumentation so it can trace memory accesses and allocations. When your program finishes, it prints a summary of detected issues, including invalid memory accesses and leaked heap blocks.

Here is an example program with a heap-memory bug:
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
  int *buf1 = malloc(sizeof(int) * 20);

  for (int i = 0; i < 20; i++) {
    buf1[i] = 0;
  }
  buf1[20] = 0; // <---- Line 11: out-of-bounds (see report below)
  return 0;
}
```

When I compile this code and run the program through valgrind, it will generate a report. I'm using the `--leak-check=full` flag to instruct valgrind to report detailed memory leak information.
```bash
$ make
  gcc -Wall -g memtest.c -o memtest

$ valgrind --leak-check=full -s ./memtest 
```

Here's a breakdown of what it says:
```
==359874== Invalid write of size 4
==359874==    at 0x10919F: main (memtest.c:11)
==359874==  Address 0x523e094 is 4 bytes after a block of size 80 alloc'd
==359874==    at 0x4E050C5: malloc (vg_replace_malloc.c:393)
==359874==    by 0x109165: main (memtest.c:6)
```
This error is an "invalid write" on **line 11**, `buf1[20] = 0;` Valgrind is warning that you had malloc'd only 20 `ints`, but you're attempting to write to the 21st spot so it spotted a one-off error!

Further down the report, you'll see another segment:
```
==359874== HEAP SUMMARY:
==359874==     in use at exit: 80 bytes in 1 blocks
==359874==   total heap usage: 1 allocs, 0 frees, 80 bytes allocated
==359874== 
==359874== 80 bytes in 1 blocks are definitely lost in loss record 1 of 1
==359874==    at 0x4E050C5: malloc (vg_replace_malloc.c:393)
==359874==    by 0x109165: main (memtest.c:6)
==359874== 
==359874== LEAK SUMMARY:
==359874==    definitely lost: 80 bytes in 1 blocks
==359874==    indirectly lost: 0 bytes in 0 blocks
==359874==      possibly lost: 0 bytes in 0 blocks
==359874==    still reachable: 0 bytes in 0 blocks
==359874==         suppressed: 0 bytes in 0 blocks
```
Here Valgrind that there is a memory leak. It does this by intercepting and replacing all your calls to `malloc` with its own, so that it can track all the calls to allocate/freeing memory. Here it is reporting that **Line 6** of your `memtest.c` code is the culprit. It says that 80 bytes (indeed `sizeof(int) * 20` is 80 bytes) were malloc'd, but never freed. Adding a call to `free(buf1)` before the program exits would have solved this leak.

**Important** For all programs (starting from this assignment) that you write from now on, valgrind should absolutely be a part of your debugging workflow to save you hours of time.


#### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- Login to github, and go here: [https://github.com/davidtchiu/os-ls2](https://github.com/davidtchiu/os-ls2). 

- Click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  $ git clone <your-github-url-for-this-project>
  ```


- This should download the starter code in a directory named after your Github repository. 

#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `ls2Sol`. Play around with this so you get a sense of the overall behavior.


#### Hints and Tips
0. Some useful terms:
    - A "folder" is also called a "directory"
    - A "path" gives the directions to navigate to either a file or a directory.
    - A "relative path" is a path to a file or directory from *where you currently are*. Importantly, `.` and `..` stands for the current directory and the parent directory, respectively. For example, suppose I'm currently exploring `/home/dchiu` and I want to see what's inside Alex's `os-ls2` directory. I can get to it using this path:
        ```txt
        ../akirner/os-ls2
        ```

    - An "absolute (full) path" is a path to a file or directory that starts from the root of your file system. It fully specificies the location. For example, the following absolute path will point you to my `os-ls2` directory, no matter *where* you currently are.
        ```txt
        /home/dchiu/os-ls2
        ```

1. Start as early as possible. This assignment is trickier than what meets the eye due to all the string processing work and memory management. 

2. There will be times where you'll need to build up strings. You might find [`snprintf()`](https://www.geeksforgeeks.org/snprintf-c-library/) to be useful. (It's just a stricter version of `sprintf()` for building strings.)


3. A stack library has been given to you. It is used for Mode 2 (see below). Read the stack implementation to see how I manage  memory. Also, write some test code for it and use Valgrind to ensure you know how to use it. You will use the stack for storing paths in Mode 2.

4. For both modes of operation, you will need to `malloc` strings that stores the current path to a file. For instance, you would need a string to input into the `stat()` system call and you may need to store that path onto your stack for the printing of Mode-2 results. If you did not malloc your strings and instead declared them as local arrays, they will likely be out of scope by the time you need to print them.

5. I would tackle this project recursively, so abstractly your program should be structured as such:
    ```txt
    Given: a directory to explore
    If the given directory is not empty:
        Iterate through each entry (which can either be a file or directory.)
        If the current entry is a file
            Either print it or store it for later
        else:
            Recurse on the current entry
    ```

#### Detailed Instructions

0. For ease of compiling, I've provided you with the `Makefile`. Simply run `make` on the command line to compile your code.


1. Your program should accept up to two command-line arguments:
    ```bash
    $ ./ls2 <path> [exact-match-pattern]
    ```
   Only the `<path>` command-line argument is required to be given, and your program should re-prompt the command if no arguments are given, or if more than two are given. `path` may be given as a relative or an absolute path. Here's an example:
    ```bash
    $ ./ls2 
    Usage: ./ls2 <path> [exact-match-pattern]

    $ ./ls2 . hello.c hello.o
    Usage: ./ls2 <path> [exact-match-pattern]
    ```

   You need to look into how to handle command-line arguments in `main(int argc, char *argv[])`.
    - `int argc` gives a count of the number of terms given on the command line (including `"./ls2"` as `argv[0]`)
    - `char *argv[]` is an array of strings, with `argv[i]` being the ith term given on the command line

2. ls2 operates in one of *two modes*:

    - **Mode 1:** The first mode runs when the user only passes the `path` (no `exact-match-pattern` is given on the command line). Your program should attempt to open the directory given by `path` and recursively show all files' name and size (in bytes). You do not need to worry about displaying anything other than regular files and directories (ignore anything that isn't a directory or a regular file).

      Here's me currently in my `/home/dchiu/os-ls2` directory, running `ls2` on the `animals` relative path:
      ```bash
        $ ./ls2 animals
        horses/ (directory)
            appaloosa/ (directory)
                albert.txt (48 bytes)
            mustang/ (directory)
                dusty.txt (144 bytes)
            arabian/ (directory)
        gators/ (directory)
            chomps.txt (6 bytes)
        cats/ (directory)
            fluffy.txt (42 bytes)
            stimpy.txt (20 bytes)
            dusty.txt (306 bytes)
      ```
    
    - **Mode 2 (File Search):** This mode runs when the user passes both `path` and the `exact-match-pattern` arguments. When this is the case, your program should only show *files* with names matching `exact-match-pattern`. Here's the kicker: The output *must not* show any directory chains if the given pattern is not found in one its subdirectories. Here's an example of me looking inside the current directory (`.` is given as `path`) for any files matching `dusty.txt`, which is found in two places: `animals/horses/mustang/` and in `animals/cats/`.

        ```bash
        $ ./ls2 . dusty.txt
        animals/ (directory)
            horses/ (directory)
                mustang/ (directory)
                    dusty.txt (144 bytes)
            cats/ (directory)
                dusty.txt (306 bytes)
        ```

3. **What's the Included Stack Library For?** I prepared you with the `stack.h` and `stack.c` files, which is a fully implemented stack. (You should study `stack.c` to see how I use `malloc()` in various spots and later `free()` up the allocated memory.)
    - When writing *Mode 2* of this assignment, you'll notice that you can't simply print every file or directory as soon as you encounter them as you could in *Mode 1*.
    
    - *Mode 2* requires that you keep a list of directories and files that you actually want to print out at the end. You can store this listing in the stack, and print out its contents later.

    - The given `main()` function contains a bit of code to test this stack. You can remove this code when you're ready to write the `ls2` program.

4. **Making System Calls**
    Recall that there are many privileged operations that users can't run without the OS's help. These requests are made via "system calls". 

    - To open up directories and check what's inside, you will want to check out the following system functions: `opendir()`, `readdir()`, `closedir()`.
    - When you read the contents of a directory, ignore any references to `.` and `..`. Why? In file systems, `.` is a shorthand to refer to the current directory, and `..` means the parent directory. These entities exist in *every* directory you open. So if you recursively open those up, then you'll just end up in an infinite recursion!

    - Once you've opened up a directory, you can use `readdir()` to traverse its contents. But not everything is a file. You need to test if it's a regular file, or is it a shortcut (link)? Is it a subdirectory? To get this and other information, you'll look into the important `stat(..)` system call provided in `#include <sys/stat.h>` 
      - [sys/stat.h](https://pubs.opengroup.org/onlinepubs/007908799/xsh/sysstat.h.html)
      - Note that the second parameter of `stat(..)` accepts an *output parameter*. (Remember what those are from the previous assignment?). If the call was successful, `stat` will set that pointer to refer to a `struct` with the file/directory's information.
      - One of the data members in the output `struct` is a `mode_t st_mode`. You can run the following tests on this field to check if the file that you `stat`d is a *regular file* or a *directory* using `S_ISREG(mode_t m)` and `S_ISDIR(mode_t m)` functions respectively. As mentioned earlier, you should ignore all other types of files.
      - That struct also contains other useful information, like the size, which you'll need to display.

5. Other libraries you may want to look into before getting started on this assignment:
    - [dirent.h](https://pubs.opengroup.org/onlinepubs/7908799/xsh/dirent.h.html) for `DIR` type for representing a directory stream. This is to be used in conjunction with `opendir()` system call.
    - [sys/types.h](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/sys/types.h.html) for the `mode_t` type.

6.  **Print Formatting:** When printing, the names of *directories* must be followed with the suffix `"/ (directory)"`. Names of *regular files* must be followed by the suffix `"(nnn bytes)"` where `nnn` is the number of bytes occupied by that file. If a file or directory is found within a subdirectory, its name must be indented by four spaces to signify that it is enclosed within the above directory.
    - Luckily, the listing does not needed to sorted in any particular order.

7. Although the `.git/` directory exists (as it did in my sample output), it still may be wise to create your own "test-dummy" directory structure so that you test your program. 




#### Grading

```
This assignment will be graded out of 70 points:
[5pt] Your program properly resolves command line arguments.
[10pt] Implementation of Mode 1.
[30pt] Implementation of Mode 2, which outputs only the directory chains that contain the given file name.
[10pt] Your output of files and directories conforms to the specified format.
[15pt] Your program is free of memory leaks and dangling pointers. (Use valgrind!)
```

#### Submitting Your Assignment

1. Commit and push your code to your Github repo. Make sure your repo is public.

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.


#### Credits

Written by David Chiu. 2022. Updated 2026.
