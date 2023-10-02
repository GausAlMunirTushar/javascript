// Get a random number between 1 and 100 (inclusive)
const randomNumber = Math.floor(Math.random() * 100) + 1;

// DOM elements
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

// Create a paragraph element
const p = document.createElement('p');

let previousGuesses = [];
let numberOfGuesses = 1;
let playGame = true;

// Function to validate the user's guess
function validateGuess(guess) {
  return !isNaN(guess) && guess >= 1 && guess <= 100;
}

// Function to check the user's guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the correct number (${randomNumber}) in ${numberOfGuesses} attempts.`);
    endGame();
  } else {
    previousGuesses.push(guess);
    if (numberOfGuesses === 10) {
      displayMessage(`Game over! The correct number was ${randomNumber}.`);
      endGame();
    } else {
      let message = `Wrong guess! Try again. You have ${10 - numberOfGuesses} attempts left.`;
      if (guess < randomNumber) {
        message += ' Your guess was too low.';
      } else {
        message += ' Your guess was too high.';
      }
      displayMessage(message);
      userInput.value = '';
      userInput.focus();
      numberOfGuesses++;
    }
  }
}

// Function to display a message
function displayMessage(message) {
  lastResult.textContent = message;
}

// Function to end the game
function endGame() {
  playGame = false;
  userInput.disabled = true;
  submit.disabled = true;
  submit.style.backgroundColor = '#ccc';
}

// Event listener for the submit button
submit.addEventListener('click', function (e) {
  if (playGame) {
    e.preventDefault()
    const guess = parseInt(userInput.value);
    if (validateGuess(guess)) {
      checkGuess(guess);
    } else {
      displayMessage('Please enter a valid number between 1 and 100.');
    }
  } else {
    displayMessage('The game is over. Click "Start Over" to play again.');
  }
});

// Function to reset the game
function resetGame() {
  previousGuesses = [];
  numberOfGuesses = 1;
  playGame = true;
  userInput.disabled = false;
  submit.disabled = false;
  submit.style.backgroundColor = '#4CAF50';
  lastResult.textContent = '';
  userInput.value = '';
  userInput.focus();
  guessSlot.innerHTML = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Event listener for the "Start Over" button
startOver.addEventListener('click', resetGame);
