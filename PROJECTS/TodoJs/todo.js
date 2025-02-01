const fs = require('fs');
const filePath = "task.json";

const command = process.argv[2] // to pick-up command from terminal
const argument = process.argv[3] // to pick-up argument or input from terminal 

const addTask = (task) => {
    const tasks = loadTask()
    tasks.push({task})
    saveTask(tasks)
    console.log("Task added successfully! - ", task);
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}
const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}


if(command === 'add'){
    addTask(argument)
}else if(command === 'list'){
    listTask()
}else if(command === 'remove'){
    removeTask()
}else{
    console.log("Command not found");
}