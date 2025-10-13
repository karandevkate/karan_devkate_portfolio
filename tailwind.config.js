/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#0a192f',
        'secondary': '#112240',
        'accent': '#64ffda',
        'accent-light': '#3b82f6', // Blue accent for light mode
        'light-slate': '#ccd6f6',
        'slate': '#8892b0',
        'dark-slate': '#495670',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Class-based dark mode
};