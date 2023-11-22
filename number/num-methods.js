let textNumber = "42";
let actualNumber = Number.parseInt(textNumber);
console.log(actualNumber);

//Number.ParseFloat
let textFloat = "3.14";
let actualFloat = Number.parseFloat(textFloat);
console.log(actualFloat);

//Number.isNaN
const notNumber= NaN;
const isValidNumber = 42;
console.log(Number.isNaN(notNumber)); // true
console.log(Number.isNaN(isValidNumber)) // false

//Number.isFinite()

const finiteNumber = 10;
const notFinite = Infinity;
console.log(Number.isFinite(finiteNumber)); // true
console.log(Number.isFinite(notFinite)); // false

//Special constants
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);