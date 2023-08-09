//method 1

let numbers = [2, 8, 9, 89, 78, 98,12, 67];
console.log(...numbers);


// method 2
// using spread operator in concatenation
let class1 = [4, 5, 6];
let class2 = [7,8, 9];

class1.push(...class2);
console.log(class1);