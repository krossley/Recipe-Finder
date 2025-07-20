import React from 'react';

const getRecipeEmoji = (cuisine) => {
  const emojis = {
    italian: '🍝',
    mexican: '🌮',
    asian: '🥢',
    american: '🍔',
    mediterranean: '🥗',
    default: '🍳'
  };
  return emojis[cuisine] || emojis.default;
};

const RecipeCard = ({ recipe, toggleFavorite, favoriteRecipes, viewRecipe }) => {
  const isFavorited = favoriteRecipes.some(fav => fav.id === recipe.id);

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        {getRecipeEmoji(recipe.cuisine)}
      </div>
      <div className="recipe-content">
        <div className="recipe-title">{recipe.title}</div>
        <div className="recipe-meta">
          <span>🕒 {recipe.cookTime} min</span>
          <span>👥 {recipe.servings} servings</span>
        </div>
        <div className="recipe-ingredients">
          <h4>Ingredients ({recipe.ingredients.length}):</h4>
          <div className="ingredients-list">
            {recipe.ingredients.slice(0, 4).join(', ')}
            {recipe.ingredients.length > 4 ? '...' : ''}
          </div>
        </div>
        <div className="nutrition-info">
          <h4>Nutrition per serving:</h4>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span>Calories:</span>
              <span>{recipe.nutrition.calories}</span>
            </div>
            <div className="nutrition-item">
              <span>Protein:</span>
              <span>{recipe.nutrition.protein}</span>
            </div>
            <div className="nutrition-item">
              <span>Carbs:</span>
              <span>{recipe.nutrition.carbs}</span>
            </div>
            <div className="nutrition-item">
              <span>Fat:</span>
              <span>{recipe.nutrition.fat}</span>
            </div>
          </div>
        </div>
        <div className="recipe-actions">
          <button className="recipe-btn view-recipe" onClick={() => viewRecipe(recipe.id)}>
            View Recipe
          </button>
          <button 
            className={`recipe-btn favorite-btn ${isFavorited ? 'favorited' : ''}`}
            onClick={() => toggleFavorite(recipe.id)}
          >
            {isFavorited ? '❤️ Saved' : '🤍 Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
