let days = {
  assignments: {
    homework: [
      {
        name: "Hwk 0",
        title: "About Me",
        url: "hwk0.me/",
        due: "1/24/2022",
      },
      {
        name: "Hwk 1",
        title: "A Better Circle",
        url: "hwk1.circle/",
        due: "2/2/2022",
      },
      {
        name: "Hwk 2",
        title: "Calculator",
        url: "hwk2.calc/",
        due: "2/11/2022",
      },
      {
        name: "Hwk 3",
        title: "Orca Card",
        url: "hwk3.orca/",
        due: "2/21/2022",
      },
      {
        name: "Hwk 4",
        title: "Robots!",
        url: "hwk4.robot/",
        due: "3/2/2022",
      },
      {
        name: "Hwk 5",
        title: "Loop Practice (The Basics)",
        url: "hwk5.loops/",
        due: "3/11/2022",
      },
      {
        name: "Hwk 5b",
        title: "Nested Loop Practice",
        url: "hwk5b.nestedLoops/",
        due: "3/25/2022",
      },
      {
        name: "Hwk 6",
        title: "Tweet Processor",
        url: "hwk6.twitter/",
        due: "4/8/2022",
      },
      {
        name: "Hwk 7",
        title: "Pooled Testing",
        url: "hwk7.pooled/",
        due: "4/20/2022",
      },
      {
        name: "Final Hwk Prep",
        title: "Final Homework Proposal (Optional)",
        url: "hwkF.prep/",
        due: "4/22/2022",
      },
      // {
      //   name: "Final Hwk (alternate)",
      //   title: "Pooled Testing",
      //   url: "hwkF.pooled/",
      //   due: "5/4/2021",
      // },
      {
        name: "Final Hwk",
        title: "Black Jack",
        url: "hwkF.blackjack/",
        due: "5/9/2022",
      },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Draw My Picture (BlueJ)",
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
    "<strong><emph>Labor Day (No Class)</emph></strong>",
    "Lab 2: Inheritance Lab",
    "Lab review; the Object class, instanceof, down-casting, method overriding",
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
    "Catching exceptions: checked vs. unchecked, customization",
    // wk 5
    "Start Big-O",
    "Lab 5: Exception Lab",
    "Big-O",
    "Big-O (insertion sort)",
    // wk 6
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    "List interface, ArrayList: add(), rellocation",
    "ArrayList: remove(), indexOf(); Generics",
    // wk 7
    "Linked list: Inner classes; get(), set()",
    "Lab 6: ArrayList and Generics lab",
    "Linked list:  indexOf(), add()",
    "Linked list optimizations (tail, iterator)",
    // wk 8
    "<strong>Fall Break</strong>",
    "<strong>Fall Break</strong>",
    "Stack",
    "Stack (cont.): Dijkstra's 2-Stack Algo; Start Queues",
    // wk 9: 
    "Start PriorityQueue; Dijkstra's SSSP",
    "Lab 7: Queues and Stacks",
    "Start Recursion: setup and tracing",
    "Recursion (cont.): code reading, common pitfalls",
    // wk 10
    "Big-O analysis (telescoping method)",
    "Lab 8: Recursion Lab",
    "Finish recursion",
    "Sorting: Merge Sort",
    // wk 11
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    "Sorting: Quick Sort",
    // wk 12
    "Start trees and binary trees",
    "Lab 9: Sorting Lab",
    "Tree traversal, start BST",
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
    "<strong><emph>Final Exam (12p - 2p)</strong></emph>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/29/2022", days, MTWF);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
