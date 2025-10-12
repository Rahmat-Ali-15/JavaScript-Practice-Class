/* 1. Create a Simple Class

Create a class Car with properties brand, model, and year.
Instantiate an object and log it to the console. */

class Car {
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car1 = new Car("Toyota", "Red", 2025);
console.log(car1);