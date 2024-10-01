import React from 'react';
import styles from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Popular Movies</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
