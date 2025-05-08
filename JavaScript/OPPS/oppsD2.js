// Opps

// Inheritance -> It allwos to borrow the property of the object[parent].

class Car {
    constructor(n,m){
        (this.n = n), (this.m = m);
    }

    showDetails(){
        console.log(`this is brand name ${this.n} and year ${this.m}`);
    }
}

class SUV extends Car{
    constructor(x,y){
        super(x,y);
        this.buyer = "rahmat";
    }
}

class miniSUV extends SUV{
    constructor(x,y){
        super(x,y);
        this.type = "mini-suv"
    }
}

const car1 = new miniSUV("ferrari", 2025);

console.log(car1);


// Encapsulation -> create private variable.

class Car1 {
    #count;
    #name;
    constructor (n,m){
        (this.n = n), (this,m = m);
        this.#count = 100;
        this.#name = "rahmat ali";
    }

    getCount(){
        return {count: this.#count,name: this.#name};
    }
}
const car2 = new Car1("maruti", 1995);
console.log(car2.getCount().count);
console.log(car2.getCount().name);
console.log(car2);
