// simulate rolling a six-sided die until we roll a 6

let rollResult;
let numberOfRolls = 0;

while(rollResult !== 6){
    rollResult = Math.floor(Math.random() * 6) + 1;
    numberOfRolls++
    console.log("Roll #" + numberOfRolls + ": " + rollResult);   
}

console.log("It took "+ numberOfRolls + " rolls to get a 6!");

