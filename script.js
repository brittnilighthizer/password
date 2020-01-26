// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = [];
var symbolic = ["~", "!", "?", "@", "#", "$", "%","^", "&", "*"];
var numberic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Meat of Application; getting all relevant variables from the user to create desired output
function generatePassword() {
  //Enforcing the NUMBER input ; return a number value not a 
  var passwordLength = parseInt(prompt("How many characters for password length?"));
  if (passwordLength<8 || passwordLength>128) {
    alert("Please enter a value between 8 and 128 characters.")
    writePassword();
  }
  //Make sure the value for password lenght is a number
  if (isNaN(passwordLength)) {
    alert("Please enter only a number between 8 and 128.")
    writePassword();
  }

  console.log(passwordLength);

  // Boolean for capital or lowercase
  var userAlpha = confirm("Would you like capital letters?")
  console.log(userAlpha);

  var userNumeric = confirm("Would you like numbers?")
  console.log(userNumeric);

  var userSymbol = confirm("Would you like symbols? ")
  console.log(userSymbol);

  //Variable to hold all the potential characters - from the arrays above
  var potentialCharacters = [];
  
  if (userAlpha) {
    // Concat ; adding strings/values together -- creating longer arrays
    potentialCharacters = potentialCharacters.concat(alpha);
  }

  if (userNumeric) {
    potentialCharacters = potentialCharacters.concat(numberic);
  }

  if (userSymbol) {
    potentialCharacters = potentialCharacters.concat(symbolic);
  }

  console.log(potentialCharacters);
  
  var createdPassword = []; 
  for (i=0; i<passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * potentialCharacters.length); 
    //adding an item to an array, 
    createdPassword.push(potentialCharacters[randomNumber]);
  }

  console.log(createdPassword.join(""));
// Returns this as the output to be used as a variable
  return createdPassword.join(""); 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function copyPassword() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector("#copy").addEventListener("click", copyPassword);