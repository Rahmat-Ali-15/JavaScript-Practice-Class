// 1. Write a ptogram that prints numbers from 1 to 10 by using  do-while loop.

// let num = 1;

// do {
//     console.log(num);
//     num++
// }
// while (num <= 10)


// 2. Create a program that ask the user to enter a number and keeps doubling it until it exceeds 1000.

// let num = 65;

// do {
//     if (num <= 0 || num === "") {
//         console.log("Invalid Number")
//         break
//     }
//     console.log(num);
//     num = num * 2
// }
// while (num <= 1000)


// 3. Write a program that prints the first 10 even numbers using a do-while loop.

// let num = 1;
// let count=0;

// do {
//     if(num<=0){
//         console.log("Invalid Number")
//         break
//     }
//     if (num % 2 === 0) {
//         console.log(num);
//         count++
//     }
//     num++
// }
// while (count<10)


// 4. Implement a program that takes input from the user and keeps asking until they enter a negative number.


// 5. Write a program that prints numbers in reverse order from 20 to 1 using a do-while loop.

// let num = 20;

// do {
//     console.log(num)
//     num--;
// }
// while (num > 0);


// 6. Create a program that ask the user to guess a random number between 1 to 50. The loop shoulf continue until they guess correctly.

// let num = 7;
// let userNumber = Number(prompt("Guess the number between 1 to 50"));

// do {
//     if (num === userNumber) {
//         console.log("Congratulations! You guessed the correct number!");
//         break;
//     }
//     userNumber = Number(prompt("Wrong guess! Try again:"));
// } 
// while (num !== userNumber);


// 7. Write a program that takes an integer input and calculate the sum of its digits using a do-while loop.

// let integer = 3464;

// let reverseInt = integer.toString().split("").map(Number);

// // console.log(reverseInt)
// let sum = 0;
// let i = 0;

// do {
//     sum += reverseInt[i];
//     i++
// }
// while (i < reverseInt.length)
// console.log("Sum of integer:", sum)

// 8. Implement a program that takes a numbers as input and prints its multiplication table up to 10 using a do-while loop.

// let num = 69;
// let i = 1;

// do {
//     let table = num * i;
//     console.log(`${num} x ${i} = ${table}`)
//     i++
// }
// while (i <= 10)


// 9. Write a program that keeps taking user input and counts how many times they entered an even number. The loop should stop when they enter 0.

// let userNum = Number(prompt("Enter even number(Enter 0 to stop)"));
// let count = 0;

// do {
//     if (userNum % 2 === 0 && userNum !== 0) {

//         count++
//     }
// }
// while (userNum !== 0)
// console.log("User entered", userNum, "even number");                                  /\ PUCHHNA HAI SIR SE


// 10. Create a program that finds the factorial of a given number using a do-while loop.

// let num = 7;
// let count = 1;
// let i = 1;

// do {
//     count *= i;
//     i++
// }
// while (i <= num)
// console.log(count);



// 11. Develop a program that continuously takes user input and finds the largest number entered. The loop should terminate when the user enters -1.



// 12. Write a program that simulates an ATM. The user enters a PIN and the loop continues until they enter the correct PIN (assuming 3 attempts maximum).

// let correctPin = 9262;
// let userPin = Number(prompt("Enter your four digit ATM pin"));

// do {
//     if (userPin === correctPin) {
//         console.log("Paise hi Paise!");
//         break
//     }
//     userPin = Number(prompt("Wrong Pin! Try again:"))
// }
// while (userPin !== correctPin)


// 13. Implement a number guessing game where the program randomly selects a numger between 1 and 100, and the user keeps guessing until they get it right. The program should display hints("Too high" or "Too low").


let num = 77;
let userNumber = Number(prompt("Guess the number between 1 to 100"));

do {
    if (userNumber > 100 || userNumber <= 0) {
        console.log("Invalid number! Please enter a number between 1 to 100");
    }
    else if (userNumber === num) {
        console.log("Genius hai re Baba!");
        break
    }
    else if (userNumber > 90) {
        console.log("Too high");
    }
    else if (userNumber < 30) {
        console.log("Too low");
    }
    if (userNumber !== num) {
        userNumber = Number(prompt("Wrong guess! try again:"))
    }
}
while (true)


// 14. Write a program that checks if a number is palindrome using a do-while loop.



// 15. Create a simple calculator that repeatedly asks the user for two numbers and an operation (+,-,*,/) until they choose to exit. 




