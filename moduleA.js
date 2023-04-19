(async ()=>{
let { send } = document.currentScript

console.log('A has run')
// document.currentScript.main = script => {

// }

let pak = 88

let myVar = "AAA"
console.log(myVar)
setTimeout(()=> {console.log("should be A", myVar)}, 1000);


let arg = await load("./moduleB.js")
console.log("A fun")
console.log(arg)
send({
	message: "fasad"
})


// console.log(send)
})()