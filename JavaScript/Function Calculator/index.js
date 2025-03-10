//  Calculator Projects using Function

let num1 = prompt("Enter 1st Number");
let operator = prompt("Enter Operator");
let num2 = prompt("Enter 2nd Number");

num1 = +num1[0];
num2 = +num2[0];
operator = operator[0];

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
        default:
            break;
    }
}

let output = calculate(num1, num2, operator);

console.log(output);