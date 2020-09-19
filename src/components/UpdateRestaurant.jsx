import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useHistory } from 'react-router-dom';

const UpdateRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        const restaurant = response.data.data.restaurant;

        setName(restaurant.name);
        setLocation(restaurant.location);
        setPriceRange(restaurant.price_range);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateRestaurant = await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange,
      });

      history.push('/');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="mb-4">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="priceRange">Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="custom-select my-1 mr-sm-2"
          >
            <option disable="true">Price Range</option>

            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
