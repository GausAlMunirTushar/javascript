const user = {
    username: "Tushar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Gaus Al"
// user.welcomeMessage()

// console.log(this)

/* function chai() {
    let username = 'Tushar'
    console.log(this.username)
}
chai() */

/* const chai = function () {
    let username = 'Tushar'
    console.log(this.username)
}
chai()
 */

/* const chai = () => {
    let username = 'Tushar'
    console.log(this)
} */
// chai()


// Arrow function

/* const addTwo = (num1, num2) => {
    return num1 + num2
} */


// implicit return and explicit return javascript 
// implicit return
/* const test1 = (a,b) => (a + b) or (a,b) => a + b;
test1(3, 10) // returns 13 */

//explicit return 
/* const test2 = (a,b) => {return a + b}
test2(3, 10) // returns 13 */

// const addTwo = (num1, num2) => {return num1 + num2}
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Tushar"})
console.log(addTwo(2, 3))