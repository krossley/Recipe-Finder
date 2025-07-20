import React from 'react';

const ShoppingList = ({ shoppingList, removeFromShoppingList, clearShoppingList }) => {
  return (
    <div className="shopping-list">
      <h2>📝 Shopping List</h2>
      <div className="shopping-items">
        {shoppingList.map((item, index) => (
          <div key={index} className="shopping-item">
            {item}
            <span className="remove" onClick={() => removeFromShoppingList(item)}>×</span>
          </div>
        ))}
      </div>
      <button className="search-btn" onClick={clearShoppingList} style={{ marginTop: '20px' }}>
        Clear Shopping List
      </button>
    </div>
  );
};

export default ShoppingList;
