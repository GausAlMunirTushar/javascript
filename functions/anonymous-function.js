// JavaScript Anonymous Functions

(function () {
   //...
});

let show = function () {
    console.log(`Anonymous Functions`)
}

// Using anonymous functions as arguments
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

// Immediately invoked function execution
(function () {
    console.log('Immediately invoked function execution');
})

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// (function () {
//     console.log(person.firstName} + ' ' + person.lastName);
// })(person);

// arrow function
let showMe = () => {console.log('Anonymous functions')}

/* Summary
Anonymous functions are functions without names.
Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution. */