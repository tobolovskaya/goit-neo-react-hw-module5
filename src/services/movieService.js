import tmdbApi from './tmdbApi';

export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdbApi.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get(`/search/movie`, {
      params: {
        query,
        language: 'en-US',
        include_adult: false,
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

