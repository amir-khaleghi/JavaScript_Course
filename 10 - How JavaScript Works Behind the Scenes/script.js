/* -------------------------------------------------------------------------- */
/*                           Objects vs. primitives                           */
/* -------------------------------------------------------------------------- */
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30
// ────────────────────────────────────────────────────────────────────────────────
const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); //27
console.log('Me', me); //27