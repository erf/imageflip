imageflip
=========

minimal javascript slideshow

# example usage

<html>
<body>

<img id='slideshow' alt='' />

<script>

var urls = [
    '/images/image0.png',
    '/images/image1.png',
    '/images/image2.png'
];

var img = document.getElementById('slideshow');

new ImageFlip(img, urls).start();

</script>

</body>
</html>