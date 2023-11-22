// Declaring and initializing a Constant variable
const PI = 3.14159
console.log("The value of the PI is", PI);

// Attempting to reassign a constant variable
// PI = 3.14 // Uncommenting this line would result in a TypeError

// Constants can hold various data types
const person = {
    firstName: "Jane",
    lastName: 'Doe',
    age: 27
};
console.log("Person: ", person);

// Modifying properties of objects declared as const
person.age = 32;
console.log("Updated person: ", person);

//Constants can also be used for Arrays
const colors = ["red", "green", "blue"];
console.log("Colors: ", colors);

// Modifying the content of an array declared as const
colors.push("yellow");
console.log("Updated colors: ", colors);

// Constants within block scopes
function exampleFunction() {
    if(true){
        const blockScopedVar = "I am block-scoped variable";
        console.log(blockScopedVar);
    }
    // console.log(blockScopedVar); // block scoped const variable is not accessible here
}

exampleFunction();

// Constants are affected by the temporal dead zone(TDZ)
// Uncommenting the following line would result in a ReferenceError
// console.log(TDZVar);
const TDZVar = "I am in the temporal dead zone";
console.log(TDZVar); // this line is fine

// Constants must be initialized when declared
// Uncommenting the following line would result in a SyntaxError
// const uninitializedVar;

// Constants with destructuring
const { firstName, lastName } = person;
console.log("Destructured: ", firstName, lastName);