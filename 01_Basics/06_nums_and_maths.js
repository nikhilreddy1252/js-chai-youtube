const score = 400;// its number type 

let balance = new Number(100) // balance is of number type we know after seeing this statement
//console.log(balance.toFixed(2))

balance = '500'
//console.log(balance.toFixed(2)) // string toFixed is a number method 
// console.log(balance)
// console.log(balance.toString())// converts to string type
// console.log(typeof balance)
// console.log(balance.length)

const anotherNumber = 123.45
// console.log(typeof anotherNumber.toPrecision(4))// it returns string
// console.log(typeof anotherNumber)
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))
// console.log(typeof hundreds.toLocaleString())
// console.log(typeof hundreds)

// +++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // used to change the-ve sign of the value to positive
// console.log(Math.round(4.3))//4
// console.log(Math.round(4.6))//5

// console.log(Math.ceil(4.1))//5 
// console.log(Math.floor(4.9))//4
// console.log(Math.min(4,5,6,7,8,9,10))
// console.log(Math.max(5,6,7,8,9,10))

// console.log(Math.random()) // 0 to 1

// console.log(Math.floor(Math.random()*10) + 1)// (1,10) - random() -> 0.01 to get min 1 ==> { 0.01 * 10 = 0.1 + 1 } 

const min =1;
const max = 100;
console.log(Math.floor(Math.random() * ( max - min + 1) ) + min ) // (0.001) * (10 + 1 ) = 
//console.log(Math.floor(Math.random() * (max - min)  + min ))

// (10,20) => lets say you want to numbers from 10 to 20

/*
min 10, 
max 20



console.log(Math.floor(Math.random() * (max - min  + 1 ) + min ))

*/















