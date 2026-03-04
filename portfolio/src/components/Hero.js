import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-5 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-300 dark:bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="flex-shrink-0">
            <img 
              src="/images/profile.png" 
              alt="Hafizd Mahardhika" 
              className="w-40 h-40 rounded-full object-cover border-4 border-black dark:border-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-6xl md:text-7xl font-bold text-black dark:text-white leading-tight mb-5">
              Hi, I'm<br />Hafizd
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              Developing scalable applications with a focus on performance, reliability, and DevOps practices
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap mt-8">
              <a 
                href="https://wa.me/6285280473431?text=Halo%20saya%20tertarik%20dengan%20portofolio%20Anda!"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
              <a 
                href="mailto:hafidz.mahardika236@gmail.com"
                className="inline-block bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
