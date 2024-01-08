const accountId = 1345643
let accountEmail = "nikhilreddy1252@gmail.com"
var accountPassword = "12345678"
accountCity = "Bangalore"
let accountState;

// accountId = 2 this is not allowed

console.log(accountId);

accountEmail = "nikhilreddy125239@gmail.com"
accountPassword = "21212121"
accountCity = "Hyderabad"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var because of issue in block scope and functional scope
*/