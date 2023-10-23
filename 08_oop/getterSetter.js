// Getter Setter and Stack Overflow
class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        return this._email = value;
    }
    get password() {
        return `${this._password}gausalmunir`
    }
    set password(value) {
        this._password = value.toUpperCase()
    }
}

const tushar = new User("tushar@gmail.com", "1234")
console.log(tushar)