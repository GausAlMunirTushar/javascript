// JavaScript Classes

/*
* JavaScript Class Syntax
* Using a Class
* The Constructor Method
* Class Methods
* "use strict"
*/

class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const myCar = new Car("Ford", 2014);
console.log(myCar.age())