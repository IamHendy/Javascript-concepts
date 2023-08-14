let grades = [90, 80, 70, 100, 60, 50];
let sortedarray = [...grades].sort((a, b) => a - b);
let descendingarray = [...grades].sort((a, b) => b -a);
console.log(sortedarray);
console.log(descendingarray); 
