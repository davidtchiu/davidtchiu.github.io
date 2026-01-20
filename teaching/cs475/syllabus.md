## CS 475 - Operating Systems - Syllabus


#### Course Info
- Instructor: David Chiu
- Web page: [https://davidtchiu.github.io/teaching/cs475/](https://davidtchiu.github.io/teaching/cs475/)
- Email: [dchiu@pugetsound.edu](mailto://dchiu@pugetsound.edu)
- Office Hours: Drop in when door's open, or schedule an appointment using the QR code below
    <img width="85px" src="../../calendar-qrcode.png" />


#### Course Description
One the most complex software systems ever assembled, the modern operating system serves as the interface between the human and the machine. This course traces how the simple idea of "resource sharing"  unravels into some of the most confounding problems and original breakthroughs in computer science. Course topics include process and thread management, input/output, CPU scheduling, concurrency and synchronization, memory management, virtual memory, and caching. Students taking this course will learn how to deal with the intricacies of low-level programming, parallel computing, and tackling synchronization problems. The C programming language will be taught. 

<!-- One the most complex software systems ever assembled, the modern operating system serves as the interface between the human and the machine. This course traces how the simple idea of "resource sharing"  unravels into some of the most confounding problems and original breakthroughs in computer science. Course topics include process and thread management, input/output, CPU scheduling, synchronization primitives, memory management, and file systems. Students taking this course will learn how to deal with the intricacies of low-level programming, parallel computing and synchronization problems, and will also receive kernel-development experience through the design and implementation of various subsystems in a real operating system. The C programming language will be used.  -->

#### Prerequisites
A grade of C- or higher in the following course(s) is required:
 - CSCI 281: Assembly Language and Computer Architecture

#### Required Textbook

- Silberschatz, Galvin, and Gagne. [Operating Systems Concepts](https://www.amazon.com/Operating-System-Concepts-Abraham-Silberschatz/dp/0470128720). 8th Ed. or greater. (Required)
- Suzanne J. Matthews, Tia Newhall, Kevin C. Webb. [Dive into Systems (Free)](https://diveintosystems.org/book/) (Required for learning C)

  
#### Student Course Outcomes
Students taking this course will:
- Be proficient in C.
- Be proficient in the use of the Linux environment for coding, compilation, debugging, and testing.
- Understand the objectives and functions of modern operating systems.
- Understand reasons for using interrupts, dispatching, and context switching to support concurrency.
- Compare and contrast the common algorithms used for both preemptive and non-preemptive
scheduling of tasks in operating systems.
- Understand concurrency issues in multiprocessor systems.
- Understand techniques for achieving synchronization in an operating system.
- Accurately analyze code to identify race conditions and appropriate solutions for addressing race
conditions. 
- Design and implement concurrent programs using proper synchronization techniques.
- Summarize the principles of virtual memory as applied to caching and paging.
<!-- - Code/Develop efficient programs that consider the effects of page replacement and frame allocation
on the performance of a process and the system in which it executes. -->
<!-- - Evaluate the merits and downfalls of various OS policies. -->
<!-- - Gain experience with key components in an OS kernel. -->


#### Course Topics
- The history and current state of computer systems
- Process management
- Threads (pthread) and parallel programming
- Interrupts and system calls
- CPU scheduling
- Synchronization primitives: locks and semaphores
- Deadlocks
- Memory management and virtual memory


Your overall grade is broken down as as follows:

|   | % Weight |
| :--- | :--- |
| Participation | 7% |
| Homework Assignments | 35% |
| Technical Report | 8% |
| Midterm I | 15% |
| Midterm II | 15% |
| Final Exam (comprehensive) | 20% |


##### Homework Assignments
Homework assignments are a mix of paper-based and coding-based. They account for a significant portion of the final grade.  Unless otherwise noted, you are to work on homework assignments alone. You are welcome to brainstorm with others (including tutors) for ideas, but any code you submit should be yours.

**Do not copy code you find on the web and/or ChatGPT.** This is considered plagiarism. Please see the "Academic Integrity" section below.


##### Term Project
There will be an open-ended group project assigned about mid-way through the course. The most successful teams meet and physically work together at an agreed-upon location and time -- that is, *uno animo*. It is a good idea to set up version control environments and practice scrum, to ensure everyone has something to do and is making progress. A final presentation will be given toward the end of the semester. Each member of the team should contribute equally to the assignment. Students on the same team may receive different grades based on perceived effort and contributions (via scrum logs and git commit history).


{% include syllabus-my-boilerplate.md %}

{% include syllabus-univ-boilerplate.md %}