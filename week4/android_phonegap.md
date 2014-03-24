Getting Started with Android
============================

[Getting Started With PhoneGap Android Development][1]

This guide describes how to set up your development environment for Cordova (previously android) and run a sample application or the app you've been developing during the monthapp module.

#### Prerequisites

* Setting Up ADT Bundle...
* Setting Up Android Tools...
* Setting Up Cordova...

#### Porting The HTML5 App to Android

* Create `www` directory/folder in assets dir and move or copy project contents there.

* Configure the project to use Cordova/Phonegap Libraries by placing `cordova.jar` in libs directory/folder.

![Assets and Libs][assets-libs]

* Reference `cordova.js` in `index.html` or what you're naming your app's start page.


* Configure the project's metadata in AndroidManifest.xml.


[1]: http://www.adobe.com/devnet/html5/articles/getting-started-with-phonegap-in-eclipse-for-android.html

[assets-lib]: ..[imgs]android_phonegap/asset-libs.png "Assets and Libs"
