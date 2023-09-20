class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello () {
        console.log(`Hello My Name is ${this.name} and I am ${this.age} years old`)
    }
}

class Student {
    constructor(name, age, studentId) {
        super(name, age); // Call the parent class constructor
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}


class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get area() {
      return this._width * this._height;
    }
  
    set width(newWidth) {
      if (newWidth > 0) {
        this._width = newWidth;
      }
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.area); // Get the area using the getter
  rect.width = 20; // Set the width using the setter