import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home, Users, Briefcase, HelpCircle, Play, Pause, Volume2, Maximize2, Plus, Minus, ChevronLeft } from 'lucide-react';
import './CandidateDetail.css';

const CandidateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('criteria');
  const [activeInterviewTab, setActiveInterviewTab] = useState(0);
  const [showResumeSummary, setShowResumeSummary] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const handleBackToCandidateList = () => {
    navigate('/');
  };

  const toggleQuestionExpansion = (questionId: number) => {
    setExpandedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const candidate = {
    id: parseInt(id || '1'),
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
      shortName: "Recent Project & Problem-Solving",
      question: "What have you built recently? What problems did you encounter and how did you solve them? What was the outcome for the company?",
      response: "The candidate discussed building a React dashboard for real-time data visualization. They encountered performance issues with large datasets and solved them by implementing virtualization and WebSocket connections. The outcome was improved user experience and faster data loading.",
      summary: "20 word LLM summary of candidate answer",
      criteria: [
        { name: 'Concrete Technical Details', score: 'positive', timestamp: '02:01', reason: 'Reason reason reason' },
        { name: 'Problem Solving Approach', score: 'positive', timestamp: '03:15', reason: 'Reason reason reason' },
        { name: 'Business Impact', score: 'negative', timestamp: '04:30', reason: 'Reason reason reason' }
      ],
      strengths: "The candidate demonstrated excellent technical depth when discussing their recent React dashboard project. They provided specific details about implementing real-time data visualization using D3.js and WebSocket connections. Their systematic approach to debugging performance issues showed strong problem-solving methodology. They clearly articulated the technical challenges they faced with state management in complex component trees and how they resolved them using Redux Toolkit.",
      weaknesses: "While the candidate showed good technical knowledge, they struggled to quantify the business impact of their work. They mentioned the dashboard 'improved user experience' but couldn't provide specific metrics like user engagement increases or time savings. The candidate also seemed uncertain about how their technical decisions aligned with broader product strategy and had limited awareness of the project's ROI."
    },
    {
      id: 2,
      shortName: "Performance & Tradeoffs",
      question: "Describe a challenging technical problem you solved. What was your approach and what did you learn from it?",
      response: "The candidate described solving a performance bottleneck in a React application by implementing code splitting, lazy loading, and optimizing re-renders. They used React DevTools Profiler to identify issues and learned the importance of performance monitoring.",
      summary: "20 word LLM summary of candidate answer for technical problem solving",
      criteria: [
        { name: 'Technical Complexity', score: 'positive', timestamp: '05:45', reason: 'Reason reason reason' },
        { name: 'Solution Quality', score: 'positive', timestamp: '07:20', reason: 'Reason reason reason' },
        { name: 'Learning & Growth', score: 'positive', timestamp: '08:15', reason: 'Reason reason reason' }
      ],
      strengths: "Excellent problem-solving approach when tackling the complex performance optimization challenge. The candidate showed strong analytical thinking by systematically profiling the application, identifying bottlenecks, and implementing targeted solutions. Their use of React.memo, useMemo, and lazy loading demonstrated deep understanding of performance optimization techniques. They also showed good learning agility by researching and implementing Web Workers for heavy computational tasks.",
      weaknesses: "The candidate took longer than expected to identify the root cause of the performance issues, suggesting they could improve their debugging methodology. They also admitted to not considering the solution's impact on code maintainability initially, which led to technical debt that needed addressing later. Limited experience with performance monitoring tools beyond basic browser dev tools was evident."
    },
    {
      id: 3,
      shortName: "Cross-Functional Collaboration",
      question: "How do you handle working with cross-functional teams? Can you give an example of a successful collaboration?",
      response: "The candidate shared an example of collaborating with backend engineers and designers on an API integration project. They emphasized clear communication, regular sync meetings, and creating documentation that non-technical stakeholders could understand.",
      summary: "20 word LLM summary of candidate answer for teamwork and collaboration",
      criteria: [
        { name: 'Communication Skills', score: 'positive', timestamp: '10:30', reason: 'Reason reason reason' },
        { name: 'Team Collaboration', score: 'positive', timestamp: '12:05', reason: 'Reason reason reason' },
        { name: 'Conflict Resolution', score: 'negative', timestamp: '13:45', reason: 'Reason reason reason' }
      ],
      strengths: "Strong collaboration skills demonstrated through the successful API integration project with backend and design teams. The candidate showed excellent communication by creating technical documentation that non-technical stakeholders could understand. They took initiative in setting up regular sync meetings and used visual tools like Figma to align with designers. Good empathy and understanding of different team perspectives was evident.",
      weaknesses: "The candidate struggled with conflict resolution when disagreements arose about API design decisions. They admitted to avoiding direct confrontation initially, which led to delayed decision-making. Limited experience in leading cross-functional initiatives was apparent. They also showed some difficulty in translating business requirements into technical specifications without multiple clarification rounds."
    },
    {
      id: 4,
      shortName: "Frontend Framework Experience",
      question: "What's your experience with modern frontend frameworks? How do you stay updated with the latest technologies?",
      response: "The candidate has extensive experience with React, including hooks and modern patterns. They stay updated through tech blogs, conferences, open source contributions, and building personal projects to test new technologies.",
      summary: "20 word LLM summary of candidate answer for technical knowledge and learning",
      criteria: [
        { name: 'Framework Knowledge', score: 'positive', timestamp: '15:20', reason: 'Reason reason reason' },
        { name: 'Learning Approach', score: 'positive', timestamp: '16:55', reason: 'Reason reason reason' },
        { name: 'Technology Trends', score: 'positive', timestamp: '18:10', reason: 'Reason reason reason' }
      ],
      strengths: "Comprehensive knowledge of React ecosystem including hooks, context API, and modern patterns. Good understanding of Next.js for SSR and static generation. The candidate actively follows industry trends through tech blogs, conferences, and contributes to open source projects. Their learning approach is systematic - they mentioned building personal projects to test new technologies before implementing them at work. Strong awareness of performance implications of different framework choices.",
      weaknesses: "Limited hands-on experience with other major frameworks like Vue or Angular, which could limit adaptability in diverse tech environments. The candidate mentioned being 'sometimes overwhelmed' by the pace of JavaScript ecosystem changes, suggesting they might struggle with rapid technology adoption. They also showed gaps in understanding newer technologies like Server Components and their practical applications in production environments."
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
          <div className="header-left">
            <button className="back-button" onClick={handleBackToCandidateList}>
              <ChevronLeft size={20} />
            </button>
            <h1>{candidate.name}</h1>
          </div>
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

          {/* Overall Recommendation Card */}
          <div className="overall-recommendation-card">
            <div className="recommendation-header">Overall Recommendation</div>
            <div className="recommendation-status">
              <div className="status-indicator">
                <div className="status-bars">
                  <div className="status-bar"></div>
                  <div className="status-bar"></div>
                  <div className="status-bar"></div>
                  <div className="status-bar"></div>
                </div>
                <span className="status-text">Strong Yes</span>
              </div>
            </div>
            <div className="role-recommendation">
              Ready for senior or staff-level frontend role.
            </div>
            <div className="recommendation-description">
              Joe Kim consistently demonstrates senior-level reasoning, product-minded development practices, and deep architectural insight across multiple domains:
            </div>
            <div className="domain-checklist">
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Full-stack leadership</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>MVP & rapid prototyping</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>CI/CD & DevOps collaboration</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Offline-first + multi-client architecture</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✓</span>
                <span>Deep product intuition and user-centered thinking</span>
              </div>
            </div>

            <div className="strengths-content">
              {activeInterviewTab === 0 ? (
                "The candidate showed excellent technical depth when discussing their recent projects. Good understanding of modern frontend development practices."
              ) : (
                "Significant improvement in communication skills compared to first interview. Provided more concrete examples and better articulated technical decisions. Showed strong learning ability and adaptability to new technologies."
              )}
            </div>

            <div className="weaknesses-content">
              {activeInterviewTab === 0 ? (
                "Could provide more specific metrics and business impact from previous projects. Sometimes struggled to connect technical solutions to business outcomes."
              ) : (
                "Still needs improvement in quantifying the business value of technical decisions. Could benefit from more experience with team leadership and mentoring junior developers. Some gaps in understanding of advanced architectural patterns."
              )}
            </div>
          </div>

        

          {/* Interview Questions */}
          <div className="questions-section">
            {/* Criteria Tabs - Moved outside the questions loop */}
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

            {interviewQuestions.map((q) => (
              <div key={q.id} className="question-item">
                {/* Question Header - Always Visible */}
                <div className="question-header-collapsed" onClick={() => toggleQuestionExpansion(q.id)}>
                  <div className="question-header-left">
                    <div className="recommendation-indicator">
                      <div className="status-bars-small">
                        <div className="status-bar-small"></div>
                        <div className="status-bar-small"></div>
                        <div className="status-bar-small"></div>
                        <div className="status-bar-small"></div>
                      </div>
                      <span className="recommendation-text">Yes</span>
                    </div>
                    <div className="question-info">
                      <span className="question-number">Q{q.id}</span>
                      <span className="question-title">{q.shortName.split('?')[0]}</span>
                    </div>
                  </div>
                  <div className="question-header-right">
                    <ChevronLeft 
                      size={20} 
                      className={`expand-icon ${expandedQuestions.includes(q.id) ? 'expanded' : ''}`}
                    />
                  </div>
                </div>

                {/* Question Content - Expandable */}
                {expandedQuestions.includes(q.id) && (
                  <div className="question-content-expanded">
                    <div className="question-full-text">{q.question}</div>
                                        
                    {activeTab === 'criteria' ? (
                      <div className="guide-criteria-content">
                        <div className="response-paragraph">{q.response}</div>
                        <div className="summary-paragraph">{q.summary}</div>
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
                    ) : (
                      <div className="strengths-weaknesses-content">
                        <div className="strengths-section">
                          <h4>Strengths</h4>
                          <div className="strengths-text">
                            {q.strengths}
                          </div>
                        </div>
                        <div className="weaknesses-section">
                          <h4>Weaknesses</h4>
                          <div className="weaknesses-text">
                            {q.weaknesses}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
                <button className="link">Open Full Resume</button>
                <button 
                  className="link" 
                  onClick={() => setShowResumeSummary(!showResumeSummary)}
                >
                  {showResumeSummary ? 'Hide Resume Summary' : 'Show Resume Summary'}
                </button>
              </div>
            </div>
          </div>

          {showResumeSummary && (
            <>
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
            </>
          )}
        </div>

        {/* Job Container */}
        <div className="job-container">
          <div className="job-section">
            <h3>Job</h3>
            <div className="job-info">
              <p><strong>Role:</strong> {candidate.role}</p>
              <p><strong>Client:</strong> {candidate.client}</p>
              <p><strong>Location:</strong> {candidate.jobLocation}</p>
              <p><strong>Type:</strong> {candidate.jobType}</p>
              <button className="link">View Role</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail; 