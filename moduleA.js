console.log('A has run')
// document.currentScript.main = script => {

// }

from("./moduleB.js", arg => {
	console.log("A fun")
	console.log(arg)
})

document.currentScript.send({
	message: "fasad"
})
