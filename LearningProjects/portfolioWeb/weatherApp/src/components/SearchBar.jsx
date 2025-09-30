import React from 'react'

const SearchBar = ({fetchWeather}) => {
    const [city, setCity] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.trim()) {
            fetchWeather(city)
            setCity('')
        }
    }
  return (
    <form className='flex items-center gap-3 p-2 rounded-xl shadow-2xl w-full max-w-md mx-auto' onSubmit={handleSubmit}>
    <input
        // Dark input background, lighter text, white border/ring focus
        className='flex-grow p-3 text-white border border-gray-600 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150 ease-in-out placeholder-gray-400 outline-none'
        type="text" 
        placeholder='Enter City Name...' 
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
    <button
        // Button color remains the same for contrast, adjusted ring color for dark background
        className='flex-shrink-0 bg-blue-500 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-150 ease-in-out shadow-lg' 
        type='submit'
    >
        Search
    </button>
</form>
  )
}

export default SearchBar