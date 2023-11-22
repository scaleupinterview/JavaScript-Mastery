// single quotes
var singQuotedString = 'This is a string with single quotes';

// Double quotes
var doubleQuotedString = "This is a string with double quotes";

// Escaping single and double quotes
var singleQuotes = 'This is a single-quoted string with a\'single quote\' inside.';
var doubleQuotes = "This is a double-quoted sting with a \"double quote\" inside.";

console.log(singleQuotes);
console.log(doubleQuotes);

// string length
var text = "hello, world!";
var length = text.length;
console.log("The length of the string is: " + length);

// Access characters
text = "Hello, World!";
var firstChar = text[0];
var secondChar = text[1];
var fifthChar = text[4];

console.log("First character: ", firstChar);
console.log("Second character: ", secondChar);
console.log("Fifth character: ", fifthChar);

// Concatenation in string
// Using the + operator

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " +lastName;
console.log(fullName);

// Using template literals (ES6)
fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Template literals
var age = 30;
var message = `My name is ${firstName} ${lastName}, and I am ${age} years old.`;
console.log(message);