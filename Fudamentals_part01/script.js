/* -------------------------------------------------------------------------- */
/*                        Strings and Template Literals                       */
/* -------------------------------------------------------------------------- */
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
/* ----------------------------- create template ---------------------------- */

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
/* --------------------------------- using $ -------------------------------- */

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

/* ----------------------------- multiple lines ----------------------------- */
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);