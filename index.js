// Initialize the count for the number of cups of water
let count = 0;
// Initialize the total cups saved
let total = 0;

// Get the element where the current count is displayed
let countEl = document.getElementById("count-el");
// Get the element where the saved cups entries are displayed
let cupsEl = document.getElementById("cups-el");
// Get the element where the total cups count is displayed
let totalEl = document.getElementById("total-el");

// Function to increment the count of cups and update the display
function increment() {
    count += 1; // Increase count by 1
    countEl.textContent = count; // Update the displayed count
}

// Function to save the current count, update the saved entries and total count, and reset the count
function save() {
    cupsEl.textContent += count + " - "; // Append the current count to the saved entries
    total += count; // Add the current count to the total
    totalEl.textContent = "Total: " + total + " cups"; // Update the displayed total
    countEl.textContent = 0; // Reset the displayed count to 0
    count = 0; // Reset the count to 0
}

// Function to reset all counts and displays
function reset() {
    countEl.textContent = 0; // Reset the displayed count to 0
    count = 0; // Reset the count to 0
    cupsEl.textContent = ''; // Clear the saved entries
    totalEl.textContent = ''; // Clear the total display
    total = 0; // Reset the total count to 0
}
