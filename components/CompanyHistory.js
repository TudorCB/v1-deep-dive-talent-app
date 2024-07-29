import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

export default function CompanyHistory({ location, skillset }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchData(`/api/talent/${location}/${skillset}/company_history`).then(setHistory);
  }, [location, skillset]);

  return (
    <div>
      <h3>Company History</h3>
      <ul>
        {history.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
}