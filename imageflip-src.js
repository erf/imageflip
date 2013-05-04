function ImageFlip(img_p, urls_p, time_p){

    var t;
    var i = 0;
    var time = time_p || 2500;
    var urls = urls_p;
    var img = img_p;
    img.src = urls[0];

    function flip() {
        i = (i+1) % urls.length;
        // http://www.ultramegatech.com/2008/12/reloading-images-using-javascript/
        img.src = urls[i] + '?v=' + new Date().getTime();
    }

    function start() {

        if(t) {
            clearTimeout(t);
        }

        t = setInterval(flip, time);
    }

    return {
        start: start
    }
}
