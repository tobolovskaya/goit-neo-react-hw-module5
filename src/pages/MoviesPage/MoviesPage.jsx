import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/movieService';
import MovieList from '../../components/MovieList/MovieList';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(data => setMovies(data.results));
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
