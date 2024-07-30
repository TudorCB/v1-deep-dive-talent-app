import React from 'react';
import useFetchData from '../utils/useFetchData';

const CompanyValues = ({ companyId }) => {
  const { data: values, loading, error } = useFetchData(`/api/companies/${companyId}/values`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading company values. Please try again later.</div>;

  return (
    <div>
      <h3>Company Values</h3>
      <ul>
        {values.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyValues;