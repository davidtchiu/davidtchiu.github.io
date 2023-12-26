  

let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Notes and Sample Code",
      url: "https://canvas.pugetsound.edu"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 0 (vscode)",
        title: "Setting up VS Code",
        url: "hwk0.vscode/",
        due: "1/19/2024",
      },
      {
        name: "Hwk 1 (sorting)",
        title: "Pointers, Arrays, Strings",
        url: "hwk2.ptrs/",
        due: "1/29/2024",
      },
      {
        name: "Hwk 2 (ls2)",
        title: "Dynamic Memory Allocation",
        url: "hwk3.malloc/",
        due: "2/9/2024",
      },
      {
        name: "Hwk 3 (dsh)",
        title: "David Shell",
        url: "hwk4.dsh/",
        due: "2/19/2024",
      },
      {
        name: "Hwk 4 (mmm)",
        title: "Matrix Multiplication",
        url: "hwk5.mmm/",
        due: "3/1/2024",
      },
      {
        name: "Hwk 5 (ts_hashmap)",
        title: "Thread-Safe Hashmap",
        url: "hwk6.hashmap/",
        due: "3/22/2024", // after break
      },
      {
        name: "Hwk 6 (OneLaneBridge)",
        title: "The One Lane Bridge ",
        url: "hwk7.thebridge/",
        due: "4/14/2024",
      },
      {
        name: "Hwk 7 (bankers)",
        title: "Banker's Algorithm",
        url: "hwk8.bankers/",
        due: "4/28/2024",
      },
      {
        name: "Extra Credit",
        title: "Bonus Tech Report",
        url: "hwkB.report/",
        due: "5/3/2024",
      },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "C Basics",
        url: "lab1/",
      },
      {
        name: "Lab 2",
        title: "Pointers, Arrays, C Strings",
        url: "lab2/",
      },
      {
        name: "Lab 3",
        title: "Memory Allocation",
        url: "lab3/",
      },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    // projects: [
    //   {
    //     name: "Proj 1",
    //     title: "Ready Queue",
    //     url: "proj1/",
    //     due: "3/7/2022",
    //   },
    //   {
    //     name: "Proj 2",
    //     title: "Priority Scheduling",
    //     url: "proj2/",
    //     due: "3/25/2022",
    //   },
    //   {
    //     name: "Proj 3",
    //     title: "Time-Sharing and Locks",
    //     url: "proj3/",
    //     due: "4/18/2022",
    //   },
    //   {
    //     name: "Proj 4",
    //     title: "Deadlock Detection",
    //     url: "proj4/",
    //     due: "5/13/2022",
    //   },
    // ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Intro: A brief history of computer systems",
    // wk 2
    "<font color='blue'>Lab 1 (Attendance required; Bring laptops)</font>",
    "<font color='blue'>Lab 2 (Attendance required; Bring laptops)</font>",
    "<font color='blue'>Lab 3 (Attendance required; Bring laptops)</font>",
    // wk 3
    "Intro: Job scheduling models",
    "Invoking OS: Booting, interrupts",
    "Invoking OS: Traps and system calls",
    // wk 4
    "Processes: PCB, address space, program stack",
    "Processes: state transitions, fork()",
    "Processes: wait(); zombies and orphans",
    // wk 5
    "Processes: exec() system call",
    "Start Threads; User vs. kernel threads",
    "Threads: pthread library",
    // wk 6
    "Threads: Performance and data sharing; Amdahl's Law",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "Scheduling: goals and metrics; FCFS",
    "Sched: RR, SJF, SRTF",
    "Sched: Priority, MLFQ; Examples: Linux O(1) and CFS",
    // wk 8
    "Sched: hyperthreading, multicore considerations",
    "Synchronization: critical section",
    "Sync: spin locks; atomic ops",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: blocking locks",
    "Sync: semaphores",
    "Sync: more semaphores",
    // wk 11
    "Sync: monitors and condition variables",
    "Sync: synchronization in Java",
    "Start deadlock conditions",
    // wk 12
    "DL: RAGs, detection and recovery",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 13
    "DL: Banker's algorithm",
    "Memory Management: virtual addressing",
    "MM: memory partitioning",
    // wk 14
    "MM: segmentation",
    "MM: paging",
    // "MM: multi-level paging",
    "MM: translation caching",
    // wk 15
    "<strong><emph>Cancelled</emph></strong>",
    "Start Virtual Memory",
    "VM: Replacement policies: FIFO, LRU",
    // wk 16
    "VM: Clock",
    "Memory allocation and working set",
    // "Start File System",
    // "File System",
    "<strong>Reading Period</strong>",
    // "VM: memory allocation (cont.)",
    // "VM: malloc(), free()",
    // wk final
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/15/2024", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
