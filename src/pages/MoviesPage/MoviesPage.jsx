import { useState } from 'react';
import { searchMovies } from '../../services/movieService';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
