import React, { useState } from 'react';
import '../css/Standards.css';

const Standards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      quote: "Andromeda's tie-ups with top-tier banks and lending partners has given me a leg-up when it comes to working from home. From informing customers about their investment opportunities to taking them through their investment journey, Andromeda's digital integration makes the entire process faster and easier. What is more, it allows me to work at my convenience while providing for a steady source of income.",
      name: 'Mr. Sher Singh',
      designation: 'Wealth Advisor'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
      quote: "Working with Andromeda has transformed my career. The platform's intuitive design and comprehensive tools make it easy to serve clients efficiently. The support from the team is exceptional, and I've seen significant growth in my business.",
      name: 'Ms. Priya Sharma',
      designation: 'Financial Consultant'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      quote: "The partnership with Andromeda has been a game-changer for my practice. Their technology integration and partner network have enabled me to offer better solutions to my clients while maintaining work-life balance.",
      name: 'Mr. Rajesh Kumar',
      designation: 'Investment Advisor'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop',
      quote: "Andromeda's platform has empowered me to reach more clients and provide superior service. The seamless integration with banking partners and the user-friendly interface make my job easier and more rewarding every day.",
      name: 'Ms. Anjali Mehta',
      designation: 'Wealth Manager'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="standards-section">
      <div className="standards-container">
        <h1 className="standards-title">Highest Standards. Happiest Partners</h1>
        <div className="standards-underline"></div>
        <p className="standards-subtitle">Our partners are our strength</p>

        <div className="slider-wrapper">
          <div className="slide-content">
            <div className="slide-image-container">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].name}
                className="slide-image"
              />
            </div>

            <div className="slide-text-container">
              <p className="slide-quote">
                "{slides[currentSlide].quote}"
              </p>

              <div className="slide-author">
                <div className="author-image-container">
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].name}
                    className="author-image"
                  />
                </div>
                <div className="author-info">
                  <h3 className="author-name">{slides[currentSlide].name}</h3>
                  <p className="author-designation">{slides[currentSlide].designation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="slider-arrows">
              <button 
                className="arrow-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="arrow-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;