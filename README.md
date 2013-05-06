ImageFlip.JS
============

A VERY minimal javascript slideshow library.

# example

```html
<html>
<body> 
<img id='slideshow' />
</body>    
</html>
```

```javascript
var urls = [
    '/images/image0.png',
    '/images/image1.png',
    '/images/image2.png'
];
var el = document.getElementById('slideshow');
new ImageFlip(el, urls, 2500).start();
```
