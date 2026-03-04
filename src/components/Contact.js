import React, { useState } from 'react';
import contactData from '../data/contact.json';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(contactData.form.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-5 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-100 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 tracking-tight">
            {contactData.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Contact Info Side */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's talk business</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                Whether you have a project in mind, a question, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-gray-900 shadow-sm transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">{contactData.contactInfo.email.label}</p>
                  <a href={contactData.contactInfo.email.link} className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors break-all">
                    {contactData.contactInfo.email.value}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-gray-700 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-gray-900 shadow-sm transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">{contactData.contactInfo.linkedin.label}</p>
                  <a href={contactData.contactInfo.linkedin.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {contactData.contactInfo.linkedin.value}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 dark:border-gray-700 gap-4 flex flex-wrap">
              {contactData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <form
              className="bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl backdrop-blur-sm relative"
              onSubmit={handleSubmit}
            >
              {/* Subtle top border glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-3xl opacity-50"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={contactData.form.namePlaceholder}
                    className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 transition-all duration-300 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={contactData.form.emailPlaceholder}
                    className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 transition-all duration-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={contactData.form.messagePlaceholder}
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 transition-all duration-300 resize-none shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {contactData.form.buttonText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
