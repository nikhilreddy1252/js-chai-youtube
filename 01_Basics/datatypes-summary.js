// 1.primitive data types

// 7 types : String, number, boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100.5
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
console.log(id)

const anotherId = Symbol('123')
console.log(anotherId)

console.log( id === anotherId)

const bigNumber = 345678902389894n


// 2.reference types (non primitive ) 

// Arrays , Objects , functions 

const heros = ["shaktiman","nagraj","dogo"]

const myObj = {
    name:"Nikhil",
    age:28,
}
const myFunction = function(){
    console.log("my function")
}