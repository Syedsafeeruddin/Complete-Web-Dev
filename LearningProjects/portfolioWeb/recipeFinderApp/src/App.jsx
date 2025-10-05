import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import Typewriter from "./components/TypeWriter.jsx";
import axios from "axios";

function App() {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const fetchRecipe = async (recipe) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}${recipe}`;
      const response = await axios.get(url);
      if (response.data.meals && response.data.meals.length > 0) {
        setRecipeInfo(response.data.meals[0]);
        setShowPopup(true);
      } else {
        setError("No recipe found");
      }
    } catch {
      setError("Something went wrong");
      setRecipeInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main App Container */}
      <div className="relative z-10 bg-white/20 backdrop-blur-lg text-white p-8 sm:p-10 rounded-2xl shadow-2xl max-w-lg w-[90%] border border-white/30 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-3 tracking-wide drop-shadow-lg">
          <Typewriter text="Recipe Finder App" speed={90} />
        </h1>
        <p className="text-center text-lg opacity-90 mb-6">
          Discover delicious recipes from around the world 🍽️
        </p>

        <SearchBar fetchRecipe={fetchRecipe} />

        {loading && (
          <p className="text-center mt-4 text-lg font-semibold animate-pulse">
            Loading recipes...
          </p>
        )}
        {error && (
          <p className="text-center text-xl text-red-400 mt-3 font-semibold">
            {error}
          </p>
        )}
      </div>

      {/* Popup placed outside main container for full-screen width */}
      {showPopup && recipeInfo && (
        <RecipeCard
          recipeInfo={recipeInfo}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default App;
