// Define the displayInfo function
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// Use call to invoke displayInfo with specific arguments
displayInfo.call(null, 'Alice', 'Developer');

// Use apply to invoke displayInfo with arguments passed as an array
displayInfo.apply(null, ['Bob', 'Designer']);

// Define the greet function that uses 'this' context
function greet() {
    console.log(`Hello, my name is ${this.name} and I'm a ${this.role}.`);
}

// Create an object for context
const person = {
    name: 'Charlie',
    role: 'Manager'
};

// Use bind to create a new function boundGreet with a specific context
const boundGreet = greet.bind(person);

// Invoke the boundGreet function to log the greeting
boundGreet();