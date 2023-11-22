function varTDZ(){
    console.log(x); // undefined due to temporal dead zone
    var x = 10;
    console.log(x);
}

varTDZ();

function letTDZ(){
    console.log(x); // Error: cannot access 'x' before initialization
    let x =10; // Variable declaration and initialization
    console.log(x); // 10
}

letTDZ();