// Function with call.

let num1 = 5;
let num2 = 7;

function sum1() {
    console.log(num1 + num2);
}

// sum1()

// Function with return keyboard.

function sum2() {
    return num1 + num2
}

let ans = sum2()
// console.log(ans)


// Function with parameter.


function sum3(x, y) {
    // console.log(x,y)
}
let ans2 = sum3(num1, num2)
// console.log(ans2)

// or 
function sum4(x, y) {
    // console.log(x,y);
    return x + y
}
let ans3 = sum4(num1, num2)
// console.log(ans3)


const sum5=(v,j)=> {
    return v*j;
}
let ans4=sum5(num1,num2)
console.log(ans4);
