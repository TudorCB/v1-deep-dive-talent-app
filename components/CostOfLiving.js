import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CostOfLiving({ location, neighborhood }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/trends/locations/${location}/cost_of_living/${neighborhood}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(`Error fetching cost of living for neighborhood ${neighborhood} in location ${location}:`, err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [location, neighborhood]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Cost of Living in {neighborhood}</h2>
      <p>Cost: ${data.cost}</p>
    </div>
  );
}