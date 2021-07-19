## In-Class Exercise: Command Line

In this exercise you will be trying out basic command line operations.

### Student Outcomes

- Learn how to access your terminal
- Learn how to navigate your file system: `pwd`, `cd`, `ls`, `cp`, `mv`, `rm`, `less`
- Learn to use the `nano` editor

### Printable Cheat Sheet

Here is a [command-line cheat sheet](https://commons.wikimedia.org/wiki/File:Unix_command_cheatsheet.pdf) that you can download and print.

### Prerequisites

- [https://git-scm.com/downloads](Download) and install git if not already installed.
- [https://www.java.com](Download) and install Java if not already installed.

### Part 1 - Navigating the File System

- Open your terminal window. You can get to it in various ways, and it depends on your operating system. I think it's easiest to access it through VS Code. Open VS Code. It doesn't matter which project is open (if any). Click on the `Terminal` menu, and click `New Terminal`. You should see the terminal window pop up on the bottom.

- Type the following command to download the files for this lab:

```
git clone https://github.com/davidtchiu/cs240-lab-cmdline
```

- After this succeeds, list all files in the current directory. You should see a directory called `cs240-lab-cmdline`. Navigate into it, and print the current working directory, which shows you what directory you're "inside of." If you did this correctly, you should get an output like this:

```bash
/Users/david/Downloads/cs240-lab-cmdline
```

Of course, the first part of your path will differ from mine.

- List all files. Remember that you can do this and get a simple output, as follows

```git
FastOddEvenSorter$FastOddEvenWorker.class       Heap.java                                       Sorter.ctxt
FastOddEvenSorter.class                         ListFactory.class                               Sorter.java
FastOddEvenSorter.ctxt                          ListFactory.ctxt                                Tester.class
FastOddEvenSorter.java                          ListFactory.java                                Tester.ctxt
Heap.class                                      README.TXT                                      Tester.java
Heap.ctxt                                       Sorter.class                                    package.bluej
```

Or you can call out the details of each file, printed line-by-line, like this:

```
-rw-r--r--@ 1 david  staff  2611 Jul 19 09:05 FastOddEvenSorter.java
-rw-r--r--@ 1 david  staff  3388 Jul 19 09:05 Heap.class
-rw-r--r--@ 1 david  staff  2144 Jul 19 09:05 Heap.ctxt
-rw-r--r--@ 1 david  staff  5354 Jul 19 09:05 Heap.java
-rw-r--r--@ 1 david  staff  1638 Jul 19 09:05 ListFactory.class
-rw-r--r--@ 1 david  staff   680 Jul 19 09:05 ListFactory.ctxt
-rw-r--r--@ 1 david  staff  2029 Jul 19 09:05 ListFactory.java
-rw-r--r--@ 1 david  staff   471 Jul 19 09:05 README.TXT
-rw-r--r--@ 1 david  staff  3506 Jul 19 09:05 Sorter.class
-rw-r--r--@ 1 david  staff  2690 Jul 19 09:05 Sorter.ctxt
-rw-r--r--@ 1 david  staff  8417 Jul 19 09:05 Sorter.java
-rw-r--r--@ 1 david  staff  1455 Jul 19 09:05 Tester.class
-rw-r--r--@ 1 david  staff   126 Jul 19 09:05 Tester.ctxt
-rw-r--r--@ 1 david  staff  4437 Jul 19 09:05 Tester.java
-rw-r--r--@ 1 david  staff  1515 Jul 19 09:05 package.bluej
```

- As you can see, this is just an old Java project that is compatible with BlueJ. Let's suppose that your instructor wants you to restructure the contents of this directory in a certain way before submission. Here's what you need to do:

  - Remove all files ending `.class`, `.ctxt`, and `.bluej`. You should not have remove files one-by-one.
  - Rename `README.TXT` to `README.txt` and then open it up for editing.
  - Create a new directory called `src/` and all files ending in `.java` must be stored in it. Move them in there now.
  - If you list files, you should have this in your working directory:
    ```
       -rw-r--r--@ 1 dchiu  staff  471 Jul 19 09:05 README.txt
       drwxr-xr-x@ 7 dchiu  staff  224 Jul 19 09:20 src
    ```

- Show the contents of `README.txt`. You should see:

  ```
  ------------------------------------------------------------------------
  This is the project README file. Here, you should describe your project.
  Tell the reader (someone who does not know anything about this project)
  all he/she needs to know. The comments should usually include at least:
  ------------------------------------------------------------------------

  PROJECT TITLE:
  PURPOSE OF PROJECT:
  VERSION or DATE:
  HOW TO START THIS PROJECT:
  AUTHORS:
  USER INSTRUCTIONS:
  ```

### Part 2 - nano

- Let's edit this README file with the following changes. Sure, you can use VS Code for this, but let's try something different. There is a text editor called `nano` that we can use. You can open a file for editing using the command `nano <filename>`. This should replace your Terminal window with the file editor, and make the following changes.

  - Change the PROJECT TITLE to `"Command Line Lab"`
  - Enter today's date after VERSION or DATE
  - Add your name to AUTHORS
  - Remove the remaining lines. You can delete entire lines by moving your cursor on the line by holding down the `control` key and pressing `k`. I'll indicate this sequence as `ctrl + k`. (This command is actually equivalent to a "cut", because it saves the deleted line onto nano's internal clipboard).
  - Save the file using `ctrl + o`.
  - Then close the file using `ctrl + x`.

- To be sure, I wouldn't ever recommend using `nano` for heavy coding, but I find it to be pretty useful for viewing or making quick edits inside the Terminal. Let's explore some other commands within `nano`.

- Before we make changes to `Sorter.java`, I want you to make a copy of it in case we screw up. Use the `cp` command to make a copy of this file into `Sorter.java.sav`.

- Now open `Sorter.java` in `nano`.

  - Get the cursor location using `ctrl + c` (this tells you the line number and position, as well as the total line/word count)
  - Skip down to the next page using `ctrl + v`. Skip up using `ctrl + y`.
  - Search for (case insensitive) string-sequences using `ctrl + w`. (Can you figure out how to do a search-and-replace?)
  - Let's move the `shakerSort` method to the bottom of this class. We'll start by having you find `shakerSort`. Move your cursor to the first line of its method comment, and we'll start cutting by hitting `ctrl + k` consecutive times until the method is gone. Don't worry, all those lines we just removed are saved on nano's clipboard. Now scroll down until you reach the end of the file, and paste it using `ctrl + u`.
  - Save and close this file to return to the Terminal.

### Part 3 - Wrapping up

- Back in the Terminal, check to see if you're still be in the `src/` directory. If not, navigate to it. Let's compile this Java program and run it. You can compile using:

  ```
  javac Tester.java
  ```

  Because `Tester.java` depends on the other `.java` files, those will be compiled automatically. It may complain about unchecked/unsafe operations, but it's just a warning that you can ignore for this exercise. In the unlikely case in which you get a compilation error, then that means you made a mistake while moving `shakerSort` in the previous step. Go back and fix it.

- If you list files again, you should now see some `.class` files (those are the compiled versions of the source code). Let's create a new directory called `bin/` at the same level as `src/`. Move all the `.class` files into `bin/`.

  ```
  cs240-lab-cmdline/
  ├── README.txt
  ├── bin/
  │   ├── Heap.class
  │   ├── ListFactory.class
  │   ├── Sorter.class
  │   └── Tester.class
  └── src/
      ├── FastOddEvenSorter.java
      ├── Heap.java
      ├── ListFactory.java
      ├── Sorter.java
      └── Tester.java

  2 directories, 10 files
  ```

- This concludes the lab. Go ahead and delete the entire `cs240-lab-cmdline` directory structure.
