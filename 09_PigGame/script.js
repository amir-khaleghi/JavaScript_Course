/* -------------------------------------------------------------------------- */
/*                              Pig Game Project                              */
/* -------------------------------------------------------------------------- */

'use strict';
/* ------------------------------ selecting Element-------------------------- */
// select score place
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0')
const current1El = document.getElementById('current--1')
const diceEL = document.querySelector('.dice');
//select buttons
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
//select player
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
// const currentScore = document.querySelector('.current-score');


/* --------------------------- Strating Condition --------------------------- */
let scores, currentScore, activePlayer, playing

const init = function () {
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEL.classList.add("hidden")
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

}

init();

/* -------------------------- switchPlayer function ------------------------- */
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
/* -------------------------------------------------------------------------- */
/*                              Rolling the Dice                              */
/* -------------------------------------------------------------------------- */
/* ---------- create a function for choosing dice pictures randomly --------- */
const randomDice = function () {
    let randomNumber = Math.trunc(Math.random() * 6 + 1) // random number
    let selectedDice = `dice-${randomNumber}.png` // choose the dice by randomNumber
    return [selectedDice, randomNumber]
}
// console.log(randomDice())

/* -------------------------------------------------------------------------- */
/*                               counting Sores                               */
/* -------------------------------------------------------------------------- */


// let currentScore = 0;
// const scores = [0, 0];
// let activePlayer = 0;
// let playing = true;

/* ------------------------------- roll button ------------------------------ */
btnRoll.addEventListener('click', function () {
    if (playing) {
        let random = randomDice() //random number
        diceEL.classList.remove("hidden") //remove hidden class 
        document.querySelector(".dice").src = random[0] //show the dice image

        if (random[1] != 1) {
            currentScore += random[1]
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
            // current0El.textContent = currentScore;
            // current1El.textContent = currentScore;
        } else {
            switchPlayer()
            // document.getElementById(`current--${activePlayer}`).textContent = 0
            // currentScore = 0
            // activePlayer = activePlayer == 0 ? 1 : 0;
            // player0El.classList.toggle('player--active')
            // player1El.classList.toggle('player--active')

            // document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
            // player0.classList.remove('player--active')
            // player1.classList.add('player--active')
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1.add currentscore to active player score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2.check if player's score is >100
        if (scores[activePlayer] > 100) {
            //Finish the Game
            playing = false;
            diceEL.classList.add("hidden") //remove hidden class 

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            switchPlayer()
        }

        // document.getElementById(`current--${activePlayer}`).textContent = 0
        // activePlayer = activePlayer == 0 ? 1 : 0;
        // player0El.classList.toggle('player--active')
        // player1El.classList.toggle('player--active')
    }
})


/* -------------------------------------------------------------------------- */
/*                                 restarting                                 */
/* -------------------------------------------------------------------------- */

btnNew.addEventListener('click', init)