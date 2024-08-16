import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search news..."
      className="p-2 w-full max-w-md mx-auto block rounded-lg border border-gray-300 focus:border-blue-500 mb-6 text-black font-semibold font-serif"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;