imageflip
=========

A minimal javascript slideshow library.

# Install
* [npm](http://npmjs.com/): `npm install imageflip`
* [Bower](http://bower.io/): `bower install imageflip`

# Usage
```
<!doctype HTML>
<img id='slideshow' />
<script src="../index.js"></script>
<script>
var urls = [ 'image0.png', 'image1.png', 'image2.png' ];
var el = document.getElementById('slideshow');

imageflip(el, urls, 1000, function(i){
    console.log(i);
}).start();

</script>
```

# Test
Run `mocha`
