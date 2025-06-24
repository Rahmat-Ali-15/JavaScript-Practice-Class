## Local Storage

-> Local Storage is a feature in JavaScript that allows us to store data in the user's browser. It stores data as key–value pairs and keeps it even after the page is refreshed or the browser is closed. It is mainly used to remember things like user input, preferences, or a to-do list. But it can only store data in string format, so we use JSON.stringify and JSON.parse when working with objects or arrays.

## setItem => Save (create/update) data.
Ex- localStorage.setItem("key", "value");

## getItem => Read (get) data.
Ex- let value = localStorage.getItem("key");

## removeItem => Remove a specific key.
Ex- localStorage.removeItem("key");

## clear() => Clear everything.
Ex- localStorage.clear();


## JSON.stringify() => to save arrays/objects
## JSON.parse() => to get them back as real JS data


## Syntax of local storage for simple string
1. localStorage.setItem("key", "value") — this stores data.
2. localStorage.getItem("name") - this retrieves data.

## Syntax of local storage for object
let object = {
    name: "Md Rahmat Ali",
    age: 20,
};
localStorage.setItem("userInfo", JSON.stringify(object)); - this store the data.
let user = JSON.parse(localStorage.getItem("userInfo")); - this give the data.
console.log(object);

## Syntax of local storage for array
let fruits = ["banana", "apple", "mango"];
localStorage.setItem("fruitData", JSON.stringify(fruits)); - this store the data.

JSON.parse(localStorage.getItem("fruits")); - this give the data
console.log(fruits);