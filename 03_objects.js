// singleton : Object.create

//object literals
// how to push declare symbol in object and print it.

const mySym = Symbol('any value')

const jsObject = {
    name: "Nikhil",
    "full name": "Nikhil Reddy",
    [mySym]: "key3",// syntax should be like this only
    age: 28,
    location: "Bangalore",
    email: "nikhilreddy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsObject.email)
// console.log(jsObject['email'])
// console.log(jsObject['full name'])
// console.log(jsObject[mySym]) // follow the same syntax to access the symbol values no other syntax is valid
// console.log(jsObject.mySym)

// how to modify object values 
jsObject.email = "nikhilreddy@facebook.com"
// console.log(jsObject)
//Object.freeze(jsObject) // lock the values

jsObject.email = "nikhilreddy@microsoft.com"
//console.log(jsObject)

jsObject.greeting = function(){
    console.log("Hello Js User")
}
jsObject.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
    console.log(`Hello Js email: ${this.email}`)
}
console.log(jsObject.greeting())
console.log(jsObject)

console.log(jsObject.greetingTwo())