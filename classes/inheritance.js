// JavaScript Class Inheritance

/* 
* Class Inheritance
*/

class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return 'I have a car' + this.carName;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand)
        this.model = model;
    }
    show () {
        return this.present() + ', it is a  ' + this.model;
    }
}
let myCar = new Model ("Ford", "Mus")