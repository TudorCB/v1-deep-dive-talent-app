import React from 'react';
import useFetchData from '../utils/useFetchData';

const InvestorNetwork = ({ companyId }) => {
  const { data: investors, loading, error } = useFetchData(`/api/companies/${companyId}/investor_network`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading investor network. Please try again later.</div>;

  return (
    <div>
      <h3>Investor Network</h3>
      <ul>
        {investors.investors.map((investor, index) => (
          <li key={index}>
            Name: {investor.name}, Type: {investor.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestorNetwork;