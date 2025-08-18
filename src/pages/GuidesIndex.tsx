import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Briefcase, HelpCircle, FileText, Bot, Plus, Search, Filter, MoreVertical, Calendar, User } from 'lucide-react';
import './GuidesIndex.css';

interface Guide {
  id: string;
  title: string;
  role: string;
  createdAt: string;
  lastModified: string;
  author: string;
  status: 'draft' | 'published' | 'archived';
  questionCount: number;
  criteriaCount: number;
}

const GuidesIndex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('lastModified');

  // Mock data for existing guides
  const guides: Guide[] = [
    {
      id: '1',
      title: 'Fullstack Engineer Interview Guide',
      role: 'Fullstack Engineer',
      createdAt: '2024-01-15',
      lastModified: '2024-01-18',
      author: 'Bork Effelblatt',
      status: 'published',
      questionCount: 8,
      criteriaCount: 5
    },
    {
      id: '2',
      title: 'iOS Developer Technical Assessment',
      role: 'iOS Engineer',
      createdAt: '2024-01-10',
      lastModified: '2024-01-12',
      author: 'Bork Effelblatt',
      status: 'draft',
      questionCount: 6,
      criteriaCount: 4
    },
    {
      id: '3',
      title: 'Data Scientist Interview Framework',
      role: 'Data Science',
      createdAt: '2024-01-05',
      lastModified: '2024-01-08',
      author: 'Bork Effelblatt',
      status: 'published',
      questionCount: 10,
      criteriaCount: 6
    },
    {
      id: '4',
      title: 'Backend Engineer Evaluation Guide',
      role: 'Backend Engineer',
      createdAt: '2023-12-20',
      lastModified: '2023-12-22',
      author: 'Bork Effelblatt',
      status: 'archived',
      questionCount: 7,
      criteriaCount: 5
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || guide.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sortedGuides = [...filteredGuides].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'createdAt':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'lastModified':
      default:
        return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return '#28a745';
      case 'draft': return '#ffc107';
      case 'archived': return '#6c757d';
      default: return '#6c757d';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published': return 'Published';
      case 'draft': return 'Draft';
      case 'archived': return 'Archived';
      default: return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="guides-index-container">
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
            <FileText size={20} />
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

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="page-header">
          <div className="header-left">
            <h1>Interview Scoring Guides</h1>
            <p className="header-subtitle">Create and manage guides for evaluating technical interviews</p>
          </div>
          <div className="header-right">
            <Link to="/guides/new" className="create-button">
              <Plus size={20} />
              <span>Create Guide</span>
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="search-filters">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search guides by title or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <label htmlFor="status-filter">Status:</label>
              <select
                id="status-filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="sort-by">Sort by:</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="lastModified">Last Modified</option>
                <option value="createdAt">Created Date</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>

        {/* Guides List */}
        <div className="guides-list">
          {sortedGuides.length === 0 ? (
            <div className="empty-state">
              <FileText size={48} className="empty-icon" />
              <h3>No guides found</h3>
              <p>Try adjusting your search or filters, or create your first guide.</p>
              <Link to="/guides/new" className="create-button empty-state-button">
                <Plus size={20} />
                <span>Create Guide</span>
              </Link>
            </div>
          ) : (
            sortedGuides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div className="guide-header">
                  <div className="guide-title-section">
                    <h3 className="guide-title">{guide.title}</h3>
                    <div className="guide-role">{guide.role}</div>
                  </div>
                  <div className="guide-actions">
                    <button className="action-button">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="guide-meta">
                  <div className="meta-item">
                    <User size={14} />
                    <span>{guide.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>Modified {formatDate(guide.lastModified)}</span>
                  </div>
                  <div className="meta-item">
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(guide.status) }}>
                      {getStatusLabel(guide.status)}
                    </span>
                  </div>
                </div>
                
                <div className="guide-stats">
                  <div className="stat-item">
                    <span className="stat-number">{guide.questionCount}</span>
                    <span className="stat-label">Questions</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{guide.criteriaCount}</span>
                    <span className="stat-label">Criteria</span>
                  </div>
                </div>
                
                <div className="guide-footer">
                  <Link to={`/guides/${guide.id}`} className="view-button">
                    View Guide
                  </Link>
                  <Link to={`/guides/${guide.id}/edit`} className="edit-button">
                    Edit
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GuidesIndex;
