import React from 'react';
import heroData from '../data/hero.json';
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-5 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-300 dark:bg-cyan-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-5xl z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 mb-12">

          {/* Profile Image container */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={heroData.profileImage}
              alt={heroData.fullName}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-[6px] border-white dark:border-gray-800 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 tracking-tight">
              {heroData.title} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {heroData.name}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
              {heroData.description} <span className="font-medium text-gray-900 dark:text-white">{heroData.roles[0]}</span> and <span className="font-medium text-gray-900 dark:text-white">{heroData.roles[1]}</span>.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={heroData.buttonPrimary.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {heroData.buttonPrimary.text}
              </a>
              <a
                href={heroData.buttonSecondary.link}
                className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300"
              >
                {heroData.buttonSecondary.text}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;
