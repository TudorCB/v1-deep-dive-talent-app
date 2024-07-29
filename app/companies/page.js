'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyMap from '../../components/CompanyMap';
import CompanyFilters from '../../components/CompanyFilters';
import CompanyVisualizations from '../../components/CompanyVisualizations';

export default function CompaniesPage() {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async (companyId) => {
      try {
        const response = await axios.get(`/api/companies/${companyId}`);
        setCompanyData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error('Error fetching company data:', error);
        console.error('Full error:', error.message, error.stack);
      }
    };

    fetchCompanyData('1'); // Replace '1' with a dynamic company ID if needed
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Company Insights</h1>
      <CompanyFilters />
      <CompanyMap companyData={companyData} />
      <CompanyVisualizations companyData={companyData} />
    </div>
  );
}