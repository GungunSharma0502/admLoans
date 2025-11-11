import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Andromeda Logo" className="logo-icon" />
          <div className="logo-text">
            <h1>ANDROMEDA</h1>
            <p>INDIA'S LARGEST LOAN DISTRIBUTOR</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/about">About Us</Link>
          </li>

          <li className="navbar-item">
            <Link to="/credit-score">Free Credit Score</Link>
          </li>

          <li 
            className="navbar-item dropdown"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <Link to="#">
              Resources <span className="dropdown-arrow">▼</span>
            </Link>
            {isResourcesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <a href="tel:+919152556556" className="phone-link">
              <span className="phone-icon">📞</span>
              +91-9152556556
            </a>
          </li>
        </ul>

        {/* Download Button */}
        <button className="download-btn">DOWNLOAD APP</button>
      </div>
    </nav>
  );
};

export default Navbar;
