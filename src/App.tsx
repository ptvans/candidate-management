import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CandidateList from './pages/CandidateList';
import CandidateDetail from './pages/CandidateDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CandidateList />} />
          <Route path="/candidate/:id" element={<CandidateDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
