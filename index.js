let maxAt = (max=1, c=0) => () => c++ < max
let unique = ((c=0) => ()=> `u${c++}`)()

// console.log(document.currentScript)
window.m = maxAt(30)

// window.addEventListener("load", e=> document.body.innerText = document.body.innerHTML.replaceAll('</', '\n</'))

function loadScript(path) {
	let script = document.createElement("script")
	script.src = path
	document.body.appendChild(script)
	return script
}

window.pendings = []
window.loaded = {}
window.current = 0

window.addEventListener("load", e => {
	// window.loaded.reverse().map(entry=>entry.fun(entry.exports))
})

window.from = (path, fun) => {
	// let entry = window.pendings.find(entry => entry.path == path)
	window.pendings.push({fun, path})
	// if (entry) return 
	loaded[path] ??= loadScript(path)
	// loaded[path].addEventListener("load", e => fun(e.target))
	loaded[path].send = arg => fun(arg)
	loaded[path].prop = "fasad"
}
window.send = exports => {
	// window.loaded[window.current].exports = exports
	// window.loaded[window.current].fun(exports)
	// let pending = window.pendings.pop()
	// window.loaded[pending.pa]
	// pending.fun(exports)
	// console.log(pending.fun)
	// window.current++
	// document.currentScript.exports = exports
	let currentScript = document.currentScript
	// console.trace(currentScript)
}

console.log('hi')
from("./moduleA.js", arg => {
	let { msg } = arg
	console.log("index fun")
	console.log(arg)
})

