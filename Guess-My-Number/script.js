'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const display = function (className, message) {
  document.querySelector(className).textContent = message;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    setBackgroundColor('#60B347');
    setWidth('30rem');
    display('.number', secretNumber);
    if (score > highScore) {
      highScore = score;
      display('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low!' : 'Too high!');
      score--;
      display('.score', score);
    } else {
      display('.score', 0);
      displayMessage('You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  display('.score', score);
  setBackgroundColor('#222');
  setWidth('15rem');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  display('.number', '?');
});
