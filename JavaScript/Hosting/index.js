// <--------------------------------------- Hosting in variavles ---------------------------------->


console.log(name);  // output: undefined (because it is globally defined)|

//  var defined variavle globally and when we print its value before initialization it prints "undefined" but when we print its value after the initialisation then it prints the value (rahmat).

var name = "rahmat"
console.log(name);  // output: rahmat

console.log(Name); // output: Cannot access 'Name' before initialization (because it is not defined globaly)

// so when we print its value before initialisation it prints cannot acces value before initialization but when we print its value after initialization it prints the value (ali).

let Name = "ali"
console.log(Name); // output: ali

for(var i = 0; i<5; i++){
    console.log(i);  // output: 0,1,2,3,4
}
console.log(i); // output: 5 (because var is globaly defined so number 5 is initialize)

for(let i = 0; i<5; i++){
    console.log(i); // output: 0,1,2,3,4
}
console.log(i); // output: i is not defined(because let is not globaly defined so we can only print its value inside the loop.)

// <----------------------------------------- Hosting in function ---------------------------------->


function consoleData(){
    console.log("hello");
}
consoleData() // output: hello

function data(){
    let ans = name1();
    console.log("ans");
}

function name1(){
    return "hello"
}
data();