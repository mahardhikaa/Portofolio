import React from 'react';
import footerData from '../data/footer.json';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-5 transition-colors duration-300 relative overflow-hidden border-t border-gray-900">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-50"></div>

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-full max-w-3xl h-64 bg-blue-900/20 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-white tracking-tight">
              {footerData.portfolioInfo.title}
              <span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed font-light max-w-sm">
              {footerData.portfolioInfo.description}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7 space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">{footerData.quickLinks.title}</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">{footerData.social.title}</h4>
            <ul className="space-y-3">
              {footerData.social.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {currentYear} <span className="font-medium text-gray-400">{footerData.copyright.name}</span>. All rights reserved.
          </p>
          {/* Back to top button placeholder */}
          <a href="#hero" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
