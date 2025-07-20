import React from 'react';
import RecipeCard from './RecipeCard';

const FavoritesSection = ({ favoriteRecipes, toggleFavorite, clearFavorites, viewRecipe }) => {
  return (
    <div className="favorites-section">
      <div className="favorites-header">
        <h2>💖 Favorite Recipes</h2>
        <button className="clear-favorites" onClick={clearFavorites}>Clear All</button>
      </div>
      <div className="recipe-grid">
        {favoriteRecipes.length === 0 ? (
          <div className="empty-state">
            <h3>No favorites yet</h3>
            <p>Heart recipes to save them here!</p>
          </div>
        ) : (
          favoriteRecipes.map(recipe => (
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
    </div>
  );
};

export default FavoritesSection;
