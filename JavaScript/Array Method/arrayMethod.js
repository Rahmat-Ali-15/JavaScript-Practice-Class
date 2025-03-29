// Array.push() ==> It is used to add elements at the end of the array. It returns new array.

let arr = [5,4,2,7,9];
arr.push(15);
console.log(arr);


// Array.pop() ==> It is used to remove last element from an array.

let arr1 = [5,7,8,6];
arr1.pop();
console.log(arr1);


// Array.unshift() ==> It is used to add elements at the begning of the array. It returns new array.

let arr2 = [5,9,7,8,3,10];
arr2.unshift(20);
console.log(arr2);


// Array.shift() ==> It is used to remove first element from an array.

let arr3 = [5,3,6,7];
arr3.shift();
console.log(arr3);


// Array.slice() ==> It returns the portion of the array into new array. It does not change original array. To use slice method we give start and end index where end index is not included.

let arr4 = [5,8,9,7,6,5,3,70];
let sliceArray = arr4.slice(1,5);
console.log(sliceArray);

