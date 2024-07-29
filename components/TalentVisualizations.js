'use client';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TalentVisualizations({ talentData }) {
  const [visualizationData, setVisualizationData] = useState([]);

  useEffect(() => {
    if (talentData) {
      setVisualizationData([
        { name: 'Remote Propensity', value: talentData.remotePropensity },
        { name: 'Male', value: talentData.diversityInsights.gender?.male || 0 },
        { name: 'Female', value: talentData.diversityInsights.gender?.female || 0 }
      ]);
    }
  }, [talentData]);

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