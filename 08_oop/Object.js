function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`)
}
const chai = createUser("Chai", 23)
const tea = createUser("Tea", 30)