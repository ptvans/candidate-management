import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, Users, Briefcase, HelpCircle, Play, Pause, Volume2, Maximize2, Plus, Minus } from 'lucide-react';
import './CandidateDetail.css';

const CandidateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('criteria');
  const [activeInterviewTab, setActiveInterviewTab] = useState(0);

  const candidate = {
    id: 1,
    name: 'Steve Applebaum',
    title: 'Frontend Software Engineer',
    yoe: '6 years of experience',
    skills: 'Typescript, React, Accessibility',
    company: 'TikTok',
    location: 'San Jose, CA',
    role: 'Frontend Software Engineer 4',
    client: 'Coinbase',
    jobLocation: 'Hybrid (San Francisco, CA)',
    jobType: 'FTE'
  };

  const experience = [
    {
      company: 'TikTok',
      title: 'Software Engineer (2-1 - Mid level)',
      location: 'San Jose, CA',
      period: 'January 2025 - Present'
    },
    {
      company: 'Atlassian',
      title: 'Software Engineer (P40 - Mid level)',
      location: 'Mountain View, CA',
      period: 'September 2023 - July 2024'
    },
    {
      company: "Domino's Pizza",
      title: 'Web Developer',
      location: 'Ann Arbor, MI',
      period: 'June 2021 - March 2022'
    },
    {
      company: 'IGT (International Game Technology)',
      title: 'Software Engineer',
      location: 'Las Vegas, NV',
      period: 'July 2019 - June 2021'
    }
  ];

  const technicalSkills = [
    'JavaScript', 'TypeScript', 'React', 'Redux', 'Lynx/React Native',
    'A/B Testing', 'Vue', 'jQuery', 'HTML5', 'CSS3'
  ];

  const uiSkills = [
    'Accessibility', 'Globalization & Localization', 'Reusable Components', 'Responsive Design'
  ];

  const interviewQuestions = [
    {
      id: 1,
      question: "What have you built recently? What problems did you encounter and how did you solve them? What was the outcome for the company?",
      summary: "20 word LLM summary of candidate answer",
      criteria: [
        { name: 'Concrete Technical Details', score: 'positive', timestamp: '02:01', reason: 'Reason reason reason' },
        { name: 'Problem Solving Approach', score: 'positive', timestamp: '03:15', reason: 'Reason reason reason' },
        { name: 'Business Impact', score: 'negative', timestamp: '04:30', reason: 'Reason reason reason' }
      ]
    },
    {
      id: 2,
      question: "Describe a challenging technical problem you solved. What was your approach and what did you learn from it?",
      summary: "20 word LLM summary of candidate answer for technical problem solving",
      criteria: [
        { name: 'Technical Complexity', score: 'positive', timestamp: '05:45', reason: 'Reason reason reason' },
        { name: 'Solution Quality', score: 'positive', timestamp: '07:20', reason: 'Reason reason reason' },
        { name: 'Learning & Growth', score: 'positive', timestamp: '08:15', reason: 'Reason reason reason' }
      ]
    },
    {
      id: 3,
      question: "How do you handle working with cross-functional teams? Can you give an example of a successful collaboration?",
      summary: "20 word LLM summary of candidate answer for teamwork and collaboration",
      criteria: [
        { name: 'Communication Skills', score: 'positive', timestamp: '10:30', reason: 'Reason reason reason' },
        { name: 'Team Collaboration', score: 'positive', timestamp: '12:05', reason: 'Reason reason reason' },
        { name: 'Conflict Resolution', score: 'negative', timestamp: '13:45', reason: 'Reason reason reason' }
      ]
    },
    {
      id: 4,
      question: "What's your experience with modern frontend frameworks? How do you stay updated with the latest technologies?",
      summary: "20 word LLM summary of candidate answer for technical knowledge and learning",
      criteria: [
        { name: 'Framework Knowledge', score: 'positive', timestamp: '15:20', reason: 'Reason reason reason' },
        { name: 'Learning Approach', score: 'positive', timestamp: '16:55', reason: 'Reason reason reason' },
        { name: 'Technology Trends', score: 'positive', timestamp: '18:10', reason: 'Reason reason reason' }
      ]
    }
  ];

  return (
    <div className="candidate-detail-container">
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

      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
          <h1>{candidate.name}</h1>
          <button className="move-next-stage-btn">Move to Next Stage</button>
        </div>

        {/* Interview Section */}
        <div className="interview-section">
          <div className="interview-tabs">
            <div 
              className={`tab ${activeInterviewTab === 0 ? 'active' : ''}`}
              onClick={() => setActiveInterviewTab(0)}
            >
              Interview (08/12/2025)
            </div>
            <div 
              className={`tab ${activeInterviewTab === 1 ? 'active' : ''}`}
              onClick={() => setActiveInterviewTab(1)}
            >
              Interview (07/28/2025)
            </div>
          </div>
          
          <div className="video-player">
            <div className="video-placeholder">
              <div className="video-controls">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: activeInterviewTab === 0 ? '37%' : '15%' }}></div>
                </div>
                <span className="time-display">
                  {activeInterviewTab === 0 ? '8:32 / 22:55' : '3:15 / 18:42'}
                </span>
                <Volume2 size={16} />
                <Maximize2 size={16} />
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="summary-section">
            <h3>Summary</h3>
            <div className="summary-content">
              {activeInterviewTab === 0 ? (
                "LLM paragraph text about how the candidate performed, paragraph text about how the candidate performed, paragraph text about the candidate, paragraph text about the candidate, paragraph text about the candidate."
              ) : (
                "Second interview summary: The candidate demonstrated strong technical skills and improved communication compared to the first round. Showed better problem-solving approach and more detailed examples of past work."
              )}
            </div>
          </div>

          {/* Strengths Section */}
          <div className="strengths-section">
            <h3>Strengths</h3>
            <div className="strengths-content">
              {activeInterviewTab === 0 ? (
                "The candidate showed excellent technical depth when discussing their recent projects. Demonstrated strong problem-solving skills and ability to explain complex concepts clearly. Good understanding of modern frontend development practices."
              ) : (
                "Significant improvement in communication skills compared to first interview. Provided more concrete examples and better articulated technical decisions. Showed strong learning ability and adaptability to new technologies."
              )}
            </div>
          </div>

          {/* Weaknesses Section */}
          <div className="weaknesses-section">
            <h3>Weaknesses</h3>
            <div className="weaknesses-content">
              {activeInterviewTab === 0 ? (
                "Could provide more specific metrics and business impact from previous projects. Sometimes struggled to connect technical solutions to business outcomes. Limited experience with large-scale distributed systems."
              ) : (
                "Still needs improvement in quantifying the business value of technical decisions. Could benefit from more experience with team leadership and mentoring junior developers. Some gaps in understanding of advanced architectural patterns."
              )}
            </div>
          </div>

          {/* Interview Questions */}
          <div className="questions-section">
            {interviewQuestions.map((q) => (
              <div key={q.id} className="question-item">
                <div className="question-header">
                  <h4>Q{q.id} '{q.question}'</h4>
                </div>
                <div className="question-summary">{q.summary}</div>
                
                <div className="criteria-tabs">
                  <button 
                    className={`tab-btn ${activeTab === 'criteria' ? 'active' : ''}`}
                    onClick={() => setActiveTab('criteria')}
                  >
                    Guide Criteria
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'strengths' ? 'active' : ''}`}
                    onClick={() => setActiveTab('strengths')}
                  >
                    Strengths & Weaknesses
                  </button>
                </div>

                <div className="criteria-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Criteria</th>
                        <th>Score</th>
                        <th>Timestamp</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {q.criteria.map((criterion, index) => (
                        <tr key={index}>
                          <td>{criterion.name}</td>
                          <td>
                            {criterion.score === 'positive' ? (
                              <Plus size={16} className="positive" />
                            ) : (
                              <Minus size={16} className="negative" />
                            )}
                          </td>
                          <td>{criterion.timestamp}</td>
                          <td>{criterion.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Profile Container */}
        <div className="profile-container">
          <div className="profile-section">
            <h3>Profile</h3>
            <div className="profile-info">
              <p><strong>Title:</strong> {candidate.title}</p>
              <p><strong>YOE:</strong> {candidate.yoe}</p>
              <p><strong>Skills:</strong> {candidate.skills}</p>
              <div className="profile-links">
                <a href="#" className="link">Hide Resume Summary</a>
                <a href="#" className="link">Open Full Resume</a>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            <h4>UI Development</h4>
            <div className="skills-grid">
              {uiSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h4>{exp.company}</h4>
                <p className="exp-title">{exp.title}</p>
                <p className="exp-location">{exp.location}</p>
                <p className="exp-period">{exp.period}</p>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>University of Michigan</h4>
              <p>Bachelor of Arts, Political Science</p>
              <p>Ann Arbor, MI | April 2010 - June 2015</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="sidebar-separator"></div>

        {/* Job Container */}
        <div className="job-container">
          <div className="job-section">
            <h3>Job</h3>
            <div className="job-info">
              <p><strong>Role:</strong> {candidate.role}</p>
              <p><strong>Client:</strong> {candidate.client}</p>
              <p><strong>Location:</strong> {candidate.jobLocation}</p>
              <p><strong>Type:</strong> {candidate.jobType}</p>
              <a href="#" className="link">View Role</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail; 