// Bitwise AND (&)
let num1 = 5; // 0101
let num2 = 3; // 0011
let result = num1 & num2
console.log(result); // result 0001 (1 in decimal)

// Bitwise OR (|)
result = num1 | num2 // 0101 | 0011
console.log(result); // Result 0111 (7 in decimal)

// Bitwise XOR (^)
result = num1 ^ num2; // 0101 ^ 0011
console.log(result); // Result 0110 (6 in decimal)


// Bitwise NOT (~)
num1 = 5; // 0101
result = ~num1;
console.log(result); // Result 11111010 (-6 in decimal)

num1 = 5; // 0101
let shifted = num1 << 2; // Result 20 ( 5 * 2^2)
console.log(shifted)

// right shift (>>)
let num4 = 20; // 10100
shifted = num4 >> 2; // Result 5 (20 / 2^2)
console.log(shifted);

// Unsigned right shift (>>>)
num4 = 20; // 10100
shifted = num4 >>> 2;
console.log(shifted); // Result 5
