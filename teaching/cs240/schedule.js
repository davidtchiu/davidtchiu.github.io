let days = {
  assignments: {
    homework: [
      // {
      //   name: "Hwk 1",
      //   title: "Github Homepage",
      //   url: "hwk1.ghpages/",
      //   due: "9/20/2021",
      // },
      // {
      //   name: "Hwk 2",
      //   title: "Wordplay",
      //   url: "hwk2.wordplay/",
      //   due: "10/6/2021",
      // },
      // {
      //   name: "Hwk 3",
      //   title: "Scoreboard",
      //   url: "hwk3.scoreboard/",
      //   due: "10/18/2021",
      // },
      // {
      //   name: "Hwk 4",
      //   title: "Schelling's Model",
      //   url: "hwk4.schelling/",
      //   due: "11/03/2021",
      // },
      // {
      //   name: "Hwk 5",
      //   title: "Simone the Memory Game",
      //   url: "hwk5.simone/",
      //   due: "11/15/2021",
      // },
    ],

    ////////////////////////////// PROJECTS ///////////////////////////////
    projects: [
      // {
      //   name: "Phase 1",
      //   title: "Planning and Design",
      //   url: "proj1.planning/",
      //   due: "11/8/2021",
      // },
      // {
      //   name: "Phase 2.1",
      //   title: "1st Sprint",
      //   url: "proj2.sprints/",
      //   due: "11/15/2021",
      // },
      // {
      //   name: "Phase 2.2",
      //   title: "2nd Sprint",
      //   url: "proj2.sprints/",
      //   due: "11/22/2021",
      // },
      // {
      //   name: "Phase 2.3",
      //   title: "3rd Sprint",
      //   url: "proj2.sprints/",
      //   due: "11/29/2021",
      // },
      // {
      //   name: "Phase 2.4",
      //   title: "4th Sprint",
      //   url: "proj2.sprints/",
      //   due: "12/6/2021",
      // },
      // {
      //   name: "Presentation",
      //   title: "Wrapup and Presentation",
      //   url: "proj3.final/",
      //   due: "12/14/2021",
      // },
    ],

    ////////////////////////////////// LABS ////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Command Line Bootcamp",
        url: "lab.cmd/",
      },
    //   {
    //     name: "Lab 2",
    //     title: "Git Basics",
    //     url: "lab.git1/",
    //   },
    //   {
    //     name: "Lab 3",
    //     title: "Git Branching",
    //     url: "lab.git2/",
    //   },
    //   {
    //     name: "Lab 4",
    //     title: "Personas and Scenarios",
    //     url: "lab.personas/",
    //   },
    //   {
    //     name: "Lab 5",
    //     title: "User Stories and Sprint Planning",
    //     url: "lab.stories/",
    //   },
    //   {
    //     name: "Lab 6",
    //     title: "Express Lab",
    //     url: "lab.express/",
    //   },
    //   {
    //     name: "Lab 7",
    //     title: "Unit Testing",
    //     url: "lab.testing/",
    //   },
    // ],
  },

  lectures: [
    // wk 1
    "Introduction",
    "VS Code; Start command line",
    // wk 2
    "Command-line Lab; Start Git",
    "More Git; Lab on Git",
    // wk 3
    "Git: branching, merging",
    "Finish Git; Lab on Git branching",
    // wk 4
    "Intro to the web; JS Fundamentals",
    "JS Fundamentals",
    // wk 5
    "DOM navigation and manipulation",
    "Event handling",
    // wk 6
    "Event handling",
    "Asynchronous execution",
    // wk 7
    "Promises",
    "Ajax, JSON, Axios",
    // wk 8
    "<strong>Fall Break<strong>",
    "Software Process Models; Agile/Scrum",
    // wk 9
    "Persona and scenarios lab",
    "User stories and planning lab",
    // wk 10
    "Start Node.js",
    "Node.js and Express",
    // wk 11
    "EJS Templating",
    "EJS and express lab",
    // wk 12
    "Work/Sprint Review with David",
    "Software Testing; Testing lab",
    // wk 13
    "Work/Sprint Review with David",
    "<strong>Thanksgiving</strong>",
    // wk 14
    "Work/Sprint Review with David",
    "Industry Panel",
    // wk 15
    "Work/Sprint Review with David",
    "<strong>Reading Period</span>",
    // wk final
    "<strong>Presentations<br/>(12p - 2p)<strong>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, TR);
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
