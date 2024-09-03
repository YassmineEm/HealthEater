// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Player from './pages/players';
import FootballRecruiterCalendar from './pages/Calendrier';
import SiderBar from './components/SiderBar'; 

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SiderBar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/players" element={<Player />} />
            <Route path="/calendar" element={<FootballRecruiterCalendar />} />
            <Route path="/" element={<Dashboard />} />
            {/* Ajoutez d'autres routes si nécessaire */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



