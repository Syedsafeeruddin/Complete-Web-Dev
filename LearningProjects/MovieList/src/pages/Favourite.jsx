import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/Card.jsx";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="px-6 py-8 bg-black min-h-screen">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Your Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-black min-h-screen">
        <h2 className="text-2xl font-bold text-white">No Favorite Movies Yet</h2>
        <p className="text-gray-400 mt-2">Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  }
}

export default Favorites;
