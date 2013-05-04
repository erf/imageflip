imageflip
=========

minimal javascript slideshow

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
var img = document.getElementById('slideshow');
new ImageFlip(img, urls).start();
```
