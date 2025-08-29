import React from 'react';
import JobCard from './JobCard';
import './JobList.css';

const JobList = ({ jobs, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Searching for jobs...</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="no-jobs">
        <p>🔍 Enter keywords above to search for jobs</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      <div className="results-header">
        <h2>Found {jobs.length} jobs</h2>
      </div>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <JobCard key={job.id || index} job={job} index={index} />
        ))}
      </div>
    </div>
  );
};

export default JobList;