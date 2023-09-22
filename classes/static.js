// JavaScript Static Methods

class User {
    constructor(username){
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`)
    }
    static createId() {
        return '123';
    }
}

class Student extends User{
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}
const hamim = new User("Hamim");
console.log(User.createId())


