// Return type of variables in JavaScript
// Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// Primitive Datatypes
// String, Boolean, Number, null, dndefined, symbol, BigInt,
const name = "Tushar"
const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 33443432424242424n


// Non Primitive Datatypes / References Types
// Array, Objects, Function

const cricketer = ["Shakib", "Tamim", "Musfiqur"]
let myObjt = {
    name: "Tushar"
}
function myFunction() {
    console.log('hello world')
}


// types of operator

// console.log(typeof cricketer)


//=============================================

// Stack (Primitive), Heap (Non-Primitive)

let youtubeUserName = 'gausalmunirtushar'

let anotherName = youtubeUserName
console.log(anotherName)