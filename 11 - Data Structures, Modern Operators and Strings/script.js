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
/* ----------------------------- Calling Method ----------------------------- */
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
/* -------------------------------------------------------------------------- */
/*                        Short Circuiting (&& and ||)                        */
/* -------------------------------------------------------------------------- */
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// ────────────────────────────────────────────────────────────────────────────────
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //to check if it exist 
console.log(guests1);
// ────────────────────────────────────────────────────────────────────────────────
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');
// ────────────────────────────────────────────────────────────────────────────────
// Practical example to check existence of a value and property
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//short circuit if restaurant.orderPizza doesn't exist.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');