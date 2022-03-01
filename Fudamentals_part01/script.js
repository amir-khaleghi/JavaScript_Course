/* -------------------------------------------------------------------------- */
/*                               Basic Operators                              */
/* -------------------------------------------------------------------------- */

/* ----------------------------- math operators ----------------------------- */
const now = 2050;
const ageAmir = now - 1994;
const ageEli = now - 1988;
console.log(ageAmir, ageEli);

console.log(ageAmir * 2, ageEli / 10, 2 ** 3);

const firstName = "Amir"
const lastName = "Khaleghi"
console.log(firstName + " " + lastName);

/* -------------------------- Assignment operators -------------------------- */
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

/* -------------------------- comparison operators -------------------------- */
// >, < , >= , <=
console.log(ageAmir > ageEli);
console.log(ageAmir <= 29);