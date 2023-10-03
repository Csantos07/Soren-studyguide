// FizzBuzz Challenge in JavaScript

// Write a JavaScript program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz." For numbers which are multiples of both three and five, print "FizzBuzz."

// Your task is to implement the FizzBuzz logic in JavaScript.Create a function fizzBuzz that takes no parameters and outputs the FizzBuzz sequence up to 100.

// Here's a sample output for the first 15 numbers:

// Copy code
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// Make sure to test your function with different inputs and ensure it produces the correct FizzBuzz sequence.


// A new operator that you might not know ----> % (the modulous operator)
// ------------

// How can we count up to 100
// What do we do next? ---
// if else condition to do what?
// fizzbuzz @ every number divisible by 15
// fizz @ every number divisible by 3
// buzz @ every number divisible by 5


// We can use a param to make this more flexible?
function fizzBuzz(numberToCountUpTo) {
  for (let i = 1; i <= numberToCountUpTo; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// console.log(i);
// 15 is an argument...
// the arguments takes the place of the parameters
fizzBuzz(15);
console.log("********************************");
fizzBuzz(50);
