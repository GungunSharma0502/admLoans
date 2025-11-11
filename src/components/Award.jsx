import React, { useEffect, useRef } from 'react';
import '../css/Award.css';

const Award = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let scrollPosition = 0;

    const smoothScroll = () => {
      if (slider) {
        scrollPosition += 0.5; // Speed control (increase for faster scroll)
        
        const maxScroll = slider.scrollWidth / 2; // Divide by 2 because we duplicated awards
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        slider.scrollLeft = scrollPosition;
      }
      
      animationId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const awards = [
    {
      id: 1,
      icon: '🏆',
      title: 'FROM SMFG India Credit',
      bgColor: '#8b2500'
    },
    {
      id: 2,
      icon: '🥇',
      title: 'FROM IDFC FIRST BANK',
      bgColor: '#d4af37'
    },
    {
      id: 3,
      icon: '📜',
      title: 'FROM FEDERAL BANK',
      bgColor: '#708090'
    },
    {
      id: 4,
      icon: '🏆',
      title: 'FROM HERO FIN CORP',
      bgColor: '#8b4513'
    },
    {
      id: 5,
      icon: '🏅',
      title: 'FROM HDFC 2022',
      bgColor: '#4a4a4a'
    },
    {
      id: 6,
      icon: '🏆',
      title: 'FROM PAYSENSE',
      bgColor: '#228b22'
    }
  ];

  // Triple the awards for seamless infinite scroll
  const infiniteAwards = [...awards, ...awards, ...awards];

  return (
    <section className="award-section">
      <div className="award-container">
        <div className="award-header">
          <h2 className="award-title">Our Certificates & Awards</h2>
          <p className="award-subtitle">Andromeda's achievements so far.</p>
        </div>

        <div className="award-top-certificates">
          <div className="award-top-card">
            <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=200&h=200&fit=crop" alt="ISO Certification" className="award-top-img" />
          </div>
          <div className="award-top-card">
            <img src="https://images.unsplash.com/photo-1618428974669-4a29a6e1f0f7?w=200&h=200&fit=crop" alt="ASCB Certification" className="award-top-img" />
          </div>
          <div className="award-top-card">
            <img src="https://images.unsplash.com/photo-1595503240812-7286dafaddc1?w=200&h=200&fit=crop" alt="Best Brand Award" className="award-top-img" />
          </div>
        </div>
      </div>

      <div className="award-slider-wrapper">
        <div className="award-slider" ref={sliderRef}>
          <div className="award-slider-track">
            {infiniteAwards.map((award, index) => (
              <div key={`${award.id}-${index}`} className="award-card">
                <div className="award-laurel-left">🌿</div>
                <div className="award-laurel-right">🌿</div>
                
                <div className="award-icon" style={{ backgroundColor: award.bgColor }}>
                  <span>{award.icon}</span>
                </div>
                <p className="award-card-title">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;