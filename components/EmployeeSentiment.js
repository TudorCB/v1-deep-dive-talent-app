import React from 'react';
import useFetchData from '../utils/useFetchData';

const EmployeeSentiment = ({ companyId }) => {
  const { data: sentiment, loading, error } = useFetchData(`/api/companies/${companyId}/employee_sentiment`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading employee sentiment. Please try again later.</div>;

  return (
    <div>
      <h3>Employee Sentiment</h3>
      <p>Sentiment: {sentiment.sentiment}</p>
      <p>Score: {sentiment.score}</p>
    </div>
  );
};

export default EmployeeSentiment;