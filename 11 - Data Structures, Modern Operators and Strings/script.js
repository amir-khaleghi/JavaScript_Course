"use strict";
/* -------------------- Data needed for a later exercise -------------------- */
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// ────────────────────────────────────────────────────────────────────────────────
/* ---------------- Data needed for first part of the section --------------- */
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
  /* ----------------------------- create function ---------------------------- */
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1, //default values
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};
// ────────────────────────────────────────────────────────────────────────────────
/* ----------------------------- Calling Method ----------------------------- */
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// ────────────────────────────────────────────────────────────────────────────────
/* -------------------------------------------------------------------------- */
/*                         The Spread Operator (...)                       */
/* -------------------------------------------------------------------------- */
// ────────────────────────────────────────────────────────────────────────────────
const arr = [4, 5, 6];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//spread operator
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

//print individually array
console.log(...newArr);
console.log(1, 2, 3, 4, 5, 6);

//copying
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets.Not objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
//can't use spread in template literal
// console.log(`${...str}`)
/* ----------------------------- ordering pasta ----------------------------- */

const ingredients = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

restaurant.orderPasta(...ingredients); //ingredients doesn't work alone. should use spread.

/* --------------------------- objects and spread --------------------------- */
const newRestaurant = { foundedIn: 1994, ...restaurant, founder: "Amir" };
console.log(newRestaurant);

//copying
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Kerman Espakho";
console.log(restaurantCopy.name);
console.log(restaurant.name);
