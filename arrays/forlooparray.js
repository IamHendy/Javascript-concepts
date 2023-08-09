//printing contents of an array in a forward manner
//method 1
let weeklysubs = [100, 1000, 10000,1000000];
for(let i of weeklysubs) {
    console.log(i);
}

//method 2
let currency = ["pounds", "dollars", "euros", "ksh"];
for (let i = 0; i < currency.length; i++) {
    console.log(currency[i]);
}

//printing in reverse
for (let i = weeklysubs.length - 1; i >= 0; i-- ) {
    console.log(weeklysubs[i]);
}
