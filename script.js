// Assignment code here


function generatePassword(){
var passwordLength = prompt("How long do you want your password to be?")
  console.log(passwordLength)

  var upperCaseOption = confirm( "Do you want uppercase characters?")
  console.log(upperCaseOption)

  var lowerCaseOption = confirm( "Then you will have lowercase characters?")
  console.log(lowerCaseOption)

  if(upperCaseOption){

    console.log( " You want uppercase!")
  }
   else (lowerCaseOption)
   console.log( "Your password is lowercase!")

   const chars =" 123456789/*!@#$$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let passWordContext = length;

   const array = passwordLength
   window.crypto.getRandomValues(array)

   console.log(array)


   }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

  alert( "Your password is generated")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// alert( "Your password is generated")