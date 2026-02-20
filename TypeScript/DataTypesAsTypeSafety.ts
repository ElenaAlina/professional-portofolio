//Data Types

//-------------------------------------------------------------------
//Typescript is statically typed programming language, which means that you have to declare the type of a variable when you create it. This helps to catch errors at compile time and makes the code more readable.

let data:number=10;  //is a number
//data="Ten";  //can be defined like this and specify the number, which is not possible in JS and if we run the script with: 
//node .\DataTypes.ts we are going to receive an error 

//data="Ten";  //compile time error because you cannot change the type of a variable once it is declared

//it stores only the same type of the data

console.log(data);

//-----------------------------------------------------
//TS is type safety, but JS is NOT type safety, which means that you can assign any type of value to a variable without getting an error. 
//This can lead to unexpected behavior and bugs in your code.

let num1="5";
let num2=3;
let resultTS=num1+num2;  //result is 53 because num1 is a string and num2 is a number, so the + operator concatenates them 
// instead of adding them and is the same behavior as in JS

console.log("Result in TypeScript: " + resultTS);  //output is 53

//BUT if we specify the type of data, the behavior is the same, but we can see that TS is Type Safety
let num3:string="5";
let num4:number=3;
let resultTS2=num3+num4;

console.log("TS as a Type Safety language is: " + resultTS2);

//the NODE command cannot identify the data types and NOT use it
