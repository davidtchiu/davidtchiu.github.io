## CS 475 - Operating Systems

### Hwk: Remote Development

In this ungraded "preliminary assignment," we will set you up to develop on a remote server. Here's why we must do this, instead of developing on your own machines. C is highly dependent on the  environment on which it compiles and executes. This is everybody's worst nightmare: turning in an assignment you spent hours on, only to have it not compile or execute on your instructor's machine. In fact, having a common runtime environment was what made Java (and the Java Virtual Machine, JVM) so successful when it was introduced in the mid-90s.

It's therefore important that we all code a common environment, so I've prepared a remote server for everyone to log into.

#### Student Outcomes
- Setting up VS code for remote development on a Linux server
- Learning the basics on how to navigate Linux using the command line
- Compiling and running your first C program

#### Installing Development Tools

- Download and install [VS Code](https://code.visualstudio.com/) if you don't already have it installed on your computers. This is what we'll be using for writing all our assignments for this class.

- Open VS Code and click on the **"Extensions"** tab on the left hand side. You'll want to search for and install the following packages:
  - **C/C++** by Microsoft
  - **C/C++ Themes** by Microsoft
  - **Remote Development** by Microsoft

- You may have to restart VS Code after installing each of those extensions. Go ahead and do so.

#### Getting Connected to the Remote Server

- I've set up a Linux server for you to connect to and develop on. Make a note of the following information:
  ```
  Server IP Address: 149.165.174.87
  Your Username: yourPugetSoundUsername
  Your Password: yourPugetSoundID
  ```
  The IP address and your username will not change during this class, but  you *can* change your password later. 

- Back in VS Code, check out the menu up on top, and click on `View -> Command Palette`. Then type: `Remote-SSH: Add New SSH Host...`. It should autocomplete after typing the first few letters. Choose to run this command. In the box that pop up, enter:
  ```
  ssh yourPugetSoundUsername@IPAddress
  ```
  For example, mine would look something like:
  ```
  ssh dchiu@149.165.174.87
  ```

- Next, VS Code may ask you to choose an SSH configuration file. Just select the one that's highlighted.

- You'll then be prompted for your password. Enter the one that I assigned you.

- VS Code will then ask you what platform the remote server is using. Select `Linux` in the option menu. Then it's going to take a bit of time to install the necessary files to get you set up.

- Once everything is set up, you should see an empty VS Code editor. On the left-side panel, click on the button called `Open Folder`. Choose `/home/yourUsername` (which should be the default option). Important: This "path" `/home/yourUsername` is known as your **home directory** on the server. Only you (and I) have access to it. Think of it as your private, personal folder on the server. This is where all your code will go.

-  You may be prompted for your password again, followed by a prompt to trust and accept the secure certificate. Click yes on this screen.

- If you did all the steps correctly, you should see the contents of your home directory on the left-side panel. Here's what mine looks like:

  <img src="figures/Menubar_and_dchiu__SSH__149_165_174_87_.png" width="250px" />

  If you see this, congrats, you're all set up. If not, let me know.

# Using the Terminal and Editor
- You only have to do the steps listed in the previous section that one time. Let's get a feel for how to start up the coding environment from this point forward.

- Quit VS Code, and start it back up again.

- On the left-hand, you'll see a new button on the far left called **Remote Explorer**. Click on it, then click on the profile you want to connect. It should simply be `/home/yourUserName`.

  <img src="figures/Menubar_and_dchiu__SSH__149_165_174_87_2.png" width="250px" />

- You will be prompted for your password, and afterwards, you should see the contents of your home directory once again.

- The command-line terminal should show up on the bottom of your screen. Here's what mine looks like:

  <img src="figures/dchiu__SSH__149_165_174_87_.png" width="400px" />

  Before "windows" were invented, the terminal was the _only_ user interface to operating systems. We use it to do everything that you can do with windows: accessing your files and folders, running and quitting programs, editing files, etc. Because the Linux server that I provided is "headless" (i.e., stripped down OS that doesn't support windows and graphical interfaces), you need to know the basics of how to navigate the command line.
  
- Before we get started, print this cheatsheet so you have it in front of you. It doesn't include *all* the commands that are available, but it does cover the essentials:

  - [Command-line cheat sheet](https://commons.wikimedia.org/wiki/File:Unix_command_cheatsheet.pdf)

## Files, Directories, and Paths

- **File System as Trees:** Think of the computer's file system as a tree (okay really it's a graph, but let's keep it simple), where the nodes can be directories (that is, folders) and files. As in all trees, edges represent a parent-child relationship. In the context of file systems, this parent-child relationship expresses the what files and directories (children) are enclosed within a (parent) directory. Clearly, files are always leaf nodes (they don't have children), but directories may have children. The root node of the file system is called the **root directory** -- just think of it as the top-level directory that stores _everything_.

- Everything's still a little abstract, so let's run the `tree` command to see the file system. From your terminal, run:
  ```
  $ tree
  ```
  Here's my output:
  ```
  dchiu@os-class:~$ tree
  .
  ├── Testing
  │   ├── a.out
  │   └── test.c
  └── snap
      └── tree
          ├── 18
          ├── common
          └── current -> 18

  6 directories, 2 files
  dchiu@os-class:~$ 
  ```

  - As you can see, the `tree` command recursively descends all directories and subdirectories. This shows that I have two directories currently: one named `Testing` and another named `snap`. `Testing` has two files in it: `a.out` and `test.c`. We know they're files because they are leaf nodes. Inside the `snap` directory, we have yet another directory called `tree`. Interestingly, check out the `current` file. It's not really a file at all... it's actually a **symbolic link** (that is, a shortcut or alias) to the file named `18`.

  - Another detail to notice from the output is that this is only a partial view of the file system. Clearly, there are thousands of more files stored on this machine, but this output only shows you what's pertinent. When you start the terminal, the OS *already placed* you inside the **current working directory**. The default cwd is your "home directory". This is the folder that has been assigned to your account, which no one else (except me and you) should be able access. When you run `tree`, it only shows you the file system rooted at your cwd.

- **Paths (Slashes and Dots)** Before you can master the terminal, you have to understand what **paths** are. Paths are used to locate specific files and directories in the machine's file system. For instance, my **Home Directory** is `/home/dchiu`. 

  - **Slashes:**  The slashes `/` in a path important. They denote directory descent. So `/home/dchiu/` means: traverse into the root directory (`/`), then into the `home/` directory, and finally into the `dchiu/` directory. The trailing slash is optional. `/home/dchiu` is the same as `/home/dchiu/`

  - **Relative Paths:** All the paths that we've seen thus far are called _Full (or Absolute) Paths_. That is, you have to give the full location to the resource starting all the way from the beginning at the root directory. This gets old fast. If my current working directory is `/home/dchiu/Web/Teaching/cs475/2023/spring` and I simply want to edit `AAA.txt` and then `BBB.txt` within it, it would drive you nuts to have to type out the full paths each time. To make our lives easier, there are shortcuts we can use:

    - `./` means the current working directory
    - `../` means the parent of the current working directory (1 level up)
      - Yes, you can stack these. `../../` means 2 levels up from the current working directory. If you want to go 3 levels up, then you can use `../../../`, and so on..


- Here's a [bootcamp](https://davidtchiu.github.io/teaching/cs240/lab.cmd/) from my other course you can try out.

- `pwd`: returns your current (or present) working directory
- `cd [path]`: changes your current working directory to path. If path is not given, then it (usually) defaults to your home directory. Note the following two special paths:
  - `.` returns the current directory
  - `..` returns the parent directory
  - Paths can be chained. For instance, cd `../../a/` will navigate you up two parent directories, then into `a/`
- `ls -l [path]`: lists files and directories in the optional given path. If path is not given, then it defaults to your current working directory
- `mkdir <name>`: creates directory called name in current working directory
- `code [name]`: opens the VS Code editor on the given file name


#### Credits

Written by David Chiu. 2022.
