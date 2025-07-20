import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import FavoritesSection from './components/FavoritesSection';
import ResultsSection from './components/ResultsSection';
import ShoppingList from './components/ShoppingList';
import { mockRecipes } from './data/mockRecipes';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved data on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    const savedShoppingList = localStorage.getItem('shoppingList');
    
    if (savedFavorites) {
      setFavoriteRecipes(JSON.parse(savedFavorites));
    }
    
    if (savedShoppingList) {
      setShoppingList(JSON.parse(savedShoppingList));
    }
  }, []);

  // Save data whenever favorites or shopping list changes
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addIngredient = (ingredient) => {
    const cleanIngredient = ingredient.trim().toLowerCase();
    if (cleanIngredient && !selectedIngredients.includes(cleanIngredient)) {
      setSelectedIngredients([...selectedIngredients, cleanIngredient]);
    }
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const searchRecipes = (searchParams) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const { recipeQuery, cuisine, diet, meal, maxTime } = searchParams;
      
      let filteredRecipes = mockRecipes.filter(recipe => {
        // Recipe name search
        if (recipeQuery && !recipe.title.toLowerCase().includes(recipeQuery.toLowerCase())) {
          return false;
        }

        // Ingredient search
        if (selectedIngredients.length > 0) {
          const hasIngredients = selectedIngredients.some(ingredient =>
            recipe.ingredients.some(recipeIngredient =>
              recipeIngredient.toLowerCase().includes(ingredient)
            )
          );
          if (!hasIngredients) return false;
        }

        // Filter by cuisine
        if (cuisine && recipe.cuisine !== cuisine) return false;

        // Filter by diet
        if (diet && recipe.diet !== diet) return false;

        // Filter by meal
        if (meal && recipe.meal !== meal) return false;

        // Filter by cooking time
        if (maxTime && recipe.cookTime > maxTime) return false;

        return true;
      });

      setSearchResults(filteredRecipes);
      setIsLoading(false);
    }, 1000);
  };

  const toggleFavorite = (recipeId) => {
    const recipe = mockRecipes.find(r => r.id === recipeId);
    const existingIndex = favoriteRecipes.findIndex(fav => fav.id === recipeId);
    
    if (existingIndex >= 0) {
      setFavoriteRecipes(favoriteRecipes.filter((_, index) => index !== existingIndex));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipe]);
    }
  };

  const clearFavorites = () => {
    if (window.confirm('Are you sure you want to clear all favorite recipes?')) {
      setFavoriteRecipes([]);
    }
  };

  const addToShoppingList = (ingredients) => {
    const newItems = ingredients.filter(ingredient => !shoppingList.includes(ingredient));
    if (newItems.length > 0) {
      setShoppingList([...shoppingList, ...newItems]);
    }
  };

  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter(ingredient => ingredient !== item));
  };

  const clearShoppingList = () => {
    if (window.confirm('Clear entire shopping list?')) {
      setShoppingList([]);
    }
  };

  const viewRecipe = (recipeId) => {
    const recipe = mockRecipes.find(r => r.id === recipeId);
    if (recipe) {
      alert(`
Recipe: ${recipe.title}

Ingredients:
${recipe.ingredients.map(ing => `• ${ing}`).join('\n')}

Instructions:
${recipe.instructions}

Cooking Time: ${recipe.cookTime} minutes
Servings: ${recipe.servings}
      `);
      
      // Add ingredients to shopping list
      addToShoppingList(recipe.ingredients);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        
        <SearchSection
          selectedIngredients={selectedIngredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          searchRecipes={searchRecipes}
        />
        
        <FavoritesSection
          favoriteRecipes={favoriteRecipes}
          toggleFavorite={toggleFavorite}
          clearFavorites={clearFavorites}
          viewRecipe={viewRecipe}
        />
        
        <ResultsSection
          searchResults={searchResults}
          isLoading={isLoading}
          toggleFavorite={toggleFavorite}
          favoriteRecipes={favoriteRecipes}
          viewRecipe={viewRecipe}
        />
        
        {shoppingList.length > 0 && (
          <ShoppingList
            shoppingList={shoppingList}
            removeFromShoppingList={removeFromShoppingList}
            clearShoppingList={clearShoppingList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
