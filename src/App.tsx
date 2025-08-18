import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CandidateList from './pages/CandidateList';
import CandidateDetail from './pages/CandidateDetail';
import GuidesIndex from './pages/GuidesIndex';
import Guides from './pages/Guides';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CandidateList />} />
          <Route path="/candidate-management" element={<CandidateList />} />
          <Route path="/candidate-management/" element={<CandidateList />} />
          <Route path="/candidate/:id" element={<CandidateDetail />} />
          <Route path="/guides" element={<GuidesIndex />} />
          <Route path="/guides/new" element={<Guides />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
