/* -------------------------------------------------------------------------- */
/*                            Handling Click Events                           */
/* -------------------------------------------------------------------------- */

/* ---------------------------- addEventListener ---------------------------- */
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    /* ------------------------------- empty input ------------------------------ */
    if (!guess) {
        document.querySelector(".message").textContent = "🤷‍♂️No Number"
    }

})