// charAt
var text = "Hello, world!";
var firstChar = text.charAt(0);
var fifthChar = text.charAt(4);

console.log("First character: ", firstChar);
console.log("Fifth character: ", fifthChar);

// charCodeAt
var firstCharCode = text.charCodeAt(0);
var fifthCharCode = text.charCodeAt(4);

console.log("Unicode value of first character: ", firstCharCode);
console.log("Unicode value of fifth character: ", fifthCharCode);

// concat
var firstName = "John";
var lastName = "Doe";
var greeting = "Hello, ";

var fullName = greeting.concat(firstName, " ", lastName);

console.log(fullName);

// indexOf
text = "Hello, world!";
var searchString ="world";

var index = text.indexOf(searchString);

console.log("Index of 'world':", index);

// lastIndexOf
text = "Hello, world! This world is beautiful.";
searchString = "world";

var lastIndex = text.lastIndexOf(searchString);

console.log("Last index of 'world'", lastIndex);


// includes
text = "Hello, world!";
searchString = "world";

var isFound = text.includes(searchString);

console.log("Does the string include 'world'?", isFound);