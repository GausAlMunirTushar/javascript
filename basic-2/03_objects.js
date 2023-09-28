// singleton
// Object.create()


// object literals
const mySymbol = Symbol("key1")
const jsUser = {
    name: "Tushar",
    "Full Name": "Gaus Al Munir Tushar",
    age: 21,
    [mySymbol]: "mykey1",
    location: "Dhaka",
    email: "tushar@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.age) // dot notation
// console.log(jsUser["email"]) // array notation 
// console.log(jsUser[mySymbol])
/* 
jsUser.email = 'tushar@github.com';
console.log(jsUser)
Object.freeze(jsUser)
jsUser.email = 'tushar@microsoft.com'; */


jsUser.greeting = function() {
    console.log('Hello JS User')
}
console.log(jsUser.greeting())
jsUser.greeting()

jsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this["Full Name"]}`)
}
jsUser.greetingTwo()