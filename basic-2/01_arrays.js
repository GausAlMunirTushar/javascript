// array

const myArr = [0, 1, 2, 3, 4, 5]

// shallow copy vs deep copy

const cricketer = ["Tamim", "Sakib", "Musfiquer"]
const heros = new Array("Miraj", "Liton", "Shanto")

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5))

const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)


// slice vs splice 
console.log("A", myArr)

const myNewArr = myArr.slice(1, 3)
console.log(myNewArr)

console.log("A", myArr)
const myNewArr2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(myNewArr2)