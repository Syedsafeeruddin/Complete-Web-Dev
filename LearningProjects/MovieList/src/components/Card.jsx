import React from 'react'
import { useMovieContext } from '../contexts/MovieContext.jsx'

function Card({ movie }) {
  const { addToFavorites, removeFavorite, isFavorite } = useMovieContext()
  const favorite = isFavorite(movie.id)

  function likeBtn(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addToFavorites(movie)
    }
  }

  return (
    <>
      <div className="bg-black rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <div className="relative">
          <img
            className="w-full h-72 object-cover"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="absolute top-2 right-2">
            <button
              className={`p-2 rounded-full text-lg transition ${
                favorite ? "bg-white text-red-500" : "bg-white text-white"
              }`}
              onClick={likeBtn}
            >
              {favorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-200">{movie.title}</h3>
          <p className="text-gray-100">{movie.release_date?.split('-')[0]}</p>
        </div>
      </div>
    </>
  )
}

export default Card


