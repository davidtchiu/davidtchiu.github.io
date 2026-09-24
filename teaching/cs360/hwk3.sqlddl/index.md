## CS 360 - Principles of Database Systems

### Hwk 3: SQL Schema and Data Ingestion

There's a lot of text-based ("raw") data in the real world that we have to load into a relational database to reap all the benefits of SQL. This process is called **Data Ingestion**. Suppose a local college uses a comma-delimited spreadsheet (csv file) to manage all of its data. Their software has been collecting years' worth of data on their students and course enrollment in a single spreadsheet, and over time, the size of this file has gotten out of hand. College administrators can no longer "eyeball" the spreadsheet to do simple analysis, and require the help of someone with relational database expertise... that's where you step in.

#### Student Outcomes

- To use SQL to define a relational database schema, including definition of keys and constraints.
- To practice data cleansing, a process in which you convert inconsistent (or other bad) data into correct, structured data for insertion into a database.

#### Required Files

The following file(s) have been provided for this assignment.

- [enrollment.raw.txt](enrollment.raw.txt)

#### Raw Enrollment Data

To best serve you, the university provided a dump of its enrollment data into a comma-delimited file. A snippet of this file, shown below, represents just 0.01% of the actual size of data to see if you can build a database around it for querying and more manageable analysis. They say that the remaining 99.99% of the data set follow the same format. **You are not allowed to make changes to the file given to you.**

