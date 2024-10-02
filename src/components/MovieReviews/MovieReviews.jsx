import { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/tmdbApi';

function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews for this movie.</p>;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
