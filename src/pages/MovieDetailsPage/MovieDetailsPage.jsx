import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieService';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const backLink = location.state?.from || '/movies';

  return (
    <div className={styles.movieDetails}>
      <Link to={backLink} className={styles.backButton}>
        Go back
      </Link>
      <div className={styles.movieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
          </li>
        </ul>
      </div>
      {}
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
