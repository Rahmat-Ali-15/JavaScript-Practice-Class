// Simple Calculator
// Write a program that asks the user for two numbers and operator (+,-,*,/) and performs the corresponding operations using switch.


let firstNumber = 16584465554665;
let secondNumber = 998494611894;
let operator = "-"


switch(operator){
    case "+":
        console.log(firstNumber + secondNumber);
        break
    case "-":
        console.log(firstNumber - secondNumber);
        break
    case "*":
        console.log(firstNumber * secondNumber);
        break
    case "/":
        console.log(firstNumber / secondNumber);
        break
    default:
        console.log("Please enter a valid operator");    
}