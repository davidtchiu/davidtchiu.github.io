## CS 455 - Principles of Database Systems

### Hwk 5: Disk Scheduling Simulator
In this assignment you will write a program in Java or Python to simulate disk scheduling algorithms. This project will help you:
- Practice implementing scheduling policies covered in lecture (FCFS, SSTF, LOOK, C-LOOK).
- Compare their performance in terms of seek distance, seek time, and turnaround time.
- Appreciate fairness vs. efficiency trade-offs in scheduling.

#### Student Outcomes
By the end of this assignment, you should be able to:

- Describe how disk scheduling algorithms (FCFS, SSTF, LOOK, C-LOOK) determine the order of servicing I/O requests.
- Simulate each of these algorithms and trace the head movement across disk tracks.
- Compute and compare quantitative performance metrics, including total seek distance, total seek time, and turnaround time.
- Explain how scheduling policies trade off between throughput, fairness, and average response time.

#### Program Requirements
A hard disk consists of N tracks numbered from 0 to N-1. The disk head services a queue of pending requests, each given as a track number. You are to write a program that accepts user input interactively, and simulates the following disk-scheduling policies: FCFS, SSTF, LOOK, and C-LOOK. Let's take a second to review each policy:

- **FCFS (First-Come-First-Served):** The scheduler services each track based solely on their arrival order.
- **SSTF (Shortest-Seek-Time-First):** This is a "greedy approach." The scheduler services the track that is nearest to the current location of the disk head.
- **LOOK:** Starting from the current head position, the scheduler continues moving in the same direction that the head was last traveling. (At program start, you may assume this direction is toward higher-numbered tracks.) It services all outstanding requests in that direction, ordered by increasing track number,  ignoring any requests that are behind the current head position until the direction reverses. When it reaches the last pending request in that direction, it reverses and services the remaining requests in the opposite direction.
- **C-LOOK (Circular LOOK):** This is the same as LOOK except that the head only services requests in one direction (lower to higher-numbered tracks). When the reaches the last request, it snaps back to the lowest requested track to service the rest.


1. You can write this program using a language of your choice. Your program must compile and run without modifications. No separate write-up is required for this assignment.

2. Upon starting, your program should prompt for user input step-by-step. Here's an example of what that might look like:

    ```txt
    *** DISK SCHEDULING SIMULATOR ***

    Enter the total number of tracks on the disk: 5000
    Enter initial head position: 2150
    Enter the track numbers (separated by space): 
    2069 1212 2296 2800 544 1618 356 1523 4965 3681
    ```


3. Once you've read in the inputs, your program will simulate each of the four scheduling algorithms. After each algorithm is done simulating, your program reports the results of each policy, including:
- The exact schedule of tracks visited (i.e., order of service).
- The total seek distance (number of tracks traversed).
- The total seek time (seek distance * seek time per track).
- The average turnaround time (assume all requests arrive at time 0).

Here's an example output:
    ```txt
    Algorithm: SSTF
    Schedule: 2150 -> 2069 -> 2296 -> 2800 -> 3681 -> 4965 -> 1618 -> 1523 -> 1212 -> 544 -> 356
    Total seek distance: 7586 tracks
    Total seek time: 3793.0 ms
    Average turnaround time:  XXXX ms
    ```

Note the following:
- The "schedule" always starts on the user-given "initial head position" and outputs the schedule that is determined by the corresponding scheduling policy.
- Please clearly label each algorithm’s results.
- Please use arrows `->` to separate head movements.
- Turnaround time is computed assuming all requests are in the queue at time 0.
- For C-LOOK, remember that the head wraps around to the lowest outstanding request rather than reversing direction.

### Example Interaction (degree = 3)
```txt
$ java BPlusTree 3

> p
PRINTING TREE
#

> i 8
SUCCESS

> i 5
SUCCESS

> i 1
SUCCESS

> p
PRINTING TREE
5 #
1 # 5,8 #

> i 7
SUCCESS

> p
PRINTING TREE
5,7 #
1 # 5 # 7,8 #

> i 3
SUCCESS

> i 12
SUCCESS

> p
PRINTING TREE
7#
5# 8#
1,3# 5# 7# 8,12#

> i 9
SUCCESS

> s 56
56 NOT FOUND

> s 8
8 FOUND

> p
PRINTING TREE
7#
5# 8,9#
1,3# 5# 7# 8# 9,12#

> i 6
SUCCESS

> p
PRINTING TREE
7#
5# 8,9#
1,3# 5,6# 7# 8# 9,12#

> i 13
SUCCESS

> i 14
SUCCESS

> i 15
SUCCESS

> p
PRINTING TREE
9#
7# 13#
5# 8# 12# 14#
1,3# 5,6# 7# 8# 9# 12# 13# 14,15#
```

### Example (degree = 4)
Same insertion order, but final tree would be:
```txt
9# 
5,7# 13# 
1,3# 5,6# 7,8# 9,12# 13,14,15#
```

### Example (degree = 20)
Same insertion order, but final tree would be:
```txt
1,3,5,6,7,8,9,12,13,14,15#
```


#### Grading

```
This assignment will be graded out of XX points.
Correctness	60	Accurately implements FCFS, SSTF, LOOK, and C-LOOK. Metrics computed correctly.
Clarity & Style	20	Code is well-structured, readable, and commented where appropriate. Functions or methods separate algorithm logic from input/output.
Input/Output Handling	10	Prompts user interactively and matches specified format. Handles reasonable user inputs gracefully.
Testing & Robustness	10	Validates track bounds, handles empty or malformed input without crashing.

```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas. There are two options to submit your work.

1. If you pushed all your code to a Github repository. Make sure your repo is public, and simply submit the URL to your repo on Canvas.
2. Alternatively, you can zip up all your files (minus the `.class` files) and submit the `.zip` file on Canvas.
3. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu. 2024.
