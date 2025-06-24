// const nameInput = document.querySelector("#username");
// const ageInput = document.querySelector("#userage");
const userName = document.querySelector(".name");
const userAge = document.querySelector(".age");

// let userData = JSON.parse(localStorage.getItem("userDetail"))


// nameInput.addEventListener("input", ()=>{
//     userName.innerText = nameInput.value;
// });

// ageInput.addEventListener("input", ()=>{
//     userAge.innerText = ageInput.value;
// });

// let object = {
//     name: nameInput.value,
//     age : ageInput.value,
// };

// userData.push(object)

// localStorage.setItem("userDetail", JSON.stringify(object))


// saving simple string in ls
localStorage.setItem("userName", "Rahmat");

let name = localStorage.getItem("userName");
userName.innerText = name;


localStorage.setItem("userAge","20");

let age = localStorage.getItem("userAge")
userAge.innerText = age;



// saving array in ls
let fruits = ["banana", "apple", "mango"];
localStorage.setItem("fruitData", JSON.stringify(fruits));

JSON.parse(localStorage.getItem("fruits"));
console.log(fruits);


// saving object in ls
let object = {
    name: "Md Rahmat Ali",
    age: 20,
};

localStorage.setItem("userInfo", JSON.stringify(object));

let user = JSON.parse(localStorage.getItem("userInfo"))
console.log(object);
