## CS 475 - Operating Systems

### Hwk: David Shell (dsh)

A _shell_ is an interactive command-line environment in which users can issue commands to the OS. Even with modern OS's support of point-and-click GUIs, many still prefer to use the shell. Today, many shells exist and are supported by Unix-based systems, but the Bourne-Again Shell (bash) is probably the most widely used.

Your goal for this assignment is to create your very own shell, David Shell (`dsh`), named after your favorite CS Professor.

#### ZyBooks References

- String processing
- Scanning for user inputs

#### Student Outcomes

- To understand how a simple command-line interface to the OS is implemented.
- To work with environment variables with `getenv()`
- To work with simple file handling in C
- To become familiar with process creation with `fork()` and `execv()`
- To become familiar with parent-child synchronization with `wait()`

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- If you want to submit your code on Github, do this step. If not, you may skip this step. Make sure you already have a Github account. Login to github, and go here: [https://github.com/davidtchiu/cs475-hwk4-dsh](https://github.com/davidtchiu/cs475-hwk4-dsh). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From your Ubuntu virtual machine, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

```

git clone <your-github-url-for-this-project>

```

- If you aren't planning to submit your assignment via a Github link, then you can simply download the starter files onto your Ubuntu virtual machine using:

```

git clone https://github.com/davidtchiu/cs475-hwk4-dsh

```

#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `dshSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./dshSol`. This is how your solution should behave when it's done.

#### Program Requirements

1. As soon as `dsh` starts, the first thing it should do is look for a file called `.dsh_motd` in the current user's home directory on the operating system. MOTD stands for "message of the day," and the file contents may be arbitrarily long and multi-line.

   - To look for this file, you'll need to check whether it exists in the current user's home directory, which is stored in the linux environment variable `HOME`. You'll need to look into C's [getenv()](https://www.tutorialspoint.com/c_standard_library/c_function_getenv.htm) function to extract its value.

     - If you're curious to see what's stored inside `HOME`, you can also use the command on the Terminal: `echo $HOME`
     - In fact, you can `echo` any environment variable `$VAR` to see its value, such as: `$SHELL` (what shell am I using?), `$PWD` (where am I?), `$PATH` (what are the paths to my executables?), ...

   - If this file doesn't exist in the user's home directory, then move on. Otherwise, you need to print its contents to the screen first. I would expect some simple error-handling to be done here. For instance, if the file exists, but can't be opened due to a lack of permissions, your program should _not_ crash (no need to print an error message though).

2. After printing the MOTD (if exists), your shell should provide the user with a command-line prompt: `dsh>`

3. Check out the example below:

   ```
   /home/dchiu$ ./dsh
   ********** MESSAGE OF THE DAY ************
   * "Three things matter in life: family,
   *  friends, and your OS professor."
   *   - David Chiu, Philosopher
   ******************************************

   dsh>
   ```

   From the Terminal, I run `dsh` to start up David shell, and it prints off the MOTD before sending me to a prompt, awaiting commands. I am now in the David shell environment, and should be able to issue commands just like other when you're inside other command-line shells.

4. At the `dsh>` prompt, the user would be able to enter a command which David shell should attempt to _execute_ as a separate process.

   - Some commands may be followed by a list of arguments (for instance, `ls -l` and `ps au`), so you will have to read in the entire line and parse it later. Do do this, I would recommend looking into using [fgets()](https://www.cplusplus.com/reference/cstdio/fgets/), which has the following signature:

   ```c
   char* fgets(
     char* str, /* OUT */
     int num,   /* IN  */
     FILE* stream /* IN */
   )
   ```

   This function will read `num` characters from the `stream`, and place it in a pre-defined string buffer `str`. The `stream`, in our case, is simply `STDIN` (the standard input device). The method will return a pointer to `str`. In your program, if the user's input is longer than 256 characters, you should ignore it and and simply output an error.

##### Understanding Program Execution and Paths

After the input is read, `dsh` will need to verify that the command entered is valid. There's an easy way to tell if it's valid, but first, we need to understand how file system paths work. To create a process and run a program, you need to construct its **absolute (or full) path** in the file system. An absolute path to a file, say `ls`, looks like this:

```
/bin/ls
```

This means that, to locate the `ls` program, the OS needs to first traverse to the "root" directory or folder (that's the initial `/`), and from there, traverse into the `bin` directory. Then from `/bin`, to look for a file named `ls` in there. It's super nice when the user types out the absolute path to the program they want to run, but that's usually not the case. We typically only type `ls`, and it works, which means that shells must do some background processing to figure out _where_ to look for `ls`.

So this is all pointing to a couple of options we need to support. The user might give the absolute path to an executable file, or the user might simply give the name of the executable.

1.  **Option 1 (easy):** The user types in the absolute path to an executable. You know they typed an absolute path if their input starts begins with a `'/'` character! First, check to see if the given path even exists. To do this in C, I would first include the `unistd.h` file on top, and use its `access()` function:

    ```c
    if (access(path, F_OK | X_OK) == 0) {
        // file exists and is executable
    }
    else {
        // file doesn't exist or is not executable
    }
    ```

    - If the executable isn't found, then simply output an error to the screen, and re-display the `dsh>` prompt.

    - If the executable is found, then there are two further options for execution:

      - **Run in foreground:** Execute the path using `fork()` and `execv()` as you learned in class. The call to `execv()` requires the absolute path to the executable, which you already have. Commands may have an arbitrary number of arguments, which are delimited by white space. The parent process (that is, `dsh`) should `wait()` for the child process to finish. That is, you would not expect to see the `dsh>` shell prompt again _until_ the child process terminates.

      - **Run in background:** If the last character in a valid command is an `&` symbol, it indicates that the command is to be run in the background. In other words, when the shell forks a child process, it should **not** wait for the child to terminate. The OS will commence running the new process concurrently with `dsh`. This means that you'll see `dsh>` being re-displayed immediately by the parent (`dsh`) process. If the child process prints to the screen, it'll interleave its outputs into the terminal.

2.  **Option 2:** The user's input does _not_ start with a `/`. Now we've got some work to do before we can even fork and exec! We need find the true location of the given command, and we'll use the following steps:

    - First, we'll check to see if the executable can be found in the current working directory. That is, the location of where your shell thinks you're in. Look into using `getcwd()`, defined in `unistd.h`. Concatenate the user's input to the value of the current working directory, and see if it exists. If not, then move on to the next step.
    - If the executable cannot be found in the current working directory, then there are other locations where it can be. These locations are stored in the environment variable `PATH`.
    - For example, a `PATH` might hold this value:
      ```
      /opt/local/bin:/opt/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/X11/bin:/usr/texbin
      ```
      Basically, what you're seeing here is a colon-delimited string that separates all the different locations to look for an executable. Therefore, you need to split this string up by `:`s, and concatenate the user's input to the end of each token. The first location to try is `/opt/local/bin/`, the second place to try is `/opt/local/sbin/`, and so on. - As soon as you detect that an absolute path to the executable exists, then try to run it using the instructions given above. - Once you've tried all the tokens, then you can output a `Command not found` error message.

##### Builtin Commands

Some commands are not meant to invoke another program. Instead, they are to be handled directly by the shell. For example, when a user inputs `exit`, your shell is not supposed to attempt to find an executable named `exit` in the user's
PATH! (No such executable exists!) In this case, `dsh` should simply terminate. These special commands are called "builtins."

Here is a list of builtins that your shell needs to support.

- `exit` should terminate dsh.

- `pwd` should print the current working directory. Look into `getcwd()`, defined in `unistd.h`.

- `cd [path]` should change the current working directory to the optionally given path. If path is not given, then dsh should change the working directory to the user's home directory, stored in the environment variable `HOME`. Look into the `chdir()` function, defined in `unistd.h`.

- `history` should print the `HISTORY_LEN` most recent commands executed. Define `HISTORY_LEN` to be 100.

#### Flowchart of Activities

Phew! That's a lot to take in. The figure below shows the abstract flowchart for this program. This should (hopefully) give you a better idea of what all needs to be done.

![](figures/flowchart.png)

#### Example Output

```
dsh> cd

dsh> ls -la
-rw-r--r--@ 1 dchiu  faculty  199  Feb  3 22:56 .dsh_motd
-rw-r--r--@ 1 dchiu  faculty  1554 Feb  3 22:56 feelGood.c

dsh> NotARealCommand -o
ERROR: NotARealCommand not found!

dsh> cat feelGood.c
#include <stdio.h>
#include <unistd.h>
int main() {
  while (1) {
    printf("Students think your MOTD is inspiring!\n");
    sleep(4);
  }
  return 0;
}

dsh> gcc -Wall feelGood.c -o feelGood

dsh> ./feelGood &

dsh> ls -l
-rw-r--r--@ 1 dchiu  faculty  1554 Feb  3 22:56 feelGood
-rw-r--r--@ 1 dchiu  faculty  1554 Feb  3 22:56 feelGood.c
Students think your MOTD is inspiring!

dsh> history
cd
ls -la
NotARealCommand -o
cat feelGood.c
gcc -Wall feelGood.c -o feelGood
./feelGood &
ls -l
history

dsh> exit
bash$
Students think your MOTD is inspiring!
Students think your MOTD is inspiring!
Students think your MOTD is inspiring!
```

#### Grading

```
This assignment will be graded out of 70 points:

[5pt] The MOTD is being handled error-free.

[35pt] User input is properly handled, and invalid commands (not found in PATH or
    current working directory) generates an error.

[20pt] Running a valid command  works as expected (in-foreground vs. in-background too).

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
