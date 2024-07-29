import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SalaryRanges({ location, skillset }) {
  const [salaryData, setSalaryData] = useState(null);

  useEffect(() => {
    axios.get(`/api/talent/${location}/${skillset}/salary_ranges`)
      .then(response => setSalaryData(response.data))
      .catch(error => {
        console.error('Error fetching salary ranges:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, [location, skillset]);

  if (!salaryData) return <p>Loading...</p>;

  return (
    <div>
      <h3>Salary Ranges</h3>
      <p>Min: {salaryData.min} {salaryData.currency}</p>
      <p>Max: {salaryData.max} {salaryData.currency}</p>
    </div>
  );
}