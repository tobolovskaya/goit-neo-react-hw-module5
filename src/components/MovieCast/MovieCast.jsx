import { useEffect, useState } from 'react';
import { getMovieCredits } from '../services/tmdbApi';

function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieCredits(movieId);
      setCast(data.cast);
    };

    fetchCredits();
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name} as {actor.character}</li>
      ))}
    </ul>
  );
}

export default MovieCast;
