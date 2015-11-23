imageflip
=========

A minimal javascript slideshow library.

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
