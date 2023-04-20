window.main = async send => {
	console.log('A:')
	console.log('<B')
	let maxAge = await load("./moduleB.js") 
	//~= import maxAge from "moduleB.js"
	console.log('B>')
	console.log('data from B', maxAge)

	class Platypus{
		name = "Perry"
		age = maxAge
	}

	send({ Platypus }) //~= export { Platypus }
}