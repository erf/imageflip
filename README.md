imageflip.js
============

A VERY minimal javascript slideshow library.

# usage
call 'imageflip' given an element, an array of urls, and a time (ms) - which returns an object.

call 'start' on that object with an optional callback function called (with index) each time an image is flipped.

call 'stop' to stop flipping and delete timer.

# example
see 'example/index.html'

# test
run 'mocha'