// Assignment code here

// Prompt element that provides password criteria
let intro = prompt("Generate a random password!");
console.log(intro)

// Criteria - add password special characters

// Length - set min length to 8 and max to 128

// Character Types - determine which to include/exclude

// If / Else If Statement - Checking off each character type criteria

// Else - Make final statement to ensure all criteria is met

// Alert - Create alert to be displayed

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);