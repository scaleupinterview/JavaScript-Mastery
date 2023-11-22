// Checking if a number is even or odd

// Step 1: Declare a variable and assign a function expression to it
const isEven = function(number){
    // Step 2: Define the function body
    if(number % 2 === 0){
        return true; // even
    } else {
        return false; // Odd
    }
}

// Step 3: Call the function
const num = 7;
const result = isEven(num);

// Step 4: Display the result
if(result){
    console.log(`${num} is even.`)
} else {
    console.log(`${num} is odd.`);
}