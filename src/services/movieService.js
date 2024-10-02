import axios from 'axios';

const API_KEY = 'f464d6d375aa30e43301f97dae474950'; // замініть на реальний ключ

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: API_KEY,
  },
});

export const searchMovies = async (query, page = 1) => {
  const response = await api.get('search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
  });
  return response.data;
};

export const getTrendingMovies = async () => {
  const response = await api.get('trending/movie/day');
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`movie/${movieId}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await api.get(`movie/${movieId}/credits`);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await api.get(`movie/${movieId}/reviews`);
  return response.data;
};
