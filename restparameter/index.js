//rest parameters is used when ther is an indefinitenumber of parameters
let a = 2;
let b = 3;
let c = 9;
let d = 8;
let e = 7;

console.log (sum(a, b, c, d));

function  sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += numbers
    }
    return total 
}