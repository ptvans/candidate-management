import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Briefcase, HelpCircle } from 'lucide-react';
import './CandidateList.css';

const CandidateList: React.FC = () => {
  const candidates = [
    {
      id: 1,
      name: 'Steve Applebaum',
      title: 'Frontend Software Engineer',
      company: 'TikTok',
      location: 'San Jose, CA',
      status: 'In Progress',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Senior React Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      status: 'Completed',
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'Full Stack Engineer',
      company: 'Meta',
      location: 'Menlo Park, CA',
      status: 'Pending',
      lastUpdated: '3 days ago'
    }
  ];

  return (
    <div className="candidate-list-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="nav-item active">
            <Home size={20} />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Users size={20} />
            <span>Candidates</span>
          </div>
          <div className="nav-item">
            <Briefcase size={20} />
            <span>Roles</span>
          </div>
          <div className="nav-item help">
            <HelpCircle size={20} />
            <span>Help</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Candidates</h1>
          <div className="user-profile">
            <div className="user-avatar">BE</div>
            <span>Bork Effelblatt</span>
          </div>
        </div>

        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <Link to={`/candidate/${candidate.id}`} key={candidate.id} className="candidate-card">
              <div className="candidate-avatar">
                {candidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="candidate-info">
                <h3>{candidate.name}</h3>
                <p className="title">{candidate.title}</p>
                <p className="company">{candidate.company}</p>
                <p className="location">{candidate.location}</p>
                <div className="status-badge">
                  <span className={`status ${candidate.status.toLowerCase().replace(' ', '-')}`}>
                    {candidate.status}
                  </span>
                </div>
                <p className="last-updated">{candidate.lastUpdated}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateList; 