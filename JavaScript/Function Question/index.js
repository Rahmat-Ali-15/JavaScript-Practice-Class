// Basic Function Problems


// 1. Write a function that takes two numbers as arguments and returns their sum.

// let num1 = 6;
// let num2 = 4;

// function sum() {
//     return num1 + num2
// }
// let ans = sum()
// console.log(ans);


// 2. Create a function that accepts a string and returns its length.

// let str = "5455645"

// function strLength() {
//     return str.length
// }
// let ans = strLength()
// console.log(ans);


// 3. Write a function that takes a number and returns `true` if it’s even, otherwise `false`.

// let num = 5;

// function even(num) {
//     if (num === 0) {
//         return "Invalid number";
//     }
//     else if(num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let ans = even(4)
// console.log(ans);



// 4. Create a function that takes an array of numbers and returns the largest number in the array.

// let arr = [25, 15, 0, 2, 85, 10, 3]
// let largest = arr[0];

// function largestNum() {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest
// }

// let output = largestNum();
// console.log(output);

// 5. Write a function that takes a string and returns the string in uppercase.

// let str = "Rahmat"

// function upperSrt() {
//     return str.toUpperCase();
// }

// let output = upperSrt()
// console.log(output);



// ### **Intermediate Function Problems**



// 6. Write a function that takes an array of strings and returns a new array with the lengths of those strings.




// 7. Create a function that takes a number and returns its factorial (e.g., `5! = 5 * 4 * 3 * 2 * 1`).

// let num = 3;
// let count = 1;

// function factorial() {
//     for (let i = 1; i <= num; i++) {
//         count *= i;
//     }
//     return count;
// }

// let output = factorial()
// console.log(`${num}! = ${output}`);

// 8. Write a function that takes a string and returns `true` if it’s a palindrome, otherwise `false`.

// let str = "121";
// let reverseStr = str.split("")
// let revStrStore = "";

// function palindrome() {
//     for (let i = reverseStr.length - 1; i >= 0; i--) {
//         revStrStore += reverseStr[i];
//     }
//     if (revStrStore === str) {
//         return "True"
//     }
//     else {
//         return "False"
//     }
// }
// let output = palindrome();
// console.log (output);


// or Second method

// function palindrome(str) {
//     return str === str.split("").reverse().join("");
// }

// console.log(palindrome("121"));



// 9. Create a function that takes two arrays and returns a new array with elements that are present in both arrays.

// let arr1=[1,2,3];
// let arr2=[4,5,6];

// function newArr(){
//     return arr1.concat(arr2);
// }
// let output=newArr()
// console.log(output);


// 10. Write a function that takes a number and returns `true` if it’s a prime number, otherwise `false`.


function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let output = isPrime(100);
console.log(output);


// ### **Advanced Function Problems**


// 11. Write a function that takes a string and returns the number of vowels in it.


// 12. Create a function that takes an array of numbers and returns the sum of all even numbers in the array.



// 13. Write a function that takes a string and returns the first non-repeating character in it.



// 14. Create a function that takes a number and returns the Fibonacci sequence up to that number.



// 15. Write a function that takes an object and a key, and returns `true` if the key exists in the object, otherwise `false`.




// ### **Function Composition and Callbacks**



// 16. Write a function that takes another function as an argument and calls it.



// 17. Create a function that takes an array and a callback function, and returns a new array with the results of applying the callback to each element.



// 18. Write a function that takes two functions `f` and `g` and returns a new function that applies `f` and then `g` to its input.



// 19. Create a function that takes a number and a callback, and calls the callback with the square of the number.



// 20. Write a function that takes a string and a callback, and returns the result of the callback applied to the string reversed.



// ### **Recursive Function Problems**



// 21. Write a recursive function to calculate the sum of all numbers from 1 to `n`.



// 22. Create a recursive function to find the nth Fibonacci number.



// 23. Write a recursive function to reverse a string.



// 24. Create a recursive function to check if a string is a palindrome.



// 25. Write a recursive function to calculate the power of a number (e.g., `power(2, 3) = 8`).



// ### **Closure and Higher-Order Function Problems**



// 26. Write a function that returns a new function which always adds a specific number to its argument.



// 27. Create a function that takes a number and returns a function that multiplies its input by that number.



// 28. Write a function that creates a counter (starting from 0) and returns a function that increments the counter each time it’s called.



// 29. Create a function that takes a string and returns a function that checks if a given input string matches the original string.



// 30. Write a function that takes an array of functions and returns a new function that applies all of them in sequence to an input.



// ### **Arrow Function Problems**



// 31. Rewrite the function from problem 1 using an arrow function.



// 32. Rewrite the function from problem 3 using an arrow function.



// 33. Rewrite the function from problem 5 using an arrow function.



// 34. Rewrite the function from problem 7 using an arrow function.


// 35. Rewrite the function from problem 10 using an arrow function.



// ### **Optional Challenges**



// 36. Write a function that takes a string and returns the most frequently occurring character.


// 37. Create a function that takes a nested array and flattens it into a single-level array.


// 38. Write a function that takes a string and returns the number of words in it.



// 39. Create a function that takes an array of objects and a key, and returns an array of values corresponding to that key.




// 40. Write a function that simulates a dice roll and returns a random number between 1 and 6.
