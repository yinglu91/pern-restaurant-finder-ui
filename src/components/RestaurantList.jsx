import React from 'react';

const RestaurantList = () => {
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
          <tr>
            <td>McDonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>McDonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
