function Person(name, age){
    this.name = name;
    this.age = age;
}

let P1 = new Person("Safeer", 20)
// console.log(P1);

let P2 = new Person("Ali", 19)
// console.log(P2);



function Car(brand){
    this.brand = brand
    this.sports = function(){
        return `this is a F1 car from ${this.brand}`
    }
}

let redbull = new Car("Rebull Racing")
// console.log(redbull.sports());

function Animal(species){
    this.species = species
}
Animal.prototype.sound = function(){
    return `${this.species} just made a sound`
}

let cat = new Animal("Cat")
console.log(cat.sound());

