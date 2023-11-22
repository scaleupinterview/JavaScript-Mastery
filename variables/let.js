if(true) {
    let x =10;
    console.log(x) // Outputs: 10 // (block-scope)
}
// console.log(x); // Throws a ReferenceError (out of scope)

// Cannot re-declare 
let y = 20;
// let y = 30; // SyntaxError

// TDZ example
// console.log(z); // Throws a Reference Error (TDZ)
let z = 40;

// Optional Initialization

let a;
console.log(a);
let = 50;