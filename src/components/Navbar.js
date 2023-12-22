import React from 'react';
// ... other imports

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      {/* Always visible content */}
      <div className="navbar-logo">Workplace Rostering</div>

      {/* Conditional content based on login status */}
      {isLoggedIn && (
        <div className="navbar-links">
          <Link to="/">Dashboard</Link>
          <Link to="/shifts">Shift Management</Link>
          <Link to="/leave">Leave Management</Link>
          <Link to="/profile">Profile</Link>
          {/* Add other links as needed */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
