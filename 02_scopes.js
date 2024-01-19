let a =10
const b =20
var c = 30

if(true){
    let a = 100
    const b = 200
    c = 300
}

console.log(a); // 10 let and const are block/local scope
console.log(b); // 20 
console.log(c); // 300 global score 