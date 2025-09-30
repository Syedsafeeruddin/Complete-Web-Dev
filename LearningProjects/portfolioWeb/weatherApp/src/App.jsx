import React from 'react'
import SearchBar from './components/SearchBar.jsx'
import axios from 'axios'
import WeatherCard from './components/WeatherCard.jsx'

function App() {
  const [weather, setWeather] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    try {
      const url = `${API_URL}?q=${city}&appid=${API_KEY}`
      const response = await axios.get(url)
      console.log(response.data)
      setWeather(response.data)
    } catch (error) {
      if(error.response && error.response.status === 404) {
        setError('City not found')
      } else {
        setError('Something went wrong')
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-pink-200'>
      <div className='bg-black/90 text-white p-10 rounded-lg shadow-lg max-w-md w-full'>
        <h1 className='text-3xl font-bold text-center mb-3'>Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {weather && <WeatherCard weather={weather}/>}
        {loading && <p className='text-center mt-3 text-xl font-semibold'>Loading Information...</p>}
        {error && <p className='text-center text-3xl text-red-500 mt-3 font-semibold'>{error}</p>}
      </div>
    </div>
  )
}
export default App