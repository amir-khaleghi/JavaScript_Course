"use strict";
//SECTION DATA STRUCTURE
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

//ANCHOR String Methods Practice

//ANCHOR Challenge 4
// ────────────────────────────────────────────────────────────────────────────────

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/
/*
// ────────────────────────────────────────────────────────────────────────────────
//NOTE create a new element in body of html
// ────────────────────────────────────────────────────────────────────────────────
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
// ────────────────────────────────────────────────────────────────────────────────
// HINT 1: Remember which character defines a new line in the textarea 😉
//NOTE get input from textarea
// ────────────────────────────────────────────────────────────────────────────────
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
//NOTE creat an array of inputs by seperating them
// ────────────────────────────────────────────────────────────────────────────────
  const rows = text.split("\n");
  // HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// ────────────────────────────────────────────────────────────────────────────────
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
*/
//ANCHOR Working With Strings part3
/* -------------------------------------------------------------------------- */
/*                         Working With Strings part3                         */
/* -------------------------------------------------------------------------- */
/*
//NOTE split() join()
// ────────────────────────────────────────────────────────────────────────────────
console.log("a+very+nice+string".split("+")); // create a new array
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const newName1 = ["Mr.", firstName, lastName.toUpperCase()].join("___");
console.log(newName1);

//NOTE function
// ────────────────────────────────────────────────────────────────────────────────
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  console.log("🚀 ~ file: script.js ~ line 66 ~ capitalizeName ~ names", names);

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica and smith davis");
capitalizeName("amir kHaleghi dehghan");

//NOTE padding: padStart, padEnd
// ────────────────────────────────────────────────────────────────────────────────
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Amir".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(51234123));
console.log(maskCreditCard(341234123512313));
console.log(maskCreditCard(341313231424534308));

//NOTE Repeat
const message2 = "Bad Weather... All Departures Delayed...";
console.log(message2.repeat(5));   

const planesInLine = function(n) {
  console.log(`There are ${n} planes in Line ${'✈'.repeat(n)}`)
}

planesInLine(5)
planesInLine(3)
planesInLine(12)
*/
//ANCHOR Working With Strings part2
/* -------------------------------------------------------------------------- */
/*                         Working With Strings part2                         */
/* -------------------------------------------------------------------------- */
/*
const airline = "TAP Air Portugal";

//NOTE toLowerCase()
//NOTE toUpperCase()
// ────────────────────────────────────────────────────────────────────────────────
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//NOTE Fix Capitalization in name
// ────────────────────────────────────────────────────────────────────────────────
const passenger = "joNaS"; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(
  "🚀 ~ file: script.js ~ line 61 ~ passengerCorrect:",
  passengerCorrect
);

//NOTE Comparing Emails
// ────────────────────────────────────────────────────────────────────────────────
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";
const lowerEmail = loginEmail.toLowerCase();

//NOTE trim()
// ────────────────────────────────────────────────────────────────────────────────
const trimmedEmail = lowerEmail.trim();

//NOTE use methods in a sequence
// ────────────────────────────────────────────────────────────────────────────────
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

//NOTE replace()
// ────────────────────────────────────────────────────────────────────────────────
const priceGB = "288,43₤";
const priceUS = priceGB.replace("₤", "$").replace(",", ".");
console.log("priceUS:", priceUS);

const announcement =
  "ALL passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); // g---global
//NOTE replaceAll()
// ────────────────────────────────────────────────────────────────────────────────
console.log(announcement.replaceAll("door", "gate"));

//STUB Booleans
// ────────────────────────────────────────────────────────────────────────────────
//NOTE includes()
//NOTE startsWith()
//NOTE endWith()
// decision on parts of strings
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("Aib"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus Family");
}

// NOTE Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
//ANCHOR Working With Strings part1
/* -------------------------------------------------------------------------- */
/*                            Working With Strings part1                      */
/* -------------------------------------------------------------------------- */
// ────────────────────────────────────────────────────────────────────────────────
/*
const airlines = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log("B730"[0]);

//NOTE length
// ────────────────────────────────────────────────────────────────────────────────
console.log(airlines.length);
console.log("Amir".length);

//NOTE indexOf()
// ────────────────────────────────────────────────────────────────────────────────
console.log(airlines.indexOf("r"));
console.log(airlines.indexOf("Portugal"));
console.log(airlines.indexOf("portugal")); // -1 because doesn't exist

//NOTE lastIndexOf()
// ────────────────────────────────────────────────────────────────────────────────
console.log(airlines.lastIndexOf("r"));

//NOTE slice()
// ────────────────────────────────────────────────────────────────────────────────
console.log(airlines.slice(4)); // 4 is the start include 4
console.log(airlines.slice(4, 7)); // 7 is the end exclude 7

console.log(airlines.slice(0, airlines.indexOf(" ")));
console.log(airlines.slice(airlines.lastIndexOf(" ") + 1));

console.log(airlines.slice(-2));
console.log(airlines.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got middle Seat 😥");
  else console.log("You got Lucky 😎");
};

checkMiddleSeat('11B')
checkMiddleSeat('11C')
checkMiddleSeat('11E')
checkMiddleSeat('11A')
console.log('----------------------------------------------------------------------')
//NOTE new String
// ────────────────────────────────────────────────────────────────────────────────
console.log(new String('Jonas')); 
//NOTE JS Behind the scene
// everytime we call a method on string JS convert the string to an object then after finishing operation it convert it back
console.log(typeof new String('Jonas')); 
*/

