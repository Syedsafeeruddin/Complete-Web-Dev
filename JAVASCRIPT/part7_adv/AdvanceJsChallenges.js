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
    let counter = 0
    return function Counter(){
        return counter++
    }
}
let result = createCounter()
// console.log(result());
// console.log(result());
// console.log(result());


function rateLimiter(fn, limit) {
    limit = Date.now(2000)
    console.log(limit);
    
}
rateLimiter()

function memoize(fn) {
}