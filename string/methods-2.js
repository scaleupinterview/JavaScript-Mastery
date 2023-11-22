// toLowerCase
var originalText = "Hello, World!";
var lowerCaseText = originalText.toLowerCase();

console.log("Original Text: ", originalText);
console.log("Lowercase Text: ", lowerCaseText);

// trim()
var text = "  Hello, World!   ";
var trimmedText = text.trim();
console.log("Original Text: ", text);
console.log("Trimmed Text: ", trimmedText);


// slice()
text = "Hello, World!";
var slicedText = text.slice(7, 12);

console.log("Original Text:", text);
console.log("Sliced Text:", slicedText);


// split()
text = "apple, banana, cherry, orange";
var fruitsArray = text.split(',');

console.log("Original Text:", text);
console.log("Split array:", fruitsArray);

// replace()
text = "Hello, World!";
var newText = text.replace("World", "Universe");

console.log("Original Text:", text);
console.log("Modified text: ", newText);

text = "Hello, World! World is wonderful!";
newText = text.replace(/World/g, "Universe");
console.log("Modified text: ", newText);

// match()
text = "The quick brown fox jumps over the lazy dog.";
var matches = text.match(/fox/g);

console.log("Original Text:",text);
console.log("Matches:", matches);

text = "The quick brown dog.";
var noMatches = text.match(/fox/g);

console.log("Original Text:",text);
console.log("Matches:", noMatches);

