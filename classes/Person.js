class Person {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
    sayHello () {
        console.log(`Hello My Name is ${this.username} and I am ${this.age} years old`)
    }
    logMe () {
      console.log(`Name ${this.username}`)
    }
}

class Student extends Person{
    constructor(username, age, studentId) {
        super(username, age); // Call the parent class constructor
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.username} is studying`);
    }
}

class Teacher extends Person{
  constructor(username, email, password) {
    super(username)
    this.email = email;
	this.password = password;
  }
  addCourse() {
	console.log(`A new Course was added by ${this.username}`)
  }
}

const personHello = new Person("Hamim", 20)
personHello.sayHello()

const course = new Teacher("JavaScript", "js@gmail.com", "js@1234")
course.addCourse()

console.log(Person instanceof Teacher)

// class Rectangle {
//     constructor(width, height) {
//       this._width = width;
//       this._height = height;
//     }
  
//     get area() {
//       return this._width * this._height;
//     }
  
//     set width(newWidth) {
//       if (newWidth > 0) {
//         this._width = newWidth;
//       }
//     }
//   }
  
//   const rect = new Rectangle(5, 10);
//   console.log(rect.area); // Get the area using the getter
//   rect.width = 20; // Set the width using the setter