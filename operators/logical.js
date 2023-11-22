let age = 25;
let hasDriverLicense = true;
let canDrive = age >= 18 && hasDriverLicense;
console.log(canDrive);

let hasCreditCard = false;
let hasPayPayAccount = true;
let canMakePayment = hasCreditCard || hasPayPayAccount
console.log(canMakePayment);

let isLoggedIn = false;
let isNotLoggedIn = !isLoggedIn;
console.log(isNotLoggedIn);

let isAdult = false;
let hasLicense = true;
canDrive = isAdult && hasLicense; //short-circute evalution of and operator
console.log(canDrive);