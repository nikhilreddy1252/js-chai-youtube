const name ="Nikhil"
const repoCount = 50

console.log(name + repoCount + " Value") // outdate syntax 

console.log(`Hello my name is ${name} and my github repo count is ${repoCount}`)

const gameName = new String('Nikhil-hc-reddy')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.length)
console.log(typeof gameName)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(7))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,5) // it won't accept negative index even if we give negative index it will start from 0th index
console.log(newString)

const anotherString = gameName.slice(-10,3)// slice accepts negative index 
console.log(anotherString)

const newStringOne = "   Nikhil.   "
console.log(newStringOne.trim())

// replace 

const url = "https://nikhilreddy.com/nikhil%20reddy"
console.log(url.replace('%20', '-'))

console.log(url.includes('nikhil'))

// string convert to array using split (seperator, limit)

console.log(gameName.split('-'))