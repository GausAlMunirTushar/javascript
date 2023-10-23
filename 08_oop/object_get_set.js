const User = {
    _email: "email@email.com",
    _password: "password",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        return this._email = value
    }
}

console.log(User)