```
studentID,studentName,class,gpa,major,CourseNum,deptID,CourseName,Location,meetDay,meetTime,deptName,building
-----------------------------------------------------------------------------------------------------------------
1001,Lia,Junior,3.6,ENGL,,,,,,,,
1282,Kelly,Freshman,2.5,,122,BUS,Economics,WY 30,MW,13:30,School of Business,McIntyre Hall
1025,John,Senior,3.6,ENGL,101,PHYS,How Things Move,HH 191,MWF,10:00,Department of Physics,Harned Hall
,,,,,,HIST,,,,,Department of History,Wyatt Hall
1247,Alexis,SR,3.9,ENGL,320,MATH,Discrete Mathematics,TH 307,F,11:00,Department of Mathematics,Tower of Babel
1101,Haley,SR,4.0,BUS;MATH,120,MATH,Algebra,MH 10,MW,12:00,Department of Mathematics,Tower of Babel
1247,Alexis,Senior,3.9,ENGL,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1304,Jordan,SR,2.9,MATH,101,PHYS,How Things Move,HH 191,MWF,10:00,Department of Physics,Harned Hall
1101,Haley,Senior,4.0,BUS;MATH,230,MATH,Linear Algebra,HH 308,TR,15:00,Department of Mathematics,Tower of Babel
1709,Cassandra,Junior,2.8,CSCI;SOAN,102,SOAN,Sociology 2,WY 205,MTWRF,09:00,Department of Anthropology,Wyatt Hall
1101,Haley,Senior,4.0,BUS;MATH,401,PHYS,Quantum Mechanics,HH 372,TR,09:00,Department of Physics,Harned Hall
1225,Sarah,Freshman,2.9,,101,ENGL,How to Read,WY 100,MWF,13:00,Department of English,Wyatt Hall
1247,Alexis,Senior,3.9,ENGL,453,CSCI,Capstone in Computer Science,TH 398,MWF,16:00,School of Computer Science,Thompson Hall
1911,David,Senior,3.2,CSCI;ENGL,453,CSCI,Capstone in Computer Science,TH 398,MWF,16:00,School of Computer Science,Thompson Hall
1025,John,Senior,3.6,ENGL,520,ENGL,Shakespeare Was Da Bomb,HH 20,TR,13:00,Department of English,Wyatt Hall
1282,Kelly,Freshman,2.5,,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1247,Alexis,SR,3.9,ENGL,520,CSCI,High Performance Computing,WY 307,TR,15:00,School of Computer Science,Thompson Hall
,,,,,330,MATH,Trigonometry,WEY 113,TR,08:30,,
1510,Jordan,Freshman,3.0,MATH;PHYS,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1247,Alexis,SR,3.9,ENGL,101,ENGL,How to Read,WY 100,MWF,13:00,Department of English,Wyatt Hall
1025,John,Senior,3.6,ENGL,351,BUS,Finance,WY 29,TR,12:00,School of Business,McIntyre Hall
,,,,,122,CSCI,How to Code Good,TH 19,TR,12:00,,
1661,Logan,Freshman,0.5,CSCI,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1304,Jordan,Senior,2.9,MATH,102,ENGL,How to Write,WY 100,MWF,14:00,Department of English,Wyatt Hall
1316,Austin,Sophomore,2.1,CSCI,122,BUS,Economics,WY 30,MW,13:30,School of Business,McIntyre Hall
1025,John,SR,3.6,ENGL,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1316,Austin,Sophomore,2.1,CSCI,460,CSCI,Operating Systems,TH 8,MW,14:00,School of Computer Science,Thompson Hall
1381,Tiffany,JR,4.0,CSCI,,,,,,,,
1468,Kris,Sophomore,1.0,ENGL,,,,,,,,
1487,Erin,Sophomore,3.9,ENGL,,,,,,,,
1501,Jessica,Freshman,3.3,CSCI,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1510,Jordan,Freshman,3.0,MATH;PHYS,122,BUS,Economics,WY 30,MW,13:30,School of Business,McIntyre Hall
1934,Kyle,JR,2.1,BUS;ENGL,453,CSCI,Capstone in Computer Science,TH 398,MWF,16:00,School of Computer Science,Thompson Hall
1782,Andrew,Sophomore,3.7,BUS,230,MATH,Linear Algebra,HH 308,TR,15:00,Department of Mathematics,Tower of Babel
1510,Jordan,Freshman,3.0,MATH;PHYS,351,BUS,Finance,WY 29,TR,12:00,School of Business,McIntyre Hall
1629,Brad,Senior,1.6,,,,,,,,,
1640,Adam,Senior,3.6,,,,,,,,,
1304,Jordan,Senior,2.9,MATH,351,BUS,Finance,WY 29,TR,12:00,School of Business,McIntyre Hall
1304,Jordan,SR,2.9,MATH,520,ENGL,Shakespeare Was Da Bomb,HH 20,TR,13:00,Department of English,Wyatt Hall
1641,Brittany,SR,2.7,ENGL,,,,,,,,
1661,Logan,Freshman,0.5,CSCI,351,BUS,Finance,WY 29,TR,12:00,School of Business,McIntyre Hall
1025,John,Senior,3.6,ENGL,520,CSCI,High Performance Computing,WY 307,TR,15:00,School of Computer Science,Thompson Hall
1689,Gabriel,SR,2.4,BUS,520,ENGL,Shakespeare Was Da Bomb,HH 20,TR,13:00,Department of English,Wyatt Hall
1661,Logan,Freshman,0.5,CSCI,460,CSCI,Operating Systems,TH 8,MW,14:00,School of Computer Science,Thompson Hall
,,,,,101,SOAN,Sociology 1,WY 105,MWF,08:00,,
1782,Andrew,Sophomore,3.7,BUS,520,ENGL,Shakespeare Was Da Bomb,HH 20,TR,13:00,Department of English,Wyatt Hall
1911,David,Senior,3.2,CSCI;ENGL,230,MATH,Linear Algebra,HH 308,TR,15:00,Department of Mathematics,Tower of Babel
1689,Gabriel,Senior,2.4,BUS,460,CSCI,Operating Systems,TH 8,MW,14:00,School of Computer Science,Thompson Hall
1661,Logan,Freshman,0.5,CSCI,460,MATH,Calculus 3,WEY 102,TR,12:30,Department of Mathematics,Tower of Babel
1911,David,SR,3.2,CSCI;ENGL,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1934,Kyle,Junior,2.1,BUS;ENGL,351,CSCI,Database Systems,TH 19,MW,12:00,School of Computer Science,Thompson Hall
1934,Kyle,Junior,2.1,BUS;ENGL,520,ENGL,Shakespeare Was Da Bomb,HH 20,TR,13:00,Department of English,Wyatt Hall
```

Each line in this file represents a student's course-enrollment. For instance, take a look at Kyle's (`1934`) info at the tail end of this file. Kyle is a `BUS` and `ENGL` double-major (thus `BUS;ENGL` is listed under the "major" column) who is enrolled in CSCI 351, ENGL 520, and CSCI 453 (the enrollment in CSCI 453 appears a bit earlier in the file). At the end of each row, the last two tokens (department name and building) refer to the department in which the course is offered and not the student's major. Take note of all the problems this file suffers from:

1. **Data Redundancies**: It is easy to see that a student's information is duplicated on a separate row for each course they are enrolled in. (For instance, check out the last two rows for a student, Kyle.)
2. **Multi-valued attributes:** One of the attributes can have multiple values: A student can have zero to two majors, and each of major is separated by a semi-colon.
3. **Incomplete data:** When a student is not enrolled in any course, their course-enrollment fields are simply empty. Look at Lia's data on the third row of the file: They are not enrolled in any courses, so all of the fields following her major are empty, which looks really wonky. Now look at a course like MATH 330 (Trigonometry) on line 20. These are courses that exist on the books in which  no one is enrolled yet. In yet another example, sometimes, we just need to show that a department/program exists, so here are also departments without student or course info. This is the case for the History Department (6th row), which can happen when an existing department has not yet added any courses to the schedule.

