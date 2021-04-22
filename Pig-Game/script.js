'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

Number(current0El.textContent);
//Rolling Dice function
btnRoll.addEventListener('click', function () {
  //1.Generating a random dice
  const dice = Math.trunc(Math.random() * 6 + 1);
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1
  if (dice !== 1) {
    //Add dice to current score;
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    currentScore = 0;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    //Switch to next player
    console.log(document.querySelector(`.player--${activePlayer}`));
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  console.log(document.querySelector(`.player--${activePlayer}`));
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  if (scores[activePlayer] >= 100)
    document.getElementById(`name--${activePlayer}`).textContent = '🥳You Win!';

  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});

btnNew.addEventListener('click', function () {
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  activePlayer = 0;
  diceEl.classList.add('hidden');
});
