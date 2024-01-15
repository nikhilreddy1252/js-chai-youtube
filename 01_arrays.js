const myArray = [0,1,2,3,4] // arrays are resizable in JS 
// console.log(myArray[1])
const myHeros = ["shaktilal","salar","prabhas"]
const myArray2 = new Array(1,5,6,7)
//console.log(myArray2[2])

// Array methods 

// myArray.push(2)
// myArray.unshift(9)
// console.log(myArray)
// myArray.shift()
// myArray.pop()
// console.log(myArray)
// console.log(myArray.includes(4))
// console.log(myArray.indexOf(4))

const newArray = myArray.join() // array to string 
// console.log(myArray)
// console.log(newArray)

const myNewArray = [1,2,3,4,5,6]
console.log("original array", myNewArray)
const myN1 = myNewArray.slice(1,4) // it excludes the last index  [ 2, 3, 4 ]
console.log("slice", myN1)
console.log("original array after slice ", myNewArray)
const myN2 = myNewArray.splice(1,4) // it includes the last index  [ 2, 3, 4, 5 ] and also spilce will manipulate the orginal array 
// elements will be removed from orginal array when we used spilce 
console.log(myN2)
console.log("original array after splice ", myNewArray)

