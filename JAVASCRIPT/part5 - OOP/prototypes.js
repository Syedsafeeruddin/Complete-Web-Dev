let car = {model: "gtr"}
let brand = {italian: "ferrari"}
let owner = {name: "Safeer"}

// console.log(car.__proto__)

let sports = {racing : "F1"}
let rebdull = {position: "1"}

Object.setPrototypeOf(rebdull, sports) // setting the prtotype property or giving the properties of sports to redbull
console.log(`redbull`, Object.getPrototypeOf(rebdull)); // getting the properties of redbull(just inherited from sports)
console.log(`Redbull`, rebdull.hasOwnProperty("position")); // has its own specified property


