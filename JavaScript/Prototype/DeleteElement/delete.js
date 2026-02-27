let data = [10,15,20,25,30,40];
let position = 2;
for(let i = position; i< data.length-1; i++){
        data[i]=data[i+1]
}
data.length= data.length-1
console.log(data)