#### Task 1: Schema Definition

Your task is two-part: (1) You must first define a database schema in SQL. I will explain the schema's requirements below. (2) After your schema has been defined you must load it into sqlite. Then you must write a script (in the language of your choice) that will take the enrollment data from its raw form and insert all the data into your structured database.

We'll focus first on Task 1. You can assume there will be no other relations needed. Create a plain-text file called **YourLastname.txt** that will store the schema definition in SQL. (Disclaimer: Yes this file must be in plain-text. Do not write these statements in Word (.doc), Wordpad (.rtf), etc., that adds special formatting. Use an editor like VS Code or Atom). Submissions in non-plaintext will be returned without a grade.

Give the SQL commands to create the relations described below. Where appropriate, all foreign-key constraints must cascade on update and delete operations, unless otherwise stated. To make your lives easier, I've gotten a start on it for you. Place the following code block in the top of your plaintext file:

```sql
-- Turn on foreign keys
PRAGMA foreign_keys = ON;

-- Remove tables if they already exist
drop table if exists Major;
drop table if exists Enroll;
drop table if exists Course;
drop table if exists Dept;
drop table if exists Student;

-- Create the schema for your tables below
create table ... -- you finish the rest :)
```

##### Defining Relations

Here is the DB schema you need to define in SQL. As you define these relations, keep in mind that the order of each table in your file matters. Like referencing variables in any language, SQLite will throw an error informing you that relations do not yet exist if you refer to them too early in the file! Each table must have a primary key defined (take note that some primary keys are multi-attribute). Each attribute must have an appropriate data type (`TEXT`, `REAL`, or `INTEGER`).

<ul>
<li>
	<p>Student(studentID, studentName, class, gpa)<br/>
	Students are identified with a unique studentID, a first name, 
	a class standing, and a cumulative GPA, which can be `NULL`. 
	The studentName may not be unique, but it cannot be `NULL`. The 
	class standing <i>must</i> be one of: 
	"Freshman," "Sophomore," "Junior," or "Senior." (Use the `CHECK()` attribute
	constraint to enforce this.) 
	Similarly, GPAs must be between 0.0 to 4.0 if given, or `NULL`.
	</p>
</li>
<li>
	<p>Major(studentID, major)<br/>
	A student's major(s) is (are) recognized by an entry in this table (an undeclared student
	therefore would not have an entry). `StudentID` is self-explanatory, 
	and the major code is just the department's ID (see Department table below). That is, if a department
	decided to recode its ID (say, `CS` department changes its department ID to `COMP`), then the changes must be reflected automatically in this table. (That is, think about your foreign key.) When defining the primary key for this table, you need to consider that a student may have several majors, so the student's ID may appear more than once.
	</p>
</li>
<li>
	<p>
	Course(courseNum, deptID, courseName, location, meetDay, meetTime)<br/>
	Courses have a course number, a department it belongs to, a course name, 
	location, day, and time. Some courses can be cross-listed. For instance, 
	the course Discrete Math might belong to both CS and Math departments! By 
	itself, neither course number nor deptID are unique in this relation, but the
	two taken together is unique. No courses shall be taught before '07:00' or after '17:00', so make sure
	you check that constraint. (Yes,
	the leading "0" matters for single-digit hours, since time is represented as a string
	and will be compared lexicographically. Therefore, '7:00' > '17:00', which is clearly 
	not true in the time sense.)
	I would still use a TEXT field to store meeting days and meeting times though (Hint: recall that
	<code>&gt;</code> and <code>&lt;</code> operators can be used with `TEXT` fields).
	</p>
</li>
<li>
	<p>
	Dept(deptID, deptName, building)<br/>
	Departments are identified by a unique label (`deptID`), which cannot be numerical. For 
	instance, `HIST` would be the dept ID for the History Department. 
	It also requires a full name, and each department is housed in a 
	particular building. A department cannot be housed in more than
	one building, nor can they have more than one label.
	Constraint: `deptID` should not be more than 4 characters long, and 
	the department names should be unique and cannot be `NULL`. If a department is 
	removed, then all its course offerings are removed. Anyone enrolled in a
	course offered by the department should also have that course-enrollment removed.
	All students whose majors are from that department should be set to NULL (i.e., the 
	database should not delete any students upon the removal of a department!!).
	</p>
