jQuery(function($$) {
  console.debug('GMail Background Image Size Fixer Hack (boom!)');

  // on DOM ready, check if background image size matches the current
  // viewport. If it does, we're good to go. If it doesn't, make it =)
  var
    w = $$(window), bg = $$('img.ao0'), context = this,
    bgWidth = bg.width(), bgHeight = bg.height(), // grab these initial values for computation later
    w2h = bgHeight / bgWidth, h2w = 1 / w2h;

  // make sure that there is actually a background image
  if(! bg.length) {
    console.warn('no background image detected');
    return;
  }

  var adjustBackground = function(viewport, image) {
    var
      vw          = viewport.width(),
      vh          = viewport.height(),
      iw          = bgWidth,
      ih          = bgHeight,
      scaleWidth  = iw / vw,
      scaleHeight = ih / vh;

    console.debug("adjusting the background image using viewport: " + vw + "x" + vh);
    console.debug("background image has dimensions: " + iw + "x" + ih);

    if(scaleWidth > 1 && scaleHeight > 1) {
      // use the greatest dimension
      if(scaleWidth > scaleHeight) {
        console.debug('scaling height to match viewport: ' + vh);
        image.height(vh).width(vh * h2w);
      }
      else {
        console.debug('scaling width to match viewport: ' + vw);
        image.width(vw).height(vw * w2h);
      }
    }
    else {
      console.debug('background image scale already looks good!');
    }
  };

  // on viewport resize, re-adjust background
  w.resize(function() {
    // for some reason, when the viewport goes below a certain size, gmail
    // loads a new image into the DOM-- this query makes sure we always get it
    bg = $$('img.ao0');
    adjustBackground.call(context, w, bg);
  }).trigger('resize'); // and fire the resize right away =)
});
