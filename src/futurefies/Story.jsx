import React, { useState, useEffect, useRef } from 'react';

const Story = () => {
  const [counts, setCounts] = useState({
    cities: 0,
    branches: 0,
    employees: 0,
    advisors: 0,
    partners: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          setTimeout(() => animateNumbers(), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    const duration = 2500;
    const targets = {
      cities: 1500,
      branches: 500,
      employees: 5000,
      advisors: 25000,
      partners: 180
    };

    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        cities: Math.floor(easeOutQuart * targets.cities),
        branches: Math.floor(easeOutQuart * targets.branches),
        employees: Math.floor(easeOutQuart * targets.employees),
        advisors: Math.floor(easeOutQuart * targets.advisors),
        partners: Math.floor(easeOutQuart * targets.partners)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  const formatNumber = (num, suffix) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k' + suffix;
    }
    return num + suffix;
  };

  const stats = [
    {
      label: 'Cities',
      value: counts.cities,
      suffix: '+',
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 15C26.5 15 23.75 17.75 23.75 21.25C23.75 24.75 26.5 27.5 30 27.5C33.5 27.5 36.25 24.75 36.25 21.25C36.25 17.75 33.5 15 30 15Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 45C23.75 45 18.75 40 18.75 33.75C18.75 27.5 23.75 22.5 30 22.5C36.25 22.5 41.25 27.5 41.25 33.75C41.25 40 36.25 45 30 45Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0
    },
    {
      label: 'Branches',
      value: counts.branches,
      suffix: '+',
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="25" width="16" height="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 25V22C26 20.8954 26.8954 20 28 20H32C33.1046 20 34 20.8954 34 22V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="30" cy="18" r="3" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="40" cy="22" r="3" stroke="currentColor" strokeWidth="2.5"/>
        </svg>
      ),
      delay: 100
    },
    {
      label: 'Employees',
      value: counts.employees,
      suffix: '+',
      format: true,
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="23" r="5" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="35" cy="23" r="5" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="30" cy="28" r="6" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M16 40C16 35 20 32 25 32M44 40C44 35 40 32 35 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      delay: 200
    },
    {
      label: 'Financial Advisors',
      value: counts.advisors,
      suffix: '+',
      format: true,
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 28L25 38M25 28L35 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 20C22 17 24 15 27 15H33C36 15 38 17 38 20V23H22V20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 23H43V42C43 43.6569 41.6569 45 40 45H20C18.3431 45 17 43.6569 17 42V23Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 300
    },
    {
      label: 'Lending Partners',
      value: counts.partners,
      suffix: '+',
      icon: (
        <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="38" cy="25" r="8" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M38 22V25L40 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 35H28C29.1046 35 30 35.8954 30 37V40C30 41.1046 29.1046 42 28 42H18C16.8954 42 16 41.1046 16 40V37C16 35.8954 16.8954 35 18 35Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase">Our Journey</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Story Of Andromeda
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              In Numbers
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mt-6">
            Over INR 1.08L Cr loans disbursed annually
          </p>
        </div>

        {/* Stats Grid - Circular Layout */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl" />
          
          {/* Stats positioned in a pentagonal pattern */}
          <div className="relative h-[700px] md:h-[600px]">
            {stats.map((stat, index) => {
              // Pentagonal positioning
              const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees apart, starting from top
              const radius = 250; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={stat.label}
                  className={`absolute top-1/2 left-1/2 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${stat.delay}ms`
                  }}
                >
                  <div className="group relative">
                    {/* Connection line to center */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-px h-40 bg-gradient-to-b from-blue-500/30 to-transparent origin-top -z-10"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${(index * 72 + 90)}deg)`
                      }}
                    />
                    
                    {/* Card */}
                    <div className="relative w-48 h-48 bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-blue-500/20 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2">
                      
                      {/* Animated ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                      
                      {/* Icon */}
                      <div className="mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      
                      {/* Number */}
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.format ? formatNumber(stat.value, stat.suffix) : stat.value + stat.suffix}
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm font-medium text-gray-400 text-center leading-tight">
                        {stat.label}
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 rounded-2xl transition-all duration-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-400 font-medium">
            Trusted by thousands across India
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 4s;
        }

        @media (max-width: 768px) {
          .relative.h-\\[700px\\] {
            height: 900px;
          }
        }
      `}</style>
    </section>
  );
};

export default Story;