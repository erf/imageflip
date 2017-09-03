const imageflip = require('../index')

describe('imageflip', () => {
	it('should call callback', done => {
		let counter = 0
		imageflip({}, ['0', '1', '2'], 5, i => {
			counter += 1
			if(i===0 && counter===3){
				done()
			}			
		}).start()
	})
})
