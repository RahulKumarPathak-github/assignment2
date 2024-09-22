// Create a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3]);

// Create a Map to store the number and its square
const numberSquares = new Map();

// Populate the Map with the square of each number from the Set
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number ** 2);
});

// Print the unique numbers and their corresponding squares
console.log("Unique numbers and their squares:");
numberSquares.forEach((square, number) => {
    console.log(`${number}: ${square}`);
});