import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.movieDetailsPage}>
      {movie && (
        <>
          <button onClick={handleGoBack}>Go back</button>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>

          <div className={styles.additionalInfo}>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
