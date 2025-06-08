let days = {
  resources: [
    {
      name: "Download BlueJ",
      url: "https://bluej.org"
    },
    {
      name: "iLearn: Submit Labs",
      url: "https://ilearn.thu.edu.tw/course/146003/content#/"
    },
    {
      name: "Notes 1: What Are Algorithms?",
      url: "notes/CS161_1-intro.pdf"
    },
    {
      name: "Notes 2: Classes and Objects",
      url: "notes/CS161_2-classes-objects.pdf"
    },
    {
      name: "Notes 3: Arithmetic Operators and Conditionals",
      url: "notes/CS161_3-writing-classes.pdf"
    },
    {
      name: "Notes 4: Data Types, Type Casting, Objects as Types",
      url: "notes/CS161_4-types.pdf"
    },
    {
      name: "Notes 5: APIs, String API",
      url: "notes/CS161_5-abstraction.pdf"
    },
  ],
  assignments: {
    // homework: [
      // {
      //   name: "Hwk 0",
      //   title: "All About Me (BlueJ, Code Submission)",
      //   url: "hwk0.me/",
      //   due: "1/27/2025", // Mon, wk 2
      // },
      // {
      //   name: "Hwk 1",
      //   title: "A Better Circle (Method Calls, Method Writing)",
      //   url: "hwk1.circle/",
      //   due: "6/2/2025", // Wed, wk 3
      // },
      // {
      //   name: "Hwk 2",
      //   title: "Alarm Clock (Accumulators, Conditionals)",
      //   url: "hwk2.clock/",
      //   due: "2/14/2025", // Fri, wk 4
      // },
      // {
      //   name: "Hwk 3",
      //   title: "Fractions (Object Interaction)",
      //   url: "hwk3.fraction/",
      //   due: "2/26/2025", // Mon, wk 6
      // },
      // {
      //   name: "Hwk 4",
      //   title: "Robots (Code Abstraction and Modularity)",
      //   url: "hwk4.robot/",
      //   due: "3/7/2025", //Fri, wk 7 (has a simple loop)
      // },
      // {
      //   name: "Hwk 5",
      //   title: "Loops, Loops, Loops!",
      //   url: "hwk5.loops/",
      //   due: "3/25/2025", // Tues, wk 10 (right after spring break)
      // },
      // {
      //   name: "Hwk 6",
      //   title: "Credit Card Reader (1D Array)",
      //   url: "hwk6.cc/",
      //   due: "4/4/2025", // Mon, wk 11 (right after spring break)
      // },
      // {
      //   name: "Hwk 7",
      //   title: "Images (2D Array)",
      //   url: "hwk7.img/",
      //   due: "4/14/2025", // Mon, wk 13 (right after spring break)
      // },
      // {
      //   name: "Hwk 8",
      //   title: "Black Jack",
      //   url: "hwkF.blackjack.enums/",
      //   due: "5/9/2025", // Fri (exam period)
      // },
      // {
      //   name: "Final Hwk Prop",
      //   title: "Final Homework Proposal (Optional)",
      //   url: "hwkF.prep/",
      //   due: "4/11/2025",  // Fri, wk 12
      // },
      // // // {
      // // //   name: "Final Hwk (alternate)",
      // // //   title: "Pooled Testing",
      // // //   url: "hwkF.pooled/",
      // // //   due: "5/4/2021",
      // // // },
    // ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Draw My Picture (BlueJ)",
        url: "lab1.bluej/",
        due: "",
      },
      {
        name: "Lab 2",
        title: "A Better Circle (Method Calls, Method Writing)",
        url: "lab2.circle/",
        due: "",
      },
      // {
      //   name: "Lab 2",
      //   title: "Triangle Class (Variables, Scope, and Lifetime)",
      //   url: "lab2.vars/",
      //   due: "1/31/2025",
      // },
      {
        name: "Lab 3",
        title: "Stomach Class (Class Writing, Random object)",
        url: "lab3.stomach/",
        due: "",
      },
      {
        name: "Lab 4",
        title: "Orca Card (Conditionals)",
        url: "lab4.orca/",
        due: "", // Fri, wk 4
      },
      // {
      //   name: "Lab 4",
      //   title: "Guessing Game (Conditionals)",
      //   url: "lab4.guessing/",
      //   due: "2/14/2025",
      // },
      // {
      //   name: "Lab 5",
      //   title: "Circle Drawer (Object Aliasing & Interaction)",
      //   url: "lab5.circleDrawer/",
      //   due: "2/21/2025",
      // },
      // {
      //   name: "Lab 6",
      //   title: "Diamonds (Abstraction and Modularity)",
      //   url: "lab6.diamonds/",
      //   due: "2/28/2025",
      // },
      // {
      //   name: "Lab 7",
      //   title: "Turtle (Loops)",
      //   url: "lab7.turtle/",
      //   due: "3/7/2025",
      // },
    ],
  },
  lectures: [
    // wk 1
    "What are algorithms?",
    "Hardware, Languages; Lab 1",
    "Instance variables, constructors, methods",
    "Method calls; <span style=\"font-weight: bold;\">Lab 2</span>; <span style=\"font-weight: bold;\">Quiz</span>",
    " <span style=\"font-weight: bold;\">No class</span>",
    // wk 2
    "Compound operations; random numbers; returning; printing",
    "Conditionals: else-if; <span style=\"font-weight: bold;\">Lab 3</span>",
    "Lab review; logical operators",
    "Primitive types, binary conversion; <span style=\"font-weight: bold;\">Lab 4</span>",
    "Finish lab;  <span style=\"font-weight: bold;\">Quiz</span>",
    // wk 3
    "Object interactions",
    "Start loops",
    "More loops",
    "Nested loops",
    "Start ArrayLists <span style=\"font-weight: bold;\">Quiz</span>",
    // wk 4
    "More ArrayLists",
    "Scanners",
    "More Scanners",
    "More Scanners",
    "Wrapup; <span style=\"font-weight: bold;\">Quiz</span>",
  ],
};


// print out the schedule to HTML
const schedule = new CourseCalendar("5/26/2025", days, MTWRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

