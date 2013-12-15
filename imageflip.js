function imageflip(el, urls, t){

    var id, i, t = t || 2500, o = {};

    o.start = function (cb) {
        i = 0;
        el.src = urls[i];

        if(id) { 
            clearTimeout(id); 
        }

        function flip(){
            i = (i+1) % urls.length;
            el.src = urls[i] + '?v=' + new Date().getTime();   // http://goo.gl/QtnmT            
            if(cb) { 
                cb(i); 
            }
        }

        id = setInterval(flip, t);
    };

    o.stop = function(){
        clearTimeout(id);
        id = null;
    }

    return o;
}

if(module){
    module.exports = imageflip;
}