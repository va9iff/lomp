let { send } = document.currentScript

console.log('A has run')
// document.currentScript.main = script => {

// }

let pak = 88

let myVar = "AAA"
console.log(myVar)
setTimeout(()=> {console.log("should be A", myVar)}, 1000);

from("./moduleB.js", arg => {
	console.log("A fun")
	console.log(arg)
	send({
		message: "fasad"
	})
})


console.log(send)
