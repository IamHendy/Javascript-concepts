//array reduce simplies an array into one single  value

let values = [5, 6, 9, 11, 20];
let total = values.reduce(sum);

console.log(`the total sum is: ${total}`);

function sum(total, element) {
    return total + element;
}