var globalVar = 'I am a global variable declared outside of the function';

function exampleFunction(){
    console.log(globalVar);
}

exampleFunction();

console.log(globalVar);