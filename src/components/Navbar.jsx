import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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

        {/* Hamburger Menu Button */}
        <button 
          className={`navbar-hamburger ${isSidebarOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="navbar-overlay" onClick={closeSidebar}></div>
        )}

        {/* Sidebar Menu */}
        <div className={`navbar-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button className="navbar-sidebar-close" onClick={closeSidebar}>
            ×
          </button>
          
          <ul className="navbar-sidebar-menu">
            <li className="navbar-sidebar-item">
              <Link to="/" onClick={closeSidebar}>Home</Link>
            </li>
            <li className="navbar-sidebar-item">
              <Link to="/about" onClick={closeSidebar}>About Us</Link>
            </li>
            <li className="navbar-sidebar-item">
              <Link to="/contact" onClick={closeSidebar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;