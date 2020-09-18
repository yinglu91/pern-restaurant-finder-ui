import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get('/');

      console.log(response);
      setRestaurants(response.data.data.restaurants);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await RestaurantFinder.delete(`/${id}`);

      setRestaurants(
        restaurants.filter((item) => {
          return item.id !== id;
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="">Location</th>
            <th scope="">Price Range</th>
            <th scope="">Ratings</th>
            <th scope="">Edit</th>
            <th scope="">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              const { id, name, location, price_range } = restaurant;

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{'$'.repeat(price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
