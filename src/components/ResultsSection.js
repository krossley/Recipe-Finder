import React from 'react';
import RecipeCard from './RecipeCard';

const ResultsSection = ({ searchResults, isLoading, toggleFavorite, favoriteRecipes, viewRecipe }) => {
  return (
    <div className="results-section">
      <div className="results-header">
        <h2>🔍 Search Results</h2>
        <span>{searchResults.length > 0 ? `${searchResults.length} recipes found` : ''}</span>
      </div>
      
      {isLoading ? (
        <div className="loading">
          <p>🔍 Searching for delicious recipes...</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {searchResults.length === 0 ? (
            <div className="empty-state">
              <h3>Ready to cook?</h3>
              <p>Search for recipes using ingredients or recipe names above!</p>
            </div>
          ) : (
            searchResults.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                toggleFavorite={toggleFavorite}
                favoriteRecipes={favoriteRecipes}
                viewRecipe={viewRecipe}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsSection;
