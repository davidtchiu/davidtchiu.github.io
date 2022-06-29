let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "Warmup: Letter Counter",
        url: "hwk1/",
        due: "9/7/2022",
      },
      {
        name: "Hwk 2",
        title: "TicTacToe",
        url: "hwk2/",
        due: "9/19/2022",
      },
      {
        name: "Hwk 3",
        title: "You Complete Me",
        url: "hwk4/",
        due: "9/30/2022",
      },
      {
        name: "Hwk 4",
        title: "Sentiment Predictor",
        url: "hwk3/",
        due: "10/14/2022",
      },
      {
        name: "Hwk 5",
        title: "Rank Choice Vote (Priority Queue)",
        url: "hwk5/",
        due: "10/28/2022",
      },
      {
        name: "Hwk 6",
        title: "Expression Trees (Recursive Structs)",
        url: "hwk6/",
        due: "11/11/2022",
      },
      {
        name: "Hwk 7",
        title: "Huffman Encoding (Binary Trees, Recursion)",
        url: "hwk7/",
        due: "11/28/2022",
      },
      // {
      //   name: "Hwk 8",
      //   title: "Evil Hangman (Maps)",
      //   url: "hwk8/",
      //   due: "12/6/2022",
      // },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Review: Around the Farm",
        url: "lab1.bluej/",
        due: "1/20/2022",
      },
      {
        name: "Lab 2",
        title: "Variables (Scope and Lifetime)",
        url: "lab2.vars/",
        due: "1/27/2022",
      },
      {
        name: "Lab 3",
        title: "Stomach Class (Class Writing)",
        url: "lab3.stomach/",
        due: "2/3/2022",
      },
      {
        name: "Lab 4",
        title: "Guessing Game (Conditionals)",
        url: "lab4.guessing/",
        due: "2/10/2022",
      },
      {
        name: "Lab 5",
        title: "Circle Drawer (Objects)",
        url: "lab5.circleDrawer/",
        due: "2/17/2022",
      },
      {
        name: "Lab 6",
        title: "Turtle Graphics (Loops)",
        url: "lab6.turtle/",
        due: "3/3/2022",
      },
      {
        name: "Lab 7",
        title: "Combo Guesser (Arrays)",
        url: "lab7.combo/",
        due: "3/24/2022",
      },
      {
        name: "Lab 8",
        title: "Super Circle Drawer (ArrayLists)",
        url: "lab8.superCircleDrawer/",
        due: "3/31/2022",
      },
      {
        name: "Lab 9",
        title: "Election (HashMaps)",
        url: "lab9.election/",
        due: "4/7/2022",
      },
      {
        name: "Lab 10",
        title: "Boulders (File I/O, Parsing)",
        url: "lab10.boulders/",
        due: "4/21/2022",
      },
      // {
      //   name: "Lab 11",
      //   title: "Playing Cards (Constants, Enum; IntelliJ IDE)",
      //   url: "lab11.cards/",
      //   due: "4/28/2022",
      // },
      // {
      //   name: "Lab 11",
      //   title: "Elementary Complexity Analysis",
      //   url: "lab11.perf/",
      //   due: "4/11/2022",
      // },
    ],
  },
  lectures: [
    // wk 1
    "Introductions: Who are we? Syllabus",
    "Lab 1: CS 1 Review",
    "Inheritance: motivation, abstraction",
    "Inheritance (cont.): this(), super()",
    // wk 2
    "<strong><emph>Labor Day<br/>(No Class)</emph></strong>",
    "Lab 2: Inheritance Lab",
    "Object class, instanceof, down-casting, overriding",
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
    "Lab 9: Fractals Lab",
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
    "<strong><emph>Review</emph></strong>",
    "TBD",
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
