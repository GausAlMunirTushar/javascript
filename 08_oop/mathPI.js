// Now you know Objects in Javascript

const descripttor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripttor)
// console.log(Math.PI)



const chai = {
    name: "Chai",
    price: 234,
    isAvailable: true,
    orderChai: function() {
        console.log(`Order Chai`)
    }
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)
}