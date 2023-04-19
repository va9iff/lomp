console.log('A has run')
// document.currentScript.main = script => {

// }

let send = document.currentScript.send

from("./moduleB.js", arg => {
	console.log("A fun")
	console.log(arg)
	send({
		message: "fasad"
	})
})

