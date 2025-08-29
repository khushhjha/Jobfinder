import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import JobList from './components/JobList';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 Job Finder Pro</h1>
        <p>Discover your dream career opportunities worldwide</p>
        <div className="subtitle-accent">
          ✨ Powered by AI • 10,000+ Jobs • Real-time Results
        </div>
      </header>
      
      <main className="main-content">
        <SearchForm 
          setJobs={setJobs}
          setLoading={setLoading}
          setError={setError}
        />
        
        {error && (
          <div className="error-message">
            <p>⚠️ {error}</p>
          </div>
        )}
        
        <JobList jobs={jobs} loading={loading} />
      </main>
    </div>
  );
}

export default App;