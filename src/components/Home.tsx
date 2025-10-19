import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const Home: React.FC = () => {
    const [text, setText] = useState('');
    const roles = ['Java Developer', 'Backend Engineer', 'Microservices Enthusiast'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
                setTypingSpeed(100);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setTypingSpeed(150);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, typingSpeed, roleIndex, roles]);

    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-12 py-16 md:py-24">
            <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
                <p
                    className="text-accent-light dark:text-accent text-lg md:text-xl font-medium animate-fadeInUp"
                    style={{ animationDelay: '0.3s' }}
                >
                    Hi, my name is
                </p>
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text animate-fadeInUp"
                    style={{ animationDelay: '0.4s' }}
                >
                    Karan Krishnath Devkate.
                </h1>
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 animate-fadeInUp"
                    style={{ animationDelay: '0.5s' }}
                >
                    I'm a <span className="text-accent-light dark:text-accent">{text}</span>
                    <span className="animate-pulse text-gray-700 dark:text-gray-300">|</span>
                </h2>
                <p
                    className="max-w-xl text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed animate-fadeInUp"
                    style={{ animationDelay: '0.6s' }}
                >
                    I'm a Java backend developer with a passion for building scalable and reliable systems. I specialize in RESTful APIs, Microservices with Spring Boot, and cloud deployment.
                </p>
                <div
                    className="flex justify-center md:justify-start space-x-6 animate-fadeInUp"
                    style={{ animationDelay: '0.7s' }}
                >
                    <a
                        href="https://github.com/karandevkate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
                    >
                        <IconWrapper Icon={FaGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/karandevkate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
                    >
                        <IconWrapper Icon={FaLinkedin} />
                    </a>
                    <a
                        href="mailto:karandevkate225@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
                    >
                        <IconWrapper Icon={FaEnvelope} />
                    </a>
                </div>
            </div>

            {/* Image Section with Custom Shape */}
            <div
                className="w-full md:w-1/2 flex justify-center p-4 md:p-8 lg:p-12 animate-fadeInUp"
                style={{ animationDelay: '0.6s' }}
                aria-label="Profile image section"
            >
                <figure className="relative w-[370px] h-[375px] md:w-[370px] md:h-[375px] lg:w-[434px] lg:h-[439px]">
                    <div className="absolute inset-0 border-2 border-accent-light dark:border-accent rounded-full transform rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                        {/* Circular border with hover effect */}
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/Karan Devkate.png`}
                        alt="Karan Krishnath Devkate - Professional portrait"
                        className="w-full h-full object-cover rounded-full shadow-2xl"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `${process.env.PUBLIC_URL}/assets/placeholder.png`;
                            target.alt = "Placeholder for Karan Krishnath Devkate";
                        }}
                        loading="lazy"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-400 dark:text-gray-500">
                        Karan Krishnath Devkate - Java Developer
                    </figcaption>
                </figure>
            </div>
        </section >
    );
};

const styles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .clip-path-polygon {
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

export default Home;