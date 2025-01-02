## CS 475 - Operating Systems

### Hwk: Multi-Threaded Matrix Multiplication

Matrix-matrix multiplication (MMM) is commonly used in computer graphics, scientific computing, engineering applications, deep learning and AI. It's no wonder that the MMM algorithm is found in many benchmarking suites for evaluating system performance and new architectures. Given two matrices $$a$$ and $$b$$, their product $$c$$ is defined:

$$
c[i,j] = \sum_{k=0}^{n-1}a[i,k]\cdot b[k,j]
$$

$$
    \forall~i : 0 \le i \le n-1
$$

$$
    \forall~j : 0 \le j \le n-1
$$

For simplicity, you may assume that you'll only be multiplying square matrices in this assignment. 
You will be implementing a parallel, multithreaded version of mmm.

#### Student Outcomes

- To write a multi-threaded program using the `pthread` library.
- To work with the data-parallel paradigm.
- To be exposed to timing runs and producing results for performance evaluation.

#### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- Login to github, and go here: [https://github.com/davidtchiu/os-matmult](https://github.com/davidtchiu/os-matmult). 

- **Please do not fork from my repository!** Instead, click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```


- This should download the starter code in a directory named after your Github repository. 


#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `mmmSol`. You can run it from the terminal by first navigating in to the homework directory and typing the command `./mmmSol`. 

#### Before you get started
In this assignment each thread is writing to its own isolated location in memory. That is, threads are not contending to read and write to the *same* memory location, and therefore **race conditions are not possible (phew! Don't have to worry about data races on this assignment)**. You should verify this to be the case. On a piece of paper, multiply two square matrices together to form a new square matrix. You should pay attention to how the new matrix is geneated. To calcuate the value of a cell, do you have to read any other cells from the same matrix you're writing to?

This helps to simplify our parallelization work, because we don't need to synchronize threads.


#### Program Requirements


1. To run your program, you must support the following commands:

   ```
   $ ./mmm S <size>
   ```

   This will cause your program to run MMM in sequential (serial or non-parallel) mode on matrices of `size` by `size` dimension. There is no need to spin up another thread when running in sequential mode. Simply call the `mmm_seq()` function, which you still need to implement, to compute the multiplication.

   or

   ```
   $ ./mmm P <threads> <size>
   ```

   This will cause your program to run MMM in parallel mode on matrices of `size` by `size` dimension. The specified number of worker threads must be forked by the `main()` thread, and the work of matrix multiplication should shared among those threads. The number of threads must be a positive integer, and it must not exceed `size`.

   In either mode, `size` must be a positive integer.

2. If the run syntax is incorrect or unexpected, print out an error (with a hint on proper syntax) and terminate.

   - **Proper run syntax:**
     This syntax will run a sequential version of the code on 25 by 25 matrices.

     ```
     $ ./mmm S 25
     ```

     This syntax will run a parallel version on 4 threads and 1000 by 1000 matrices.

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

3. Your `main(int argc, char *argv[])`. Command-line arguments can be access through `argc` and `argv`. Specifically, `argc` refers to the number of arguments given on the command line, including the command to run the executable itself. `argv` is a string array containing the arguments (much like `String[] args` in Java). Once you parse out the command line arguments, store the mode (sequential vs. parallel) as an integer in the `mode` global, and store the dimension of your matrices in the `size` global.

4. Dynamically allocating 2D arrays: Because the number of threads and the `size` of the matrices are given at runtime, you *must*  allocate memory on the heap. How convenient -- those matrices on the heap would be shared across threads! Remember to free-up memory and clean up any dangling pointers when you're done using them. I would declare pointers to the input matrices and the result matrix in global scope. A pointer to a 2D array of `doubles` would look like this: `double **matrix;` Then inside `mmm_init()`, you'll need to first allocate `size` number of pointers to `doubles` (that's the first dimension in the matrix), then iterate through that array and again allocate `size` number of `doubles` (that's the second dimension of the matrix).

      To accomplish this takes two steps (one in each "dimension" of the array.) Here's an example to create an N by M matrix of `ints`.

      ```c
      // declare this somewhere in global scope (for thread access)
      int **matrix;
      ```

      - The `**` syntax may at first seem confusing. However, recall that an array is just a pointer. So, an array of pointers can be interpreted to be a pointer to pointers. Therefore, `array` has been declared as `**matrix`. (If you ever needed a 3 dimensional array, then you would use `***`, and so on.)

         Elsewhere in your code, say `mmm_init()`, you'll allocate space:
      
         ```c
         // malloc a size N array of pointers to ints
         matrix = (int**) malloc(sizeof(int*) * N);

         // iterate through each row and malloc a size N array of ints
         for (int i = 0; i < N; i++) {
            matrix[i] = (int*) malloc(sizeof(int) * M);
         }
         // can now have access to matrix[i][j]
         ```

      - Don't forget, you will need to free the 2D array later on. Do so by individually freeing every row, then free the original pointer.

         ```c
         // free each row
         for (int i = 0; i < N; i++) {
            free(matrix[i]);
            matrix[i] = NULL;  // dangling pointer
         }
         // free original array
         free(matrix);
         matrix = NULL;  // dangling pointer
         ```

5. Once you successfully allocate the input matrices, you should initialize them with random `double`s between 0 and 99. 

6. **Data Parallelism:** If the parallel mode (`P`) is selected, your `main()` function must split the work evenly among the threads. There are many ways to do this, and I'll leave this decision up to you. You're welcome to experiment with different approaches!

   - Maybe you can assign each thread to compute a set of rows in the result? A set of columns? A k-by-k block? Would it make a difference?
   
   - Which ever work-sharing approach you use, remember to provide each thread (as an input argument to the thread function) its "range of work." As I showed in class, this is usually done through allocating a `struct` and putting information inside that `struct` before passing it to each corresponding thread. For instance, if I want each thread to compute a set of rows in the result matrix, I would prepare a `struct` that has each thread's `start` row, and `end` row. 
   
   If you forget how to do this, refer to the examples I gave in class: [Parallel Sum](https://github.com/davidtchiu/cs475-parSum) and [Parallel Sort](https://github.com/davidtchiu/cs475-parInsertionSort).

7. Validation: An important final step is to verify that the parallel version of your code is correct. You should compare the matrices generated by the sequential algorithm and the parallel algorithm whenever the parallel mode `P` is run. Write a function, `mmm_verify()` to test that the greatest difference between any two corresponding elements of the output matrices generated by the sequential code and the parallel code is zero. This function does not need to be parallelized, and is only called after you run and clocked both sequential and parallel versions of code in `P` mode.

8. You must output the time taken, in seconds, for the calculation to take place. To do this, you should use the `rtclock()` function that is provided to you. When running in parallel mode, you should also show the **speedup** over the sequential version, i.e., $$Speedup = Time_{sequential} / Time_{parallel}$$. Anything above 1 would be a speedup.

   - Smoothing the results: Because unpredictable things can be happening on the server while you clock your experiments, we need to run it several times to avoid outlier results. Always run your program 4 or 5 times (using a loop, not by hand): throwing away the time for the first run, and reporting the average time of the subsequent runs. The first run is to warm-up the CPU cache. 

   - Only clock the relevant portions of code: Do not clock anything code that must be done in both sequential and parallel versions. Do not account for the time to verify the correctness of the parallel version, since that's not part of the parallel scheme. 
      - For the sequential version, just clock the time it takes to run `mmm_seq()`.
      - For the parallel version, in addition to clocking `mmm_par()`, you also need to clock the time it takes to create, join, and free-up any allocated space used by the threads, since this code is considered necessary overheads for this implementation.

9. For your information: our server has 16 CPU cores. While Amdahl's Law states that we'll never achieve 16 time speedup, you should get pretty close on large matrices (size 1000 ought to be enough).

#### Example Output

The outputs below are from using our server, so your timed results (in seconds) should track mine. 


Sequential Mode Tests:
```
$ ./mmm S 100
========
mode: sequential
thread count: 1
size: 100
========
Sequential Time (avg of 3 runs): 0.004200 sec


