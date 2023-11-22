// Basic syntax
// Without new keyword
let num = Number(10);

// With new keyword
let num2 = new Number('123');

// Conversion from strings
let strNum = "42";
let num3 = Number(strNum); // Converts the string "42" to the number 42

//invalid string
let invalidStr = "abc";
let num4 = Number(invalidStr);  // Returns NaN because "abc" cannot be converted to a number
console.log(num4)

// Conversion from Booleans
let boolTrue = true;
let numTrue = Number(boolTrue); // converts true to 1
console.log(numTrue)

let boolFalse = false;
let numFalse = Number(boolFalse) // converts false to 0
console.log(numFalse)

// Conversion from other data types
let date = new Date()
let numDate = Number(date);  // Converts the Date object to a number (timestamp)
console.log(numDate)

// Handling NaN
let userInput = "abc"
let numInput = Number(userInput);

if(isNaN(numInput)){
    console.log("Invalid input")
}