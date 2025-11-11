import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="aboutContainer">
      {/* Section 1: How Andromeda Became Andromeda */}
      <section className="aboutSection1">
        <div className="aboutHeader">
          <h1 className="aboutMainTitle">How Andromeda Became Andromeda.</h1>
          <p className="aboutSubtitle">A vision, 30 years in the making. And counting.</p>
        </div>

        <div className="aboutContent">
          <div className="aboutTextBlock">
            <h2 className="aboutSectionTitle">Background</h2>
            <p className="aboutText">
              Andromeda, earlier the trusted leadership of M/s. V. Subramanian, was launched
              in the year 1991 as a Direct Sales Associate for Citibank. Today, it is India's
              largest loan distribution network with a rich legacy that spreads across 1500+
              cities, 500+ branches, 3000+ employees, and an excellent distribution network
              of over 25,000 partners.
            </p>
          </div>
          <div className="aboutImageBlock">
            <img src="/api/placeholder/400/300" alt="Growth illustration" className="aboutImage" />
          </div>
        </div>

        <div className="aboutContent aboutContentReverse">
          <div className="aboutImageBlock">
            <img src="/api/placeholder/400/300" alt="Vision illustration" className="aboutImage" />
          </div>
          <div className="aboutTextBlock">
            <h2 className="aboutSectionTitle">Our Vision</h2>
            <p className="aboutText">
              By integrating its unmatched market expertise with the latest
              trends and developments in digital technology, Andromeda helps
              partners find the best financial products most suited to their
              customers' needs. Every year, over Rs. 1 lakh crore loans are
              disbursed by Andromeda's 62,000+ partners.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Timeline */}
      <section className="aboutSection2">
        <h2 className="aboutTimelineHeader">Moments to Remember</h2>
        <div className="aboutTimeline">
          <div className="aboutTimelineItem aboutTimelineLeft">
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">1991</h3>
              <p className="aboutTimelineText">Started as Direct Sales Associate</p>
            </div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">🏢</div>
            </div>
            <div className="aboutTimelineEmpty"></div>
          </div>

          <div className="aboutTimelineItem aboutTimelineRight">
            <div className="aboutTimelineEmpty"></div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">🏆</div>
            </div>
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2006-07</h3>
              <p className="aboutTimelineText">Ranked #1 In All India Channel Partners</p>
            </div>
          </div>

          <div className="aboutTimelineItem aboutTimelineLeft">
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2010-11</h3>
              <p className="aboutTimelineText">Non-Mandate expansion begins</p>
            </div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">📊</div>
            </div>
            <div className="aboutTimelineEmpty"></div>
          </div>

          <div className="aboutTimelineItem aboutTimelineRight">
            <div className="aboutTimelineEmpty"></div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">🤝</div>
            </div>
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2012</h3>
              <p className="aboutTimelineText">Launched Loan Distribution by Leveraging Expert Networks</p>
            </div>
          </div>

          <div className="aboutTimelineItem aboutTimelineLeft">
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2015</h3>
              <p className="aboutTimelineText">Forayed exclusively in Liability</p>
            </div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">📍</div>
            </div>
            <div className="aboutTimelineEmpty"></div>
          </div>

          <div className="aboutTimelineItem aboutTimelineRight">
            <div className="aboutTimelineEmpty"></div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">💰</div>
            </div>
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2023</h3>
              <p className="aboutTimelineText">Started Wealth Business</p>
            </div>
          </div>

          <div className="aboutTimelineItem aboutTimelineLeft">
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2024</h3>
              <p className="aboutTimelineText">Established Gold Loans & Real Estate launch</p>
            </div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">🏅</div>
            </div>
            <div className="aboutTimelineEmpty"></div>
          </div>

          <div className="aboutTimelineItem aboutTimelineRight">
            <div className="aboutTimelineEmpty"></div>
            <div className="aboutTimelineIcon">
              <div className="aboutIconCircle">🚀</div>
            </div>
            <div className="aboutTimelineContent">
              <h3 className="aboutTimelineYear">2025</h3>
              <p className="aboutTimelineText">Launched IPLX - In-Store PoS, Klarna</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;