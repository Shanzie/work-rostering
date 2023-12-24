import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';        // Import the Home component
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import ShiftManagement from './components/ShiftManagement';
import LeaveManagement from './components/LeaveManagement';
import Profile from './components/Profile';
import CalendarPage from './components/CalendarPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />  {/* Updated to Home component */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard on a separate route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/calendar" element={<CalendarPage />} />
          {isLoggedIn && (
            <>
              <Route path="/shifts" element={<ShiftManagement />} />
              <Route path="/leave" element={<LeaveManagement />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
