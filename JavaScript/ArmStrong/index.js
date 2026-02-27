let str = "153"

let sum = 0;

for (let i = 0; i <= str.length - 1; i++){
    sum += str[i] ** 3;
}
console.log("🚀 ~ sum:", typeof sum);

if(Number(str) === sum){
    console.log("It's a Armstrong Number")
}
else{
    console.log("Not a Armstrong Number")
}




// let str = "121";

// let reverse = str.split("").reverse().join("")

// if (str === reverse){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not")
// }

// let str = "121"

// let reverseStr = ""

// for (let i = str.length-1; i >= 0; i--){
//     reverseStr += str[i]
// }

// if (str === reverseStr){
//     console.log("It is a Palindrome")
// }
// else{
//     console.log("It is not a Palindrome")
// }