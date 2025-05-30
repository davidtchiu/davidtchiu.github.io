## CS 475 - Operating Systems

### Hwk 7: Banker's Algorithm
In modern operating systems, processes and threads frequently request access to shared resources: memory, files, devices, locks, semaphores, and so on. If resource allocation is not handled carefully, the system can enter a deadlock state where no progress is possible. One of the classic strategies to avoid deadlock before it occurs is Banker’s Algorithm, found by (who else?) Edsger Dijkstra.

Just as a banker must ensure they never allocate loans that could bankrupt the bank, an OS must ensure that it only grants resource requests if doing so leaves the system in a safe state. The idea is to simulate allocations *before* actually making them, and deny requests that would lead to a potentially unsafe (and therefore deadlock-prone) condition.

In this assignment, you will take the role of the OS and implement the safety-checking system.

#### Student Outcomes
- Understand the distinction between safe and unsafe states in resource allocation.
- Track and manage resources using data structures for allocation, maximum demand, need, and availability.
- Simulate resource request handling using the Banker's safety algorithm.
- Detect whether a system state is safe after a hypothetical allocation.



<!-- 
#### Work in Groups

You are required  to work in groups for this assignment. Please write in your names in the given `README.md` file as part of the project repo. Here are your assigned groups:

```
Lucas G, Sasha S, Langston A
Aidan T, Brian M,  Henry B
Caleb P, Emilee O, Jonah K
Abram R, Matthew A, Jaykob W
Matthew Z, Nick P, Owen R-L
Jared V, Georgia K, Mitch H
Svetlana S, Zale F, Penny R
``` -->

#### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- Login to github, and go here: [https://github.com/davidtchiu/os-bankers](https://github.com/davidtchiu/os-bankers). 

- **Please do not fork from my repository!** Instead, click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```


- This should download the starter code in a directory named after your Github repository. 


#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `bankersSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./bankersSol <system-state-file>`. This is how your solution should behave when it's done.

There is a bonus version for this assignment, and the working solution is also provided, called `bankersBonusSol`.

#### The System-State Input File

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

When read top-down, the file specifies the following state:

- 3 resource types
- 5 threads
- There is a total of 10 instances of resource #0, 5 instances of resource #1, and 7 instances of resource #2.
- The max matrix comes next. On the first line, it means that Thread #0 will require 7 instances of resource #0, 5 instances of resource #1, and 3 instances of resource #2 in its lifetime. The other rows of the matrix tell us the lifetime demands of the remaining threads.
- The allocation matrix comes last. Currently, Thread #0 has been allocated 1 instance of resource #1 and nothing else. The other rows of the allocation matrix tell us the current resource allocation for the remaining threads.

#### Vector/Matrix Functions

I would start by implementing a small library of simple vector and matrix functions that will be used through out Banker's algorithm. You can assume that a vector is just an int array, and a matrix is 2D array of ints in our implementation. Here are some good ones for you to implement.

- Clone (deep copy) vectors/matrices
- Compare two vectors: Is one "less than" the another? Are two vectors equal?
- Add and subtract two vectors and matrices
- Print the contents of vectors and matrices

#### Part I: File Handling

To open a file for reading, look into [fopen()](https://www.cplusplus.com/reference/cstdio/fopen/). If the given state file exists, then `fopen()` should return a non-NULL value. Notice the format of the state file. Every "token" is already separated by whitespace (either tab or newline). That's super convenient, because it allows you to simply use successive `fscanf()` calls to grab every token in the file.

For instance, here's how I've handled the first two lines of the state file:

```c
int NRES; 	// number of resource types
int NPROC;	// number of processes
fscanf(fp, "%d", &NRES);
fscanf(fp, "%d", &NPROC);
```

The rest of the file can be read using the same approach, but be sure to allocate space for those vectors/matrices first!

#### Part II: Sanity Check

Before you run the safety algorithm, your program should do a sanity check to ensure the values given in the files are correct. There are two areas in which you need to do this:

1. Ensure that the currently allocated resources do not exceed the total number of resources.
2. Ensure each thread's needs do not exceed its max demands for each resource type.

If either of these tests fail, output an error and exit.

##### Example Failed Test 1 Output

```
$ less testfail1.txt
3
5

0 0 0

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

$ ./bankers testfail1.txt
Integrity test failed: allocated resources exceed total resources
```

##### Example Failed Test 2 Output

```
$ less testfail2.txt
3
5

10  5 7

7 5 3
3 2 2
2 0 2
2 2 2
4 3 3

0 1 0
2 0 0
3 0 2
2 1 1
0 0 2

$ ./bankers testfail2.txt
Integrity test failed: allocated resources exceed demand for Thread 2
Need -1 instances of resource 0
```

#### Part III: The Banker's Safety Algorithm

Upon passing the sanity checks, your task is to read in the contents of the given state file, and determine if the state is SAFE or UNSAFE by running the Banker's Safety algorithm. The pseudocode for this algorithm is given below:

```c
// m = number of resource types (3)
// n = number of threads (5)

isSafe(Available, Alloc, Need) {

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
		return true	// safe!
	return false		// unsafe!
}
```

If all threads can finish, then you should print `SAFE`, followed by all "safe schedules", that is, the sequence of the simulated execution of threads such that all threads can finish. Even though a single safe schedule is sufficient for determining that the current state is safe, you need to find and print **ALL** safe schedules for full credit. If the state is determined `UNSAFE`, then further print out the threads that can't finish. Example outputs found below.


#### Example Safe Output

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
SAFE:  T1 T3 T0 T2 T4
SAFE:  T1 T3 T0 T4 T2
SAFE:  T1 T3 T2 T0 T4
SAFE:  T1 T3 T2 T4 T0
SAFE:  T1 T3 T4 T0 T2
SAFE:  T1 T3 T4 T2 T0
SAFE:  T1 T4 T3 T0 T2
SAFE:  T1 T4 T3 T2 T0
SAFE:  T3 T1 T0 T2 T4
SAFE:  T3 T1 T0 T4 T2
SAFE:  T3 T1 T2 T0 T4
SAFE:  T3 T1 T2 T4 T0
SAFE:  T3 T1 T4 T0 T2
SAFE:  T3 T1 T4 T2 T0
SAFE:  T3 T4 T1 T0 T2
SAFE:  T3 T4 T1 T2 T0
```

#### Example Unsafe Output

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
UNSAFE:  T0 T4 can't finish
```

#### Grading

```
This assignment will be graded out of 75 points:
[2pt] Print out an error message if no file is given on the command line.

[3pt] Print out an error message if the file given on the command line
      does not exist.

[5pt] The state file is being read into appropriate structures in your
      program.

[5pt] Your program determines the contents of the Available vector and the
      Need matrix.

[10pt] Sanity checks to:
  - Ensure that the currently allocated resources do not exceed the total
	number of resources.

  - Ensure each thread's needs do not exceed its max demands for each
	resource type.

[25pt] The safety algorithm is properly implemented, and does not carry
       side effects. That is, its execution will not permanently change the
       state of your system. (This is why we clone various structures.)

[20pt] If the state is safe, your algorithm prints *all* safe schedules.

[5pt] Because the number of threads and resource types are unknown until
      untime, your program needs to observe good memory management, including
      freeing up memory when possible.
```

#### Submitting Your Assignment
1. Commit and push your code to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.

#### Credits

Written by Adam Smith and David Chiu.
