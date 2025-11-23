import React, { useState, useEffect } from 'react';
import '../css/Standards.css';

const Standards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      quote: "Green Bunch Loans has completely transformed how I manage my investments. The platform is incredibly user-friendly, and their customer support team is always ready to help. I've seen consistent returns and feel confident about my financial future.",
      name: 'Mr. Arjun Patel',
      designation: 'Business Owner'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
      quote: "I was hesitant about investing online, but Green Bunch Loans made the entire process seamless and transparent. Their expert guidance helped me make informed decisions, and I'm thrilled with the growth of my portfolio over the past year.",
      name: 'Ms. Neha Verma',
      designation: 'Software Engineer'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      quote: "The best investment decision I made was choosing Green Bunch Loans. Their platform offers excellent investment options with complete transparency. The regular updates and detailed reports keep me informed every step of the way.",
      name: 'Mr. Vikram Singh',
      designation: 'Marketing Professional'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop',
      quote: "Green Bunch Loans's personalized approach to wealth management is outstanding. They took time to understand my financial goals and created a perfect investment strategy for me. Highly recommend their services to anyone looking to grow their wealth.",
      name: 'Ms. Riya Kapoor',
      designation: 'Doctor'
    }
  ];

  const handleSlideChange = (newIndex, dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length, 'next');
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length, 'prev');
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      handleSlideChange(index, index > currentSlide ? 'next' : 'prev');
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="standards-section">
      {/* Animated Background */}
      <div className="standards-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>

      <div className="standards-container">
        {/* Header */}
        <div className="standards-header">
          <h2 className="standards-title">What Our Customers Say</h2>
          <div className="standards-underline"></div>
          <p className="standards-subtitle">Real experiences from our valued customers</p>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card">
          {/* Glow Effect */}
          <div className="card-glow"></div>

          <div className="card-inner">
            {/* Decorative Elements */}
            <div className="card-decoration card-decoration-1"></div>
            <div className="card-decoration card-decoration-2"></div>

            {/* Pattern Overlay */}
            <div className="card-pattern"></div>

            {/* Scan Line Animation */}
            <div className="scan-line-container">
              <div className="scan-line"></div>
            </div>

            {/* Main Content */}
            <div className="slide-content">
              {/* Image Section */}
              <div className="slide-image-section">
                <div className="image-glow"></div>
                
                <div className="image-wrapper">
                  <div className="image-bg-gradient"></div>
                  <div className="image-container">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].name}
                      className="slide-image"
                    />
                    <div className="image-overlay"></div>
                    
                    {/* Corner Accents */}
                    <div className="corner-accent corner-top-left"></div>
                    <div className="corner-accent corner-bottom-right"></div>
                  </div>

                  {/* Verified Badge */}
                  <div className="verified-badge">
                    <span>✓ Verified Customer</span>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="slide-text-section">
                {/* Quote */}
                <div className="quote-container">
                  <div className="quote-mark quote-mark-open">"</div>
                  <p className="slide-quote">
                    "{slides[currentSlide].quote}"
                  </p>
                  <div className="quote-mark quote-mark-close">"</div>
                </div>

                {/* Author Info */}
                <div className="author-info-container">
                  <h4 className="author-name">{slides[currentSlide].name}</h4>
                  <p className="author-designation">{slides[currentSlide].designation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="slider-controls">
          {/* Navigation Dots */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {currentSlide === index && <span className="dot-pulse"></span>}
              </button>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="slider-arrows">
            <button
              onClick={prevSlide}
              className="arrow-btn arrow-prev"
              aria-label="Previous slide"
            >
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="arrow-btn arrow-next"
              aria-label="Next slide"
            >
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;