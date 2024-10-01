import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <p>{actor.name}</p>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
