import React from 'react';
import { TrendingUp, Target, BookOpen, Users, Award, Shield } from 'lucide-react';
import '../css/About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              About Green Bunch Loans
            </h1>
            <p className="hero-subtitle">
              8-10 years of trusted financial partnership, empowering dreams through transparent lending
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Introduction */}
        <div className="intro-section">
          <div className="section-header">
            <div className="icon-wrapper icon-emerald">
              <Users className="icon" />
            </div>
            <h2 className="section-title">Who We Are</h2>
          </div>
          <p className="intro-text">
            Green Bunch Loans has been a trusted name in the financial industry for the past 8–10 years, delivering reliable and transparent loan solutions to individuals and businesses across the country. Our journey began with a simple mission — to make borrowing easier, faster, and more accessible for everyone.
          </p>
          <p className="intro-text">
            With a strong commitment to customer satisfaction, ethical practices, and responsible lending, we have grown into a company known for trust, clarity, and long-term relationships. Today, we continue to empower people by offering secure financial support that helps them achieve their goals with confidence.
          </p>
        </div>

        {/* Three Column Section */}
        <div className="cards-grid">
          {/* Our Story */}
          <div className="feature-card card-emerald">
            <div className="card-icon-wrapper">
              <BookOpen className="card-icon" />
            </div>
            <h3 className="card-title">⭐ Our Story</h3>
            <p className="card-text">
              Our story started a decade ago with a vision to transform how people experience loan services. We realized that many customers struggled with complicated processes, hidden charges, and unclear guidance — so we set out to create a better, more transparent system.
            </p>
            <p className="card-text">
              Over the years, Green Bunch Loans has evolved into a dependable financial partner, helping thousands of clients through personalized loan solutions, expert advice, and a smooth digital experience.
            </p>
          </div>

          {/* Our Vision */}
          <div className="feature-card card-teal">
            <div className="card-icon-wrapper">
              <Target className="card-icon" />
            </div>
            <h3 className="card-title">⭐ Our Vision</h3>
            <p className="card-text">
              Our vision is to become the most trusted and customer-centric loan service provider in the industry. We aim to simplify financial access for individuals and businesses by offering transparent processes, quick approvals, and reliable support.
            </p>
            <p className="card-text">
              We believe in building long-term relationships rooted in trust, clarity, and professionalism — empowering every customer to move forward confidently towards a better financial future.
            </p>
          </div>

          {/* Our Values */}
          <div className="feature-card card-green">
            <div className="card-icon-wrapper">
              <TrendingUp className="card-icon" />
            </div>
            <h3 className="card-title">⭐ Our Values</h3>
            <ul className="values-list">
              <li className="value-item">
                <span className="checkmark">✓</span>
                <span>Transparency in every transaction</span>
              </li>
              <li className="value-item">
                <span className="checkmark">✓</span>
                <span>Customer-first approach</span>
              </li>
              <li className="value-item">
                <span className="checkmark">✓</span>
                <span>Ethical lending practices</span>
              </li>
              <li className="value-item">
                <span className="checkmark">✓</span>
                <span>Quick and reliable service</span>
              </li>
              <li className="value-item">
                <span className="checkmark">✓</span>
                <span>Long-term partnerships</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <Award className="stat-icon" />
              <div className="stat-number">8-10</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <Shield className="stat-icon" />
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure & Trusted</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h3 className="cta-title">
            Ready to Start Your Financial Journey?
          </h3>
          <p className="cta-text">
            Join thousands of satisfied customers who trust Green Bunch Loans for their financial needs
          </p>
          <button className="cta-button">
            Apply for a Loan Today
          </button>
        </div>
      </div>

      {/* Footer Wave */}
      <div className="footer-wave">
        <div className="wave-container">
          <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f0fdf4"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}