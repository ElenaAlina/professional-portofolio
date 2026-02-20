//Hoisting
//VAR hoisting
/*
console.log(a);  //undefined - the variable is used before being assigned*/
var a = 10;
console.log(a);  //10

//LET hoisting
/*
console.log(a); //Error - Cannot access 'a' before initialization
let a = 20;
console.log(a); //20

//CONST hoisting
console.log(a); //Error - Cannot access 'a' before initialization
const a = 30;
console.log(a); //30
*/