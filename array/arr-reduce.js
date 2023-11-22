function multiply(prev, cur) {
    return prev * cur;
}

let total1 = [2,3,4,5].reduce(multiply);
let total2 = [2,3,4,5].reduceRight(multiply);
console.log(total1, total2);