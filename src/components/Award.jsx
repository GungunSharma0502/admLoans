import React from 'react';
import '../css/Award.css';

const Award = () => {
  const awards = [
    {
      id: 1,
      icon: '🏆',
      title: 'FROM SMFG India Credit',
      bgColor: '#1e40af'
    },
    {
      id: 2,
      icon: '🥇',
      title: 'FROM IDFC FIRST BANK',
      bgColor: '#3b82f6'
    },
    {
      id: 3,
      icon: '📜',
      title: 'FROM FEDERAL BANK',
      bgColor: '#60a5fa'
    },
    {
      id: 4,
      icon: '🏆',
      title: 'FROM HERO FIN CORP',
      bgColor: '#2563eb'
    },
    {
      id: 5,
      icon: '🏅',
      title: 'FROM HDFC 2022',
      bgColor: '#1d4ed8'
    },
    {
      id: 6,
      icon: '🏆',
      title: 'FROM PAYSENSE',
      bgColor: '#3b82f6'
    }
  ];

  // Double the awards for seamless loop
  const doubleAwards = [...awards, ...awards];

  return (
    <div className="award-section">
      {/* Animated Background */}
      <div className="award-background-animation"></div>
      <div className="award-dots-pattern"></div>

      <div className="award-container">
        {/* Header */}
        <div className="award-header">
          <h2 className="award-title">
            <span className="award-title-gradient">Our Certificates</span> & Awards
          </h2>
          <p className="award-subtitle">Andromeda's achievements so far.</p>
        </div>

        {/* Slider Section */}
        <div className="award-slider-wrapper">
          <div className="award-slider">
            <div className="award-slider-track">
              {doubleAwards.map((award, index) => (
                <div 
                  key={`${award.id}-${index}`} 
                  className="award-card"
                >
                  <div className="award-card-gradient-bg"></div>
                  
                  <div className="award-laurel award-laurel-left">🌿</div>
                  <div className="award-laurel award-laurel-right">🌿</div>
                  
                  <div className="award-icon" style={{backgroundColor: award.bgColor}}>
                    <span>{award.icon}</span>
                  </div>
                  <p className="award-card-title">{award.title}</p>

                  <div className="award-card-glow-effect"></div>
                  <div className="award-card-shine"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;