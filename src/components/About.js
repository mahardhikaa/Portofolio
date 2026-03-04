import React from 'react';
import aboutData from '../data/about.json';

function About() {
  return (
    <section id="about" className="py-24 px-5 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 tracking-tight">
              {aboutData.title}
            </h2>

            <div className="space-y-6">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 dark:border-gray-700">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="text-left group">
                  <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2 group-hover:scale-110 transform transition-transform origin-left">
                    {stat.value}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl backdrop-blur-sm relative overflow-hidden">
            {/* Inner decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative z-10">
              {aboutData.capabilitiesTitle}
            </h3>

            <div className="flex flex-wrap gap-3 relative z-10">
              {aboutData.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 hover:text-blue-600 dark:hover:text-cyan-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
