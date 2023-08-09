let snacks = ["crisps", "tortilla", "sweet", "cookie"];
console.log (snacks);//prints a list of fruits

console.log(snacks[2]);//prints a specficindex of fruits

let length = snacks.length;
console.log(length);//prints how many elements are in the array

snacks. push("wafer");
console.log(snacks);//adds an elelment at the end of the array
snacks.pop();
console.log(snacks); //removes element at the end of the array
snacks.unshift("chocolate");
console.log(snacks);//adds an element at the beginning of an array
snacks.shift();
console.log(snacks);//removes an element at the beginning of array

console.log(snacks.indexOf("cookie"));