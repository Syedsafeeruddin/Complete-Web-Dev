document.addEventListener("DOMContentLoaded", async function() {

const cityInput = document.getElementById('city-input')
const weatherBtn = document.getElementById('get-weather-btn')
const weatherInfo = document.getElementById('weather-info')
const errorMsg = document.getElementById('error-message')


weatherBtn.addEventListener("click", async() => {
    const city = cityInput.value.trim()
    if(!city) return;
    try {
        const weatherData = await getWeather(city)
        displayWeather(weatherData)
    } catch{
        showError()
    }
})


async function getWeather(city){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(URL)
    
    
    if(!response.ok){
        throw new Error("City not found");
    }
    
    const data = await response.json()
    return data;
}

function displayWeather(data){
    console.log(data);
    const {name, main, weather} = data

    document.getElementById('city-name').textContent = `${name}`
    document.getElementById('temperature').textContent = `Temperature : ${main.temp}`
    document.getElementById('description').textContent = `Weather : ${weather[0].main}`
    showError()

}
    
function showError(){
    weatherInfo.classList.remove('hidden')
    errorMsg.classList.add('hidden')
}
})