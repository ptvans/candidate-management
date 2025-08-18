import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Briefcase, HelpCircle, FileText, Bot, User, Send, ChevronRight } from 'lucide-react';
import './Guides.css';

interface ChatMessage {
  id: string;
  type: 'ai' | 'user';
  content: string;
  isQuestion?: boolean;
  options?: string[];
  userResponse?: string;
  isHighlighted?: boolean;
}

interface DocumentSection {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
}

const Guides: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [evaluationCriteria, setEvaluationCriteria] = useState<string[]>([]);
  
  const [documentSections, setDocumentSections] = useState<DocumentSection[]>([
    { id: '1', title: 'Evaluation Criteria', content: '', isExpanded: true },
    { id: '2', title: 'Interview Questions', content: '', isExpanded: true },
    { id: '3', title: 'Red Flags', content: '', isExpanded: true }
  ]);

  const scriptedInteraction: ChatMessage[] = [
    {
      id: '1',
      type: 'ai',
      content: "Let's create an interview scoring guide.",
      isQuestion: false
    },
    {
      id: '2',
      type: 'ai',
      content: "What role is this guide for?",
      isQuestion: true,
      isHighlighted: true,
      options: ['iOS Engineer', 'Android Engineer', 'Fullstack Engineer', 'Frontend Engineer', 'Backend Engineer', 'Data Science', 'Platform Engineer', 'Other...']
    },
    {
      id: '3',
      type: 'user',
      content: selectedRole || 'Fullstack Engineer',
      userResponse: selectedRole || 'Fullstack Engineer'
    },
    {
      id: '4',
      type: 'ai',
      content: "Great. Here's the outline we'll use.",
      isQuestion: false
    },
    {
      id: '5',
      type: 'ai',
      content: "Writing Plan\n\nSections:\n1. Evaluation Criteria\n2. Interview Questions\n3. Red Flags",
      isQuestion: false
    },
    {
      id: '6',
      type: 'ai',
      content: "What are your top three criteria for evaluating the interview session? For example one could be that the candidate describes a project from inception to completion.",
      isQuestion: true,
      isHighlighted: true
    },
    {
      id: '7',
      type: 'ai',
      content: "The evaluation criteria are:\n• Clearly explains the steps taken to resolve a recent technical challenge\n• Provides a concrete example of problem solving during the interview\n• Answers all required interview questions",
      isQuestion: false
    }
  ];

  const handleNextStep = () => {
    if (currentStep < scriptedInteraction.length - 1) {
      setCurrentStep(currentStep + 1);
      
      // Update document content based on current step
      if (currentStep === 1 && selectedRole) {
        updateDocumentSection(0, `Role: ${selectedRole}\n\nThis guide is designed for evaluating ${selectedRole} candidates during technical interviews.`);
      }
      
      if (currentStep === 5) {
        updateDocumentSection(0, `Role: ${selectedRole}\n\nThis guide is designed for evaluating ${selectedRole} candidates during technical interviews.\n\nEvaluation Criteria:\n• Clearly explains the steps taken to resolve a recent technical challenge\n• Provides a concrete example of problem solving during the interview\n• Answers all required interview questions`);
      }
    }
  };

  const updateDocumentSection = (sectionIndex: number, content: string) => {
    const updatedSections = [...documentSections];
    updatedSections[sectionIndex].content = content;
    setDocumentSections(updatedSections);
  };

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };

  const handleDocumentEdit = (sectionIndex: number, content: string) => {
    updateDocumentSection(sectionIndex, content);
  };

  const visibleMessages = scriptedInteraction.slice(0, currentStep + 1);

  return (
    <div className="guides-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="nav-item">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>
              <Home size={20} />
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>
              <Users size={20} />
            </Link>
          </div>
          <div className="nav-item active">
            <Link to="/guides" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>
              <FileText size={20} />
            </Link>
          </div>
          <div className="nav-item">
            <Briefcase size={20} />
          </div>
          <div className="nav-item help">
            <HelpCircle size={20} />
          </div>
          <div className="user-profile-sidebar">
            <div className="user-avatar">BE</div>
          </div>
        </div>
      </div>

      {/* Left Panel: AI Helper */}
      <div 
        className="left-panel"
        style={{ width: '50%' }}
      >
        <div className="chat-header">
          <div className="breadcrumb">
            <Link to="/guides" style={{ color: '#6c757d', textDecoration: 'none' }}>Scoring Guides</Link> &gt; New Guide
          </div>
          <div className="ai-helper-title">
            <Bot size={20} />
            <span>AI Helper</span>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {visibleMessages.map((message) => (
              <div key={message.id} className={`message ${message.type} ${message.isHighlighted ? 'highlighted' : ''}`}>
                <div className="message-avatar">
                  {message.type === 'ai' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  
                  {message.isQuestion && message.options && (
                    <div className="message-options">
                      {message.options.map((option) => (
                        <button
                          key={option}
                          className={`option-button ${selectedRole === option ? 'selected' : ''}`}
                          onClick={() => handleRoleSelection(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {message.type === 'user' && message.userResponse && (
                    <div className="user-response">
                      {message.userResponse}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Ask AI..." 
              className="chat-input-field"
            />
            <button className="send-button">
              <Send size={16} />
            </button>
          </div>

          <div className="next-button-container">
            <button 
              className="next-button"
              onClick={handleNextStep}
              disabled={currentStep >= scriptedInteraction.length - 1}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel: Document Editor */}
      <div 
        className="right-panel"
        style={{ width: '50%' }}
      >
        <div className="document-header">
          <h2>New Guide</h2>
          <button className="save-button">Save</button>
        </div>

        <div className="document-content">
          <div className="sections-outline">
            <h3>Sections</h3>
            {documentSections.map((section, index) => (
              <div key={section.id} className="section-item">
                <div className="section-header">
                  <h4>{section.title}</h4>
                </div>
                <div className="section-content">
                  <textarea
                    value={section.content}
                    onChange={(e) => handleDocumentEdit(index, e.target.value)}
                    placeholder={`Enter content for ${section.title.toLowerCase()}...`}
                    className="section-textarea"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
