## CS 455 - Principles of Database Systems

### SQL Lab 1: Writing SQL Queries for the University Database!

You're finally ready to conduct the analysis that the college wants. The data, though synthetic, is an analog to the real data in our university's database. The queries I'm having you run are very similar to (or even the same as) the ones that we actually run when generating our year-end reports!


#### Student Outcomes

- To write SQL queries for the retrieval of data.

#### Required Files
I've taken the University data that you should have generated from the previous homework and made it available for this lab.
The following file(s) have been provided for this assignment.

- [university.db](university.db)

#### Browse your Database!
Start by downloading the database file, and open it up in [DB Browser](https://sqlitebrowser.org/) or [Antares](https://antares-sql.app/). Open the `university.db` file that is provided to you, and browse its contents to gauge the schema and where all the data is stored.<br/><br/>

<img src="universitySchema.png"/>

#### Writing SQL Queries
<!-- To write your queries, open Antares and you should see a `+` sign on the top. When you click on it, Antares will open a new "query" tab. This is where you can write and execute your SQL queries.  -->
For each of the following problems, write an SQL query to return the expected results. Your queries should work in general, regardless of what data is currently stored in this instance of the University database. In other words, don't hard code your queries!


1. Return a list of departments that are found in any building starting with "T". Order by dept ID.
   ```
   deptID      deptName                        building
   -------     --------                        --------
   CSCI        School of Computer Science      Thompson Hall
   MATH        Department of Mathematics       Tower of Babel
   ```

2. Get all courses being taught by the MATH department that start in the afternoon. You may assume that time is in 24hr format, and you're reminded that you can use comparison operators (`<`, `>`) on strings. Order by course number.

   ```
   CourseNum   deptID      CourseName  Location    meetDay     meetTime
   ----------  ----------  ----------  ----------  ----------  ----------
   120         MATH        Algebra     MH 10       MW          12:00
   230         MATH        Linear Alg  HH 308      TR          15:00
   460         MATH        Calculus 3  WEY 102     TR          12:30
   ```

3. Return the student, David's, course schedule. Assume you don't have David's student ID, and that they're the only one with that name. Only `Course`'s attributes should be projected. Order by `DeptID` then by Course Number.

   ```
   deptID      CourseNum   CourseName        Location    meetDay     meetTime
   ----------  ----------  ----------------  ----------  ----------  ----------
   CSCI        351         Database Systems  TH 19       MW          12:00
   CSCI        453         Capstone in Comp  TH 398      MWF         16:00
   MATH        230         Linear Algebra    HH 308      TR          15:00
   ```

4. Find the average GPA for each of the class ranks (freshman, sophomore, junior, senior). Rename the `avg(GPA)` column to `ClassGPA`.

   ```
   class       ClassGPA
   ----------  ----------
   Freshman    2.44
   Junior      3.125
   Senior      3.1
   Sophomore   2.675
   ```

5. Identify all students who have a lower GPA than the average of their respective class rank. Sort the results first by class rank, then by the student's name.

   ```
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
   1468        Kris         Sophomore   1.0         2.675
   ```

6. Return a list of all students who are still undeclared (that is, without a major). Project their student ID and their name. Sort results by `studentID`.

   ```
   studentID   studentName
   ----------  -----------
   1001        Lia
   1225        Sarah
   1282        Kelly
   1629        Brad
   1640        Adam
   ```


#### Credits

Written by David Chiu.