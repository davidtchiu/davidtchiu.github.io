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
        name: "Hwk 3 (supedLS)",
        title: "Dynamic Allocation",
        url: "hwk3.malloc/",
        due: "2/6/2023",
      },
      {
        name: "Hwk 4 (dsh)",
        title: "David Shell",
        url: "hwk4.dsh/",
        due: "2/20/2023",
      },
      {
        name: "Hwk 5 (mmm)",
        title: "Multithreading",
        url: "hwk5.mmm/",
        due: "3/6/2023",
      },
      {
        name: "Hwk 6 (simple sync?)",
        title: "Simple mutex",
        url: "hwk6.mutex/",
        due: "3/20/2023",
      },
      {
        name: "Hwk 7 (thebar)",
        title: "Bartender Problem ",
        url: "hwk7.thebar/",
        due: "4/3/2023",
      },
      {
        name: "Hwk 7 (bankers)",
        title: "Banker's Algorithm",
        url: "hwk7.bankers/",
        due: "4/17/2023",
      },
      {
        name: "Hwk 8 (vmm)",
        title: "Paging Simulator (vmm)",
        url: "hwk8.paging/",
        due: "5/4/2023",
      },
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
    "Process: PCB, state transitions",
    "Process: fork(), wait(), zombies and orphans",
    "Finish Processes: exec()",
    // wk 5
    "Threads: performance and data sharing",
    "Threads: user vs. kernel; implementation; pthread",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 6
    // "Sched: SRTF, burst prediction",
    "Threads: work sharing example - parallel sum",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    // "Sched: hyperthreading, multicore considerations",
    "Scheduling: goals and metrics; FCFS",
    "Sched: RR, SJF, SRTF",
    "<font color='blue'>C Lab (Attendance required; Bring laptops)</font>",
    // wk 8
    "Sched: Priority, MLFQ; Examples: Linux O(1) and CFS",
    "Start Synchronization",
    "Synchronization: Critical section, locks",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: Busy waiting and spin-locks; priority inversion problem",
    "Sync: Blocking locks; Semaphores",
    "Sync: semaphores",
    // wk 11
    "Sync: Implementing semaphores; helpful professor problem",
    "Sync: Bounded buffer problem",
    "Sync: monitors and Java",
    // wk 12
    "Deadlocks (DL): conditions and prevention",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 13
    "DL: Banker's algorithm",
    "DL: RAGs, detection and recovery",
    "MM: Address binding, relocatability, process loading",
    // wk 14
    "MM: Partitioning (Fixed, Dynamic)",
    "MM: Segmentation",
    "MM: Paging",
    // wk 15
    "MM: linked tables; multi-level paging",
    "MM: Translation Lookaside Buffer (TLB)",
    "Virtual Memory (VM): demand paging",
    // wk 16
    "VM: FIFO, MIN, LRU replacement policies",
    "VM: Clock; Start memory allocation and working-set model",
    // "VM: memory allocation (cont.)",
    // "VM: malloc(), free()",
    "<strong>Reading Period</strong>",
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
