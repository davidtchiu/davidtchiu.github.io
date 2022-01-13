## CS 161 - Intro to Computer Science

### Hwk: Getting Started with C

This is the first part of a multi-part primer on C. You will be programming a simple interactive program in C, and getting familiarized with your programming environment on Linux.

#### Student Outcomes

- To become familiar with the programming environment
- To become familiar with compiling single-source C programs.
- To become familiar with C's supported data types, arrays (and strings), function writing, structs, and input/output functions.

#### Required Files

The following file(s) have been provided for this assignment.

- [develop-end.ova](TBD TBD)

#### Instructions

C is highly dependent on the compute environment on which it compiles and executes. This is everybody's worst nightmare: turning in an assignment you spent hours on, only to have it not compile or execute on your instructor's machine. In fact, having a common runtime environment was what made Java so successful when it was introduced in the mid-90s.

It's therefore important that we all share a common environment, so I've prepared a virtual machine (think: another operating system that runs as a separate process on your machine). Important: all programming assignments should be written and submitted from this virtual machine (VM).

- Download and install [Oracle VirtualBox](https://www.virtualbox.org/). Note: the current version at the time of writing is version 6.1.

- Download the following VirtualBox image:

  - [TBD](TBD TBD)

- Open up VirtualBox. Then click on the `File` > `Import Appliance` menu. Browse and find the `TBDTBD` file you just downloaded, then click Continue.

- This brings up the Appliance Settings window. **Important:** Do not click to enable "Reinitialize the MAC address of all network cards." Click `Import`. This will take a little bit of time to finish.
  ![](img/figures/install1.png)

- Highlight `TBDTBD` from the side menu, and click on `Settings`. From the Settings menu, navigate to Ports. Make sure that Enable Serial Port and is checked. **IMPORTANT:** Do not check Connect to Existing Pipe/Socket. Under Path/address:

  - If you're on a Linux or Mac: type in `/tmp/xinu_serial`
  - If you're on Windows: type in `\\.\pipe\xinu_com1`
    ![](img/figures/install4.png)

-

#### Grading

```
This assignment will be graded out of 20 points:

[1pt] Appropriate constants have been defined

[1pt] Array(s) and strings are created using a constant size

[3pt] Your program is multi-file, contains multiple well-defined functions.
      A Makefile must be included with all and clean targets defined.

[5pt] Your program handles multiple-word inputs

[4pt] Your program updates counts and histogram appropriately

[3pt] Your program prints a vertical (not horizontal) histogram

[1pt] Basic error checking is handled, such as entering invalid menu options.

[1pt] Your program runs repeatedly until sentinel inputs are entered

[1pt] The README is written and placed in your project directory. Your
      program observes good style and commenting.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas.
I assume you wrote your program inside VirtualBox.

- From the Terminal in your VirtualBox,
- Navigate to the directory that contains your homework directory.
- Zip up your homework directory: `tar -czvf <file_name>.tar.gz <homework_dir>`

  - For example, if my homework directory is called `hwk1/`, and I want the zipped file to be called `hwk1.tar.gz`, use: `tar -czvf hwk1.tar.gz hwk1/`
  - You can un-zip this file later using: `tar -xzvf <file_name>.tar.gz`

- Navigate to our course on Canvas, and find the assignment submission box.

- Click on Submit Assignment, and you should be able to "browse" for your file

- When you've selected the proper file, click Submit Assignment again to upload it.

- You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2015.
