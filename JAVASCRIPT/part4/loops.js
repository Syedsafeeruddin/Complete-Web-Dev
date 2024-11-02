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

// Challenge - 6

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []
for(let i = 0; i < cities.length; i++){
    let newCities = cities[i]
    cityList.unshift(newCities) // london, NY, Tokyo, Paris
}
console.log(cityList);






