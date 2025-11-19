import React from 'react';
import { Building2, Trophy, TrendingUp, Handshake, MapPin, DollarSign, Award, Rocket } from 'lucide-react';
import '../css/About.css';

const AboutUs = () => {
  const journeyMilestones = [
    {
      year: '1991',
      title: 'Started as Direct Sales Associate',
      icon: Building2,
      description: 'Began our journey as a trusted partner with Citibank'
    },
    {
      year: '2006-07',
      title: 'Ranked #1 In All India Channel Partners',
      icon: Trophy,
      description: 'Achieved national recognition for excellence'
    },
    {
      year: '2010-11',
      title: 'Non-Mandate Expansion Begins',
      icon: TrendingUp,
      description: 'Expanded beyond traditional boundaries'
    },
    {
      year: '2012',
      title: 'Launched Loan Distribution',
      icon: Handshake,
      description: 'Revolutionized lending by leveraging expert networks'
    },
    {
      year: '2015',
      title: 'Forayed Exclusively in Liability',
      icon: MapPin,
      description: 'Diversified into comprehensive financial solutions'
    },
    {
      year: '2023',
      title: 'Started Wealth Business',
      icon: DollarSign,
      description: 'Expanded into wealth management services'
    },
    {
      year: '2024',
      title: 'Gold Loans & Real Estate Launch',
      icon: Award,
      description: 'Established presence in gold financing and real estate'
    },
    {
      year: '2025',
      title: 'Launched IPLX - In-Store PoS',
      icon: Rocket,
      description: 'Pioneering next-generation point-of-sale solutions'
    }
  ];

  const stats = [
    { value: '1500+', label: 'Cities' },
    { value: '500+', label: 'Branches' },
    { value: '3000+', label: 'Employees' },
    { value: '62,000+', label: 'Partners' },
    { value: '₹1L Cr+', label: 'Annual Disbursement' }
  ];

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="aboutus-hero-section">
        <div className="aboutus-hero-content">
          <h1 className="aboutus-hero-title">About Andromeda</h1>
          <p className="aboutus-hero-subtitle">India's Largest Loan Distribution Network</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="aboutus-intro-section">
        <div className="aboutus-content-wrapper">
          <div className="aboutus-intro-card">
            <h2 className="aboutus-section-title">Our Story</h2>
            <p className="aboutus-intro-text">
              Andromeda, under the trusted leadership of M/s. V. Subramanian, was launched in 1991 as a Direct Sales Associate for Citibank. Today, we stand as India's largest loan distribution network with a rich legacy that spreads across the nation.
            </p>
            <p className="aboutus-intro-text">
              With an unmatched presence spanning 1500+ cities, 500+ branches, 3000+ employees, and an excellent distribution network of over 25,000 partners, we continue to redefine financial services in India.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="aboutus-vision-section">
        <div className="aboutus-content-wrapper">
          <h2 className="aboutus-section-title aboutus-vision-title">Our Vision</h2>
          <div className="aboutus-vision-card">
            <p className="aboutus-vision-text">
              By integrating our unmatched market expertise with the latest trends and developments in digital technology, Andromeda helps partners find the best financial products most suited to their customers' needs.
            </p>
            <p className="aboutus-vision-highlight">
              Every year, over ₹1 lakh crore loans are disbursed by Andromeda's 62,000+ partners.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="aboutus-stats-section">
        <div className="aboutus-content-wrapper">
          <div className="aboutus-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="aboutus-stat-card">
                <div className="aboutus-stat-value">{stat.value}</div>
                <div className="aboutus-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="aboutus-journey-section">
        <div className="aboutus-content-wrapper">
          <h2 className="aboutus-section-title aboutus-journey-title">Our Journey</h2>
          <p className="aboutus-section-subtitle aboutus-journey-subtitle">Moments to Remember</p>
          
          <div className="aboutus-timeline">
            {journeyMilestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="aboutus-timeline-item">
                  <div className="aboutus-timeline-marker">
                    <div className="aboutus-timeline-icon">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="aboutus-timeline-content">
                    <div className="aboutus-timeline-year">{milestone.year}</div>
                    <h3 className="aboutus-timeline-title">{milestone.title}</h3>
                    <p className="aboutus-timeline-description">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="aboutus-cta-section">
        <div className="aboutus-content-wrapper">
          <div className="aboutus-cta-card">
            <h2 className="aboutus-cta-title">Join Our Network</h2>
            <p className="aboutus-cta-text">
              Be part of India's most trusted loan distribution network
            </p>
            <button className="aboutus-cta-button">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;