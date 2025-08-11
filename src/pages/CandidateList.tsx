import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Briefcase, HelpCircle, Mail, Linkedin, X, Check, X as XIcon, Minus } from 'lucide-react';
import './CandidateList.css';

const CandidateList: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState('Status 1');
  const [selectedCandidate, setSelectedCandidate] = useState(2); // Steve Applebaum is selected by default

  const candidates = [
    {
      id: 1,
      name: 'Gazenfar Syed',
      title: 'Systems Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      rating: 'Yes',
      ratingType: 'positive',
      comp: '$220-250',
      call: 'Jan 12',
      score: '3.5',
      clientStatus: 'Accepted',
      yoe: '5 years of experience',
      skills: 'Python, AWS, Docker',
      overallRating: 'Yes',
      questionRatings: [
        { question: 'Q1', rating: 'Yes', type: 'positive' },
        { question: 'Q2', rating: 'No', type: 'negative' },
        { question: 'Q3', rating: 'Strong Yes', type: 'positive' },
        { question: 'Q4', rating: 'Insuff.', type: 'neutral' }
      ],
      lastJob: {
        company: 'Tech Corp',
        title: 'Senior Systems Engineer',
        location: 'San Francisco, CA',
        period: 'March 2023 - Present',
        description: 'Led infrastructure automation and cloud migration initiatives.'
      }
    },
    {
      id: 2,
      name: 'Steve Applebaum',
      title: 'Systems Engineer',
      company: 'TikTok',
      location: 'San Jose, CA',
      rating: 'Yes',
      ratingType: 'positive',
      comp: '$180-220',
      call: 'Jan 15',
      score: '4.2',
      clientStatus: 'Accepted',
      yoe: '6 years of experience',
      skills: 'Typescript, React, Accessibility',
      overallRating: 'Yes',
      questionRatings: [
        { question: 'Q1', rating: 'Yes', type: 'positive' },
        { question: 'Q2', rating: 'No', type: 'negative' },
        { question: 'Q3', rating: 'Strong Yes', type: 'positive' },
        { question: 'Q4', rating: 'Insuff.', type: 'neutral' }
      ],
      lastJob: {
        company: 'TikTok',
        title: 'Software Engineer (2-1 - Mid level)',
        location: 'San Jose, CA',
        period: 'January 2025 - Present',
        description: 'Build frontend platforms for content moderation, AI-driven review tools, and creator experience enhancement.'
      }
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      title: 'Systems Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      rating: 'No',
      ratingType: 'negative',
      comp: '$200-240',
      call: 'Jan 10',
      score: '2.8',
      clientStatus: 'Accepted',
      yoe: '4 years of experience',
      skills: 'Java, Kubernetes, Microservices',
      overallRating: 'No',
      questionRatings: [
        { question: 'Q1', rating: 'No', type: 'negative' },
        { question: 'Q2', rating: 'Yes', type: 'positive' },
        { question: 'Q3', rating: 'No', type: 'negative' },
        { question: 'Q4', rating: 'Yes', type: 'positive' }
      ],
      lastJob: {
        company: 'Google',
        title: 'Software Engineer',
        location: 'Mountain View, CA',
        period: 'June 2022 - Present',
        description: 'Developed scalable backend services and infrastructure solutions.'
      }
    },
    {
      id: 4,
      name: 'Michael Chen',
      title: 'Systems Engineer',
      company: 'Meta',
      location: 'Menlo Park, CA',
      rating: 'Not Rated',
      ratingType: 'neutral',
      comp: '$190-230',
      call: 'Jan 18',
      score: '-',
      clientStatus: 'Accepted',
      yoe: '3 years of experience',
      skills: 'React, Node.js, MongoDB',
      overallRating: 'Not Rated',
      questionRatings: [
        { question: 'Q1', rating: 'Not Rated', type: 'neutral' },
        { question: 'Q2', rating: 'Not Rated', type: 'neutral' },
        { question: 'Q3', rating: 'Not Rated', type: 'neutral' },
        { question: 'Q4', rating: 'Not Rated', type: 'neutral' }
      ],
      lastJob: {
        company: 'Meta',
        title: 'Frontend Engineer',
        location: 'Menlo Park, CA',
        period: 'September 2023 - Present',
        description: 'Building user interfaces and interactive features for social media platforms.'
      }
    }
  ];

  const selectedCandidateData = candidates.find(c => c.id === selectedCandidate);

  const getRatingIcon = (rating: string, type: string) => {
    if (type === 'positive') {
      return <Check size={16} className="rating-icon positive" />;
    } else if (type === 'negative') {
      return <XIcon size={16} className="rating-icon negative" />;
    } else {
      return <Minus size={16} className="rating-icon neutral" />;
    }
  };

  const getRatingColor = (type: string) => {
    switch (type) {
      case 'positive': return '#27ae60';
      case 'negative': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="candidate-list-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="nav-item">
            <Home size={20} />
            <span>Home</span>
          </div>
          <div className="nav-item active">
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
          <div className="user-profile-sidebar">
            <div className="user-avatar">BE</div>
            <span>Bork Effelblatt</span>
          </div>
        </div>
      </div>

      {/* Left Panel: Candidate List */}
      <div className="left-panel">
        <div className="list-header">
          <h1>Candidates 15</h1>
        </div>
        
        <div className="status-filter">
          <button 
            className={`status-tab ${activeStatus === 'Status 1' ? 'active' : ''}`}
            onClick={() => setActiveStatus('Status 1')}
          >
            Status 1
          </button>
          <button 
            className={`status-tab ${activeStatus === 'Status 2' ? 'active' : ''}`}
            onClick={() => setActiveStatus('Status 2')}
          >
            Status 2
          </button>
          <button 
            className={`status-tab ${activeStatus === 'Status 3' ? 'active' : ''}`}
            onClick={() => setActiveStatus('Status 3')}
          >
            Status 3
          </button>
          <button 
            className={`status-tab ${activeStatus === 'All' ? 'active' : ''}`}
            onClick={() => setActiveStatus('All')}
          >
            All
          </button>
        </div>

        <div className="candidates-table">
          <table>
            <thead>
              <tr>
                <th>Rating</th>
                <th>Name</th>
                <th>Role</th>
                <th>Comp</th>
                <th>Call</th>
                <th>Score</th>
                <th>Client Status</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr 
                  key={candidate.id} 
                  className={`candidate-row ${selectedCandidate === candidate.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCandidate(candidate.id)}
                >
                  <td>
                    <div className="rating-cell">
                      {getRatingIcon(candidate.rating, candidate.ratingType)}
                      <span>{candidate.rating}</span>
                    </div>
                  </td>
                  <td>
                    <div className="name-cell">
                      <Link to={`/candidate/${candidate.id}`} className="candidate-name-link">
                        <span className="candidate-name">{candidate.name}</span>
                      </Link>
                      <div className="name-icons">
                        <Mail size={12} />
                        <Linkedin size={12} />
                      </div>
                    </div>
                  </td>
                  <td>{candidate.title}</td>
                  <td>{candidate.comp}</td>
                  <td>{candidate.call}</td>
                  <td>{candidate.score}</td>
                  <td>
                    <div className="client-status">
                      <div className="status-dot"></div>
                      <span>{candidate.clientStatus}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Panel: Candidate Detail */}
      {selectedCandidateData && (
        <div className="right-panel">
          <div className="detail-header">
            <Link to={`/candidate/${selectedCandidateData.id}`} className="candidate-name-link">
              <h2>{selectedCandidateData.name}</h2>
            </Link>
            <button className="close-button">
              <X size={20} />
            </button>
          </div>

          <div className="basic-info">
            <p><strong>Title:</strong> {selectedCandidateData.title}</p>
            <p><strong>YOE:</strong> {selectedCandidateData.yoe}</p>
            <p><strong>Skills:</strong> {selectedCandidateData.skills}</p>
          </div>

          <div className="resume-summary">
            <div className="resume-buttons">
              <button className="resume-btn">Hide Resume Summary</button>
              <button className="resume-btn">Open Full Resume</button>
            </div>
            
            <div className="technical-skills">
              <h3>Technical Skills</h3>
              <div className="skills-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Node.js</span>
              </div>
              <h4>UI Development</h4>
              <div className="skills-tags">
                <span className="skill-tag">Accessibility</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Component Design</span>
              </div>
            </div>

            <div className="last-job">
              <h3>Last Job</h3>
              <div className="job-details">
                <h4>{selectedCandidateData.lastJob.company}</h4>
                <p className="job-title">{selectedCandidateData.lastJob.title}</p>
                <p className="job-location">{selectedCandidateData.lastJob.location}</p>
                <p className="job-period">{selectedCandidateData.lastJob.period}</p>
                <p className="job-description">{selectedCandidateData.lastJob.description}</p>
              </div>
            </div>
          </div>

          <div className="overall-rating">
            <h3>Overall {selectedCandidateData.overallRating}</h3>
            <div className="rating-bar">
              <div 
                className="rating-fill" 
                style={{ 
                  width: selectedCandidateData.overallRating === 'Yes' ? '100%' : 
                         selectedCandidateData.overallRating === 'No' ? '0%' : '50%',
                  backgroundColor: getRatingColor(selectedCandidateData.overallRating === 'Yes' ? 'positive' : 
                                                selectedCandidateData.overallRating === 'No' ? 'negative' : 'neutral')
                }}
              ></div>
            </div>
          </div>

          <div className="question-ratings">
            <h3>Question Ratings</h3>
            <div className="question-bars">
              {selectedCandidateData.questionRatings.map((q, index) => (
                <div key={index} className="question-bar">
                  <span className="question-label">{q.question}</span>
                  <div className="bar-container">
                    <div 
                      className="bar-fill"
                      style={{ 
                        width: q.type === 'positive' ? '100%' : 
                               q.type === 'negative' ? '0%' : '50%',
                        backgroundColor: getRatingColor(q.type)
                      }}
                    ></div>
                  </div>
                  <span className="question-rating">{q.rating}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="summary-section">
            <div className="summary-icon">📝</div>
            <p className="summary-text">
              LLM paragraph text about how the candidate performed, paragraph text about how the candidate, 
              paragraph text about the candidate, paragraph text about the candidate
            </p>
          </div>

          <div className="question-details">
            <div className="question-item">
              <div className="question-header">
                <div className="question-rating-display">
                  <div className="rating-bar-small">
                    <div 
                      className="bar-fill-small"
                      style={{ 
                        width: '100%',
                        backgroundColor: getRatingColor('positive')
                      }}
                    ></div>
                  </div>
                  <span>Q1 Yes</span>
                </div>
              </div>
              <div className="question-text">
                What have you built recently? What problems did you encounter and how did you solve them? 
                What was the outcome for the company?
              </div>
              <div className="answer-summary">
                <div className="summary-icon-small">📝</div>
                <span>{20} word LLM summary of candidate answer {20} word LLM summary of candidate answer</span>
                <button className="edit-icon">✏️</button>
              </div>
              <div className="criteria-tabs">
                <button className="tab-btn active">Guide Criteria</button>
                <button className="tab-btn">Strengths & Weaknesses</button>
              </div>
              <div className="criteria-table">
                <table>
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Answer</th>
                      <th>Score (Reason)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Concrete Technical Details</td>
                      <td>02:01 ... response text...</td>
                      <td>
                        <div className="score-cell">
                          {getRatingIcon('Yes', 'positive')}
                          Reason reason reason
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Problem Solving Approach</td>
                      <td>03:15 ... response text...</td>
                      <td>
                        <div className="score-cell">
                          {getRatingIcon('Yes', 'positive')}
                          Reason reason reason
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Business Impact</td>
                      <td>04:30 ... response text...</td>
                      <td>
                        <div className="score-cell">
                          {getRatingIcon('No', 'negative')}
                          Reason reason reason
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateList; 