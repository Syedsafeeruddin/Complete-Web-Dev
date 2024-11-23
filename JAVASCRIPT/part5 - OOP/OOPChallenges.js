// Challenge # 01

class Animal {
  speak() {
    return `Animal speaking`;
  }
}
class Dog extends Animal {}
Dog.prototype.bark = function () {
  return `Woof!`;
};

// Challenge # 02

class Person {
  constructor(name, age) {
    if (age <= 0) {
      throw new Error("Age must be a positive number");
    }
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Challenge # 03

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: Toyota, Model: Corolla`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}
let car1 = new Vehicle("Toyota", "Corolla");

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
  move() {
    return `The car is driving`;
  }
}

// Challenge # 04

class BankAccount {
    constructor(balance = 0) {
      this._balance = balance;  // Private property to store the balance
    }
  
    // Method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
      } else {
        throw new Error("Deposit amount must be positive");
      }
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > this._balance) {
        throw new Error("Insufficient funds");
      } else {
        this._balance -= amount;
      }
    }
  
    // Getter for balance
    getBalance() {
      return this._balance;
    }
  
    // No setter for _balance, balance should only be changed via deposit or withdraw
  }
  

// Task 2
// Base Class
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(); // Parent Constructor
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super(); // Parent Constructor
    this.length = length; //
    this.width = width; //
  }

  area() {
    return this.length * this.width;
  }
}

let circle = new Circle(5);
console.log(`Circle Area: ${circle.area().toFixed(2)}`);

let rectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.area()}`);
