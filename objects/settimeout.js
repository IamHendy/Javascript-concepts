//invokes a function after a number
//of milliseconds

let item = "shirt";
let price = "$300";

let message = setTimeout(buyshirt, 4000, item, price);
let message2 = setTimeout(offer, 9000);
function buyshirt(item, price) {
    alert(`buy this ${shirt} at ${price}`);
}

function offer(){
    alert(` this offer lasts for a week`);
}