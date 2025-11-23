import React, { useState } from 'react';
import './MachineLoan.css';

const MachineLoan = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenure, setTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(14);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure;
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
      icon: "🏭",
      title: "Wide Range of Options",
      description: "Access machinery and equipment loan options from top banks, NBFCs, and financial institutions across India."
    },
    {
      icon: "💰",
      title: "Loan Amount ₹5 Lakh to ₹5 Crore",
      description: "Get substantial funding ranging from ₹5 Lakh to ₹5 Crore based on your machinery requirements."
    },
    {
      icon: "📄",
      title: "Digital & Minimal Documentation",
      description: "Enjoy hassle-free application process with minimal paperwork and digital documentation."
    },
    {
      icon: "⏱️",
      title: "Flexible Tenure 12 to 60 Months",
      description: "Choose repayment tenure from 12 to 60 months that suits your business cash flow."
    },
    {
      icon: "🌾",
      title: "Rural & Semi-Urban Coverage",
      description: "Available for businesses in rural and semi-urban areas, ensuring widespread accessibility."
    },
    {
      icon: "🚀",
      title: "For MSMEs & SMEs",
      description: "Specially designed for new businesses, MSMEs, and SMEs to grow and expand operations."
    }
  ];

  const benefits = [
    {
      icon: "💯",
      title: "100% Equipment Financing",
      description: "Loans can be availed for up to 100% of the equipment price"
    },
    {
      icon: "📉",
      title: "Starting from 12% ROI",
      description: "Rate of Interest (ROI) Starting from 12% Onwards"
    },
    {
      icon: "🔓",
      title: "No Additional Collateral",
      description: "No Additional Collateral is Required"
    },
    {
      icon: "⚡",
      title: "Quick Disbursal",
      description: "Easy & Quick Disbursal process"
    },
    {
      icon: "🔄",
      title: "Flexible Repayment",
      description: "Customized Repayment & Flexible foreclosure options"
    },
    {
      icon: "🏛️",
      title: "Government Loan Benefits",
      description: "Benefits for Government Loans for Machinery Purchases"
    }
  ];

  const financingOptions = [
    { icon: "🏥", title: "Medical Equipment Loans" },
    { icon: "⚙️", title: "Machinery Equipment Loan" },
    { icon: "🏗️", title: "Construction Machinery Finance" },
    { icon: "🏭", title: "Manufacturing Equipment Loans" },
    { icon: "🚜", title: "Farm Machinery Loans/Finance" },
    { icon: "✈️", title: "Aviation Industry Equipment Loans" },
    { icon: "🔧", title: "Used Machinery Loan" },
    { icon: "💼", title: "Loan Against Machinery" }
  ];

  const faqs = [
    {
      question: "What is the interest rate for machinery finance?",
      answer: "The interest rate for machinery loans starts from 12% onwards. The exact rate depends on factors like your credit score, business vintage, loan amount, and the lender you choose."
    },
    {
      question: "Can machinery be used as collateral?",
      answer: "Yes, machinery can be used as collateral through a 'Loan Against Machinery' option. This allows you to unlock the value of your existing assets while ensuring uninterrupted cash flow for your business."
    },
    {
      question: "What is the interest rate for a MSME machinery loan?",
      answer: "For MSMEs, machinery loan interest rates typically start from 12% onwards. Special government schemes may offer even lower rates to support MSME growth and development."
    },
    {
      question: "Who are the lenders offering machinery loans?",
      answer: "Ruloans partners with India's top-tier banks, NBFCs, and financial institutions including both public and private sector banks to offer competitive machinery loan options."
    },
    {
      question: "Eligibility criteria for machinery loans?",
      answer: "Applicants must be between 21-65 years of age, have a credit score of 650 or higher, and possess a minimum business vintage of 3 years. Additional criteria may vary by lender."
    },
    {
      question: "Is a machinery loan secured or unsecured?",
      answer: "Machinery loans can be both secured and unsecured. In most cases, the machinery itself acts as collateral, making it a secured loan. However, no additional collateral beyond the equipment is typically required."
    }
  ];

  return (
    <div className="machine-page-container">
      <div className="machine-header-section">
        <div className="machine-header-overlay"></div>
        <div className="machine-header-content">
          <h1 className="machine-main-heading">MACHINERY LOAN</h1>
          <p className="machine-header-subtitle">Transform Your Business with Machinery Loan!</p>
          <button className="machine-header-cta">Apply Now</button>
        </div>
      </div>

      <nav className="machine-nav-bar machine-glass">
        <div className="machine-nav-content">
          <div className="machine-nav-links">
            {['overview', 'features', 'eligibility', 'documents', 'financing-options', 'how-to-apply', 'faqs'].map((section) => (
              <button
                key={section}
                className={`machine-nav-link ${activeSection === section ? 'machine-active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="machine-content-wrapper">
        <section id="overview" className="machine-section">
          <div className="machine-glass-card machine-hero-card">
            <h2 className="machine-section-title">What are Machinery Loans?</h2>
            <div className="machine-overview-content">
              <p className="machine-intro-text">
                A machinery loan is a financial solution designed to empower businesses to acquire or upgrade essential equipment without straining their working capital. Machinery loans for MSMEs, startups, SMEs, larger businesses, and enterprises. Machinery financing ensures businesses can enhance operational efficiency, integrate advanced technology, and stay competitive in the market.
              </p>
              <p className="machine-desc-text">
                Machinery loans are a type of business loan that can be used to buy new machines or upgrade existing equipment. Machinery loans help businesses overcome financial barriers, enabling them to scale operations without interruptions. With Ruloans, you can access machinery lending options from India's top-tier banks, NBFCs, and financial institutions. Whether you need a loan for machinery purchase or machinery finance for upgrades, we ensure your business gets the best deal with higher loan amounts, attractive interest rates, and flexible loan tenures.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="machine-section">
          <h2 className="machine-section-title">Features and Benefits</h2>
          <div className="machine-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="machine-glass-card machine-feature-card">
                <div className="machine-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="machine-benefits-section">
            <h3 className="machine-benefits-title">Additional Benefits</h3>
            <div className="machine-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="machine-benefit-item">
                  <span className="machine-benefit-icon">{benefit.icon}</span>
                  <div className="machine-benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="machine-upgrade-text">
              Upgrade your business operations effortlessly with our hassle-free machinery & equipment financing options.
            </p>
          </div>
        </section>

        <section id="eligibility" className="machine-section">
          <h2 className="machine-section-title">Eligibility Criteria</h2>
          <div className="machine-eligibility-container">
            <div className="machine-glass-card machine-eligibility-card">
              <div className="machine-eligibility-icon">👤</div>
              <h3>Age Requirement</h3>
              <p>Applicant must be between <strong>21 and 65 years</strong> of age</p>
            </div>
            <div className="machine-glass-card machine-eligibility-card">
              <div className="machine-eligibility-icon">📊</div>
              <h3>Credit Score</h3>
              <p>A credit score of <strong>650 or higher</strong> is required</p>
            </div>
            <div className="machine-glass-card machine-eligibility-card">
              <div className="machine-eligibility-icon">🏢</div>
              <h3>Business Vintage</h3>
              <p>Minimum business vintage of <strong>3 years</strong></p>
            </div>
          </div>
        </section>

        <section id="documents" className="machine-section">
          <h2 className="machine-section-title">Required Documents</h2>
          <div className="machine-glass-card machine-documents-card">
            <div className="machine-documents-grid">
              <div className="machine-doc-category">
                <div className="machine-doc-header">
                  <span className="machine-doc-icon">📋</span>
                  <h3>KYC Documents (Identity & Residence)</h3>
                </div>
                <p>Aadhar card, PAN card, driving license, passport, etc</p>
              </div>
              <div className="machine-doc-category">
                <div className="machine-doc-header">
                  <span className="machine-doc-icon">📄</span>
                  <h3>Income Tax Returns</h3>
                </div>
                <p>Income tax returns (ITR) for the last 3 years</p>
              </div>
              <div className="machine-doc-category">
                <div className="machine-doc-header">
                  <span className="machine-doc-icon">🏢</span>
                  <h3>Business Ownership Proof</h3>
                </div>
                <p>Business ownership proof documents</p>
              </div>
              <div className="machine-doc-category">
                <div className="machine-doc-header">
                  <span className="machine-doc-icon">🧾</span>
                  <h3>Proforma Invoice</h3>
                </div>
                <p>Proforma invoice of the machinery purchase</p>
              </div>
              <div className="machine-doc-category">
                <div className="machine-doc-header">
                  <span className="machine-doc-icon">🏦</span>
                  <h3>Bank Statements</h3>
                </div>
                <p>Bank statements for the last 6 months</p>
              </div>
            </div>
          </div>
        </section>

        <section id="financing-options" className="machine-section">
          <h2 className="machine-section-title">Financing Options</h2>
          <div className="machine-glass-card machine-financing-card">
            <h3 className="machine-financing-subtitle">
              Wide Range of Machinery & Equipment Financing Options that suit your Business Requirements
            </h3>
            <div className="machine-financing-grid">
              {financingOptions.map((option, index) => (
                <div key={index} className="machine-financing-option">
                  <span className="machine-financing-icon">{option.icon}</span>
                  <h4>{option.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="machine-emi-calculator-section">
            <h3 className="machine-calculator-title">Machinery Loan EMI Calculator</h3>
            <p className="machine-calculator-desc">
              A Machinery Loan EMI Calculator is an online tool that helps borrowers calculate the Equated Monthly Installment (EMI) for a machinery loan. By inputting details such as the loan amount, interest rate, and loan tenure, the calculator provides an accurate estimate of the monthly payments.
            </p>
            <div className="machine-calculator-wrapper">
              <div className="machine-calculator-inputs">
                <div className="machine-input-group">
                  <label>Loan Amount (₹)</label>
                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <span className="machine-input-value">₹ {loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="machine-input-group">
                  <label>Tenure (Months)</label>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                  <span className="machine-input-value">{tenure} Months</span>
                </div>
                <div className="machine-input-group">
                  <label>Interest Rate (%)</label>
                  <input
                    type="range"
                    min="12"
                    max="22"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <span className="machine-input-value">{interestRate}%</span>
                </div>
              </div>
              <div className="machine-emi-result">
                <h4>Your Monthly EMI</h4>
                <div className="machine-emi-amount">₹ {Number(calculateEMI()).toLocaleString('en-IN')}</div>
                <p className="machine-emi-note">Total Amount: ₹ {(calculateEMI() * tenure).toLocaleString('en-IN', {maximumFractionDigits: 0})}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-apply" className="machine-section">
          <h2 className="machine-section-title">How to Apply Online</h2>
          <div className="machine-glass-card machine-apply-card">
            <p className="machine-apply-intro">Follow these simple steps to apply for a machinery and equipment loan online through Ruloans:</p>
            <div className="machine-steps-container">
              <div className="machine-step">
                <div className="machine-step-number">1</div>
                <div className="machine-step-content">
                  <h3>Visit the website and navigate to the Machinery Loan section</h3>
                  <p>Go to ruloans.com, Click on Loans and select Machinery Loan</p>
                </div>
              </div>
              <div className="machine-step">
                <div className="machine-step-number">2</div>
                <div className="machine-step-content">
                  <h3>Apply & Verify with OTP</h3>
                  <p>Click Apply Now, Sign in with your mobile number, and login via OTP verification</p>
                </div>
              </div>
              <div className="machine-step">
                <div className="machine-step-number">3</div>
                <div className="machine-step-content">
                  <h3>Fill out the Consent Form & Submit</h3>
                  <p>Complete the Consent Form, agree to the Terms & Conditions, verify with OTP</p>
                </div>
              </div>
              <div className="machine-step">
                <div className="machine-step-number">4</div>
                <div className="machine-step-content">
                  <h3>Enter Details & Submit Application</h3>
                  <p>Enter address & income details along with loan details, Select Ruloans Experts, and submit your application</p>
                </div>
              </div>
              <div className="machine-step">
                <div className="machine-step-number">5</div>
                <div className="machine-step-content">
                  <h3>Wait for Approval</h3>
                  <p>Ruloans gets you the best deal that suits your business needs</p>
                </div>
              </div>
            </div>
            <p className="machine-additional-info">
              With Ruloans, you can also explore options for loan against machinery to unlock the value of your existing assets and ensure uninterrupted cash flow for your business. As India's leading loan distribution company, we offer a wide range of MSME loans for machinery needs, providing a seamless process to secure financing for your equipment.
            </p>
          </div>
        </section>

        <section id="faqs" className="machine-section">
          <h2 className="machine-section-title">Frequently Asked Questions</h2>
          <div className="machine-faqs-container">
            {faqs.map((faq, index) => (
              <div key={index} className="machine-glass-card machine-faq-card">
                <h3 className="machine-faq-question">{faq.question}</h3>
                <p className="machine-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="machine-cta-section machine-glass-card">
          <h2>Ready to Upgrade Your Machinery?</h2>
          <p>Flexible loan options to help you acquire the right machinery for business expansion</p>
          <button className="machine-cta-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default MachineLoan;