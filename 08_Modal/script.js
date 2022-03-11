'use strict';
// ────────────────────────────────────────────────────────────────────────────────/* --------------------- selecting elements that we need -------------------- */
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

// ────────────────────────────────────────────────────────────────────────────────
/* -------------------------------------------------------------------------- */
/*                      Handling an _Esc_ Keypress Event                      */
/* -------------------------------------------------------------------------- */
// // for pressing anykey
// document.addEventListener('keydown', function (e) {
//     console.log('A key was pressed!')
//     console.log(e)
// })

// for pressing escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains("hidden")) {
        closeModal()
    }
})