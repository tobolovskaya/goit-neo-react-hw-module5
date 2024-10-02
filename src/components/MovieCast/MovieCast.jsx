import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Для типізації пропсів
import { getMovieCredits } from '../services/tmdbApi';
import styles from './MovieCast.module.css'; // Підключення стилів

function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <div>
              <h3>{actor.name}</h3>
              <p>as {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.number.isRequired, // Вказуємо, що movieId обов'язковий і має бути числом
};

export default MovieCast;
