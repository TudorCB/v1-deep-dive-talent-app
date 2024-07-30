'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyMap from '../../components/CompanyMap';
import CompanyFilters from '../../components/CompanyFilters';
import CompanyVisualizations from '../../components/CompanyVisualizations';
import EmployeeSentiment from '../../components/EmployeeSentiment';
import CompanyValues from '../../components/CompanyValues';
import FundingRounds from '../../components/FundingRounds';
import InvestorNetwork from '../../components/InvestorNetwork';
import ProductLaunches from '../../components/ProductLaunches';
import StealthProjects from '../../components/StealthProjects';
import ProductSentiment from '../../components/ProductSentiment';

export default function CompaniesPage({ params }) {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { company_id } = params;

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

    fetchCompanyData(company_id);
  }, [company_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Company Insights</h1>
      <CompanyFilters />
      <CompanyMap companyData={companyData} />
      <CompanyVisualizations companyData={companyData} />
      <EmployeeSentiment companyId={company_id} />
      <CompanyValues companyId={company_id} />
      <FundingRounds companyId={company_id} />
      <InvestorNetwork companyId={company_id} />
      <ProductLaunches companyId={company_id} />
      <StealthProjects companyId={company_id} />
      <ProductSentiment companyId={company_id} />
    </div>
  );
}