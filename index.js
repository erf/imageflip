"use strict"

function imageflip(el, urls, t, cb) {

	let id, i = 0, o = {}

	o.start = () => {
		i = 0
		el.src = urls[i]

		if(id) { 
			clearTimeout(id) 
		}

		id = setInterval(() => {
			i = (i + 1) % urls.length
			el.src = urls[i] + '?v=' + Date.now()
			if(cb) { 
				cb(i)
			}
		}, t)
	}

	o.stop = () => {
		clearTimeout(id)
		id = null
	}

	return o
}

if(typeof module !== "undefined") {
	module.exports = imageflip
}

