import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDY0ZDZkMzc1YWEzMGU0MzMwMWY5N2RhZTQ3NDk1MCIsIm5iZiI6MTcyNzg2OTk0Ny42ODE5NDQsInN1YiI6IjY2ZmM1OGQyNmVjNzgwNDc5NmQ2NWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YfwznFAjH56RHmQrU66l69vnUvY0g_QRtmgCtdTGgMM'; // Замість ваш_ключ_API вставте свій токен

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
