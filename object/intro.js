// Creating a Person object
// Create an empty object
const person = {};

// Add properties to the object
person.name = "Alice";
person.age = 28;
person.isStudent = true;

// Accessing object properties
const name = person.name;
console.log(name);

// Adding a method to the object
person.introduce = function(){
    console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
}

// Invoking the method
person.introduce();

// Object Literal Notation
const person2 = {
    name: "Alice",
    age: 28,
    isStudent: true,
    introduce: function(){
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
    }
}

// Modify and delete properties
person.name = "Bob";
person.country = "Canada";
delete person.isStudent;