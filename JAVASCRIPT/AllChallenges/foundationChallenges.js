// Challenge - 01

function stringToNumber(input) {
  const number = Number(input);
  return isNaN(number) ? "Not a number" : number;
}

function flipBoolean(input) {
  return !Boolean(input);
}

function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  } else {
    return "I don't know what I am!";
  }
}

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}

// Challenge - 02
// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  return a + b;
}

// Subtract small value from larger one
function subtract() {
  return b - a;
}

function multiply() {
  return a * b;
}

// Divide larger value by small
function divide() {
  return b / a;
}

// Increase value of a by 1
function increment() {
  let result = a;
  result += 1;
  return result;
}

// Decrease value of b by 1
function decrement() {
  let result = b;
  result -= 1;
  return result;
}

// Divide larger value by small to find the reminder
function reminder() {
  return b % a;
}

// Challenge - 02

function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

function reverseArray(arr) {
  return arr.reverse();
}

function findMax(arr) {
  return Math.max(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Challenge - 04

function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  function printMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(`${n} * ${i} = ${n * i}`);
    }
    return table;
  }

  function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

setInterval(() => {

}, interval);

// Challenge - 05

const squareNumbers = (arr) => arr.map(num => num * num);

const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

const getNames = (arr) => arr.map(user => user.name);

const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");

// Challenge - 05

const person = {
  name : "Hitesh",
  age : 19.5,
  introduce() {
    retrun `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
};

function outer() {
  function inner(){
    return 'Inner Function Called'
  }
  return inner()
}
