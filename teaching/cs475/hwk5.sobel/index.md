## CS 475 - Operating Systems

### Hwk: Parallel Edge Detection with `pthread`
Ever wonder how self-driving cars detect lanes and boundaries to navigate safely on roads? Or how doctors use advanced imaging techniques to identify tumors with pinpoint accuracy? Edge detection enables these breakthroughs by highlighting the boundaries and transitions within images, making it possible to extract such meaningful information. From enhancing the safety of autonomous vehicles to advancing medical diagnostics, edge detection plays a critical role in industries ranging from transportation to healthcare, shaping the way we interact with the world and solve complex problems.

The goal of this assignment is to implement a **multithreaded Sobel filter** to perform edge detection on grayscale images using the `pthread` library in C.


#### Student Outcomes

- To write a parallel, multi-threaded program using the `pthread` library.
- To work with the data-parallel paradigm.
- To be exposed to timing runs and producing results for performance evaluation.

#### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- Login to github, and go here: [https://github.com/davidtchiu/os-sobel](https://github.com/davidtchiu/os-sobel). 

- **Please do not fork from my repository!** Instead, click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```


- This should download the starter code in a directory named after your Github repository. 


#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `sobelSol`. You can run it from the terminal by first navigating in to the homework directory and typing the command `./sobelSol`. 


#### Understanding Sobel Filters

In image processing, **Sobel Filters** are one of the most popular methods for performing edge detection due to their simplicity and effectiveness. The Sobel filter applies a pair of _convolution kernels_ to an image to compute the intensity gradients in both the horizontal ($$G_x$$) and vertical ($$G_y$$) directions. These gradients highlight regions of the image where the intensity changes significantly, which often corresponds to edges.

The Sobel operator uses two $$3 \times 3$$ convolution kernels:

###### **Horizontal Kernel $$K_x$$**
Detects changes in intensity along the horizontal direction:
$$\[K_x =
\begin{bmatrix}
-1 & 0 & 1 \\
-2 & 0 & 2 \\
-1 & 0 & 1
\end{bmatrix}
\]$$

###### **Vertical Kernel $$K_y$$**
Detects changes in intensity along the vertical direction:
$$\[K_y
\begin{bmatrix}
-1 & -2 & -1 \\
 0 &  0 &  0 \\
 1 &  2 &  1
\end{bmatrix}
\]$$

#### How to Apply Sobel Filters over an Image (Convolution)
To apply the Sobel filters to an image, you treat the image as a 2D array where each "pixel" value is represented by a grayscale value between 0 (black) and 255 (white). Here's a step-by-step explanation of how it's done. **Convolution** involves sliding the Sobel kernels over the image and performing the following steps at each pixel:

   1. For a pixel at position $$[i,j]$$, it will 8 neighbor pixels surrounding it (the exception are those pixels along the borders of the image, which this algorithm need to ignore). 

      [image here]

   2. Superimpose (center) the $$K_x$$ kernel over each pixel multiply each kernel value with the corresponding image pixel and sum up the results. The sum is called the pixel's "gradient", $$G_x$$.

   3. Repeat this task for the $$K_y$$ kernel to produce the gradient $$G_y$$.

   4. Combine that pixel's gradient components using this formula: $$G = \sqrt{G_x^2 + G_y^2}$$. For any values of $$G$$ less than 0, clamp it up to 0, and for any values of $$G$$ greater than 255, clamp it down to 255. For all other values of $$G$$, comopare $$G$$ to the threshold that was input on the program's command-line. If $$G$$ is less than the threshold, set the corresponding pixel in the output 2D array to 0 (black), otherwise, set it to $$G$$.
  
   5. Repeat this process for every pixel to produce the output 2D array. For any pixel that sits along the border of an image, set its value in the output 2D array to 0 (black).

#### Example:

Let's say we start with the following $$5\times 5$$ grayscale image:

   ```c
   34  45  60  90 120
   40  50  70 100 130
   50  55  75 110 140
   70  80  95 120 160
   90 100 110 140 180
   ```

1. As an example, for the pixel at position $$[2,1]$$ (value 55), its region (including its 8 neighbors) is:

   ```c
   40  50  70
   50  55  75
   70  80  95
   ```

2. Apply the horizontal kernel $$K_x$$ to produce that pixel's horizontal gradient $$G_x$$.

   ```c
   (-1 * 40) + (0 * 50) + (1 * 70) +
   (-2 * 50) + (0 * 55) + (2 * 75) +
   (-1 * 70) + (0 * 80) + (1 * 95)
   == 70
   ```

3. Apply the vetical kernel $$K_y$$ to produce that pixel's vertical gradient $$G_yx$$.

   ```c
   (-1 * 40) + (-2 * 50) + (-1 * 70) +
   ( 0 * 50) + ( 0 * 55) + ( 0 * 75) +
   ( 1 * 70) + ( 2 * 80) + ( 1 * 95)
   == 90
   ```

4. Combine the components: $$G = \sqrt{G_x^2 + G_y^2} = \sqrt{70 + 90} \approx 114$$. Now over in the output 2D array, assign the value `114` to position $$[2,1]$$.

5. Repeat this process for every pixel to produce the output 2D array, and remember to set any border pixel  to 0 (black).

   ```c
   0  0  0   0    0
   0  50  70 100  0
   0  55  75 110  0
   0  80  95 120  0
   0  0  0   0    0
   ```

6. Suppose the **threshold** was input as 80 on the command line. The final output image would be:

   ```c
   0  0  0   0    0
   0  0  0 100  0
   0  0  0 110  0
   0  80  95 120  0
   0  0  0   0    0
   ```


#### "Embarassingly Parallel"
In this assignment each thread is writing to its own isolated location in memory. That is, threads are not contending to read and write to the *same* memory location, and therefore **race conditions are not possible (phew! Don't have to worry about data races on this assignment)**. Such programs are known to be "embarassingly parallel." That isn't meant to be a derogatory term. The term suggests that the parallelization of these problems is so straightforward that it almost feels "embarrassing" to call it parallel computing. The "embarrassment" here is more of a playful nod to how easy these problems are to parallelize compared to more complex ones that require significant coordination, synchronization, or data sharing between threads or processes.

You should still verify this to be the case, as you would any parallelizable pboelm in the real world. On a piece of paper, depict how the sobel filter process would work. Pay attention to how the new image (2D array) is populated with values. To calcuate the value of a cell, do you have to read any other cells from the *same* matrix you're writing to?


#### Program Requirements


1. The program should accept two command-line arguments:
     - The filename of the input image (e.g., `pics/input.jpg`).
     - The number of threads to use for processing.
     - A pixel threshold for emphasizing edges (0-255).

     Example:
     ```bash
     ./sobel pics/input.jpg 4 120
     ```
   
      Your `main(int argc, char *argv[])`. Command-line arguments can be accessed through `argc` and `argv`. Specifically, `argc` refers to the number of arguments given on the command line, including the command to run the executable itself. `argv` is a string array containing the arguments (much like `String[] args` in Java). Once you parse out the command line arguments, store the mode (sequential vs. parallel) as an integer in the `mode` global, and store the dimension of your matrices in the `size` global.

2. **Input Image**: Input images will be provided in the `pics/` directory. All images are in grayscale.

3. **Output Image**:
   - The processed image should be saved in the `pics/` directory with `-sobel` appended to the filename.
   - Example: If the input filename is `funny.jpg`, the output filename should be `pics/funny-sobel.jpg`.

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
            matrix[i] = (int*) malloc(sizeof(int) * M;)
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

6. **Data Parallelism:** If the parallel mode (`P`) is selected, your `main()` function must split the work evenly among the threads. There are many ways to do this, and I'll leave this decision up to you. You're welcome to experiment with different approaches!

   - Maybe you can assign each thread to compute a set of rows in the result? A set of columns? A k-by-k block? Would it make a difference?
   
   - Which ever work-sharing approach you use, remember to provide each thread (as an input argument to the thread function) its "range of work." As I showed in class, this is usually done through allocating a `struct` and putting information inside that `struct` before passing it to each corresponding thread. For instance, if I want each thread to compute a set of rows in the result matrix, I would prepare a `struct` that has each thread's `start` row, and `end` row. 
   
   If you forget how to do this, refer to the examples I gave in class: [Parallel Sum](https://github.com/davidtchiu/cs475-parSum) and [Parallel Sort](https://github.com/davidtchiu/cs475-parInsertionSort).


8. You must output the time taken, in seconds, for the calculation to take place. To do this, you should use the `rtclock()` function that is provided to you. When running in parallel mode, you should also show the **speedup** over the sequential version, i.e., $$Speedup = Time_{sequential} / Time_{parallel}$$. Anything above 1 would be a speedup.

   - Smoothing the results: Because unpredictable things can be happening on the server while you clock your experiments, we need to run it several times to avoid outlier results. Always run your program 4 or 5 times (using a loop, not by hand): throwing away the time for the first run, and reporting the average time of the subsequent runs. The first run is to warm-up the CPU cache. 

   - Only clock the relevant portions of code: Do not clock anything code that must be done in both sequential and parallel versions. Do not account for the time to verify the correctness of the parallel version, since that's not part of the parallel scheme. 
      - For the sequential version, just clock the time it takes to run `mmm_seq()`.
      - For the parallel version, in addition to clocking `mmm_par()`, you also need to clock the time it takes to create, join, and free-up any allocated space used by the threads, since this code is considered necessary overheads for this implementation.

9. For your information: our server has 16 CPU cores. While Amdahl's Law states that we'll never achieve 16 time speedup, you should get pretty close on these images.

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
