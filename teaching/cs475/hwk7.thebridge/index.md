## CS 475 - Operating Systems

### Hwk: One Lane Bridge (Java Synchronization)

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


#### Car Threads (Do Not Edit)

I have provided you with the `Car` class. Let's take a look at what it does. Each thread needs to encapsulate a `Car` object. Cars store an integer `id`, and if the `id` is even, then the car is going in direction `true`, otherwise, the car is heading in direction `false`. A `Car` also needs to store a reference to the bridge that it's trying the cross, and the `time` at which it was allowed to go on the bridge. Recall that `Car` needs to implement the `Runnable` interface, which requires the `run()` method be overridden. The `run()` method should pause for a random amount of time between 0 and 1 second (look into `Thread.sleep()`). 

#### The `Bridge` Abstract Class and `OneLaneBridge`

You are primarily required to write the `OneLaneBridge` class, which must `extend` the `Bridge` abstract class. `OneLaneBridge` requires that you implement just the following two methods:

- `void arrive(Car car) throws InterruptedException`: This Bridge method is called by a car when the car wants to enter the bridge. This method has to determine whether the thread which called it must wait, or is allowed to proceed on to the bridge. Specifically, a car can't enter the bridge when there are too many cars on it or if it's going against the current flow of traffic.

	- When the car is allowed to enter the bridge, use the car's `setEntryTime(currentTime)` method to set the entry time. Add the car to the bridge list. Then print the bridge list so we can see (and ensure) that there are no more than 3 cars on the bridge. Finally, increment `currentTime` by 1.

- `void exit(Car car) throws InterruptedException`: This Bridge method is called by a car when the car wants to exit the bridge. But any car can call this method at any time, we have to put in some "guard rails" to make sure that a car on the bridge can't just randomly disappear off the bridge when there are still cars in front of it. When a car leaves, it could potentially allow other cars (traveling in the same direction) to get on the bridge.

	- When a car is allowed to leave the bridge, remove the car from the bridge list. Then print the bridge list so that we can see there's one fewer car (and the car that left had better been at the head of the list!). If the bridge is empty, the bridge should "flip directions" to let in all cars which are waiting to go. Do not change `currentTime` when exiting.


#### Outputs
Here's how to interpret the following outputs. Each time a car is allowed to enter or exits the bridge, a line of output is generated. The output shows the bridge's current allowed direction, followed by the list of cars currently on the bridge. 

To ensure your output is correct, look for these things:

- First, note that a car is represented by a tuple `<carID,dir,time>`, the car's ID, the direction it's moving, and the time it was allowed to enter the bridge.

- At any time, all cars' directions must match the bridge's direction.

- The bridge's direction should not change until the bridge empties out. That should be followed by another block of outputs whose directions match the new direction, and so on.

- Finally, take a look at each car's entry time (last entry in a car's tuple). The cars should always be ordered by its entry time. The cars should also exit the bridge in the order of its entry time. That is, two cars $$c_i$$ and $$c_j$$ which enter the bridge at times $$t_i$$ and $$t_j$$ respectively, must exit the bridge in order $$(c_i,c_j) : i < j \implies t_i < t_j$$.

#### Example Output for 1 car
```
Bridge (dir=true): [<car=0,dir=true,t=0>]
Bridge (dir=true): []
All cars have crossed!!
```

#### Example Output for 5 cars

```
Bridge (dir=true): [<car=2,dir=true,t=0>]
Bridge (dir=true): [<car=2,dir=true,t=0>, <car=4,dir=true,t=1>]
Bridge (dir=true): [<car=4,dir=true,t=1>]
Bridge (dir=true): [<car=4,dir=true,t=1>, <car=0,dir=true,t=2>]
Bridge (dir=true): [<car=0,dir=true,t=2>]
Bridge (dir=true): []
Bridge (dir=false): [<car=3,dir=false,t=3>]
Bridge (dir=false): [<car=3,dir=false,t=3>, <car=1,dir=false,t=4>]
Bridge (dir=false): [<car=1,dir=false,t=4>]
Bridge (dir=false): []
All cars have crossed!!
```

#### Example Output for 50 cars

