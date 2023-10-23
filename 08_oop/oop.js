// Object Oriented in Javascript 

const user = {
    username: "Tushar",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log(this.username)
    }
}

console.log(user.username)
console.log(user.getUserDetails())


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

const userOne = new User("Tushar", 20, true)
const userTwo = new User("Gaus", 10, false)