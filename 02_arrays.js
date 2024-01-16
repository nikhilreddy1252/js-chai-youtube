const marvelHeroes = ["thor","ironman","spiderman"]
const dcHeroes = ["batman","flash","superman"]
//marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3][1])
// console.log(marvelHeroes.concat(dcHeroes)) // concat returns new array
// console.log(marvelHeroes)

// best way to combine array is using spread operator 

// const newHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(newHeroes)
// console.log(typeof newHeroes)
// console.log(marvelHeroes)
// console.log(dcHeroes)

const real_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12],14],13]
const another_real_array = real_array.flat(Infinity)

console.log(another_real_array)

// how to convert string to an array

console.log(Array.from("Hitesh"))
console.log(Array.from({name:"nikhil",age:28})) // intresting , we need to tell it wheather form a array with keys or values u ll learn in future.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
console.log(Array.isArray("Hitesh"))//false
console.log(Array.isArray(another_real_array))//true





