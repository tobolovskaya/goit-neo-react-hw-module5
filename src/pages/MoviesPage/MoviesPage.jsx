import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/movieService';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar'; // Правильний імпорт компонента SearchBar

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const data = await searchMovies(query);
      setMovies(data.results);
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      {/* Виправлення назви пропсу */}
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 ? <MovieList movies={movies} /> : <p>No movies found</p>}
    </div>
  );
};

export default MoviesPage;
 