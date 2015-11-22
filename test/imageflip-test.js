var imageflip = require('../index');

describe('imageflip', function(){
    it('should call callback', function(done){
        var counter = 0;
        imageflip({}, ['0', '1', '2'], 5, function(i){
            //console.log(i);
            counter += 1;
            if(i===0 && counter===3){
                done();
            }			
        }).start();
    });
});
