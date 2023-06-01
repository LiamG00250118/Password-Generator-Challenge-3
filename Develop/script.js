// // Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// // Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("test");
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// function gather() {
//   var final = [];


//   var a = prompt("please provide how many characters you want in the password");


//   var b = confirm("Do you want uppercase");
//   var c = confirm("Do you want lowercase");
//   var d = confirm("Do you want numbers");
//   var e = confirm("Do you want special");
//   final.push(a);
//   final.push(b);
//   final.push(c);
//   final.push(d);
//   final.push(e);
//   return final;
// }

// var info = gather();

// console.log(info);

// function createList(infoArray) {
//   var finalList = [];
//   if (infoArray[1] == true) {
//     finalList = finalList.concat(uppercase);
//   }
//   if (infoArray[2] == true) {
//     finalList = finalList.concat(lowercase);
//   }
//   if (infoArray[3] == true) {
//     finalList = finalList.concat(numbers);
//   }
//   if (infoArray[4] == true) {
//     finalList = finalList.concat(specialCharacters);
//   }
//   return finalList;
// }

// var listFinal = createList(info);

// var numberOfCharacters = info[0];

// var password = '';
// for(count = 0; count < numberOfCharacters; count++)
// {
//     var randomInt = Math.floor(Math.random() * listFinal.length);
//     password += listFinal[randomInt];
// }

// console.log(password);


