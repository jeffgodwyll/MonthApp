
###File Naming Considerations

HTML file names must not contain spaces or punctuation other than a hyphen, underscore, and period.

The “home page” of a website must always be named “index.html”, and be located at the top level of the Sites folder.

All files, including HTML and media/image files, must have an appropriate suffix, such as .html, .jpg, .gif, .png, .swf, etc.

###CSS

Cascading Style Sheets (CSS) is a set of formatting rules that determine the look and position of HTML elements on a page.

CSS rules are applied to HTML elements based on selectors and declarations.

Selectors determine which HTML element a style should be applied to, such as:

<ul>
<li><b>tags</b>:<code>&lt;p&gt;</code></li>
<li><b>classes</b>: can be applied to any element, such as <code>&lt;span class="boldRed"&gt;</code>. In the CSS, class names begin with a dot, such as <code>.boldRed</code>.</li>
<li><b>IDs</b>:&nbsp;specify a style for a single, unique element, such as <code>&lt;div id="MainContent"&gt;</code>. In the CSS, class names begin with a #, such as <code>#MainContent</code>.</li>
<li><b>pseudo-classes</b>: add custom looks and behaviors to certain selectors.</li>
</ul>


Selectors may also be grouped and nested within each other. Both block level and inline elements can contain any number of classes, and selectors may define certain classes that are only within other classes. Rules can be applied in very complex and powerful ways in both broad and very focused ways.

Declarations consist of a property and a value. The property is the style attribute (like color or margin) that you wish to change. Each property has a value (like “red” or “20px”).


###Common CSS properties:
<ul>
<li>color</li>
<li>text-align</li>
<li>line-height</li>
<li>font-family</li>
<li>font-size</li>
<li>font-style</li>
<li>font-weight</li>
<li>background-color</li>
<li>background-image</li>
<li>background-repeat</li>
<li>list-style-type</li>
<li>margin</li>
<li>padding</li>
<li>border</li>
<li>float</li>
<li>clear</li>
</ul>


<h4>Find more on CSS at:</h4> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">More CSS</a> and at <a href="http://www.w3schools.com/css">StyleSheets</a>


####Three ways of INSERTING CSS into your HTML page
<ul>
	<li>Inline Style</li>
	<li>Internal Style sheet</li>
	<li>External Style sheet</li>
</ul>

###Example
<h1 style="color:red;margin-left:30px;">This is a RED heading because of an inline css</h1>

<h1>All "h4" headings will be blue using this internal css </h1></li>

``<style>h4{color: blue}</style>``

 All lists will be underlined because of an external style sheet
 
``<link rel="stylesheet" href="CSS/3_external_style_sheet.css">``


###Note: 
These methods of inserting <em>items</em> into your HTML page are not limited to only <b>CSS</b>.
<b>Javascript(JS)</b> is often also embedded into HTML pages in the same fashion. Do not be worried if you do see any such additions. They are no different than what you already know.

