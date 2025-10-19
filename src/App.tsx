import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    // Default to 'dark' if no saved theme exists
    return savedTheme ? (savedTheme as 'light' | 'dark') : 'dark';
  });

  // Apply theme on mount and update on theme change
  useEffect(() => {
    const root = window.document.documentElement;
    // Ensure dark class is applied initially if theme is dark
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      const root = window.document.documentElement;
      root.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = {
    home: homeRef as React.RefObject<HTMLDivElement>,
    about: aboutRef as React.RefObject<HTMLDivElement>,
    skills: skillsRef as React.RefObject<HTMLDivElement>,
    projects: projectsRef as React.RefObject<HTMLDivElement>,
    contact: contactRef as React.RefObject<HTMLDivElement>,
  };

  return (
    <div className="relative bg-white dark:bg-primary font-sans overflow-x-hidden transition-colors duration-300">

      <AnimatedBackground />
      {/* Background Blobs for dark mode */}
      <div className="hidden dark:block absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
      <div className="hidden dark:block absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="hidden dark:block absolute -bottom-8 left-20 w-72 h-72 bg-dark-slate/20 rounded-full filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10">
        <Header sections={sections} theme={theme} toggleTheme={toggleTheme} />
        <main className="container mx-auto px-6 md:px-12 lg:px-24">
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;