import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your components here
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import ShiftManagement from './components/ShiftManagement';
import LeaveManagement from './components/LeaveManagement';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shifts" element={<ShiftManagement />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
