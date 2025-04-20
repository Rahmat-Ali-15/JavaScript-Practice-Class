// Print Hello, World! 5 times using a for loop.

// for ( let i= 1; i<=10; i++){
//     console.log("Hellow, World!")
// }



// Use a for loop to display numbers from 1 to 100 but only multiples of 10.

// for(let i =1; i<=10; i++){
//     console.log(i*10)
// }

// Write a program to find the factorial of a number using a for loop.

// let factNum = 10;
// let factStart = 1;
// for (i = 1; i <= factNum; i++) {
//     factStart *= i
// }
// console.log(factStart)



// Print all the letters of the word "PROGRAMMING" using a for loop.

// let word = "PROGRAMMING";

// for (i = 0; i < word.length; i++) {
//     console.log(word[i])
// }


// Use a for loop to reverse a string.

// for (let i=8;i>0;i--){
//     console.log(i)
// }


// Write a program to find the sum of digits of a number using a for loop.

// let num = 15;
// let sum=0;
// let convertor=num.toString().split("").map(Number);

// for (let i = 0; i < convertor.length; i++) {
//     sum += convertor[i];
// }
// console.log(sum);


// Write a program to find a Armstrong number.


// let num = 412;
// let digit = num.toString().split("").map(Number);
// let digitSum = 0
// for (i = 0; i < digit.length; i++) {
//     let cube = Math.pow(digit[i], 3)
//     digitSum += cube
//     // console.log(digitSum)
// }
// if (num === digitSum) {
//     console.log(digitSum, "It is a Armstrong Number")
// }
// else {
//     console.log(digitSum, "is not a Armstrong Number")
// }



// Print all numbers from 1 to 50 that are divisible by 3.

// for(let i = 1; i<=50; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }



// Print first 10 odd numbers.


for (let i = 0; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 2nd method

let count = 0;

for (let i = 1; count < 10; i += 2) {
    console.log(i);
    count++
}