import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-slate-600 dark:text-slate">
        <div className="flex justify-center space-x-6 mb-4 md:hidden">
          <a
            href="https://github.com/karandevkate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate hover:text-accent-light dark:hover:text-accent transition-all duration-300 transform hover:-translate-y-1"
          >
            <IconWrapper Icon={FaGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/karandevkate/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate hover:text-accent-light dark:hover:text-accent transition-all duration-300 transform hover:-translate-y-1"
          >
            <IconWrapper Icon={FaLinkedin} />
          </a>
          <a
            href="mailto:karandevkate225@gmail.com"
            className="text-slate-600 dark:text-slate hover:text-accent-light dark:hover:text-accent transition-all duration-300 transform hover:-translate-y-1"
          >
            <IconWrapper Icon={FaEnvelope} />
          </a>
        </div>
        <p className="text-sm">Designed & Built by Karan Krishnath Devkate</p>
        <p className="text-xs mt-1">© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;