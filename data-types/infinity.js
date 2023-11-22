let maxNumber = Number.MAX_VALUE;
let result = maxNumber * 2;
console.log(result == Infinity);

let result2 = 1000 < Infinity
console.log(result2);

function handleInfinity(value){
    if(isFinite(value)){
        console.log('value is a finite number')
    } else {
        console.log('value is infinity')
    }
}

handleInfinity(10);
handleInfinity(Infinity);