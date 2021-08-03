<?php
/** lab config */
require("../course_cfg.php");
require("lab_cfg.php");
require($cfg['includes_dir']."/course_lab_header.php");
require($cfg['includes_dir']."/highlight.php");
?>

<h3>Overview</h3>
<p>
In this lab, we'll be playing with a <code>Turtle</code> class and making
sophisticated drawings, all requiring loops.
</p>
<p>
  This lab should be completed in pairs.
</p>

<h3>Objectives</h3>
<ul>
	<li>To practice with loops</li>
	<li>More practice with conditionals and booleans</li>
</ul>

<h3>Required Files</h3>
The following file(s) have been provided for this lab.
<ul>
<li><a href="Lab6_TurtleDrawer.zip">Lab6_TurtleDrawer.zip</a></li>
</ul>

<h3>Helpful APIs</h3>
The APIs that you'll want to have in front of you include:
<ul>
  <li><a target="_new" href="../notes/RandomAPI.pdf">Random</a></li>
  <li><a target="_new" href="../notes/TurtleAPI.pdf">Turtle</a></li>
</ul>

<h3>Instructions</h3>
<p>
Download the BlueJ project from the above link. After you unzip it into your working directory,
navigate into the <code>Lab6_TurtleDrawer</code> folder. Inside, you will see a single
<code>Turtle</code> class.
</p>

<h3>Preliminary</h3>
<p>
Do not skip over this section. Here, we will set up a skeleton of the <code>TurtleDrawer</code>
class.
</p>
<ol>
	<li>
	<p>
	All code for this lab should be written in the TurtleDrawer class. Do not make changes
	to the Turtle class.
	</p>
	</li>
	<li>
	<p>
	Before we begin, you may want to familiarize
	yourselves with the <code>Turtle</code> class by creating an object on the workbench and
	playing with its methods.
	<!--
	Notice a couple new methods for this class:
	<ul>
		<li><code>public setLocation(int x, int y)</code>: Teleports the Turtle to the specified coordinates</li>
	</ul>
	-->
	</p>
	</li>
	<li>
	<p>
	Create a new class, called <code>TurtleDrawer</code>, with the following requirements:
	<ul>
		<li>It has one field: a <code>Turtle</code> object named <code>pen</code>.</li>
		<li>It has a default constructor
			that first instantiates <code>pen</code>, then sets the pen's color to
			black, and lowers the pen for drawing.
		</li>
	</ul>
	</p>
	</li>

	<li>
	<p>
	Let's write a quick-and-dirty method to test out the turtle. Let's name it <code>drawTriangle</code>. It returns
	nothing, but takes a <code>double sideLength</code> as input. Your code should navigate the <code>pen</code>
	to draw an equilateral triangle, <i>i.e.</i>, same length on all sides (see below).
	<center><img src="figures/triangle.png" width="150px" /></center>
	</p>
	<p>
	There are a couple things to consider before you plunge into writing the code:
	<ul>
		<li><p>Notice that when the turtle is instantiated, it initially faces east.</p></li>
		<li><p>Observe how the angles are all 60 degrees within an equilateral triangle. Once a 
			side is drawn, you then want to turn your turtle left to prepare
			drawing the next side. But how many degrees do you need to turn?
		    </p>
		</li> 
		<li>
		<p>
			<b>Even better:</b> Is there a relationship between the degrees-turn you always need to make
			and the number of sides in this shape (three)? Answering this now will makes your life 
			easier later.
			(Hint: The turtle always faces the same direction before
			and after the polygon is drawn. How many degrees must it have turned during its traversal?) 
		</p>
		</li>
		<li>
		<p>
		Because a triangle is easy to draw, it may be tempting to write this method <i>without loops</i>,
		like the code that's given below. <b>Read through it, and make sure you understand the code!</b>
		<pre><?php echo highlightIt('code/drawTriangle.java', 'java', true); ?></pre>
		That's no fun, but it <i>does</i> reveal the code's <b>repetitive structure</b>. 
		The code segments on lines 7-8, 11-12, 15-16 are exactly the same, and belongs
		in a <b>loop</b> that iterates exactly three times <i>(Hey, that's the number of edges for -this-
		particular shape...)</i>.
		</p>
		</li>
	</ul>

	<li>
	<p>
	<b>Your task</b> is to rewrite this method using a loop to replace the above redundant code segments.
	You can use either a while-loop or a for-loop to get the job done (they are equal in power).
	The following code samples, for example, both iterate <code>n</code> times, for any <code>n</code>
	that is greater than or equal to zero. Recall that for-loops are generally used for counter-controlled
	loops, and while-loops are used for sentinel or event-controlled loops.
	<pre><?php echo highlightIt('code/whileloop.java'); ?></pre>
	<pre><?php echo highlightIt('code/forloop.java'); ?></pre><br/>
	</p>
	</li>
	<li>
	<p>
	Check in with us when you're done, to make sure your loop is working fine!
	</p>
	</li>
