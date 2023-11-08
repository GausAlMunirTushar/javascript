// if
// if (true) {
    
// }

// const isUserLoggedIn  = true;

// <, >, <= >= == === !=

// if (2 == "2") {
//     console.log('Executed')
// }


// const score = 200;
// if(score > 20) {
//     let power = "fly"
//     console.log(`User Power ${power}`)
// }

// console.log(power)


// const balance = 1000;
// if(balance > 500) console.log("test"); // implicity scope

// if (balance < 500) {
//     console.log(`less than 500`)
// } else if (balance < 750) {
//     console.log(`less than 750`)
// } else if (balance < 900) {
//     console.log(`less than 900`)
// } else {
//     console.log(`less than 1001`)
// }



const userLoggedIn  = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = false;


if (userLoggedIn && debitCard) {
    console.log(`allowed to buy course`)
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log(`User Logged in`)
}
