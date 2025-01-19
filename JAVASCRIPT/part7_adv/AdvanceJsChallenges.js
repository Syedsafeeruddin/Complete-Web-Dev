// Challenge - 01

async function simulateAsyncTask() {
  try {
    console.log("Task started");
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task finished");
      }, 2000);
    });
  } catch (error) {
    console.log("Error", error);
  }
}
// simulateAsyncTask();

function simulateMultipleTasks() {
    return new Promise(() => {
        setTimeout(() => {
            console.log("Task 1 finished");
        }, 1000);
        setTimeout(() => {
            console.log("Task 2 finished");
        }, 2000);
        setTimeout(() => {
            console.log("Task 3 finished");
        }, 3000);
    })
}
// simulateMultipleTasks()

async function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = "Fetched data"
        callback(data)
    }, 3000);

}
// fetchDataWithCallback(callback)


// Challenge - 02

function createCounter() {
  let counter = 1
  return function Counter(){
      return counter++
  }
}
let result = createCounter()
// console.log(result());
// console.log(result());
// console.log(result());

function rateLimiter(fn, limit) {
let lastCalled = 0;
return function(...args) {
  const now = Date.now();
  if (now - lastCalled < limit) {
    return 'Rate limit exceeded';
  } else {
    lastCalled = now;
    return fn(...args);
  }
};
}

function memoize(fn) {
const cache = {};
return function(...args) {
  const key = JSON.stringify(args);
  if (cache[key]) {
    return cache[key];
  } else {
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
};
}

// Challenge - 03

function Animal(){}

Animal.prototype.makeSound() = function() {
  return 'Animal sound';
};

function Dog(){}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function(){
  return "Woof!"
}

Dog.prototype.constructor = Dog;

// Task 2
function Shape(color) {
  this.color = color;
}
Shape.prototype.getColor = function() {
  return this.color;
};
 
function Rectangle(width, height, color) {
  Shape.call(this, color); // Call the Shape constructor
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype); // Set up inheritance
Rectangle.prototype.constructor = Rectangle;
 
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};


// Challenge - 04

// Task 1
const person = {
  name : "Safeer",
  introduce(){
    return `Hello, ${this.name}`
  }
};

const boundIntroduce = person.introduce.bind(person);

// Task 2
function introduce(name) {
  this.name = name;
  return `Hi, my name is ${this.name}`
}

const personOne = {
  name : 'Safeer'
}

introduce.call(personOne);

// Task 3
function sum(a, b) {
  return (a + b) * this.multiplier;
}

const contextOne = {multiplier : 2} 
const contextTwo = {multiplier : 3} 

sum.apply(null, [contextOne, contextTwo])

