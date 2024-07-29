import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

export default function TopSchools({ location, skillset }) {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchData(`/api/talent/${location}/${skillset}/top_schools`).then(setSchools);
  }, [location, skillset]);

  return (
    <div>
      <h3>Top Schools</h3>
      <ul>
        {schools.map((school, index) => (
          <li key={index}>{school}</li>
        ))}
      </ul>
    </div>
  );
}