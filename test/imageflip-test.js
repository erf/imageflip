
describe('imageflip', function(){
	it('should call callback', function(done){
		var imageflip = require('./../imageflip');
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