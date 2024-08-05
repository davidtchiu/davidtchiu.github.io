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
        due: "9/13/2024",
      },
      {
        name: "Hwk 2",
        title: "TicTacToe Player",
        url: "hwk2.ttt/",
        due: "9/23/2024",
      },
      {
        name: "Hwk 3",
        title: "You Complete Me",
        url: "hwk3.ycm/",
        due: "10/4/2024",
      }, 
      // {
      //   name: "Hwk 4",
      //   title: "Sentiment Analysis",
      //   url: "hwk4.sent/",
      //   due: "10/9/2024",
      // },
      {
        name: "Hwk 4",
        title: "Doubly Linked List",
        url: "hwk4.LL/",
        due: "10/21/2024",
      },
      {
        name: "Hwk 5",
        title: "Ranked Choice Voting (Paired)",
        url: "hwk5.rcv",
        due: "11/4/2024",
      },
      {
        name: "Hwk 6",
        title: "Recursion Exercises",
        url: "hwk6.rec",
        due: "11/18/2024",
      },
      {
        name: "Hwk 7",
        title: "Huffman Encoding",
        url: "hwk7.huff",
        due: "12/18/2024",
      },
      // {
      //   name: "Hwk 8",
      //   title: "Evil Hangman (Paired)",
      //   url: "hwk8.ehm",
      //   due: "12/13/2024",
      // },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Review: Around the Farm",
        url: "lab1.farm/",
        due: "9/6/2024",
      },
      // {
      //   name: "Lab 2",
      //   title: "Inheritance Lab",
      //   url: "lab2.dice/",
      //   due: "9/6/2024",
      // },
      // {
      //   name: "Lab 3",
      //   title: "Abstract Classes Lab",
      //   url: "lab3.lib/",
      //   due: "9/13/2024",
      // },
      // {
      //   name: "Lab 4",
      //   title: "Interface Lab ",
      //   url: "lab4.interface/",
      //   due: "9/20/2024",
      // },
      // {
      //   name: "Lab 5",
      //   title: "Exceptions Lab",
      //   url: "lab5.exc/",
      //   due: "9/27/2024",
      // },
      // {
      //   name: "Lab 6",
      //   title: "ArrayLists Lab",
      //   url: "lab6.AL/",
      //   due: "10/11/2024",
      // },
      // {
      //   name: "Lab 7",
      //   title: "Stacks and Queues Lab",
      //   url: "lab7.melody/",
      //   due: "10/25/2024",
      // },
      // {
      //   name: "Lab 8",
      //   title: "Recursion Lab",
      //   url: "lab8.rec/",
      //   due: "11/1/2024",
      // },
      // {
      //   name: "Lab 9",
      //   title: "Expression Trees (Binary Trees)",
      //   url: "lab9.expr/",
      //   due: "11/15/2024",
      //   },
      //   {
      //     name: "Lab 10",
      //     title: "Binary Search Trees Lab",
      //     url: "lab10.bst/",
      //     due: "11/22/2024",
      //   },
      //   {
      //     name: "Lab 11",
      //     title: "Maps Lab",
      //     url: "lab11.map/",
      //     due: "11/29/2024",
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
    "",
    "Who are we? Syllabus (Recording)",
    "Lab 1: CS1 Review",
    "Inheritance: motivation, abstraction",
    // wk 2
    "<strong><emph>Labor Day<br/>(No Class)</emph></strong>",
    "Inheritance: this(), super(), constructor chaining",
    "Lab 2: Inheritance Lab",
    "Polymorphism, object substitution, down-casting",
    // wk 3
    "Object class, @Override, dynamic dispatch",
    "Abstract classes",
    "Lab 3: Polymorphism Lab",
    "Lab review",
    // wk 4
    "Start Interfaces",
    "Multiple implementation, Comparable<T>",
    "Lab 4: Interfaces",
    "Lab review",
    // wk 5
    "Start Big-O",
    "More Big-O examples",
    "Lab 5: Big-O lab?",
    "<strong><emph>Review for Exam 1</emph></strong>",
    // wk 6
    "<strong><emph>Exam 1</emph></strong>",
    "List interface, ArrayList: add(), rellocation",
    "Lab 6: ArrayList and Generics lab",
    "Start Linked Lists",
    // wk 7
    "LL: indexOf(), add()",
    "LL optimizations (tail, iterator)",
    "Lab 7: Homework Lab?",
    "Stack<E>, infix algorithm",
    // wk 8
    "<strong>Fall Break</strong>",
    "Queue<E>, PriorityQueues<E>",
    "Lab 8: Stacks and Queues",
    "PriorityQueue: Dijkstra's shortest path",
    // wk 9:
    "Start recursion: setup and tracing",
    "Recursion: code reading, common pitfalls",
    "Lab 9: Recursion Lab",
    "Recursive Big-O (telescoping method)",
    // wk 10
    "Merge Sort",
    "Quick Sort",
    "Lab 10: Recursive Sorting Lab",
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
    "Lab review",
    // wk 13 
    "Start Hashing: Entry<K,V> class, hashcode()",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    // wk 14
    "HashMaps approach 1: Open addressing",
    "HashMaps approach 2: Chaining",
    "Lab 13: Hashing Lab",
    "Start Exceptions",
    // wk 15
    "Exception handling",
    "Exception hierarchy",
    "<strong>Reading Period</strong>",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "<strong><emph>Final Exam<br/>12:00-2:00</strong></emph>",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("9/2/2024", days, MWRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
