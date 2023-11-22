function exampleFunction(){
    var localVar = 'I am a local variable inside the function';
    console.log(localVar); // Accessible

    if(true){
        var innerVar = 'I am inner variable inside the block';
        console.log(innerVar);
    }
    console.log(innerVar);
}

exampleFunction();

// console.log(localVar); // Error: localVar is not defined (outside of the function)
// console.log(innerVar); // Error: innerVar is not defined (outside of the function)