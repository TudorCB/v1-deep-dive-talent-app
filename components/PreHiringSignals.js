import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PreHiringSignals({ location, skillset }) {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    axios.get(`/api/talent/${location}/${skillset}/pre_hiring_signals`)
      .then(response => setSignals(response.data.data))
      .catch(error => {
        console.error('Error fetching pre-hiring signals:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, [location, skillset]);

  return (
    <div>
      <h3>Pre-Hiring Signals</h3>
      <ul>
        {signals.map((signal, index) => (
          <li key={index}>{signal}</li>
        ))}
      </ul>
    </div>
  );
}