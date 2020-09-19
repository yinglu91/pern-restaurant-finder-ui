import React, { useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useParams, useHistory, useLocation } from 'react-router-dom';

const AddReview = () => {
  const { id: restaurantId } = useParams();
  let history = useHistory();
  const location = useLocation();

  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post(
        `/${restaurantId}/addReview`,
        {
          name,
          review: reviewText,
          rating,
        }
      );

      // refresh the page by goto home, then back this page.
      history.push('/');
      history.push(location.pathname);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mb-2">
      <form onSubmit={handleSubmitReview}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
            />
          </div>

          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disable="true" value="">
                Rating
              </option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form-group col-12">
            <label htmlFor="review">Review</label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              id="review"
              className="form-control"
            ></textarea>
          </div>

          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