//ANCHOR Challenge 3
/* -------------------------------------------------------------------------- */
/*                                 Challenge 3                                */
/* -------------------------------------------------------------------------- */
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
GOOD LUCK 😀
*/
/* 
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// ────────────────────────────────────────────────────────────────────────────────
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// ────────────────────────────────────────────────────────────────────────────────
const events = [...new Set(gameEvents.values())];
console.log(events);
// ────────────────────────────────────────────────────────────────────────────────
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// ────────────────────────────────────────────────────────────────────────────────
gameEvents.delete(64);
// ────────────────────────────────────────────────────────────────────────────────
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// ────────────────────────────────────────────────────────────────────────────────
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// ────────────────────────────────────────────────────────────────────────────────
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL
// ────────────────────────────────────────────────────────────────────────────────
// for (const [min, event] of gameEvents) {
//   if (min<=45) {console.log(`[FIRST HALF] ${min}: ${event}`)}
//   else {console.log(`[SECOND HALF] ${min}: ${event}`)}
// }

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
//ANCHOR Which Data Structure to use ?
/* -------------------------------------------------------------------------- */
/*                        Which Data Structure to use ?                       */
/* -------------------------------------------------------------------------- */

//NOTE objects and sets for simple list and when you dont want to describe data

//NOTE Arrays and Maps for when you want to describe data

//ANCHOR Map ITERATION
/* -------------------------------------------------------------------------- */
/*                                Map ITERATION                               */
/* -------------------------------------------------------------------------- */
/*
//NOTE use array in map
const question = new Map([
  ["question", "what is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct👏"],
  [false, "Try Again!"],
]);
console.log(question);
//NOTE add an array to a map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//NOTE ITERATION ON A MAP 
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
//NOTE Quiz App
// const answer = Number(prompt("Your Answer:"));
const answer = 3;
console.log(answer);
// if (answer === 3) {
//   console.log(question.get(true));
// }else{
//   console.log(question.get(false));
// }
console.log(question.get(question.get("correct") === answer));

//NOTE Convert Map to Array

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//ANCHOR  Maps
*/
/* -------------------------------------------------------------------------- */
/*                              Maps Fundamentals                             */
/* -------------------------------------------------------------------------- */
/*
//NOTE new Map()
const rest = new Map();
//NOTE .set()
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Kerman,hematifar"));
// ────────────────────────────────────────────────────────────────────────────────
rest
  .set("categories", ["Iranian", "Japanese", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Open!")
  .set(false, "We are Closed!");

// console.log(rest.get(true));
// ────────────────────────────────────────────────────────────────────────────────
const time = 21;
//NOTE .get()
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// ────────────────────────────────────────────────────────────────────────────────
//NOTE .has()
console.log(rest.has("categories"));
// ────────────────────────────────────────────────────────────────────────────────
//NOTE .delete()
rest.delete(2);
console.log(rest);
// ────────────────────────────────────────────────────────────────────────────────
//NOTE .size
console.log(rest.size);
// ────────────────────────────────────────────────────────────────────────────────
//NOTE .clear()
// rest.clear();
// ────────────────────────────────────────────────────────────────────────────────
//NOTE Does it Work?
rest.set([1,2],'Test');
console.log(rest.get([1,2])); // Undefined beacause it is not the same in the heap

const arr = [1,2];
rest.set(arr,'Test');
console.log(rest.get(arr));// now works beacause arr refers to same Place in the memory
// ────────────────────────────────────────────────────────────────────────────────
// usage of Map in Dom
rest.set(document.querySelector('h1'),'Heading'); 
*/

//ANCHOR Sets
/* -------------------------------------------------------------------------- */
/*                                    Sets                                    */
/* -------------------------------------------------------------------------- */
/*
//NOTE new Set()
const ordersSet = new Set([
  "Pasta",
  "Pasta",
  "Pasta",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log("🚀 ~ file: script.js ~ line 59 ~ ordersSet", ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size); //33

console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);

ordersSet.delete("Risotto");
console.log(ordersSet);

// ordersSet.clear();

for (const order of ordersSet) console.log(order);

//NOTE Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
   
console.log(new Set('Amir Khaleghi').size);

*/

//ANCHOR Challenge 2
/* -------------------------------------------------------------------------- */
/*                             Coding Challenge 2                             */
/* -------------------------------------------------------------------------- */

/* 
Let's continue with our football betting app!
😉

GOOD LUCK 😀


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
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT:  how the odds and the game objects have the same property names

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

*/

//ANCHOR lOOPING Objects
/* -------------------------------------------------------------------------- */
/*              Looping Objects_ Object Keys, Values, and Entries             */
/* -------------------------------------------------------------------------- */

// // NOTE Property Names
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

//ANCHOR Optional Chaining
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
//ANCHOR Looping Arrays

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
// // console.log([...menu.entries()])
