let days = {
  resources: [
    {
      name: "Download BlueJ",
      url: "https://bluej.org"
    },
    {
      name: "Notes and Sample Code (on iLearn)",
      url: "https://ilearn.thu.edu.tw/course/146003/"
    },
  ],
  assignments: {
    homework: [
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
      //   due: "2/5/2025", // Wed, wk 3
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
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Draw My Picture (BlueJ)",
        url: "lab1.bluej/",
        due: "1/24/2025",
      },
      // {
      //   name: "Lab 2",
      //   title: "Triangle Class (Variables, Scope, and Lifetime)",
      //   url: "lab2.vars/",
      //   due: "1/31/2025",
      // },
      // {
      //   name: "Lab 3",
      //   title: "Stomach Class (Class Writing, Random object)",
      //   url: "lab3.stomach/",
      //   due: "2/7/2025",
      // },
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
    "Introductions: Who are we? What are algorithms?",
    "Basic class structure",
    "Writing methods",
    "Variables: data types, lifetime, and scope",
    "<b>No class: Dragon Boat Festival</b>",
    // wk 2
    "Class from scratch: TicketMachines",
    "Conditionals: if-then-else",
    "Primitive types, casting",
    "Classes as types, string API",
    "Object interactions",    
    // wk 3
    "Start loops",
    "More loops",
    "Nested loops",
    "Start ArrayLists",
    "More ArrayLists",
    // wk 4
    "Scanners",
    "More Scanners",
    "Files and exception handling",
    "Files",
    "Wrapup",
  ],
};


// print out the schedule to HTML
const schedule = new CourseCalendar("5/26/2025", days, MTWRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

