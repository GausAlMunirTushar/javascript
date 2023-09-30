function myName() {
    console.log('Tushar')
}
/* 
function addTwoNumber(number1, number2) {
    console.log(number1 + number2)
}
addTwoNumber(2, 2) */

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3, 4)
// console.log("Result:", result)


function loginUserMessage(username = "Jodn Doe") {
    // if(username === undefined) {
    //     console.log(`Please enter a username`)
    //     return
    // }
    if(!username) {
        console.log(`Please enter a username`)
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Tushar"))
// console.log(loginUserMessage())


// Functions with objects and array in javascript 

// rest parameters
function calculateCartParice (...num1) {
    return num1
}
// console.log(calculateCartParice(200, 300, 400))

const user = {
    username: "Tushar",
    price: 2000,
}

function handleOjbect(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}
// handleOjbect(user)
// handleOjbect({username: "Gaus", price: 200})


const newArray = [200, 200, 100, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(newArray))
console.log(returnSecondValue([10, 40, 45]))