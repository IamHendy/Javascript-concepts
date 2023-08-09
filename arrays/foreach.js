// array.foreach function does a specific 
//action for alll element  in an array

const  num = [6, 8, 9, 12];
// I will use for.each to double the result of each element

num.forEach(function(number){
    const double = number * 2;
    console.log(double);
})