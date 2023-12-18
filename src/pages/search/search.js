import React from 'react'
// SearchBar.js
import  { useState } from 'react';
import './search.css'; // Import the CSS file

const Search = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    // You can implement logic here to fetch search suggestions based on the inputValue
    // For simplicity, we'll just toggle the suggestions dropdown
    setShowSuggestions(inputValue.trim() !== '');
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Amazon"
          value={query}
          onChange={handleInputChange}
        />
        <i className="fa fa-search"></i>
      </div>
      {showSuggestions && (
        <div className="suggestions-container">
          {/* Render your search suggestions here */}
          {/* For simplicity, we'll just display a placeholder text */}
          <p>Search suggestions go here...</p>
        </div>
      )}
    </div>
  );
};

export default Search;

