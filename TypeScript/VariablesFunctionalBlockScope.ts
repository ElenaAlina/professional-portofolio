//console.log("Hello!")

//Functional scope - var
/*function varScope()
{
    if(true){
        var msg="Hello World!";
        //console.log(msg);
    }
    console.log(msg);
}
//that's how you call the function
varScope();
*/

//Block scope - let and const
/*
function blockScope()
{
    if(true){
        let msg="Hello LET!";
        const greet="Hi there!";
        console.log(msg);
        console.log(greet);
    }
    //console.log(msg);
}
blockScope();
*/

//function scope mix
/*
function mixScope()
{
    if(true){
        var num1=10;
        let num2=20;
        const num3=30;
        //prints the output for all
        //console.log(num1);
        //console.log(num2);
        //console.log(num3);
    }
        
    //prints only the var variable as it is functional and global
    //for num2 it gives error as the let and const are block scope variables
        console.log(num1);
        //console.log(num2);
        //console.log(num3);
}
//mixScope();*/