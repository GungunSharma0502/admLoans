import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Company Info Section */}
          <div className="footer__section footer__info">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <span>▲</span>
              </div>
              <div className="footer__logo-text">
                <h2>Green Bunch Loan</h2>
                <p>INDIA'S LARGEST LOAN DISTRIBUTOR</p>
              </div>
            </div>
            <div className="footer__contact">
              <p>158, Dani Corporate Park, C.S.T Road Kalina, Santacruz (E),</p>
              <p>Mumbai - 400098</p>
              <p>Mail Us: <a href="mailto:contact@andromeda.in">contact@greenbunch.in</a></p>
              <p>Call Us: <a href="tel:+919152556556">+91-9152556556</a></p>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__section">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__links">
              <li><Link to="/Careers">Careers</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/grievance">Grievance Redressal Process</Link></li>
              <li><a href="https://sachet.rbi.org.in/">RBI Sachet Portal</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer__section">
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer__links">
              <li><Link to="/credit">Free Credit Score</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
           
            </ul>
          </div>

          {/* DSA Links */}
          <div className="footer__section">
            <h3 className="footer__heading">DSA</h3>
            <ul className="footer__links">
              <li><Link to="/EMICalculator">EMI Calculator</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">© Green Bunch Loans SALES & DISTRIBUTION PRIVATE LIMITED</p>
          <div className="footer__legal">
            <Link to="/terms">TERMS OF USE</Link>
            <span className="footer__divider">|</span>
            <Link to="/privacy">PRIVACY POLICY</Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className="footer__scroll-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;