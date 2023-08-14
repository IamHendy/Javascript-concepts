//using template literal

let farmer = "John";
let bags = "five bags of potatoes"
let curency = "$500";

let text = `dear ${farmer} Your have sold ${bags}. You have earned ${curency}`;

document.getElementById("thelabel").innerHTML = text;