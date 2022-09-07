let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "Warmup: Letter Counter",
        url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk1/",
        due: "9/7/2022",
      },
      {
        name: "Hwk 2",
        title: "TicTacToe Player",
        url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk2/",
        due: "9/19/2022",
      },
      // {
      //   name: "Hwk 3",
      //   title: "You Complete Me",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk3.ycm/",
      //   due: "10/3/2022",
      // },
      // {
      //   name: "Hwk 4",
      //   title: "Sentiment Predictor",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk4.sent/",
      //   due: "10/19/2022",
      // },
      // {
      //   name: "Hwk 5",
      //   title: "Rank Choice Vote",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk5.rcv",
      //   due: "10/31/2022",
      // },
      // {
      //   name: "Hwk 6",
      //   title: "Evil Hangman",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk6.ehm",
      //   due: "11/14/2022",
      // },
      // {
      //   name: "Hwk 7",
      //   title: "Compression",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk7.huff",
      //   due: "12/5/2022",
      // }
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Review: Around the Farm",
        url: "https://cs.pugetsound.edu/~dchiu/cs261/lab1/",
        due: "8/31/2022",
      },
      {
        name: "Lab 2",
        title: "Inheritance Lab",
        url: "https://cs.pugetsound.edu/~dchiu/cs261/lab2/",
        due: "9/7/2022",
      },
      // {
      //   name: "Lab 3",
      //   title: "Abstract Classes Lab",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab3/",
      //   due: "9/14/2022",
      // },
      // {
      //   name: "Lab 4",
      //   title: "Interface Lab ",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab4/",
      //   due: "9/21/2022",
      // },
      // {
      //   name: "Lab 5",
      //   title: "Exceptions Lab",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab5/",
      //   due: "9/28/2022",
      // },
      // {
      //   name: "Lab 6",
      //   title: "ArrayLists Lab",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab6/",
      //   due: "10/12/2022",
      // },
      // {
      //   name: "Lab 7",
      //   title: "Stacks and Queues Lab",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab7/",
      //   due: "10/26/2022",
      // },
      // {
      //   name: "Lab 8",
      //   title: "Recursion Lab",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab8/",
      //   due: "11/2/2022",
      // },
      // {
      //   name: "Lab 9",
      //   title: "Expression Trees (Recursive Structs)",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab9.expr",
      //   due: "11/16/2022",
      //   },
      //   {
      //     name: "Lab 10",
      //     title: "BST Lab",
      //     url: "https://cs.pugetsound.edu/~dchiu/cs261/lab10/",
      //     due: "11/23/2022",
      //   },
      //   {
      //     name: "Lab 11",
      //     title: "Maps Lab",
      //     url: "https://cs.pugetsound.edu/~dchiu/cs261/lab11/",
      //     due: "11/30/2022",
      //   },
    ],
  },
  lectures: [
    // wk 1
    "Introductions: Who are we? Syllabus",
    "Lab 1: Review",
    "Inheritance: motivation, abstraction",
    "Inheritance (cont.): this(), super()",
    // wk 2
    "<strong><emph>Labor Day<br/>(No Class)</emph></strong>",
    "Lab 2: Inheritance Lab",
    "Object class, instanceof, down-casting, @Override",
    "Polymorphism, dynamic  dispatch",
    // wk 3
    "Abstract classes",
    "Lab 3: Abstract classes Lab",
    "Interfaces and implementations",
    "Multiple implementation, Comparable<T>",
    // wk 4
    "Finish Comparable LibraryBook; Start exceptions",
    "Lab 4: Interfaces",
    "Exceptions: throwing, catching",
    "Catching exceptions: (un)checked, customization",
    // wk 5
    "Start Big-O",
    "Lab 5: Exception Lab",
    "Big-O",
    "Big-O (insertion sort)",
    // wk 6
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    "List interface, ArrayList: add(), rellocation",
    "ArrayList: Generics; Big-O analysis",
    // wk 7
    "Linked list: Inner classes; get(), set()",
    "Lab 6: ArrayList and Generics lab",
    "Linked list: indexOf(), add()",
    "Linked list optimizations (tail, iterator)",
    // wk 8
    "<strong>Fall Break</strong>",
    "<strong>Fall Break</strong>",
    "Stacks and Queues",
    "Dijkstra's 2-Stack Algo",
    // wk 9:
    "PriorityQueue, Dijkstra's SSSP algo",
    "Lab 7: Stacks and Queues",
    "Start recursion: setup and tracing",
    "Recursion (cont.): code reading, common pitfalls",
    // wk 10
    "Big-O analysis of recursive algos (telescoping method)",
    "Lab 8: Recursion Lab",
    "Lab review",
    "Sorting: Merge Sort",
    // wk 11
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    "Sorting: Quick Sort",
    "PriorityQueue with Heaps",
    // wk 12
    "Start Trees and Binary Trees",
    "Lab 9: Expression Trees Lab",
    "Tree traversal; Start BSTs",
    "BST (cont.): contains(), add(), remove()",
    // wk 13 
    "Finish BST: performance, size(), smallest()",
    "Lab 10: BST Lab",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    // wk 14
    "Start Maps",
    "Lab 11: Open Addressing lab",
    "HashMap cont.",
    "HashMap: chaining",
    // wk 15
    "TBD",
    "Hwk Lab",
    "<strong>Reading Period</strong>",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "",
    "<strong><emph>Final Exam<br/>(12p - 2p)</strong></emph>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/29/2022", days, MTWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
