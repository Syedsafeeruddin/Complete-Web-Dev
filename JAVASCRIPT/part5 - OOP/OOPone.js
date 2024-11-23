// let obj1 = {
//     make: "Redbull",
//     model: "RB19",
//     year: 2019 
// }
// console.log(obj1.make);

// Inheritance
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is from ${this.make}`
    }
}

class car extends Vehicle {
    drive () {
        return `${this.make} made this car`
    }
}

const redbull = new Vehicle("Redbull Racing", "RB-19")
// console.log(redbull.model);

const ferrari = new car("Ferrari", "2020")
// console.log(ferrari.drive());

// Encapsulation

class BankAcc{
    #balance = 0;

    deposit(amount){
        this.#balance += amount // # is the sign for encapsulation
        return `${this.#balance}`
    }

    getBalance(){
        return `Total Balance is : ${this.#balance}`
    }
}

let Acc = new BankAcc(43)
// console.log(Acc.deposit(23));

// Abstraction

class Car{
    start(){
        return `Starting the Car`
    }
    drive(){
        return `Driving the Car`
    }

    pressStart(){
        let m1 = this.start();
        let m2 = this.drive();
        return `${m1} + ${m2}`
    }
}
let myCar = new Car();
// console.log(myCar.pressStart());


// Polymorphism

class Race{
    F1(){
        return `Present in F1`
    }
}

class Redbull extends Race{
    F1(){
        return `Redbull plays F1`
    }
}
class Porsche extends Race{
    F1(){
        return `Porsche does not play F1`
    }
}

let car1 = new Redbull();
let car2 = new Porsche();
// console.log(car1.F1());
// console.log(car2.F1());

// Static Keyword
class Person{
    static sing(name){ // only called within the class or by using Class name 
        return `${name} can sing!`
    }
}

let safeer = new Person()
// console.log(Person.sing("Safeer"));

// Getters & Setters

class PersonOne{
    setName(name){
        this.name = name
    }
    getName(){
        return `The name is ${this.name}`
    }
}

let p1 = new PersonOne()
p1.setName("Safeer")
console.log(p1.getName());

