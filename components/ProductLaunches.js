import React from 'react';
import useFetchData from '../utils/useFetchData';

const ProductLaunches = ({ companyId }) => {
  const { data: launches, loading, error } = useFetchData(`/api/companies/${companyId}/product_launches`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product launches. Please try again later.</div>;

  return (
    <div>
      <h3>Product Launches</h3>
      <ul>
        {launches.launches.map((launch, index) => (
          <li key={index}>
            Name: {launch.name}, Date: {launch.date}, Description: {launch.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLaunches;