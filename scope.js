let global = 'global';

function myScope(){
    let local ='local'
    return local;
}

// console.log(local);

console.log(global);
console.log(myScope());

