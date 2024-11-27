function greeting(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(reject){
                console.log("Erro in data fetching");
            }
        }, 3000);
    })
}

async function getGreeting() {
    try {
        console.log("Data being fetched!");
        await greeting()
    } catch (error) {
        console.log("Error data fetching", error);
    }
}

getGreeting()