/* 
* - Function Declarations
* - Function Expressions
* - The Function() Constructor
* - Function Hoisting
* - Self-Invoking Functions
* - Functions Can Be Used as Values
* - Functions are Objects
* - Arrow Functions
*/

// function functionName () {
//     // code to be exectued
// }
// => Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
function myFunction (a, b) {
    return a * b;
}
const myfunc = myFunction(2,3)
console.log(myfunc)

const xFunction = function (a, b) {
    return a + b
}

// sell invoke function (IIFE)
// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();


function myFunction2() {
    return arguments.length;
}

function multiply(num1, num2) {
    const result = num1 * num2
    return result;
}


function print(string) {
    
}


// Declare a function
function functionName (parameters) {
    // function body
}


function square(a) {

}
function add(a, b) {

}

// Calling a function - invoking a function
// functionName(arguments)


// Parameters vs. Arguments
function say(message) {
    return message
}
console.log(say('hello'))

// Returning a value
function addTwo (a, b) {
    return a + b;
}
let sum = addTwo(10, 20)
console.log(sum)

function compare(a, b) {
    if(a > b){
        return -1;
    }
    else if(a < b) {
        return 1
    }
    return 0
}

console.log(compare(20, 23))

// The arguments object


// Function hoisting
showMe();
function showMe() {
    console.log('show me function using hosting')
}
//  function showMe(){
//     console.log('a hoisting example');
// }

// showMe(); // a hoisting example

/* Summary
- Use the function keyword to declare a function.
- Use the functionName() to call a function.
- All functions implicitly return undefined if they don’t explicitly return a value.
- Use the return statement to return a value from a function explicitly.
- The arguments variable is an array-like object inside a function, representing - - function arguments. 
- The function hoisting allows you to call a function before declaring it. */