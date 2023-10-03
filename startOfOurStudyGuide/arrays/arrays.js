// Working with arrays
//
// Arrays are a data structure
// Often when we need a simple list of things we can use arrays

let listOfGroceries = ["Apples", "Bananas", "Limes", "Lemons"]

let i = 1;

console.log(listOfGroceries[i]);
// console.log(listOfGroceries[0]);
// console.log(listOfGroceries[1]);
// console.log(listOfGroceries[2]);
// console.log(listOfGroceries[3]);


// let listItemOne = "Apples";
// let listItemTwo = "Bananas";
// let listItemThree = "Limes";
// let listItemFour = "Lemons";

for (let currentIndex = 0; currentIndex < listOfGroceries.length; currentIndex++) {
  console.log(listOfGroceries[currentIndex]);
}

