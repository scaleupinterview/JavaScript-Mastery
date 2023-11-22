// Calculate the average of an arbitrary number of test scores

// Defining the function
function caculateAverage(...scores){
   // Calculating the average
   const total = scores.reduce((sum, score) => sum + score, 0);
   const average = total / scores.length;
   return average; 
}

// calling the function
const avg1 = caculateAverage(85,90,92,78);
const avg2 = caculateAverage(95, 88, 76, 82, 91, 89);
const avg3 = caculateAverage();

// Displaying the results
console.log(avg1);
console.log(avg2);
console.log(avg3);