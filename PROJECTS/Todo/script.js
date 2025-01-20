addEventListener("DOMContentLoaded", () => {
    const taskBtn = document.getElementById("add-task-btn");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // Retrieve tasks from localStorage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem("storedTasks")) || [];
    tasks.forEach((task) => renderTask(task)); // Render all saved tasks on page load

    // Function to add a new task
    function Task() {
        taskBtn.addEventListener("click", () => {
            const task = input.value;
            if (task.trim() !== "") {
                // Create a task object
                const taskObj = {
                    id: Date.now(),
                    text: task,
                    completed: false,
                };
                tasks.push(taskObj); // Add task to the array
                saveTasks(); // Save updated tasks to localStorage
                renderTask(taskObj); // Render the task in the list
                input.value = ""; // Clear input field
            } else {
                alert("Please enter a task");
            }
        });
    }

    Task();

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("storedTasks", JSON.stringify(tasks));
    }

    // Render a single task
    function renderTask(task) {
        const newTodo = document.createElement("li");
        newTodo.textContent = task.text;
        newTodo.setAttribute("data-id", task.id); // Add a data attribute for the task ID

        // Mark completed tasks with a style
        if (task.completed) {
            newTodo.style.textDecoration = "line-through";
        }

        // Add "Delete" button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.addEventListener("click", () => {
            tasks = tasks.filter((t) => t.id !== task.id); // Remove task from the array
            saveTasks(); // Save updated tasks to localStorage
            newTodo.remove(); // Remove task from the DOM
        });

        // Toggle task completion on double-click
        newTodo.addEventListener("dblclick", () => {
            task.completed = !task.completed; // Toggle the completed status
            newTodo.style.textDecoration = task.completed ? "line-through" : "none";
            saveTasks(); // Save updated tasks to localStorage
        });

        newTodo.appendChild(removeBtn); // Add the delete button to the task
        todoList.appendChild(newTodo); // Add the task to the list
    }
});
