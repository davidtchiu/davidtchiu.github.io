## CS 455 - Principles of Database Systems

### Project 2: PHP Web Development

#### Overview

In this project you will be getting Apache to support the PHP programming environment, an interpreted language designed for generating web content. You will also become familiarized with PHP's library support to communicate with various databases, like SQLite3. You'll write a small database-driven web app. Finally, you'll learn how to write code that secures against SQL-injection attacks, which are responsible for a vast number of leaks of private data.

#### Importance of Teamwork

You are required to work in teams for all projects. In the past, the most successful teams meet and physically work together at an agreed-upon location and time. Teams that delegate tasks independently (then merging tasks later) have found far less success in the recent past.

I will assume that each member of the team has contributed equally to the project. If that assumption isn't true, please contact me privately. Each student will be graded on their teamwork and contribution.

#### Student Learning Objectives

- At the end of this project, students will be:
- Familiar with the installation and language of PHP
- Understand the integration of PHP with HTML to produce dynamic web pages
- Understand PHP's database-connectivity support for SQLite3
- Understand the risks posed by SQL-injection and how to secure against it

#### Part 1: Installing Required Software

This project assumes the successful completion of Project 1. It requires that you have a basic understanding of how to navigate the Linux command-line interface. When in doubt, refer to that [cheat-sheet](https://files.fosswire.com/2007/08/fwunixref.pdf) I you pointed to in the last project.

1. Login to your server. We need to install a few things before we can move on.

2. Using the `apt-get` command, you need to install the following software packages on your server:

   - SQLite3. Test this by typing `sqlite3` in the command line.
   - PHP language support (version 7 is stable at the time of writing). Test this by renaming your .html page to have a .php extension.
   - PHP 7 PDO libraries for sqlite3 support.
   - It's too hard to keep up with what the apt-package names are for PHP 7 and PHP 7's sqlite libraries. Those are up to you to figure out.
   - Go ahead and restart apache after you've installed the PHP and PDO packages.

3. It would probably also make sense to install PHP and Apache on your own machines, if you plan to develop on your local machines separately, and pushing up your code once it's ready to be tested in the "live" environment.

4. Even if everything went smoothly, you'll still want to test that everything is working. Create a new webpage, but this time, the file will have a `.php` extension, instead of a `.html` extension. Type in the following code, then save the file:

```php
<?php
    phpinfo();
?>
```

Navigate to the page from your web browser, and you should see a page containing a ton of information. If you see this, congrats, PHP is installed. If your browser asks you to download the `.php` file, try restarting Apache. If even that doesn't work, then I surmise PHP wasn't installed properly.

5. On the server, navigate to `/etc/apache2/mods-enabled` and edit the `php7.x.conf` file. You should see the setting there, and turn it on. Restart apache after you're done.

6. What `phpinfo()` spews out is the configuration and state of your PHP and web-server environment. Scroll down to the "PDO" section, and see if the SQLite3 library (driver) is listed as being installed. If you see it, congrats, your PHP has sqlite3 support. If you don't, you need to try reinstalling the PDO library for SQLite3.

7. Peruse through the PHP info a little more. There are two sections of data that are pretty interesting. First, under the Apache Environment section, you can read all about how Apache was configured (what you had to do in the previous project). For instance, you can see where the document root is, and what the current URL is (`SCRIPT_NAME`).

8. Superglobal Variables: The second section with interesting data is toward the bottom, called PHP Variables. These variables contain the server information we just saw in the Apache Environment section, and more! As you'll learn, these variables are called superglobals, and they are accessible by any PHP page! So, for instance, any PHP page you create knows what the current page is called (`$\_SERVER['SCRIPT_NAME']`), and even knows how the user got here (`$\_SERVER['HTTP_REFERER']`).

#### Part 2: Learn Some PHP

1. PHP is one of the most popular languages in use today, and it's also pretty easy to learn! You can find many good tutorials online. I've also prepared some notes for you that you might find useful.

- [David's old PHP Notes](CS455-php.pdf)

2. When you're ready to test out PHP, create another file, called `test.php`, and type the following code in. Notice that there is an intentional error (the hello-world string was not terminated).

```php
<!DOCTYPE html>
<html>
<body>

<?php
    //there should be an error
    echo "<p>hello world!</p>;
?>

</body>
</html>
```

Save it, then navigate to the page on your browser. You _should_ see a blank page. View the HTML source from your browser, and you should also see nothing. Not very useful for debugging purposes, is it?

3. Why doesn't PHP display errors by default? Well think about this from a production standpoint. If a page has errors in it, would you want PHP to announce to the world what the problem was? The might reveal some sensitive information, for instance, leading to security vulnerabilities. So, hiding errors by default is actually a good thing, but it's not very useful for educational settings! We need to turn error-reporting on.

4. Fortunately, like Apache, PHP also comes with a configuration file. It's called php.ini. You'll need to find it on your server first (maybe `phpinfo()` would tell you?). You'll need superuser privilege to edit it. Read through the entire file, and try to understand as much as you can. In this file, semi-colons denote line-comments. Find the line that sets the value for `display_errors`, and turn it On. You need to restart Apache for the changes to take effect. Refresh the `testing.php` page, and now you should see the errors.

5. Fix the error in `test.php`, and you should see the "Hello World!" message if you refresh the page. From your browser, choose to view the source. Here's something interesting: It appears that the browser only knows about the HTML code that was generated after the PHP code had already processed! This important observation implies two very important concepts:

   - Your PHP code was executed before the web server (apache) serves it back to the browser.
   - Your browser is built to interpret HTML, and is completely oblivious to the fact that PHP was even present. It does not know, or even care, that the HTML document it's displaying was generated by PHP, or that was a static HTML page to begin with.
   - This web-programming model, in which the code is processed by the web server, is called server-side programming. Today, PHP is the dominant server-side language (others include Python (flask), C\#, and Ruby-on-Rails). As an aside, client-side languages are ignored by the server and processed by the browser. JavaScript is the most widely known client-side language, but interestingly, recent developments in JavaScript has meant that it can be used as a server-side language too (see: node.js)!

#### Part 3: Bringing in the Database

Because we only have enough time in class to cover one database system, this tutorial will be written for SQLite3. However, the strength of PHP's PDO driver library makes these instructions pretty easy to adapt to other relational database systems, like MySQL, PostgreSQL, etc.

- From the command line, create a new folder called myDB, in your web directory and navigate inside it.

- Start up `sqlite3`. Now let's populate it with the airplane data set we've been working with in class. Copy and paste the contents of the `airport-schema.sql` and `airport-populate.sql` (these are on found on the course page) into the SQLite prompt. Save the database as a file named airport.db by typing `.backup airport.db` or `.save airport.db`.

- Once the airport database is created, you now need to give the web server read, write, and execute permissions to the both `myDB/` directory to the new `airport.db` file. You also want both items to be owned by apache. To do this, you need to figure out what username does Apache execute on your machine? Use the `ps aux` command to list all the processes that are running. The usernames of the owners will be displayed as part of the output. Then use the commands `chown` and `chmod` to assign proper permissions to these two items. Do this before moving on.

- Create a new file, outside the database directory, called `showPassengers.php`. Paste the following content into this file:

  ```php
  <!DOCTYPE html>
  <html>
  <body>
  <h2>List of all passengers</h2>
  <p>
      <?php

          //path to the SQLite database file
          $db_file = './myDB/airport.db';

          try {
              //open connection to the airport database file
              $db = new PDO('sqlite:' . $db_file);      // <------ Line 13

              //set errormode to use exceptions
              $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

              //return all passengers, and store the result set
              $query_str = "select * from passengers;";  // <----- Line 19
              $result_set = $db->query($query_str);

              //loop through each tuple in result set and print out the data
              //ssn will be shown in blue (see below)
              foreach($result_set as $tuple) {          // <------ Line 24
                  echo "<font color='blue'>$tuple[ssn]</font> $tuple[f_name] $tuple[m_name] $tuple[l_name]<br/>\n";
              }

              //disconnect from db
              $db = null;
          }
          catch(PDOException $e) {
              die('Exception : '.$e->getMessage());
          }
      ?>

  </p>
  </body>
  </html>
  ```

  - On Line 13, a PHP-PDO object is instantiated. The argument into this constructor a string containing this format protocol:path, where protocol refers to the database-type in use, and path is the path to the airport.db file. After this constructor is executed, the connection to the airport.db database is made. If there is an error (say, the file isn't readable by Apache, or file doesn't exist), then an exception will be thrown and control will jump to the `catch()` clause. The try-catch syntax and behavior is just like Java.

  - On Line 19-20, we run an SQL query that selects every passenger from the database. It stores the results in an array of arrays called `$result_set`. Each item in `$result_set` is a tuple (which is like a HashMap).

  - On Lines 24-26: the `foreach($result_set as $tuple)` loop stores every tuple in the result set in a variable called `$tuple`. It works just like the foreach-loop in Java. Each attribute value of the tuple can then be accessed using the syntax `$tuple[attribute_name]`.

  - Save this file, and call it `showPassengers.php`, then point your browser to it.

  - If everything goes smoothly, you should see an HTML page displaying all passengers' information. Again, you should check the HTML source to see what exactly was printed out.

##### The Apache Configuration File

- The behavior of your Apache web server is defined in its configuration file. On some systems, it is called `httpd.conf`, and on others, it's `apache2.conf`. Find out which one is on your server, and then open it up for reading.

- Locate the apache configuration file, and open it up. You'll notice that any line starting with the `#` symbol is a comment. Read through all the comments for each configuration key and value. You don't have to understand most of them, but I will be asking questions about the important configuration keys later! Note: any change to this config file must be followed by an apache restart for it to take effect.

- To make sure you have a good understanding of the web server, answer the following questions. Most of these answers can be found in the configuration file. You should type out the answers together with your team in a file (You'll be writing a web page with the answers shortly.)

  1. What command can you type into your server's terminal to check if apache is currently running?
  2. Apache implements the HTTP protocol. The protocol is extremely simple, with just a few commands. What is the difference between the `GET`, `POST`, and `HEAD` commands?
  3. What is the difference between `ServerRoot` and `DocumentRoot`?
  4. What port does apache listen to for HTTP connections from browsers by default? Test it out by typing this into your browser: `http://ip_addr:port`, where `ip_addr` is the IP address of your server, and port is the port number given in the configuration file. Try changing the port number to something else. Test it again in your browser, then change it back. The fact that you don't usually need to specify the port when going to a URL should tell you that the default port to access web servers is the one given in the config file.
  5. What file on your server contains apache's traffic logs? What about apache's error logs? These files tend to get very long, with the most recent logged events being appended to the end of the file. On the terminal, how can you view the last few lines of any file?
  6. What is a Directory Index file? Why would it be desirable to have one in each directory?
  7. When the browser tries to access a page that does not exist, the HTTP protocol issues a 404 error code. Try it by navigating to [http://cs.pugetsound.edu/david_is_awesome.html](this non-existent URL). It's sort of a clunky way of telling users a page doesn't exist, right? It's ugly and unhelpful. Now try going to a [http://pugetsound.edu/david_is_awesome.html](different non-existent URL) on our school's website. Notice that, this time, the web server is able to redirect you to a better looking page, and it's also more helpful in providing you links to other existing resources. So, how do you get apache to redirect users to a specified page upon receiving a 404?
  8. How do you give every user on your Linux server their own web space? Enable it now!

#### Part 4: Serving up a Webpage

- It's time to create and serve your first web page! If you completed the previous problems, you should've already enabled public HTML directories for users on your server. Well, you're working under the `dbteam` user, so we'll create a webpage under that account.

- Navigate into the `/home/dbteam/public_html` directory and create a simple HTML page named `index.html`. The content of this page should contain your team-membership list, and responses to the questions listed below. The page itself doesn't have to be anything fancy, but it should have some structure (for instance, an enumerated list?) and design elements (e.g., background color and non-boring font?). The page should also contain at least one (appropriate) image.

  - If you're interested in learning more HTML, here's a free [online tutorial](https://www.internetingishard.com/html-and-css/) I have students use for another course.

- You are required to add some design and colors to your page using appropriate CSS elements (create a separate `.css` file and link to it from your webpage). You don't need to go overboard with design unless you really want to. Also, I'd prefer it if you don't make your page bright pink with green lettering, as some students have done in the past to irritate me. I just want you to demonstrate that you know how to include a CSS stylesheet to your HTML page.

- If it is all done correctly, I should be able to access it by pointing my web browser to `http://ip_addr/~dbteam`, where `ip_addr` is your server's assigned IP address.

#### Part 5: Transferring Files to/from the Server

The instructions asks you to embed an image. You might wonder how to get the image up on the server. More generally, you might wonder how to transfer any file to-and-from the server. I do not recommend you writing code directly on the server anyway, because multiple people working on it remotely could cause you to overwrite each other's changes. It is much safer to develop local copies of your webpage (also serves as backup), then uploading it to the server.

I'll leave this to you to decide, but I think the _preferred_ way would be to install `git` on the server and on your personal machines. Create a github repo work with your team to `push` code and other files to this repo from your computers. When you're ready to "go live," you could then `pull` the code down to your apache servers.Git does require some training if you aren't well-versed in it already. This is a good time to force yourself to learn it.

However, I also understand if you just want to avoid putting more on your plate at the moment. Here are some tools to transfer files to and from the server. Use the same credentials here as you did to ssh to your instance.

- On MacOS/Windows: I like CyberDuck.
- On Windows: WinSCP or FileZilla.
- On Linux/MacOS: Could also just use the `scp` command from your shell.

#### Submission

Go onto [canvas](https://canvas.pugetsound.edu) and submit the URL to your page.

#### Grading

```
This assignment will be graded out of 35 points:

[0pt] The names of your team members are listed.
[24pt] You have created an HTML file with the correct answers to the questions posed. 3pts per question (x 8).
[6pt] The HTML page embeds an image and has some basic structure and CSS design elements.
[5pt] The HTML page is being served up in the ubuntu user's web space.
```
