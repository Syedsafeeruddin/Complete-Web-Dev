// Challenge - 1

// let sum = 0
// let i = 0

// while(i <= 5){
//     sum += i;
//     i++
// }
// console.log(sum)

// Challenge - 2

// let countdown = []
// let i = 5

// while (i > 0) {
//     countdown.push(i);
//     i--
// }
// console.log(countdown);

// Challenge - 3

// let teaCollection = []
// let tea;
// do {
//     tea = prompt(`Enter name of the tea (type "stop to exit)`)
    
//     if(tea !== "stop"){
//         teaCollection.push(tea)
//     }
// } while (prompt !== "stop");
        
// console.log(teaCollection);
        
// Challenge - 4

// let total = 0
// let i = 1

// do {
//     total += i
//     i++
// } while (i < 4);
// console.log(total);
 
// Challenge - 5

// let multipliedNumbers = []
// for(let i = 0; i <= 5; i++){
//     multipliedNumbers.push((i * 2))
// }
// console.log(multipliedNumbers);

// Challenge - 6 --- High Level Challenge

// let cities = ["Paris", "New York", "Tokyo", "London"]
// let cityList = []
// for(let i = 0; i < cities.length; i++){
//     let newCities = cities[i]
//     cityList.unshift(newCities) // london, NY, Tokyo, Paris
// }
// console.log(cityList);

// Challenge - 7 

// let teaCollection = ["green tea", "black tea", "chai", "oolong tea"]
// let selectedTeas = []

// for(let i = 0; i < teaCollection.length; i++){
//     if (teaCollection[i] == "chai") {
//         break
//     }
//     selectedTeas.push(teaCollection[i])
// }
// console.log(selectedTeas);

// Challenge - 8

// let cities = ["London", "New York", "Paris", "Berlin"]
// let visitedCities = []

// for(let i = 0; i < cities.length; i++){
//     if(cities[i] === "Paris"){
//         continue
//     }
//     visitedCities.push(cities[i])
// }
// console.log(visitedCities);

// Challenge - 9

// let num = [1,2,3,4,5]
// let smallnumbers = []

// for (const element of num) {
//     if(element === 4){
//         break;
//     }
//     smallnumbers.push(element)
// }
// console.log(smallnumbers);

// Challenge - 10

// let chais = ["chai", "herbal tea", "black tea", "green tea"]
// let preferredTeas = []

// for (const chai of chais) {
//     if(chai === "black tea"){
//         continue
//     }
//     preferredTeas.push(chai)
// }
// console.log(preferredTeas);

// Challenge - 11 

// let cityPopulation = {}
// let citiesPopulation = {
//     "London" : 8092384,
//     "New York" : 3274212,
//     "Paris" : 2736233,
//     "Berlin" : 7823462
// }

// for(const city in citiesPopulation){
//     if(city === "Berlin"){
//         break;
//     }
//     cityPopulation[city] = citiesPopulation[city]
// }
// console.log(cityPopulation);

// Challenge - 12

// let worldCities = {
//     "Sydney" : 300000,
//     "Tokyo" : 900000,
//     "Berlin" : 400000,
//     "Paris" : 540000
// }
// let largeCities = {}

// for (const city in worldCities) {
//     if (worldCities[city] < 500000) {
//         continue
//     }
//     largeCities[city] = worldCities[city]
// }
// console.log(largeCities);

// Challenge - 13

// let teaCollection = ["earl tea", "green tea", "chai", "black tea"]
// let availabeTeas = []

// teaCollection.forEach((teas) => {
//     if(teas === teaCollection){
//         return
//     }
//     availabeTeas.push(teas)
// });
// console.log(availabeTeas);

// Challenge - 14

// let cities = ["Paris", "London", "New York", "Sydney"]
// let traveledCities = []

// cities.forEach((city) => {
//     if(city === "New York"){
//         return;
//     }
//     traveledCities.push(city)
// });
// console.log(traveledCities);

// Challenge - 15

// let numbers = [2, 5, 7, 9]
// let doubledNumbers = []
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] == 7){
//         continue
//     }
//     doubledNumbers.push((numbers[i] * 2))
// }
// console.log(doubledNumbers);

// Challenge - 16

// let chais = ["earl tea", "green tea", "chai", "black tea", "jasmine tea"]
// let shortTeas = []

// for (const chai of chais) {
//     if(chai.length > 10){
//         break
//     }
//     shortTeas.push(chai)
// }
// console.log(shortTeas);





