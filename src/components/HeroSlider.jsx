import React, { useState, useEffect } from 'react';
import '../css/HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "We are Andromeda, India's Largest Loan Distributor",
      description: "Join Andromeda as a Financial Advisor. Be a part of a large and growing family of 25,000+ partners.",
    },
    {
      title: "Partner with Andromeda for the best deals and offers",
      description: "Partner with Andromeda and get closer to financial freedom",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 600);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 600);
    }
  };

  return (
    <div className="hero-slider">
      <div className="grid-pattern" />
      
      <div className="gradient-orb gradient-orb-top" />
      <div className="gradient-orb gradient-orb-bottom" />
      
      <div className="animated-line">
        <div className="line-inner" />
      </div>

      <div className="hero-content">
        <div className="hero-container">
          
          <div className={`content-wrapper ${isAnimating ? 'animating' : ''}`}>
            
            <div className="content-inner">
              <div className="badge-container">
                <div className="badge-line badge-line-left" />
                <span className="badge-text">Financial Excellence</span>
                <div className="badge-line badge-line-right" />
              </div>
              
              <h1 className="hero-title">
                {slides[currentSlide].title}
              </h1>
              
              <p className="hero-description">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div className="button-group">
              <button className="btn btn-primary">
                <span className="btn-text">PARTNER NOW</span>
                <div className="btn-overlay" />
                <span className="btn-text-hover">PARTNER NOW</span>
              </button>
              
              <button className="btn btn-secondary">
                LEARN MORE
              </button>
            </div>
          </div>

          <div className="decorative-background">
            <div className="decorative-container">
              
              <div className="rotating-frame">
                <div className="frame-corner frame-top-left" />
                <div className="frame-corner frame-top-right" />
                <div className="frame-corner frame-bottom-left" />
                <div className="frame-corner frame-bottom-right" />
              </div>

              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="orbiting-dot"
                  style={{
                    animationDuration: `${25 + i * 5}s`,
                    animationDelay: `${-i * 4}s`
                  }}
                >
                  <div className="dot" />
                </div>
              ))}

              <div className="accent-circle accent-circle-1" />
              <div className="accent-circle accent-circle-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`nav-button ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="nav-line" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;