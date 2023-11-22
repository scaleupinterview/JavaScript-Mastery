// parse a JSON string

function parseJSON(jsonString){
    try {
        const parsedData = JSON.parse(jsonString);
        return parsedData;
    } catch (error) {
        console.error("An error occurred: ", error.message);
        return null;
    }   
}

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "Alice", "age": }';

const result1 = parseJSON(validJSON);
const result2 = parseJSON(invalidJSON);

console.log("Result 1:", result1);
console.log("Result 2: ", result2);