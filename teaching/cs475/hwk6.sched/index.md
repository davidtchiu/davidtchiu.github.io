## CS 475 - Operating Systems

### Hwk 6: Stressing out the Scheduler
In this assignment, you will experimentally observe a fundamental property of modern operating systems: An effective CPU scheduler. As you learned in class, CPU schedulers are "fairer" to I/O-bound processes by prioritizing human-perceived responsiveness, even under heavy CPU load. You will write a program that launches: several CPU-bound processes (CPU hogs), and one interactive, I/O-bound process that periodically simulates a “click" (as in  a user pressing a key or clicking a mouse).

Your program will run these processes concurrently on the remote server to stress-test the Linux scheduler. It will report stats on the responsiveness of the I/O-bound process. 

#### Student Outcomes
After completing this assignment, students should be able to:

- Reason about CPU-bound vs I/O-bound workloads and Linux's treatment of them.
- Measure elapsed time and instantaneous jitter using clocks.
- Reason why interactive programs remain responsive under contention.
- Correctly manage child process lifecycles (termination and reaping).

#### Starter Code

Starter code for this assignment is provided on the github repo. You must do these steps in order to submit your work to me on github.

- Login to github, and go here: [https://github.com/davidtchiu/os-sched](https://github.com/davidtchiu/os-sched). 

- **Please do not fork from my repository!** Instead, click on the green **Use this template** button <img src="figures/useThisTemplate.png" width="80px" /> and select the **Create new repository** option. In the next page, give your repository a good name (the "suggestion" they give is fine). My only request is that you *don't* name it to be the same as mine. This is hide your homework solution from Google searches.

- This will create your own copy of the repository with the starter code I provided! Copy the URL of your repo from the browser window.

- Now from VS Code, open a terminal, and _*clone*_ your new Github repo down to your local working directory using:

  ```
  git clone <your-github-url-for-this-project>
  ```


- This should download the starter code in a directory named after your Github repository. 


#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `sobelSol`. You can run it from the terminal by first navigating in to the homework directory and typing the command `./sobelSol`. 


#### Preamble: Working with Time in C
In this assignment, you will need to measure time precisely. You will need to include the `time.h` library.
```c
#include <time.h>
```

This library gives you access to the  `struct timespec` structure, which holds a time value when the clocking function is called. Let's check out the data members in this struct. 
```c
struct timespec {
    time_t tv_sec;   // whole seconds (valid values are >= ​0​)
    long   tv_nsec;  // nanoseconds (valid values are [​0​, 999999999]
};
```

The time library gives you access to quite a few different clocks. For this assignment, we need a really precise stopwatch, called `CLOCK_MONOTONIC`.
```c
#include <stdio.h>
#include <time.h>

int main(int argc, char *argv[]) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);

    printf("%ld seconds, %ld nanoseconds\n", ts.tv_sec, ts.tv_nsec);

    return 0;
}
```

Here's the kind of thing you might see when you run it:
```
127374 seconds, 36495516 nanoseconds
```
What it means is that 127374 seconds has elapsed since some undefined point in time, and 36495516 nanoseconds has passed since the last second. More precisely, 127374.036495516 seconds. On its own, that isn't all that useful. A better use of this measure is to call `clock_gettime()` again after doing some work to measure the time elapsed in between. (That's more like a of a stopwatch for tracking how much "wall-clock time" a piece of code took to run.)

Here's some helpful conversions:
```c
// To seconds
double seconds = ts.tv_sec + ts.tv_nsec / 1e9;

// To milliseconds
double ms = ts.tv_sec * 1000.0 + ts.tv_nsec / 1e6;
```

#### Program Structure
You will work with three separate programs:
- `cpu_hog.c`: This program is CPU-bound. It just runs an infinite loop to waste CPU time. It doesn't yield, make a system call, or perform an I/O operation, so it will attempt to monopolize the CPU unless the OS scheduler preempts it.
- `interactive.c`
- `sched_test.c`

#### Running Your Program

Your controller program must be invoked as:

```bash
$ ./sched_test <num-hogs> <seconds-run>
```

Example:

`$ ./sched_test 8 5`

Meaning:
- Spawn 8 CPU hog processes
- Spawn 1 interactive process
- Run the interactive process for 5 seconds

#### Program Requirements
1. First, let's write ourselves a CPU hog inside `cpu_hog.c`. This shouldn't take you long. This program must be long-running and CPU-bound, so you just need to write an infinite loop doing mindless arithmetic to waste CPU time. For instance, just have it repeatedly traverse a small 2D array and doing some integer operation on each element. This might simulate the work of AI training, for instance. To be truly CPU-bound,  ensure that your program doesn't yield and doesn't perform an I/O operation (like printf, scanf, open, etc.). When it's run it will attempt to monopolize the CPU until the OS scheduler preempts it.

