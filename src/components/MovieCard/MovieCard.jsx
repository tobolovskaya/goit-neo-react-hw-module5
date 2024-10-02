import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css'; // Підключення стилів для компонента

const MovieCard = ({ movie, onClick }) => {
  const { title, poster_path } = movie;

  return (
    <div className={styles.card} onClick={() => onClick(movie.id)}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired, // Функція, яка буде викликана при натисканні на картку
};

export default MovieCard;
