let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 0",
        title: "Virtual Machine",
        url: "hwk0.vb/",
        due: "1/21/2022",
      },
      {
        name: "Hwk 1",
        title: "Getting Started with C",
        url: "hwk1.ws/",
        due: "1/28/2022",
      },
      {
        name: "Hwk 2",
        title: "Pointers and Arrays",
        url: "hwk2.ptrs/",
        due: "2/4/2022",
      },
      {
        name: "Hwk 3",
        title: "Dynamic Allocation",
        url: "hwk3.malloc/",
        due: "2/11/2022",
      },
      {
        name: "Hwk 4",
        title: "David Shell (dsh)",
        url: "hwk4.dsh/",
        due: "2/25/2022",
      },
      {
        name: "Hwk 5",
        title: "Parallel Matrix Multiplication",
        url: "hwk5.mmm/",
        due: "3/21/2022",
      },
      {
        name: "Hwk 6",
        title: "Bartender Problem",
        url: "hwk6.thebar/",
        due: "4/11/2022",
      },
      {
        name: "Hwk 7",
        title: "Banker's Algorithm",
        url: "hwk7.bankers/",
        due: "5/2/2022",
      },
      // {
      //   name: "Hwk 8",
      //   title: "Paging Simulator",
      //   url: "hwk7.paging/",
      //   due: "5/11/2022",
      // },
    ],
    ////////////////////////////// PROJECTS ///////////////////////////////
    projects: [
      {
        name: "Proj 1",
        title: "Ready Queue",
        url: "proj1/",
        due: "3/7/2022",
      },
      {
        name: "Proj 2",
        title: "Priority Scheduling",
        url: "proj2/",
        due: "3/25/2022",
      },
      {
        name: "Proj 3",
        title: "Time-Sharing and Locks",
        url: "proj3/",
        due: "4/18/2022",
      },
      {
        name: "Proj 4",
        title: "Deadlock Detection",
        url: "proj4/",
        due: "5/13/2022",
      },
    ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "What is an operating system?",
    "A brief history of computing",
    // wk 2
    "Job scheduling models",
    "Dual-mode operation, interrupts, system calls",
    "Finish system calls",
    // wk 3
    "Process Management: address spaces",
    "Process: PCB, state transitions",
    "Process: fork(), wait(), zombies and orphans",
    // wk 4
    "Finish Processes: exec()",
    "Thread Management: performance and data sharing",
    "Threads: user vs. kernel; implementation; pthread",
    // wk 5
    "Threads: work sharing example - parallel sum",
    "CPU Scheduling: goals and metrics; FCFS",
    "Sched: RR, SJF",
    // "Talk about Hwk 4; Sched: Priority, Lottery",
    // wk 6
    "Sched: SRTF, burst prediction",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1 (in person)</emph></strong>",
    // wk 7
    "Sched: Priority, MLFQ; Examples: Linux O(1) and CFS",
    "Sched: hyperthreading, multicore considerations",
    "Start Synchronization",
    // wk 8
    "Synchronization: Critical section, locks",
    "Sync: Busy waiting and spin-locks; priority inversion problem",
    "Cancelled",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: Blocking locks; Semaphores",
    "Sync: semaphores",
    "Sync: Implementing semaphores; helpful professor problem",
    // wk 11
    "Sync: Bounded buffer problem",
    "Sync: monitors",
    "Sync: monitors and Java",
    // wk 12
    "Deadlocks (DL): conditions and prevention",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 13
    "DL: RAGs, detection and recovery",
    "DL: Banker's algorithm",
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
const schedule = new CourseCalendar("1/17/22", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
