// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color + " " + lastName)

// Numbers:
let length = 16;
let weight = 7.5;
console.log(length + " " + weight)

// Bigint:
let a = BigInt("123456789012345678901234567890");
console.log(a)

// Boolean:
let x = 5;
let y = 5;
let z = 6;
console.log(x == y)       // Returns true
console.log(x == z)       // Returns false

//Unidentified
let car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined
let hat = "";    // The value is "", the typeof is "string"

//Null
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
console.log(person)



