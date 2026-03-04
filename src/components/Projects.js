import React from 'react';
import projectsData from '../data/projects.json';

function Projects() {
  return (
    <section id="projects" className="py-24 px-5 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            {projectsData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {projectsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.projects.map(project => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700/50 flex flex-col"
            >
              {/* Card Header Background */}
              <div className="h-48 relative overflow-hidden group-hover:h-56 transition-all duration-500">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                ) : (
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    style={{
                      background: `linear-gradient(135deg, hsl(${project.id * 40 + 190}, 80%, 55%), hsl(${project.id * 40 + 220}, 80%, 45%))`
                    }}
                  ></div>
                )}
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
              </div>

              <div className="p-8 pt-0 flex flex-col flex-grow relative bg-white dark:bg-gray-800">
                {/* Project Number floating dot */}
                <div className="absolute -top-10 right-8 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center font-bold text-lg text-gray-900 dark:text-white shadow-xl border-4 border-white dark:border-gray-800 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  0{project.id}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-grow mb-8 font-light">
                  {project.description}
                </p>

                <div className="flex justify-between items-end pb-6 mb-6 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <p className="text-[10px] tracking-wider text-gray-400 dark:text-gray-500 uppercase font-semibold mb-1">Year</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-wider text-gray-400 dark:text-gray-500 uppercase font-semibold mb-1">Role</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.role}</p>
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors group/link"
                >
                  View Project
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
