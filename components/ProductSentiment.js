import React from 'react';
import useFetchData from '../utils/useFetchData';

const ProductSentiment = ({ companyId }) => {
  const { data: sentiment, loading, error } = useFetchData(`/api/companies/${companyId}/product_sentiment`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product sentiment. Please try again later.</div>;

  return (
    <div>
      <h3>Product Sentiment</h3>
      <p>Sentiment: {sentiment.sentiment}</p>
      <p>Score: {sentiment.score}</p>
    </div>
  );
};

export default ProductSentiment;