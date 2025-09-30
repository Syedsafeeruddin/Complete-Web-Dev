import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div>
        <h2 className='text-3xl font-bold text-center text-gray-300 mt-3'>
            {weather.name}, {weather.sys.country}
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
            <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
            className='w-26 h-26'
            />
            <p className='text-4xl font-bold text-gray-200'>
                {Math.round(weather.main.temp - 273.15)}°C
            </p>
            <p className='text-center text-gray-300 capitalize'>
                {weather.weather[0].description}
            </p>
            <div className='grid grid-cols-2 gap-5 mt-3'>
                <div 
                className='border font-semibold border-white rounded-lg p-2 hover:border-gray-500'>
                    <p>Feels like: {Math.round(weather.main.feels_like - 273.15)}°C</p>
                </div>
                <div
                className='border font-semibold border-white rounded-lg p-2 hover:border-gray-500'>
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
                <div
                className='border font-semibold border-white rounded-lg p-2 hover:border-gray-500'>
                    <p>Pressure: {weather.main.pressure} hPa</p>
                </div>
                <div
                className='border font-semibold border-white rounded-lg p-2 hover:border-gray-500'>
                    <p>Wind: {weather.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard