'use client';
import { useEffect, useState } from 'react';
import TalentMap from '../../components/TalentMap';
import TalentFilters from '../../components/TalentFilters';
import TalentVisualizations from '../../components/TalentVisualizations';
import SalaryRanges from '../../components/SalaryRanges';
import CostAdjustedSalary from '../../components/CostAdjustedSalary';
import TotalCompensation from '../../components/TotalCompensation';
import TopSchools from '../../components/TopSchools';
import CompanyHistory from '../../components/CompanyHistory';
import PreHiringSignals from '../../components/PreHiringSignals';
import FlightRisk from '../../components/FlightRisk';

export default function TalentPage() {
  const [talentData, setTalentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = 'SanFrancisco'; // Example location
  const skillset = 'React'; // Example skillset

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      console.error('Full error:', error.message, error.stack);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [adjacentSkillsResponse, remotePropensityResponse, diversityInsightsResponse] = await Promise.all([
          fetchData('/api/talent/SanFrancisco/React/adjacent_skills'),
          fetchData('/api/talent/SanFrancisco/React/remote_propensity'),
          fetchData('/api/talent/SanFrancisco/React/diversity_insights')
        ]);

        setTalentData({
          adjacentSkills: adjacentSkillsResponse.data,
          remotePropensity: remotePropensityResponse.data,
          diversityInsights: diversityInsightsResponse.data
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Talent Insights</h1>
      <TalentFilters />
      <TalentMap talentData={talentData} />
      <TalentVisualizations talentData={talentData} />
      <SalaryRanges location={location} skillset={skillset} />
      <CostAdjustedSalary location={location} skillset={skillset} />
      <TotalCompensation location={location} skillset={skillset} />
      <TopSchools location={location} skillset={skillset} />
      <CompanyHistory location={location} skillset={skillset} />
      <PreHiringSignals location={location} skillset={skillset} />
      <FlightRisk location={location} skillset={skillset} />
    </div>
  );
}