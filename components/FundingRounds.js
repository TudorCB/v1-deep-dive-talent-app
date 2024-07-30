import React from 'react';
import useFetchData from '../utils/useFetchData';

const FundingRounds = ({ companyId }) => {
  const { data: rounds, loading, error } = useFetchData(`/api/companies/${companyId}/funding_rounds`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading funding rounds. Please try again later.</div>;

  return (
    <div>
      <h3>Funding Rounds</h3>
      <ul>
        {rounds.rounds.map((round, index) => (
          <li key={index}>
            Series: {round.series}, Amount: {round.amount}, Date: {round.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FundingRounds;