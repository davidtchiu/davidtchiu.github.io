  

let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Notes and Sample Code (on Canvas)",
      url: "https://canvas.pugetsound.edu"
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
        due: "1/24/2025", // Fri, wk 1
      },
      {
        name: "Hwk 2 (heapsort)",
        title: "Pointers, Arrays, Strings",
        url: "hwk2.sorting/",
        due: "2/3/2025",  // Mon, wk 3
      },
      {
        name: "Hwk 3 (ls2)",
        title: "Making System Calls",
        url: "hwk3.ls2/",
        due: "2/14/2025",   // Fri, wk 4
      },
      {
        name: "Hwk 4 (dsh)",
        title: "David Shell",
        url: "hwk4.dsh/",
        due: "3/3/2025", // Mon, wk 7
      },
      {
        name: "Hwk 5 (sobel)",
        title: "Parallel Edge Detection",
        url: "hwk5.sobel/",
        due: "3/17/2025",  // Mon, during break wk 8
      },
      {
        name: "Hwk 6 (ts_hashmap)",
        title: "Thread-Safe Hashmap",
        url: "hwk6.hashmap/",
        due: "4/9/2025", // after break, Wed, wk 11
      },
      // {
      //   name: "Hwk 7 (OneLaneBridge)",
      //   title: "One Lane Bridge ",
      //   url: "hwk7.thebridge/",
      //   due: "4/16/2025", // Wed, wk 13
      // },
      {
        name: "Hwk 7 (bankers)",
        title: "Banker's Algorithm",
        url: "hwk7.bankers/",
        due: "4/21/2025",
      },
      {
        name: "Hwk 8",
        title: "Technical Report",
        url: "hwk8.report/",
        due: "5/9/2025",  // Fri, finals wk
      },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "The Basics of C",
        url: "lab1/",
      },
      {
        name: "Lab 2",
        title: "Arrays, Structs, and Pointers",
        url: "lab2/",
      },
      {
        name: "Lab 3",
        title: "Dynamic Memory Allocation",
        url: "lab3/",
      },
    ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Intro: What's an OS?",
    "Intro: A brief history of computer systems",
    // wk 2
    "<font color='blue'>Lab 1 (Attendance required; Bring laptops)</font>",
    "<font color='blue'>Lab 2 (Attendance required; Bring laptops)</font>",
    "<font color='blue'>Lab 3 (Attendance required; Bring laptops)</font>",
    // wk 3
    "Intro: batch processing, multiprogramming, timesharing",
    "Invoking the OS: Bootstrapping, interrupts",
    "Invoking the OS: Interrupts, traps and system calls",
    // wk 4
    "Processes: PCB, address space, program stack",
    "Processes: state transitions",
    "Processes: fork() system call",
    // wk 5
    "Processes: exec() system call",
    "Processes: wait(); zombies and orphans",
    "Threads: motivation and kernel support",
    // wk 6
    "Threads: pthread library",
    // "Threads: Performance and data sharing; Amdahl's Law",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "Threads: Amdahl's Law; code examples",
    "Scheduling: goals and metrics; burst model",
    "Sched: SJF, SRTF, prediction",
    // "Sched: MLFQ; Examples: Linux O(1) and CFS",
    // wk 8
    "Sched: RR, SRTF, MLFQ",
    "Sched: hyperthreading, multicore considerations",
    "Sync: critical section problem",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: atomicity and spinlocks",
    "Sync: blocking locks",
    "Sync: semaphores",
    // wk 11
    // "Sync: monitors and condition variables",
    // "Sync: Java support",
    // "Sync: more semaphores",
    "DL: Deadlocks",
    "DL: Deadlock detection",
    "<strong><emph>Review</emph></strong>",
    // wk 12
    "<strong><emph>Exam 2</emph></strong>",
    "DL: Bankers algorithm",
    "Memory Management: virtual addressing",
    // wk 13
    "MM: partitioning and segmentation",
    "MM: segmentation",
    "MM: paging",
    // wk 14
    "MM: TLB and page faults",
    "Virtual Memory: demand paging",
    "VM: page replacement",
    // wk 15
    "VM: clock algorithm",
    "VM: memory allocation",
    // "VM: malloc(), free()",
    "<strong>Reading Period</strong>",
    // wk final
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/19/2026", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
