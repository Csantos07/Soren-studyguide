// Functions

// Data Types?
// Strings  --- > "sequence of characters or numbers denoted by usally quotes"
// Booleans --- > true or false values
// Numbers  --- > 1,2,3

// Arrays   --- > collections ["beef", "checking", 1, {}]
// Objects  --- > have methods and attributes. Human. Shape.

// casting data types

// Function Definition
// Function Declaration
function doSomething() {
  console.log("hello world");
}

// parameters or arguments
// variables you can pass in to function
function sorensFavoriteQuote(param1) {
  console.log(param1);
}

// Functions can be called multiple times
// This is called a FUNCTION CALL
// doSomething();
// doSomething();
// doSomething();
// doSomething();
// doSomething();

sorensFavoriteQuote("Just Keep Going!");

function addTwoNums(param1, param2) {
  console.log(param1 + param2);
}

addTwoNums("Dashawna:", " Master Full Stack Dev");
// --------------------------------------------------

// --------------------------------------------------
//
//

function lowerCaseAndRemoveApostrophes(word) {
  let wordLowerCased = word.toLowerCase();
  wordLowerCased = wordLowerCased.replace(/'/, "s")
  console.log(wordLowerCased);
}

lowerCaseAndRemoveApostrophes("SO'ME WO'RD NEE'DING LOWER''CASING");


// console.log("Lets make 250,000,000");

// for (let counter = 0; counter <= 20; counter += 2) {
//   if (counter === 10) {
//     console.log("We don't want to print counter");
//   } else {
//     console.log(counter);
//   }
// }

let thingsWeCanDoToGetBetter =
  [
    "read through modules",
    "use vs code to practice",
    "do good research",
    "learn terminology",
    "attend q and a"
  ];

// Arrays are a kind of object, methods (functions) & propties
for (let counter = 0; counter < thingsWeCanDoToGetBetter.length; counter++) {
  console.log(thingsWeCanDoToGetBetter[counter]);
}
