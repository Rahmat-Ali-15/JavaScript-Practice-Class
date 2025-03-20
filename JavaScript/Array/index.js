// 1. How do you add an element to the end of an array.

// let arr = [1,2,3,4,5]

// arr.push(70);

// console.log(arr);


// 2. How do you remove the first element from an array?

// let arr = [1,2,3,4];

// arr.shift(arr[1]);
// console.log(arr);

// 3. How do you find the length of an array?

// let arr = [1,2,3,4,5,6,7,8,9];

// console.log(arr.length);


// 4. How do you create a new array where each element is doubled?

// let arr = [10,15,20,25,30];

// let newArray = arr.map((number, index) => {
//     return arr[index] * 2
// })

// console.log(newArray);



// 5. How do you filter out all numbers greater than 50 from an array?

// let arr = [20, 40, 30, 80, 90, 2, 23, 60, 70];

// let newArray = arr.filter((number) => {
//     return number > 50;
// })
// console.log(newArray);



// 6. How do you find the sum of all elements in an array?


// let arr = [10, 30, 50, 70];

// let sum = arr.reduce((accumelator, current) => {
//     return accumelator + current;
// }, 0)
// console.log(sum);



// 7. How do you check if an array contains the number 10 ?


// let arr = [10, 30, 50,60, 70];

// let hasValue= arr.includes(20);

// console.log(hasValue);



// 8. How do you find the first element in an array that is greater than 20?


// let arr = [10, 15, 20,19, 70];

// let result = arr.find(num=> num>20);
// console.log(result);


// 9. How do you find the index of a specify element in an array?

// let arr = [10, 15, 20,19, 70];

// console.log(arr.indexOf(70));


// 10. How do you sort  an array of numbers in ascending order?



























































// 1. Create an array of five colors and print its length.

// let color = ["red", "blue", "white","yellow","gray"];

// console.log(color.length);


// 2. How do you access the third element of an array.

// let color = ["red", "blue", "white","yellow","gray"];

// console.log(color[2]);

// second method

// let color = ["red", "blue", "white", "yellow", "gray"];

// function find(element) {
//     for (let i = 0; i < color.length; i++) {
//         if (element - 1 === i) {
//             return color[i];
//         }
//     }
// }
// let ans = find(3);
// console.log(ans);


// 3. Add a new element to the end of an array.

// let color = ["red", "blue", "white","yellow","gray"];

// color.push("cyne");
// console.log(color);



// 4. Remove the first element from an array.

// let color = ["red", "blue", "white","yellow","gray"];

// color.shift(1);
// console.log(color);


// 5. Find the index of a specific element in an array.

// let color = ["red", "blue", "white","yellow","gray"];

// console.log(color.indexOf("blue"));


// 6. Reverse an array without using the reverse() method.

// let color = ["red", "blue", "white", "yellow", "gray"];
// let reverseColor = [];
// for (let i = color.length-1; i > 0; i++) {
//     reverseColor += color
// }
// console.log(reverseColor);
