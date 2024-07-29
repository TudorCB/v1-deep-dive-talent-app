import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CostAdjustedSalary({ location, skillset }) {
  const [costAdjustedData, setCostAdjustedData] = useState(null);

  useEffect(() => {
    axios.get(`/api/talent/${location}/${skillset}/cost_adjusted_salary`)
      .then(response => setCostAdjustedData(response.data))
      .catch(error => {
        console.error('Error fetching cost-adjusted salary:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, [location, skillset]);

  if (!costAdjustedData) return <p>Loading...</p>;

  return (
    <div>
      <h3>Cost-Adjusted Salary</h3>
      <p>{costAdjustedData.adjustedSalary} {costAdjustedData.currency}</p>
    </div>
  );
}