## CS 475 - Operating Systems

### Hwk: One Lane Bridge (Synchronization)

In low-traffic areas, some bridges might only support one lane of thru traffic. This means that two-lane roads must merge down to just one lane before cars on either side can use the bridge. This is potentially dangerous if cars don't coordinate with each other on both sides. Thinking this through, a line of cars on one end of the bridge must determine which direction the bridge traffic is currently flowing. If cars from the other side are moving across, then all cars in the opposing direction must wait until the other side empties out. What's more, these one-lane bridges are usually pretty old and decrepit, so there may be load restrictions that need to be followed (no more than, say, five vehicles at a time). 

Your task is to write a Java program to solve the One Lane Bridge Problem, coordinating car threads so that there are no risk of accidents or bridge collapse.

#### Student Outcomes

- To solve a classical synchronization problem computer science.
- To work with threads and synchronization in Java.
- To understand how to coordinate threads using high-level synchronization mechanisms.

#### Starter Code

Starter code for this assignment is provided on the github repo. You are not required to submit your code to me on Github, but it's strongly recommended that you do.

- **This step is imperative:** Login to github, and go here: [https://github.com/davidtchiu/cs475-hwk7-thebar](https://github.com/davidtchiu/cs475-hwk7-thebar). Choose to _*fork*_ this repository over to your github account to obtain your own copy. Copy the Github URL to _your_ newly forked project. Then follow the rest of the instructions below. From  VS Code, open a terminal, and _*clone*_ your forked Github repo down to your local working directory using:

	```
	git clone <your-github-url-for-this-project>
	```


#### Working Solution

I have included a working solution of my program along with the starter code. The binary executable file is called `thebridgeSol`. You can run it from the terminal by first navigating in to the Hwk directory and typing the command `./thebridgeSol`. This is how your solution should behave when it's done.

#### One Lane Bridge Problem

Using Java monitors and support of condition variables, simulate a one lane bridge with the following synchronization correctness properties. Do not use Java `Semaphore`s or `ReentrantLock`s to solve this problem. This problem can be solved using `synchronized` blocks, and the `wait()/notify()/notifyAll()` semantics of condition variables.

- **Bridge Properties**
	- The bridge can hold no more than 3 cars at a time.
  - The bridge stores a `boolean` variable, `direction`, that indicates the direction in which bridge traffic is currently allowed to flow.
	- When the bridge is empty, it flips `direction` and signals all cars that had been waiting to go in that direction.

- **Car Properties**
	- Cars must wait if they are traveling in the opposite direction than what is currently indicated by the bridge.
	- Even if a car is traveling in the same direction as the bridge indicates, cars must also wait if there are too many on the bridge.
	- Cars must *exit* the bridge in the same order that they entered the bridge (i.e., FIFO order).


#### `BridgeInterface` 

You are primarily required to write the `OneLaneBridge` class, which must `implement` the `BridgeInterface`. The `BridgeInterface` requires that you implement just the following two methods:

- `void arrive(Car car) throws InterruptedException`: 

- `void exit(Car car) throws InterruptedException`: 



#### Example Output for 1 customer

```
Customer:										| Employee:
Traveling	Arrived		Ordering	Browsing	Register	Leaving	| Waiting	Mixing		At Register	Payment Recv
----------------------------------------------------------------------------------------+-----------------------------------------------------------
Cust 0											|
											| Bartender
		Cust 0									|
				Cust 0							|
						Cust 0					|
											| 		Bartender
											| 				Bartender
								Cust 0			|
											| 						Bartender
										Cust 0	|
```

#### Example Output for 2 customers

```
Customer:										| Employee:
Traveling	Arrived		Ordering	Browsing	Register	Leaving	| Waiting	Mixing		At Register	Payment Recv
----------------------------------------------------------------------------------------+-----------------------------------------------------------
Cust 0											|
Cust 1											|
											| Bartender
		Cust 1									|
				Cust 1							|
						Cust 1					|
											| 		Bartender
											| 				Bartender
								Cust 1			|
											| 						Bartender
											| Bartender
										Cust 1	|
		Cust 0									|
				Cust 0							|
						Cust 0					|
											| 		Bartender
											| 				Bartender
								Cust 0			|
											| 						Bartender
										Cust 0	|
```

#### Grading

```
This assignment will be graded out of 55 points:
[5pt] Threads are correctly spawned and reaped. Semaphore creation and
       removal are correctly managed.

[28pt] Proper synchronization is implemented
       (e.g., customers cannot leave before bartender receives payment).

[15pt] Your solution is free from deadlocks and starvation. All customers
       eventually get served and leave.

[2pt] Your program observes good style and commenting.

[5pt] Your program is free of memory leaks and dangling pointers.
```

#### Submitting Your Assignment

1. Commit and push your code to your Github repo. Make sure your repo is public (or private and accessible by me).

2. On canvas, simply submit the URL to your Github repo. No other form of submission is accepted.

#### Credits

Written by David Chiu and Jason Sawin. 2015.
