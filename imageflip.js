function imageflip(p_el, p_urls, p_time){

    var id, i,
        time = p_time || 2500,
        urls = p_urls,
        el = p_el;

    return {

        start: function () {
            i = 0;
            el.src = urls[i];

            if(id) {
                clearTimeout(id);
            }

            function flip(){
                i = (i+1) % urls.length;
                el.src = urls[i] + '?v=' + new Date().getTime();   // http://goo.gl/QtnmT
            }

            id = setInterval(flip, time);
        }
    }
}