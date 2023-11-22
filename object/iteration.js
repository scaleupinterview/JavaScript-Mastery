// Create the Student Object

const student = {
    name: "Alice",
    age: 20,
    grades: {
        math: 95,
        science: 88,
        history: 75,
        litrature: 90   
    }
}

// Iterate through object properties using for...in
for(const key in student){
    if(student.hasOwnProperty(key)){
        console.log(`Property: ${key}, value: ${student[key]}`);
    }
}

// Get property names using Object.keys()
const propertyNames = Object.keys(student);
console.log("Property Names: ", propertyNames);

// Get property values using Object.values()
const propertyValues = Object.values(student);
console.log("Property values: ", propertyValues);

// Calculate average grade
const gradeValues = Object.values(student.grades);
let total = 0;

for(const index of gradeValues){
    total += gradeValues[index];
}

const averageGrade = total / gradeValues.length;
console.log("Average Grade: ", averageGrade);