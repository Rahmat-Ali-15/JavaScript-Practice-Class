// 1. Write a while loop that prints numbers from 1 to 100.

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }



// 2. Create a while loop that prints only even numbers form 1 to 20.


// let i = 1;
// while (i <= 20) {
//     if (i === 0) {
//         console.log("Invalid Number")
//         break
//     }
//     if (i % 2 === 0) {
//         console.log(i, "is even number");
//     }
//     i++
// }



// 3. Write a while loop to xount down from 10 to 1.

// let i = 10;

// while (i > 0) {
//     console.log(i)
//     i--
// }



// 4. Use a while loop to calculate the sum of numbers from 1 to 50.

// let sum = 0;
// let i = 1;
// while (i <= 50) {
//     sum += i
//     i++
// }
// console.log(sum, "is the sum of the numbers form 1 to 50.")



// 5. Write a while loop that prints the multiplication  table of 5 (upto 10).

// let i=1;

// while(i<=10){
//     console.log(`5 x ${i} = ${5 * i}`)
//     i++
// }



// 6. Reverse a number using a while loop: Example 1234 => 4321.

// let num = 1234;
// let reverseNum = num.toString().split("").map(Number)
// // console.log(reverseNum.length)
// // console.log(reverseNum)

// let i = reverseNum.length - 1;
// let result = "";

// while (i >= 0) {
//     result += reverseNum[i]
//     i--
// }
// console.log(Number(result))



// 7. Find the factorial of a number usijng while loop.

// let num = 5;
// let i = 1;
// let fact = 1;

// while (i <= num) {
//     fact *= i
//     i++
// }
// console.log(fact)


// 8. Check if a number is a palindrome (same forward and backward) using a while loop.


// let num = 1331;
// let reverse = num.toString().split("").map(Number);
// // console.log(reverse) 

// let i = reverse.length - 1;
// let ans = "";

// while (i >= 0) {
//     ans += reverse[i];
//     i--
// }
// if (Number(ans) === num) {
//     console.log(num, "is a palindrome number.")
// }
// else {
//     console.log("Not a palindrome number.")
// }



// 9.Use a while loop to find the smallest number divisible by both 3 and 5 starting form 1.


// let num = 1;

// while (true) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log(num, "is divisible by both 3 & 5.")
//         break
//     }
//     num++
// }



// 10. Write a while loop to count the number of digits in a given number.

// let num = 123456789;
// let numStr = num.toString();
// let i = 0;

// while (i < numStr.length) {
//     i++;
// }
// console.log("Number of digits:", i)



// 11. Find whether a number is primne using a while loop.

