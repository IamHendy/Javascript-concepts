//using objects as arrays

class Car{
    constructor(model, colour, year) {
        this.model = model;
        this.colour = colour;
        this.year = year;
    }
}

const car1 = new Car("jeep", "white", "2024");
const car2 = new Car("Honda", "Black", "2021");
const car3 = new Car("Prado", "black", "2020");

const  allcars = [car1, car2, car3];
console.log(allcars);
console.log(allcars.model);
console.log(allcars.colour);
console.log(allcars.year);


