function SetUserName(username) {
    // Complex DB  Calls
    this.username = username
}

function createrUser(username, email, password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createrUser("chai", "chai@gmail.com", "124")
console.log(chai)