let arr = [1, 2, 3, 4];

Array.prototype.धकेलो = function (value) {
    let index = this.length;
    this[index] = value;
}
arr.धकेलो(10);
// console.log(arr);

let arr1 = [1, 2, 3, 4];

Array.prototype.निकालो = function () {
    // let index1 = this.length-1;
    // delete this[index1];
    // this.length=index1
    // or
    let index1=this.length-1;
    delete index1;
    this.length=this.length-1;
}
arr1.निकालो();
console.log(arr1);