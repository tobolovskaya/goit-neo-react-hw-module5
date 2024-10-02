import PropTypes from 'prop-types'; // Для типізації пропсів
import { Link } from 'react-router-dom'; // Для навігації між сторінками
import styles from './MovieList.module.css'; // Підключення стилів

function MovieList({ movies }) {
  return (
    <ul className={styles.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.movieItem}>
          <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className={styles.movieImage}
            />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
