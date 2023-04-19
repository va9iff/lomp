console.log('A has run')
let currentScript = document.currentScript

setTimeout(function() {console.trace('crrrrrrrrrrrrrrrr', currentScript)}, 1000);

from("./moduleB.js", (script) => {
	let {msg} = script
	console.log("A fun")
	console.log(script)
	script.exports = {
		message: "fasad"
	}
})