## In-Class Exercise: Command Line

In this exercise you will be trying out basic command line operations.

### Student Outcomes

- Learn how to access your terminal
- Learn how to navigate your file system

### Printable Cheat Sheet

Here is a [command-line cheat sheet](https://commons.wikimedia.org/wiki/File:Unix_command_cheatsheet.pdf) that you can download and print.

### Prerequisites

- [https://git-scm.com/downloads](Download) and install git if not already installed.
- [https://www.java.com](Download) and install Java if not already installed.

### Part 1 - Navigating the File System

- Open your terminal window. You can get to it in various ways, and it depends on your operating system. I think it's easiest to access it through VS Code. Open VS Code. It doesn't matter which project is open (if any). Click on the `Terminal` menu, and click `New Terminal`. You should see the terminal window pop up on the bottom.

- Type the following command to download the files for this lab:

```git
git clone https://github.com/davidtchiu/cs240-lab-cmdline
```

- After this succeeds, list all files in the current directory. You should see a directory called `cs240-lab-cmdline`. Navigate into it, and print the current working directory, which shows you what directory you're "inside of." If you did this correctly, you should get an output like this:

```git
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
