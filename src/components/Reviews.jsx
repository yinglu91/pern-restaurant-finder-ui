import React from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        const { id, name, rating, review: reviewText } = review;

        return (
          <div
            key={id}
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: '30' }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{name}</span>
              <span>
                <StarRating rating={rating} />
              </span>
            </div>

            <div className="card-body">
              <p className="card-text">{reviewText}</p>
            </div>
          </div>
        );
      })}

      {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span><StarRating rating={3} /></span>
        </div>

        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>

      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span><StarRating rating={3} /></span>
        </div>

        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>

      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span><StarRating rating={3} /></span>
        </div>

        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
