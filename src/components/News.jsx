import React, { useState } from 'react';

const News = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const newsArticles = [
    {
      logo: 'Outlook',
      category: 'Loan',
      title: "Dhanisha Navratri 2025: Banks & NBFCs Roll Out Special Schemes To Attract Borrowers",
      source: 'Outlook Money',
      timeAgo: '16 September',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      logo: 'Hindustan Times',
      category: 'Business',
      title: "No EMI till possession scheme: 5 reasons why homebuyers should think twice",
      source: 'Hindustan Times',
      timeAgo: '1 September',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      logo: 'Economic Times',
      category: 'Home',
      title: "Will the dream run for home loan borrowers continue despite RBI pausing repo rate?",
      source: 'Economic Times',
      timeAgo: '2 hours',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4 block">
              Media Coverage
            </span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
              In News & Media
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Stay updated with our latest features and insights from leading publications
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glass Card */}
              <div className={`
                relative h-full backdrop-blur-xl bg-white/80 rounded-2xl
                border border-gray-200/50 overflow-hidden
                transition-all duration-500 ease-out
                ${hoveredCard === index ? 'shadow-2xl shadow-blue-500/20 -translate-y-2' : 'shadow-lg'}
              `}>
                {/* Gradient Overlay on Hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0
                  transition-opacity duration-500
                  ${hoveredCard === index ? 'opacity-100' : ''}
                `}></div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Logo Section */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {article.logo.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{article.logo}</div>
                        <div className="text-xs text-gray-500">{article.timeAgo}</div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3 leading-relaxed group-hover:text-blue-900 transition-colors">
                    {article.title}
                  </h3>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <span className="text-sm font-medium text-gray-700">{article.source}</span>
                    <svg 
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
            <span className="relative z-10 flex items-center space-x-2">
              <span>VIEW ALL ARTICLES</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Partnership CTA */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-blue-900/95 rounded-3xl p-10 md:p-12 border border-gray-700/50 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Partner With Andromeda
                </h3>
                <p className="text-blue-200 text-lg">
                  Join us in shaping the future of financial solutions
                </p>
              </div>
              
              <button className="group/btn relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 whitespace-nowrap">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>PARTNER WITH US</span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;