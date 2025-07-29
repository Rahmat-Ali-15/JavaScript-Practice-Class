// Function ka postmartom

const justFunction = ()=>{
    let n = "Raju";
    return () =>{
        return () =>{
            return n;
        }
    }
}

let ans = justFunction();
// let ans = justFunction()()();

let newAns = ans()

console.log(newAns());

// clouser end
