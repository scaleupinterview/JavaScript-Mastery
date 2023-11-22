let five = 5;
let five2 = 5;
console.log(five == five2); // This evaluates to true

// Strict equal (===)
let strFive = "5"
console.log(five === strFive); // This evaluates to false because they have different data types

// Not equal (!=)
let three = 3;
console.log(five != three); // This evaluates to true because 5 is not equal to 3

// Strict not equal (!==)
console.log(five !== strFive); // This evaluates to true because they have different data types

// Greater than (>)
let ten = 10;
console.log(ten > five); // This evaluates to true

// Less than (<)
let seven = 7;
console.log(three < seven); // This evaluates to true

// Greater than or equal (>=)
console.log( five >= five2); // This evaluates to true because 5 is equal to 5

// Less than or equal (<=)
console.log(three <=  seven) // This evaluates to true because 3 is less than 7
