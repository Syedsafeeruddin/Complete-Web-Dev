// Example : 1

let para = document.getElementById("myParagraph");
let button = document.getElementById("changeTextButton");

button.addEventListener("click", changePara);
function changePara() {
  para.innerHTML = "Button Clicked!";
}

// Example : 2

let cityButton = document.getElementById("highlightFirstCity");

cityButton.addEventListener("click", function () {
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add("highlight");
});

// Example : 3

let coffeButton = document.getElementById("changeOrder");
let order = document.getElementById("coffeeType");

coffeButton.addEventListener("click", function () {
  order.innerHTML = "Espresso";
});

// Example : 4

let addButton = document.getElementById("addNewItem");

addButton.addEventListener("click", function () {
  let shopList = document.getElementById("shoppingList");
  const newList = document.createElement("li");
  const addList = (newList.innerHTML = "Eggs");
  shopList.appendChild(newList);
});

// Example : 5

let delButton = document.getElementById("removeLastTask");
let taskList = document.getElementById("taskList");
delButton.addEventListener("click", function () {
  taskList.lastElementChild.remove();
});

// Example : 6

let meButton = document.getElementById('clickMeButton')
meButton.addEventListener("dblclick", function(){
    let heading = document.getElementById('example-6')
    heading.firstElementChild.classList.add('highlight')
})

// Example : 7

let teaList = document.getElementById('teaList')
teaList.addEventListener("dblclick", function(event){
    event.target.style.backgroundColor = "yellow"
    event.target.style.color = 'black'
    event.target.style.font = 'bold'
})

//Example : 8

let formId = document.getElementById('feedbackForm')
let textBox = document.getElementById('feedbackInput')
let feebackPara = document.getElementById('feedbackDisplay')

formId.addEventListener("submit", function(e){
    e.preventDefault()
    feebackPara.innerHTML = 'You Typed: ' + textBox.value
    
})


//Example : 9

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('domStatus').innerText = "Hogaya Load!"
})

//Exapmle : 10

document.getElementById('toggleHighlight').addEventListener("click", function(){
    let text = document.getElementById('descriptionText')
    text.classList.toggle('highlight')
})
