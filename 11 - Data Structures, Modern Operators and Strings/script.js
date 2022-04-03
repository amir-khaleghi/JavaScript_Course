"use strict";
/* -------------------------------------------------------------------------- */
/*                           Enhanced Object Literal                          */
/* -------------------------------------------------------------------------- */
const weekdays = ["sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[0]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
/* ---------------- Data needed for first part of the section --------------- */
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  /* ----------------- new way of writing functions in object ----------------- */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────

//NOTE Challenge 2
/* -------------------------------------------------------------------------- */
/*                             Coding Challenge 2                             */
/* -------------------------------------------------------------------------- */

/* 
Let's continue with our football betting app!
😉

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ────────────────────────────────────────────────────────────────────────────────
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// ────────────────────────────────────────────────────────────────────────────────
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log("🚀 ~ file: script.js ~ line 120 ~ average", average);

// ────────────────────────────────────────────────────────────────────────────────

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// ────────────────────────────────────────────────────────────────────────────────
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
const entries = Object.entries(scorers);
for (const [key, score] of entries) {
  console.log(`${key} : ${score}`);
}

//NOTE lOOPING Objects
/* -------------------------------------------------------------------------- */
/*              Looping Objects_ Object Keys, Values, and Entries             */
/* -------------------------------------------------------------------------- */

// // Property Names
// //────────────────────────────────────────────────────────────────────────────────
// const properties = Object.keys(openingHours);
// console.log("🚀 ~ file: script.js ~ line 47 ~ properties", properties);

// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// // Property values
// // ────────────────────────────────────────────────────────────────────────────────
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// // ────────────────────────────────────────────────────────────────────────────────
// const entries = Object.entries(openingHours);
// console.log(entries);

// // for (const x of entries) {
// //   console.log(x );
// // }

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//NOTE Optional Chaining
/* -------------------------------------------------------------------------- */
/*                              Optional Chaining                             */
/* -------------------------------------------------------------------------- */
// const days = ["sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

// for (const day of days) {
//   // console.log(day)
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   // console.log("🚀 ~ file: script.js ~ line 49 ~ open", open);
//   console.log(`On ${day}, we open at ${open}`);
// }

// /* --------------------------------- Methods -------------------------------- */
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// console.log(restaurant.orderPizza?.(0, 1) ?? "Method doesn't exist");

// /* --------------------------------- Arrays --------------------------------- */
// const users = [{ name: "Jonas", email: "hello@gmail.com" }];
// console.log(users[0]?.name ?? "User array empty!");

// if (users.length > 0) console.log(users[0].name);
// else console.log("User array empty!");

// ────────────────────────────────────────────────────────────────────────────────
//NOTE Looping Arrays

/* -------------------------------------------------------------------------- */
/*                       Looping Arrays the for of loop                       */
/* -------------------------------------------------------------------------- */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log("🚀 ~ file: script.js ~ line 47 ~ item", item);
//   // console.log(item);
// }

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1} : ${item[1]}`);
// // }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

// // console.log([...menu.entries()]);
