"use strict"; // treall all js code newer version

// Datatypes and ECMA standards

let counter = 120;  // counter is a number
counter = false;    //counter is now a boolean
counter = "foo"     // counter is now a string

console.log(typeof(counter))

let obj = null;
console.log(typeof obj)

console.log(null == undefined);

let num = 100;

let price = 12.5;
let discount =  0.05;

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log('a'/2)
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false

let greeting = 'Hi';

let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

let inProcess = true;
let completed = false;

let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

let emptyObject = {

}


let person = {
    firstName: 'Al Munir',
    lastName: 'Tushar',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
// To access a object’s property, you can use
console.log(person.firstName)


// JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object.