</li>
<li>
	<p>
	Enroll(courseNum, deptID, studentID)<br/>
	Students can enroll in any number of courses. A course-enrollment is given by 
	course number, the department of the course offering, and the student taking
	the course. For instance, that Kelly is enrolled in Databases 
	would be represented in this table as the tuple `(351, 'CSCI', 1282)`.
	</p>
</li>
</ul>

##### Task 2: Data Ingestion

The next step is to import the raw data into your database.

1. Write a script that inputs the raw data file and prints out a sequence of `INSERT OR IGNORE INTO ...` statements that you can later copy-and-paste into SQLite to fully populate the tables that you just defined earlier.  It is recommended that you use Python for this type of work, as is mostly the case in industry, but I don't really have a preference on what language you use to do the file parsing.

	 The optional `OR IGNORE` statement will simply ignore the insert statement if the insertion results in an error (i.e., the tuple already exists). We didn't talk about this option in class as it's not in the SQL standard, but it helps suppress the number of warnings.

2. Your script will need to resolve all those anomalies I listed before (inconsistencies, redundancies, etc.). This step is called *Data Cleansing*  in the real world. In some cases, you can rely on the database to resolve some anomalies. For instance, if you set the `deptID` to be the primary key of `Department` like you were supposed to, then multiple insertions of the same department would be automatically rejected by SQLite.

3. Here are the first few lines generated by my script when given the raw input file. Duplicate insert statements in your output are allowed since the `OR IGNORE` will suppress their execution. Notice how my script took each row from the raw file, and produces several insert statements. 

   ```sql
   INSERT OR IGNORE INTO Student VALUES (1001,'Lia','Junior','3.6');
   INSERT OR IGNORE INTO Major VALUES (1001,'ENGL');
   INSERT OR IGNORE INTO Student VALUES (1282,'Kelly','Freshman','2.5');
   INSERT OR IGNORE INTO Dept VALUES ('BUS','School of Business','McIntyre Hall');
   INSERT OR IGNORE INTO Course VALUES (122,'BUS','Economics','WY 30','MW','13:30');
   INSERT OR IGNORE INTO Enroll VALUES (122,'BUS',1282);
   INSERT OR IGNORE INTO Student VALUES (1025,'John','Senior','3.6');
   INSERT OR IGNORE INTO Dept VALUES ('PHYS','Department of Physics','Harned Hall');
   INSERT OR IGNORE INTO Major VALUES (1025,'ENGL');
   INSERT OR IGNORE INTO Course VALUES (101,'PHYS','How Things Move','HH 191','MWF','10:00');
   INSERT OR IGNORE INTO Enroll VALUES (101,'PHYS',1025);
   INSERT OR IGNORE INTO Dept VALUES ('HIST','Department of History','Wyatt Hall');
   ```

4. One thing you'll figure out very shortly is that your foreign key constraints will reject insertions where primary keys don't yet exist. For instance, when you insert into the `Major` table a tuple containing `(1001,'ENGL')`, but say `ENGL` does not yet exist in the `Dept` table, then SQLite will reject the insertion. It's thinking, "who is this person majoring in a non-existent major?" This is a good thing -- this means the foreign keys are doing their jobs of checking dependencies. However, this means you need to organize your insertion printouts so that you do them in this order: insert all Students first, then all Departments, then Courses, Major, and finally Enroll.

5. **Submission:** I just need two things: First, I need a file containing your SQL statements for creating the database schema. The second file is your script. I don't need a file containing your script's INSERTION outputs, because I will run your script against my test data, and copy-and-paste its output directly into SQLite to grade it.

#### Expected Output

If you did everything correctly, type in the following queries, and your results should match mine exactly:

```sql
sqlite> select * from Dept order by deptID;
```

```
deptID      deptName            building
----------  ------------------  -------------
BUS         School of Business  McIntyre Hall
CSCI        School of Computer  Thompson Hall
ENGL        Department of Engl  Wyatt Hall
HIST        Department of Hist  Wyatt Hall
MATH        Department of Math  Tower of Babe
PHYS        Department of Phys  Harned Hall
SOAN        Department of Anth  Wyatt Hall
```

```sql
sqlite> select * from Student order by studentID;
```

