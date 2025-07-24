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
      {
        name: "Hwk 4",
        title: "Doubly Linked List",
        url: "hwk4.LL/",
        due: "10/21/2025",  // Tues, wk 8 Fall Break
      },
      {
        name: "Hwk 5",
        title: "HTML Tag Validator",
        url: "hwk5.html/",
        due: "10/31/2025",  // Fri, wk 9
      },
      {
        name: "Hwk 6",
        title: "Recursion Exercises",
        url: "hwk6.rec/",
        due: "11/14/2025",  // Fri, wk 11
      },
      {
        name: "Hwk 7",
        title: "City Tracker",
        url: "hwk7.bst/",
        due: "12/2/2025",  // Tue, wk 14
      },
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
        title: "Review: Around the Farm",
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
        title: "Interface Lab ",
        url: "lab4.interface/",
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
      {
        name: "Lab 7",
        title: "LinkedList Homework/Code-along Lab",
        url: "hwk4.LL/",
        //due: "10/18/2024",
      },
      {
        name: "Lab 8",
        title: "Stacks and Queues Lab",
        url: "lab8.melody/",
        due: "10/24/2025",
      },
      {
        name: "Lab 9",
        title: "PriorityQueue Homework/Code-along Lab",
        url: "hwk5.rcv/",
        due: "10/31/2025",
      },
      {
        name: "Lab 10",
        title: "Recursion Lab",
        url: "lab10.rec/",
        due: "11/7/2025",
      },
      {
        name: "Lab 11",
        title: "Expression Trees (Binary Trees)",
        url: "lab11.expr/",
        due: "11/14/2025",
        },
        {
          name: "Lab 12",
          title: "Binary Search Trees Lab",
          url: "lab12.bst/",
          due: "11/21/2025",
        },
        {
          name: "Lab 13",
          title: "Maps Lab",
          url: "lab13.map/",
          due: "12/5/2025",
        },
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
    "Object class, @Override, dynamic dispatch",
    // wk 3
    "Dynamic dispatch",
    "Abstract classes",
    "Lab 3: Abstract classes Lab",
    "Lab review, start interfaces",
    // wk 4
    "Java Interfaces",
    "Comparable interface: sorting farm animals",
    "Lab 4: Interfaces Lab",
    "Start: Big-O notation",
    // wk 5
    "More Big-O examples",
    "More Big-O examples",
    "Lab 5: Big-O lab",
    "<strong><emph>Review for Exam 1</emph></strong>",
    // wk 6
    "<strong><emph>Exam 1</emph></strong>",
    "List interface, ArrayList: add(), reallocate()",
    "Lab 6: ArrayList Code-Along Lab",
    "Start Linked Lists: The Node inner class",
    // wk 7
    "LL: indexOf(), getNodeAt(), get(), set()",
    "LL: addFirst(), addAfter(), add()",
    "Lab 7: LL Homework Code-Along Lab",
    "LL: optimizations (tail, iterator, double links)",
    // wk 8
    "<strong>Fall Break</strong>",
    "Stacks and Queues: LIFO, FIFO",
    "Lab 8: Stacks and Queues (Infix Solver)",
    "Priority queues: motivation, use cases",
    // wk 9:
    "Start recursion",
    "Recursion: code reading, common pitfalls",
    "Lab 9: Homework Lab",
    "Recursion: code tracing",
    // wk 10
    "Recursive code writing and pitfalls",
    "Recursive Big-O (telescoping method)",
    "Lab 10: Recursion Lab",
    "<strong><emph>Review for Exam 2</emph></strong>",
    // wk 11
    "<strong><emph>Exam 2</emph></strong>",
    "Start Binary Trees",
    "Lab 11: Expression Trees Lab",
    "Tree Traversal; Start Binary Search Trees (BST)",
    // wk 12
    "BSTs: contains(), add(), remove()",
    "BSTs: performance analysis",
    "Lab 12: BST Lab",
    "Start Hashing: Entry<K,V> class, hashcode()",
    // wk 13 
    "HashMaps: Open addressing",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    // wk 14
    "HashMaps: Chaining",
    "Merge Sort",
    "Lab 13: Hashing Lab",
    "Merge Sort Complexity",
    // wk 15
    "Quick Sort",
    "Quick Sort Complexity",
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
