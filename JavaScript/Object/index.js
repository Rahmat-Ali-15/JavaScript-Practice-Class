//  1️⃣ Create an object named car with the following properties:

// brand: "Toyota"
// model: "Camry"
// year: 2022
// start(): A method that prints "Car is starting..."

// Solution 1

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: "2022",
//     start: function(){
//         console.log("Car is starting...");
//     }
// }
// console.log(car.brand);
// car.start();





// 2️⃣ Create a student object with properties: name, age, marks, and a method greet() that prints "Hello, my name is [name]".


// let student = {
//     name : "Rahmat",
//     age: 20,
//     marks:431,
//     greet: function(){
//         console.log("Hello, my name is "+ this.name);
//     },
// }
// student.greet();


// 3️⃣ Write code to add a new property city: "Mumbai" to an existing object.


// let student = {
//     name : "Rahmat",
//     age : "20",
// }

// // adding a new propery using dot notation.
// student.city= "Mumbai";

// console.log(student);



// 4️⃣ Write code to delete a property from an object.

// let student = {
//     name : "Rahmat",
//     age : "20",
//     marks : "431",
//     city: "Mumbai",
// }

// // deleting a property using dot notation

// delete student.city;

// console.log(student);



// 5️⃣ Create an object called calculator that has two numbers and the following methods:

// add(): returns the sum
// subtract(): returns the difference
// multiply(): returns the product
// divide(): returns the quotient


// let calculator = {
//     num1: 10,
//     num2: 2,

//     add: function () {
//         return this.num1 + this.num2;
//     },

//     subtract: function () {
//         return this.num1 - this.num2;
//     },

//     multiply: function () {
//         return this.num1 * this.num2;
//     },

//     devide: function () {
//         if (this.num2 > 0) {
//             return this.num1 / this.num2;
//         }
//         else {
//             return "Cannot divide by zero!";
//         }
//     },
// }

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.devide());

