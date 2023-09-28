const bangladeshiCricketer = ["Tamim", "Sakib", "Musfiqur"]
const indianCricketer = ["Virat", "Rohit", "Mahi"]

// bangladeshiCricketer.push(indianCricketer)
// console.log(bangladeshiCricketer)
// const allCricketer = bangladeshiCricketer.concat(indianCricketer)
// console.log(bangladeshiCricketer)
// console.log(allCricketer)

// Spread Operator
const allCricketer = [...bangladeshiCricketer, ...indianCricketer]
// console.log(allCricketer)


const anotherArray = [1, 2, 3, 4, [7, 8, 9], 7, [6, 7, [4, 5]]];
const useableArray = anotherArray.flat(Infinity)
// console.log(useableArray)

// console.log(Array.isArray("Tushar"))
// console.log(Array.from("Tushar"))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))