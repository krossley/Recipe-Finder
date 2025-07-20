# 🍳 Recipe Finder - React Application

A modern, responsive React web application that helps you discover delicious recipes based on your available ingredients or recipe preferences. Built with React 18 and featuring a beautiful, intuitive user interface.

![Recipe Finder](https://img.shields.io/badge/React-18.2.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🔍 **Smart Recipe Search**
- **Ingredient-based search**: Find recipes using ingredients you already have
- **Recipe name search**: Search for specific recipes by name
- **Advanced filters**: Filter by cuisine type, diet, meal type, and cooking time

### 💖 **Favorites Management**
- Save your favorite recipes with one click
- Persistent storage using localStorage
- Easy management with clear all option

### 📝 **Shopping List**
- Automatically add recipe ingredients to your shopping list
- Remove individual items or clear the entire list
- Persistent storage across browser sessions

### 🎨 **Beautiful UI/UX**
- Modern gradient design with smooth animations
- Fully responsive layout for all devices
- Intuitive card-based recipe display
- Interactive ingredient tags

### 📱 **Mobile-Friendly**
- Responsive design that works on desktop, tablet, and mobile
- Touch-friendly interface elements
- Optimized for various screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd "Recipe Finder"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🏗️ Project Structure

```
Recipe Finder/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles
│   ├── index.js           # Application entry point
│   ├── components/        # Reusable React components
│   │   ├── Header.js      # Application header
│   │   ├── SearchSection.js    # Search functionality
│   │   ├── RecipeCard.js       # Individual recipe display
│   │   ├── FavoritesSection.js # Favorites management
│   │   ├── ResultsSection.js   # Search results display
│   │   └── ShoppingList.js     # Shopping list component
│   └── data/
│       └── mockRecipes.js      # Sample recipe data
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## 🧩 Components Overview

### **App.js**
- Main component managing global state
- Handles data persistence with localStorage
- Coordinates between child components

### **SearchSection.js**
- Ingredient input and management
- Recipe name search
- Filter controls (cuisine, diet, meal type, cooking time)

### **RecipeCard.js**
- Reusable component for displaying recipe information
- Shows recipe image, title, cooking time, servings
- Displays ingredients and nutrition information
- Favorite toggle and view recipe buttons

### **FavoritesSection.js**
- Manages and displays favorite recipes
- Uses RecipeCard component for consistent display

### **ResultsSection.js**
- Shows search results with loading states
- Handles empty states with helpful messaging

### **ShoppingList.js**
- Displays shopping list items
- Individual item removal functionality
- Clear all items option

## 🎯 How to Use

### **Search by Ingredients**
1. Type ingredient names in the ingredient input field
2. Click "Add" or press Enter to add ingredients
3. Remove ingredients by clicking the "×" on ingredient tags
4. Click "Find Recipes" to search

### **Search by Recipe Name**
1. Type the recipe name in the recipe search field
2. Press Enter or click "Find Recipes"

### **Apply Filters**
1. Select desired filters (cuisine, diet, meal type, cooking time)
2. Filters work with both ingredient and recipe name searches

### **Manage Favorites**
1. Click the heart icon on any recipe card to save it
2. View all favorites in the "Favorite Recipes" section
3. Use "Clear All" to remove all favorites

### **Shopping List**
1. Click "View Recipe" on any recipe card
2. Recipe ingredients are automatically added to your shopping list
3. Remove individual items or clear the entire list

## 🎨 Customization

### **Adding New Recipes**
Edit `src/data/mockRecipes.js` to add new recipes:

```javascript
{
  id: 7,
  title: "Your Recipe Name",
  ingredients: ["ingredient1", "ingredient2"],
  cuisine: "cuisine-type",
  diet: "diet-type",
  meal: "meal-type",
  cookTime: 30,
  servings: 4,
  nutrition: {
    calories: 400,
    protein: "20g",
    carbs: "50g",
    fat: "15g"
  },
  instructions: "Step-by-step instructions..."
}
```

### **Styling Changes**
Modify `src/App.css` to customize the appearance:
- Color scheme (change gradient colors)
- Typography (font family, sizes)
- Layout (spacing, grid layouts)
- Animations (transitions, hover effects)

## 🔧 Technical Details

### **Built With**
- **React 18.2.0** - Frontend framework
- **Create React App** - Project setup and build tools
- **CSS3** - Styling with flexbox and grid
- **localStorage** - Client-side data persistence

### **Key React Concepts Used**
- Functional components with hooks
- useState for state management
- useEffect for side effects and lifecycle
- Props for data passing
- Event handling
- Conditional rendering
- Array mapping for dynamic content

### **Browser Compatibility**
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📦 Deployment

### **Build for Production**
```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### **Deploy to GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/recipe-finder"`
3. Add scripts: 
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

### **Deploy to Netlify**
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify deploy
3. Or connect your Git repository for automatic deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Recipe data structure inspired by common cooking apps
- UI design influenced by modern food and cooking websites
- Built with Create React App for rapid development

## 📞 Support

If you encounter any issues or have questions:
1. Check the GitHub Issues page
2. Create a new issue with detailed description
3. Include browser version and steps to reproduce

---

**Happy Cooking! 👨‍🍳👩‍🍳**