</ol>

<h3>Part 1: Polygons and Refactoring</h3>
<p>
Triangles are cool and all, but our <code>TurtleDrawer</code> class should be made general.
What we mean by <i>general</i> is that, writing a method just to draw a single shape doesn't make a whole
lot of sense. If we needed to write new methods just to draw a square 
(4 sides), a pentagon (5 sides), hexagon (6 sides), <i>etc.</i>, 
then when would we ever stop writing methods?! Being the good computer scientists that you are, you
recall the concept <i>abstraction</i>...
</p>
<p>
This time our old pal <b>abstraction</b> is used in the context of method design.
A much better alternative would be to write a <i>single method</i> that inputs, 
along with the <code>sideLength</code>, the number of sides, <code>numSides</code>, and a pen color <code>color</code> 
for the polygon you wish to draw.
</p>
<ol>
	<li>
	<p>
		Name this new method <code>drawPolygon</code>, and again, before you dive into the code, think about 
		what needs to be done to generalize the <code>drawTriangle</code> method you wrote to draw any polygon
		with an arbitrary number of sides.
	</p>
	</li>
	<li>
	<p>
		If <code>numSides</code> is entered as less than three, then this method should do nothing.
	</p>
	</li>
	<li>
	<p>
		If you didn't answer the question on the <b>Preliminary Section</b> about how much to turn the Turtle by
		after each edge is drawn, you need to do so now. To help you through this process, draw several
		polygons on a piece of paper. Start with triangle (3-sides) again, then try a square (4-sides),
		pentagon (5-sides), and so on, until it becomes obvious what the relationship between the
		number of sides vs. how much to turn by.
	</p>
	</li>
	<li>
	<p>
		Now you're ready to write your method. Remember to write-a-little, test, write-a-little, test.
		When you're done, make sure it works on multiple inputs. For instance, here's what the following
		method calls should draw:
	</p>
	<table width="100%">
	<tr>
	<td align="center" width="33%">
	(1) <code>drawPolygon(150, 4, "black");</code><br/>
	<img border="1" width="200" src="figures/lab6_turtle_4sides.png"/>
	</td>
	<td align="center" width="33%">
	(2) <code>drawPolygon(150, 5, "black");</code><br/>
	<img border="1" width="200" src="figures/lab6_turtle_5sides.png"/>
	</td>
	<td align="center" width="33%">
	(3) <code>drawPolygon(150, 6, "black");</code><br/>
	<img border="1" width="200" src="figures/lab6_turtle_6sides.png"/>
	</td>
	</tr>
	</table>
	<p>
	It is not an illusion that the shapes get larger with these calls,
	because we're not changing the <code>sideLength</code>, but we're increasing
	the number of sides. <u>Furthermore</u> note as the number of edges increases while
	decreasing <code>sideLength</code>, the shape looks more and more like a circle.
	</p>
	</li>
	<li>
	<p>
	<b><u>Important (read this)! Refactoring</u></b>: The correct implementation of <code>drawPolygon</code> renders 
	<code>drawTriangle</code> a bit <i>useless</i>, doesn't it, since it can be used to draw a triangle, among any other polygon.
	Indeed, you can
	now replace the entire body of the <code>drawTriangle</code> method with a single line
	of code <code>drawPolygon(sideLength, 3, "black");</code> and you should do so now. Make sure you understand why this works.
	</p>
	<p>What we just did is called <b>refactoring</b>, that is, taking the existing code-base, 
	and improving its design. You might 
	wonder why we even kept <code>drawTriangle</code> around, instead of removing it altogether.
	Consider this 
	real-world scenario: Suppose thousands of users are currently using the old version of the <code>TurtleDrawer</code> class.
	Today, we decide to refactor the code and push a new and improved version 
	to the public. If we removed <code>drawTriangle</code> completely, and insisted that
	everyone switch to using <code>drawPolygon</code>, then everyone's code which made
	calls to <code>drawTriangle</code> is now broken. <i>Not a very effective upgrade, is it?</i>
	</p>
	<p>
	So, by keeping <code>drawTriangle</code> around, we ensure that our new upgrade
	is <b>backward-compatible</b>. We might warn the user the <code>drawTriangle</code> is now
	<b>deprecated</b>, and might be removed in future versions of our code. This makes for a much
	smoother migration.
	</p>
	</li>
	<li>
	<p>
	Check in with us when you're done.
	</p>
	</li>
