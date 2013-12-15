imageflip.js
============

A VERY minimal javascript slideshow library.

# usage
just call 'imageflip' with an element, an array of image urls, and a time in ms for updates, which returns an object.

call start on that object with an optinal callback function each time flip is called with returned current index.

call stop to stop flipping and delete timer.

# example
see 'example/index.html'

# test
run 'mocha'