```
studentID   studentName  class       gpa
----------  -----------  ----------  ----------
1001        Lia          Junior      3.6
1025        John         Senior      3.6
1101        Haley        Senior      4.0
1225        Sarah        Freshman    2.9
1247        Alexis       Senior      3.9
1282        Kelly        Freshman    2.5
1304        Jordan       Senior      2.9
1316        Austin       Sophomore   2.1
1381        Tiffany      Junior      4.0
1468        Kris         Sophomore   1.0
1487        Erin         Sophomore   3.9
1501        Jessica      Freshman    3.3
1510        Jordan       Freshman    3.0
1629        Brad         Senior      1.6
1640        Adam         Senior      3.6
1641        Brittany     Senior      2.7
1661        Logan        Freshman    0.5
1689        Gabriel      Senior      2.4
1709        Cassandra    Junior      2.8
1782        Andrew       Sophomore   3.7
1911        David        Senior      3.2
1934        Kyle         Junior      2.1
```

```sql
sqlite> select * from course order by deptID,courseNum;
```

```
CourseNum   deptID      CourseName  Location    meetDay     meetTime
----------  ----------  ----------  ----------  ----------  ----------
122         BUS         Economics   WY 30       MW          13:30
351         BUS         Finance     WY 29       TR          12:00
122         CSCI        How to Cod  TH 19       TR          12:00
351         CSCI        Database S  TH 19       MW          12:00
453         CSCI        Capstone i  TH 398      MWF         16:00
460         CSCI        Operating   TH 8        MW          14:00
520         CSCI        High Perfo  WY 307      TR          15:00
101         ENGL        How to Rea  WY 100      MWF         13:00
102         ENGL        How to Wri  WY 100      MWF         14:00
520         ENGL        Shakespear  HH 20       TR          13:00
120         MATH        Algebra     MH 10       MW          12:00
230         MATH        Linear Alg  HH 308      TR          15:00
320         MATH        Discrete M  TH 307      F           11:00
330         MATH        Trigonomet  WEY 113     TR          08:30
460         MATH        Calculus 3  WEY 102     TR          12:30
101         PHYS        How Things  HH 191      MWF         10:00
401         PHYS        Quantum Me  HH 372      TR          09:00
101         SOAN        Sociology   WY 105      MWF         08:00
102         SOAN        Sociology   WY 205      MTWRF       09:00
```

```sql
sqlite> select * from major order by major, StudentID;
```

```
StudentID   major
----------  ----------
1101        BUS
1689        BUS
1782        BUS
1934        BUS
1316        CSCI
1381        CSCI
1501        CSCI
1661        CSCI
1709        CSCI
1911        CSCI
1001        ENGL
1025        ENGL
1247        ENGL
1468        ENGL
1487        ENGL
1641        ENGL
1911        ENGL
1934        ENGL
1101        MATH
1304        MATH
1510        MATH
1510        PHYS
1709        SOAN
```

```sql
sqlite> select * from Enroll order by StudentID,deptID,courseNum;
```

```
CourseNum   deptID      StudentID
----------  ----------  ----------
351         BUS         1025
351         CSCI        1025
520         CSCI        1025
520         ENGL        1025
101         PHYS        1025
120         MATH        1101
230         MATH        1101
401         PHYS        1101
101         ENGL        1225
351         CSCI        1247
453         CSCI        1247
520         CSCI        1247
101         ENGL        1247
320         MATH        1247
122         BUS         1282
351         CSCI        1282
351         BUS         1304
102         ENGL        1304
520         ENGL        1304
101         PHYS        1304
122         BUS         1316
460         CSCI        1316
351         CSCI        1501
122         BUS         1510
351         BUS         1510
351         CSCI        1510
351         BUS         1661
351         CSCI        1661
460         CSCI        1661
460         MATH        1661
460         CSCI        1689
520         ENGL        1689
102         SOAN        1709
520         ENGL        1782
230         MATH        1782
351         CSCI        1911
453         CSCI        1911
230         MATH        1911
351         CSCI        1934
453         CSCI        1934
520         ENGL        1934
```

#### Grading

```
[25pt] Correctness of the schema definition, including data types, primary and foreign
    keys. (5 points per table)

[40pt] Correctness of the data ingestion script, broken down as follows:

    [25pt] Your script prints a sequence of valid INSERT statements that
        properly populates all tables. Duplicate INSERT statements
        *are* acceptable.

    [5pt] Your script must resolve incomplete data (nonexistent majors, for instance).

    [5pt] Your script resolves multi-valued majors.

[misc] Files not submitted in plain-text format will be returned without a grade.

Total: 60pts
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on Canvas.
You must submit two files: (1) The file containing the SQL schema definition. This file must be in plain-text. (2) The script used to generate the insert statements. Zip these files up.

Navigate to our course on Canvas. You should see the Homework submission dropbox. Click on this link, and you should be able to drag your file right into the submission box. Click "Save Changes". You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu.
