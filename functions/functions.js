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

function functionName () {
    // code to be exectued
}
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
(function () {
    let x = "Hello!!";  // I will invoke myself
  })();


function myFunction2() {
    return arguments.length;
}

function multiply(num1, num2) {
    const result = num1 * num2
    return result;
}


function print(string) {
    
}
