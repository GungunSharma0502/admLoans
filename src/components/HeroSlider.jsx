import React, { useState, useEffect } from 'react';
import '../css/HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "We are Andromeda, India's Largest Loan Distributor",
      description: "Join Andromeda as a Financial Advisor. Be a part of a large and growing family of 25,000+ partners.",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Partner with Andromeda for the best deals and offers",
      description: "Partner with Andromeda and get closer to financial freedom",
      image: "/api/placeholder/600/400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="heroSlider">
      <div className="heroSlider__container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`heroSlider__slide ${index === currentSlide ? 'heroSlider__slide--active' : ''}`}
          >
            <div className="heroSlider__content">
              <div className="heroSlider__contentLeft">
                <h1 className="heroSlider__title">{slide.title}</h1>
                <p className="heroSlider__description">{slide.description}</p>
                <button className="heroSlider__btn">PARTNER NOW</button>
              </div>
              <div className="heroSlider__contentRight">
                <div className="heroSlider__imageWrapper">
                  {index === 0 ? (
                    <div className="heroSlider__illustration heroSlider__illustration--1">
                      <div className="heroSlider__hexagon heroSlider__hexagon--1"></div>
                      <div className="heroSlider__hexagon heroSlider__hexagon--2"></div>
                      <div className="heroSlider__hexagon heroSlider__hexagon--3"></div>
                      <div className="heroSlider__businessPeople">
                        <div className="heroSlider__person heroSlider__person--1"></div>
                        <div className="heroSlider__person heroSlider__person--2"></div>
                      </div>
                      <div className="heroSlider__coins">
                        <div className="heroSlider__coin heroSlider__coin--1"></div>
                        <div className="heroSlider__coin heroSlider__coin--2"></div>
                        <div className="heroSlider__coin heroSlider__coin--3"></div>
                      </div>
                      <div className="heroSlider__dotsPattern"></div>
                    </div>
                  ) : (
                    <div className="heroSlider__illustration heroSlider__illustration--2">
                      <div className="heroSlider__hexagon heroSlider__hexagon--4"></div>
                      <div className="heroSlider__hexagon heroSlider__hexagon--5"></div>
                      <div className="heroSlider__blueShape"></div>
                      <div className="heroSlider__dashboard">
                        <div className="heroSlider__chartArea"></div>
                      </div>
                      <div className="heroSlider__businessWoman"></div>
                      <div className="heroSlider__coinsFloating">
                        <div className="heroSlider__coin heroSlider__coin--4"></div>
                        <div className="heroSlider__coin heroSlider__coin--5"></div>
                        <div className="heroSlider__coin heroSlider__coin--6"></div>
                      </div>
                      <div className="heroSlider__arrowGrowth"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="heroSlider__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`heroSlider__dot ${index === currentSlide ? 'heroSlider__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;