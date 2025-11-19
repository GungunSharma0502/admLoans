import React, { useState } from 'react';
import './Edge.css';

const Edge = () => {
  const [activeCard, setActiveCard] = useState(null);

  const edges = [
    {
      id: 1,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience unparalleled speed with our optimized infrastructure',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Bank-Grade Security',
      description: 'Your data protected with military-grade encryption',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'AI-Powered Insights',
      description: 'Smart analytics that help you make better decisions',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Seamless Integration',
      description: 'Connect with 1000+ apps and services effortlessly',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b'
    },
    {
      id: 5,
      icon: '💎',
      title: 'Premium Support',
      description: '24/7 dedicated support team ready to assist you',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a'
    },
    {
      id: 6,
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Monitor your performance with live dashboards',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      color: '#30cfd0'
    }
  ];

  return (
    <div className="edge-section">
      {/* Animated Background */}
      <div className="edge-bg-gradient"></div>
      <div className="edge-bg-circles">
        <div className="edge-circle edge-circle-1"></div>
        <div className="edge-circle edge-circle-2"></div>
        <div className="edge-circle edge-circle-3"></div>
      </div>

      <div className="edge-container">
        {/* Header Section */}
        <div className="edge-header">
          <div className="edge-badge">
            <span className="edge-badge-icon">✨</span>
            <span className="edge-badge-text">Why Choose Us</span>
          </div>
          
          <h2 className="edge-title">
            The <span className="edge-title-highlight">Andromeda</span> Edge
          </h2>
          
          <p className="edge-subtitle">
            Multiple Advantages. One Platform.
          </p>
          
          <div className="edge-divider">
            <span className="edge-divider-dot"></span>
            <span className="edge-divider-line"></span>
            <span className="edge-divider-dot"></span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="edge-grid">
          {edges.map((edge) => (
            <div
              key={edge.id}
              className={`edge-card ${activeCard === edge.id ? 'edge-card-active' : ''}`}
              onMouseEnter={() => setActiveCard(edge.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background Effects */}
              <div className="edge-card-bg" style={{ background: edge.gradient }}></div>
              <div className="edge-card-overlay"></div>
              
              {/* Glow Effect */}
              <div 
                className="edge-card-glow" 
                style={{ 
                  boxShadow: `0 0 60px ${edge.color}40, 0 0 100px ${edge.color}20` 
                }}
              ></div>

              {/* Content */}
              <div className="edge-card-content">
                <div 
                  className="edge-card-icon"
                  style={{ 
                    background: edge.gradient,
                    boxShadow: `0 10px 30px ${edge.color}40`
                  }}
                >
                  <span>{edge.icon}</span>
                </div>

                <h3 className="edge-card-title">{edge.title}</h3>
                <p className="edge-card-description">{edge.description}</p>

                {/* Animated Arrow */}
                <div className="edge-card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M5 12h14m-7-7l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="edge-card-shine"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="edge-cta">
          <button className="edge-cta-button">
            <span className="edge-cta-text">Explore All Features</span>
            <span className="edge-cta-icon">→</span>
            <div className="edge-cta-ripple"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edge;