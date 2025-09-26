import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ setJobs, setLoading, setError }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!keyword.trim()) {
      setError('Please enter a job keyword');
      return;
    }

    setLoading(true);
    setError('');
    setJobs([]);

    // Simulate loading delay for better UX
    setTimeout(() => {
      // Generate mock jobs based on search terms
      const mockJobs = [
        {
          id: '1',
          title: `${keyword} Developer`,
          company: { display_name: 'TechCorp Solutions' },
          location: { display_name: location || 'Remote' },
          description: `We're seeking a talented ${keyword} developer to join our innovative team. Work on cutting-edge projects with modern technologies and competitive benefits.`,
          redirect_url: 'https://example.com/job1',
          salary_min: 65000,
          salary_max: 95000
        },
        {
          id: '2',
          title: `Senior ${keyword} Engineer`,
          company: { display_name: 'Innovation Labs Inc' },
          location: { display_name: location || 'San Francisco, CA' },
          description: `Lead ${keyword} development projects in a fast-paced startup environment. Excellent growth opportunities and equity package available.`,
          redirect_url: 'https://example.com/job2',
          salary_min: 85000,
          salary_max: 130000
        },
        {
          id: '3',
          title: `${keyword} Specialist`,
          company: { display_name: 'Global Tech Partners' },
          location: { display_name: location || 'New York, NY' },
          description: `Join our team as a ${keyword} specialist and work with Fortune 500 clients. Remote-friendly culture with comprehensive benefits.`,
          redirect_url: 'https://example.com/job3',
          salary_min: 70000,
          salary_max: 110000
        },
        {
          id: '4',
          title: `Junior ${keyword} Developer`,
          company: { display_name: 'StartupHub' },
          location: { display_name: location || 'Austin, TX' },
          description: `Perfect entry-level position for ${keyword} enthusiasts. Mentorship program and learning opportunities in a supportive environment.`,
          redirect_url: 'https://example.com/job4',
          salary_min: 50000,
          salary_max: 75000
        },
        {
          id: '5',
          title: `${keyword} Team Lead`,
          company: { display_name: 'Enterprise Solutions' },
          location: { display_name: location || 'Seattle, WA' },
          description: `Lead a team of ${keyword} professionals in delivering enterprise-grade solutions. Strong leadership and technical skills required.`,
          redirect_url: 'https://example.com/job5',
          salary_min: 95000,
          salary_max: 150000
        }
      ];

      setJobs(mockJobs);
      setLoading(false);
    }, 1500);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Job title, keywords..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="City, state..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
      </div>
      
      <button type="submit" className="search-button">
        🔍 Search Jobs
      </button>
    </form>
  );
};

export default SearchForm;