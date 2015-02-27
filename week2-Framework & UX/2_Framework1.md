##So what is a Framework?


A software framework, in computer programming, is an abstraction in which common code providing generic functionality can be selectively overridden or specialized by user code providing specific functionality. Frameworks are a special case of software libraries in that they are reusable abstractions of code wrapped in a well-defined Application programming interface (API), yet they contain some key distinguishing features that separate them from normal libraries.

Blah blah blah!

Simply put:

A framework is something that usually forces a certain way of implementing a solution. Champions a particular programming paradigm. Look at a framework as a sort of scaffold. An already built structure one can model around.

Ask yourself:There are multiple solutions for every problem in web development. Do you develop your own solution or do you try to implement someone else’s? Or should you do a bit of both?

Frameworks make your life easier by simplifying complex problems so you can focus on finishing your project. Simply import a framework and take advantage of your new tools!

So here we go, importing our first one. <em>jQueryMobile</em>.



###jQueryMobile
jQuery Mobile framework takes the "write less, do more" mantra to the next level: Instead of writing unique applications for each mobile device or OS, the jQuery mobile framework allows you to design a single highly-branded responsive web site or application that will work on all popular smartphone, tablet, and desktop platforms.

Once you get the hang of jQuery, jQuery mobile should be a breeze.

###Getting started

	<!doctype html>
		<html>
			<head>
   			 <title>My Page</title>
    		 <meta name="viewport" content="width=device-width, initial-scale=1">
           <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css">
   			 <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
   			 <script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
			</head>
	<body>
	    <div data-role="page">
	 
	        <div data-role="header">
	            <h1>My Title</h1>
	        </div><!-- /header -->
	 
	        <div data-role="content">
	            <p>Hello world</p>
	        </div><!-- /content -->
	 
	        <div data-role="footer">
	            <h4>My Footer</h4>
	        </div><!-- /footer -->
	 
	    </div><!-- /page -->
	</body>
	</html>
	
	
The code above is the most basic of all single page apps using jquery mobile. You can copy this code to begin your project.

As usual resources are available, we risk not inventing the wheel.

####Resources

1. There is no better place than from the source: <a href="http://demos.jquerymobile.com/1.4.5/">jQueryMobile</a>
2. This is a nicely built single page app theme around jQueryMobile. <a href="http://nativedroid.godesign.ch/">NativeDroid</a>. Remember, this theme is free to use,as long as you keep the theme link in your project. You are free to give a $15 donation to the developer : Raphael Wildhaber . Check out the link to the source.



