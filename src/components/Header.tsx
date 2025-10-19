import React, { useState, useEffect, RefObject } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

interface HeaderProps {
  sections: {
    home: RefObject<HTMLDivElement>;
    about: RefObject<HTMLDivElement>;
    skills: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
  };
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ sections, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', ref: sections.about },
    { name: 'Skills', ref: sections.skills },
    { name: 'Projects', ref: sections.projects },
    { name: 'Contact', ref: sections.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-secondary/80 shadow-lg backdrop-blur-sm'
        : 'bg-white/95 dark:bg-secondary shadow-md'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 px-6 md:px-12">
        <div
          onClick={() => scrollToSection(sections.home)}
          className="text-2xl font-bold text-accent-light dark:text-accent cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <img src={`${process.env.PUBLIC_URL}/Karan.png`} alt="Karan Devkate" className="h-12 w-12 rounded-full object-cover" />

        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.ref)}
              className="text-slate-700 dark:text-light-slate hover:text-accent-light dark:hover:text-accent transition-colors duration-300"
              style={{ animation: `fadeInUp ${0.1 * (index + 1)}s ease-out forwards`, opacity: 0 }}
            >
              <span className="text-accent-light dark:text-accent">0{index + 1}.</span> {link.name}
            </button>
          ))}
          <a
            href={`${process.env.PUBLIC_URL}/assets/Karan_Devkate_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent-light dark:border-accent text-accent-light dark:text-accent px-4 py-2 rounded hover:bg-accent-light/10 dark:hover:bg-accent/10 transition-colors duration-300"
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="text-slate-700 dark:text-light-slate hover:text-accent-light dark:hover:text-accent transition-colors duration-300"
          >
            {theme === 'dark' ? <IconWrapper Icon={FaSun} /> : <IconWrapper Icon={FaMoon} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-slate-700 dark:text-light-slate"
          >
            {theme === 'dark' ? <IconWrapper Icon={FaMoon} /> : <IconWrapper Icon={FaSun} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-accent-light dark:text-accent focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-secondary/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className="text-slate-700 dark:text-light-slate hover:text-accent-light dark:hover:text-accent transition-colors duration-300 w-full py-2"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/assets/Karan_Devkate_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent-light dark:border-accent text-accent-light dark:text-accent px-4 py-2 rounded hover:bg-accent-light/10 dark:hover:bg-accent/10 transition-colors duration-300"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;