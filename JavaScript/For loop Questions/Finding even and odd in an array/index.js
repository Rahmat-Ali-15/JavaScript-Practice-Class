// Count the number of even and odd numbers in an arrow.

let arr = [4,7,"4"];

for (i=0; i< arr.length; i++){
    if(arr[i] <= 0 || typeof arr[i] === "string"){
        console.log(arr[i],"Number cannot be zero or negative, or non-numeric")
        // use break for only one element
    }
    else if(arr[i] % 2 === 0 ){
        console.log(arr[i]," is an even Number");
         // use break for only one element
    }
    else{
        console.log(arr[i],"is an odd number");
         // use break for only one element
    }
}