import React, { useState, useEffect, useRef } from 'react';
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
  
  const [documentSections, setDocumentSections] = useState<DocumentSection[]>([
    { id: '1', title: 'Evaluation Criteria', content: '', isExpanded: true },
    { id: '2', title: 'Interview Questions', content: '', isExpanded: true },
    { id: '3', title: 'Red Flags', content: '', isExpanded: true }
  ]);

  const [interviewQuestion, setInterviewQuestion] = useState<string>('');
  const [goodAnswer, setGoodAnswer] = useState<string>('');
  const [poorAnswer, setPoorAnswer] = useState<string>('');
  
  const evaluationCriteriaRef = useRef<HTMLTextAreaElement>(null);
  const goodAnswerRef = useRef<HTMLTextAreaElement>(null);
  const poorAnswerRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize Evaluation Criteria textarea when content changes
  const evaluationCriteriaContent = documentSections[0]?.content;
  
  useEffect(() => {
    if (evaluationCriteriaRef.current) {
      const textarea = evaluationCriteriaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [evaluationCriteriaContent]);

  // Auto-resize Good Answer textarea when content changes
  useEffect(() => {
    if (goodAnswerRef.current) {
      const textarea = goodAnswerRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [goodAnswer]);

  // Auto-resize Poor Answer textarea when content changes
  useEffect(() => {
    if (poorAnswerRef.current) {
      const textarea = poorAnswerRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [poorAnswer]);

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
      type: 'user',
      content: "The evaluation criteria are:\n• Clearly explains the steps taken to resolve a recent technical challenge\n• Provides a concrete example of problem solving during the interview\n• Answers all required interview questions",
      userResponse: "The evaluation criteria are:\n• Clearly explains the steps taken to resolve a recent technical challenge\n• Provides a concrete example of problem solving during the interview\n• Answers all required interview questions"
    },
    {
      id: '8',
      type: 'ai',
      content: "What's a question that you will ask in this interview?",
      isQuestion: true,
      isHighlighted: true
    },
    {
      id: '9',
      type: 'user',
      content: "Please provide an example of a technical challenge you overcame."
    },
    {
      id: '10',
      type: 'ai',
      content: "Please describe a good answer to that question",
      isQuestion: true,
      isHighlighted: true
    },
    {
      id: '11',
      type: 'user',
      content: "Provides a logical, step-by-step explanation including specific actions."
    },
    {
      id: '12',
      type: 'ai',
      content: "Please describe a poor answer to that question",
      isQuestion: true,
      isHighlighted: true
    },
    {
      id: '13',
      type: 'user',
      content: "Cannot explain steps taken or provides only vague statements."
    },
    {
      id: '14',
      type: 'ai',
      content: "What's another question that you will ask during this interview?",
      isQuestion: true,
      isHighlighted: true
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
        // Update the Evaluation Criteria section with the bullet list only
        updateDocumentSection(0, `• Clearly explains the steps taken to resolve a recent technical challenge\n• Provides a concrete example of problem solving during the interview\n• Answers all required interview questions`);
      }
      
      if (currentStep === 7) {
        // Update the Interview Questions section with the question
        setInterviewQuestion("Please provide an example of a technical challenge you overcame.");
      }
      
      if (currentStep === 9) {
        // Update the Good Answer field
        setGoodAnswer("Provides a logical, step-by-step explanation including specific actions.");
      }
      
      if (currentStep === 11) {
        // Update the Poor Answer field
        setPoorAnswer("Cannot explain steps taken or provides only vague statements.");
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

  const autoResizeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
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
      
      {/* Main Content Area */}
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-breadcrumb">
            <Link to="/guides" style={{ color: '#6c757d', textDecoration: 'none' }}>
              Scoring Guides
            </Link>
            &nbsp;&gt;&nbsp;New Guide
          </div>
        </div>
        
        {/* Panels Container */}
        <div className="panels-container">

      {/* Left Panel: AI Helper */}
      <div className="left-panel">
        <div className="chat-header">
          <div className="ai-helper-title">
            <Bot size={20} />
            <span>HireSignal Agent</span>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {visibleMessages.map((message) => (
              <div key={message.id} className={`message ${message.type} ${message.isHighlighted ? 'highlighted' : ''}`}>
                {message.type === 'user' && (
                  <div className="message-avatar">
                    <User size={16} />
                  </div>
                )}
                <div className="message-content">
                  {message.type === 'ai' && (
                    <div className="message-text">{message.content}</div>
                  )}
                  
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
                  
                  {message.type === 'user' && (
                    <div className={message.id === '3' ? 'user-response' : 'message-text'}>
                      {message.content}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-footer">
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
                Next (Simulated)<ChevronRight size={16} />
                </button>
            </div>
        </div>
        

      </div>

      {/* Right Panel: Document Editor */}
      <div className="right-panel">
        <div className="document-header">
          <span>{selectedRole || 'New Guide'}</span>
          <button className="save-button">Save</button>
        </div>

        <div className="document-content">
          <div className="sections-outline">
            {documentSections.map((section, index) => (
              <div key={section.id} className="section-item">
                <div className="section-header">
                  <h4>{section.title}</h4>
                </div>
                <div className="section-content">
                  {section.id === '2' ? (
                    currentStep >= 7 ? (
                      <div className="interview-questions-content">
                        <div className="question-heading">
                          <h4>{interviewQuestion || 'Interview Question'}</h4>
                        </div>
                        <div className="answer-fields">
                          <div className="answer-field">
                            <label>Good Example</label>
                            <textarea
                              ref={goodAnswerRef}
                              value={goodAnswer}
                              onChange={(e) => {
                                setGoodAnswer(e.target.value);
                                autoResizeTextarea(e);
                              }}
                              placeholder="Describe what makes a good answer..."
                              className="section-textarea"
                              rows={1}
                            />
                          </div>
                          <div className="answer-field">
                            <label>Poor Example</label>
                            <textarea
                              ref={poorAnswerRef}
                              value={poorAnswer}
                              onChange={(e) => {
                                setPoorAnswer(e.target.value);
                                autoResizeTextarea(e);
                              }}
                              placeholder="Describe what makes a poor answer..."
                              className="section-textarea"
                              rows={1}
                            />
                          </div>
                        </div>
                      </div>
                    ) : null
                  ) : (
                    <textarea
                      ref={section.id === '1' ? evaluationCriteriaRef : null}
                      value={section.content}
                      onChange={(e) => {
                        handleDocumentEdit(index, e.target.value);
                        autoResizeTextarea(e);
                      }}
                      placeholder={`Enter content for ${section.title.toLowerCase()}...`}
                      className="section-textarea"
                      rows={1}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
