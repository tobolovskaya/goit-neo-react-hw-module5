import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/movieService';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
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

export default HomePage;