</ol>

<h3>Part 2: Zigzags</h3>
<p>
	In this section, we'll make a method that draws zigzags.
</p>
<ol>
	<li>
	<p>
	<b>Zigzags</b>: It turns out that these cool lines don't just make for great sweatpants and haircut patterns. 
	Zigzags are also great ways for us to teach loops.
	Make a new method, called <code>drawZigzag</code>, that takes as input
        two <code>double</code> arguments. The first argument is <code>length</code>, which specifies the length of
        the zigzag line to be drawn. The second argument <code>width</code>, which serves as both
	the width and the zigzagging interval (see below for illustration). In addition, it should take as input
	two <code>String</code> arguments: <code>zigColor</code> and <code>zagColor</code>.
	<center>
	<code>drawZigzag(400, 50, "green", "blue");</code><br/>
	<img src="figures/lab6_turtle_zigzag.png" width="350px" border="1" style="background-color: white;" /></center>
	</p>
	</li>
	<li>
	<p>
	Things worth considering:
	<ul>
		<li><p>For convenience, let's call the lines that move vertically along the <code>width</code> a <b>zig line</b>, and the longer lines that sweep back across a <b>zag line</b></p></li>
		<li><p>In the picture above, the turtle was initially facing east. Therefore, when I call this method, I expect that the zigzag will be drawn horizontally, and to the east. But notice how the first zig-line is actually vertical.</p></li>
		<li><p>Next, you need to determine the length of the zag-lines, as well as the angle of your turns. (Hint: These sawtooth shapes sure remind me of <a target="_new" href="http://mathworld.wolfram.com/PythagoreanTheorem.html">right triangles</a>)</p></li>
		<li><p>Think about the loop condition, which is related to how much you should draw per iteration. A single zig-line plus zag-line combination (looks like a tooth) appears to be the minimally repeated pattern.</p></li>
		<li><p>Make sure your ziglines and zaglines are alternating colors.</p></li>
		<li><p>Finally, if the width is larger than the length, you should draw nothing.</p></li>
	</ul>
	</p>
	</li>
	<li>
	<p>
	Check in with us when you're done.
	</p>
	</li>
</ol>



<h3>Part 3: Grids</h3>
<ol>
	<li>
	<p>
	You can use the method you just implemented to draw a grid. Think of an $H\times W$ grid as having
	$W$ cells across (number of columns) by $H$ cells vertically (number of rows).
	</p>
	</li>
	<li>
	Write a method called <code>drawGrid(int numRows, int numCols, double cellSize, String color)</code>
	that inputs the number of rows, columns, a cell size, and a color, respectively.
		<ul>
		<li><p>You will need a nested loop of degree 2 (i.e., a loop inside another loop) for this exercise.</p></li>
		<li><p>
			I would first ignore the number of rows to draw and focus on drawing
			just one row: This loop should 
			draw <code>numCols</code> cells (of cellSize length) neighboring to each other.
			Try inputting different values for <code>numCols</code> and <code>cellSize</code>
			to convince yourself that this loop works as intended.
		    </p>
		</li>
		<li><p>
			Now you just need to focus on stacking <code>numRows</code> of these rows on top
			of one another. You'll therefore need to <i>nest</i> the previous loop inside this loop.
			Everytime a row is drawn, you need to reset the turtle's position to draw the next row 
			in place.
		    </p>
		</li>
		<li><p>
			Take a look at the video below, which calls <code>drawGrid(5,6,40,"blue");</code>
		    </p>
		</li>
		</ul>
		<video width="620" controls loop>
                  <source src="figures/drawGrid.mp4" type="video/mp4">
                  Your browser does not support the video tag.
               	</video>
	</li>
</ol>


