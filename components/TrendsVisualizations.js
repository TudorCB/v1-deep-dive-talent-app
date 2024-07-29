'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TrendsVisualizations({ trendsData }) {
  const [visualizationData, setVisualizationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trendsData && trendsData.data) {
      const { tech_clusters, colocation_patterns, government_funding } = trendsData.data;
      const processedData = [
        { name: 'Tech Clusters', value: tech_clusters.length },
        { name: 'Colocation Patterns', value: Object.keys(colocation_patterns).length },
        { name: 'Government Funding', value: Object.values(government_funding).reduce((a, b) => a + b, 0) }
      ];
      setVisualizationData(processedData);
      setLoading(false);
    } else {
      setError(new Error('Invalid trends data'));
      setLoading(false);
    }
  }, [trendsData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <BarChart width={600} height={300} data={visualizationData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" name="Data Value" />
    </BarChart>
  );
}