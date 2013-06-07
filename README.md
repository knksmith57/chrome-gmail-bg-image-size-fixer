GMail Background Image Size Fixer
=================================

Is your gmail background image size being set to some huge value, causing your eyes pain and making you hate life?
Me too. I don't know why this started happening, but it drove me crazy enough to build this hack.

## Quick Start

```
git clone git://github.com/knksmith57/chrome-gmail-bg-image-size-fixer.git
cd chrome-gmail-bg-image-size-fixer && npm install
grunt
```

After the clone, we call `npm install` to grab all the dependencies needed for the [grunt][1] build.
You can check out the `Gruntfile.js` if you'd like, but [it's pretty basic][2]; just some concatenation / uglification.


## Loading into Chrome

After running `grunt`, the tidied up extension files will be dropped into the `dist` directory. Make note of where this is,
then hop into chrome and load up `chrome://extensions` and do the following:

1. ✔ **Developer Mode** in the top right corner
2. Click on **Load unpacked extension**
3. Select the `dist` directory

By the way, these directions are verbatim from the [Chrome Getting Started][3] page.


## Contributing

Pull requests are always welcome, or you can get at me with any suggestions --> [@knksmith57][4].
_Disclaimer: This is my **first ever** chrome extension. It's probably **the** worst way to build this sort of tweak_


[1]: http://gruntjs.com/
[2]: https://github.com/knksmith57/chrome-gmail-bg-image-size-fixer/blob/master/Gruntfile.js
[3]: http://developer.chrome.com/extensions/getstarted.html#unpacked
[4]: http://twitter.com/knksmith57
