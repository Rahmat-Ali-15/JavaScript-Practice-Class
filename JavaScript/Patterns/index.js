// for(let i = 1; i<=5; i++){
//     let row = ""
//     for(let j = 1; j <= i; j++){
//         row += j + " "
//     }
//     console.log( row);
// }

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    // row += i + " ";
    row = row + i + " ";
  }
  console.log(row);
}

console.log("");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += j + " ";
  }
  console.log(row);
}

console.log("");

// Right Triangle Patterns

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

console.log("");

// Print a right triangle of numbers starting from 1.

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

console.log("");

// Print a right triangle where each row contains the same number.

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}

console.log("");

//! Reverse Patterns

// Print a reverse right triangle of stars.

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* " + "";
  }
  console.log(row);
}

console.log("");

// Print a reverse number triangle.

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

console.log("");

// Print a reverse triangle with same numbers in each row.

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}

console.log("");

// ! Space + Star Patterns

for (let i = 1; i <= n; i++) {
  let row = " ";
  for(let s = 1; s<= n-i; s++){
    row += " "
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// for (let i = 1 ; i <= n ; i++){}