import React from 'react';
import useFetchData from '../utils/useFetchData';

const StealthProjects = ({ companyId }) => {
  const { data: projects, loading, error } = useFetchData(`/api/companies/${companyId}/stealth_projects`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading stealth projects. Please try again later.</div>;

  return (
    <div>
      <h3>Stealth Projects</h3>
      <ul>
        {projects.projects.map((project, index) => (
          <li key={index}>
            Name: {project.name}, Description: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StealthProjects;