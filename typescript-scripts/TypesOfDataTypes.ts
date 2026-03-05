/*
1 - Primitive Data types (also called Built-in) - allow single value at a time
Example of primitive data types:
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

2 - Non-primitive data types (also called Objects) - allow multiple values at a time
Example of non-primitive data types:
Array
Class
Function
Interface
Tuple
*/

// Primitive Data Types
/*
//1 - NUMBER TYPE - integeres and floating point numbers
let age5: number = 25;
let price5: number = 24.99;
let bigNumber = 54546546466;

console.log("My age is: ", age5);            // Output: 25
console.log("The mug's price is: ", price5);          // Output: 24.99
console.log("Like this we can write a big number: ",bigNumber);       // Output: 54546546466   

console.log("We can display the type of data like this: ", typeof(age5));          // Output: number
console.log("Or like this: " + typeof age5);                                       // Output: number
*/

//2 - STRING TYPE - sequence (group) of characters
/*
// " "  ' ' or ` ` (backtick)
let name1 = 'John';
let name2 = "Elena";
let name3 = `Eduardo`;
let name4: string = "Maria";

//store into a variable - with backtick ` `
let storednames:string = `Hello ${name1} ${name3}!`;
console.log(storednames);

console.log("My name is:", name1, "and my frinds are: ", name2,"," ,name3,"," ,name4,".");
*/

//3 - BOOLEAN TYPE - true or false
/*
let isProfessor:boolean= true;
let isStudent:boolean = false;

console.log("Is Mike the Math Professor?", isProfessor);          // Output: true
console.log("Is Mike a student?", isStudent);                     // Output: false
*/

//4 - NULL TYPE - represents the intentional absence of any value
/*
let nullValue: null = null;
console.log("The value of nullValue is: ", nullValue);          // Output: null

//5 - UNDEFINED TYPE - represents a variable that has been declared but not assigned a value
let undefinedValue: undefined;
console.log("The value of undefined type variable is: ", undefinedValue);          // Output: undefined

let price6:number;
console.log(price6);          // Output: undefined
*/
//6 - ANY TYPE - can hold any type of value and can be reassigned to different types -> is NOT TYPE SAFETY
/*
let value:any="Welcome";
console.log(typeof(value));

value=123;
console.log(typeof(value));

value=true;
console.log(typeof(value));

console.log(value);
*/
//7 - UNION TYPE - allows a variable to hold more than one type of value -> is not a keyword ->union of multiple data types
/*
let unionValue: string | number; // can be either a string or a number
unionValue = "Hello";
console.log("Union value as string: ", unionValue);          // Output: Hello

let id:number | string | boolean;

id="ABC123";

console.log(id);          // Output: ABC123
id=123;
console.log(id);      // Output: 123
id=true;
console.log(id);      // Output: true
*/
//8 - VOID TYPE - represents the absence of any value, typically used for functions that do not return a value -> NOT FOR VARIABLES
//void -> the function does not return anything
/*
function greet(): void {
    console.log("Hello, welcome to TypeScript!");
}
greet();

function sum():number   //the function returns a number and we need to specify the data type of the return value
{
    return 10+20;
}
    */
   //simple void, as the function does not return anything
   //to return something, we specify :number and return(x+y); let result=sum(10,20); console.log(result);
   function sum(x:number, y:number):void  //void is optional
   {
    console.log(x+y);
   }
    sum(10,20);