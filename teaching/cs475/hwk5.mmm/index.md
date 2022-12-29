## CS 475 - Operating Systems

### Hwk: Multi-Threaded Matrix Multiplication

Matrix-matrix multiplication (mmm) is a cumbersome, but widely used, application. It's used in graphics, scientific computing, engineering applications, Deep Learning and AI, and so on. It's no wonder it is found in many benchmarking suites for evaluating system performance and new chipsets. Fortunately, it's also highly parallelizable.

In this assignment, you will be implementing and evaluating the performance for sequential and parallel implementations of mmm. You may assume that you'll only be multiplying square matrices. Given two matrices $$a[n,n]$$ and $$b[n,n]$$, their product $$c[n,n]$$ is defined:

$$
c[i,j] = \sum_{k=0}^{n-1}a[i,k]\cdot b[k,j]
$$

$$
    \forall~i : 0 \le i \le n-1
$$

$$
    \forall~j : 0 \le j \le n-1
$$

#### ZyBooks References

- 2D arrays
- Memory allocation of 2D arrays

#### Student Outcomes

- To write a multi-threaded program using the `pthread` library.
- To work with the work-sharing paradigm in parallel computing.
- To be exposed to timing runs and producing results for performance evaluation.

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- If you want to submit your code on Github, do this step. If not, you may skip this step. Make sure you already have a Github account. Login to github, and go here: [https://github.com/davidtchiu/cs475-hwk5-mmm](https://github.com/davidtchiu/cs475-hwk5-mmm). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From your Ubuntu virtual machine, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

   ```
   git clone <your-github-url-for-this-project>
   ```

- If you aren't planning to submit your assignment via a Github link, then you can simply download the starter files onto your VS Code using:

   ```
   git clone https://github.com/davidtchiu/cs475-hwk5-mmm
   ```

#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `mmmSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./mmmSol`. 

#### Program Requirements

Before you get started: Even though we're reading from and writing to 2D arrays that are shared amongst all threads, there is actually no need for synchronization (locking, semaphores) in this assignment. You should try understand why synchronization is not necessary for the work done here. Recognize where the threads are reading from, and writing to, and check if race conditions can happen.

1. To run your program, you must support the following commands:

   ```
   $ ./mmm S <size>
   ```

   This will cause your program to run MMM in sequential mode on matrices of `size` by `size` dimension. There is no need to fire off a thread when running in sequential mode. Simply call the MMM function to compute the multiplication.

   or

   ```
   $ ./mmm P <threads> <size>
   ```

   This will cause your program to run MMM in parallel mode on matrices of `size` by `size` dimension. Specifically, the specified number of worker threads must be spawned by the main() thread, and the work of matrix multiplication should shared among those threads. The number of threads should be a positive integer, and it should not exceed `size`.

   In either mode, `size` should also be a positive integer. If running in parallel mode, it should be be less than the number of threads.

2. If the run syntax is incorrect or unexpected, print out an error (with a hint on proper syntax) and terminate.

   - **Proper run syntax:**
     This syntax will run a sequential version of the code on 25 by 25 matrices.

     ```
     $ ./mmm S 25
     ```

     This syntax will run a parallel program on 4 threads and 1000 by 1000 matrices.

     ```
     $ ./mmm P 4 1000
     ```

   - **Invalid run syntax:**
     The version below is incorrect because the size of the matrices does not follow `S`.
     ```
     $ ./mmm S
     ```
     The version below is incorrect the parallel version expects both the number of threads and the size of matrices, in that order.
     ```
     $ ./mmm P 1000
     ```

3. Your `main(int argc, char *argv[])`. Command-line arguments can be access through `argc` and `argv`. Specifically, `argc` refers to the number of tokens given on the command line, including the command to run the executable itself. `argv` is a string array containing the tokens given (much like the `String[] args` in Java).

4. Dynamically allocating 2D arrays: Because the number of threads and the `size` of the matrices are given at runtime, you must dynamically allocate memory on the heap. Remember to free-up memory when done. To do this, should store pointers to the input and output matrices in global (thread-shared) scope. A pointer to a 2D array of doubles would look like this: `double **matrix;` Then inside `main()`, you'll need to first allocate `size` number of pointers to doubles (that's the first dimension in the matrix), then iterate through that array and allocate `size` number of doubles (that's the second dimension of the matrix).

5. Once you allocate the input matrices, you should initialize them with random double values between 0 and 99.

6. **Work-Sharing Approach:** If the parallel mode (`P`) is selected, your `main()` function must split the work evenly/fairly among the threads. There are many ways to do this, and I'll leave this decision up to you. You're welcome to experiment with different approaches!

   - Would you assign each thread to compute a set of rows in the result? Or a set of columns? Would it make a difference?
   - Maybe you could assign a thread to compute a block of elements instead of rows or columns?

   This decision will likely impact the performance of your parallel algorithm. Let's see how well you can do! You must also run the code sequentially, so that you can compare the speeds! (See below on how to clock speeds).

   - Which ever approach you use, remember to provide each thread (as an input argument to the thread function) its range of work. It's usually through a `struct`. If you forget how to do this, refer to the examples I gave in class: [Parallel Sum](https://github.com/davidtchiu/cs475-parSum) and [Parallel Sort](https://github.com/davidtchiu/cs475-parInsertionSort).

7. Validation: An important final step is to verify that the parallel version of your code is correct. To do this, you should compare the matrices generated by the sequential algorithm and the parallel algorithm whenever the parallel mode `P` is run. Check that the greatest difference between any two corresponding elements of the output matrices generated by the sequential code and the parallel code is zero.

8. You must output the time taken, in seconds, for the calculation to take place. To do this, you should use the `rtclock()` function that is provided to you. When running in parallel mode, you should also show the speedup over the sequential version, which is computed to be: $$T_{sequential} / T_{parallel}$$. If you did this right, you should experience significant speedup, since matrix multiplication has a significant fraction of code that is highly parallelizable.

   - Smoothing the results: Always run the program $$N+1$$ times: throwing away the time for the first run, and report the average time of the subsequent $$N$$ runs. This is to warm-up the cache (first run) and to smooth-out the results. $$N = 3$$ is a good value.

   - Only clock the relevant portions of code. For instance, I would not consider the time it takes to allocate and free-up memory for the matrices, since these are performed for both sequential and parallel versions. However, you must take into account the time it takes to create, join, and free-up threads in the parallel version, since they are considered necessary overheads for using threads.

#### Example Output

It should be noted that your mileage may vary. I'm running this on a MacOS X system with a an Intel 2.8 GHz Core i7 processor (quad core, hyper-threading enabled) and 16 GB of RAM.

```
# ./mmm
Usage: ./mmm <mode> [num threads] <size>


# ./mmm S
Usage: ./mmm <mode> [num threads] <size>


# ./mmm S 10
========
mode: sequential
thread count: 1
size: 10
========
Sequential Time: 0.000577 sec


# ./mmm S 100
========
mode: sequential
thread count: 1
size: 100
========
Sequential Time: 0.004690 sec


# ./mmm P 100
Error: parallel mode requires <size>


# ./mmm P 2 10
========
mode: parallel
thread count: 2
size: 10
========
Sequential Time: 0.000616 sec
Parallel Time: 0.000086 sec
Speedup: 7.177778
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 2 100
========
mode: parallel
thread count: 2
size: 100
========
Sequential Time: 0.004705 sec
Parallel Time: 0.001822 sec
Speedup: 2.582439
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 4 200
========
mode: parallel
thread count: 4
size: 200
========
Sequential Time: 0.042224 sec
Parallel Time: 0.006170 sec
Speedup: 6.843651
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 4 300
========
mode: parallel
thread count: 4
size: 300
========
Sequential Time: 0.150054 sec
Parallel Time: 0.019833 sec
Speedup: 7.565840
Verifying... largest error between parallel and sequential matrix: 0.000000


# ./mmm P 4 1000
========
mode: parallel
thread count: 4
size: 1000
========
Sequential Time: 11.276177 sec
Parallel Time: 0.743291 sec
Speedup: 15.170611
Verifying... largest error between parallel and sequential matrix: 0.000000
```

#### Grading

```
This assignment will be graded out of 45 points:

[5pt] User input is properly handled, and invalid commands generates an error.

[5pt] Sequential version of mmm is properly implemented.

[20pt] Parallel version of mmm is properly implemented.

[5pt] You must verify that parallel version is correct by comparing the result
      matrix with one generated using the sequential algorithm.

[5pt] Your work-sharing model for the parallel version is producing good
      performance.

[5pt] You are properly timing your results over multiple runs, and timing only
      relevant portions of code.
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. I assume you wrote your program inside your virtual machine. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.

2. If you'd rather submit a "zipped" file on Canvas, do the following:

   - From the Terminal, navigate to the directory that contains your homework directory.
   - Navigate to the directory that contains your homework directory.
   - Zip up your homework directory: `tar -czvf <file_name>.tar.gz <homework_dir>`

     - For example, if my homework directory is called `hwk5/`, and I want the zipped file to be called `hwk5.tar.gz`, use: `tar -czvf hwk5.tar.gz hwk5/`
     - You can un-zip this file later using: `tar -xzvf <file_name>.tar.gz`

   - Navigate to our course on Canvas, and find the assignment submission box.

   - Click on Submit Assignment, and you should be able to "browse" for your file

   - When you've selected the proper file, click Submit Assignment again to upload it.

3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2022.
