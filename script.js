// Assignment Code
var generateBtn = document.querySelector("#generate");

var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbolic = ["~", "!", "?", "@", "#", "$", "%","^", "&", "*"];
var numbers = []
var passwordLength = 


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Use somehow? //

// var students = ["Kalani", "Brittni", "Zeb", "Diane", "Francisco", "Dane", "Cody", "Stephen", "James", "Margartita"];
// for (var i = 0; i < 5; i++) {
//   var randomStudent = Math.random()*10;
//   var randomStudentindex = Math.floor(randomStudent);
//   console.log(students[randomStudentindex]);
//   var random99 = Math.random()*100;

// }


console.log(alpha[random]);

// Creates a random number 0-9
Math.floor(Math.random() * 10);


// Use this somehow to adjust if they DO NOT want capital letters
alpha.toLowerCase();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
