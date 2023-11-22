// Variables declared with var also hoisted, which means
// they can be used before the declaration.
hoistedVar = 'I am a hoisted variable';

var hoistedVar; // Declaration is hoisted to the top of the code

console.log(hoistedVar); //Accessible
