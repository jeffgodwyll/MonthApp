Getting Started with Android
============================

[Getting Started With PhoneGap Android Development][1]

This guide describes how to set up your development environment for Cordova (previously android) and run a sample application or the app you've been developing during the monthapp module.

#### Prerequisites

* Setting Up ADT Bundle...
* Setting Up Android Tools...
* Setting Up Cordova...

#### Porting The HTML5 App to Android

* Create `www` directory/folder in assets dir and move or copy project contents there and configure the project to use Cordova/Phonegap Libraries by placing `cordova.jar` in libs directory/folder:

![Assets and Libs][assets-libs]

* Reference `cordova.js` in `index.html` or what you're naming your app's start page:

![Cordova.js][cordova-js]

* Modify `MainActivity.java` file to look like this:

![MainActivity.java][mainactivity-java]

* Configure the project's metadata in AndroidManifest.xml:

![AndroidManifest.xml][manifest-xml]


[1]: http://www.adobe.com/devnet/html5/articles/getting-started-with-phonegap-in-eclipse-for-android.html

[assets-libs]: https://raw.githubusercontent.com/jeffgodwyll/MonthApp/master/week4/%5Bimgs%5Dandroid_phonegap/assest-libs.PNG
[cordova-js]: https://raw.githubusercontent.com/jeffgodwyll/MonthApp/master/week4/%5Bimgs%5Dandroid_phonegap/cordova-js.png
[manifest-xml]: https://raw.githubusercontent.com/jeffgodwyll/MonthApp/master/week4/%5Bimgs%5Dandroid_phonegap/manifest-xml.PNG
[mainactivity-java]: https://raw.githubusercontent.com/jeffgodwyll/MonthApp/master/week4/%5Bimgs%5Dandroid_phonegap/mainactivity-java.PNG