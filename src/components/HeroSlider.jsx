import React, { useState, useEffect } from 'react';
import '../css/HeroSlider.css';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Empowering Your Financial Journey With Smarter Loans",
      description: "At Green Bunch Loans, we bring you simple, fast, and transparent loan solutions designed to support your personal and business goals. Get quick approvals, flexible repayment options, and trusted guidance every step of the way.",
    },
    {
      title: "Your Trusted Partner for Secure & Hassle-Free Loans",
      description: "Whether you need a personal loan, business funding, or home finance, Green Bunch Loans offers reliable services tailored to your needs. Experience a smooth, stress-free process with expert support and responsible lending.",
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
              <Link to="/about">
                <button className="btn btn-primary">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>

          <div className="decorative-background">
            <div className="decorative-container">
              
              {/* Orbiting Dots Only - No Rotating Frame */}
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

              {/* Circular Orbits */}
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