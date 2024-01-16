//using let
//3 strings
let greeting = 'Hello World';
let greetingTwo = "Hello World";
let greetingThree = `Hello World`;

let newString = `I'm going to use it here ${greeting} and another here ${greetingTwo}`;

let numberOfPeople = 7.0;

console.log(greeting);

//using var
if(true) {
    var language = "JavaScript";
}

console.log(language);

//using const
const name = "Seth";
const birthYear = 1994;

//get user input
let response = prompt("What is your name?");

//alert(`Hello, ${response}!`);

//DOM manipulation
document.getElementById("heading").innerHTML = `Hello, ${response}!`;