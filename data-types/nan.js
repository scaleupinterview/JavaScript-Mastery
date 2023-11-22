// Common scenarios that produce NaN

let zeroDivision = 0/0; // Division by zero
console.log(zeroDivision); // NaN

// Parsing a non-numeric string
let nonNumber = parseInt('abc')
console.log(nonNumber);

// Square root of a negative number
let result = Math.sqrt(-1);
console.log(result);


console.log(NaN + 5); // NaN
console.log(NaN * 10); // NaN

console.log(typeof NaN); // number

// comparison with NaN
console.log(NaN === NaN);

// Checking for NaN
console.log(isNaN(NaN)); // true
console.log(isNaN('abc')); // true
console.log(isNaN(42)); // false

// Handling NaN
let value  = parseInt('abc');
if(isNaN(value)){
    console.log("Invalid number");
}