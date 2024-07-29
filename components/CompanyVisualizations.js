'use client';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function CompanyVisualizations({ companyData }) {
  const [visualizationData, setVisualizationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (companyData) {
      const { growth, tech_stack, acquisitions } = companyData;
      const processedData = [
        { name: 'Growth', value: Object.values(growth).reduce((a, b) => a + b, 0) },
        { name: 'Tech Stack', value: tech_stack.length },
        { name: 'Acquisitions', value: acquisitions.length }
      ];
      setVisualizationData(processedData);
      setLoading(false);
    } else {
      setError(new Error('Invalid company data'));
      setLoading(false);
    }
  }, [companyData]);

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