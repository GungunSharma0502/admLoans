import React from 'react';
import '../css/adEdge.css';

const AdEdge = () => {
  return (
    <div className="edEdge-container">
      <div className="edEdge-header">
        <h1 className="edEdge-title">The Andromeda Edge</h1>
        <div className="edEdge-divider"></div>
        <p className="edEdge-subtitle">Multiple Advantages. One Platform.</p>
      </div>

      <div className="edEdge-hexagon-grid">
        {/* Top Row - 3 hexagons */}
        <div className="edEdge-hexagon edEdge-hex-1">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="10" y="15" width="30" height="20" rx="2" stroke="#2196F3" strokeWidth="2"/>
                <path d="M15 25 L22 25 L22 30 L15 30 Z" fill="#2196F3"/>
                <circle cx="32" cy="22" r="2" fill="#2196F3"/>
              </svg>
            </div>
            <div className="edEdge-text">Best-in-class &<br/>Prompt Payouts</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-2">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="15" y="12" width="12" height="12" rx="1" stroke="#2196F3" strokeWidth="2"/>
                <rect x="20" y="17" width="12" height="12" rx="1" stroke="#2196F3" strokeWidth="2"/>
                <rect x="25" y="22" width="12" height="12" rx="1" stroke="#2196F3" strokeWidth="2"/>
              </svg>
            </div>
            <div className="edEdge-text">Multiple Products</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-3">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="12" y="10" width="26" height="20" rx="2" stroke="#2196F3" strokeWidth="2"/>
                <path d="M15 13 L35 13" stroke="#2196F3" strokeWidth="1.5"/>
                <rect x="15" y="16" width="20" height="2" fill="#2196F3"/>
                <rect x="15" y="20" width="15" height="2" fill="#2196F3"/>
                <path d="M30 32 L35 27 L40 32" stroke="#4CAF50" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="edEdge-text">Easy On-boarding</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-4">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <div className="edEdge-percentage">0%</div>
            </div>
            <div className="edEdge-text">Zero Investment</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-5">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25 12 L35 18 L35 30 L25 36 L15 30 L15 18 Z" stroke="#2196F3" strokeWidth="2" fill="none"/>
                <circle cx="25" cy="24" r="5" fill="#2196F3"/>
              </svg>
            </div>
            <div className="edEdge-text">Lifetime Value</div>
          </div>
        </div>

        {/* Middle Row - 5 hexagons */}
        <div className="edEdge-hexagon edEdge-hex-6">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="12" y="12" width="26" height="20" rx="2" stroke="#2196F3" strokeWidth="2"/>
                <path d="M15 15 L20 15 M15 20 L23 20 M15 25 L18 25" stroke="#2196F3" strokeWidth="1.5"/>
                <circle cx="32" cy="27" r="4" stroke="#2196F3" strokeWidth="2"/>
              </svg>
            </div>
            <div className="edEdge-text">Unified Dashboard</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-7">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="20" r="6" stroke="#2196F3" strokeWidth="2"/>
                <path d="M25 14 L25 20 L29 18" stroke="#2196F3" strokeWidth="2"/>
                <path d="M18 26 L15 28 L15 35 L25 38 L35 35 L35 28 L32 26" stroke="#2196F3" strokeWidth="2"/>
              </svg>
            </div>
            <div className="edEdge-text">Secure Data</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-8">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="15" y="12" width="20" height="20" rx="2" stroke="#2196F3" strokeWidth="2"/>
                <path d="M20 22 L23 25 L30 18" stroke="#4CAF50" strokeWidth="2.5" fill="none"/>
              </svg>
            </div>
            <div className="edEdge-text">Instant Approvals</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-9">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25 10 L30 20 L40 22 L32 30 L34 40 L25 35 L16 40 L18 30 L10 22 L20 20 Z" stroke="#2196F3" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="edEdge-text">Rewards & Loyalty</div>
          </div>
        </div>

        <div className="edEdge-hexagon edEdge-hex-10">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="15" y="15" width="10" height="15" rx="1" stroke="#2196F3" strokeWidth="2"/>
                <rect x="27" y="10" width="10" height="20" rx="1" stroke="#2196F3" strokeWidth="2"/>
                <circle cx="32" cy="33" r="2" fill="#2196F3"/>
              </svg>
            </div>
            <div className="edEdge-text">Training Programs</div>
          </div>
        </div>

        {/* Bottom Row - 2 hexagons */}
        <div className="edEdge-hexagon edEdge-hex-11">
          <div className="edEdge-hexagon-inner">
            <div className="edEdge-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M15 28 Q15 18 25 18 Q35 18 35 28" stroke="#2196F3" strokeWidth="2" fill="none"/>
                <circle cx="18" cy="30" r="2" fill="#2196F3"/>
                <circle cx="32" cy="30" r="2" fill="#2196F3"/>
                <path d="M20 25 L22 25 M28 25 L30 25" stroke="#2196F3" strokeWidth="2"/>
              </svg>
            </div>
            <div className="edEdge-text">Excellent Customer<br/>Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdEdge;