// for(let i = 1; i<=5; i++){
//     let row = ""
//     for(let j = 1; j <= i; j++){
//         row += j + " "
//     }
//     console.log( row);
// }

let n = 4

for(let i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j<= n; j++){
        row += i + " "
    }
    console.log(row)
}

console.log("")

for(let i = 1; i <= n; i++){
    let row = ""
    for(let j = 1; j<= n; j++){
        row += j + " "
    }
    console.log(row)
}