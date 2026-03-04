import React, { useState, useEffect } from 'react';
function Header({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Add scroll listener for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 lg:px-8 transition-all duration-300 ${scrolled ? 'py-2 px-6 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center gap-5">
          {/* Logo Area */}
          <div className="flex items-center gap-3 relative group cursor-pointer z-50">
            <img
              src="/images/logo.png"
              alt="HM Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 tracking-tight relative z-10 transition-transform duration-300 group-hover:scale-105 origin-left">
                Hafizd Mahardhika
                <span className="text-blue-500">.</span>
              </h1>
            </div>
            <div className="absolute -inset-2 bg-blue-500/10 dark:bg-cyan-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Theme Toggle Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 z-50">
            <button
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="relative p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-500 overflow-hidden group hover:scale-110"
            >
              {/* Sun Icon */}
              <svg
                className={`w-5 h-5 absolute transition-all duration-500 transform ${isDarkMode ? '-translate-y-10 opacity-0 rotate-180' : 'translate-y-0 opacity-100 rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              {/* Moon Icon */}
              <svg
                className={`w-5 h-5 absolute transition-all duration-500 transform ${isDarkMode ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 -rotate-180'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
              {/* Button bg glow effect */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden absolute top-full left-5 right-5 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden z-40 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;