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
    ],
    labs: [
    ],
  },
  lectures: [
    // wk 1
    "Capstone sorting exercise", // Give students a list of possible project ideas: some too small, some too large, some vague, some feasible. Have them classify each one as “too small,” “reasonable,” “too ambitious,” or “unclear.”
    "Interest x skill x problem matrix", //Students make a 3-column table: things I care about, things I can build, problems people have. Then they combine entries into possible capstone ideas.
    "",
    // wk 2
    "<strong>MLK Day<br/>(no class)</strong>",
    "Individual check-in", // Each student shares 2–3 possible project directions and one skill/domain they want to use.",
    "",
    // wk 3
    "Decision matrix", // Students compare 3 candidate projects using criteria: interest, feasibility, novelty, technical depth, data availability, evaluation, and risk.
    "Project selection conference", //  Each student/team explains what they chose and what they rejected.",
    "",
    // wk 4
    "Problem statement workshop", // Use a template: “We are building ___ for ___ because ___.” Then force them to identify the user, pain point, and success condition.,
    "Peer review of problem statements", //. Other students identify what is still vague,
    "",
    // wk 5
    "Prior-art scavenger hunt", // Students find examples of similar apps, papers, GitHub repos, datasets, tools, or APIs. They classify each as inspiration, competitor, dependency, or warning sign.
    "Check annotated sources",//. Each student/team explains the most useful source and one thing it changed about the project.
    "",
    // wk 6
    "Fall Break", //Pre-mortem", //It is the end of capstone and your project failed. Why?” Students list failure modes, then rank them by likelihood and severity.",
    "MVP cutdown", // Students define three versions: minimum viable version, expected version, stretch version. Then ask: “What would still count as a successful capstone if everything goes wrong?”",
    "", //"Risk triage", //For each team, identify the top 2 risks that must be tested before the semester ends.",
    // wk 7
    "MVP cutdown", // Students define three versions: minimum viable version, expected version, stretch version. Then ask: “What would still count as a successful capstone if everything goes wrong?”",
    "Instructor check-in", //Instructor check-in on scope. Push them to remove features, not add features.
    "",
    // wk 8
    "Box-and-arrow diagramming", // Students draw their system architecture: frontend, backend, database, external APIs, models, files, users, data flow.
    "Diagram critique", // Another team explains their diagram back to them. If they cannot, the diagram is unclear.
    "",
    // wk 9: 
    "Input/output audit", // For every major component, students define inputs, outputs, data formats, and failure cases.",
    "Check whether the components are real enough to implement", //. This is where vague “AI module” boxes get challenged.",
    "",
    // wk 10
    "Success metric workshop", // Students answer: How will you know it works? How will you test correctness, usability, performance, accuracy, or completeness?
    "Peer review of evaluation plans", // Other students ask: “Would this convince you the project succeeded?”",
    "",
    // wk 11
    "TBD",
    "Thanksgiving Break",
    "",
    // wk 12
    "Design doc sprint",  // Students use class time to assemble the pieces: problem, background, MVP, architecture, risks, evaluation, timeline.
    "Cont'd",
    "",
    // wk 13
    "Cont'd",
    "Design document peer review", //. Use a short rubric and require written comments.",
    "",
    // wk 14
    "Storyboarding the final presentation", //Students build a slide outline: problem, motivation, prior work, design, feasibility, timeline, risks.",
    "Practice presentations in small groups", // Peers must ask one feasibility question and one scope question.",
    "",
    // wk 15
    "Day-one simulation", // It is the first day of capstone next semester. What exactly do you do?” Students write their first-week action plan.
    "<strong>Reading Period</strong>",
    "",
    // wk final
    "",
    "",
    "",
  ],
};


// print out the schedule to HTML
const schedule = new CourseCalendar("8/31/2026", days, MF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();

