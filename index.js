window.main = async send => {
	console.log('<A')
	let { message } = await load("./moduleA.js")
	console.log('A>')
	console.log("index fun")
	console.log(message)
}
