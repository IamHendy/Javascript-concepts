//try - tests a block of code for errors
//catch - handles the error
//throw - creates custom errors
//finally - executes code after try and catch   

try{

    let age = prompt("enter your age: ");
    if (age < 18) throw("You need to be 18 years and above");
    if (age == " ") throw("please enter your age");
}
catch(error){
    console.log(error);
}
finally{
    console.log("Thank you for visiting");
}