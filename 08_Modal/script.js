'use strict';

/* --------------------- selecting elements that we need -------------------- */
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnOpenModal)


/* -------------------- create function for closing modal ------------------- */
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
// by clicking button
btnCloseModal.addEventListener('click', closeModal)
// by click on the screen
overlay.addEventListener('click', closeModal)


/* --------------------------- open modal function -------------------------- */
function openModal() {
    modal.classList.remove('hidden');
    // remove hidden class from overlay to be shown
    overlay.classList.remove('hidden');
}


/* ------------------------------- show_modal ------------------------------- */
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal)

// {
// console.log("Button Clicked");

// // remove hidden class from modal to show
// modal.classList.remove('hidden');
// // remove hidden class from overlay to be shown
// overlay.classList.remove('hidden');
// })


// ────────────────────────────────────────────────────────────────────────────────
/* ------------------------------- close modal without function  ------------------------------ */
// ────────────────────────────────────────────────────────────────────────────────
/*
// by clicking button
btnCloseModal.addEventListener('click', function () {
    // remove modal by adding hidden class
    modal.classList.add('hidden');
    // remove overlay by adding hidden class
    overlay.classList.add('hidden');
})

// by click on the screen
overlay.addEventListener('click', function () {
    // remove modal by adding hidden class
    modal.classList.add('hidden');
    // remove overlay by adding hidden class
    overlay.classList.add('hidden');
})
*/