2. Verify that your CPU hog is indeed monopolizing. Compile and run it. Leave it running and from another shell, run the command `top`, which lists all running tasks and orders them by CPU usage. Near the top, you should see your hog process using up 100% of the server's CPU.
   ```bash
   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                             
   190143 dchiu     20   0    2644    948    860 R  99.7   0.0   0:04.01 cpu_hog                             
   ```

3. While the first hog's running, if you started another hog process, you would think that their CPU usage would split to 50%. But a run of `top` informs us that you now have two processes each taking up ~100%. What's going on? The server has a multi-core CPU. Linux is scheduling each task on a separate core, so they are indeed each monopolizing 100% of their own cores. Since we're aiming to stress test the OS on this assignment, we'll force all the processes to be run on just one CPU. (More on that later.) Terminate the CPU hogs after testing.

4. Next, let's define our interactive program inside `interactive.c`. This program must be I/O-bound. It should take a single command-line argument `<run-seconds>`. We want this program to simulate an interactive program like a shell, a code editor, or text processor, which does very little CPU work and spends most of its time blocking/waiting. To do this, you'll want the process to repeatedly [usleep()](https://www.ibm.com/support/pages/example-using-c-api-usleep) for **300 ms** (which is approximately the delay of a key press). After you sleep, print this line of output to the screen:

   ```bash
   [click] elapsed=300.077 ms  jitter=0.077 ms
   ```
   
   Meaning:
   - `[click]` indicates a simulated user action like a keypress or a mouseclick.
   - `elapsed` is the wall-clock time taken for the OS to service the "click." It should be displayed in milliseconds, precise to the thousandth place.
   - `jitter` is the instantaneous wakeup delay for this click in milliseconds, defined as: $$jitter = (actual\_elapsed - expected\_elpased)$$. The "jitter" is an approximation responsiveness delay. It is influenced by scheduler latency and the current system load, and may spike if the system is overwhelemed. It is a useful measurement of how quickly your OS schedules an interactive process after it becomes ready/runnable.

   This loop should run for a minimum of the given `<run-seconds>` seconds. Then it should break out of the loop and exit.
   Here's what a 2-second run might look like:
   ```
   $ ./interactive 2
   [click] elapsed=300.093 ms  jitter=0.093 ms
   [click] elapsed=300.184 ms  jitter=0.184 ms
   [click] elapsed=300.110 ms  jitter=0.110 ms
   [click] elapsed=300.117 ms  jitter=0.117 ms
   [click] elapsed=300.115 ms  jitter=0.115 ms
   [click] elapsed=300.112 ms  jitter=0.112 ms
   ```
   That's expected. When I ran this, the system was lightly loaded so each "click" carried a negligible jitter. Each line of output took around 300 ms to print, so it felt fast and responsive to me. We're interested in seeing if still feels as responsive once we deploy multiple CPU hogs running concurrently on the same CPU!


s5. Now turn your attention to the `sched_test`  program, which will run the stress-test. The general idea is that it needs to fork all the hogs and the one interactive process so that they run concurrently on the server, wait for the interactive process to finish, then kill and reap all the hogs to clean up. Once you've parsed in the command line inputs,  `fork` and `exec` all CPU hogs first, and the interactive process last.

6. The parent process should now wait only for the interactive process to finish (all the CPU hogs run infinite loops and won't exit). After the parent detects that the interactive process exited, terminate all CPU hogs to clean up. We wouldn't want those CPU hogs running loose and gumming up our server! The parent also needs to reap all remaining children to avoid zombies after terminating the hogs!


7. **Warning:** Terminating a parent process does not automatically terminate its children on Linux.  If `sched_demo` crashes, is killed, or exits before it terminates/reaps the CPU-hog children, those hogs will continue to run on the server! They become orphans and are re-parented to PID 1, and they will continue consuming CPU. Too many of these orphans will totally bog down the server! So your program must explicitly terminate hogs (by sending a `SIGKILL` signal using the `kill()` function to terminate all the hog children) when the interactive process finishes. To check if you have any `cpu_hog` processes running, type this into your shell.
   ```bash
   $ ps -u $USER -o pid,ppid,comm,%cpu |grep cpu_hog
   ```
   If they are running, you can run the following to terminate all `cpu_hog` processes.
   ```bash
   $ pkill cpu_hog
   ```
   Check often to see if you need to terminate your hogs.


8. **Warning 2:** While writing your program, you might also create zombies. This happens when a child process exits but the parent keeps running, not reaping the terminated children processes. This means `kill()`ing the hog processes is not enough. You also need to reap all of them! To do that, repeatedly call `wait(NULL)` until all hogs have been reaped. Don't forget to reap the interactive process too! When you're not sure if your program created zombies, go into your shell and type:
   ```bash
   ps -u $USER -o pid,ppid,stat,comm
   ```
   If you see a `Z` under `STAT` ("state"), then that process is a zombie.

#### Running `sched_test`
Remember that we are interested in what happens to all these processes on the single CPU. To ensure that `sched_test` and all its children are pinned to the same CPU core, we can use the following shell command to run `sched_test`:

```bash
taskset -c 0 ./sched_test 2 5
```

That `taskset -c <core-id>` command tells the OS the pin `sched_test` (and all its children) to CPU core 0. There are 16 cores on the server, so any ID between 0 and 15 would be valid.

#### Example Output
Here's some input error handling:
```bash
$ taskset -c 7 ./sched_test
Usage: ./sched_test <num_hogs> <runtime_seconds>
```

Here's a possible output for running 2 hogs alongside the interactive process for 4 seconds.

```bash
$ taskset -c 7 ./sched_test 2 4
[click] elapsed=300.071 s  jitter=0.071 ms
[click] elapsed=300.158 s  jitter=0.158 ms
[click] elapsed=300.088 s  jitter=0.088 ms
[click] elapsed=300.085 s  jitter=0.085 ms
[click] elapsed=300.089 s  jitter=0.089 ms
[click] elapsed=300.089 s  jitter=0.089 ms
[click] elapsed=300.099 s  jitter=0.099 ms
[click] elapsed=300.087 s  jitter=0.087 ms
[click] elapsed=300.090 s  jitter=0.090 ms
[click] elapsed=300.085 s  jitter=0.085 ms
[click] elapsed=300.087 s  jitter=0.087 ms
[click] elapsed=300.083 s  jitter=0.083 ms
[click] elapsed=300.089 s  jitter=0.089 ms
```

Let’s see how the system behaves with 20 CPU hogs running concurrently. On the third-from-last click, the jitter spikes, meaning this click woke up later than expected and the output hit the screen late. That’s scheduler latency under load, and it’s exactly the kind of small delay a human notices as a brief stutter. To the human, you might be slightly annoyed if it's a one-off, but if it occurs more frequently or if the delay is longer, then user experience might really take a toll.
```bash
taskset -c 7 ./sched_test 20 4
[click] elapsed=300.071 s  jitter=0.071 ms
[click] elapsed=300.169 s  jitter=0.169 ms
[click] elapsed=300.096 s  jitter=0.096 ms
[click] elapsed=300.085 s  jitter=0.085 ms
[click] elapsed=300.086 s  jitter=0.086 ms
[click] elapsed=300.091 s  jitter=0.091 ms
[click] elapsed=300.072 s  jitter=0.072 ms
[click] elapsed=300.073 s  jitter=0.073 ms
[click] elapsed=300.076 s  jitter=0.076 ms
[click] elapsed=300.072 s  jitter=0.072 ms
[click] elapsed=305.783 s  jitter=5.783 ms   <-- spike!
[click] elapsed=300.084 s  jitter=0.084 ms
[click] elapsed=300.072 s  jitter=0.072 ms
```


#### Grading

```
This assignment will be graded out of 80 points:

[5pts] User input is properly handled. Invalid arguments (wrong number of args, negative hog count, non-positive runtime) generate a clear error/usage message.

[10pts] cpu_hog.c is truly CPU-bound: infinite loop, no sleeping/yielding, no I/O, no termination.

[20pts] interactive.c correctly simulates clicks: sleeps 300ms between clicks, runs for runtime_seconds, and prints one line per click.

[5pts] elapsed is wall-clock time since start in seconds, printed with %.3f.

[10pts] jitter is instantaneous per click in milliseconds, printed with %.3f
(computed from time since the previous click minus 300.000ms).

[15pts] sched_demo.c correctly uses fork() + exec() to manage processes.

[10pts] Spawns all hogs first using fork() + exec(). Spawns the interactive program last using fork() + exec() and passes runtime_seconds.

[10pts] Waits for the interactive PID with waitpid(), then terminates hogs and reaps remaining children. Cleanup is correct: hog processes are not left running after sched_demo exits, and children are reaped (no zombies during normal execution).
```

#### Submitting Your Assignment

1. Commit and push your code to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.

#### Credits

Written by David Chiu. 2022.
