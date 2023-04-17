window.lomp = { entries: [], current: 0 }
window.from = (path, fun) => {
	let entry = lomp.entries.find(entry=>entry.path==path)
	if (!entry){
		let script = document.createElement("script")
		script.src = path
		lomp.entries.push({fun, path})
		document.body.appendChild(script)
	} 
	else {
		window.addEventListener("load", e=>fun(entry.exportings))
	}
}
window.send = (exportings) => {
	lomp.entries[lomp.current].exportings = exportings
	lomp.entries[lomp.current].fun(exportings)
}

from("./moduleA.js", (msg)=>{
	console.log('first from')
	console.log(msg)
})

from("./moduleA.js", (msg)=>{
	console.log('second from; modify msg')
	msg.message = "fasadistan"
	console.log(msg)
})
from("./moduleA.js", (msg)=>{
	console.log('third from')
	console.log(msg)
})