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




// Abstraction -> Hide the complexity

/* 

bank system

1-> Deposite
2-> Withdraw
3-> CheckBalance

*/


class BankAccount{
    #balance;
    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }

    deposite(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`amount deposite of this ${amount}`);
        }
        else{
            console.log(`Invalid amount please enter correct amount...`);
        }
    }


    withdraw(amount){
        if(amount<= this.#balance){
            this.#balance -= amount;
            console.log(`amount withdraw of ${amount}`);
        }
        else{
            console.log(`Aukat se jyada amount mat dal`);
        }
    }

    checkBalance(){
        console.log(`remaining balance is ${this.#balance}`);
    }
}

const accNo_1 = new BankAccount("Rahmat");
accNo_1.deposite(100);
accNo_1.deposite(1000);
accNo_1.withdraw(500);
accNo_1.checkBalance();




// Polymorphysm

// Poly -> means multiple
        //    We have one method available in multiple class that is called poly.
        // Polymorphism is basically you have a method/property in multiple object.


class Vechicle{
    run(){
        console.log(`Vehichle is running`);
    }
}

class Truck{
    run(){
        console.log(`Truck is running`);
    }
}

class Car{
    run(){
        console.log(`Car is running`);
    }
}

const v1 = new Vechicle();
const v2 = new Truck();
const v3 = new Car();

v3.run();


