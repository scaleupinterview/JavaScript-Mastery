// Prompt user for temperature value and conversion type
let temperature = prompt("Enter the temperature value:");
let conversionType = parseInt(prompt("Choose conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius"));

let convertedTemperature;

// Perform temperature conversion based on user's choice
if (conversionType === 1) {
    // Celsius to Fahrenheit conversion
    convertedTemperature = (temperature * 9/5) + 32;
    console.log(`Original Temperature: ${temperature}°C`);
    console.log(`Converted Temperature: ${convertedTemperature}°F`);
} else if (conversionType === 2) {
    // Fahrenheit to Celsius conversion
    convertedTemperature = ((temperature - 32) * 5/9);
    console.log(`Original Temperature: ${temperature}°F`);
    console.log(`Converted Temperature: ${convertedTemperature}°C`);
} else {
    console.log("Invalid conversion type selected.");
}
