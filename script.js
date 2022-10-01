// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Pseudocode
  // Gather user input on password requirements
    // input for # of characters
    // input for special characters
    // input for lowercase
    // input for uppercase
    // input for numbers 

  // Validate user input
    // num of characters between 8 and 128
    // what they answered true to include 
    
  // Decide how to choose what characters to include 
  // Randomly grab values from eachincludedd category 
  // Assemble password stringtot be returned

  // return "password string";

// My code starts here:

//Array variables to represent lower case characters, upper case characters, numbers, and special characters
//var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", "\ ", "/", ":", ";", "'", "<", ">", ",", ".", "?"];
//variables which choose a random string within the array
//var randomLC = Math.floor(Math.random() * 26);
//var randomUC = Math.floor(Math.random() * 26); // 26 represents the total number of letters in alphabet
//var randomNum = Math.floor(Math.random() * 10); // 10 represents number of numbers
//var randomSpecials = Math.floor(Math.random() * 31); // 31 represents number of special characters
//variables that turn a number from previous step into the string itself 
//var choiceLC = lowerCase[randomLC];
//var choiceUC = upperCase[randomUC];
//var choiceNum = numbers[randomNum];
//var choiceSpecials = specials[randomSpecials];

//Function declarations with console.log method that generate a random string from a given array

//function getRandomLowercase() {
//  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
//};

//console.log(getRandomLowercase());

//function getRandomUppercase() {
//  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//  return upperCase[Math.floor(Math.random() * upperCase.length)];
//};

//console.log(getRandomUppercase());

//function getRandomNumbers() {
//  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//  return numbers[Math.floor(Math.random() * numbers.length)];
//};

//console.log(getRandomNumbers());

//function getRandomSpecials() {
//  var specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", "\ ", "/", ":", ";", "'", "<", ">", ",", ".", "?"];
//  return specials[Math.floor(Math.random() * specials.length)];
//};

//console.log(getRandomSpecials());

//Next, I would like to create a function which would generate a random password which is indicated by the user's input length with functions I have created above
generatePassword();
//This function is able to ask a person for input, receive input, and ask what type of content in  the password the user wants
function generatePassword() {
  var user = prompt("Please, enter the number to choose length of the password (8 to 128 characters)");
  var userInput = Number(user);
  console.log(userInput);

  if (userInput >= 8, userInput <=128) {
    alert("Thank you for your input!");
  };

  if (userInput < 8, userInput > 128) {
    alert("Please enter the valid number of characters");
    generate();
  };

  var lowercaseConfirm = confirm("Lowercase?");

    if (lowercaseConfirm === true) {
      console.log(getRandomLowercase());
    };

  var uppercaseConfirm = confirm("Uppercase?");
    
    if (uppercaseConfirm === true) {
      console.log(getRandomUppercase());
    };

  var specialConfirm = confirm("Special characters?");
    
    if (specialConfirm === true) {
      console.log(getRandomSpecials());
    };
  
  var numbersConfirm = confirm("Numbers?");
    
    if (numbersConfirm === true) {
      console.log(getRandomNumbers());
    };

  for (i = 0; i<= userInput.length; i++) {
    getRandomLowercase();
    getRandomUppercase();
    getRandomNumbers();
    getRandomSpecials();
  }

};
//I got stuck on implementing random generators to produce the password of desired length, and connecting my function with functions which were given from the beginning. I do not understand how to make the for loop work in the desired manner
