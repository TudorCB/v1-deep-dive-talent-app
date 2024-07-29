import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TotalCompensation({ location, skillset }) {
  const [totalCompensationData, setTotalCompensationData] = useState(null);

  useEffect(() => {
    axios.get(`/api/talent/${location}/${skillset}/total_compensation`)
      .then(response => setTotalCompensationData(response.data))
      .catch(error => {
        console.error('Error fetching total compensation:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, [location, skillset]);

  if (!totalCompensationData) return <p>Loading...</p>;

  return (
    <div>
      <h3>Total Compensation</h3>
      <p>Base Salary: {totalCompensationData.baseSalary} {totalCompensationData.currency}</p>
      <p>Bonus: {totalCompensationData.bonus} {totalCompensationData.currency}</p>
      <p>Equity: {totalCompensationData.equity} {totalCompensationData.currency}</p>
      <p>Benefits: {totalCompensationData.benefits} {totalCompensationData.currency}</p>
    </div>
  );
}