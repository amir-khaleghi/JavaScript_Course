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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
// ────────────────────────────────────────────────────────────────────────────────
/* -------------------------------------------------------------------------- */
/*                        Logical Assignment Operators                        */
/* -------------------------------------------------------------------------- */
// ────────────────────────────────────────────────────────────────────────────────
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "Amir",
  owner: "Elahi",
};

/* ------------------------- or Assignment operator ------------------------- */
rest1.numGuest = rest1.numGuests || 10;
console.log("🚀 ~ file: script.js ~ line 69 ~ rest1", rest1);
rest2.numGuest = rest2.numGuests || 10;
console.log("🚀 ~ file: script.js ~ line 71 ~ rest2", rest2);
// ────────────────────────────────────────────────────────────────────────────────
rest1.numGuests ||= 10;
rest2.numGuest ||= 10;
console.log("🚀 ~ file: script.js ~ line 76 ~ rest2", rest2);
console.log("🚀 ~ file: script.js ~ line 69 ~ rest1", rest1);

/* ------------------- nullish assignment operator(null or undefined ) ------------------- */
rest1.numGuests ??= 10;
rest2.numGuest ??= 10;

/* ------------------------- and assignment operator ------------------------ */
// rest1.owner = rest1.owner && '<ANONYMOUS';
// rest2.owner = rest2.owner && '<ANONYMOUS';

rest1.numGuest &&= "<ANONYMOUS";
console.log("🚀 ~ file: script.js ~ line 88 ~ rest1", rest1)
rest2.numGuest &&= "<ANONYMOUS";
console.log("🚀 ~ file: script.js ~ line 90 ~ rest2", rest2)
