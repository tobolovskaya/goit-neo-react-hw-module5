import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movieService';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const data = await getMovieCredits(movieId);
      setCast(data.cast);
    };

    fetchCast();
  }, [movieId]);

  if (!cast.length) return <p>No cast available.</p>;

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <p>{actor.name} as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
