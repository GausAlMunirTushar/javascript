// Global and local scope in javascript

// var, let, const

if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)





// Scope level and mini hoisting in javascript 
function one() {
    const username = "Tushar"
    
    function two() {
        const website = "gausalmunirtushar.xyz"
        console.log(username)
    }
    // console.log(website)
    // two()
}

// one()


// ------------- hoisting ---------------
console.log(addOne(4))

function addOne(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
addTwo(5)