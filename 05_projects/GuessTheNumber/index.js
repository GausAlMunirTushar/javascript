// Get a random number between 1 and 100 (inclusive)
let randomNumber = (parseInt(Math.random() * 100 + 1));

// DOM Elements
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Create a Paragraph element
const p = document.createElement('p')

let preGuess = []
let numberOfGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

// Function to validate the user's guess
function validateGuess(guess) {
    // return !isNaN(guess) && guess >= 1 && guess <= 100;
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess <= 1){
        alert('Please enter a number more than 1')
    }
    else if(guess >= 100){
        alert('Please enter a number less than 100')
    }
    else {
        preGuess.push(guess)
        if(numberOfGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// Function to check the user's guess
function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber) {
        displayMessage(`Number is too Low`)
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is too High`)
    }
}

// 
function displayGuess() {
    userInput.value = '';
    guessSlot.innerText += `${guess}, `;
    numberOfGuess++ 
    lastResult.innerHTML = `${10 - numberOfGuess}`
}

// Function display to a message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// Function to end the game
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',  (e) => {
        e.preventDefault()
        randomNumber = (parseInt(Math.random() * 100 + 1));
        preGuess = []
        numberOfGuess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${10 - numberOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
