import React, { useState } from 'react';
import './BusinessLoan.css';

const BusinessLoan = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [tenure, setTenure] = useState(3);
  const [interestRate, setInterestRate] = useState(14);

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
      icon: "💼",
      title: "Term Loans",
      description: "Get lump sum funding for long-term business needs with fixed repayment schedules."
    },
    {
      icon: "💰",
      title: "Working Capital Loans",
      description: "Manage day-to-day operations and short-term financial needs efficiently."
    },
    {
      icon: "📈",
      title: "Business Expansion Loans",
      description: "Scale your business operations and enter new markets with dedicated funding."
    },
    {
      icon: "🏭",
      title: "Equipment Financing Loans",
      description: "Purchase or upgrade business equipment without depleting working capital."
    },
    {
      icon: "📄",
      title: "Invoice Financing & Bill Discounting",
      description: "Convert outstanding invoices into immediate cash flow for your business."
    },
    {
      icon: "⚙️",
      title: "Machinery Loans",
      description: "Finance the purchase of machinery and industrial equipment for your operations."
    }
  ];

  const reviews = [
    {
      name: "PRANALI FATAK",
      rating: 4,
      text: "All employees and staffs in RULOANS are helpful. They are very co-operative and try to clearly understand customer's needs. I felt very comfortable dealing with them through for my business loan from ICICI bank"
    },
    {
      name: "DHARA GORI",
      rating: 4,
      text: "I was a housewife and wanted to start my own kitchen for food delivery. RULOANS helped me to get a business loan from my preferred bank. The rate of interest is very much affordable and now I have started my kitchen, which is running very smoothly and is profitable."
    },
    {
      name: "SATISH UPARE",
      rating: 4,
      text: "I never thought getting a business loan will be this easy. Great thanks to RULOANS for offering such good platform for all loan requirements. I got business loans at 16% ROI and money was disbursed within 8 days of applying for loan"
    },
    {
      name: "SANJAY GANDHI",
      rating: 4,
      text: "I have figured applying for business startup loans through RULOANS is one of the smartest ways. If you are interested to save your time, efforts and money then you must try taking loan through RULOANS. Once you experience how good this platform will work for you, you will never think of other alternatives."
    }
  ];

  const faqs = [
    {
      question: "What is a business loan, and how much can one borrow?",
      answer: "A business loan is financing provided to businesses for various purposes. The borrowing amount depends on your business turnover, credit score, and repayment capacity, typically ranging from ₹50,000 to ₹50 crores."
    },
    {
      question: "Who can apply for a business loan?",
      answer: "Sole proprietors, partnerships, LLPs, private and public limited companies, retailers, traders, manufacturers, and MSMEs engaged in services, trading, and manufacturing sectors can apply."
    },
    {
      question: "What are requirements to get a business loan?",
      answer: "Key requirements include being 21-65 years old, minimum 1-2 years business vintage, stable turnover, profit-making business, credit score of 700+, and necessary documentation."
    },
    {
      question: "What is the minimum CIBIL Score required for a business loan?",
      answer: "A CIBIL score of 700 or above is preferred by most banks and NBFCs for business loan approval."
    },
    {
      question: "What can I use a business loan for?",
      answer: "You can use it for business expansion, purchasing equipment/inventory, hiring staff, marketing campaigns, renovating premises, managing cash flow, debt consolidation, or investing in new technology."
    },
    {
      question: "Can I pay off a business loan early?",
      answer: "Yes, most lenders allow prepayment of business loans. However, some may charge prepayment penalties, so check with your lender about their specific terms."
    }
  ];

  return (
    <div className="businessloan-page-container">
      <div className="businessloan-header-section">
        <div className="businessloan-header-overlay"></div>
        <div className="businessloan-header-content">
          <h1 className="businessloan-main-heading">BUSINESS LOAN</h1>
          <p className="businessloan-header-subtitle">Fuel Your Business Growth with Fast Financing</p>
          <button className="businessloan-header-cta">Apply Now</button>
        </div>
      </div>

      <nav className="businessloan-nav-bar businessloan-glass">
        <div className="businessloan-nav-content">
          <div className="businessloan-nav-links">
            {['overview', 'features', 'eligibility', 'documents', 'emi-calculator', 'fees', 'reviews', 'faqs'].map((section) => (
              <button
                key={section}
                className={`businessloan-nav-link ${activeSection === section ? 'businessloan-active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="businessloan-content-wrapper">
        <section id="overview" className="businessloan-section">
          <div className="businessloan-glass-card businessloan-hero-card">
            <h2 className="businessloan-section-title">Business Loan Overview</h2>
            <div className="businessloan-overview-grid">
              <div className="businessloan-overview-item">
                <div className="businessloan-number">1</div>
                <h3>Get high Business Loan Eligibility</h3>
                <p>Before applying for the loan, prepare a business plan, know your credit score, decide the loan amount, do some market research on available business loan options, and keep the documents ready.</p>
              </div>
              <div className="businessloan-overview-item">
                <div className="businessloan-number">2</div>
                <h3>Common Documents Required</h3>
                <p>Proof of address & photo identity proof of the promoters, business proof, income proof, partnership deed for partnership firm, articles of association, memorandum of association, board resolution, PAN card, etc.</p>
              </div>
              <div className="businessloan-overview-item">
                <div className="businessloan-number">3</div>
                <h3>Criteria for Business Loan Approval</h3>
                <p>Applicants should be aged between 21 to 65 years, having business vintage of a minimum of 1-2 years. The minimum business turnover and a minimum annual turnover as per the ITR will be required. The business should be profit-making for at least the last 1 year.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="businessloan-section">
          <h2 className="businessloan-section-title">Features and Benefits</h2>
          <div className="businessloan-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="businessloan-glass-card businessloan-feature-card">
                <div className="businessloan-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="eligibility" className="businessloan-section">
          <h2 className="businessloan-section-title">Eligibility Criteria</h2>
          <div className="businessloan-eligibility-container">
            <div className="businessloan-glass-card">
              <h3>Business Type</h3>
              <p>Most lenders provide loans to various types of businesses, including sole proprietorships, partnerships, limited liability companies (LLCs), corporations, and more.</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Credit Score</h3>
              <p>A credit score of <strong>700 or above</strong> is preferred by most private and public sector banks for business loan approval.</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Business Age & Vintage</h3>
              <p><strong>Business Vintage:</strong> Min. 1 year or above</p>
              <p><strong>Business Experience:</strong> Min. 1 year, business location to remain same</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Age Criteria</h3>
              <p><strong>Minimum:</strong> 21 years at the time of loan application</p>
              <p><strong>Maximum:</strong> 65 years at the time of loan maturity</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Annual Revenue</h3>
              <p>Lenders may have a minimum annual revenue requirement to ensure your business has a stable income. Annual turnover shall be defined by the Bank/NBFC.</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Eligible Entities</h3>
              <p>Individuals, MSMEs, Sole Proprietorships, Partnership Firms, Public and Private Limited Companies, LLPs, retailers, traders, manufacturers, and other non-farm income-generating business entities.</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Collateral</h3>
              <p>Secured loans might require assets as collateral. Collateral can be real estate, equipment, inventory, or other valuable assets.</p>
            </div>
            <div className="businessloan-glass-card">
              <h3>Additional Criteria</h3>
              <p><strong>Nationality:</strong> Indian citizens</p>
              <p>Applicants must own either a residence, office, shop, or Godown.</p>
            </div>
          </div>
        </section>

        <section id="documents" className="businessloan-section">
          <h2 className="businessloan-section-title">Required Documents</h2>
          <div className="businessloan-glass-card businessloan-documents-card">
            <p className="businessloan-documents-intro">The list of documents required for a business loan varies based on type of business entity. Submit the following documents to begin with the loan process:</p>
            <div className="businessloan-documents-list">
              <div className="businessloan-doc-item">✓ ITR for the past 2-3 years</div>
              <div className="businessloan-doc-item">✓ Current Bank Account Statement for the last 12 months</div>
              <div className="businessloan-doc-item">✓ Photocopy of PAN Card</div>
              <div className="businessloan-doc-item">✓ Address Proof for Residence (Voter Card, Passport, Aadhaar Card, Telephone Bill, Electricity Bill)</div>
              <div className="businessloan-doc-item">✓ Address proof for Business (Telephone Bill or Electricity Bill)</div>
              <div className="businessloan-doc-item">✓ Last Financial Year's provisional Financials and future year's projections</div>
              <div className="businessloan-doc-item">✓ Company's business profile on the letterhead</div>
              <div className="businessloan-doc-item">✓ 2 photographs of promoters and property owners</div>
              <div className="businessloan-doc-item">✓ Sanction letter and Repayment schedule of existing loan</div>
              <div className="businessloan-doc-item">✓ GST registration certificate and GST returns of latest 2 years</div>
              <div className="businessloan-doc-item">✓ D-Vat/Sale tax registration copy</div>
              <div className="businessloan-doc-item">✓ Udhyam Aadhaar registration certificate</div>
              <div className="businessloan-doc-item">✓ Rent agreement copy of factory and residence (if property is rented)</div>
              <div className="businessloan-doc-item">✓ Business Continuity proof of 3 years (3 years old ITR/Company registration etc)</div>
              <div className="businessloan-doc-item">✓ For Pvt Ltd: Company PAN Card, Certificate of Incorporation, MOA, AOA, List of Directors, Shareholding pattern</div>
              <div className="businessloan-doc-item">✓ For Partnership: Partnership Deed, Company PAN Card</div>
            </div>
          </div>
        </section>

        <section id="emi-calculator" className="businessloan-section">
          <h2 className="businessloan-section-title">EMI Calculator</h2>
          <div className="businessloan-glass-card businessloan-calculator-card">
            <div className="businessloan-calculator-info">
              <h3>How to use Business Loan EMI Calculator</h3>
              <p>Using a business loan EMI calculator can help you estimate your monthly loan repayment amount. Enter loan amount, interest rate, and tenure to calculate your EMI instantly.</p>
            </div>
            <div className="businessloan-calculator-inputs">
              <div className="businessloan-input-group">
                <label>Loan Amount (₹)</label>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <span className="businessloan-input-value">₹ {loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="businessloan-input-group">
                <label>Tenure (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
                <span className="businessloan-input-value">{tenure} Years</span>
              </div>
              <div className="businessloan-input-group">
                <label>Interest Rate (%)</label>
                <input
                  type="range"
                  min="10"
                  max="24"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <span className="businessloan-input-value">{interestRate}%</span>
              </div>
            </div>
            <div className="businessloan-emi-result">
              <h3>Your Monthly EMI</h3>
              <div className="businessloan-emi-amount">₹ {Number(calculateEMI()).toLocaleString('en-IN')}</div>
              <p className="businessloan-emi-note">Total Amount: ₹ {(calculateEMI() * tenure * 12).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
            </div>
          </div>
        </section>

        <section id="fees" className="businessloan-section">
          <h2 className="businessloan-section-title">Fees and Charges</h2>
          <div className="businessloan-glass-card businessloan-table-card">
            <p className="businessloan-fees-intro">The fees and charges of business loans usually vary from lender to lender and from case to case.</p>
            <table className="businessloan-fees-table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loan Processing Fees</td>
                  <td>1.5% to 5% of Loan Amount</td>
                </tr>
                <tr>
                  <td>Loan Cancellation</td>
                  <td>Usually 0 to 5% of Loan Amount</td>
                </tr>
                <tr>
                  <td>Stamp Duty Charges</td>
                  <td>₹60/- to ₹600/-</td>
                </tr>
                <tr>
                  <td>Legal Fees</td>
                  <td>Nil</td>
                </tr>
                <tr>
                  <td>Penal Charges</td>
                  <td>Nil</td>
                </tr>
                <tr>
                  <td>EMI / Cheque Bounce Charges</td>
                  <td>Approx ₹499/- to ₹599/-</td>
                </tr>
              </tbody>
            </table>
            <p className="businessloan-fees-note">Other fees and charges may include documentation charges, verification charges, duplicate statement charges, NOC certificate charges and swap.</p>
          </div>
        </section>

        <section id="reviews" className="businessloan-section">
          <h2 className="businessloan-section-title">Customer Reviews</h2>
          <div className="businessloan-reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="businessloan-glass-card businessloan-review-card">
                <div className="businessloan-review-header">
                  <div className="businessloan-review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'businessloan-star businessloan-filled' : 'businessloan-star'}>★</span>
                    ))}
                  </div>
                  <h4>{review.name}</h4>
                </div>
                <p className="businessloan-review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faqs" className="businessloan-section">
          <h2 className="businessloan-section-title">Frequently Asked Questions</h2>
          <div className="businessloan-faqs-container">
            {faqs.map((faq, index) => (
              <div key={index} className="businessloan-glass-card businessloan-faq-card">
                <h3 className="businessloan-faq-question">{faq.question}</h3>
                <p className="businessloan-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="businessloan-cta-section businessloan-glass-card">
          <h2>Ready to Grow Your Business?</h2>
          <p>Get a convenient Business Loan to cover assets and expand seamlessly</p>
          <button className="businessloan-cta-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan;