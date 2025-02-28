// Find the sum of all elemnts in an arry using for loop.

let arr = [1,2,3,4,,5,6,7,8,9,10];
let count = 0;
for (i = 0; i < arr.length; i++){
    count += i;
}
console.log(typeof count)
console.log(count)