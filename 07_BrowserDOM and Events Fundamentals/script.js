'use strict';
/* -------------------------------------------------------------------------- */
/*                     Selecting and Manipulating Elements                    */
/* -------------------------------------------------------------------------- */

/* ---------- querySelector is a Nodelist selector not HTMLcollection --------- */
console.log(document.querySelector(".message"))

/* -- to reach the text we use another dot and dots read from left to right - */
console.log(document.querySelector(".message").textContent)

/* ---------------------------- manipulating Data --------------------------- */
document.querySelector(".message").textContent = "Correct!.."
document.querySelector(".guess").value = 76