```
Bridge (dir=true): [<car=22,dir=true,t=0>]
Bridge (dir=true): [<car=22,dir=true,t=0>, <car=18,dir=true,t=1>]
Bridge (dir=true): [<car=22,dir=true,t=0>, <car=18,dir=true,t=1>, <car=2,dir=true,t=2>]
Bridge (dir=true): [<car=18,dir=true,t=1>, <car=2,dir=true,t=2>]
Bridge (dir=true): [<car=18,dir=true,t=1>, <car=2,dir=true,t=2>, <car=32,dir=true,t=3>]
Bridge (dir=true): [<car=2,dir=true,t=2>, <car=32,dir=true,t=3>]
Bridge (dir=true): [<car=32,dir=true,t=3>]
Bridge (dir=true): [<car=32,dir=true,t=3>, <car=26,dir=true,t=4>]
Bridge (dir=true): [<car=26,dir=true,t=4>]
Bridge (dir=true): [<car=26,dir=true,t=4>, <car=42,dir=true,t=5>]
Bridge (dir=true): [<car=26,dir=true,t=4>, <car=42,dir=true,t=5>, <car=46,dir=true,t=6>]
Bridge (dir=true): [<car=42,dir=true,t=5>, <car=46,dir=true,t=6>]
Bridge (dir=true): [<car=46,dir=true,t=6>]
Bridge (dir=true): [<car=46,dir=true,t=6>, <car=38,dir=true,t=7>]
Bridge (dir=true): [<car=46,dir=true,t=6>, <car=38,dir=true,t=7>, <car=28,dir=true,t=8>]
Bridge (dir=true): [<car=38,dir=true,t=7>, <car=28,dir=true,t=8>]
Bridge (dir=true): [<car=28,dir=true,t=8>]
Bridge (dir=true): [<car=28,dir=true,t=8>, <car=34,dir=true,t=9>]
Bridge (dir=true): [<car=28,dir=true,t=8>, <car=34,dir=true,t=9>, <car=8,dir=true,t=10>]
Bridge (dir=true): [<car=34,dir=true,t=9>, <car=8,dir=true,t=10>]
Bridge (dir=true): [<car=34,dir=true,t=9>, <car=8,dir=true,t=10>, <car=6,dir=true,t=11>]
Bridge (dir=true): [<car=8,dir=true,t=10>, <car=6,dir=true,t=11>]
Bridge (dir=true): [<car=8,dir=true,t=10>, <car=6,dir=true,t=11>, <car=40,dir=true,t=12>]
Bridge (dir=true): [<car=6,dir=true,t=11>, <car=40,dir=true,t=12>]
Bridge (dir=true): [<car=6,dir=true,t=11>, <car=40,dir=true,t=12>, <car=30,dir=true,t=13>]
Bridge (dir=true): [<car=40,dir=true,t=12>, <car=30,dir=true,t=13>]
Bridge (dir=true): [<car=40,dir=true,t=12>, <car=30,dir=true,t=13>, <car=48,dir=true,t=14>]
Bridge (dir=true): [<car=30,dir=true,t=13>, <car=48,dir=true,t=14>]
Bridge (dir=true): [<car=48,dir=true,t=14>]
Bridge (dir=true): [<car=48,dir=true,t=14>, <car=16,dir=true,t=15>]
Bridge (dir=true): [<car=48,dir=true,t=14>, <car=16,dir=true,t=15>, <car=14,dir=true,t=16>]
Bridge (dir=true): [<car=16,dir=true,t=15>, <car=14,dir=true,t=16>]
Bridge (dir=true): [<car=16,dir=true,t=15>, <car=14,dir=true,t=16>, <car=44,dir=true,t=17>]
Bridge (dir=true): [<car=14,dir=true,t=16>, <car=44,dir=true,t=17>]
Bridge (dir=true): [<car=44,dir=true,t=17>]
Bridge (dir=true): [<car=44,dir=true,t=17>, <car=36,dir=true,t=18>]
Bridge (dir=true): [<car=44,dir=true,t=17>, <car=36,dir=true,t=18>, <car=10,dir=true,t=19>]
Bridge (dir=true): [<car=36,dir=true,t=18>, <car=10,dir=true,t=19>]
Bridge (dir=true): [<car=10,dir=true,t=19>]
Bridge (dir=true): []
Bridge (dir=false): [<car=13,dir=false,t=20>]
Bridge (dir=false): [<car=13,dir=false,t=20>, <car=25,dir=false,t=21>]
Bridge (dir=false): [<car=13,dir=false,t=20>, <car=25,dir=false,t=21>, <car=15,dir=false,t=22>]
Bridge (dir=false): [<car=25,dir=false,t=21>, <car=15,dir=false,t=22>]
Bridge (dir=false): [<car=25,dir=false,t=21>, <car=15,dir=false,t=22>, <car=29,dir=false,t=23>]
Bridge (dir=false): [<car=15,dir=false,t=22>, <car=29,dir=false,t=23>]
Bridge (dir=false): [<car=15,dir=false,t=22>, <car=29,dir=false,t=23>, <car=27,dir=false,t=24>]
Bridge (dir=false): [<car=29,dir=false,t=23>, <car=27,dir=false,t=24>]
Bridge (dir=false): [<car=29,dir=false,t=23>, <car=27,dir=false,t=24>, <car=17,dir=false,t=25>]
Bridge (dir=false): [<car=27,dir=false,t=24>, <car=17,dir=false,t=25>]
Bridge (dir=false): [<car=27,dir=false,t=24>, <car=17,dir=false,t=25>, <car=3,dir=false,t=26>]
Bridge (dir=false): [<car=17,dir=false,t=25>, <car=3,dir=false,t=26>]
Bridge (dir=false): [<car=17,dir=false,t=25>, <car=3,dir=false,t=26>, <car=23,dir=false,t=27>]
Bridge (dir=false): [<car=3,dir=false,t=26>, <car=23,dir=false,t=27>]
Bridge (dir=false): [<car=23,dir=false,t=27>]
Bridge (dir=false): [<car=23,dir=false,t=27>, <car=19,dir=false,t=28>]
Bridge (dir=false): [<car=23,dir=false,t=27>, <car=19,dir=false,t=28>, <car=49,dir=false,t=29>]
Bridge (dir=false): [<car=19,dir=false,t=28>, <car=49,dir=false,t=29>]
Bridge (dir=false): [<car=49,dir=false,t=29>]
Bridge (dir=false): [<car=49,dir=false,t=29>, <car=43,dir=false,t=30>]
Bridge (dir=false): [<car=49,dir=false,t=29>, <car=43,dir=false,t=30>, <car=47,dir=false,t=31>]
Bridge (dir=false): [<car=43,dir=false,t=30>, <car=47,dir=false,t=31>]
Bridge (dir=false): [<car=43,dir=false,t=30>, <car=47,dir=false,t=31>, <car=39,dir=false,t=32>]
Bridge (dir=false): [<car=47,dir=false,t=31>, <car=39,dir=false,t=32>]
Bridge (dir=false): [<car=47,dir=false,t=31>, <car=39,dir=false,t=32>, <car=35,dir=false,t=33>]
Bridge (dir=false): [<car=39,dir=false,t=32>, <car=35,dir=false,t=33>]
Bridge (dir=false): [<car=39,dir=false,t=32>, <car=35,dir=false,t=33>, <car=31,dir=false,t=34>]
Bridge (dir=false): [<car=35,dir=false,t=33>, <car=31,dir=false,t=34>]
Bridge (dir=false): [<car=35,dir=false,t=33>, <car=31,dir=false,t=34>, <car=21,dir=false,t=35>]
Bridge (dir=false): [<car=31,dir=false,t=34>, <car=21,dir=false,t=35>]
Bridge (dir=false): [<car=21,dir=false,t=35>]
Bridge (dir=false): [<car=21,dir=false,t=35>, <car=7,dir=false,t=36>]
Bridge (dir=false): [<car=21,dir=false,t=35>, <car=7,dir=false,t=36>, <car=1,dir=false,t=37>]
Bridge (dir=false): [<car=7,dir=false,t=36>, <car=1,dir=false,t=37>]
Bridge (dir=false): [<car=7,dir=false,t=36>, <car=1,dir=false,t=37>, <car=5,dir=false,t=38>]
Bridge (dir=false): [<car=1,dir=false,t=37>, <car=5,dir=false,t=38>]
Bridge (dir=false): [<car=1,dir=false,t=37>, <car=5,dir=false,t=38>, <car=41,dir=false,t=39>]
Bridge (dir=false): [<car=5,dir=false,t=38>, <car=41,dir=false,t=39>]
Bridge (dir=false): [<car=5,dir=false,t=38>, <car=41,dir=false,t=39>, <car=33,dir=false,t=40>]
Bridge (dir=false): [<car=41,dir=false,t=39>, <car=33,dir=false,t=40>]
Bridge (dir=false): [<car=41,dir=false,t=39>, <car=33,dir=false,t=40>, <car=9,dir=false,t=41>]
Bridge (dir=false): [<car=33,dir=false,t=40>, <car=9,dir=false,t=41>]
Bridge (dir=false): [<car=33,dir=false,t=40>, <car=9,dir=false,t=41>, <car=45,dir=false,t=42>]
Bridge (dir=false): [<car=9,dir=false,t=41>, <car=45,dir=false,t=42>]
Bridge (dir=false): [<car=45,dir=false,t=42>]
Bridge (dir=false): [<car=45,dir=false,t=42>, <car=37,dir=false,t=43>]
Bridge (dir=false): [<car=45,dir=false,t=42>, <car=37,dir=false,t=43>, <car=11,dir=false,t=44>]
Bridge (dir=false): [<car=37,dir=false,t=43>, <car=11,dir=false,t=44>]
Bridge (dir=false): [<car=11,dir=false,t=44>]
Bridge (dir=false): []
Bridge (dir=true): [<car=24,dir=true,t=45>]
Bridge (dir=true): [<car=24,dir=true,t=45>, <car=12,dir=true,t=46>]
Bridge (dir=true): [<car=24,dir=true,t=45>, <car=12,dir=true,t=46>, <car=0,dir=true,t=47>]
Bridge (dir=true): [<car=12,dir=true,t=46>, <car=0,dir=true,t=47>]
Bridge (dir=true): [<car=12,dir=true,t=46>, <car=0,dir=true,t=47>, <car=4,dir=true,t=48>]
Bridge (dir=true): [<car=0,dir=true,t=47>, <car=4,dir=true,t=48>]
Bridge (dir=true): [<car=0,dir=true,t=47>, <car=4,dir=true,t=48>, <car=20,dir=true,t=49>]
Bridge (dir=true): [<car=4,dir=true,t=48>, <car=20,dir=true,t=49>]
Bridge (dir=true): [<car=20,dir=true,t=49>]
Bridge (dir=true): []
All cars have crossed!!
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

Written by David Chiu. Inspired by [this assignment](https://people.eecs.berkeley.edu/~kubitron/courses/cs162-F05/hand-outs/synch-problems.html). 2023.
