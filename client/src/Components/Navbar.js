import React from 'react';

function Navbar({ categories, selectedCategory, setSelectedCategory, darkMode, setDarkMode }) {
  return (
    <nav className={`flex justify-between items-center p-4 ${darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white '}`}>
      <div className="text-2xl font-bold" >News Aggregator</div>
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mx-2 font-bold text-xl ${selectedCategory === category ? 'text-yellow-600 inline-block border-b-4 border-yellow-600' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-full font-bold ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;