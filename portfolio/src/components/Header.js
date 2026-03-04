import React, { useState } from 'react';

function Header({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center gap-5">
        <div className="logo">
          <h1 className="text-2xl font-bold text-black dark:text-white tracking-tight">Hafizd Mahardhika</h1>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">Software Engineer</p>
        </div>
        <button 
          className="md:hidden flex flex-col bg-none border-none cursor-pointer gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-1 bg-gray-800 dark:bg-gray-200 rounded transition-all ${isOpen ? 'bg-black dark:bg-white' : ''}`}></span>
          <span className={`w-6 h-1 bg-gray-800 dark:bg-gray-200 rounded transition-all ${isOpen ? 'bg-black dark:bg-white' : ''}`}></span>
          <span className={`w-6 h-1 bg-gray-800 dark:bg-gray-200 rounded transition-all ${isOpen ? 'bg-black dark:bg-white' : ''}`}></span>
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row flex-col gap-10 md:gap-10 items-center absolute md:relative top-16 md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent p-5 md:p-0 shadow-md md:shadow-none md:dark:shadow-none`}>
          <a href="#projects" className="text-gray-900 dark:text-gray-100 font-medium hover:text-black dark:hover:text-white transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all hover:after:w-full">Projects</a>
          <a href="#experience" className="text-gray-900 dark:text-gray-100 font-medium hover:text-black dark:hover:text-white transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all hover:after:w-full">Experience</a>
          <a href="#about" className="text-gray-900 dark:text-gray-100 font-medium hover:text-black dark:hover:text-white transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all hover:after:w-full">About</a>
          <a href="#contact" className="text-gray-900 dark:text-gray-100 font-medium hover:text-black dark:hover:text-white transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-px after:bg-black dark:after:bg-white after:transition-all hover:after:w-full">Contact</a>
          <button className="md:hidden flex items-center justify-center bg-none border-2 border-black dark:border-white text-black dark:text-white w-10 h-10 rounded-full cursor-pointer text-lg transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black mt-4 pt-4 border-t border-gray-300 dark:border-gray-600" onClick={toggleTheme} title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
        <button className="hidden md:flex items-center justify-center bg-none border-2 border-black dark:border-white text-black dark:text-white w-11 h-11 rounded-full cursor-pointer text-xl transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-110" onClick={toggleTheme} title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;
