import React from "react";

const SearchBar = ({ fetchRecipe }) => {
  const [recipe, setRecipe] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.trim()) {
      fetchRecipe(recipe);
      setRecipe("");
    }
  };

  return (
    <form
      className="flex items-center gap-3 p-2 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg w-full max-w-md mx-auto border border-white/30"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-grow p-3 text-white border border-transparent bg-gray-800/60 rounded-lg focus:ring-2 focus:ring-pink-400 placeholder-gray-300 outline-none transition duration-150 ease-in-out"
        type="text"
        placeholder="Enter recipe name..."
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform duration-200 hover:scale-105"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
