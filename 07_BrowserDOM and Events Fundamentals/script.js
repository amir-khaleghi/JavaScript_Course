/* -------------------------------------------------------------------------- */
/*                         Implementing the Game Logic                        */
/* -------------------------------------------------------------------------- */

/* ------------------------------ initialState ------------------------------ */
// const initDoc = $.extend({}, document);

/* -------------------------- generate guess number ------------------------- */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = "?";

/* ----------------------------- generate score ----------------------------- */
let score = 20;

/* ----------- getring guess number and compare with secret number ---------- */
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!!';

        // when player won
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You Won!';
        document.querySelector('.number').textContent = secretNumber;
        /* ----------------------------- backgroundColor ---------------------------- */
        document.body.style.background = '#60b347';
        // document.querySelector('body').style.backgroundColor = '#60b347';
        /* ------------------------------ change width ------------------------------ */
        document.querySelector('.number').style.width = '40rem';
        // when guess number is higher
    } else if (guess > secretNumber) {
        // score -= 1
        score--;
        document.querySelector('.message').textContent = 'Guess Lower!';
        // when guess number is lower
    } else {
        document.querySelector('.message').textContent = 'Guess Higher!';
        score--;
    }

    /* ------------------------ manipulating score number ----------------------- */
    document.querySelector('.label-score').textContent = score;
    // when score = 0 and player lost
    if (score === 0) {
        document.querySelector('.message').textContent = 'You lost the game!';
    }

})
/* ------------------------------ again button ----------------------------- */
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    // displayMessage('Start guessing...');
    document.querySelector('.label-score').textContent = "💯 Score: 20";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});