import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search term');
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
