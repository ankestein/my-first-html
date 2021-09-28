// ---------------------------------------
// Try out JavaScript Basics
// ---------------------------------------


// ---------------------------------------
// Functions
// ---------------------------------------
function add(a, b) {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

const simpleMultiply = (a, b) => a * b;

const var1 = 3;
const var2 = 15;
const result = multiply(var1, var2);

console.log(add(2, 7));
console.log(`${var1} times ${var2} equals ${result}`);
console.log(simpleMultiply(2, 3));



// ---------------------------------------
// Arrays
// ---------------------------------------
const myArray = [2, 4, "head", "foot"];
myArray.push(55);
console.log(myArray);
myArray.push(["orange", "apple"]);
console.log(myArray);
myArray.pop();
console.log(myArray);



// ---------------------------------------
// Objects and Spreading
// ---------------------------------------
const person = {
    name: "Tilda Flynn",
    age: 25,
    city: "Dublin"
}

person.gender = "female";

const person2 = {...person, name: "Tom Donovan", gender: "male"};

console.log("person", person);
console.log("person2", person2);