//pasing objects as arguements

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

function diplayinfo (Car) {
    console.log(Car.model);
    console.log(Car.colour);
    console.log(Car.year);
}

diplayinfo(car3);
diplayinfo(car2);
diplayinfo(car1);
