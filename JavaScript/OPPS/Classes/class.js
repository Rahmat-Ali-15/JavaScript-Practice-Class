/* 1. Create a Simple Class

Create a class Car with properties brand, model, and year.
Instantiate an object and log it to the console. */

/* Class Method

Add a method getCarInfo() in the Car class that returns the car details as a string.
Create an object and call the method.*/

class Car {
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarInfo(){
        return `${this.brand} ${this.model} ${this.year}`
    }
}
const car1 = new Car("Toyota", "Red", 2025);
console.log(car1);

const car2 = new Car("Honda", "Black", 2024);
console.log(car2.getCarInfo());


/* Class with Default Values

Add a default value for the year property if not passed when creating an object. */

class Car1 {
    constructor(model, year = "Unknown year"){
        this.model = model;
        this.year = year;
    }
}
const car3 = new Car1("Mahindra Thar");
console.log(car3.year);



/* Updating Object Properties

Add a method updateYear(newYear) to change the year of a car object.
Create an object, update its year, and print the updated info. */

class Car2 {
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }
    showInfo(){
       console.log(`${this.brand} Year: ${this.year}`);
    }
    updateYear(newYear){
        this.year = newYear;
    }
}

const myCar = new Car2("Tata Nexon", 2020);
myCar.showInfo();

myCar.updateYear(2025);
myCar.showInfo()