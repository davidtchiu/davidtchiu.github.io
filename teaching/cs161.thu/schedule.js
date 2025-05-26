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
  ],
  assignments: {
      /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Draw My Picture (BlueJ)",
        url: "lab1.bluej/",
        due: "",
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
    "What are algorithms?",
    "Hardware, Languages; Lab 1",
    "Java class structure",
    "Variables: data types, lifetime, and scope; Quiz",
    "<b>No class: Dragon Boat Festival</b>",
    // wk 2
    "Class from scratch: TicketMachines",
    "Conditionals: if-then-else",
    "Primitive types, casting",
    "Classes as types, string API",
    "Object interactions; Quiz",
    // wk 3
    "Start loops",
    "More loops",
    "Nested loops",
    "Start ArrayLists",
    "More ArrayLists; Quiz",
    // wk 4
    "Scanners",
    "More Scanners",
    "Files and exception handling",
    "Files",
    "Wrapup; Quiz",
  ],
};


// print out the schedule to HTML
const schedule = new CourseCalendar("5/26/2025", days, MTWRF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

