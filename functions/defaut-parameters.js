function say(message = 'Hi') {
    console.log(message)
}
say()

// Arguments vs. Parameters


// Setting JavaScript default parameters for a function
function sayHi(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
sayHi(); // 'Hi'


// 1) Passing undefined arguments
// 2) Evaluating default parameters