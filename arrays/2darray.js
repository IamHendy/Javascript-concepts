// a 2d array is an array containing arrays

let meat = ["chicken", "steak", "fish", "sauage"];
let fruits = ["bananas", "mangoes", "apples", "grapes"];
let drinks = ["juice", "milk",  "soda", "milkshake"];

let shoppinglist = [meat, fruits, drinks];


for (let list of shoppinglist){
    for (let item of list) {
        console.log(item);
    }
}
