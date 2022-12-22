# TODO
- Rewrite Hwk 1 to be shorter or to use & instead. Emphasize string functions. Should I still use scanf?
- Rewrite Hwk 2 to sort an array of strings. Keep heapsort? Use quicksort? Just priorityQueue
- Rewrite Hwk 3 to introduce structs and typedef along with malloc? How about supedLS? 
- New Hwk 6: scheduler sim (easier form of it)? Or something multithreaded with a simple lock

# Change Log
- **Spring'23** No more projects. More aggressive timeline for Homework 1, 2, 3. 
- **Spring'23** Wrote a new first homework to get students working on VS Code remote env.
- **Spring'23** Transitioned off VirtualBox. Now using remote dev on Jetstream VM.
- **Spring'22** Old develop-end VM stopped working on macs (even intel). New VM is a disaster. Network not connecting regularly. Need to work off of it.
- **Spring'22** Added Bankers for Hwk 7
- **Spring'22** Proj 1: No longer making them do getFirst and getLast.

# Xinu thoughts
- New Xinu project 1
  - Adding xsh commands: ps. Add uptime and cputime (and cputime/uptime)
  - Adding run <prog> command: a way to run user functions as processes (like in the test/ folder)

- New Xinu project 2: Aging
  - 
  - 

- What to do with Xinu? If I go Vbox-less (I have to at some point...)
  - Opt 0: turn on low-res mode on Mac
    - App finder -> Right click on VirtualBox -> Show package contents -> Right click on VirtualBoxVM.app -> low res
  - Opt 1: remote desktop to localhost seems to work without resTab?
    - Install VirtualBox Extensions too
    - Under setting => display, enable remote desktop
    - Using MicroSoft remote desktop client, connect to localhost
    - Hard to test.
- Want to cover filesystems
  - Nix moving average
  - Nix explaining the implementation of semaphores
  - Labs would buy me 2 more days (exams)
- Double check the monitor examples. Notify and continue? Create the animation instead of drawing.
- BackItUp instead of MMM.
- Keep Bartender, but make it harder. Let multiple people in
- If no Xinu, add sched simulation Hwk
- If no Xinu, add RAG and knots
- If no Xinu, add a Java project

- What would a Lab schedule (2 hr) consist of?

  - Lab 1: VM, shell, navigation, running binaries; C basics; gcc
  - Lab 2: Multi-file, Makefile; Arrays and Strings
  - Lab X: Debugging, gdb, other tools
  - Lab 3: Pointers and Dynamic allocation
  - Lab 4: Fork, Wait, Exec, Reaping
  - Lab 5: Threads. Get them to dispatch, join/reap; What happens on fork+thread_create? task parallel vs data parallel
  - Lab 6: Exam 1
  - Lab 7: Threads II: OpenMP?
  - Lab 8: Locks
  - Lab 9: Spring Break
  - Lab 10: Semaphores?
  - Lab 11: monitors Java
  - Lab 12: Exam 2
  - Lab 13: Bankers?
  - Lab 14: Graphs?
  - Lab 15: Work Day

- Remove prev edges, then merge Proj1 and Proj2?
