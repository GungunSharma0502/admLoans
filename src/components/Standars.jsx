import React, { useState, useEffect } from 'react';

const Standards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      quote: "Andromeda's tie-ups with top-tier banks and lending partners has given me a leg-up when it comes to working from home. From informing customers about their investment opportunities to taking them through their investment journey, Andromeda's digital integration makes the entire process faster and easier. What is more, it allows me to work at my convenience while providing for a steady source of income.",
      name: 'Mr. Sher Singh',
      designation: 'Wealth Advisor'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
      quote: "Working with Andromeda has transformed my career. The platform's intuitive design and comprehensive tools make it easy to serve clients efficiently. The support from the team is exceptional, and I've seen significant growth in my business.",
      name: 'Ms. Priya Sharma',
      designation: 'Financial Consultant'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      quote: "The partnership with Andromeda has been a game-changer for my practice. Their technology integration and partner network have enabled me to offer better solutions to my clients while maintaining work-life balance.",
      name: 'Mr. Rajesh Kumar',
      designation: 'Investment Advisor'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop',
      quote: "Andromeda's platform has empowered me to reach more clients and provide superior service. The seamless integration with banking partners and the user-friendly interface make my job easier and more rewarding every day.",
      name: 'Ms. Anjali Mehta',
      designation: 'Wealth Manager'
    }
  ];

  const handleSlideChange = (newIndex, dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length, 'next');
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length, 'prev');
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      handleSlideChange(index, index > currentSlide ? 'next' : 'prev');
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative w-full min-h-screen bg-white py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 mb-4 animate-fade-in tracking-tight">
              Highest Standards. Happiest Partners
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full animate-slide-in mx-auto w-32 shadow-lg shadow-blue-500/50"></div>
          </div>
          <p className="text-lg text-gray-700 font-normal animate-fade-in-delay mt-6">
            Our partners are our strength
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/50 overflow-hidden border border-blue-800/30">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-50 animate-border-glow" style={{
              background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
              backgroundSize: '200% 200%'
            }}></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/10 rounded-full -ml-24 -mb-24 blur-3xl animate-pulse-slow animation-delay-2000"></div>
            
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* Animated Scan Line */}
            <div className="absolute inset-0 opacity-20 animate-scan-line" style={{
              background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
              backgroundSize: '100% 200px'
            }}></div>
            
            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full lg:w-5/12">
                <div className="relative group">
                  {/* Outer Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse-glow"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-2xl ring-2 ring-blue-500/50 shadow-2xl shadow-blue-900/50">
                    <img 
                      key={currentSlide}
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].name}
                      className={`w-full h-[400px] md:h-[500px] object-cover transform transition-all duration-700 ${
                        isAnimating 
                          ? direction === 'next' 
                            ? 'animate-slide-out-left' 
                            : 'animate-slide-out-right'
                          : 'animate-slide-in-fade'
                      }`}
                    />
                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent"></div>
                    
                    {/* Animated Corner Accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400 animate-corner-glow"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-400 animate-corner-glow animation-delay-1000"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl shadow-2xl shadow-blue-500/50 transform hover:scale-105 transition duration-300 animate-float-badge border border-blue-400/30">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="font-bold text-sm">Verified Partner</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-8">
                {/* Quote */}
                <div className="relative">
                  <svg className="absolute -top-6 -left-6 w-16 h-16 text-blue-500/20 animate-pulse" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                  <blockquote 
                    key={`quote-${currentSlide}`}
                    className={`relative text-lg md:text-xl text-blue-100 leading-relaxed ${
                      isAnimating ? 'animate-fade-out' : 'animate-fade-in-up'
                    }`}
                  >
                    "{slides[currentSlide].quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div 
                  key={`author-${currentSlide}`}
                  className={`flex items-center gap-4 ${
                    isAnimating ? 'animate-fade-out' : 'animate-fade-in-up-delay'
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <img 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].name}
                      className="relative w-16 h-16 rounded-full object-cover border-4 border-blue-500/50 shadow-lg shadow-blue-500/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-900 animate-ping-slow"></div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{slides[currentSlide].name}</h3>
                    <p className="text-cyan-300 font-medium">{slides[currentSlide].designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12 px-4">
            {/* Navigation Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'w-12 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50' 
                      : 'w-2 bg-blue-800/50 hover:bg-blue-700/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {currentSlide === index && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse opacity-75"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                disabled={isAnimating}
                className="group relative w-14 h-14 bg-gradient-to-br from-slate-800 to-blue-900 hover:from-slate-700 hover:to-blue-800 rounded-full shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-800/40 transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-700/50"
                aria-label="Previous slide"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <svg className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-300 group-hover:text-cyan-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                disabled={isAnimating}
                className="group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/30"
                aria-label="Next slide"
              >
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-fast"></div>
                <svg className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slide-in {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }

        @keyframes slide-in-fade {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slide-out-left {
          to { opacity: 0; transform: translateX(-20px); }
        }

        @keyframes slide-out-right {
          to { opacity: 0; transform: translateX(20px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes corner-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(100px, -100px); opacity: 1; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          50% { transform: translate(-80px, 80px); opacity: 1; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(60px, -60px); opacity: 0.8; }
        }

        @keyframes border-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scan-line {
          0% { background-position: 0 -200px; }
          100% { background-position: 0 calc(100% + 200px); }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse-fast {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.6s ease-out 0.2s both; }
        .animate-fade-out { animation: fade-out 0.3s ease-out; }
        .animate-slide-in { animation: slide-in 1s ease-out; }
        .animate-slide-in-fade { animation: slide-in-fade 0.7s ease-out; }
        .animate-slide-out-left { animation: slide-out-left 0.4s ease-out; }
        .animate-slide-out-right { animation: slide-out-right 0.4s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-corner-glow { animation: corner-glow 2s ease-in-out infinite; }
        .animate-float-badge { animation: float-badge 3s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-border-glow { animation: border-glow 3s ease infinite; }
        .animate-scan-line { animation: scan-line 8s linear infinite; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-pulse-fast { animation: pulse-fast 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Standards;