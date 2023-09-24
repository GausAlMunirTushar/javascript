// JavaScript Functions are First-Class Citizens

function add(a, b) {
    return a + b;
}
let sum = add;

// Passing a function to another function
function average(numberOne, numberTwo, fn) {
    return fn(numberOne, numberTwo) / 2
}

let result =  average(10, 20, sum)
console.log(result)

// Returning functions from functions
function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }

function centimetersToInches(length) {
    return length / 2.54;
}
function inchesToCentimeters() {
    return length * 2.54;
}

function convert(fn, length) {
    return fn(length)
}
let inches = convert(centimetersToInches, 10)
console.log(inches)