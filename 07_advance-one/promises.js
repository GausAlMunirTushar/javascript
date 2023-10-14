/* const promiseOne = new Promise(function (resolve, reject) {
    // Do   an asynce task
    // DB calls, cryptography, network
    setTimeout( function() {
        console.log(`Async task is complete`)
        resolve()
    }, 1000)
})

promiseOne.then( function () {
    console.log(`Promised Consumed`)
})

new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log(`Async task 2`)
        resolve()
    }, 1000);
}).then(function () {
    console.log(`Async to task 2 resolved`)
})


const promiseThree = new Promise( function (resolve, reject) {
    setTimeout( function () {
        resolve({
            username: "coffee",
            email: "coffee@home.com"
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({
                username: "Tushar",
                password: "1234"
            })
        } else {
            reject(`Error: Something went wrong`)
        }
    }, 1000)
})

promiseFour.then( (user)=> {
    console.log(user)
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => console.log('finally'))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(!error){
            resolve({
                username: "JavaScript",
                password: "1234"
            })
        }else{
            reject(`Error: Something Went Wrong`)
        }
    }, 1000)
});

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive() */

async function getAllUser() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
   } catch (error) {
    console.log(error)
   }
}
getAllUser()