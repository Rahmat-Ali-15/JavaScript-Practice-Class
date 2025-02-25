// Grading System
// Write a program that takes a grade (A,B,C,D,F) and prints a message.

let grade = "c";

switch (grade){
    case "A":
        console.log("Excellent");
        break
    case "B":
        console.log("Good");
        break
    case "C":
        console.log("Average");
        break
    case "D":
        console.log("Below Average");
        break
    case "F":
        console.log("Fail");
        break
    default:
        console.log("Not found")
}