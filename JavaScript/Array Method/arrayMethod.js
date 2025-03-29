// Array.isArray() ==> It is used to check whether the passed value is an array.

let arrCheck = [5,3,4];
console.log(Array.isArray(arrCheck));


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

// Array.splice() ==> It is used to add & remove elements from an array. It can remove existing element and add new element in place of that removed element. We can also add elements without removing existing elements.To use this method we give the starting index & then we write how many elements is to be romoved or add. It change the original array.

let arr5 = [8,5,3,2,41,52,20,42,48,10,70,80];
let spliceArray = arr5.splice(1,2)
console.log(arr5);


// Array.at() ==> It takes integer value(index) and returns the item at that index. Negative value return items from end.

let arr6 = [5,3,7,10,15];
console.log(arr6.at(3));
console.log(arr6.at(-1));


// Array.indexOf() ==> It is used to find index of the element in an array. It returns the first index match with that element. If there are more than one same elements is present then we can also give the starting index and then we can find the element index. If we find the element which is not present in the array then it returns index -1.

let arr7 = ["banana","potato","tomato","apple","onion","potato"];
console.log(arr7.indexOf("potato"));
console.log(arr7.indexOf("potato",2));
console.log(arr7.indexOf("mango"));


// 
