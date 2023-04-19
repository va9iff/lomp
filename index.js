window.lomp = { entries: [], current: 0 }
window.from = (path, fun) => {
	let entry = lomp.entries.find(entry => entry.path == path)
	if (entry) return window.addEventListener("load", e => fun(entry.exports))
	let script = document.createElement("script")
	script.src = path
	lomp.entries.push({ fun, path })
	document.body.appendChild(script)
}
window.send = exports => {
	lomp.entries[lomp.current].exports = exports
	lomp.entries[lomp.current].fun(exports)
	lomp.current++
}

// we have to stack them because of onloads being called after.
from("./moduleA.js", msg => {
	console.log("first from")
	console.log(msg)
	from("./moduleA.js", msg => {
		console.log("second from; modify msg")
		msg.message = "fasadistan"
		console.log(msg)
		from("./moduleB.js", msg => {
			console.log('from b er')
			console.log(msg)
			from("./moduleA.js", msg => {
				console.log("third from")
				console.log(msg)
				from("./moduleB.js", msg => {
					console.log('from b er 2')
					console.log(msg)
				})
			})
		})
	})
})


// just a thing that would make it nicer
from("./moduleA.js", "moduleB.js", (msgA, { msgPropB }) => {
	console.log(msgA.msgPropA)
	console.log(msgPropB)
})


/*
	the problem is with using multiple files.
	there's only 1 relationship.

	what if there's A uses B and B uses C?

	A.js runs. adds B.js (which will add C.js). binds funA (1).
	B.js runs. adds C.js. Binds funB (2). 
	C.js runs.
	document loads.
	funA gets called first cuz it's the one first bound. and that's the problem.
	a way around may be adding them to a list, calling one by one in reverse order.

	I really wanna use promised and async here. */
	let myFun = async ()=>{
		let msg = await from("./moduleA.js")
		console.log(msg)
	}
	// myFun()
/*
	adds moduleA.js and everything else is the same. but instead of adding the 
	function as the event listener, it adds a function whcih will resolve the 
	promise on load. but let's add a logic to resolve in the correct order.

	but when 2 awaits used, it won't work since the second await is never 
	encountered as we're waiting for first one to resolve.
	the first one resolves on document load.
	so the second from() can be run after the document load which was going to 
	add another script and a listener to resolve with the order.

	or maybe it's just another session.
	A imports B imports C is a full session and ends on document load.
	D imports K right after A is another.
	it will run after ABC ends and will perform exact same (I wish)

	for triggering, we can use something different than onload if ti won't 
	work after the first load.
	send() may trigger it. from() may only add scripts and resolvers or idk.
*/