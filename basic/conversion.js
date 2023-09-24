// Datatype conversion confusion
let score = "33c"
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // NaN

// "33" => 33
// "33dcd" => NaN
// true => 1 , false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// true => 1 , false => 0
// "" => false
// "tushar" => true

let someNumber = "33"
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

/*======================Operations=====================*/
// Why string to number conversion is confusing

let vlaue = 3;
let negValue = -vlaue 
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(20/2)
// console.log(20%3)

let str1 = "Munir"
let str2 = " Tushar"
let str3 = str1 + str2 

// 
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "4")

// console.log((3 + 4) * 5 % 3)

// console.log(+true) 

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter)

// learn post increment , pre increment