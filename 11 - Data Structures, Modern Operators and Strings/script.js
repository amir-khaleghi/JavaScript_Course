"use strict";

/* ---------------- Data needed for first part of the section --------------- */
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  /* ----------------------------- create function ---------------------------- */
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

/* -------------------------------------------------------------------------- */
/*                       Looping Arrays the for of loop                       */
/* -------------------------------------------------------------------------- */

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log("🚀 ~ file: script.js ~ line 47 ~ item", item);
  // console.log(item);
}

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

// console.log([...menu.entries()]);