$ ./mmmSol S 500
========
mode: sequential
thread count: 1
size: 500
========
Sequential Time (avg of 3 runs): 0.520774 sec


$ ./mmmSol S 1000
========
mode: sequential
thread count: 1
size: 1000
========
Sequential Time (avg of 3 runs): 4.198867 sec
```

Parallel Mode Tests:
```
$ ./mmm P 2 100
========
mode: parallel
thread count: 2
size: 100
========
Sequential Time (avg of 3 runs): 0.004202 sec
Parallel Time (avg of 3 runs): 0.002251 sec
Speedup: 1.866944
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 4 100
========
mode: parallel
thread count: 4
size: 100
========
Sequential Time (avg of 3 runs): 0.004198 sec
Parallel Time (avg of 3 runs): 0.001291 sec
Speedup: 3.252093
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 8 100
========
mode: parallel
thread count: 8
size: 100
========
Sequential Time (avg of 3 runs): 0.004212 sec
Parallel Time (avg of 3 runs): 0.000756 sec
Speedup: 5.571113    <<-- Amdahl's Law!!! Nowhere near 8x speedup
Verifying... largest error between parallel and sequential matrix: 0.000000

$ ./mmm P 16 100
========
mode: parallel
thread count: 16
size: 100
========
Sequential Time (avg of 3 runs): 0.004211 sec
Parallel Time (avg of 3 runs): 0.000832 sec
Speedup: 5.060840     <<-- Amdahl's Law!!! Yikes performance degrades for this many threads!
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 2 1000
========
mode: parallel
thread count: 2
size: 1000
========
Sequential Time (avg of 3 runs): 4.194925 sec
Parallel Time (avg of 3 runs): 2.074842 sec
Speedup: 2.021804
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 4 1000
========
mode: parallel
thread count: 4
size: 1000
========
Sequential Time (avg of 3 runs): 4.194292 sec
Parallel Time (avg of 3 runs): 1.041629 sec
Speedup: 4.026666
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 8 1000
========
mode: parallel
thread count: 8
size: 1000
========
Sequential Time (avg of 3 runs): 4.190337 sec
Parallel Time (avg of 3 runs): 0.523474 sec
Speedup: 8.004868
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 16 1000
========
mode: parallel
thread count: 16
size: 1000
========
Sequential Time (avg of 3 runs): 4.203717 sec
Parallel Time (avg of 3 runs): 0.391611 sec
Speedup: 10.734421
Verifying... largest error between parallel and sequential matrix: 0.000000


$ ./mmm P 16 2500
========
mode: parallel
thread count: 16
size: 2500
========
Sequential Time (avg of 3 runs): 178.200196 sec
Parallel Time (avg of 3 runs): 13.872691 sec
Speedup: 12.845395
Verifying... largest error between parallel and sequential matrix: 0.000000
```


#### Grading

```
This assignment will be graded out of 60 points:

[5pt] User input is properly handled, and invalid commands generates an error.

[5pt] Sequential version of mmm is properly implemented.

[30pt] Parallel version of mmm is properly implemented.

[5pt] You must verify that parallel version is correct by comparing the result
      matrix with one generated using the sequential algorithm.

[5pt] Your work-sharing model for the parallel version is producing good
      performance.

[5pt] You are properly timing your results over multiple runs, and timing only
      relevant portions of code.

[5pt] Your program is free of memory leaks and dangling pointers.
```

#### Submitting Your Assignment

1. Commit and push your code to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.

#### Credits

Written by David Chiu. 2022.
