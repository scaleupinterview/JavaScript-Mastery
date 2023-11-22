function isEven(element) {
    console.log(element);
    return element % 2 == 0;
}

let result = [1,3,5,7,10,6,12,15].some(isEven);
console.log(result);