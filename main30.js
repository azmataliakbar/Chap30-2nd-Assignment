
/* Chapter-21,22,23,24,25,26,27,28,29,30 */

//^ Style-1
// Step 1: Input value from user as a string
var inputValue = "cloUd naTive computinG";

// Step 2: Convert every first letter of each word to uppercase
inputValue = inputValue.split(' ') // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and lowercase the rest
    .join(' '); // Join the array back into a string

//& Step 3: Print the value in the console ( write in terminal =>  node main30.js)
console.log("\n", inputValue); // Output: "Cloud Native Computing"


//^ Style-2
/*
 // Step 1: Input value from user as a string
var inputValue = "cloUd naTive computinG";

// Step 2: Convert every first letter of each word to uppercase
inputValue = inputValue.split(' ') // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and lowercase the rest
    .join(' '); // Join the array back into a string

// Step 3: Print the value in the console
alert(`inputValue letters => " cloUd naTive computinG " => changes letters`, inputValue);
//alert(inputValue);
// Output: "Cloud Native Computing"
 */


//^ Style-3


function displayCalculation() {
    var inputValue = "cloUd naTive computinG";

    // Convert first letter of each word to uppercase
    inputValue = inputValue.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    // Set the alert message
    document.getElementById("alertMessage").textContent = inputValue;

    // Show the alert
    document.getElementById("customAlert").style.display = "block";
    }

    function closeAlert() {
    // Hide the alert
    document.getElementById("customAlert").style.display = "none";
    }
