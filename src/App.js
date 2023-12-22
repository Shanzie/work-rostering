import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import ShiftManagement from './components/ShiftManagement';
import LeaveManagement from './components/LeaveManagement';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define a function to update the login state
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
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
