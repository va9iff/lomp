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

from("./moduleA.js", msg => {
	console.log("first from")
	console.log(msg)
})

from("./moduleA.js", msg => {
	console.log("second from; modify msg")
	msg.message = "fasadistan"
	console.log(msg)
})
from("./moduleB.js", msg => {
	console.log('from b er')
	console.log(msg)
})
from("./moduleA.js", msg => {
	console.log("third from")
	console.log(msg)
})
from("./moduleB.js", msg => {
	console.log('from b er 2')
	console.log(msg)
})
