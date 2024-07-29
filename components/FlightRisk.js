import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FlightRisk({ location, skillset }) {
  const [risk, setRisk] = useState('');

  useEffect(() => {
    axios.get(`/api/talent/${location}/${skillset}/flight_risk`)
      .then(response => setRisk(response.data.data))
      .catch(error => {
        console.error('Error fetching flight risk:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, [location, skillset]);

  return (
    <div>
      <h3>Flight Risk Prediction</h3>
      <p>{risk}</p>
    </div>
  );
}