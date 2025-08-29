import React from 'react';
import './JobCard.css';

const JobCard = ({ job, index }) => {
  const formatSalary = (min, max) => {
    if (!min && !max) return 'Competitive Salary';
    if (min && max) return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    if (min) return `From $${min.toLocaleString()}`;
    return `Up to $${max.toLocaleString()}`;
  };

  const truncateText = (text, maxLength = 120) => {
    if (!text) return 'Exciting opportunity with growth potential and competitive benefits package.';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const getJobType = () => {
    const types = ['Full-time', 'Remote', 'Hybrid', 'Contract'];
    return types[index % types.length];
  };

  const getExperience = () => {
    const levels = ['Entry Level', 'Mid Level', 'Senior Level', 'Lead Level', 'Executive'];
    return levels[index % levels.length];
  };

  return (
    <div 
      className="job-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="job-header">
        <h3 className="job-title">{job.title}</h3>
        <div className="company-info">
          <span className="company-name">
            🏢 {job.company?.display_name || 'Company Name'}
          </span>
          <span className="job-location">
            📍 {job.location?.display_name || 'Location'}
          </span>
        </div>
      </div>
      
      <div className="job-body">
        <div className="job-stats">
          <span className="job-type">📋 {getJobType()}</span>
          <span className="job-experience">⭐ {getExperience()}</span>
        </div>
        
        <p className="job-description">
          {truncateText(job.description)}
        </p>
        
        <div className="job-salary">
          💰 {formatSalary(job.salary_min, job.salary_max)}
        </div>
      </div>
      
      <div className="job-footer">
        <button 
          className="apply-button"
          onClick={() => window.open(job.redirect_url || '#', '_blank')}
        >
          Apply Now →
        </button>
      </div>
    </div>
  );
};

export default JobCard;