<!--
<h3>Part 3: Dashed Line</h3>
<ol>
	<li>
	<p>
	<b>Dashed Lines</b>: All the drawings so far have used solid lines. 
	This method will draw dashed lines,
	like the one shown below. Name this method <code>drawDashedLine</code>, that takes as input
	two double arguments and a String. The first argument is <code>length</code>, which specifies the length of
	the dashed line to be drawn. The second argument is <code>dashLength</code>, which is the length
	of each dash interval (see below for illustration). The final parameter is the color of the dashed line.
	<center><img src="figures/lab6_turtle_dash.png" width="400px" border="1" /></center>
	</p>
	<p>
	To build intuition, try coding this up sequentially (without loops) to
	reveal the repetitive structure. There are 
	a couple things worth noting:
	<ul>
		<li><p>Think about the loop condition. When do you stop the <i>pen-up/down-move-forward</i> cycle?</p></li>
		<li><p>In each loop iteration, you should draw either a dash or simply move the turtle forward without drawing (that is, don't do both inside each iteration).</p></li>
		<li><p>Each dash or invisible-dash movement is repetitive, but how do know when to put the pen down/up? Notice that this action alternates... sounds like we want to do something on the <b>odd iterations</b> of the loop, and do something else on the <b>even iterations</b> of the loop. There's got to be an easy way to check if a number is even or odd, isn't there?</p></li>
		<li><p>If the <code>dashLength</code> is input as a zero or negative number, you should draw a solid line.</p></li>
	</ul>
	</p>
	</li>
</ol>
-->

<h3>Part 3: Making Pretty Patterns</h3>
<p>
It's amazing how many cool patterns we can now draw with just the <code>drawPolygon</code>
and <code>drawZigzag</code> method implemented. Your task is to create your very own pattern by
combining loops and those previous methods you wrote. 
</p>

<h4>Creating Your Own Pattern</h4>
<ol>
	<li>
	<p>
	You are <b>not</b> required to draw the pattern below, but use it as inspiration. Check out this nested polygon we made 
	through repeated calls to <code>drawPolygon</code>.<br/>
	<center><img src="figures/lab6_turtle_polyPattern.png" width="200px" border="1" /></center><br/>
	The algorithm is surprisingly simple. This pattern contains five nested polygons, each one is 20% smaller than 
	the polygon surrounding it.
	Here's the idea: To create this pattern, we'll first draw a polygon with <code>sideLength</code>-long
	edges. After the first one is complete, the <code>sideLength</code> should be shrunken by 20%.
	Repeat this process five times. Each time through the loop, check if you're in an odd iteration, or an even
	iteration. Depending on this check, set the pen's color to either blue or red.
	</p>
	</li>
	<li>
	<p>
	Return to the source code, and create a new
	method called <code>drawMyPattern</code>, which returns and inputs nothing.
	Your task is to create a new pattern by repeatedly calling the methods we've written.
	Your method should conform to the following criteria:
	</p>
	<ul>
		<li>
		<p>
		You must use a nested loop of degree of <i>at least</i> 2. (My example
		above does not require a nested loop.)
		</p>
		</li>
		<li>
		<p>
		You must incorporate <i>at least</i> two colors.
		</p>
		</li>
	</ul>
	</li>
    	<li>
	<p>
	You are encouraged to be creative, but to give you some ideas on expectations,
	here are some patterns of sufficient difficulty that you can make:
	<ul>
		<li>
		<p>
		Nested polygons like the one shown above, except you ask the user
		for the number of polygons you need to nest (then compute the shrinkage factor).
		Create a method that returns a random color and use it.
		</p>
		</li>
		<li>
		<p>
		A wall (several rows or columns) of zigzags, 
		changing colors every row or column.
		</p>
		</li>
	</ul>
	
        </p>
	</li>
</ol>


<!--
        <h3>Grading</h3>
        <p>This assignment will be graded out of 20 points.</p>
        <ul>
          <li class="header"><b>TurtleDrawer (18pt)</b></li>
          <li>[1pt] Your TurtleDrawer class has appropriate field(s)</li>
          <li>[2pt] Your TurtleDrawer has an appropriate constructor (that meets the requirements)</li>
          <li>[1pt] Your TurtleDrawer includes a drawTriangle() method with an appropriate signature</li>
          <li>[1pt] Your drawTriangle() method uses the drawPolygon() method</li>
          <li>[1pt] Your TurtleDrawer includes a drawPolygon() method with an appropriate signature</li>
          <li>[2pt] Your drawPolygon() method can draw a regular polygon of the given size</li>
          <li>[1pt] drawPolygon() doesn't try to draw shapes with less than 3 sides</li>
          <li>[1pt] Your TurtleDrawer includes a drawZigzag() method with an appropriate signature</li>
          <li>[2pt] Your drawZigzag() method draws a zigzag</li>
          <li>[2pt] Your drawn zig and zag lines are different colors (as specified by the parameter)</li>
          <li>[1pt] Your TurtleDrawer includes a drawPattern() method with an appropriate signature</li>
          <li>[2pt] Your pattern includes at least one loop</li>
          <li>[1pt] Your pattern includes at least two colors</li>
          <li class="header"><b>Style &amp; Documentation (2pt)</b></li>
          <li>[1pt] Your code is properly formatted (indentation, etc) and methods/variables are properly named</i></li>
          <li>[1pt] Each of your methods includes a method comment explaining what it does and what its parameters are</li>
        </ul>
-->
<?php
require($cfg['includes_dir']."/course_lab_footer.php");
?>
