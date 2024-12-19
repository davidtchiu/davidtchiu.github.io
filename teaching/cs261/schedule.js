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
        due: "10/7/2024",
      }, 
      {
        name: "Hwk 4",
        title: "Doubly Linked List",
        url: "hwk4.LL/",
        due: "10/25/2024",
      },
      {
        name: "Hwk 5",
        title: "Ranked Choice Voting (Paired)",
        url: "hwk5.rcv",
        due: "11/13/2024",
      },
      {
        name: "Hwk 6",
        title: "Recursion Exercises",
        url: "hwk6.rec",
        due: "11/22/2024",
      },
      {
        name: "Hwk 7",
        title: "Huffman Encoding",
        url: "hwk7.huff",
        due: "12/18/2024",
      },
      {
        name: "Bonus Hwk",
        title: "Additional ArrayList Methods",
        url: "bonus.AL/",
        due: "12/18/2024",
      },


    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Review: Around the Farm",
        url: "lab1.farm/",
        due: "9/6/2024",
      },
      {
        name: "Lab 2",
        title: "Inheritance Lab",
        url: "lab2.dice/",
        due: "9/13/2024",
      },
      {
        name: "Lab 3",
        title: "Abstract Classes Lab",
        url: "lab3.lib/",
        due: "9/20/2024",
      },
      {
        name: "Lab 4",
        title: "Interface Lab ",
        url: "lab4.interface/",
        due: "9/27/2024",
      },
      {
        name: "Lab 5",
        title: "Big-O Lab",
        url: "lab5.bigO/",
        due: "10/4/2024",
      },
      {
        name: "Lab 6",
        title: "ArrayLists Code-along Lab",
        url: "lab6.AL/",
        due: "10/11/2024",
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
        due: "10/25/2024",
      },
      {
        name: "Lab 9",
        title: "PriorityQueue Homework/Code-along Lab",
        url: "hwk5.rcv/",
        //due: "11/1/2024",
      },
      {
        name: "Lab 10",
        title: "Recursion Lab",
        url: "lab10.rec/",
        due: "11/8/2024",
      },
      {
        name: "Lab 11",
        title: "Expression Trees (Binary Trees)",
        url: "lab11.expr/",
        due: "11/15/2024",
        },
        {
          name: "Lab 12",
          title: "Binary Search Trees Lab",
          url: "lab12.bst/",
          due: "11/22/2024",
        },
        {
          name: "Lab 13",
          title: "Maps Lab",
          url: "lab13.map/",
          due: "12/6/2024",
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
    "Who are we? Syllabus (Recording)",
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
    "List interface, ArrayList: add(), reallocate()",
    // wk 6
    "ArrayList: continued",
    "Start Linked Lists: The Node inner class",
    "<strong><emph>Review for Exam 1</emph></strong> + Lab 6: ArrayList Code-Along",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "LL: indexOf(), getNodeAt(), get(), set()",
    "LL: addFirst(), addAfter(), add()",
    "Lab 7: LL Homework Code-Along Lab",
    "LL: optimizations (tail, iterator, double links)",
    // wk 8
    "<strong>Fall Break</strong>",
    "Stacks and Queues",
    "Lab 8: Stack and Queue Exercises",
    "2-stack infix algorithm",
    // wk 9:
    "Start Hashing: Entry<K,V> class, hashcode()",
    "HashMaps: bucket chaining",
    "Lab 9: Hashing Lab",
    "Lab review; EH homework introduction",
    // wk 10
    "Start recursion",
    "Recursion: code reading, common pitfalls",
    "<strong><emph>Review for Exam 2</emph></strong> + Lab 10",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 11
    "Recursion: code tracing",
    "Recursive code writing and pitfalls",
    "Lab 11: Recursion Exercises",
    "Recursive Big-O (telescoping method)",
    // wk 12
    "Efficient Sorting: Merge Sort",
    "Merge Sort (cont.)",
    "Lab 12: Sorting Lab",
    "Efficient Sorting: Quick Sort",
    // wk 13
    "Quick Sort (cont.)",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    // wk 14 
    "Start Binary Search Trees (BST)",
    "BSTs: contains(), add(), remove()",
    "Lab 13: BST Lab",
    "BSTs: performance analysis",
    // wk 15
    "Exception Handling",
    "Exceptions: throwing, catching",
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
