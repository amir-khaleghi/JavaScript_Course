/* -------------------------------------------------------------------------- */
/*                         Implementing the Game Logic                        */
/* -------------------------------------------------------------------------- */
/* -------------------------- generate guess number ------------------------- */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
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

    } else if (guess > secretNumber) {
        // score -= 1
        score--;
        document.querySelector('.message').textContent = 'Guess Lower!';
    } else {
        document.querySelector('.message').textContent = 'Guess Higher!';
        score--;
    }
    document.querySelector('.label-score').textContent = score;
    if (score === 0) {
        document.querySelector('.message').textContent = 'You lost the game!';
    }
})