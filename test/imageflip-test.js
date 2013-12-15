
describe('imageflip', function(){
	it('should call callback', function(done){
		var imageflip = require('./../imageflip');
		var flip = imageflip({}, ['0', '1', '2'], 5);
		var counter = 0;
		flip.start(function(i){
			//console.log(i);
			counter += 1;
			if(i===0 && counter===3){
				done();
			}			
		});
	});
});