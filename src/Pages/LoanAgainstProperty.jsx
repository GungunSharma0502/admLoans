import React, { useState } from 'react';
import './LoanAgainstProperty.css';

const LoanAgainstProperty = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenure, setTenure] = useState(10);
  const [interestRate, setInterestRate] = useState(10.5);

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

  const features = [
    {
      icon: "🏠",
      title: "Secured Loan",
      description: "The loan is secured against the value of your property. The property acts as collateral, reducing the risk for the lender. This generally leads to lower interest rates compared to unsecured loans."
    },
    {
      icon: "💰",
      title: "Loan Amount",
      description: "The loan amount is determined based on the value of the property you pledge. Generally, you can get a higher loan amount compared to personal loans or other unsecured loans."
    },
    {
      icon: "⏳",
      title: "Flexible Tenure",
      description: "The tenure (repayment period) for a Loan Against Property is usually longer compared to other types of loans, often ranging from 5 to 20 years. This allows for lower monthly installments."
    },
    {
      icon: "🎯",
      title: "Multipurpose",
      description: "The loan amount can be used for a wide range of purposes, giving you the flexibility to address various financial needs without any restrictions."
    },
    {
      icon: "📊",
      title: "Improves Credit Scores",
      description: "Successfully repaying a Loan Against Property can positively impact your credit score, as it demonstrates responsible borrowing behavior."
    }
  ];

  const reviews = [
    {
      name: "DHWANI DAVE",
      rating: 4,
      text: "GreenBunch helped me find the appropriate lender offering me the best interest rates and terms & conditions for purchasing a warehouse to setup my manufacturing unit. Within a span of 20 days my loan against property got approved and disbursed."
    },
    {
      name: "MANN DESAI",
      rating: 4,
      text: "Not having the proper knowledge of how to use and repay the loans I got under a debt of 37 lacs from 4 various banks and the rate of interest of all the loans being high it was getting very difficult for me to repay all the loans together and keeping a track of all the EMI's. I then read a blog of debt consolidation posted by GreenBunch in which I got knowledge about it."
    },
    {
      name: "PRERANA SONI",
      rating: 4,
      text: "I really liked the loan against property by GreenBunch. The moment I applied for it I got a call from their representative for further process. My documents were collected from home and the process was completed on time. A big thanks to GreenBunch."
    },
    {
      name: "ADITI GANGWAL",
      rating: 4,
      text: "My loan against property was taken through GreenBunch. It was a smooth process and they regularly updated me with the developments. Even they sanctioned my loan in a proper time frame. Surely recommended."
    }
  ];

  const faqs = [
    {
      question: "What can I use a Loan Against Property for?",
      answer: "You can use LAP for various purposes including business expansion, education, medical emergencies, debt consolidation, wedding expenses, home renovation, or any other personal or business needs."
    },
    {
      question: "How much loan can I get against my property?",
      answer: "Typically, lenders offer 50-70% of the property's market value as a loan. The amount ranges from Rs. 10 Lakh to Rs. 5 Crore, depending on the property value and your eligibility."
    },
    {
      question: "What are the interest rates for LAP?",
      answer: "Interest rates for LAP typically range from 8.5% to 14% per annum, depending on the lender, your credit profile, and property value. Secured nature of the loan ensures lower rates compared to unsecured loans."
    },
    {
      question: "Can I still use my property if it's mortgaged for LAP?",
      answer: "Yes, you can continue to live in or use your property even after mortgaging it for LAP. The lender only holds the property documents as security until the loan is fully repaid."
    },
    {
      question: "What is a Loan Against Property Overdraft (LAP OD)?",
      answer: "LAP OD is a flexible credit facility where you can withdraw funds as needed up to a sanctioned limit, and interest is charged only on the amount utilized, not the entire sanctioned amount."
    },
    {
      question: "Can I prepay/foreclose my Loan Against Property in advance?",
      answer: "Yes, most lenders allow prepayment or foreclosure of LAP. However, some may charge a foreclosure fee ranging from 0% to 4%, so check with your lender about their specific terms."
    },
    {
      question: "What types of properties are accepted by lenders?",
      answer: "Lenders accept residential, commercial, and industrial properties. This includes apartments, independent houses, plots, shops, offices, warehouses, and manufacturing units."
    }
  ];

  return (
    <div className="loanagainst-page-container">
      <div className="loanagainst-header-section">
        <div className="loanagainst-header-overlay"></div>
        <div className="loanagainst-header-content">
          <h1 className="loanagainst-main-heading">LOAN AGAINST PROPERTY</h1>
          <p className="loanagainst-header-subtitle">Turn Your Property into Capital with Ease</p>
          <button className="loanagainst-header-cta">Apply Now</button>
        </div>
      </div>

      <nav className="loanagainst-nav-bar loanagainst-glass">
        <div className="loanagainst-nav-content">
          <div className="loanagainst-nav-links">
            {['overview', 'features', 'eligibility', 'documents', 'emi-calculator', 'fees', 'reviews', 'faqs'].map((section) => (
              <button
                key={section}
                className={`loanagainst-nav-link ${activeSection === section ? 'loanagainst-active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="loanagainst-content-wrapper">
        <section id="overview" className="loanagainst-section">
          <div className="loanagainst-glass-card loanagainst-hero-card">
            <h2 className="loanagainst-section-title">Loan Against Property Features</h2>
            <div className="loanagainst-overview-grid">
              <div className="loanagainst-overview-item">
                <div className="loanagainst-icon">✓</div>
                <h3>Flexible Loan Eligibility</h3>
                <p>Easy approval process with flexible eligibility criteria tailored to your needs</p>
              </div>
              <div className="loanagainst-overview-item">
                <div className="loanagainst-icon">₹</div>
                <h3>Loans value from Rs.10 Lakh to Rs. 5 Crore</h3>
                <p>Get substantial funding based on your property value</p>
              </div>
              <div className="loanagainst-overview-item">
                <div className="loanagainst-icon">🏢</div>
                <h3>Loans against commercial, residential or industrial property</h3>
                <p>Mortgage any type of property for your loan requirements</p>
              </div>
              <div className="loanagainst-overview-item">
                <div className="loanagainst-icon">🎯</div>
                <h3>Loan for your business as well as personal needs</h3>
                <p>Use funds for any purpose without restrictions</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="loanagainst-section">
          <h2 className="loanagainst-section-title">Features and Benefits</h2>
          <div className="loanagainst-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="loanagainst-glass-card loanagainst-feature-card">
                <div className="loanagainst-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="eligibility" className="loanagainst-section">
          <h2 className="loanagainst-section-title">Eligibility Criteria</h2>
          <div className="loanagainst-eligibility-container">
            <div className="loanagainst-glass-card">
              <h3>Nationality</h3>
              <p>You need to be a Citizen of India with documents to prove your claim.</p>
            </div>
            <div className="loanagainst-glass-card">
              <h3>Occupation and Income</h3>
              <p>Your lender will require you to furnish details regarding your occupation and income to prove your professional and financial stability to determine your creditworthiness.</p>
            </div>
            <div className="loanagainst-glass-card">
              <h3>Credit History</h3>
              <p>Your three-digit Credit Score, indicative of your track record in respect of repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility for a LAP.</p>
            </div>
            <div className="loanagainst-glass-card">
              <h3>Banking Relationship</h3>
              <p>Should you have a healthy relationship with your lender, you will not be disapproved for a LAP. Additionally, your lender will offer you better terms and conditions.</p>
            </div>
            <div className="loanagainst-glass-card">
              <h3>Market Value of Property</h3>
              <p>Your lender retains the right to decide the loan amount and terms based on the market value of your collateral property. The market value must be higher than the loan amount.</p>
            </div>
            <div className="loanagainst-glass-card">
              <h3>Title of Property</h3>
              <p>You must be the current owner of the property with clear title. In case of co-application, multiple ownership clear title is required. The property must not be mortgaged with any other financial institution.</p>
            </div>
          </div>
        </section>

        <section id="documents" className="loanagainst-section">
          <h2 className="loanagainst-section-title">Required Documents</h2>
          <div className="loanagainst-glass-card loanagainst-documents-card">
            <p className="loanagainst-documents-intro">Submit the following documents to begin with the loan process:</p>
            <div className="loanagainst-documents-list">
              <div className="loanagainst-doc-item">
                <h4>Proof of Identity/Residence</h4>
                <p>PAN Card, Aadhaar Card, Voter ID, Passport, Driving License</p>
              </div>
              <div className="loanagainst-doc-item">
                <h4>Proof of Income</h4>
                <p>Salary slips (last 3 months), Bank statements (last 6 months), ITR for last 2 years</p>
              </div>
              <div className="loanagainst-doc-item">
                <h4>Property-Related Documents</h4>
                <p>Title deed, Sale agreement, Property tax receipts, Approved building plan, Occupancy certificate</p>
              </div>
              <div className="loanagainst-doc-item">
                <h4>Proof of Business (for self-employed)</h4>
                <p>Business registration documents, GST registration, Financial statements, Profit & Loss statements</p>
              </div>
              <div className="loanagainst-doc-item">
                <h4>Account Statement</h4>
                <p>Bank account statement for the last 6 months showing all transactions</p>
              </div>
            </div>
          </div>
        </section>

        <section id="emi-calculator" className="loanagainst-section">
          <h2 className="loanagainst-section-title">EMI Calculator</h2>
          <div className="loanagainst-glass-card loanagainst-calculator-card">
            <div className="loanagainst-calculator-info">
              <h3>How is Loan Against Property EMI Calculated?</h3>
              <p>EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]</p>
              <p className="loanagainst-formula-detail">Where: P = Principal amount, r = Monthly interest rate, n = Tenure in months</p>
            </div>
            <div className="loanagainst-calculator-inputs">
              <div className="loanagainst-input-group">
                <label>Loan Amount (₹)</label>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <span className="loanagainst-input-value">₹ {loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="loanagainst-input-group">
                <label>Tenure (Years)</label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
                <span className="loanagainst-input-value">{tenure} Years</span>
              </div>
              <div className="loanagainst-input-group">
                <label>Interest Rate (%)</label>
                <input
                  type="range"
                  min="8.5"
                  max="16"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <span className="loanagainst-input-value">{interestRate}%</span>
              </div>
            </div>
            <div className="loanagainst-emi-result">
              <h3>Your Monthly EMI</h3>
              <div className="loanagainst-emi-amount">₹ {Number(calculateEMI()).toLocaleString('en-IN')}</div>
              <p className="loanagainst-emi-note">Total Amount: ₹ {(calculateEMI() * tenure * 12).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
            </div>
          </div>
        </section>

        <section id="fees" className="loanagainst-section">
          <h2 className="loanagainst-section-title">Fees and Charges</h2>
          <div className="loanagainst-glass-card loanagainst-table-card">
            <p className="loanagainst-fees-intro">The fees and charges of property loans usually vary from lender to lender and from case to case.</p>
            <table className="loanagainst-fees-table">
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
                <tr>
                  <td>Foreclosure</td>
                  <td>Nil to 4% (According to bank/NBFC)</td>
                </tr>
              </tbody>
            </table>
            <p className="loanagainst-fees-note">Other fees and charges may include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap.</p>
          </div>
        </section>

        <section id="reviews" className="loanagainst-section">
          <h2 className="loanagainst-section-title">Customer Reviews</h2>
          <div className="loanagainst-reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="loanagainst-glass-card loanagainst-review-card">
                <div className="loanagainst-review-header">
                  <div className="loanagainst-review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'loanagainst-star loanagainst-filled' : 'loanagainst-star'}>★</span>
                    ))}
                  </div>
                  <h4>{review.name}</h4>
                </div>
                <p className="loanagainst-review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faqs" className="loanagainst-section">
          <h2 className="loanagainst-section-title">Frequently Asked Questions</h2>
          <div className="loanagainst-faqs-container">
            {faqs.map((faq, index) => (
              <div key={index} className="loanagainst-glass-card loanagainst-faq-card">
                <h3 className="loanagainst-faq-question">{faq.question}</h3>
                <p className="loanagainst-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="loanagainst-cta-section loanagainst-glass-card">
          <h2>Ready to Unlock Your Property's Value?</h2>
          <p>Get the best Loan Against Property deals at a Lower Interest Rate</p>
          <button className="loanagainst-cta-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default LoanAgainstProperty;