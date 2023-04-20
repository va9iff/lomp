Object.defineProperty(window, "main", {
	set: mainFun => mainFun(document.currentScript.send),
})
window.load = path =>
	new Promise((res, rej) => {
		let script = document.createElement("script")
		script.src = path
		script.send = res
		document.body.appendChild(script)
	})
