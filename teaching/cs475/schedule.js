let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 0",
        title: "Virtual Machine",
        url: "hwk0.vb/",
        due: "ASAP",
      },
      // {
      //   name: "Hwk 1",
      //   title: "Getting Started with C",
      //   url: "hwk1.ws/",
      //   due: "1/28/2022",
      // },
      //   {
      //     name: "Hwk 2",
      //     title: "Relational Algebra",
      //     url: "hwk2.ra/",
      //     due: "9/24/2021",
      //   },
      //   {
      //     name: "Hwk 3",
      //     title: "Data Preparation",
      //     url: "hwk3.ddl/",
      //     due: "10/8/2021",
      //   },
      //   {
      //     name: "Hwk 4",
      //     title: "Writing SQL Queries",
      //     url: "hwk4.dml/",
      //     due: "10/22/2021",
      //   },
      //   {
      //     name: "Hwk 5",
      //     title: "Normalization",
      //     url: "hwk5.norm/",
      //     due: "11/5/2021",
      //   },
      //   {
      //     name: "Hwk 6",
      //     title: "Joins!",
      //     url: "hwk6.joins/",
      //     due: "11/23/2021",
      //   },
    ],
    ////////////////////////////// PROJECTS ///////////////////////////////
    // projects: [
    //   {
    //     name: "Proj 1",
    //     title: "To the Cloud",
    //     url: "proj1.cloud/",
    //     due: "9/20/2021",
    //   },
    //   {
    //     name: "Proj 2",
    //     title: "Server-Side Web Development with PHP",
    //     url: "proj2.php/",
    //     due: "10/22/2021", //extended this year only (move back to 10/18 in future)
    //   },
    //   {
    //     name: "Proj 3",
    //     title: "Project Planning",
    //     url: "proj3.planning/",
    //     due: "11/1/2021",
    //   },
    //   {
    //     name: "Proj 4",
    //     title: "Implementation",
    //     url: "proj4.impl/",
    //     due: "12/10/2021",
    //   },
    // ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "What is an operating system?",
    "A brief history of computing",
    // wk 2
    "Job scheduling models",
    "Brief intro to the cmd-line",
    "Interrupts, system calls, and dual-mode operation",
    // wk 3
    "Process Management: address spaces",
    "Process: PCB, state transitions",
    "Process: fork(), wait(), exec(), zombies and orphans",
    // wk 4
    "Thread Management: performance and data sharing",
    "Threads: user vs. kernel; implementation; pthread",
    "Threads: work sharing example",
    // wk 5
    "CPU Scheduling goals; FCFS, RR",
    "Sched: RR, SJF, SRTF",
    "Talk about Hwk 4; Sched: Priority, Lottery",
    // wk 6
    "Sched: Priority, MLFQ; OSX and Linux",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1 (in person)</emph></strong>",
    // wk 7
    "Sched: hyperthreading, multicore considerations",
    "Synchronization: Critical section, locks",
    "Sync: Implementing locks; priority inversion problem",
    // wk 8
    "Sync: Spin locks, priority inversion",
    "Sync: Blocking locks; Semaphores",
    "Sync: Implementing semaphores; helpful professor problem",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: semaphore review; bounded buffer problem",
    "Sync: semaphores: bounded buffer, readers-writers",
    "Sync: monitors and Java",
    // wk 11
    "Deadlocks (DL): conditions and prevention",
    "DL: Banker's algorithm",
    "DL: RAGs, detection and recovery",
    // wk 12
    "MM: Address binding, relocatability, process loading",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 13
    "MM: Fixed vs. Dynamic Partitioning",
    "MM: Segmentation",
    "MM: Paging, 2-level paging",
    // wk 14
    "MM: Translation Lookaside Buffer (TLB)",
    "Virtual Memory (VM): demand paging and page fault handlingy",
    "VM: FIFO, MIN, LRU replacement policies",
    // "Start transactions: ACID, serializability",
    // "Transactions: serializability test, precedence graphs",
    // "Transactions: Concurrency control",
    // wk 15
    "VM: Clock; Start memory allocation and working-set model",
    "VM: memory allocation (cont.)",
    "VM: malloc(), free()",
    // wk 16
    "File System",
    "File System",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/17/22", days, MWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
