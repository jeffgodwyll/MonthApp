

<p>This tutorial has been culled from a plethora of sources.</p>

##Media Queries
One of the most important features of style sheets is that they specify how a document is to be presented on different media: on the screen, on paper, with a speech synthesizer, with a braille device, etc.

Certain CSS properties are only designed for certain media (e.g., the 'page-break-before' property only applies to paged media). On occasion, however, style sheets for different media types may share a property, but require different values for that property. For example, the 'font-size' property is useful both for screen and print media. The two media types are different enough to require different values for the common property; a document will typically need a larger font on a computer screen than on paper. Therefore, it is necessary to express that a style sheet, or a section of a style sheet, applies to certain media types.

##Recognised media types
The names chosen for CSS media types reflect target devices for which the relevant properties make sense. In the following list of CSS media types the names of media types are normative, but the descriptions are informative. Likewise, the "Media" field in the description of each property is informative.

<b>all</b>-
Suitable for all devices. <br>
<b>braille</b>-
Intended for braille tactile feedback devices. <br>
<b>embossed</b>-
Intended for paged braille printers. <br>
<b>handheld</b>-
Intended for handheld devices (typically small screen, limited bandwidth). <br>
<b>print</b>-
Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on paged media for information about formatting issues that are specific to paged media. <br>
<b>projection</b>-
Intended for projected presentations, for example projectors. Please consult the section on paged media for information about formatting issues that are specific to paged media. <br>
<b>screen</b>-
Intended primarily for color computer screens. <br>
<b>speech</b>-
Intended for speech synthesizers. Note: CSS2 had a similar media type called 'aural' for this purpose. See the appendix on aural style sheets for details. <br>
<b>tty</b>-
Intended for media using a fixed-pitch character grid (such as teletypes, terminals, or portable devices with limited display capabilities). Authors should not use pixel units with the "tty" media type. <br>
<b>tv</b>-
Intended for television-type devices (low resolution, color, limited-scrollability screens, sound available).
Media type names are case-insensitive. <br><br>

Media types are mutually exclusive in the sense that a user agent can only support one media type when rendering a document. However, user agents may use different media types on different canvases. For example, a document may (simultaneously) be shown in 'screen' mode on one canvas and 'print' mode on another canvas.
	
``<link rel="stylesheet" media="print" href="printer.css">``

This would target print devices and provide specific styling for the page content when it is printed. CSS3 takes the idea of media types one step further and enhances their functionality with media queries. Media queries extend the usefulness of media types by allowing more precise labeling of style sheets. This enables the content's presentation to be customized to a specific range of output devices without having to change the content itself. Sounds perfect for an existing layout that needs modifying!

You can use media queries in the media attribute of your external stylesheets to target screen width, device width, orientation, etc
	

##Targetting Screen Sizes

``<link rel="stylesheet"
  media="handheld, only screen and (max-device-width: 320px)" href="phone.css">``

  In the above example, phone.css would apply to devices that the browser considers "handheld" or devices with screens <= 320px wide.Prefixing a media queries with the "only" keyword will cause non CSS3-compliant browsers to ignore the rule. 
  
 The following would target screen sizes between 641px and 800px:   

``<link rel="stylesheet"
  media="only screen and (min-width: 641px) and (max-width: 800px)" href="ipad.css">``
  
 
Media queries can also appear within inline ``<style>`` tags. The following targets all media types when in a portrait orientation:
``<style> @media only all and (orientation: portrait) { ... }>``
	
##Mobile Meta Tags

Mobile WebKit supports a few goodies that give users a better browsing experience on certain devices.

###Viewport Settings
The first meta setting (and one that you'll use most often) is the viewport property. Setting a viewport tells the browser how content should fit on the device's screen and informs the browser that the site is optimized for mobile. For example:

``<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">``

tells the browser to set the viewport to the width of the device with an initial scale of 1. This example also allows zooming, something that may be desirable for a web site but not a web app. We could prevent zooming with <b>user-scalable=no</b> or cap the scaling to a certain level:

``<meta name=viewport content="width=device-width, initial-scale=1.0, minimum-scale=0.5 maximum-scale=1.0">``

<b> Note:</b> width can also take a pixel value. Setting width=320 would achieve the same result as width=device-width on the iPhone and a few other smart phones. Keep in mind not all phones have this exact width, so it's best to stick with device-width and let the browser figure out the rest. Android extends the viewport meta tag by allowing developers to to specify which screen resolution the site has been developed for:

``<meta name="viewport" content="target-densitydpi=device-dpi">``

Possible values for <b>target-densitydpi</b> are <b>device-dpi</b>, <b>high-dpi</b>, <b>medium-dpi</b>, <b>low-dpi</b>.

If you want to modify your web page for different screen densities, use the -webkit-device-pixel-ratio CSS media query and/or the window.devicePixelRatio property in JavaScript, then set the target-densitydpi meta property to device-dpi. This stops Android from performing scaling in your web page and allows you to make the necessary adjustments for each density, via CSS and JavaScript.</p>

<p>Google is your friend. You need more, you read more.</p>

<p>Visit <a href="http://learn.shayhowe.com/html-css/building-your-first-web-page/">this site</a>" for more detailed explanations.</p>
	
