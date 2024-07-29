'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function TalentFilters() {
  const [location, setLocation] = useState('');
  const [skillset, setSkillset] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api/talent/${location}/${skillset}`);
      console.log('Filter results:', response.data);
      // Handle the response data as needed, e.g., update state to reflect new filters
    } catch (error) {
      console.error('Error applying filters:', error);
      console.error('Full error:', error.message, error.stack);
    }
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Skillset:
          <input type="text" value={skillset} onChange={(e) => setSkillset(e.target.value)} />
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
}