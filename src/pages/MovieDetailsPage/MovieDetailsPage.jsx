import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieService';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const previousLocation = useRef(location.state?.from || '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <Link to={previousLocation.current}>Go back</Link>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
