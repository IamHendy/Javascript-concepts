// objects contaain properies and methods
//properties are the attributes
//methods are what the object can do

const car = {//these are properties
    model: "jeep",
    color: "white",
    year: 2024,

    drive  : function(){//method
        console.log("It is an automatic drive");
    },

    brake : function() {
        console.log("It brakes itself in  an emergency");
    },
}

console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brake();



