//? JavaScript Function Parameters

/* 
* Function Parameters and Arguments
* Parameter Rules
* Default Parameters
* Default Parameter Values
* Function Rest Parameter
* Arguments are Passed by Value
* Objects are Passed by Reference
*/

function functionName () {
    // code to be executed
}

function myFunction () {
    if(y === undefined) {
        y = 2;
    }
}

function myFunction2 (x, y = 10) {
    return x + y
}

function sum (...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(1,2,3,4,5,7)
console.log(x);