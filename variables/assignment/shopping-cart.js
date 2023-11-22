// Item 1: Laptop
let laptopName = "Laptop";
let laptopPricePerUnit = 800;
let laptopQuantity = 2;
let laptopTotalPrice = laptopPricePerUnit * laptopQuantity;

console.log(`Item: ${laptopName}`);
console.log(`Price per unit: $${laptopPricePerUnit}`);
console.log(`Quantity: ${laptopQuantity}`);
console.log(`Total price: $${laptopTotalPrice}`);
console.log("-----------------------------");

// Item 2: Smartphone
let phoneName = "Smartphone";
let phonePricePerUnit = 500;
let phoneQuantity = 3;
let phoneTotalPrice = phonePricePerUnit * phoneQuantity;

console.log(`Item: ${phoneName}`);
console.log(`Price per unit: $${phonePricePerUnit}`);
console.log(`Quantity: ${phoneQuantity}`);
console.log(`Total price: $${phoneTotalPrice}`);
console.log("-----------------------------");

// Item 3: Headphones
let headphonesName = "Headphones";
let headphonesPricePerUnit = 50;
let headphonesQuantity = 5;
let headphonesTotalPrice = headphonesPricePerUnit * headphonesQuantity;

console.log(`Item: ${headphonesName}`);
console.log(`Price per unit: $${headphonesPricePerUnit}`);
console.log(`Quantity: ${headphonesQuantity}`);
console.log(`Total price: $${headphonesTotalPrice}`);
console.log("-----------------------------");

// Overall Total Price
let overallTotalPrice = laptopTotalPrice + phoneTotalPrice + headphonesTotalPrice;
console.log(`Overall Total Price: $${overallTotalPrice}`);
