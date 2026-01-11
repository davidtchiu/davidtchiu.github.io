  

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
        title: "Setting up VS Code",
        url: "hwk1.vscode/",
        due: "1/23/2026", // Fri, wk 1
      },
      // {
      //   name: "Hwk 2 (heapsort)",
      //   title: "Pointers, Arrays, Strings",
      //   url: "hwk2.sorting/",
      //   due: "2/2/2026",  // Mon, wk 3
      // },
      // {
      //   name: "Hwk 3 (ls2)",
      //   title: "Making System Calls",
      //   url: "hwk3.ls2/",
      //   due: "2/13/2026",   // Fri, wk 4
      // },
      // {
      //   name: "Hwk 4 (dsh)",
      //   title: "David Shell",
      //   url: "hwk4.dsh/",
      //   due: "2/25/2026", // Wed, wk 6
      // },
      // {
      //   name: "Hwk 5 (sobel)",
      //   title: "Edge Detection",
      //   url: "hwk5.sobel/",
      //   due: "3/9/2026",  // Mon, wk 8
      // },
      // {
      //   name: "Hwk 6 (ts_hashmap)",
      //   title: "Thread-Safe Hashmap",
      //   url: "hwk6.hashmap/",
      //   due: "3/27/2026", // Fri, wk 10
      // },
      // {
      //   name: "Hwk 7 (phils)",
      //   title: "Deadlock-Free Philosophers",
      //   url: "hwk7.phils/",
      //   due: "4/10/2026", // Fri, wk 12
      // },
      // {
      //   name: "Hwk 8",
      //   title: "Technical Report",
      //   url: "hwk8.report/",
      //   due: "4/24/2026",  // Fri, wk 14
      // },
      // // {
      // //   name: "Hwk 7 (OneLaneBridge)",
      // //   title: "One Lane Bridge ",
      // //   url: "hwk7.thebridge/",
      // //   due: "4/16/2025", // Wed, wk 13
      // // },
      // // {
      // //   name: "Hwk 7 (bankers)",
      // //   title: "Banker's Algorithm",
      // //   url: "hwk7.bankers/",
      // //   due: "4/21/2025",
      // // },

    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    // labs: [
    //   {
    //     name: "Lab 1",
    //     title: "The Basics of C",
    //     url: "tut1/",
    //   },
    //   {
    //     name: "Lab 2",
    //     title: "Arrays, Structs, and Pointers",
    //     url: "tut2/",
    //   },
    //   {
    //     name: "Lab 3",
    //     title: "Dynamic Memory Allocation",
    //     url: "tut3/",
    //   },
    // ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Intro: What's an OS?",
    "Intro: A brief history of computer systems",
    "<a href='notes/CS475_1-intro.pdf'>Lecture Notes 1 (what is OS?)</a><br/>" +
      "<a href='https://www.youtube.com/watch?v=QgUVrzkQgds'>Watch BBC Documentary: Calculating Ada</a>",
    // wk 2
    "<font color='blue'>Tutorial 1 (C Basics)</font>",
    "<font color='blue'>Tutorial 2 (Pointers)</font>",
    "<font color='blue'>Tutorial 3 (Memory Management)</font>",
    "<a href='tut1'>C tutorial 1</a><br/><a href='tut2'>C tutorial 2</a><br/><a href='tut3'>C tutorial 3</a>",
        // wk 3
    "Intro: batch processing, multiprogramming, timesharing",
    "Invoking the OS: Bootstrapping, interrupts",
    "Invoking the OS: Interrupts, traps and system calls",
    "<a href='notes/CS475_2-kernel.pdf'>Lecture Notes 2 (Invoking OS)</a>",
    // wk 4
    "Processes: switching, PCB, address space",
    "Processes: fork(), exec() system calls",
    "Processes: wait(); zombies and orphans",
    "<a href='notes/CS475_3-processes.pdf'>Lecture Notes 3 (Concurrency and Processes)</a>",
    // wk 5
    "Threads: motivation and kernel support",
    "Threads: pthread library",
    "Threads: user-level vs kernel-level",
    "<a href='notes/CS475_4-threads1.pdf'>Lecture Notes 4a (Threads)</a>",
    // wk 6
    "Par: Parallel architectures",
    "Par: Parallel computing patterns",
    "Par: multithreaded code examples, Amdahl's Law",
    "<a href='notes/CS475_4-threads2.pdf'>Lecture Notes 4b (Parallel Programming)</a>" +
    "<a href='http://www.gotw.ca/publications/concurrency-ddj.htm'>Free Lunch Is Over</a><br/>" +
      "<a href='https://github.com/davidtchiu/cs475-parSum'>Parallel Sum</a><br/>" +
      "<a href='https://github.com/davidtchiu/cs475-parInsertionSort'>Parallel Sort</a>",
    // wk 7
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    "Scheduling: goals and metrics; burst model",
    "<a href='RG1.pdf'>Exam 1 Study Guide</a> (<a href='RG1Sol.pdf'>selected soln</a>)",
    // "Sched: MLFQ; Examples: Linux O(1) and CFS",
    // wk 8
    "Sched: SJF, SRTF, prediction",
    "Sched: RR, SRTF, MLFQ",
    // "Sched: hyperthreading, multicore considerations",
    "Sync: critical section problem",
    "<a href='notes/CS475_5-sched.pdf'>Lecture Notes 5 (Scheduling)</a>",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "",
    // wk 10
    "Sync: atomicity and spinlocks",
    "Sync: blocking locks",
    "Sync: semaphores",
    "<a href='notes/CS475_6-sync1.pdf'>Lecture Notes 6a (Mutexes)</a>" +
    "<a href='notes/CS475_6-sync2.pdf'>Lecture Notes 6b (Semaphores)</a>" +
      "<a href='https://github.com/davidtchiu/cs475-spin-vs-blocking'>Spin vs. Blocking (locks)</a><br/>" + 
      "<a href='https://github.com/davidtchiu/cs475-lec-helpfulprof'>Helpful Professor (sem)</a><br/>",
    // wk 11
    // "Sync: monitors and condition variables",
    // "Sync: Java support",
    "Sync: more semaphores",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    "<a href='RG2.pdf'>Exam 2 Study Guide</a> (<a href='RG2Sol.pdf'>soln</a>)<br/>" +
        "<a href='https://github.com/davidtchiu/cs475-lec-producerConsumer'>Producer Consumer (sem)</a><br/>" +
        "<a href='https://github.com/davidtchiu/cs475-lec-readersWriters'>Readers Writers (sem)</a><br/>",
    // wk 12
    "Deadlocks",
    "DL: Deadlock detection",
    "DL: Bankers algorithm",
    "<a href='notes/CS475_7-deadlock.pdf'>Lecture Notes 7 (Deadlocks)</a>" +
    // wk 13
    "Memory Management: virtual addressing",
    "MM: partitioning and segmentation",
    "MM: segmentation",
    "<a href='notes/CS475_8-mmu.pdf'>Lecture Notes 8 (Memory Management)</a>" +
    // wk 14
    "MM: paging",
    "MM: TLB and page faults",
    "Virtual Memory: demand paging",
    "<a href='notes/CS475_9-vm1.pdf'>Lecture Notes 9 (Virtual Memory)</a>" +
    // wk 15
    "VM: page replacement",
    "VM: clock algorithm",
    // "VM: memory allocation",
    // "VM: malloc(), free()",
    "<strong>Reading Period</strong>",
    "",
    // wk final
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
    "",
    "<a href='RG3.pdf'>Final Study Guide</a> (<a href='RG3Sol.pdf'>selected soln</a>)",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/19/2026", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
