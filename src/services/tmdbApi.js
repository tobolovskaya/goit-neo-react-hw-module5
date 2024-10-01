import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDY0ZDZkMzc1YWEzMGU0MzMwMWY5N2RhZTQ3NDk1MCIsIm5iZiI6MTcyNzgxNDc2OC40NjM2OTQsInN1YiI6IjY2ZmM1OGQyNmVjNzgwNDc5NmQ2NWI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87XGBKvelXO2rqE9uMuzxA79MGq8xYdU-_dBGMoAzc8';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export default tmdbApi;
