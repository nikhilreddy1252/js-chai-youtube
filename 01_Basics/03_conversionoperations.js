let score = true
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // Nan

// "33" => 33 
// "33ab" => Nan
// true => 1 false => 0

let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 => false 
// "" => false
// "Nikhil" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)