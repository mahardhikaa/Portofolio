import React from 'react';
import experienceData from '../data/experience.json';

function Experience() {
  return (
    <section id="experience" className="py-24 px-5 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            {experienceData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {experienceData.subtitle}
          </p>
        </div>

        {/* Professional Experience List */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center md:text-left border-l-4 border-blue-500 pl-4">{experienceData.experienceTitle}</h3>
          <div className="relative max-w-4xl mx-auto space-y-10">
            {experienceData.experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">

                {/* Timeline Connector between cards (except last one) */}
                {index !== experienceData.experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-[-40px] w-0.5 bg-gradient-to-b from-blue-300 dark:from-cyan-600 to-transparent opacity-50 z-0"></div>
                )}

                {/* Content Card (Stacked Layout) */}
                <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-900/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group/card ml-4 md:ml-0 flex flex-col md:flex-row gap-6 md:gap-10">

                  {/* Subtle gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0"></div>

                  {/* Left Side: Timeline dot & Period */}
                  <div className="relative z-10 md:w-1/4 flex flex-col items-start pt-1">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      {/* Glowing Dot */}
                      <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shrink-0">
                        <div className="absolute inset-0 bg-blue-100 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-800 shadow-sm top-0 left-[-8px] md:left-0"></div>
                        <div className="absolute w-2.5 h-2.5 bg-blue-500 dark:bg-cyan-400 rounded-full top-[11px] md:top-[15px] left-[3px] md:left-[15px] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                      </div>
                      {/* Period Badge */}
                      <span className="md:hidden inline-block px-4 py-1.5 bg-blue-50 dark:bg-gray-700/50 text-blue-600 dark:text-cyan-400 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-100 dark:border-gray-600">
                        {exp.period}
                      </span>
                    </div>
                    {/* Desktop Period text */}
                    <div className="hidden md:block pl-16 pt-2">
                      <span className="text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Main Content */}
                  <div className="relative z-10 md:w-3/4 pl-8 md:pl-0 border-l-2 md:border-l-0 border-blue-100 dark:border-gray-700">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-cyan-400 transition-colors mb-2 tracking-tight">
                        {exp.title}
                      </h3>

                      <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-base md:text-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education List */}
        <div className="pt-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center md:text-left border-l-4 border-green-500 pl-4">{experienceData.educationTitle}</h3>
          <div className="relative max-w-4xl mx-auto space-y-10">
            {experienceData.education.map((exp, index) => (
              <div key={exp.id} className="relative group">

                {/* Timeline Connector between cards (except last one) */}
                {index !== experienceData.education.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-[-40px] w-0.5 bg-gradient-to-b from-green-300 dark:from-green-600 to-transparent opacity-50 z-0"></div>
                )}

                {/* Content Card (Stacked Layout) */}
                <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group/card ml-4 md:ml-0 flex flex-col md:flex-row gap-6 md:gap-10">

                  {/* Subtle gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent dark:from-green-900/10 dark:to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0"></div>

                  {/* Left Side: Timeline dot & Period */}
                  <div className="relative z-10 md:w-1/4 flex flex-col items-start pt-1">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      {/* Glowing Dot */}
                      <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shrink-0">
                        <div className="absolute inset-0 bg-green-100 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-800 shadow-sm top-0 left-[-8px] md:left-0"></div>
                        <div className="absolute w-2.5 h-2.5 bg-green-500 dark:bg-green-400 rounded-full top-[11px] md:top-[15px] left-[3px] md:left-[15px] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                      </div>
                      {/* Period Badge */}
                      <span className="md:hidden inline-block px-4 py-1.5 bg-green-50 dark:bg-gray-700/50 text-green-600 dark:text-green-400 rounded-full text-xs font-bold tracking-widest uppercase border border-green-100 dark:border-gray-600">
                        {exp.period}
                      </span>
                    </div>
                    {/* Desktop Period text */}
                    <div className="hidden md:block pl-16 pt-2">
                      <span className="text-sm font-bold text-green-600 dark:text-green-400 tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Main Content */}
                  <div className="relative z-10 md:w-3/4 pl-8 md:pl-0 border-l-2 md:border-l-0 border-green-100 dark:border-gray-700">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover/card:text-green-600 dark:group-hover/card:text-green-400 transition-colors mb-2 tracking-tight">
                        {exp.title}
                      </h3>

                      <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-base md:text-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
