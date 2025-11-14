// import React, { useState } from 'react';
import '../css/news.css';

const News = () => {
  // const [showAll, setShowAll] = useState(false);

  const newsArticles = [
    {
      logo: '/logos/outlook.png',
      logoAlt: 'Home',
      category: 'Loan',
      title: "Dhanisha Navratri 2025: Banks & NBFCs Roll Out Special Schemes To Attract Borrowers",
      source: 'Outlook Money',
      timeAgo: '16 September'
    },
    {
      logo: '/logos/hindustan-times.png',
      logoAlt: 'Business',
      category: 'Business',
      title: "No EMI till possession scheme: 5 reasons why homebuyers should think twice",
      source: 'Hindustan Times',
      timeAgo: '1 September'
    },
    {
      logo: '/logos/economic-times.png',
      logoAlt: 'Home',
      category: 'Home',
      title: "Will the dream run for home loan borrowers continue despite RBI pausing repo rate?",
      source: 'Economic Times',
      timeAgo: '2 hours'
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-heading">In News & Media</h2>
        <p className="news-subheading">
          Know what we are up to, as reported by your favourite news outlets.
        </p>

        <div className="news-grid">
          {newsArticles.map((article, index) => (
            <div key={index} className="news-card">
              <div className="news-logo-container">
                <div className="news-logo-placeholder">{article.logoAlt}</div>
              </div>
              <div className="news-content">
                <span className="news-category">{article.category}</span>
                <h3 className="news-title">{article.title}</h3>
                <div className="news-footer">
                  <span className="news-source">{article.source}</span>
                  <span className="news-time">{article.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="news-button-container">
          <button className="news-view-btn">VIEW ALL</button>
        </div>

        <div className="news-partner-section">
          <div className="news-partner-content">
            <p className="news-partner-text">
              Partner With Andromeda To Grow Your Business
            </p>
            <button className="news-partner-btn">PARTNER WITH US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;