<pre>

		<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<title></title>
			<link rel="stylesheet" href="">
		</head>
	<body>
	
	</body>

	</html>


</pre>



Breakdown
=========

The above code is the definition of an html5 document. The following is my attempt to breakdown the code into understandable morsels.

<pre>&lt!DOCTYPE html&gt</pre>

The above is simply the standard defining html5 documents. It is the first thing which should be present in an HTML5 document. Not case sensitive in anyway.

As soon a browser finds this keyword/tag in the starting of an HTML document, it represents the document in standard mode. If you don't use doctype in the starting of an HTML document, browser goes to the quirky mode. In that case, you may find that certain content is not being displayed the way you marked them up. So, it is a good practice to start your HTML document with a doctype. 

Even if you don't use any other new HTML5 tag or feature, since the browser goes to the standard mode, you can use the doctype of html5

<pre>&lthtml&gt and &lt/html&gt </pre>

These are the boundaries of the html document. These tags begin and end the html5 document. All other code falls within.

<pre>&lthead&gt and &lt/head&gt</pre>

The head of the document. All tags here, except the "title tag" are not visible to the human.

<pre>&ltmeta&gt</pre>

Meta tags: Meta elements are tags used in HTML or XHTML documents to provide structured metadata about a Web page. They are part of a web page's head section. Multiple Meta elements with different attributes can be used on the same page

<pre>&lttitle&gt</pre>

The title of this document

<pre>&ltlink&gt</pre>
A link tag, to link external style sheets or rather a method of calling external sheets that contain styling rules into your page.

<pre>&ltbody&gt and &lt/body&gt</pre>

The body tag, both opening and closing, anything between the body tag is visible to the human eye. This is where all your visible content goes.

