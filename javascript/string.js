// Create an array
let fruits = ["Apple", "Banana", "Cherry"];

// Add an element to the array
fruits.push("Date"); // Adding "Date"
console.log("After adding Date:", fruits);

// Remove an element from the array
fruits.splice(1, 1); // Removing "Banana"
console.log("After removing Banana:", fruits);

// Display the array
console.log("Fruits Array:", fruits);

// Loop through the array
console.log("Looping through the array:");
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Create a string
let greeting = "Hello, World!";

// Get the length of the string
let length = greeting.length;
console.log("Original String:", greeting);
console.log("Length of the string:", length);

// Convert the string to uppercase
let uppercase = greeting.toUpperCase();
console.log("Uppercase:", uppercase);

// Replace a substring
let replaced = greeting.replace("World", "JavaScript");
console.log("Replaced String:", replaced);

// Split the string into an array
let words = greeting.split(", ");
console.log("Split String into Array:", words);
