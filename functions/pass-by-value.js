// JavaScript pass-by-value or pass-by-reference


// JavaScript pass-by-value
function square(x) {
    x = x * x;
    return x
}
let y = 10;
let result = square(y)
console.log(result)
console.log(y)

// Pass-by-value of reference values
let person = {
    name: "hamim",
    age: 20,
}

function increaseAge() {
    person.age += 1
}
increaseAge(person)
console.log(person)


/* Summary
JavaScript passes all arguments to a function by values.
Function arguments are local variables in JavaScript. */