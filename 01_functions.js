function sayMyName()
{
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("H")
    console.log("I")
    console.log("L")
}
//sayMyName()// 
// small function to add two numbers 
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
     return number1 + number2 
}
const result = addTwoNumbers(3, 4)
//console.log("Result: ", result);

function loginUserMessage(username = "sam" ){ /// default value 
    if(!username){
        console.log("Please enter a valid username")
        return 
    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("nikhil"))
//console.log(loginUserMessage()) // undefined will be returned if we dont pass any value

// let a;
// console.log(a)
// console.log(!undefined)
// console.log("")
// console.log(undefined)

function calculatePrice(...num1){
    return num1;
}
//console.log(calculatePrice(4))
//console.log(calculatePrice(4, 5, 6))

function calculatePrice1(value1, value2, ...num2){
    return num2;
}
//console.log(calculatePrice1(100,200,300,400,500,600)) // value1 = 100, value2 = 200 , num = [300,400,500,600]


let user = {
    username: "nikhil",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username: "nilesh",
    price: 399
})


const myArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))
