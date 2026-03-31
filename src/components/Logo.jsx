import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => (
  <img 
    src="/Logo.png" 
    alt="Logo" 
    className={`${className} object-contain`} 
  />
);

export default Logo;
