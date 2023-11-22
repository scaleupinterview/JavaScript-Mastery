function divide(a,b){
    try {
        if(b === 0){
            throw "Division by zero is not allowed";
        }
        return a / b;
    } catch (error) {
        console.error("an error occurred: ", error);
    } finally {
        console.log("Division attempt completed");
    }
}

console.log("Result 1: ", divide(10, 2));
console.log("Result 2: ", divide(8, 0));