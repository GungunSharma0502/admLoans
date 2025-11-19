import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-menu">
        {/* Logo */}
        <Link 
          to="/" 
          className={`nav-item nav-logo ${isActive('/') ? 'active' : ''}`}
        >
          ANDROMEDA
        </Link>

        {/* Home Link */}
        <Link 
          to="/" 
          className={`nav-item ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>

        {/* About Link */}
        <Link 
          to="/about" 
          className={`nav-item ${isActive('/about') ? 'active' : ''}`}
        >
          About Us
        </Link>

        {/* Contact Link */}
        <Link 
          to="/contact" 
          className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact Us
        </Link>

        {/* Explore Dropdown */}
        <div className="nav-explore-container" ref={exploreRef}>
          <button 
            className="nav-explore-btn"
            onClick={toggleExplore}
          >
            Explore
            <span style={{ 
              transform: isExploreOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
              transition: 'transform 0.3s ease',
              display: 'inline-block',
              fontSize: '10px',
              marginLeft: '3px'
            }}>
              ▼
            </span>
          </button>
          
          {isExploreOpen && (
            <div className="nav-explore-dropdown">
              <Link 
                to="/loans" 
                className="nav-explore-item"
                onClick={() => setIsExploreOpen(false)}
              >
                Loans
              </Link>
              <Link 
                to="/services" 
                className="nav-explore-item"
                onClick={() => setIsExploreOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/partners" 
                className="nav-explore-item"
                onClick={() => setIsExploreOpen(false)}
              >
                Partners
              </Link>
              <Link 
                to="/calculator" 
                className="nav-explore-item"
                onClick={() => setIsExploreOpen(false)}
              >
                Calculator
              </Link>
            </div>
          )}
        </div>

        {/* Optional: Add username and logout if user is logged in */}
        {/* Uncomment and modify based on your auth logic
        {isLoggedIn && (
          <>
            <span className="nav-item nav-username">
              {username}
            </span>
            <button 
              className="nav-item nav-logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
        */}
      </div>
    </nav>
  );
};

export default Navbar;