let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Textbook (Free): Suzanne J. Matthews, Tia Newhall, Kevin C. Webb. Dive into Systems.",
      url: "https://diveintosystems.org/book/"
    },
    {
      name: "Textbook: Silberschatz, Galvin, and Gagne. Operating Systems Concepts 8th edition or higher.",
      url: "https://www.amazon.com/dp/1119800366"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 1 (vscode)",
        title: "Setting up VSCode",
        url: "hwk1.vscode/",
        weekAssigned: 1,
        due: "1/23/2026", // Fri, wk 1
      },
      // {
      //   name: "Hwk 2 (wordstats)",
      //   title: "Word Stats",
      //   url: "hwk2.wordstat/",
      //   weekAssigned: 2,
      //   due: "2/2/2026",  // Mon, wk 3
      // },
      // {
      //   name: "Hwk 3 (ls2)",
      //   title: "A Suped-Up ls",
      //   url: "hwk3.ls2/",
      //   weekAssigned: 3,
      //   due: "2/13/2026",   // Fri, wk 4
      // },
      // {
      //   name: "Hwk 4 (dsh)",
      //   title: "David Shell",
      //   url: "hwk4.dsh/",
      //   weekAssigned: 5,
      //   due: "2/27/2026", // Fri, wk 6
      // },
      // {
      //   name: "Hwk 5 (sobel)",
      //   title: "Multithreaded Sobel Edge Detector",
      //   url: "hwk5.sobel/",
      //   weekAssigned: 6,
      //   due: "3/9/2026",  // Mon, wk 8
      // },
      // {
      //   name: "Hwk 6 (sched)",
      //   title: "Stressin' out the Scheduler",
      //   url: "hwk6.sched/",
      //   weekAssigned: 8,
      //   due: "3/27/2026",  // Fri, wk 10
      // },
      // {
      //   name: "Hwk 7 (ts_hashmap)",
      //   title: "Thread-Safe Hashmap",
      //   url: "hwk7.hashmap/",
      //   weekAssigned: 11,
      //   due: "4/8/2026", // Fri, wk 12
      // },
      // {
      //   name: "Hwk 8 (phils)",
      //   title: "Deadlock-Free Philosophers",
      //   url: "hwk7.phils/",
      //   weekAssigned: 12,
      //   due: "4/17/2026", // Fri, wk 13
      // },
      // {
      //   name: "Hwk 8",
      //   title: "Technical Report",
      //   url: "hwk8.report/",
      //   weekAssigned: 14,
      //   due: "5/4/2026",  // Finals
      // },
      // // {
      // //   name: "Hwk 7 (OneLaneBridge)",
      // //   title: "One Lane Bridge ",
      // //   url: "hwk7.thebridge/",
      // //   due: "4/16/2025", // Wed, wk 13
      // // },
      // // {
      // //   name: "Hwk 8 (bankers)",
      // //   title: "Banker's Algorithm",
      // //   url: "hwk7.bankers/",
      // //   due: "4/21/2025",
      // // },

    ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Intro: What's an OS?",
    "History of systems",
    "Notes: <a href='https://drive.google.com/open?id=1dkdLnS2wtQvwzzHTcusHgOq7tOhIKJhA&usp=drive_fs'>1. What is OS?</a><br/>",
    // wk 2
    "Tutorial 1",
    "Tutorial 2",
    "Tutorial 3",
    "C tutorial: <a href='tut1'>1. The Basics</a><br/>C tutorial: <a href='tut2'>2. Pointers</a><br/>C tutorial: <a href='tut3'>3. Memory Management</a>",
    // wk 3
    "Computing models",
    "Bootstrapping, interrupts",
    "Dual mode, system calls",
    "",
    // "Notes: <a href='notes/CS475_2-kernel.pdf'>2. Interrupts and Syscalls</a>",
    // wk 4
    "Processes: switching, PCB, address space",
    "Processes: fork(), exec() system calls",
    "Processes: wait(); zombies and orphans",
    "",
    // "Notes: <a href='notes/CS475_3-processes.pdf'>3. Concurrency and Processes</a>",
    // wk 5
    "Threads: motivation and kernel support",
    "Threads: pthread library",
    "Threads: user-level vs kernel-level",
    "",
    // "Notes: <a href='notes/CS475_4-threads1.pdf'>4. Threads (Part I)</a>",
    // wk 6
    "Par: Parallel architectures",
    "Par: Parallel computing patterns",
    "Par: Code examples, Amdahl's Law",
    "",
    // "Notes: <a href='notes/CS475_4-threads2.pdf'>Parallel Programming (Part II)</a><br/>" +
    // "Read: <a href='http://www.gotw.ca/publications/concurrency-ddj.htm'>The Free Lunch Is Over</a><br/>" +
    //   "Code: <a href='https://github.com/davidtchiu/cs475-parSum'>Parallel Sum</a><br/>" +
    //   "Code: <a href='https://github.com/davidtchiu/cs475-parInsertionSort'>Parallel Sort</a>",
    // wk 7
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    "Scheduling: goals and metrics; burst model",
    "",
    // "Exam 1 Study Guide: <a href='RG1.pdf'>Part 1</a>, <a href='RG2.pdf'>Part 2</a>",
    // "Sched: MLFQ; Examples: Linux O(1) and CFS",
    // wk 8
    "Sched: SJF, SRTF, prediction",
    "Sched: RR, SRTF, MLFQ",
    // "Sched: hyperthreading, multicore considerations",
    "Sync: critical section problem",
    "",
    // "Notes #5: <a href='notes/CS475_5-sched.pdf'>CPU Scheduling</a>",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "",
    // wk 10
    "Sync: atomicity and spinlocks",
    "Sync: blocking locks",
    "Sync: semaphores",
    "",
    // "Notes: <a href='notes/CS475_6-sync1.pdf'>6. Mutexes (Part I)</a><br/>" +
    //   "Code: <a href='https://github.com/davidtchiu/cs475-spin-vs-blocking'>Spin vs. Blocking (locks)</a><br/>" + 
    //   "Code: <a href='https://github.com/davidtchiu/cs475-lec-helpfulprof'>Helpful Professor (sem)</a><br/>",
    // wk 11
    // "Sync: monitors and condition variables",
    // "Sync: Java support",
    "Sync: more semaphores",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    "",
    // "Notes: <a href='notes/CS475_6-sync2.pdf'>6. Semaphores (Part II)</a><br/>" +
    //     "Exam 2 Study Guide: <a href='RG1.pdf'>Part 1</a>, <a href='RG2.pdf'>Part 2</a><br/>" +
    //     "Code: <a href='https://github.com/davidtchiu/cs475-lec-producerConsumer'>Producer Consumer (sem)</a><br/>" +
    //     "Code: <a href='https://github.com/davidtchiu/cs475-lec-readersWriters'>Readers Writers (sem)</a><br/>",
    // wk 12
    "Deadlocks",
    "DL: Deadlock detection",
    "DL: Bankers algorithm",
    "",
    // "Notes: <a href='notes/CS475_7-deadlock.pdf'>7. Deadlocks</a>",
    // wk 13
    "Memory Management: virtual addressing",
    "MM: partitioning and segmentation",
    "MM: segmentation",
    "",
    // "Notes: <a href='notes/CS475_8-mmu.pdf'>8. Memory Management</a>",
    // wk 14
    "MM: paging",
    "MM: TLB and page faults",
    "Virtual Memory: demand paging",
    "",
    // "Notes: <a href='notes/CS475_9-vm1.pdf'>9. Virtual Memory</a>",
    // wk 15
    "VM: page replacement",
    "VM: clock algorithm",
    // "VM: memory allocation",
    // "VM: malloc(), free()",
    "<strong>Reading Period</strong>",
    "",
    // wk final
    "<strong><emph>Final Exam (Cumulative)<br/>4:00-6:00</emph></strong>",
    "",
    "",
    "",
    // "Final Study Guide: <a href='RG1.pdf'>Part 1</a>, <a href='RG2.pdf'>Part 2</a>"
    ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/19/2026", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
