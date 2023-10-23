// let myName = "Tushar    "

// console.log(myName.trueLength)

let cricketer = ["Sakib", "Musfiquer", "Mahadullah"]

let cricketerPower = {
    Sakib: "all",
    getPower: function() {
        console.log(`Hitting Power ${this.Sakib}`)
    }
}

Object.prototype.deClear = function() {
    console.log(`declear is presenting in all objects`)
}
// cricketerPower.deClear()

Array.prototype.heyTushar = function() {
    console.log(`Hello How are you`)
}
cricketer.heyTushar()



// Inheritance
const User = {
    name: 'Proto'
}
const Teacher  = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaiable: false,
}

const TaSupport = {
    makeAssingment: "JavaScript Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


// modern syntax
