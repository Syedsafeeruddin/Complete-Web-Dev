addEventListener("DOMContentLoaded", () => {
    
const taskBtn = document.getElementById("add-task-btn")
const input = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem("storedTasks")) || [];
tasks.forEach((task) => renderTask(task))

function Task(){
    taskBtn.addEventListener("click", () => {
        let task = input.value;
        if(task.trim() !== ""){
            // Task Object
            const taskObj = {
                id : Date.now(),
                text : task,
                completed : false,
            }
            tasks.push(taskObj) // pushing task in object);
            saveTasks();

            // Add Task 
            
            const newTodo = document.createElement("li")
            newTodo.textContent = task;
            todoList.appendChild(newTodo)
            
            // Remove Task

            const removeBtn = document.createElement("button")
            removeBtn.textContent = "Delete"
            removeBtn.addEventListener("click", () => {
                newTodo.remove()
            })
            todoList.appendChild(newTodo)
            newTodo.appendChild(removeBtn)

            // Complete a task

            newTodo.addEventListener("dblclick", () => {
                newTodo.style.textDecoration = "line-through"
            })


            input.value = ""
        }
        else{
            alert("Please enter a task")
        }
    })
}

Task()

function saveTasks(){
    localStorage.setItem("storedTasks", JSON.stringify(tasks))
}

function renderTask(task){
    console.log(task);
    const li = document.createElement("li")
    li.setAttribute("data-id", taskObj.id);
    if(taskObj.completed){
        li.classList.add("completed")
        li.innerHTML = `
        <span>${taskObj.text}</span>
        <button>Delete</button>
        `;
    }
    li.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON") return;
        taskObj.completed = !taskObj.completed;
        li.classList.toggle("completed")
        saveTasks()
    })

    todoList.appendChild("li")
}   
})