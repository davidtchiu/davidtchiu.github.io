## CS 455 - Principles of Database Systems

### Hwk: SQL Queries

Now that you've gotten the raw enrollment data stored in a relational database (SQLite), you're finally ready to conduct the analysis that the college wants. The college has fallen on hard times, and need to do various audits to see which students and departments are worth keeping around. They start by asking you to write some simple queries (e.g., finding a student's course schedule). This is followed by queries of greater complexity (e.g., retrieving departments with the low enrollments, finding students who have the highest GPA in their major, etc.). Finally, they ask you to create triggers to log system activities.

#### Student Outcomes

- To write SQL queries for the retrieval and manipulation of data.

#### Required Files

The following file(s) have been provided for this assignment.

- [university-ddl.sql](university-ddl.sql)
- [university-populate.sql](university-populate.sql)

#### Raw Enrollment Data

Start by downloading the two `.sql` files and reading them into your SQLite3 database. The "ddl" file contains the schema definition, so load that first. After you input the "populate" file, your database should be loaded with the enrollment data from the previous homework. Create a file named `YourLastName_HW4.sql` and store all your queries in the following format:

    ```sql
    -- Q0: This is just an example showing the format I expect.
    -- This query retrieves every student in the database. It projects
    -- only their ID and name.
    SELECT studentID,name
    FROM student;


    -- Q1: Description of the next query..
    SELECT ...
    ```

I recommend that you test out your queries directly on the SQLite command-line (or GUI, if you downloaded one). Once you are convinced that your query works, copy it into the `YourLastName_HW4.sql` file for submission. Here are the queries that the college wants you to run. Below each request, I've given you the expected result. **Except for the last problem in which you are asked to create an audit table, you are not allowed to make changes to the schema to help you write your queries.** Furthermore, because the data is being updated constantly in real life, no queries should be written specifically for this instance of the database -- that is, your queries should work in general, regardless of what data is currently stored.

1. Get all courses being taught by the MATH department that start in the afternoon. You may assume that time is in 24hr format.

   ```
   CourseNum   deptID      CourseName  Location    meetDay     meetTime
   ----------  ----------  ----------  ----------  ----------  ----------
   120         MATH        Algebra     MH 10       MW          12:00
   230         MATH        Linear Alg  HH 308      TR          15:00
   460         MATH        Calculus 3  WEY 102     TR          12:30
   ```

2. Return David's course schedule. You don't have his student ID, but he's the only person with that name. Only Course attributes should be projected.

   ```
   deptID      CourseNum   CourseName        Location    meetDay     meetTime
   ----------  ----------  ----------------  ----------  ----------  ----------
   CSCI        351         Database Systems  TH 19       MW          12:00
   CSCI        453         Capstone in Comp  TH 398      MWF         16:00
   MATH        230         Linear Algebra    HH 308      TR          15:00
   ```

3. Find the average GPA for each of the class ranks (freshman, sophomore, junior, senior). Rename the avg(GPA) field to ClassGPA.

   ```class ClassGPA
   ----------  ----------
   Freshman    2.44
   Junior      3.125
   Senior      3.1
   Sophomore   2.675
   ```

4. Identify all students who have a lower GPA than the average of his/her respective class rank. Sort the results by class rank and the student's name.

   ````
    studentID studentName  class       gpa         ClassGPA
   ----------  -----------  ----------  ----------  ----------
   1661        Logan        Freshman    0.5         2.44
   1709        Cassandra    Junior      2.8         3.125
   1934        Kyle         Junior      2.1         3.125
   1629        Brad         Senior      1.6         3.1
   1641        Brittany     Senior      2.7         3.1
   1689        Gabriel      Senior      2.4         3.1
   1304        Jordan       Senior      2.9         3.1
   1316        Austin       Sophomore   2.1         2.675
   1468        Kris         Sophomore   1.0         2.675```
   ````

5. Get a list of all students who are still undeclared (that is, without a major). Project only the students' ID and name. Sort results by the students' ID.

   ```
    studentID studentName
   ----------  -----------
   1225        Sarah
   1282        Kelly
   1629        Brad
   1640        Adam
   ```

6. List all departments in the college and their respective student enrollments. Sort the results in descending order of enrollment.

   ```
   deptName                    enrolled
   --------------------------  ----------
   School of Computer Science  16
   Department of English       8
   School of Business          7
   Department of Mathematics   6
   Department of Physics       3
   Department of Anthropology  1
   Department of History       0
   ```

7. Identify all valedictorians in the major. (This is a real query that we have to run at the end of each year for the award ceremony!) For each major, find the student(s) with the highest GPA. Sort results by major. (Notice that ENGL has two students with the same GPA)

   ```
   (Notice that ENGL has two students with the same GPA)

   studentID   studentName  class       major       gpa
   ----------  -----------  ----------  ----------  ----------
   1101        Haley        Senior      BUS         4.0
   1381        Tiffany      Junior      CSCI        4.0
   1247        Alexis       Senior      ENGL        3.9
   1487        Erin         Sophomore   ENGL        3.9
   1101        Haley        Senior      MATH        4.0
   1510        Jordan       Freshman    PHYS        3.0
   1709        Cassandra    Junior      SOAN        2.8
   ```

8. The runners-up in each major should receive a prize too! For each major, find the student(s) with the second highest GPA. Sort results by major. (You may not delete from the database, and yes, you might not like me very much for making you this one, but it help builds character and strength).

   ```
   studentID   studentName  class       major       gpa
   ----------  -----------  ----------  ----------  ----------
   1782        Andrew       Sophomore   BUS         3.7
   1501        Jessica      Freshman    CSCI        3.3
   1025        John         Senior      ENGL        3.6
   1510        Jordan       Freshman    MATH        3.0
   ```

9. Find the names, IDs, and the number of courses they are taking, for the students who are enrolled in the most number of courses.

   ```
   studentID   studentName  NumCourses
   ----------  -----------  ----------
   1025        John         5
   1247        Alexis       5
   ```

10. You found a vulnerability to the Students table, and because you haven't taken an Ethics course, you decide to give every CSCI major a 1.0 bump in their GPA. To avoid detection, no GPA can exceed 4.0, so round anything higher than a 4.0 to 4.0. This will likely take two UPDATE statements. Make sure these two statements are done atomically.

    ```
    (BEFORE)
    sqlite> select * from student natural join major where major='CSCI';
    studentID   studentName  class       gpa         major
    ----------  -----------  ----------  ----------  ----------
    1381        Tiffany      Junior      4.0         CSCI
    1709        Cassandra    Junior      2.8         CSCI
    1316        Austin       Sophomore   2.1         CSCI
    1911        David        Senior      3.2         CSCI
    1501        Jessica      Freshman    3.3         CSCI
    1661        Logan        Freshman    0.5         CSCI

    (AFTER)
    sqlite> select * from student natural join major where major='CSCI';
    studentID   studentName  class       gpa         major
    ----------  -----------  ----------  ----------  ----------
    1381        Tiffany      Junior      4.0         CSCI
    1709        Cassandra    Junior      3.8         CSCI
    1316        Austin       Sophomore   3.1         CSCI
    1911        David        Senior      4.0         CSCI
    1501        Jessica      Freshman    4.0         CSCI
    1661        Logan        Freshman    1.5         CSCI
    ```

11. After learning about the GPA mishap, the college now wants to add a new department, Philosophy (PHIL), which will housed in a newly constructed building called Plato's Cave. They will offer a course on PHIL 101: Ethics taught in room CAVE, and all CSCI majors are now required to take it. Add the new department, course, and enrollments. You need to do this in just **three separate statements**. Run these statements in such a way that they cannot be broken up (atomically).

    ```
    (Showing the contents of the Dept, course, and enroll tables.)

    sqlite> select * from dept order by deptID;
    deptID      deptName            building
    ----------  ------------------  -------------
    BUS         School of Business  McIntyre Hall
    CSCI        School of Computer  Thompson Hall
    ENGL        Department of Engl  Wyatt Hall
    HIST        Department of Hist  Wyatt Hall
    MATH        Department of Math  Tower of Babe
    PHIL        Philosophy          Plato's Cave
    PHYS        Department of Phys  Harned Hall
    SOAN        Department of Anth  Wyatt Hall


    sqlite> select * from course order by deptID,CourseNum;
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
    101         PHIL        Ethics      CAVE        TR          16:00
    101         PHYS        How Things  HH 191      MWF         10:00
    401         PHYS        Quantum Me  HH 372      TR          09:00
    101         SOAN        Sociology   WY 105      MWF         08:00
    102         SOAN        Sociology   WY 205      MTWRF       09:00


    sqlite> select * from enroll order by deptID,courseNum;
    CourseNum   deptID      StudentID
    ----------  ----------  ----------
    122         BUS         1510
    122         BUS         1316
    122         BUS         1282
    351         BUS         1510
    351         BUS         1661
    351         BUS         1025
    351         BUS         1304
    351         CSCI        1282
    351         CSCI        1510
    351         CSCI        1661
    351         CSCI        1247
    351         CSCI        1501
    351         CSCI        1911
    351         CSCI        1025
    351         CSCI        1934
    453         CSCI        1247
    453         CSCI        1911
    453         CSCI        1934
    460         CSCI        1316
    460         CSCI        1689
    460         CSCI        1661
    520         CSCI        1247
    520         CSCI        1025
    101         ENGL        1247
    101         ENGL        1225
    102         ENGL        1304
    520         ENGL        1689
    520         ENGL        1782
    520         ENGL        1304
    520         ENGL        1025
    520         ENGL        1934
    120         MATH        1101
    230         MATH        1101
    230         MATH        1911
    230         MATH        1782
    320         MATH        1247
    460         MATH        1661
    101         PHIL        1381
    101         PHIL        1709
    101         PHIL        1316
    101         PHIL        1911
    101         PHIL        1501
    101         PHIL        1661
    101         PHYS        1304
    101         PHYS        1025
    401         PHYS        1101
    102         SOAN        1709
    ```

12. To prevent future tampering, the university wants you to log any activity in the Student table. Create a new table called `student_log` to store the following information: activity in question (insert, deletion, update), student's name, all the old values, and the new values. Finally, create the triggers that will record these activities.

Put these statements in the DDL file that was provided to you.

#### Grading

```
Files submitted not in plain-text format will be returned without a grade.

[15pt] Completion of the queries Q1 - Q3. Each query is of equal value (5pts each)
[90pt] Completion of remaining problems. Each problem is of equal value (10pts each)

Total: 105pts
```

#### Submitting Your Assignment

After you have completed the homework, use the following to submit your work on moodle.
Please submit the modified DDL file (with your triggers and the new audit table defined) and the file containing all of your queries. Zip them together. Files not in plain-text will be returned without a grade.

Navigate to our course on Canvas. You should see the Homework 4 Dropbox. Click on this link, and you should be able to drag your file right into the submission box. Click "Save Changes". You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu.
