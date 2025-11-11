import React, { useState } from 'react';
import '../css/trust.css';

const Trust = () => {
  const [showAll, setShowAll] = useState(false);

  const firstRowBrands = [
    { name: 'IDFC First Bank', logo: '/logos/idfc.png' },
    { name: 'Aditya Birla Finance', logo: '/logos/aditya-birla.png' },
    { name: 'Tata Capital Housing Finance', logo: '/logos/tata-housing.png' },
    { name: 'Tata Capital', logo: '/logos/tata-capital.png' },
    { name: 'IIFL', logo: '/logos/iifl.png' },
    { name: 'Indiabulls', logo: '/logos/indiabulls.png' },
    { name: 'Piramal Finance', logo: '/logos/piramal.png' },
    { name: 'Shriram City', logo: '/logos/shriram.png' }
  ];

  const secondRowBrands = [
    { name: 'U GRO Capital', logo: '/logos/ugro.png' },
    { name: 'Poonawalla Fincorp', logo: '/logos/poonawalla.png' },
    { name: 'Vastu Housing Finance', logo: '/logos/vastu.png' },
    { name: 'Sundaram Finance', logo: '/logos/sundaram.png' },
    { name: 'DBS', logo: '/logos/dbs.png' },
    { name: 'SBI', logo: '/logos/sbi.png' },
    { name: 'Arka Fincap', logo: '/logos/arka.png' },
    { name: 'Ashv Finance', logo: '/logos/ashv.png' },
    { name: 'Bajaj Housing Finance', logo: '/logos/bajaj.png' },
    { name: 'Credit Saison', logo: '/logos/saison.png' },
    { name: 'Yes Bank', logo: '/logos/yes.png' },
    { name: 'Equitas', logo: '/logos/equitas.png' },
    { name: 'ftcash', logo: '/logos/ftcash.png' },
    { name: 'Vistaar', logo: '/logos/vistaar.png' },
    { name: 'Hindhuja Housing Finance', logo: '/logos/hindhuja.png' },
    { name: 'Indifi', logo: '/logos/indifi.png' }
  ];

  const thirdRowBrands = [
    { name: 'Fibe', logo: '/logos/fibe.png' },
    { name: 'HDFC Bank', logo: '/logos/hdfc.png' },
    { name: 'Syndicate Bank', logo: '/logos/syndicate.png' },
    { name: 'Motilal Oswal', logo: '/logos/motilal.png' },
    { name: 'Aditya Birla Capital', logo: '/logos/aditya-birla-capital.png' },
    { name: 'DCB Bank', logo: '/logos/dcb.png' },
    { name: 'DMI Housing Finance', logo: '/logos/dmi.png' },
    { name: 'Adyaz', logo: '/logos/adyaz.png' },
    { name: 'AU Small Finance Bank', logo: '/logos/au.png' },
    { name: 'Hero Housing Finance', logo: '/logos/hero.png' }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2 className="trust-heading">Brands who Trust Us</h2>
        <p className="trust-subheading">
          We are amongst the top 3 most-preferred channel partners for loans for India's
          widest network of Banks, NBFCs, and Fintech
        </p>

        {/* First Row - Always Visible */}
        <div className="trust-grid">
          {firstRowBrands.map((brand, index) => (
            <div key={index} className="trust-card">
              <div className="trust-logo-placeholder">{brand.name}</div>
            </div>
          ))}
        </div>

        {/* Second and Third Rows - Conditional */}
        {showAll && (
          <>
            <div className="trust-grid">
              {secondRowBrands.map((brand, index) => (
                <div key={index} className="trust-card">
                  <div className="trust-logo-placeholder">{brand.name}</div>
                </div>
              ))}
            </div>

            <div className="trust-grid">
              {thirdRowBrands.map((brand, index) => (
                <div key={index} className="trust-card">
                  <div className="trust-logo-placeholder">{brand.name}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Toggle Button */}
        <div className="trust-button-container">
          <button 
            className="trust-toggle-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'VIEW LESS' : 'VIEW ALL'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trust;