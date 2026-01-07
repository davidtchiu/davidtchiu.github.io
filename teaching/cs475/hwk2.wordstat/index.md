## CS 475 - Operating Systems

### Hwk 2: Word Stats


#### Related Reading

- [Dive into Systems Chapter 2.1-2.3](https://diveintosystems.org/book/C2-C_depth/index.html)


#### Instructions

Open your VS Code and get connected to your Remote Development environment. If you don't know what I'm referring to, complete [Hwk 1](../hwk1.vscode).

  - Once you're logged in, you can open a terminal from the `Terminal` menu.


#### Student Outcomes

- To work with user input.
- To work with structs, strings, arrays, and pointers.

#### Preamble

This assignment does not require concepts that you learned in Lab 3. Therefore, you do not need to `malloc` any memory to complete the assignment. This assignment is all about the fundamentals, and work involving pointers.

#### Assignment: Word Stats (Graded)

You're ready to write your first C program for this class! This assignment tries to incorporate almost all of the concepts you learned in the first two "C labs" to make sure you start with strong foundation. Specifically, the focus here is on structs, string manipulation and pointers. 

You are to write a program that reports some basic statistics on user-input strings. When your program begins, it should ask the user to enter a string. Once it is entered, your program should parse all words out of this string, and maintain some basic stats. Continue prompting for more input until the user enters `#`, at which point your program outputs a menu with the following options:

```txt
Enter 1 to print frequencies.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
```
###### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- Login to github, and go here: [https://github.com/davidtchiu/os-wordstat](https://github.com/davidtchiu/os-wordstat). 

- Click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```

- This should download the starter code to your in a directory called `os-wordstat`. After you've done this, you can work freely from VS Code or any other editor. You should see these files inside your new homework directory:

- `Makefile` - Do not make changes to this file. It is used for compiling
- `menu.h` - This file should contain menu-option constants and function declarations
- `menu.c` - You will implement the functions declared in `menu.h` in this file
- `stats.h` - This file should contain constants, `WordStats` struct declaration, function declarations
- `stats.c` - You will implement the functions declared in `stats.h` in this file
- `main.c` - This file will contain the `main()` function, and other related helper functions

##### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `wordstatSol`. You can run it from the terminal by first navigating in to the Hwk1 directory and typing the command `./wordstatSol`.

##### `make`: Compiling Your Code and Cleaning Your Codebase

Compiling a multi-file C program can be tricky, and requires multiple steps and careful sequencing. To simplify the compilation process, I have provided a _script_ for you to run. As long as the `Makefile` is  in your project directory, you can run the command `make` on the terminal, and it will resolve the rules inside the `Makefile` and compile your project (hopefully). The name of the binary executable has been configured to be called `wordstat`, so if all goes well, you should be able to run `./wordstat` after compiling.

- One related matter is the `make clean` command. This command will remove all intermediate files and binaries, but it will leave your source code alone. Use this command right before you push to github, for instance, because you wouldn't want these `.o` files to gum up your repository.


##### Program Requirements

1. The program starts by accepting user inputs (strings), not by printing the options menu. Strings are submitted by the user one line at a time. Each string should be processed (update your word stats structure), before accepting the next string. Continue accepting strings until a line with the singular value `#` is read, at which point, you should print the options menu.

2. You may not assume that a user always enters a single word per line. If the user enters multiple words on the same line, you should tokenize each one (because need to count the number of words too). You may assume that the entire line of user-input cannot exceed `128` characters. (I have defined a constant `MAX_INPUT_LEN` to store 128 in `main.c`.) Ignore any characters that is input beyond this limit. 

    - You should use the `fgets()` function, given in C's `stdio.h` library, to obtain a line of input (with spaces) from the user.
    - To split a string into tokens, you should look into using the `strtok()` function given in the `string.h` library.

3. Inside `stats.h`, declare a structure named `wordstats_t` that can hold the following stats. 
    - Vowel count
    - Consonant count
    - Word count
    - An array that stores the counts of each alphabet

4. We'll use a function to update the above structure for each line of user input that's read.
    - Still in `stats.h`, below your `wordstat_t` declaration, you'll find the function declaration `void updateStats(wordstats_t *stats, char *str);` that accepts a pointer to your struct and a string to process. 
    
    - A **function declaration** is just the function header without the implementation. (Not even the input parameters need to have names, but it's okay if they do). We're basically telling the C compiler "this function exists somewhere in these files," so compile confidently if you come across its usage but haven't seen its definition yet!
    
    - Declaring functions seems bit foreign, but is necessary in C if you want to separate your functions into another file. In any file that needs to use this function, we can simply `#include "stats.h"` in the file header.

    - Now go inside the `stats.c` file to write `updateStats(stats, str)`.

5. Once you read a single `#` (if it's not followed by a NULL character, then you should update stats!), you need to show the options menu. Your program should now accept numerical options. If an unknown option is entered, alert the user and exit the program. Note that there is an option to return to string-input mode.
   - This time, write your own function to print the menu. Put the declaration in `menu.h` (I don't care what you name the function.), and put the implementation in `menu.c`.

6. The bars in the histogram that you print must be vertical (see below). Point deductions will be taken if you print horizontal bars. Each of the 26 bars represents the count of letters that your program observed. The frequency itself must sit below the letter label.

   - Write a function in `stats.h`/`stats.c` to print the histogram given a pointer to your struct.

7. Your `main()` function should create a wordstat struct, and handle the user input.

8. Things to watch out for:
    - How do you print a `%` character, if `%` is meaningful in the `printf` format?
    - Under menu options, if the user inputs a string instead of one of the acceptable menu options, your program needs to exit immediately.
    - When counting words, you can use [strtok()](https://cplusplus.com/reference/cstring/strtok/) to split it up (by newline, tab, and space), but unlike other languages, the string will not survive! That is, once you're done looping through all the tokens with strtok, the string will be destroyed.

##### Sample Output
oops (errorenous option should cause exit)

```$ ./wordstat
Enter strings (# to stop):
asdf asdf
#
*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
asdf
Exiting...
```

##### Sample Output

```
$ ./wordstat
Enter strings (# to stop):
APPle caT
orangE goat
greenish blue fish
#
*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
1

Words = 7 , Average Word Length = 4.86
Vowels = 14 (41.18%), Consonants = 20 (58.82%), Total= 34

*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
2
            *                                                                 
*           *                                                                 
*           *     *                                                           
*           *     *  *  *        *     *  *  *     *  *  *                    
*  *  *     *  *  *  *  *        *     *  *  *     *  *  *  *                 
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z  
4  1  1  0  5  1  3  2  2  0  0  2  0  2  2  2  0  2  2  2  1  0  0  0  0  0  

*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
3
Enter strings (# to stop):
grey SHARK
!!@@!##
@#@#@#@#
#bruh bruh bruh              
#
*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
1

Words = 14 , Average Word Length = 5.07
Vowels = 19 (34.55%), Consonants = 36 (65.45%), Total= 55

*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
2
                                                   *                          
            *        *                             *                          
*           *        *                             *                          
*  *        *     *  *                             *        *                 
*  *        *     *  *                             *  *     *                 
*  *        *     *  *  *        *     *  *  *     *  *  *  *                 
*  *  *     *  *  *  *  *     *  *     *  *  *     *  *  *  *           *     
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z  
5  4  1  0  6  1  4  6  2  0  1  2  0  2  2  2  0  7  3  2  4  0  0  0  1  0  

*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
19
Error: Unknown option 19.

*** WORD STATS MENU ***
Enter 1 to print stats.
Enter 2 to print histogram.
Enter 3 to return to inputting more strings.
Enter 4 to quit.
Exiting...
```

#### Grading

```
This assignment will be graded out of 20 points:

[1pt] Appropriate constants have been defined
[3pt] Your program handles multiple-word inputs (with spaces)
[4pt] Your program updates the stats and histogram appropriately
[4pt] Your program prints a vertical (not horizontal) histogram
[4pt] Basic error checking is handled, such as entering invalid menu options
[3pt] Your program runs repeatedly until # is entered, or if a string is entered erroneously
[1pt] Your program observes good style and commenting.
``` 

#### Submitting Your Assignment

1. Commit and push your code to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.


#### Credits

Written by David Chiu. 2022.
