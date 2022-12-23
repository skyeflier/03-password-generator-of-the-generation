// Define the values that can be included in the final password generated
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const characters = ["!", "#", "$"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() { // Create a function that prompts users for input, validates them and creates the password.

    let passwordFinal = []; // Create an empty array for the final password to go into

    let selectedCharacters = [];

    let numberLengthResponse = prompt("Hey friend! Please select a password length between 8-128."); //Create a function that prompts questions to user. Use console.log to check if code is running
    parseInt(numberLengthResponse < 8 || numberLengthResponse > 128) //Make it so users have to include a number
    let numbersConfirm = confirm("If you'd like some nutty numbers, click OK.")
    let characterConfirm = confirm("If you'd like some cattywampus characters, click OK.");
    let lowerCaseConfirm = confirm("If you'd like some lackluster lowercase letters, click OK.");
    let upperCaseConfirm = confirm("If you'd like some unloved uppercase letters, click OK.");

    if (numbersConfirm === false && // Create a loop that checks if the use didn't select ANY values, they need to start over
        characterConfirm === false &&
        lowerCaseConfirm === false &&
        upperCaseConfirm === false) {
        alert("Hey you silly goose, you gotta pick at least one value to create a password — try again!");
    }

    if (numberLengthResponse < 8 || numberLengthResponse > 128) {  //Use JS Array push() loop to push the users confirmed value selections to the passwordFinal value. 
        alert("Oopsie daisy! You gotta make sure you have 8-128 characters, my friend!")
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

    for (let i = 0; i < numberLengthResponse; i++) {     //Create a for loop that will cycle through the function above to select each character at random to the length designated by the user. 
        let randomNum = Math.floor(Math.random() * selectedCharacters.length);
        let randomChar = selectedCharacters[randomNum];
        passwordFinal.push(randomChar);
    }

    return passwordFinal.join(""); //joining all the letters into one string
}

var generateBtn = document.querySelector("#generate");

function writePassword() { // Write password to the #password input - needs to be a certain length, random, and a loop
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); // Add event listener to generate button