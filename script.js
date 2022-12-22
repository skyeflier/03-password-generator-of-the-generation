// Define the values that can be included in the final password generated
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const characters = ["!", "#", "$"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Create a function that prompts users for input, validates them and creates the password.
function generatePassword() {

    // Create an empty array for the final password to go into
    let passwordFinal = [];

    let selectedCharacters = [];

    //Create a function that prompts questions to user. Use console.log to check if code is running
    let numberLengthResponse = prompt("Hey friend! Please select a password length between 8-128.");
    parseInt(numberLengthResponse < 8 || numberLengthResponse > 128) //Make it so users have to include a number
    let numbersConfirm = confirm("If you'd like a number, click OK.")
    let characterConfirm = confirm("If you'd like some cool characters, click OK.");
    let lowerCaseConfirm = confirm("If you'd like some lavish lowercase letters, click OK.");
    let upperCaseConfirm = confirm("If you'd like some ugly uppercase letters, click OK.");

    // Create a loop that checks if the use didn't select ANY values, they need to start over
    if (numbersConfirm === false &&
        characterConfirm === false &&
        lowerCaseConfirm === false &&
        upperCaseConfirm === false) {
        alert("Hey you silly goose, you gotta pick at least one value to create a password — try again!");
    }

    //Use JS Array push() loop to push the users confirmed value selections to the passwordFinal value. 
    if (numberLengthResponse < 8 || numberLengthResponse > 128) {
        alert("Hey make sure you have 8-128 characters.")
    };
    if (numbersConfirm) {
        selectedCharacters.push(...numbers)
    };
    if (characterConfirm) {
        selectedCharacters.push(...characters)
    };
    if (lowerCaseConfirm) {
        selectedCharacters.push(...lowerCase)
    };
    if (upperCaseConfirm) {
        selectedCharacters.push(...upperCase)
    };
    console.log(selectedCharacters)

    for (let i = 0; i < numberLengthResponse; i++) {
        let randomNum = Math.floor(Math.random() * selectedCharacters.length);
        let randomChar = selectedCharacters[randomNum];
        passwordFinal.push(randomChar);
    }

    return passwordFinal.join(""); //joining all the letters into one string
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input - needs to be a certain length, random, and a loop
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);