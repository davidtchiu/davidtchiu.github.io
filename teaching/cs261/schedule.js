let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Community Statement",
      url: "community"
    },
    {
      name: "Notes and Sample Code",
      url: "https://canvas.pugetsound.edu"
    },
    {
      name: "Download Google Drive App",
      url: "https://www.google.com/drive/download/"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "Letter Counter",
        url: "hwk1.lc/",
        due: "9/10/2025", // Wed, wk 2
      },
      {
        name: "Hwk 2",
        title: "TicTacToe Player",
        url: "hwk2.ttt/",
        due: "9/22/2025", // Mon, wk 4
      },
      {
        name: "Hwk 3",
        title: "You Complete Me",
        url: "hwk3.ycm/",
        due: "10/8/2025", // Wed, wk 6
      }, 
      // {
      //   name: "Hwk 4",
      //   title: "Doubly Linked List",
      //   url: "hwk4.LL/",
      //   due: "10/21/2025",  // Tues, wk 8 Fall Break
      // },
      // {
      //   name: "Hwk 5",
      //   title: "HTML Tag Validator",
      //   url: "hwk5.html/",
      //   due: "11/3/2025",  // Mon, wk 10
      // },
      // {
      //   name: "Hwk 6",
      //   title: "Recursion Exercises",
      //   url: "hwk6.rec/",
      //   due: "11/14/2025",  // Fri, wk 11
      // },
      // {
      //   name: "Hwk 7",
      //   title: "City Tracker",
      //   url: "hwk7.city/",
      //   due: "12/2/2025",  // Tue, wk 14
      // },
      // {
      //   name: "Hwk 8",
      //   title: "Sorting Lab",
      //   url: "hwk8.ehm",
      //   due: "12/19/2025", // Fri, finals week
      // },
      // {
      //   name: "Hwk 7",
      //   title: "Huffman Encoding",
      //   url: "hwk7.huff",
      //   due: "12/18/2024",
      // },
      // {
      //   name: "Bonus Hwk",
      //   title: "Additional ArrayList Methods",
      //   url: "bonus.AL/",
      //   due: "12/18/2024",
      // },




    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Code Along: Around the Farm",
        url: "lab1.farm/",
        due: "9/5/2025",
      },
      {
        name: "Lab 2",
        title: "Inheritance Lab",
        url: "lab2.dice/",
        due: "9/12/2025",
      },
      {
        name: "Lab 3",
        title: "Abstract Classes Lab",
        url: "lab3.lib/",
        due: "9/19/2025",
      },
      {
        name: "Lab 4",
        title: "Exceptions Lab ",
        url: "lab4.exc/",
        due: "9/26/2025",
      },
      {
        name: "Lab 5",
        title: "Complexity Lab",
        url: "lab5.bigO/",
        due: "10/3/2025",
      },
      {
        name: "Lab 6",
        title: "ArrayLists Code-along Lab",
        url: "lab6.AL/",
        due: "10/10/2025",
      },
      // {
      //   name: "Lab 7",
      //   title: "LinkedList Homework/Code-along Lab",
      //   url: "hwk4.LL/",
      //   //due: "10/18/2024",
      // },
      // {
      //   name: "Lab 8",
      //   title: "Stacks and Queues Lab",
      //   url: "lab8.melody/",
      //   due: "10/24/2025",
      // },
      // {
      //   name: "Lab 9",
      //   title: "PriorityQueue Homework/Code-along Lab",
      //   url: "hwk5.rcv/",
      //   due: "10/31/2025",
      // },
      // {
      //   name: "Lab 10",
      //   title: "Recursion Lab",
      //   url: "lab10.rec/",
      //   due: "11/7/2025",
      // },
      // {
      //   name: "Lab 11",
      //   title: "Expression Trees (Binary Trees)",
      //   url: "lab11.expr/",
      //   due: "11/14/2025",
      //   },
      //   {
      //     name: "Lab 12",
      //     title: "Binary Search Trees Lab",
      //     url: "lab12.bst/",
      //     due: "11/21/2025",
      //   },
      //   {
      //     name: "Lab 13",
      //     title: "Maps Lab",
      //     url: "lab13.map/",
      //     due: "12/5/2025",
      //   },
        // {
        //   name: "Lab 12",
        //   title: "Sorting Lab",
        //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab12.sorters/",
        //   due: "12/7/2022",
        // },
    ],
  },
  lectures: [
    // wk 1
    "<strong><emph>Labor Day<br/>(No Class)</emph></strong>",
    "Course overview, Java warmup",
    "Lab 1: Warmup Lab",
    "Inheritance: motivation, abstraction",
    // wk 2
    "Inheritance: this(), super(), constructor chaining",
    "Polymorphism, object substitution, down-casting",
    "Lab 2: Inheritance Lab",
    "Method @Override, dynamic dispatch",
    // wk 3
    "Review dynamic dispatch; Abstract classes",
    "Java Interfaces",
    "Lab 3: Abstract classes Lab",
    "Multiple implementation",
    // wk 4
    "Exceptional execution and handling",
    "More exceptions",
    "Lab 4: Exceptions Lab",
    "Start: Big-O notation",
    // wk 5
    "More Big-O notation",
    "Big-O examples",
    "Lab 5: Big-O lab",
    "<strong><emph>Review for Exam 1</emph></strong>",
    // wk 6
    "<strong><emph>Exam 1</emph></strong>",
    "List interface, ArrayList: add(), reallocate()",
    "Lab 6: ArrayList Code-Along Lab",
    "Start Linked Lists: node structure",
    // wk 7
    "LL: indexOf(), getNodeAt(), get(), set()",
    "LL: addFirst(), addAfter(), add()",
    "Lab 7: LL Homework Code-Along Lab",
    "LL: optimizations (tail, iterator, double links)",
    // wk 8
    "<strong>Fall Break</strong>",
    "Stacks and Queues: LIFO, FIFO",
    "Lab 8: Stacks and Queues (MelodyPlayer)",
    "Stacks and Queue problem solving",
    // wk 9:
    "Start Recursion",
    "Recursion: code tracing",
    "Lab 9: Recursion Lab",
    "Recursive code writing and pitfalls",
    // wk 10
    "Big-O of recursive algos",
    "Start Binary Trees",
    "Lab 10: Expression Tree Lab",
    "<strong><emph>Review for Exam 2</emph></strong>",
    // wk 11
    "<strong><emph>Exam 2</emph></strong>",
    "Tree Traversal; Start Binary Search Trees (BST)",
    "Lab 11: Expression Trees Lab",
    "BSTs: contains(), add(), remove()",
    // wk 12
    "BSTs: performance analysis",
    "Start Hashing: Entry<K,V> class, hashcode()",
    "Lab 12: BST Lab",
    "HashMaps: Open addressing",
    // wk 13 
    "HashMaps: Chaining",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    // wk 14
    "Merge Sort",
    "Merge Sort Complexity",
    "Lab 13: Hashing Lab",
    "Quick Sort",
    // wk 15
    "Quick Sort Complexity",
    "TBD",
    "<strong>Reading Period</strong>",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "<strong><emph>Final Exam (Comprehensive)<br/>12:00-2:00</strong></emph>",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("9/1/2025", days, MWRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
