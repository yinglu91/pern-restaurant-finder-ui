import React from 'react';

// rating: 1, 2, 2,5, ... 5
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let cssClassName = '';
    if (i <= rating) {
      cssClassName = 'fas fa-star text-warning';
      //stars.push(<i className="fas fa-star text-warning"></i>); // full start
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      cssClassName = 'fas fa-star-half-alt text-warning';
      //stars.push(<i className="fas fa-star-half-alt text-warning"></i>); // half start
    } else {
      cssClassName = 'far fa-star text-warning';
      //stars.push(<i className="far fa-star text-warning"></i>); // empty start
    }

    stars.push(<i key={i} className={cssClassName}></i>);
  }

  return <>{stars}</>;
};

export default StarRating;
