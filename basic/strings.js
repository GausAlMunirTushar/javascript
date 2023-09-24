const name = "Tushar"
const repoCount = 135

// console.log(name + repoCount + "value")

// string interpolation
console.log(`Hello is my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gaus-al-munir-tushar')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 1)
console.log(anotherString)

const userName = '   gausal  '
console.log(userName)
console.log(userName.trim())

const websiteLink = 'gausalmunirtushar.com';
console.log(websiteLink)
const newWebsiteLink = websiteLink.replace('com', 'xyz')
console.log(newWebsiteLink)

console.log(websiteLink.includes('tushar'))
console.log(gameName.split())