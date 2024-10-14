import { useCallback, useState } from 'react';
import './styles.css';

export const StarRating = ({
  // Customization option for the current rating
  currentRating = -1,

  // Customization option for the number of stars
  numOfStars = 5,

  // Customization option for star active color
  activeColor = 'orange',

  // Customization option for star inactive color
  inactiveColor = 'gray',

  // Customization option for star size
  starSize = '40px',
}) => {
  // State management to track the current rating
  const [rating, setRating] = useState(currentRating);

  // State management to track the hover state
  const [hover, setHover] = useState(-1);

  // Get star customization for color, size, and cursor
  const getStarStyle = useCallback((isActive) => (
    isActive ? {
      color: activeColor,
      fontSize: starSize,
      cursor: 'pointer'
    } : {
      color: inactiveColor,
      fontSize: starSize,
      cursor: 'default'
    }
  ), [activeColor, inactiveColor, starSize]);

  return (
    <div className="container">
      <div className="star-container">
        {[...Array(numOfStars)].map((_, index) => (
          <div
            key={index}

            // Star customization for color, size, and cursor
            style={getStarStyle(index <= Math.max(rating, hover))}

            // Clicking interaction
            onClick={() => setRating(index)}

            // Hovering interaction
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