// using a label to control nested loop

const arr1 = [1,2,3];
const arr2 = [4,5,6];

outerLoop: for(let i = 0; i < arr1.length; i++){
    innerLoop: for(let j = 0; j < arr2.length; j++){
        const num1 = arr1[i]
        const num2 = arr2[j];
        const sum = num1 + num2;
        if(sum % 2 === 0){
            continue innerLoop; // skip pairs with even sums
        }
        console.log(`Pair: ${num1}, ${num2}, Sum: ${sum}`);
    }
}