import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      {/* Wrap the "Workplace Rostering" text with Link to navigate to the homepage */}
      <Link to="/" className="navbar-logo">
        Workplace Rostering
      </Link>

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            {/* Logged-in links */}
            <Link to="/">Dashboard</Link>
            <Link to="/shifts">Shift Management</Link>
            <Link to="/leave">Leave Management</Link>
            <Link to="/profile">Profile</Link>
            {/* Add more links or a logout button as needed */}
          </>
        ) : (
          <>
            {/* Links visible when logged out */}
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
