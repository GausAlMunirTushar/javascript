//
const tinderUser = new Object()
tinderUser.id = '234abc';
tinderUser.name = "Tushar"
tinderUser.isLoggedIn = false;


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstName: "Gaus Al Munir",
        lastName: "Tushar"
    }
}

// console.log(regularUser.fullName.firstName)

// optional Chaining
// console.log(regularUser.fullName?.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3)

// spread operator 
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: 'tushar@gmail.com'
    },
    {
        id: 1,
        email: 'tushar@gmail.com'
    },
    {
        id: 1,
        email: 'tushar@gmail.com'
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// object de structure 
const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor
const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(instructor)

