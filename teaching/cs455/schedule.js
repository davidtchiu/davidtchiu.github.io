let days = {
  lectures: [
    "lec1",
    "lec2",
    "lec3",
    "lec4",
    "lec5",
    "lec6",
    "lec7",
    "lec8",
    "lec9",
  ],
  labs: ["lab1", "lab2", "lab3", "lab4", "lab5"],
};

let x = new CourseCalendar("8/30/2021", days, TR);
x.print();

// let y = new CourseCalendar("8/30/2021", days, MWF);
// y.print();

let t = new CourseCalendar("8/30/2021", days, MTWF);
t.print();

let w = new CourseCalendar("8/30/2021", days, MWRF);
w.print();
