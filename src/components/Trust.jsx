import React, { useState } from 'react';

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
    <section className="relative w-full bg-white py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 mb-4 animate-fade-in">
              Brands who Trust Us
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full animate-slide-in mx-auto w-24 shadow-lg shadow-blue-500/50"></div>
          </div>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            We are amongst the top 3 most-preferred channel partners for loans for India's
            widest network of Banks, NBFCs, and Fintech
          </p>
        </div>

        {/* First Row - Always Visible */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {firstRowBrands.map((brand, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-8 flex items-center justify-center min-h-[140px] shadow-lg shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-blue-800/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-30 animate-border-glow" style={{
                background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                backgroundSize: '200% 200%'
              }}></div>
              
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scan Line Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-scan-line" style={{
                background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
                backgroundSize: '100% 100px'
              }}></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow animation-delay-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-1"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-2"></div>
              
              <div className="relative text-center z-10">
                <div className="text-sm md:text-base font-bold text-blue-100 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  {brand.name}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Second and Third Rows - Conditional with Animation */}
        <div 
          className={`transition-all duration-700 ease-in-out ${
            showAll ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
            {secondRowBrands.map((brand, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-8 flex items-center justify-center min-h-[140px] shadow-lg shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-blue-800/30"
              >
                <div className="absolute inset-0 rounded-2xl opacity-30 animate-border-glow" style={{
                  background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                  backgroundSize: '200% 200%'
                }}></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-scan-line" style={{
                  background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
                  backgroundSize: '100% 100px'
                }}></div>
                
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow animation-delay-500"></div>
                
                <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-1"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-2"></div>
                
                <div className="relative text-center z-10">
                  <div className="text-sm md:text-base font-bold text-blue-100 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    {brand.name}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {thirdRowBrands.map((brand, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-8 flex items-center justify-center min-h-[140px] shadow-lg shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-800/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-blue-800/30"
              >
                <div className="absolute inset-0 rounded-2xl opacity-30 animate-border-glow" style={{
                  background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                  backgroundSize: '200% 200%'
                }}></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-scan-line" style={{
                  background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
                  backgroundSize: '100% 100px'
                }}></div>
                
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow animation-delay-500"></div>
                
                <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-1"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-2"></div>
                
                <div className="relative text-center z-10">
                  <div className="text-sm md:text-base font-bold text-blue-100 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    {brand.name}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-cyan-500/60 border border-blue-400/30"
          >
            {/* Animated Background Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Pulse Effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse-fast"></div>
            
            {/* Button Text */}
            <span className="relative flex items-center gap-3">
              {showAll ? (
                <>
                  <span className="tracking-wide">VIEW LESS</span>
                  <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span className="tracking-wide">VIEW ALL</span>
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </span>

            {/* Corner Glow */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { width: 0; }
          to { width: 6rem; }
        }

        @keyframes border-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scan-line {
          0% { background-position: 0 -100px; }
          100% { background-position: 0 calc(100% + 100px); }
        }

        @keyframes corner-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }

        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
        }

        @keyframes pulse-fast {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
        .animate-slide-in { animation: slide-in 1s ease-out; }
        .animate-border-glow { animation: border-glow 3s ease infinite; }
        .animate-scan-line { animation: scan-line 3s linear infinite; }
        .animate-corner-glow { animation: corner-glow 2s ease-in-out infinite; }
        .animate-float-particle-1 { animation: float-particle-1 3s ease-in-out infinite; }
        .animate-float-particle-2 { animation: float-particle-2 3s ease-in-out infinite 0.5s; }
        .animate-pulse-fast { animation: pulse-fast 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Trust;