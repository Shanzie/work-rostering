import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create a corresponding CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Workplace Rostering</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/shifts">Shift Management</Link>
        <Link to="/leave">Leave Management</Link>
        <Link to="/profile">Profile</Link>
        {/* Add other links as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
