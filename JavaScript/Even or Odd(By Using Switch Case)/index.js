// Even or Odd
// Write a switch-case program that checks whether a given number is even or odd. Use the modulo operator (%).

let num1 = 0;
switch (true){
    case num1 === 0:
        console.log("Number cannnot be zero")
        break
    case num1 % 2 === 0:
        console.log("Even Number")
        break
    case num1 % 2 === 1:
        console.log("Odd Number")
        break
    case num1 % 2 === -1:
        console.log("Odd Number")
        break
    default: 
        console.log("Invalid")
}