## CS 475 - Operating Systems

### Project 1: Xinu Ready Queue

This project assumes you have a good handle on C (particularly, pointers and dynamic allocation) and basic shell commands. Make sure you have completed the C primer homework assignments before you tackle this project.

Xinu is an operating system developed by [Prof. Douglas Comer](http://www.xinu.cs.purdue.edu/author.html)'s group at Purdue University. Xinu is used in an impressive number of real computer systems (e.g., embedded controllers and an [IBM mainframe computer](https://en.wikipedia.org/wiki/IBM_System_z9), among others). The description of Xinu from its website:

```
"XINU stands for Xinu Is Not Unix -- although it shares concepts and even names with Unix, the internal design differs completely. Xinu is a small, elegant operating system that supports dynamic process creation, dynamic memory allocation, network communication, local and remote file systems, a shell, and device-independent I/O functions. The small size makes Xinu suitable for embedded environments."
```

In this project, you will be implementing an essential data structure, which pervades most OS kernels including Xinu: a (dynamically allocated) queue of processes, known as the Ready Queue. It stores pointers to process control blocks (called "process entries" in Xinu), providing a set of processes for the CPU scheduler to choose from for execution. This project assumes that you have already completed the earlier C primer-assignments.

You are required to work in pairs.

#### ZyBooks References

- String processing
- Scanning for user inputs

#### Student Outcomes

- To become familiar with the Xinu development and runtime environment
- To become familiar with the Xinu kernel codebase
- To provide more experience with pointers and dynamically-allocated structures

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- If you want to submit your code on Github, do this step. If not, you may skip this step. Make sure you already have a Github account. Login to github, and go here: [https://github.com/davidtchiu/cs475-proj1](https://github.com/davidtchiu/cs475-proj1). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From your Ubuntu virtual machine, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

```

git clone <your-github-url-for-this-project>

```

- If you aren't planning to submit your assignment via a Github link, then you can simply download the starter files onto your Ubuntu virtual machine using:

```

git clone https://github.com/davidtchiu/cs475-proj1

```

#### Part 1: Setting up Xinu

In this section, we'll get Xinu up and running on a virtual machine.

1.  Download the following VirtualBox image, that have been prepared to get Xinu up and running:

    - [xinu-back-end.ova](xinu-back-end.ova) (10.8 KB)

2.  Open up VirtualBox. Then click on the File > Import Appliance... menu. Browse and find the xinu-back-end.ova file you just downloaded, then click Continue.

3.  Import `xinu-backend.ova`. **Do not** click to enable "Reinitialize the MAC address of all network cards." Afterwards, you should see the new virtual machine image on the left-hand panel of the VM Manager window.

4.  Highlight `xinu-backend` in the left-hand menu, and click on Settings. From the Settings menu, navigate to `Ports`. Make sure that `Enable Serial Port` and `Connect to Existing Pipe/Socket` are **both checked**. Under Path/address:

    - If you're on a Linux or Mac: type in `/tmp/xinu_serial`
    - If you're on Windows: type in `\\.\pipe\xinu_com1`

    Click OK to exit Settings.

5.  Go back in the Ubuntu VM in which you've been doing all your homework. Download the starter code for this project, and navigate into the `proj1` directory. You'll see the following subdirectories:

    - `compile/` - contains the Makefile and scripts to upload the kernel to the back-end.
    - `config/` - contains device configurations (do not touch files in this directory).
    - `device/` - contains device files (do not touch files in this directory).
    - `include/` - contains header files, which define constants and function prototypes.
    - `lib/` - contains a small library of standard C functions. The UNIX system libraries are not available.
    - `system/` - contains the source code for the Xinu kernel.

Most of your time in development will be spent in the `include/` and `system/` directories.

#### Part 2: Compiling and Running Xinu

You will be coding and compiling Xinu on the Ubuntu machine as you did for your homework.

1. Navigate into the `compile/` directory. You can type make to compile the kernel, but you'll soon be inundated with compile errors. This is because there are several important functions that you need to implement for this project. Let's clean up the mess by running `make clean`.

2. Normally, if the compilation was successful, it will create a binary file called `xinu` in the `compile` directory. Now you need to run `./upload.sh` to prepare it for upload onto the back-end VM. Don't worry about this step just yet, because things aren't going to compile.

3. However, I've provided you with a precompiled solution called `xinuSol`, so let's run that for now so you can see what to expect for this assignment. Run `./uploadSol.sh` to upload my precompiled kernel to the back-end VM.

4. Now on the Terminal, type `sudo minicom`. You'll be prompted for the password. This turns the Terminal window into a serial console that is connected to the back-end VM, effectively emulating a terminal for the back-end VM. Speaking of the back-end...

5. At this point, start the `xinu-back-end` virtual machine from VirtualBox. It should take a few seconds for it to automatically retrieve the kernel binary you just "uploaded" from Ubuntu VM and boot it. Because `minicom` turned the Terminal into the screen that's "attached" to the `xinu-back-end` VM, you can see Xinu boot up and run right on the Terminal.

- It's quite normal for Xinu boot to fail, and you may need to do the following:
  - First, try repeating to run the `xinu-back-end` from VirtualBox a few times.
  - If it doesn't resolve on its own, you may need to disable/enable the network on the Ubuntu VM. Then wait a few seconds and try again.

If everything went smoothly, you should get this output:

```
Hello XINU WORLD!
This is process 2
This is process 2
This is process 2
This is process 2
This is process 2
This is process 2
This is process 2
This is process 2
This is process 2
This is process 2
Hello XINU WORLD!
This is process 3
This is process 3
This is process 3
This is process 3
This is process 3
This is process 3
This is process 3
This is process 3
This is process 3
This is process 3
Hello XINU WORLD!
This is process 4
This is process 4
This is process 4
This is process 4
This is process 4
This is process 4
This is process 4
This is process 4
This is process 4
This is process 4
Hello XINU WORLD!
This is process 5
This is process 5
This is process 5
This is process 5
This is process 5
This is process 5
This is process 5
This is process 5
This is process 5
This is process 5
1
2
3

Hello XINU WORLD!
This is process 6
This is process 6
This is process 6
This is process 6
This is process 6
This is process 6
This is process 6
This is process 6
This is process 6
This is process 6
10
20
30
40
50
60

All user processes have completed.
```

Afterwards, Xinu is still running over on the back-end VM, but it's in an infinite loop called the `null-process`, and not accepting any other commands (there's no shell). We'll see what this output means later.

6. To exit `minicom`, press and hold `ctrl` then hit `a` followed by pressing `q`. This brings the Terminal back.

7. Shutdown the back-end VM from VirtualBox to terminate Xinu.

8. From here on, remember this workflow as you proceed with development:

- Write your code on Ubuntu VM
- Navigate into the `compile/` subdirectory
- Type: `make clean`
- Type: `make` to compile the Xinu kernel
- Type: `./upload.sh` to upload the kernel
- Type: `sudo minicom` to turn your terminal to a screen for Xinu
- Start up the `xinu-back-end` VM

#### Part 3: Quick Tour of Xinu Structures and Types

You need to spend some time exploring Xinu's codebase, specifically, the files in `include/` and `system/`. I don't expect you to understand everything, but it would be to your benefit to obtain even a high-level understanding of the kernel's structures. I will point out a few important items to spend some time on:

##### Types and Constants

- `include/xinu.h`: unifies the inclusion of all necessary header files. This makes it convenient for when we're developing; we only have to place a single line `#include <xinu.h>` at the top of our files to gain access to all constants and functions.

- `include/prototypes.h`: most system-call signatures are declared here, but implemented elsewhere in `.c` files.

- `include/kernel.h`: contains definition of some important constants, typedefs, and function prototypes.

  - Types: data types in Xinu are renamed to be more convenient and specific. Notably, you'll see these often:
    |Type Name in Xinu|Really just a...|
    |-----------------|----------------|
    | `byte` | 8-bit `char` |
    | `bool8` | `byte`|
    | `int32` | 32-bit `int`|
    | `uint32` | 32-bit `unsigned int`|
    | `pid32` | `int32` (a process ID)|
    | `sid32` | `int32` (a semaphore ID)|
    | `status` | `int32` (return status of system call: `OK`, `SYSERR`, `TIMEOUT` see below)|

  - Constants: the list of typedefs are followed by constants. You should commit these to memory, but here are some important ones.

#### Grading

```
This assignment will be graded out of 50 points:

[20pt] User input is properly handled, and invalid commands (not found in PATH or
    current working directory) generates an error.

[5pt] The MOTD is being handled error-free.

[15pt] Running a valid command in-foreground vs. in-background works as expected.

[5pt] history outputs the last HISTORY_LEN commands.

[3pt] cd [path] works as expected, by changing the current directory to the path
    (if given), or $HOME (if not given).

[1pt] exit and pwd works as expected

[1pt] Your program observes good style and commenting.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. I assume you wrote your program inside your virtual machine. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.
2. If you'd rather submit a "zipped" file on Canvas, do the following:

   - From the Terminal in your virtual machine,
   - Navigate to the directory that contains your homework directory.
   - Zip up your homework directory: `tar -czvf <file_name>.tar.gz <homework_dir>`

     - For example, if my homework directory is called `hwk4/`, and I want the zipped file to be called `hwk4.tar.gz`, use: `tar -czvf hwk4.tar.gz hwk4/`
     - You can un-zip this file later using: `tar -xzvf <file_name>.tar.gz`

   - Navigate to our course on Canvas, and find the assignment submission box.

   - Click on Submit Assignment, and you should be able to "browse" for your file

   - When you've selected the proper file, click Submit Assignment again to upload it.

3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2022.
