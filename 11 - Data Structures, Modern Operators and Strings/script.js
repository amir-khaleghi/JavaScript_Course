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

/* -------------------------------------------------------------------------- */
/*                              Optional Chaining                             */
/* -------------------------------------------------------------------------- */
const days = ["sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

for (const day of days) {
  // console.log(day)
  const open = restaurant.openingHours[day]?.open ?? "closed";
  // console.log("🚀 ~ file: script.js ~ line 49 ~ open", open);
  console.log(`On ${day}, we open at ${open}`);
}

/* --------------------------------- Methods -------------------------------- */
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.orderPizza?.(0, 1) ?? "Method doesn't exist");

/* --------------------------------- Arrays --------------------------------- */
const users = [{ name: "Jonas", email: "hello@gmail.com" }];
console.log(users[0]?.name ?? "User array empty!");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty!");

// ────────────────────────────────────────────────────────────────────────────────

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
