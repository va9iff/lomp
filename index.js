window.main = async send => {
	console.log("index:")
	console.log('<A')
	let { Platypus } = await load("./moduleA.js") 
	//~= import { Platypus } from "./moduleA.js"
	console.log('A>')
	console.log("data from A", Platypus)
}
