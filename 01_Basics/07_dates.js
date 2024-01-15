let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate)// object 

// let myCreatedDate = new Date(2024, 0, 15)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate2 = new Date(2024, 0, 15, 9, 0, 3)
// console.log(myCreatedDate2.toLocaleString())
// // other ways to use date
// let myDate1 = new Date("2024-01-15")
//console.log(myDate1.toLocaleString())
// let myDate2 = new Date("01-15-2024")
// console.log(myDate1.toLocaleString())


// Time stamps in dates are very useful
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myDate1.getTime())

// how to convert milliseconds to seconds 

// console.log(Math.floor(Date.now()/1000))

// console.log(Math.floor(myTimeStamp/1000))

console.log(myDate.toLocaleString('defalt',{
    weekday: "long", hour:"2-digit", minute: "2-digit"
}))

// simple timer 
const start = Date.now();

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);

