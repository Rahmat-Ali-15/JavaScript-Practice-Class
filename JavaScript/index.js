// let number=7
// console.log(number)
// console.log("Hellow world")




// let silent={
//     name: "Silent Killer",
//     age: 20,
//     standard: 12,
// }
// console.log(silent)


// let num=10
// if (num>10) {
//     console.log('Number is greater than 10')
// }
// else{
//     console.log("Number is less than 10")
// }




// let strings=90;

// let convertString=strings.toString();

// console.log(typeof convertString);



// console.log(typeof String(strings));

/* Grade Calculator Problem
let grade="30%";
let number= +grade;
if (number>= Number("90%")){
    console.log("Grade: A")
}
else if(number>= Number("80%")){
    console.log("Grade: B")
}
else if(number >= Number("60%")){
    console.log("Grade: C")
}
else if(number >= Number("50%")){
    console.log("Grade: D")
}
else{
    console.log("Fail")
}


console.log(typeof Number("90%"));
 */
/* Write a program that checks if a number is even or odd using an if-else statement.
let num=4;
if (num % 2 === 0){
    console.log("Even Number")
}
else{
    console.log("Odd number")
}
*/


/*Write a program that takes a number and checks if it is positive, negative, or zero.

let Numbers = 0;

if(Numbers > 0){
    console.log("Positive Nmber")
}
else if(Numbers == 0){
    console.log("Zero")
}
else{
    console.log("Negative Number")
}*/

/*Write a program that takes two numbers as input and prints the larger one.

let num1 = null;
let num2 = null;


if (num1 > num2) {
    console.log("Greter Number");

}
else if (num1 < num2) {
    console.log("Smaller Number");

}
else if(num1=num2){
    console.log("Equal");

}
else {
    console.log("enter your number");
}*/

/*Write a program that checks if a person is eligible to vote (age must be 18 or above).

let age=17;

if(age >= 18){
    console.log("Eligible for voting")
}
else{
    console.log("Bap ko bol ja ke vote kare")
}*/

/*let a = 35;
if (a % 5 == 0 && a % 7 == 0) {
    console.log("It is divisible by both 5 and 7")
}
else {
    console.log("Not divisible by both 5 and 7")
}*/


/*Take marks as input (0-100)and print "Pass" if marks are 40 or above otherwise print "Fail"

let marks = 30;

if (marks >= 40 && marks <=100){
    console.log("Pass")
}
else if(marks >=0 && marks < 40){
    console.log("Fail");
}
else{
    console.log("Invalid Input! please enter marks between 0 and 100")
}*/

/*Ask the user for a year and check if it is a leap year(divisible by 4 but not by 100, unless also divisible by 400).

let year = 1900;

if(year % 400 === 0 || (year % 4 === 0 && year % 100 !==0)){
    console.log("It is a leap year")
}
else {
    console.log("Not a leap year")
} */

/*Accept three side length of a triangle and define if it is Equileteral , isosceles, or Scalene.

let firstSide = 5;
let secondSide = 10;
let thirdSide = 5;

if(firstSide <= 0 || secondSide <= 0 || thirdSide <= 0){
    console.log("Zahil hai ka re : Tere ko itna bhi pata nhi hai ki Side of triangle cannot be negative and Zero")
}
else if(firstSide+secondSide <= thirdSide || firstSide+thirdSide <= secondSide || secondSide+thirdSide <= firstSide){
    console.log("Kash ki thora sa math padh liya hota to aaj ye din nhi dekhna parta: Sum of two sides of a triangle must be Greater than third side.")
}
else if(firstSide === secondSide && secondSide=== thirdSide){
    console.log("Equileteral")
}
else if(firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide){
    console.log("Isosceles")
}
else{
    console.log("Scalene")
}*/

/*Write a program that checks if a given number is divisible by both 3 and 5.

let num = 735;

 if(num === 0 || num === null || num === undefined){
    console.log("Invalid number")
}
 else if(num % 3 === 0 && num % 5 === 0){
    console.log("It is divisible by both 3 and 5.")
}
else{
    console.log("Not divisible by both 3 and 5")
}
*/


/*Create a program that takes the current time (in 24-hour format) and prints "Good morning", "Good afternoon", or "Good evening" based on the time.*/


// let now = new Date();
// let hours = now.getHours();
// let minutes = now.getMinutes();

// console.log(typeof hours, typeof minutes)




// let time = Number("12:00");

// time = +time

// console.log(typeof time, time, "this is Time");

// if (time >= Number("00:00") && time <= Number("11:59")) {
//     console.log("Good Morning")
// }
// else if (time >= Number("12:00") && time <= Number("15:59")) {
//     console.log("Good Afternoon")
// }
// else if (time >= Number("16:00") && time <= Number("20:59")) {
//     console.log("Good Evening")
// }
// else {
//     console.log("Jyada shana mat ban morning , afternoon or evening me se kisi ka time dal")
// }




// Write a JavaScript program that asks a user to input a temperature and prints whether it's hot, warm, cold, or freezing.

// let temperature = 32;
// if (temperature>=30){
//     console.log("Hot")
// }
// else if (temperature >= 20){
//     console.log("Warm")
// }
// else if (temperature >= 4){
//     console.log("Cold")
// }
// else{
//     console.log("freezing")
// }



// Create a program that checks whether a character is a vowel or consonant (assume lowercase input).

// let character = "5";

// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//     console.log("Vowel letter")
// }
// else if (character >= "a" && character <= "z") {
//     console.log("Consonant letter")
// }
// else {
//     console.log("Invalid: Please enter alphabet")
// }