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
const el = document.getElementById('slideshow')
const urls = [ 'image0.png', 'image1.png', 'image2.png' ]
const time = 1000
imageflip(el, urls, time).start()
</script>
```

# Test
* [mocha](https://mochajs.org): `mocha`
