import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/movieService';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getTrendingMovies(); // API повертає об'єкт, де масив фільмів знаходиться у полі 'results'
        setMovies(results);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
        setError('Could not load trending movies. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {error && <p>{error}</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <p>No poster available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
