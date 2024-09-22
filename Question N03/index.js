// Create a Map to store contact information
const contacts = new Map();

// Add contacts to the Map
contacts.set('John Doe', {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    location: 'New York'
});

contacts.set('Jane Smith', {
    name: 'Jane Smith',
    age: 30,
    email: 'jane.smith@example.com',
    location: 'Los Angeles'
});

contacts.set('Alice Johnson', {
    name: 'Alice Johnson',
    age: 22,
    email: 'alice.johnson@example.com',
    location: 'Chicago'
});

// Function to retrieve contact details by name
function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact not found for name: ${name}`;
    }
}

// Example usage
console.log(getContactDetails('John Doe'));
console.log(getContactDetails('Alice Johnson'));
console.log(getContactDetails('Unknown Person'));