const radius = 5;
// area = PI * (radius ^ 2)
const area = Math.PI * Math.pow(radius, 2);
console.log(`The area of the circle is ${area.toFixed(2)}`);

let randomNumber = Math.floor(Math.random() * 6) + 1;// Generates a random integer between 1 and 6
console.log(`You rolled a ${randomNumber}`);

const number = 7.3;
console.log(`Rounded to ${Math.round(number)}`);

console.log(` Floor: ${Math.floor(number)}`);

console.log(`Ceil: ${Math.ceil(number)}`);

//Calculating Square roots
const value = 25;
console.log(`The square root of ${value} is ${Math.sqrt(value)}`);
