'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function CompanyFilters() {
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/api/companies/filter?location=${location}&industry=${industry}`);
      console.log('Filter results:', response.data);
      // Handle the response data as needed, e.g., update state to reflect new filters
    } catch (error) {
      console.error('Error applying filters:', error);
      console.error('Full error:', error.message, error.stack);
    }
  };

  return (
    <div>
      <h2>Company Filters</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Industry:
          <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
}