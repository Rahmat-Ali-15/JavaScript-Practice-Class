//  Calculator Projects using Function

let num1 = prompt("Enter 1st Number");
let operator = prompt("Enter Operator");
let num2 = prompt("Enter 2nd Number");

num1 = +num1;
num2 = +num2;
operator = operator;

// function calculate() {
//     switch (operator) {
//         case "+":
//             console.log(num1 + num2);
//             break;
//         case "-":
//             console.log(num1 - num2);
//             break;
//         case "*":
//             console.log(num1 * num2);
//             break;
//         case "/":
//             console.log(num1 / num2);
//             break;
//         default:
//             console.log("Invalid Number");
//     }
// }

// calculate()


function calculate(n1, n2, key) {
    switch (key) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return ((num1 * num2) / 100);
        default:
            break;
    }
}

let output = calculate(num1, num2, operator);
let value = document.getElementById("result")

value.append(output);

// console.log(output);