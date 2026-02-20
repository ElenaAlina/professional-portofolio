//JS is Dynamically Typed Programming Language

let age1=30;    //age is a number
console.log(typeof(age1));   //returns what type is: number

age1="Thirty"   //is dynamic because you can change directly from number to a string
console.log(typeof(age1));   //returns the last type: string

console.log(age1);   //output: Thirty

//execute it by writing node .\TestDataTypesJavaScriptExemplu.js in the terminal

//-----------------------------------------------------------------------------------
//WHY the JS is not type safety
let message="Hello";
let count=30;

message=100;  //no error, you can assign a number to a string variable
console.log(message);  //output: 100

let result="5"+3;  //output 53 -> it concatenates them and this is not type safety because it should be 8 if it was type safe, 
// but it is not, it treats 5 as a string and concatenates it with 3, instead of adding them as numbers
console.log(result);
