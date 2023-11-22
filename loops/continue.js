// Skipping negative numbers in an array

const numbers = [5, -2, 9, -7, 3, 12, -4];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        continue; // skip negative numbers and continue to the next iteration
    }
    console.log(numbers[i]);
}
