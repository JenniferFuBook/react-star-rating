import { useState } from 'react';
import './styles.css';

export const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);

  return (
    <div className="container">
      <div className="star-container">
        {[...Array(numOfStars)].map((_, index) => (
          <div
            key={index}
            className={index <= Math.max(rating, hover) ? 'active-star' : 'inactive-star'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(-1)}
          >
            ★
          </div>
        ))}
      </div>
      {rating === -1 ? 'Not Rated' : `Rated ${rating + 1}`}
    </div>
  );
};