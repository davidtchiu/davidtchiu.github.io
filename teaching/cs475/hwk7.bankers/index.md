## CS 475 - Operating Systems

### Hwk: Banker's Safety Algorithm

#### Student Outcomes

- To learn and implement Banker's algorithm for deadlock avoidance

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- If you want to submit your code on Github, do this step. If not, you may skip this step. Make sure you already have a Github account. Login to github, and go here: [https://github.com/davidtchiu/cs475-hwk7-bankers](https://github.com/davidtchiu/cs475-hwk7-bankers). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From your Ubuntu virtual machine, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

```

git clone <your-github-url-for-this-project>

```

- If you aren't planning to submit your assignment via a Github link, then you can simply download the starter files onto your Ubuntu virtual machine using:

```

git clone https://github.com/davidtchiu/cs475-hwk7-bankers

```

#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `bankersSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./bankersSol <state file>`. This is how your solution should behave when it's done.

#### The State Input File

Your program will take a single command-line argument: the name of a state file to read. Here is the general format of a state file. If the file is not given on the command line, of if the file is not found, then simply print an error message.

```
<number of resource types>
<number of processes>
<blank line>
<total resource vector>
<blank line>
<max demand matrix>
<blank line>
<allocation matrix>
```

Here's a sample state file:

```
3
5

10  5 7

7 5 3
3 2 2
9 0 2
2 2 2
4 3 3

0 1 0
2 0 0
3 0 2
2 1 1
0 0 2
```

Read top-down, the file specifies the following state:

    - 3 resource types
    - 5 threads
    - There is a total of 10 instances of resource #0, 5 instances of resource #1, and 7 instances of resource #2.
    - The max matrix comes next. In its lifetimes, Thread #0 will require 7 instances of resource #0, 5 instances of resource #1, and 3 instances of resource #2. The other rows of the matrix tell us the lifetime demands of the remaining threads.
    - The allocation matrix comes last. Currently, Thread #0 has been allocated 1 instance of resource #1 and nothing else. The other rows of the allocation matrix tell us the current resource allocation for the remaining threads.

#### Vector/Matrix Functions

I would start by writing a small library of simple vector/matrix functions that will be used through out Banker's algorithm. For instance, I implemented functions to:

    - clone vectors/matrices
    - compare two vectors
    - add, subtract two vectors/matrices
    - print the contents of vectors/matrices

#### File Handling

To open a file for reading, look into [fopen()](https://www.cplusplus.com/reference/cstdio/fopen/). If the given state file exists, then `fopen()` should return a non NULL value. Notice the format of the state file. Every "token" is already separated by whitespace (either tab or newline). That's super convenient, because it allows you to use `fscanf()` to reach in each successive token.

For instance, here's how I've handled the first two lines of the state file:

```c
  int NRES; 	// number of resource types
	int NPROC;	// number of processes
  fscanf(fp, "%d", &NRES);
  fscanf(fp, "%d", &NPROC);
```

The rest of the file can be read using the same method, but be sure to allocate space for those vectors/matrices first!

#### The Safety Algorithm

Your task is to read in the contents of the given state file, and determine if the state is SAFE or UNSAFE by running the Banker's Safety algorithm. The pseudocode for this algorithm is given below:

```c
// m = number of resource types (3)
// n = number of threads (5)

boolean isSafe(Available, Alloc, Need) {

	Work[m] = Available.clone();
	Finish[n] = [0, 0, ..., 0] for all 0 <= i < n

	while (exists unfinished thread i && Need[i] <= Work) {
		// pretend that thread i finishes execution
		// then OS can reclaim thread i's allocated resources
		Work += Alloc[i]
		Finish[i] = 1
	}
	// there's an execution order in which all threads
	if (Finish == [1, 1, ..., 1])
		return true		// safe!
	return false		// unsafe!
}
```

In each iteration of your loop, you should be printing out which thread was chosen to run and the contents of the Work vector (for grading). If all threads can finish, then you should print `SAFE`. The sequence of the simulated execution of threads is a "safe schedule." You just need to print one safe schedule for full credit. If the state is determined `UNSAFE`, then further print out the current Need matrix. Example outputs found below.

#### Example SAFE Output

It is worth keeping in mind that multiple SAFE schedules may exist, so your output may differ from mine.

```
$ less safe.txt
3
5

10  5 7

7 5 3
3 2 2
9 0 2
2 2 2
4 3 3

0 1 0
2 0 0
3 0 2
2 1 1
0 0 2

$ ./bankers safe.txt
Run thread 1. Work: 5   3       2
Run thread 3. Work: 7   4       3
Run thread 0. Work: 7   5       3
Run thread 2. Work: 10  5       5
Run thread 4. Work: 10  5       7
SAFE!
```

#### Example UNSAFE Output

```
$ less unsafe.txt
3
5

10  3 7

7 5 3
3 2 2
9 0 2
2 2 2
4 3 3

0 1 0
2 0 0
3 0 2
2 1 1
0 0 2

$ ./bankers unsafe.txt
Run thread 3. Work: 5   2       3
Run thread 1. Work: 7   2       3
Run thread 2. Work: 10  2       5
UNSAFE! Need:
7       4       3
0       0       0
0       0       0
0       0       0
4       3       1
```

#### Extra Credit (+5pts lowest midterm)

A fair amount of extra credit can be earned and applied to your lowest midterm exam score. To earn the bonus, your program should list _all_ SAFE schedules.

#### Grading

```
This assignment will be graded out of 50 points:
[5pt]

[28pt] Proper synchronization is implemented
       (e.g., customers cannot leave before bartender receives payment).

[15pt] Your solution is free from deadlocks and starvation. All customers
       eventually get served and leave.

[2pt] Your program observes good style and commenting.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. I assume you wrote your program inside your virtual machine. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.
2. If you'd rather submit a "zipped" file on Canvas, do the following:

   - From the Terminal in your virtual machine,
   - Navigate to the directory that contains your homework directory.
   - Zip up your homework directory: `tar -czvf <file_name>.tar.gz <homework_dir>`

     - For example, if my homework directory is called `hwk6/`, and I want the zipped file to be called `hwk6.tar.gz`, use: `tar -czvf hwk6.tar.gz hwk6/`
     - You can un-zip this file later using: `tar -xzvf <file_name>.tar.gz`

   - Navigate to our course on Canvas, and find the assignment submission box.

   - Click on Submit Assignment, and you should be able to "browse" for your file

   - When you've selected the proper file, click Submit Assignment again to upload it.

3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu and Jason Sawin. 2015.
