// Constructor

const object = {
    // local scope
    // Literal object

    name: "rahmat",
    age:21,
    married: false,
    myFunc: function () {
        return this.name;
    },
};
console.log(object.myFunc());


function myFunction(){
    console.log(this);
}
myFunction();
console.log(this);

// this -> we use to point to owner to get the current or present value if we need 'this' refer to owner object.




// class base construction-function and pure function base construction-function



// class base construction-function
// blue-print of object {}
class Car {
    // create the object with new key-word...
    constructor(make,model,year){
        (this.make= make),(this.model= model), (this.year= year);
    }
}

const car1 = new Car("touotaSUV", "toyota", 1995);
const car2 = new Car("benz-sClass", "mercedes", 1997);

console.log(car1);
console.log(car2);

// pure function base construction-function
function Car(make, model, year){
    (this.make= make),(this.model= model), (this.year= year);
}

const car3 = new Car("benz-sClass", "mercedes", 1997);
console.log(car3);
