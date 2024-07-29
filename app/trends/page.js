'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TrendsMap from '../../components/TrendsMap';
import TrendsFilters from '../../components/TrendsFilters';
import TrendsVisualizations from '../../components/TrendsVisualizations';

export default function TrendsPage() {
  const [trendsData, setTrendsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/trends/SanFrancisco')
      .then(response => {
        setTrendsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error('Error fetching trends data:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Trends Insights</h1>
      <TrendsFilters />
      <TrendsMap trendsData={trendsData} />
      <TrendsVisualizations trendsData={trendsData} />
    </div>
  );
}