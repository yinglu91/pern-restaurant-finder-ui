import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useHistory } from 'react-router-dom';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();

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

  const handleDelete = async (e, id) => {
    e.stopPropagation(); // don't send the event to table row.

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

  const handleUpdate = (e, id) => {
    e.stopPropagation(); // don't send the event to table row.
    
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) =>{
    history.push(`/restaurants/${id}`);
  }

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
                <tr key={id} onClick={() => handleRestaurantSelect(id)}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{'$'.repeat(price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, id)}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, id)}
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
