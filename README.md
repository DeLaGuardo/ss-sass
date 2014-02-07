# SASS (CSS) wrapper for SocketStream 0.3

Allows you to use [sass](http://sass-lang.com) files (.sass/.scss) in your SocketStream project.


### Instructions

Add `ss-sass` to your application's `package.json` file and then add this line to app.js:

    ss.client.formatters.add(require('ss-sass'));

