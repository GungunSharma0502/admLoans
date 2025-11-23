import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const exploreRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleExplore = (e) => {
    e.stopPropagation();
    setIsExploreOpen(!isExploreOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside (Desktop)
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          {/* Logo */}
          <Link 
            to="/" 
            className={`navbar-item navbar-logo ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Green Bunch Loans
          </Link>

          {/* Desktop Menu Items */}
          <Link 
            to="/" 
            className={`navbar-item ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={`navbar-item ${isActive('/about') ? 'active' : ''}`}
          >
            About Us
          </Link>

          <Link 
            to="/contact" 
            className={`navbar-item ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact Us
          </Link>

          {/* Desktop Dropdown */}
          <div className="navbar-explore-container" ref={exploreRef}>
            <button 
              className="navbar-explore-btn"
              onClick={toggleExplore}
              type="button"
            >
              Services
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
              <div className="navbar-explore-dropdown">
                <Link 
                  to="/BusinessLoan" 
                  className="navbar-explore-item"
                  onClick={() => setIsExploreOpen(false)}
                >
                  Business Loan
                </Link>
                <Link 
                  to="/HomeLoan" 
                  className="navbar-explore-item"
                  onClick={() => setIsExploreOpen(false)}
                >
                  Home Loan
                </Link>
                <Link 
                  to="/MachineLoan" 
                  className="navbar-explore-item"
                  onClick={() => setIsExploreOpen(false)}
                >
                  Machine Loan
                </Link>
                <Link 
                  to="/LoanAgainstProperty" 
                  className="navbar-explore-item"
                  onClick={() => setIsExploreOpen(false)}
                >
                  Loan Against Property
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button 
            className={`navbar-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`navbar-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className={`navbar-sidebar-item ${isActive('/') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        <Link 
          to="/about" 
          className={`navbar-sidebar-item ${isActive('/about') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          About Us
        </Link>

        <Link 
          to="/contact" 
          className={`navbar-sidebar-item ${isActive('/contact') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Contact Us
        </Link>

        {/* Services in Sidebar */}
        <div className="navbar-sidebar-services">
          <div className="navbar-sidebar-services-title">Services</div>
          
          <Link 
            to="/BusinessLoan" 
            className="navbar-sidebar-service-item"
            onClick={closeMobileMenu}
          >
            Business Loan
          </Link>

          <Link 
            to="/HomeLoan" 
            className="navbar-sidebar-service-item"
            onClick={closeMobileMenu}
          >
            Home Loan
          </Link>

          <Link 
            to="/MachineLoan" 
            className="navbar-sidebar-service-item"
            onClick={closeMobileMenu}
          >
            Machine Loan
          </Link>

          <Link 
            to="/LoanAgainstProperty" 
            className="navbar-sidebar-service-item"
            onClick={closeMobileMenu}
          >
            Loan Against Property
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`navbar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Navbar;