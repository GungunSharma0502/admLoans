import React, { useState, useEffect } from 'react';
import { Calculator, Home, Briefcase, Car, Building2, TrendingUp } from 'lucide-react';
import '../css/calculator.css';

export default function EMICalculator() {
  const [loanType, setLoanType] = useState('home');
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const loanTypes = [
    { id: 'home', name: 'Home Loan', icon: Home, color: '#2d5016' },
    { id: 'business', name: 'Business Loan', icon: Briefcase, color: '#4a7c59' },
    { id: 'machine', name: 'Machine Loan', icon: TrendingUp, color: '#6b8e23' },
    { id: 'property', name: 'Loan Against Property', icon: Building2, color: '#8b7355' }
  ];

  useEffect(() => {
    calculateEMI();
  }, [principal, rate, tenure]);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (p && r && n) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmt = emiValue * n;
      const totalInt = totalAmt - p;

      setEmi(emiValue);
      setTotalAmount(totalAmt);
      setTotalInterest(totalInt);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const getInterestPercentage = () => {
    return ((totalInterest / totalAmount) * 100).toFixed(1);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <Calculator className="header-icon" />
        <h1>EMI Calculator</h1>
        <p>Calculate your loan EMI with ease</p>
      </div>

      <div className="loan-types">
        {loanTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              className={`loan-type-btn ${loanType === type.id ? 'active' : ''}`}
              onClick={() => setLoanType(type.id)}
              style={{
                '--btn-color': type.color
              }}
            >
              <Icon size={20} />
              <span>{type.name}</span>
            </button>
          );
        })}
      </div>

      <div className="calculator-body">
        <div className="input-section">
          <div className="input-group">
            <label>Loan Amount</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="input-field"
              />
              <span className="input-suffix">₹</span>
            </div>
            <input
              type="range"
              min="100000"
              max="50000000"
              step="100000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="slider"
            />
            <div className="range-labels">
              <span>₹1L</span>
              <span>₹5Cr</span>
            </div>
          </div>

          <div className="input-group">
            <label>Interest Rate (p.a.)</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="input-field"
                step="0.1"
              />
              <span className="input-suffix">%</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="slider"
            />
            <div className="range-labels">
              <span>5%</span>
              <span>20%</span>
            </div>
          </div>

          <div className="input-group">
            <label>Loan Tenure</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="input-field"
              />
              <span className="input-suffix">Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="slider"
            />
            <div className="range-labels">
              <span>1 Yr</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        <div className="result-section">
          <div className="emi-card">
            <h3>Monthly EMI</h3>
            <div className="emi-amount">{formatCurrency(emi)}</div>
          </div>

          <div className="breakdown-cards">
            <div className="breakdown-card principal-card">
              <div className="card-header">
                <span>Principal Amount</span>
                <span className="percentage">{(100 - parseFloat(getInterestPercentage())).toFixed(1)}%</span>
              </div>
              <div className="card-amount">{formatCurrency(principal)}</div>
              <div className="progress-bar">
                <div 
                  className="progress-fill principal-fill"
                  style={{ width: `${100 - parseFloat(getInterestPercentage())}%` }}
                ></div>
              </div>
            </div>

            <div className="breakdown-card interest-card">
              <div className="card-header">
                <span>Total Interest</span>
                <span className="percentage">{getInterestPercentage()}%</span>
              </div>
              <div className="card-amount">{formatCurrency(totalInterest)}</div>
              <div className="progress-bar">
                <div 
                  className="progress-fill interest-fill"
                  style={{ width: `${getInterestPercentage()}%` }}
                ></div>
              </div>
            </div>

            <div className="breakdown-card total-card">
              <div className="card-header">
                <span>Total Amount</span>
                <Car size={18} />
              </div>
              <div className="card-amount">{formatCurrency(totalAmount)}</div>
            </div>
          </div>

          <div className="chart-container">
            <svg viewBox="0 0 200 200" className="pie-chart">
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#8b7355"
                strokeWidth="40"
                strokeDasharray={`${(getInterestPercentage() / 100) * 502.4} 502.4`}
                transform="rotate(-90 100 100)"
                className="pie-slice interest-slice"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#4a7c59"
                strokeWidth="40"
                strokeDasharray={`${((100 - getInterestPercentage()) / 100) * 502.4} 502.4`}
                strokeDashoffset={`-${(getInterestPercentage() / 100) * 502.4}`}
                transform="rotate(-90 100 100)"
                className="pie-slice principal-slice"
              />
            </svg>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color principal-color"></span>
                <span>Principal</span>
              </div>
              <div className="legend-item">
                <span className="legend-color interest-color"></span>
                <span>Interest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}