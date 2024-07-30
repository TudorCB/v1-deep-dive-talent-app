import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function GovernmentFunding({ location }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/trends/locations/${location}/government_funding`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching government funding:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#ffc658" />
    </BarChart>
  );
}