import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/tmdbApi';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button>
        <Link to="/">Go back</Link>
      </button>
      <h1>{movie.title} ({movie.release_date.split('-')[0]})</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
