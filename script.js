// Assignment code here


function generatePassword(){
var passwordLength = prompt("How long do you want your password to be?")
  console.log(passwordLength)

  var upperCaseOption = confirm( "Do you want uppercase characters?")
  console.log(upperCaseOption)

  var lowerCaseOption = alert( "Then you will have a lowercase password!")
  console.log(lowerCaseOption)

  if(upperCaseOption){

    console.log( " You want uppercase!")
  }
   else (lowerCaseOption)
   console.log( "Your password is lowercase!")

   function genPassword(){

   var chars= " 123456789/*!@#$$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
   
   var passwordLength= 125;
   var password= "";

   for (var i =0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomNumber,randomNumber +1);

    console.log('Your password is generated')

   }
 

   }

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