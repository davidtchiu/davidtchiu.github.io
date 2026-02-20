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
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 0 (About Me)",
        title: "All About Me (BlueJ, Code Submission)",
        url: "hwk0.me/",
        weekAssigned: 1, 
        due: "1/26/2026", // Mon, wk 2
      },
      {
        name: "Hwk 1 (Better Circle)",
        title: "A Better Circle (Method Calls, Method Writing)",
        url: "hwk1.circle/",
        weekAssigned: 2,
        due: "2/4/2026", // Wed, wk 3
      },
      {
        name: "Hwk 2 (Clock)",
        title: "Alarm Clock (Accumulators, Conditionals)",
        url: "hwk2.clock/",
        weekAssigned: 3,
        due: "2/13/2026", // Fri, wk 4
      },
      {
        name: "Hwk 3 (Fractions)",
        title: "Fractions (Object Interaction)",
        url: "hwk3.fraction/",
        weekAssigned: 5,
        due: "2/25/2026", // Mon, wk 6
      },
      // {
      //   name: "Hwk 4 (Robots)",
      //   title: "Robots (Abstraction and Modularity)",
      //   url: "hwk4.robot/",
      //   weekAssigned: 6,
      //   due: "3/6/2026", //Fri, wk 7 (has a simple loop)
      // },
      // {
      //   name: "Hwk 5 (Loops)",
      //   title: "Loops, Loops, Loops!",
      //   url: "hwk5.loops/",
      //   weekAssigned: 8,
      //   due: "3/24/2026", // Tues, wk 10 (right after spring break)
      // },
      // {
      //   name: "Hwk 6 (ComboGuesser)",
      //   title: "Combo Guesser (Arrays)",
      //   url: "hwk6.combo/",
      //   weekAssigned: 10,
      //   due: "4/3/2026", // Fri, wk 11 (week after break)
      // },
      // // {
      // //   name: "Hwk 6",
      // //   title: "Credit Card Reader (1D Array)",
      // //   url: "hwk6.cc/",
      // //   due: "4/4/2026", // Mon, wk 11 (right after spring break)
      // // },
      // {
      //   name: "Hwk 7 (Fotoshop)",
      //   title: "Fotoshop (2D Array)",
      //   url: "hwk7.img/",
      //   weekAssigned: 11,
      //   due: "4/15/2026", // Mon, wk 13
      // },
      // {
      //   name: "Hwk 8 Proposal",
      //   title: "Homework Proposal (Optional)",
      //   url: "hwkF.prep/",
      //   weekAssigned: 12,
      //   due: "4/12/2026",  // Fri, wk 12
      // },
      // {
      //   name: "Hwk 8",
      //   title: "Black Jack (Default)",
      //   url: "hwkF.blackjack.enums/",
      //   weekAssigned: 13,
      //   due: "5/8/2026", // Fri (exam period)
      // },
      // // // {
      // // //   name: "Final Hwk (alternate)",
      // // //   title: "Pooled Testing",
      // // //   url: "hwkF.pooled/",
      // // //   due: "5/4/2021",
      // // // },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    lab: [
      {
        name: "Lab 1",
        title: "BlueJ",
        url: "hwk0.me/",
        weekAssigned: 1,
        due: "1/23/2026",
      },
      {
        name: "Lab 2",
        title: "Triangle Class (Variables, Scope, and Lifetime)",
        url: "lab2.vars/",
        weekAssigned: 2,
        due: "1/30/2026",
      },
      {
        name: "Lab 3",
        title: "Stomach Class (Class Writing, Random object)",
        url: "lab3.stomach/",
        weekAssigned: 3,
        due: "2/6/2026",
      },
      {
        name: "Lab 4",
        title: "Guessing Game (Conditionals)",
        url: "lab4.guessing/",
        weekAssigned: 4,
        due: "2/13/2026",
      },
      {
        name: "Lab 5",
        title: "Circle Drawer (Object Aliasing & Interaction)",
        url: "lab5.circleDrawer/",
        weekAssigned: 5,
        due: "2/20/2026",
      },
      // {
      //   name: "Lab 6",
      //   title: "Diamonds (Abstraction and Modularity)",
      //   url: "lab6.diamonds/",
      //   weekAssigned: 7,
      //   due: "2/27/2026",
      // },
      // {
      //   name: "Lab 7",
      //   title: "Turtle (Loops)",
      //   url: "lab7.turtle/",
      //   weekAssigned: 7,
      //   due: "3/6/2026",
      // },
      // {
      //   name: "Lab 8",
      //   title: "Homework Lab (Loops)",
      //   url: "hwk5.loops/",
      //   weekAssigned: 8,
      //   due: "3/13/2026",
      // },
      // {
      //   name: "Lab 9",
      //   title: "Array Sorcery!",
      //   url: "lab9.arrays/",
      //   weekAssigned: 10,
      //   due: "3/27/2026",
      // },
      // {
      //   name: "Lab 10",
      //   title: "The Game of Life (2D Arrays)",
      //   url: "lab10.life/",
      //   weekAssigned: 11,
      //   due: "4/3/2026",
      // },
      // {
      //   name: "Lab 11",
      //   title: "Super Circle Drawer (ArrayLists)",
      //   url: "lab11.superCircleDrawer/",
      //   weekAssigned: 12,
      //   due: "4/10/2026",
      // },
      // {
      //   name: "Lab 12",
      //   title: "Interactive Diary",
      //   url: "lab12.uiDiary/",
      //   weekAssigned: 13,
      //   due: "4/17/2026",
      // },
      // // {
      // //   name: "Lab 12",
      // //   title: "Tweet Processor (Scanner, String parsing)",
      // //   url: "lab12.twitter/",
      // //   due: "4/18/2026",
      // // },
      // {
      //   name: "Lab 13",
      //   title: "Playing Cards (Constants, Enum)",
      //   url: "lab13.cards/",
      //   weekAssigned: 14,
      //   due: "4/24/2026",
      // }
      // // {
      // //   name: "Lab 10",
      // //   title: "Boulders (Files)",
      // //   url: "lab10.boulders/",
      // //   due: "4/12/2024",
      // // },
    ],
  },
  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Introductions: Who are we? What is CS?",
    "Algorithms, hardware, languages; Using BlueJ",
    "Notes: <a href='https://drive.google.com/file/d/11UGFf39BPSc0oXnjzOFzUJsEKXZMYnuR/view'>1. What is CS?</a>" + "<br/>" + 
      "Install: <a href='https://bluej.org/'>BlueJ Code Editor</a>" + "<br/>" +
      "Watch: <a href='https://www.youtube.com/watch?v=QgUVrzkQgds'>Calculating Ada</a>",
    // wk 2
    "Classes: Instance vars and data types, constructors",
    "Lab 2: Triangle",
    "Lab review; Methods",
    "Notes: <a href='https://drive.google.com/open?id=1w3r2vSx8faSxUR6Bw19cKO-_91Y4CWV9&usp=drive_fs'>2. Classes and Objects</a>" + "<br/>" + 
      "Code: <a href='https://drive.google.com/open?id=1BIumqGvCSt2G9H9EFNAAHTZyQnfK7SG6&usp=drive_fs'>Circle</a> (starter)" + "<br/>" +
      "Code: <a href='https://drive.google.com/open?id=1cE66k8-KAWyCn6f9bMwUjAnLLY9lelBt&usp=drive_fs'>Circle</a> (finished)",
    // wk 3
    "Conditionals",
    "Lab 3: Stomach",
    "Nested if, Else-if",
    // "",
    "Notes: <a href='https://drive.google.com/open?id=1CnNn_fCN4miWwRe5eJWBZxGOZKPydKpi&usp=drive_fs'>3. Operators and conditionals</a>" + "<br/>" + 
      "Code: <a href='https://drive.google.com/open?id=15OXNk4SQZ-xQbZh49SiyYgsO_33G0P9E&usp=drive_fs'>TicketMachine</a> (finished)",
    // wk 4
    "Logical operators",
    "Lab 4: Guessing Game",
    "More fun with conditionals",
    "",
    // wk 5
    "Data Types: binary representation",
    "Classes as types: object interaction; Lab 5: Circle Drawer",
    "Object equality; <strong><emph>Exam 1 review</emph></strong>",
    "Notes: <a href='https://drive.google.com/open?id=1KyW8LDBd7s92Lr_l-hiH6sPc-I8qt0Sk&usp=drive_fs'>4. Primitives vs Classes</a>" + "<br/>" +
      "Exam #1 <a href='https://drive.google.com/open?id=1StHl1jwP5jlWPL_XEudnZ6QNMfR_ekNE&usp=drive_fs'>Study Guide</a>",
    // wk 6
    "<strong><emph>Exam 1</emph></strong>",
    "Abstraction; Lab 6: Diamonds code-along",
    "Using APIs (String interface)",
    "",
      // "Code: <a href='https://drive.google.com/open?id=1ycKeh6Uw3uJJalfidTy_KjSDer1q6NVZ&usp=drive_fs'>Square</a> (Starter)",
    // "Notes: <a href='https://drive.google.com/open?id=1KyW8LDBd7s92Lr_l-hiH6sPc-I8qt0Sk&usp=drive_fs'>5. Abstraction</a>",
    // wk 7
    "Start loops; reading; tracing",
    "More loops; Lab 7: Loops",
    "Lab review and nested loops",
    "",
    // wk 8
    "Nested loops",
    "Lab 8: Nested Loops",
    "More nested loops and lab review",
    "",
    // wk 9: spring break
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "",
    // wk 10: Baha starts joining David
    "Start 1D arrays; Write the Bank class",
    "Finish Bank class; Lab 9: ComboGuesser",
    "TurtleMob; <strong><emph>Exam 2 review</emph></strong>",
    "",
    // "Exam #2 <a href=''>Study Guide</a> | <a href=''>Soln</a>",
     // wk 11
    "<strong><emph>Exam 2</emph></strong>",
    "Start 2D arrays; Lab 10: TicTacToe",    
    "TicTacToe review, more practice",
    "",
    // wk 12
    "Start ArrayLists (Baha')",
    "Lab 11: SuperCircleDrawer (David)",
    "Lab review, more practice (Baha')",
    "",
    // wk 13
    "Scanner: user interaction, String parsing: enforcing a word limit (Baha')",
    "Lab 12: Interactive Diary (UI + String Parsing)",
    "File handling (Baha')",
    "",
    // wk 14
    "Static scope, enums",
    "Lab 13: Cards (Enum type)",
    "The main method",
    "",
    // wk 15
    "Project Work Day",
    "<strong>Reading Period</strong>",
    "<strong>Reading Period</strong>",
    "",
    // wk final
    "",
    "",
    "<strong><emph>Final Exam<br/>12:00-2:00</emph></strong>",
    "",
  ],
};
// Lab 3: Stomach",
    // "HashMaps",
    // "Start complexity: Linear search",


// print out the schedule to HTML
const schedule = new CourseCalendar("1/19/2026", days, MRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

