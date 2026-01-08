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
      name: "Notes and Sample Code (on Canvas)",
      url: "https://canvas.pugetsound.edu"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 0",
        title: "All About Me (BlueJ, Code Submission)",
        url: "hwk0.me/",
        due: "1/27/2025", // Mon, wk 2
      },
      {
        name: "Hwk 1",
        title: "A Better Circle (Method Calls, Method Writing)",
        url: "hwk1.circle/",
        due: "2/5/2025", // Wed, wk 3
      },
      {
        name: "Hwk 2",
        title: "Alarm Clock (Accumulators, Conditionals)",
        url: "hwk2.clock/",
        due: "2/14/2025", // Fri, wk 4
      },
      {
        name: "Hwk 3",
        title: "Fractions (Object Interaction)",
        url: "hwk3.fraction/",
        due: "2/26/2025", // Mon, wk 6
      },
      {
        name: "Hwk 4",
        title: "Robots (Code Abstraction and Modularity)",
        url: "hwk4.robot/",
        due: "3/7/2025", //Fri, wk 7 (has a simple loop)
      },
      {
        name: "Hwk 5",
        title: "Loops, Loops, Loops!",
        url: "hwk5.loops/",
        due: "3/25/2025", // Tues, wk 10 (right after spring break)
      },
      {
        name: "Hwk 6",
        title: "Combo Guesser (Arrays)",
        url: "hwk6.combo/",
        due: "4/4/2025", // Fri, wk 11 (week after break)
      },
      // {
      //   name: "Hwk 6",
      //   title: "Credit Card Reader (1D Array)",
      //   url: "hwk6.cc/",
      //   due: "4/4/2025", // Mon, wk 11 (right after spring break)
      // },
      {
        name: "Hwk 7",
        title: "Fotoshop (2D Array)",
        url: "hwk7.img/",
        due: "4/16/2025", // Mon, wk 13
      },
      {
        name: "Hwk 8",
        title: "Black Jack",
        url: "hwkF.blackjack.enums/",
        due: "5/9/2025", // Fri (exam period)
      },
      {
        name: "Final Proposal",
        title: "Final Homework Proposal (Optional)",
        url: "hwkF.prep/",
        due: "4/14/2025",  // Fri, wk 12
      },
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
      {
        name: "Lab 2",
        title: "Triangle Class (Variables, Scope, and Lifetime)",
        url: "lab2.vars/",
        due: "1/31/2025",
      },
      {
        name: "Lab 3",
        title: "Stomach Class (Class Writing, Random object)",
        url: "lab3.stomach/",
        due: "2/7/2025",
      },
      {
        name: "Lab 4",
        title: "Guessing Game (Conditionals)",
        url: "lab4.guessing/",
        due: "2/14/2025",
      },
      {
        name: "Lab 5",
        title: "Circle Drawer (Object Aliasing & Interaction)",
        url: "lab5.circleDrawer/",
        due: "2/21/2025",
      },
      {
        name: "Lab 6",
        title: "Diamonds (Abstraction and Modularity)",
        url: "lab6.diamonds/",
        due: "2/28/2025",
      },
      {
        name: "Lab 7",
        title: "Turtle (Loops)",
        url: "lab7.turtle/",
        due: "3/7/2025",
      },
      {
        name: "Lab 8",
        title: "Homework Lab (Loops)",
        url: "hwk5.loops/",
        due: "3/14/2025",
      },
      {
        name: "Lab 9",
        title: "Array Sorcery!",
        url: "lab9.arrays/",
        due: "3/28/2025",
      },
      {
        name: "Lab 10",
        title: "The Game of Life (2D Arrays)",
        url: "lab10.life/",
        due: "4/4/2025",
      },
      {
        name: "Lab 11",
        title: "Super Circle Drawer (ArrayLists)",
        url: "lab11.superCircleDrawer/",
        due: "4/14/2025",
      },
      {
        name: "Lab 12",
        title: "Interactive Diary",
        url: "lab12.uiDiary/",
        due: "4/18/2025",
      },
      // {
      //   name: "Lab 12",
      //   title: "Tweet Processor (Scanner, String parsing)",
      //   url: "lab12.twitter/",
      //   due: "4/18/2025",
      // },
      {
        name: "Lab 13",
        title: "Playing Cards (Constants, Enum)",
        url: "lab13.cards/",
        due: "4/25/2025",
      }
      // {
      //   name: "Lab 10",
      //   title: "Boulders (Files)",
      //   url: "lab10.boulders/",
      //   due: "4/12/2024",
      // },
    ],
  },
  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Introductions: Who are we? Syllabus, What is CS?",
    "Algorithms, hardware, languages; Plus Lab 1: Using BlueJ",
    // wk 2
    "Reading code: classes,  instance variables, types, assigning, constructors",
    "Reading code: methods; Plus Lab 2: Triangle",
    "Variable types: instance, local, input; lifetime and scope",
    // wk 3
    "Methods and returning; Finish Circle, start TicketMachine",
    "Classes as Types, Random object; Lab 3: Stomach",
    "Conditionals, defensive programming",
    // wk 4
    "Nested if-statements; else-if statements",
    "More conditionals; Lab 4: Secret Number",
    "Data Types, binary rep, casting",
    // wk 5
    "Classes as types: references, null",
    "Object interaction; Lab 5: Circle Drawer",
    "Lab 5 review; Object comparison",
    // wk 6
    "Abstraction and modularity; exam review",
    "<strong><emph>Exam 1</emph></strong>",
    "Lab 6: Diamonds code-along; using APIs (strings)",
    // wk 7
    "Start loops; reading; tracing",
    "More loops; Lab 7: Loops",
    " and lab review",
    // wk 8
    "Nested loops",
    "Lab 8: Nested Loops",
    "More nested loops and lab review",
    // wk 9: spring break
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Start 1D arrays; Write the Bank class",
    "Finish Bank class; Lab 9: ComboGuesser",
    "Arrays of objects: TurtleMob",
    // wk 11
    "Start 2D Arrays",
    "More on 2D arrays; Lab 10: Game of Life",
    "2D Arrays: TicTacToe, lab review",
    // wk 12
    "Exam 2 review, start ArrayLists",
    "<strong><emph>Exam 2</emph></strong>",
    "Lab 11: SuperCircleDrawer Code-along",
    // wk 13
    "Scanner: user interaction, String parsing: enforcing a word limit",
    "Lab 12: Interactive Diary (UI + String Parsing)",
    "File handling",
    // wk 14
    "Static scope, enums",
    "Lab 13: Cards (Enum type)",
    "The main method",
    // wk 15
    "Project Work Day",
    "<strong>Reading Period</strong>",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "",
    "<strong><emph>Final Exam<br/>12:00-2:00</emph></strong>",
  ],
};

    // "HashMaps",
    // "Start complexity: Linear search",


// print out the schedule to HTML
const schedule = new CourseCalendar("1/19/2026", days, MRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

