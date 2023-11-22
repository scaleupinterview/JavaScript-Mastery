// calculate the sum of numbers entered by the user until they choose to stop.

let sum = 0;
let userInput;

do {
    userInput = prompt("Enter a number (or 'stop' to quit):");

    // convert the input to a number if it's not "stop"
    if(userInput !== "stop"){
        let number = parseFloat(userInput);
        if(!isNaN(number)){
            sum += number;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }

} while (userInput !== "stop");

console.log("The sum of the entered numbers is:" + sum);