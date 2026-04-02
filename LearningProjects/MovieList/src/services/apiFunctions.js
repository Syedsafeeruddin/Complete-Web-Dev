const API_KEY = "ded1259a5468088ea2d4e7b8cbd6c1db"
const API_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
    const movieData = await response.json()
    return movieData.results
}
export const searchMovie = async (query) => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query || '')}`)
    const movieData = await response.json()
    return movieData.results
}