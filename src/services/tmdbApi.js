import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDY0ZDZkMzc1YWEzMGU0MzMwMWY5N2RhZTQ3NDk1MCIsIm5iZiI6MTcyNzgxOTYzMy4wNjI0MzgsInN1YiI6IjY2ZmM1OGQyNmVjNzgwNDc5NmQ2NWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tR38At6TNaL4ZM9xrLbHzYKIzCOjMhkVIwbUNVbV1nI';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Пошук фільмів за ключовим словом
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get('search/movie', {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

// Отримати популярні фільми
export const getTrendingMovies = async () => {
  try {
    const response = await api.get('trending/movie/day');
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// Отримати деталі фільму за ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Отримати акторський склад фільму за ID
export const getMovieCredits = async (movieId) => {
  try {
    const response = await api.get(`movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

// Отримати огляди фільму за ID
export const getMovieReviews = async (movieId) => {
  try {
    const response = await api.get(`movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
