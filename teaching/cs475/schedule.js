let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 0 (vscode)",
        title: "Setting up VS Code",
        url: "hwk0.vscode/",
        due: "1/19/2023",
      },
      {
        name: "Hwk 1 (wordstat)",
        title: "Getting Started with C",
        url: "hwk1.ws/",
        due: "1/23/2023",
      },
      {
        name: "Hwk 2 (sorting)",
        title: "Pointers, Arrays, Strings",
        url: "hwk2.ptrs/",
        due: "1/30/2023",
      },
      {
        name: "Hwk 3 (ls2)",
        title: "Dynamic Memory Allocation",
        url: "hwk3.malloc/",
        due: "2/6/2023",
      },
      // {
      //   name: "Hwk 4 (dsh)",
      //   title: "David Shell",
      //   url: "hwk4.dsh/",
      //   due: "2/20/2023",
      // },
      // {
      //   name: "Hwk 5 (mmm)",
      //   title: "Matrix Multiplication",
      //   url: "hwk5.mmm/",
      //   due: "3/6/2023",
      // },
      // {
      //   name: "Hwk 6 (ts_hashmap)",
      //   title: "Thread-Safe Hashmap",
      //   url: "hwk6.hashmap/",
      //   due: "3/22/2023",
      // },
      // {
      //   name: "Hwk 7 (thebar)",
      //   title: "Bartender Problem ",
      //   url: "hwk7.thebar/",
      //   due: "4/3/2023",
      // },
      // {
      //   name: "Hwk 8 (bankers)",
      //   title: "Banker's Algorithm",
      //   url: "hwk8.bankers/",
      //   due: "4/21/2023",
      // },
      // {
      //   name: "Hwk 9 (vmm)",
      //   title: "Paging Simulator (vmm)",
      //   url: "hwk9.paging/",
      //   due: "5/4/2023",
      // },
    ],
    ////////////////////////////// PROJECTS ///////////////////////////////
    projects: [
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
    ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Intro: What is OS?",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 2
    "Intro: History of computer systems",
    "Intro: Job scheduling models",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 3
    "Intro: Dual-mode operation, interrupts, system calls",
    "Intro: Finish system calls",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 4
    "Start Processes: PCB, state transitions",
    "Process: fork, wait, zombies and orphans",
    "Process: exec",
    // wk 5
    "Start Threads: Performance and data sharing; Amdahl's Law",
    "Threads: User vs. kernel; C pthread library",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 6
    // "Sched: SRTF, burst prediction",
    "Threads: Work sharing example - parallel sum",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    // "Sched: hyperthreading, multicore considerations",
    "Start Scheduling: goals and metrics; FCFS",
    "Sched: RR, SJF, SRTF",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 8
    "Sched: Priority, MLFQ; Examples: Linux O(1) and CFS",
    "Start Synchronization: critical section",
    "Sync: locks, atomicity",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: spin locks; priority inversion problem",
    "Sync: blocking locks; start semaphores",
    "Sync: semaphores",
    // wk 11
    "Sync: helpful professor problem",
    "Sync: bounded-buffer problem",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 12
    "Sync: monitors and java",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 13
    "Start Deadlocks: prevention",
    "DL: Banker's algorithm",
    "DL: RAGs, detection and recovery",
    // wk 14
    "Start Memory Management: virtual addressing",
    "MM: memory partitioning",
    "MM: segmentation",
    // wk 15
    "MM: paging",
    "MM: multi-level paging",
    "Start Virtual Memory",
    // "MM: translation Lookaside Buffer (TLB)",
    // wk 16
    "VM: Replacement policies",
    "VM: Clock",
    "<strong>Reading Period</strong>",
    //; Start memory allocation and working-set model",
    // "VM: memory allocation (cont.)",
    // "VM: malloc(), free()",
    // wk final
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/16/23", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
