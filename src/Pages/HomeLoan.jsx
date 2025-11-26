import React, { useState } from 'react';
import './HomeLoan.css';

const HomeLoan = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [tenure, setTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure * 12;
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return emi.toFixed(2);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const reviews = [
    {
      name: "SAMYAK SANCHETI",
      rating: 4,
      text: "I was going through a low in my business and was unable to get financial support from lenders. Under these circumstances, Sahil from GreenBunch suggested me to apply for a top-up home loan and use that money to fund my business. Thanks to the top-up home loan facility that helped my business to survive even in the odds."
    },
    {
      name: "ROHAN GAIKWAD",
      rating: 4,
      text: "I took a Home Loan for 20,00,000 from SBI via GreenBunch. I received a Home loan at a sparkling rate of 6.90%. Being a government employee I was offered low processing fees and other charges were minimal. I am very happy and suggest you check GreenBunch for the best home loan options"
    },
    {
      name: "JITENDRA SINGH",
      rating: 4,
      text: "I got home loan offer from HDFC Limited through GreenBunch. Earlier I was choosing some other bank but GreenBunch facility of comparison helped me with a better choice.The amount was sufficient with tenure period of 15 years. The rate of interest is moderate."
    },
    {
      name: "MANOJ JADHAV",
      rating: 4,
      text: "First, I used GreenBunch emi calculator to check the approximate EMI for a home loan. I found the website very good and then I applied for a home loan with KOTAK bank from here. My loan got approved in 10 days only."
    }
  ];

  const faqs = [
    {
      question: "What is a home loan?",
      answer: "A home loan is a secured loan offered by financial institutions to help individuals purchase, construct, or renovate residential property. The property acts as collateral for the loan."
    },
    {
      question: "How do I qualify for a home loan?",
      answer: "Qualification depends on factors like age (21-65 years), income (minimum Rs. 10,000/month for salaried), employment stability, and credit score (750+ recommended)."
    },
    {
      question: "Can I prepay my home loan?",
      answer: "Yes, you can prepay your home loan through full prepayment or part prepayment. Full prepayment closes the loan completely, while part prepayment reduces the principal amount."
    },
    {
      question: "Is it possible to secure a 100% home loan from a bank?",
      answer: "Most banks offer up to 80-90% of the property value as a home loan. A 100% home loan is rare and depends on your eligibility and the lender's policies."
    },
    {
      question: "What is the maximum home loan that I can get?",
      answer: "The maximum loan amount depends on your income, repayment capacity, credit score, and property value. Lenders typically use income multiples and EMI-to-income ratios to determine eligibility."
    }
  ];

  return (
    <div className="homeloan-page-container">
      <div className="homeloan-header-section">
        <div className="homeloan-header-overlay"></div>
        <div className="homeloan-header-content">
          <h1 className="homeloan-main-heading">HOME LOAN</h1>
          <p className="homeloan-header-subtitle">Your Dream Home Awaits</p>
        </div>
      </div>

      <nav className="homeloan-nav-bar homeloan-glass">
        <div className="homeloan-nav-content">
          <div className="homeloan-nav-links">
            {['overview', 'features', 'eligibility', 'documents', 'emi-calculator', 'fees', 'reviews', 'faqs'].map((section) => (
              <button
                key={section}
                className={`homeloan-nav-link ${activeSection === section ? 'homeloan-active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="homeloan-content-wrapper">
        <section id="overview" className="homeloan-section">
          <div className="homeloan-glass-card homeloan-hero-card">
            <h2 className="homeloan-section-title">Home Loan Overview</h2>
            <div className="homeloan-hero-content">
              <div className="homeloan-feature-grid">
                <div className="homeloan-feature-item">
                  <div className="homeloan-feature-icon">💰</div>
                  <h3>Attractive Interest Rates</h3>
                  <p>Get competitive rates starting from 6.90%</p>
                </div>
                <div className="homeloan-feature-item">
                  <div className="homeloan-feature-icon">📄</div>
                  <h3>Minimal Documentation</h3>
                  <p>Quick and hassle-free loan processing</p>
                </div>
                <div className="homeloan-feature-item">
                  <div className="homeloan-feature-icon">⏳</div>
                  <h3>30 Years of Tenure</h3>
                  <p>Flexible repayment options up to 30 years</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="homeloan-section">
          <h2 className="homeloan-section-title">Features and Benefits</h2>
          <div className="homeloan-features-grid">
            <div className="homeloan-glass-card homeloan-feature-card">
              <h3>🏗️ Home Construction Loan</h3>
              <p>If you have a plot of land and lack financial support to construct a home on that piece of property, you may choose a house construction loan. Such borrowing is mainly made to construct or repair a major part of your home.</p>
            </div>
            <div className="homeloan-glass-card homeloan-feature-card">
              <h3>🏡 Home Extension Loan</h3>
              <p>Should you already own a home, and feel the need to extend the building, add an annexe, or build another floor, Home Extension Loan is your go-to option that finances such needs.</p>
            </div>
            <div className="homeloan-glass-card homeloan-feature-card">
              <h3>🔨 Home Improvement Loan</h3>
              <p>All of us wish to improve and upgrade our homes for a better life. From your old-age furniture, fixtures to faulty lightning systems, Home Improvement Loan funds all your plans.</p>
            </div>
            <div className="homeloan-glass-card homeloan-feature-card">
              <h3>🌍 NRI Home Loan</h3>
              <p>If you are a patriot, a Non-Resident Indian, and wish to own residential property in India, NRI Home Loan is your answer. Though the formalities for application may be a little different.</p>
            </div>
          </div>
        </section>

        <section id="eligibility" className="homeloan-section">
          <h2 className="homeloan-section-title">Eligibility Criteria</h2>
          <div className="homeloan-eligibility-container">
            <div className="homeloan-glass-card">
              <h3>Age Requirements</h3>
              <p><strong>Salaried Person:</strong> 21 to 58 years</p>
              <p><strong>Self-Employed Person:</strong> 25 to 65 years</p>
            </div>
            <div className="homeloan-glass-card">
              <h3>Income Requirements</h3>
              <p><strong>Salaried Person:</strong> Minimum Rs. 10,000 per month</p>
              <p><strong>Self-Employed Person:</strong> Minimum Rs. 2,00,000 per year</p>
            </div>
            <div className="homeloan-glass-card">
              <h3>Employment</h3>
              <p><strong>Salaried:</strong> Minimum 2-3 years in MNC, Private or Public Limited Company</p>
              <p><strong>Self-Employed:</strong> Minimum 3 years in current field</p>
            </div>
            <div className="homeloan-glass-card">
              <h3>Credit Score</h3>
              <p>A credit score of <strong>750 or above</strong> is considered good for approval</p>
            </div>
          </div>
        </section>

        <section id="documents" className="homeloan-section">
          <h2 className="homeloan-section-title">Required Documents</h2>
          <div className="homeloan-documents-grid">
            <div className="homeloan-glass-card homeloan-document-card">
              <h3>Salaried Individuals</h3>
              <ul>
                <li>Form 16</li>
                <li>Employee Identity Card</li>
                <li>3 Months Salary Slip</li>
                <li>6 Month Bank Account Statement</li>
                <li>Duration of Employment Evidence</li>
              </ul>
            </div>
            <div className="homeloan-glass-card homeloan-document-card">
              <h3>Self-Employed Individuals</h3>
              <ul>
                <li>PAN Card</li>
                <li>Trade License</li>
                <li>Partnership Deed</li>
                <li>Financial Statement Audited by CA</li>
                <li>Profit & Loss Account Statement</li>
                <li>6 Months Bank Account Statement</li>
                <li>Business Address Proof</li>
              </ul>
            </div>
            <div className="homeloan-glass-card homeloan-document-card">
              <h3>Property Documents</h3>
              <ul>
                <li>Sale Deed</li>
                <li>Stamped Agreement of Sale</li>
                <li>Allotment Letter</li>
                <li>NOC from Housing Society/Builder</li>
                <li>Possession Certificate</li>
                <li>Land Tax Receipt</li>
                <li>Occupancy Certificate</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="emi-calculator" className="homeloan-section">
          <h2 className="homeloan-section-title">EMI Calculator</h2>
          <div className="homeloan-glass-card homeloan-calculator-card">
            <div className="homeloan-calculator-inputs">
              <div className="homeloan-input-group">
                <label>Loan Amount (₹)</label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <span className="homeloan-input-value">₹ {loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="homeloan-input-group">
                <label>Tenure (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
                <span className="homeloan-input-value">{tenure} Years</span>
              </div>
              <div className="homeloan-input-group">
                <label>Interest Rate (%)</label>
                <input
                  type="range"
                  min="6"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <span className="homeloan-input-value">{interestRate}%</span>
              </div>
            </div>
            <div className="homeloan-emi-result">
              <h3>Your Monthly EMI</h3>
              <div className="homeloan-emi-amount">₹ {Number(calculateEMI()).toLocaleString('en-IN')}</div>
              <p className="homeloan-emi-note">Total Amount: ₹ {(calculateEMI() * tenure * 12).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
            </div>
          </div>
        </section>

        <section id="fees" className="homeloan-section">
          <h2 className="homeloan-section-title">Fees and Charges</h2>
          <div className="homeloan-glass-card homeloan-table-card">
            <table className="homeloan-fees-table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loan Processing Fees</td>
                  <td>0.25% to 2% of Loan Amount</td>
                </tr>
                <tr>
                  <td>Loan Cancellation</td>
                  <td>Nil - 5% (according to Bank/NBFC)</td>
                </tr>
                <tr>
                  <td>Stamp Duty Charges</td>
                  <td>As per the Value of the Property and State Tax</td>
                </tr>
                <tr>
                  <td>Legal Fees</td>
                  <td>As per actual</td>
                </tr>
                <tr>
                  <td>Penal Charges</td>
                  <td>Usually 2% per month</td>
                </tr>
                <tr>
                  <td>EMI / Cheque Bounce Charges</td>
                  <td>Approx ₹500/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="reviews" className="homeloan-section">
          <h2 className="homeloan-section-title">Customer Reviews</h2>
          <div className="homeloan-reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="homeloan-glass-card homeloan-review-card">
                <div className="homeloan-review-header">
                  <div className="homeloan-review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'homeloan-star homeloan-filled' : 'homeloan-star'}>★</span>
                    ))}
                  </div>
                  <h4>{review.name}</h4>
                </div>
                <p className="homeloan-review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faqs" className="homeloan-section">
          <h2 className="homeloan-section-title">Frequently Asked Questions</h2>
          <div className="homeloan-faqs-container">
            {faqs.map((faq, index) => (
              <div key={index} className="homeloan-glass-card homeloan-faq-card">
                <h3 className="homeloan-faq-question">{faq.question}</h3>
                <p className="homeloan-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="homeloan-cta-section homeloan-glass-card">
          <h2>Ready to Apply?</h2>
          <p>Get your dream home loan with attractive rates and minimal documentation</p>
          <button className="homeloan-cta-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;