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



// Practice questions


// 2.Given an object {name:"Alice", age:25, city:"New York"}, update the age property to 26 and add a new property country:"USA".

// let object = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
// }
// // updating age
// object.age = 26;
// // adding new property
// object.country = "USA"

// console.log(object)


// 3. Create an object with at least 3 properties and use a loop ot print each key-value pair.

// let object = {
//     name: "Asfar",
//     age: 20,
//     city: "Muzaffarpur",
// }

// for (let key in object) {
//     console.log(`${key} = ${object[key]}`);
// }



// 4. Create an object represeting a student with properties like  name, age, and grade, where grades itself is an object with subjects as keys and scores as values.

// let student = {
//     name: "Kharare",
//     age: 20,
//     grade: {
//         Mathematics: 100,
//         Science: 92,
//         English: 84,
//     }
// }

// for (let key in student) {
//     if(typeof student[key]=== "string" || typeof student[key]==="number"){
//         console.log(`${key} = ${student[key]}`);
//     }
//     if(typeof student[key]=== "object"){
//         for (let subject in student[key]) {
//             console.log(`${subject} = ${student[key][subject]}`);
//         }
//     }
// }




// 5. Create an object with a greet method that prints a greeting mesage using the object's properties.

// let object = {
//     greet: function (message) {
//         return message
//     }
// }
// let ans = object.greet("good")
// console.log(ans);



// 6. Given an object { name : "Rahmat", age: "20", job : "Developer"}, use destructuring to extract and print name and job.

// let object = {
//     name: "Rahmat",
//     age: "20",
//     job: "Developer",
// }

// let { name, job } = object;
// console.log(name, job);


// 7. Write a function that checks if a given property exists in an object and return true or false.

// let object = {
//     name : "silent",
//     age : 20,
//     marks : 481,
// };
// function hasproperty(obj,property){
//     return property in obj;
// }
// console.log(hasproperty(object,"marks"));


// Merge two objects {a:1,b:2} and {c:3,d:4} into a new object.

// let obj1 = {
//     a: 1,
//     b: 2,
// }
// let obj2 = {
//     c: 3,
//     d: 4,
// }

// let MergeObj = { ...obj1, ...obj2 };
// console.log(MergeObj);


// 8.Demonstrate how to create a shallow  copy and a deep copy of an object. 


