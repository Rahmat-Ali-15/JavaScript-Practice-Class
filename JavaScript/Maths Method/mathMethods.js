// Math.sqrt()==> To finding square root of a given number.

// by using method
let num = 49;
let ans1 = Math.sqrt(num)
console.log(ans1);

// without method
let num1 = 25;
let ans = num1 ** (1 / 2);
console.log(ans);


// Math.abs()==> Finding absolute value of a given number

let num2 = -8;
console.log(Math.abs(num2)); // it always return a positive number


// Math.ceil() ==> Ceil method is used to rounds up and return the greater than or equal to of a given number.For example if a number is 4.004 and we use ceil method then it returns 5 because ceil rounds up.

let num3 = 4.004;

console.log(Math.ceil(num3));

// Math.floor() ==> floor method is used to rounds down and return smaller than or equal to of a given number. For example if a number is 5.89 and we use floor method then it returns 5 because floor rounds down.

let num4 = 5.89;
console.log(Math.floor(num4));


// Math.round() ==> If a number have decimal greater than or equal to 0.5 then it returns next integer and if a number have decimal less than 0.5 then it returns the same integer.

let num5 = 8.4;
console.log(Math.round(num5));


// Math.exp() ==> exp method return e raised to the power of a number. that is Math.exp(x) = e**x

let num6= 2;
console.log(Math.exp(num6));

// exp1 ==> exp1 method return e raised to the power of a number, subtracted by 1. that is Math.exp1(x)= e**x - 1

console.log(Math.expm1(1));


// Math.hypot() ==> It is used to find the hypotenuse of a right angle triangle.

console.log(Math.hypot(3,4));


// Math.max() ==> It return the largest number among the given numbers.

console.log(Math.max(4,2,8,3,10));

let arr = [5,6,2,1,15]

console.log(Math.max(...arr));


// Math.min() ==> It return the smallest number among the given numbers.

console.log(Math.min(4,2,-5,3,8));


// Math.pow() ==> It return the power of the given number.

console.log(Math.pow(2,5));


// Math.random() ==> It return the number which is either equal to 0 or less than 1 randomly.

console.log(Math.random());

