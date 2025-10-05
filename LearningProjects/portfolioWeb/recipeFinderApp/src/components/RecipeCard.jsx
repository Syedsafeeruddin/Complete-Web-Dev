import React from "react";

const RecipeCard = ({ recipeInfo, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-gray-900/90 text-white rounded-3xl shadow-2xl p-6 w-[60vw] h-[70vh] flex flex-col md:flex-row overflow-hidden border border-gray-700 animate-slideUp">
        
        {/* Left: Recipe Image */}
        <div className="md:w-1/2 w-full flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center items-center">
          <img
            src={recipeInfo.strMealThumb}
            alt={recipeInfo.strMeal}
            className="rounded-2xl w-full h-64 md:h-full object-cover shadow-lg border border-gray-700"
          />
        </div>

        {/* Right: Recipe Info */}
        <div className="flex flex-col justify-between flex-grow overflow-hidden text-center">
          <div className="overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <h2 className="text-3xl font-extrabold mb-3 text-pink-400 drop-shadow-lg text-center md:text-left">
              {recipeInfo.strMeal}
            </h2>
            <p className="text-gray-300 mb-1 text-center md:text-center">
              <strong className="text-pink-400">Category:</strong> {recipeInfo.strCategory}
            </p>
            <p className="text-gray-300 mb-4 text-center md:text-center">
              <strong className="text-pink-400">Origin:</strong> {recipeInfo.strArea}
            </p>
            <p className="text-gray-200 leading-relaxed text-justify">
              <strong className="text-pink-400">Instructions: </strong>
              {recipeInfo.strInstructions}
            </p>
          </div>

          {/* Bottom-left Close Button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={closePopup}
              className="w-full hover:rounded-lg bg-red-500/90 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-transform hover:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
