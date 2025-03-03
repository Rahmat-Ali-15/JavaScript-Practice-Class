// Find rhe largest andd smallest number in an array using a for loop.

let arr = [10, 20, 30, 100];
let largeCount = 0;
let smallCount = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (largeCount < arr[i]) {
        largeCount = arr[i]
    }if (smallCount > arr[i]) {
        smallCount = arr[i]
    }
}
console.log(largeCount, "Greatest number")
console.log(smallCount, "lowest number")