// Even or Odd
// Write a switch-case program that checks whether a given number is even or odd. Use the modulo operator (%).

let num1 = "5";
switch (true) {
    case Number(num1) === 0:
        console.log("Number cannnot be zero")
        break
    case isNaN(Number(num1)) || num1.trim() === "" || typeof num1 !== "number":
        // case typeof num1 === String:
        console.log("Invalid input, Please Enter an integer")
        break
    case Number(num1) % 2 === 0:
        console.log("Even Number")
        break
    case Number(num1) % 2 === 1:
    case Number(num1) % 2 === -1:
        console.log("Odd Number")
        break
    default:
        console.log("Invalid")
}