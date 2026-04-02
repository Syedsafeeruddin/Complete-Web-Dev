import React, { useEffect } from 'react'
import Card from '../components/Card'
import { getPopularMovies, searchMovie } from '../services/apiFunctions.js'

function Home() {
  const [search, setSearch] = React.useState("")
  const [movies, setMovies] = React.useState([])
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (error) {
        console.log(error);
        setError("Failed to load popular movies...")
      } finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!search.trim()) return
    if (loading) return
    setLoading(true)

    try {
      const searchResult = await searchMovie(search)
      setMovies(searchResult)
      setError(null)
    } catch (error) {
      console.log(error);
      setError("Failed to load movies...")
    } finally {
      setLoading(false)
    }
    setSearch("")
  }

  return (
    <div className="px-6 py-8 bg-black min-h-screen">
      <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <input
          className="flex-1 border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
          Submit
        </button>
      </form>

      {error && <div className="text-red-600 font-medium mb-4">{error}</div>}

      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(search) &&
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
