// Define the main function
function calculate(num1, num2, callback){
    // Perform a calculation
    const result = num1 + num2;

    // Call the callback function with the result
    callback(result);
}

// Define the callback function
function logResult(result){
    console.log("The result is:" + result);
}

// Call the main function with the callback
calculate(5,3, logResult);
