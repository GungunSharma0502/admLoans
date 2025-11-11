import React, { useState, useEffect, useRef } from 'react';
import '../css/Story.css';

const Story = () => {
  const [counts, setCounts] = useState({
    cities: 0,
    branches: 0,
    employees: 0,
    advisors: 0,
    partners: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 2000;
    const targets = {
      cities: 1500,
      branches: 500,
      employees: 5000,
      advisors: 25000,
      partners: 180
    };

    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        cities: Math.floor(easeOutQuart * targets.cities),
        branches: Math.floor(easeOutQuart * targets.branches),
        employees: Math.floor(easeOutQuart * targets.employees),
        advisors: Math.floor(easeOutQuart * targets.advisors),
        partners: Math.floor(easeOutQuart * targets.partners)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  const formatNumber = (num, suffix) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k' + suffix;
    }
    return num + suffix;
  };

  return (
    <section className="story-section" ref={sectionRef}>
      <div className="story-container">
        <h2 className="story-title">
          The Story Of Andromeda In Numbers.
        </h2>
        
        <p className="story-subtitle">
          Over INR 1.08L Cr loans disbursed annually.
        </p>

        <div className="story-cards">
          <div className="story-card">
            <div className="story-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 15C26.5 15 23.75 17.75 23.75 21.25C23.75 24.75 26.5 27.5 30 27.5C33.5 27.5 36.25 24.75 36.25 21.25C36.25 17.75 33.5 15 30 15Z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 45C23.75 45 18.75 40 18.75 33.75C18.75 27.5 23.75 22.5 30 22.5C36.25 22.5 41.25 27.5 41.25 33.75C41.25 40 36.25 45 30 45Z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="story-label">Cities</h3>
            <p className="story-number">{counts.cities}+</p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="22" y="25" width="16" height="12" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26 25V22C26 20.8954 26.8954 20 28 20H32C33.1046 20 34 20.8954 34 22V25" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="30" cy="18" r="3" stroke="#1a73e8" strokeWidth="2.5"/>
                <circle cx="20" cy="22" r="3" stroke="#1a73e8" strokeWidth="2.5"/>
                <circle cx="40" cy="22" r="3" stroke="#1a73e8" strokeWidth="2.5"/>
                <circle cx="20" cy="35" r="3" stroke="#1a73e8" strokeWidth="2.5"/>
                <circle cx="40" cy="35" r="3" stroke="#1a73e8" strokeWidth="2.5"/>
                <path d="M23 23L20 22M37 23L40 22M23 35L20 35M37 35L40 35" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
              </svg>
            </div>
            <h3 className="story-label">Branches</h3>
            <p className="story-number">{counts.branches}+</p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="23" r="5" stroke="#1a73e8" strokeWidth="2.5"/>
                <circle cx="35" cy="23" r="5" stroke="#1a73e8" strokeWidth="2.5"/>
                <circle cx="30" cy="28" r="6" stroke="#1a73e8" strokeWidth="2.5"/>
                <path d="M16 40C16 35 20 32 25 32M44 40C44 35 40 32 35 32" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M23 38C23 34 26 32 30 32C34 32 37 34 37 38" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="story-label">Employees</h3>
            <p className="story-number">{formatNumber(counts.employees, '+')}</p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 28L25 38M25 28L35 38" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 20C22 17 24 15 27 15H33C36 15 38 17 38 20V23H22V20Z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 23H43V42C43 43.6569 41.6569 45 40 45H20C18.3431 45 17 43.6569 17 42V23Z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="story-label">Financial Advisors</h3>
            <p className="story-number">{formatNumber(counts.advisors, '+')}</p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="38" cy="25" r="8" stroke="#1a73e8" strokeWidth="2.5"/>
                <path d="M38 22V25L40 27" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 35H28C29.1046 35 30 35.8954 30 37V40C30 41.1046 29.1046 42 28 42H18C16.8954 42 16 41.1046 16 40V37C16 35.8954 16.8954 35 18 35Z" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 35V30C23 28.8954 23.8954 28 25 28H30" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="story-label">Lending Partners</h3>
            <p className="story-number">{counts.partners}+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;