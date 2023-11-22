// Searching for an item in an array

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const targetColor = 'green';

let indexOfColor = -1; // Initialize with -1, indicating not found

for(let i = 0; i < colors.length; i++){
    if(colors[i] === targetColor){
        indexOfColor = i;
        break; // exit the loop wehen the target color is found
    }
}

if(indexOfColor !== -1){
    console.log("The color " + targetColor + " was found at index "+ indexOfColor+ ".");
} else {
    console.log("The color " + targetColor + " was not found in the array.");
}