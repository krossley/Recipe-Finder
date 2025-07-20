import React, { useState } from 'react';

const SearchSection = ({ selectedIngredients, addIngredient, removeIngredient, searchRecipes }) => {
  const [ingredientInput, setIngredientInput] = useState('');
  const [recipeInput, setRecipeInput] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [meal, setMeal] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const handleAddIngredient = () => {
    if (ingredientInput.trim()) {
      addIngredient(ingredientInput);
      setIngredientInput('');
    }
  };

  const handleIngredientKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  const handleRecipeKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    searchRecipes({
      recipeQuery: recipeInput,
      cuisine,
      diet,
      meal,
      maxTime: maxTime ? parseInt(maxTime) : null
    });
  };

  return (
    <div className="search-section">
      <div className="search-methods">
        <div className="search-method">
          <h3>Search by Ingredients</h3>
          <div className="ingredient-input">
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyPress={handleIngredientKeyPress}
              placeholder="Enter an ingredient..."
            />
            <button onClick={handleAddIngredient}>Add</button>
          </div>
          <div className="ingredient-tags">
            {selectedIngredients.map((ingredient, index) => (
              <div key={index} className="ingredient-tag">
                {ingredient}
                <span className="remove" onClick={() => removeIngredient(ingredient)}>×</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="search-method">
          <h3>Search by Recipe Name</h3>
          <div className="recipe-search">
            <input
              type="text"
              value={recipeInput}
              onChange={(e) => setRecipeInput(e.target.value)}
              onKeyPress={handleRecipeKeyPress}
              placeholder="Enter recipe name..."
            />
          </div>
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Cuisine Type</label>
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
            <option value="">Any Cuisine</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="asian">Asian</option>
            <option value="american">American</option>
            <option value="mediterranean">Mediterranean</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Diet Type</label>
          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="">Any Diet</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Meal Type</label>
          <select value={meal} onChange={(e) => setMeal(e.target.value)}>
            <option value="">Any Meal</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Cooking Time</label>
          <select value={maxTime} onChange={(e) => setMaxTime(e.target.value)}>
            <option value="">Any Time</option>
            <option value="15">Under 15 min</option>
            <option value="30">Under 30 min</option>
            <option value="60">Under 1 hour</option>
            <option value="120">Under 2 hours</option>
          </select>
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>Find Recipes</button>
    </div>
  );
};

export default SearchSection;
