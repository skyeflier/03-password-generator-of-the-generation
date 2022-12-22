var generateBtn = document.querySelector("#generate");

// Define the values that can be included in the final password generated
function generatePassword() {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const characters = ["!", "#", "$"];
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Create an empty array for the final password to go into
    let passwordFinal = "";

    //Create a function that prompts questions to user. Use console.log to check if code is running
    function askQuestion() {
        let numberLengthResponse = prompt("Hey friend! Please select a password length between 8-128.");
        let characterResponse = prompt("If you'd like some cool characters, click OK.");
        let lowerCaseResponse = prompt("If you'd like some lavish lowercase letters, click OK.");
        let upperCaseResponse = prompt("If you'd like some ugly uppercase letters, click OK.");

        //Confirm which values the user wants in their password.
        let lengthConfirm = confirm("That's my favorite number!");
        let characterConfirm = confirm("Wow, solid special character choice.");
        let lowerCaseConfirm = confirm("Little characters need love too.");
        let upperCaseConfirm = confirm("Making some alphabelt supper with these upper case letters!");

        // Create a loop that checks if the use didn't select ANY values, they need to start over
        if (lengthConfirm === false &&
            characterConfirm === false &&
            lowerCaseConfirm === false &&
            upperCaseConfirm === false) {
            alert("Hey you silly goose, you gotta pick at least one value to create a password — try again!");
        }

        //Use JS Array push() loop to push the users confirmed value selections to the passwordFinal value. 
        if (numberLengthResponse < 8 || numberLengthResponse > 128) {
            passwordFinal.push(...numbers)
        };
        if (characterResponse) {
            passwordFinal.push(...characters)
        };
        if (lowerCaseResponse) {
            passwordFinal.push(...lowerCase)
        };
        if (upperCaseResponse) {
            passwordFinal.push(...upperCase)
        };
    }
}
askQuestion() //Invoke the askQuestion function. This must be done outside the curly braces because you can't invoke a function where it's being define. 

return "Generate password will go here!";

// // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// let generatePassword = [length, hasCharacters, hasLowerCase, hasUpperCase, hasNumbers]
// let generatePassword = [...characters, ...lowerCase, ...upperCase, ...numbers];


// 1. Prompt user for password criteria: DONE
//      Letters, numbers, characters (USE ARRAYS)
//      Password Length 8< 128
//      Uppercase, lowercase, numbers, special characters
// 2. Validate the user's input - ensure we meet the criteria above DONE
// 3. Generate the password
// 4. Display password generator on the page - DONE