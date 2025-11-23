import React from 'react';
import '../css/trust.css';

const Trust = () => {
  const brands = [
    { name: 'SBI', logo: '/logos/sbi.png', colorClass: 'purple' },
    { name: 'Piramal Finance', logo: '/logos/piramal.png', colorClass: 'brown' },
    { name: 'Bank of Baroda', logo: '/logos/bob.png', colorClass: 'blue' }
  ];

  return (
    <section className="trust-section">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="trust-container">
        {/* Header Section */}
        <div className="trust-header">
          <div className="header-wrapper">
            <h2 className="trust-title">Brands who Trust Us</h2>
            <div className="title-underline"></div>
          </div>
          <p className="trust-description">
            We are amongst the top 3 most-preferred channel partners for loans for India's
            widest network of Banks, NBFCs, and Fintech
          </p>
        </div>

        {/* Three Cards */}
        <div className="cards-grid">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className={`brand-card ${brand.colorClass}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Border Glow */}
              <div className="border-glow"></div>
              
              {/* Animated Gradient Overlay */}
              <div className="gradient-overlay"></div>
              
              {/* Scan Line Effect */}
              <div className="scan-line"></div>
              
              {/* Corner Accents */}
              <div className="corner-accent corner-top-left"></div>
              <div className="corner-accent corner-bottom-right"></div>
              
              {/* Floating Particles */}
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              
              <div className="brand-content">
                <div className="brand-name">
                  {brand.name}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;