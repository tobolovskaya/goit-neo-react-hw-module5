import { searchMovies, getTrendingMovies, getMovieDetails, getMovieCredits, getMovieReviews } from './tmdbApi';

// Пошук фільмів за ключовим словом
searchMovies('Batman')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Отримання популярних фільмів
getTrendingMovies()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Отримання деталей фільму
getMovieDetails(12345)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Отримання акторського складу
getMovieCredits(12345)
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Отримання оглядів
getMovieReviews(12345)
  .then(data => console.log(data))
  .catch(error => console.error(error));
