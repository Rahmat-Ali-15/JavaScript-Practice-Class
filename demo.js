let arr = [1,2,3,[4,5,[6,7,8]]]

// arr = arr.flat(2);
// console.log("🚀 ~ arr:", arr);


let arrNew = []

for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] === "number"){
        arrNew.push(arr[i])
    }
    for(let j = 0; j< arr[i].length; j++){
        if(typeof arr[i][j] === "number"){
            arrNew.push(arr[i][j])
        }
        for(let k = 0; k < arr[i][j].length; k++){
            arrNew.push(arr[i][j][k])
        }
    }
}
console.log("🚀 ~ arrNew:", arrNew);