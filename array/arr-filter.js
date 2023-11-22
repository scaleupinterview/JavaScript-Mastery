let arr = [11,21,3,43,78,,6,100,120,0,7,90];


let gr50 = arr.filter((element) => {
    return element > 50;
}).sort((a,b) => {
    if (a > b){
        return 1
    } else if(a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(gr50);