import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  return (
    <section className="py-24 text-center">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-light-slate mb-2 flex items-center justify-center">
        <span className="text-accent-light dark:text-accent mr-2">04.</span> What's Next?
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-light-slate mb-4">Get In Touch</h3>
      <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate mb-8">
        I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>

      <form action="https://formspree.io/f/xpwjopok" method="POST" className="max-w-xl mx-auto text-left">
        <div className="mb-4">
          <label htmlFor="name" className="block text-slate-700 dark:text-slate text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-100 dark:bg-secondary border border-slate-300 dark:border-dark-slate rounded-md py-2 px-3 text-slate-800 dark:text-light-slate leading-tight focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-slate-700 dark:text-slate text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-100 dark:bg-secondary border border-slate-300 dark:border-dark-slate rounded-md py-2 px-3 text-slate-800 dark:text-light-slate leading-tight focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-slate-700 dark:text-slate text-sm font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-100 dark:bg-secondary border border-slate-300 dark:border-dark-slate rounded-md py-2 px-3 text-slate-800 dark:text-light-slate leading-tight focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent"
            placeholder="Your message here..."
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-block border border-accent-light dark:border-accent text-accent-light dark:text-accent px-8 py-4 rounded hover:bg-accent-light/10 dark:hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;