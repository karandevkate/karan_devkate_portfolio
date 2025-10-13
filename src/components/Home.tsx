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
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center pt-24 md:pt-0">
            <div className="text-center md:text-left md:w-1/2">
                <p
                    className="text-accent-light dark:text-accent text-lg mb-2"
                    style={{ animation: 'fadeInUp 0.3s ease-out forwards', opacity: 0 }}
                >
                    Hi, my name is
                </p>
                <h1
                    className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-light-slate mb-4"
                    style={{ animation: 'fadeInUp 0.4s ease-out forwards', opacity: 0 }}
                >
                    Karan Krishnath Devkate.
                </h1>
                <h2
                    className="text-3xl md:text-5xl font-bold text-slate-700 dark:text-slate mb-6"
                    style={{ animation: 'fadeInUp 0.5s ease-out forwards', opacity: 0 }}
                >
                    I'm a <span className="text-accent-light dark:text-accent">{text}</span>
                    <span className="animate-ping text-slate-700 dark:text-slate">|</span>
                </h2>
                <p
                    className="max-w-xl text-slate-600 dark:text-slate mb-8"
                    style={{ animation: 'fadeInUp 0.6s ease-out forwards', opacity: 0 }}
                >
                    I'm a Java backend developer with a passion for building scalable and reliable systems. I specialize in RESTful APIs, Microservices with Spring Boot, and cloud deployment.
                </p>
                <div
                    className="flex justify-center md:justify-start space-x-4"
                    style={{ animation: 'fadeInUp 0.7s ease-out forwards', opacity: 0 }}
                >
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
            </div>
            <div
                className="md:w-1/2 flex justify-center p-8"
                style={{ animation: 'fadeInUp 0.6s ease-out forwards', opacity: 0 }}
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 border-2 border-accent-light dark:border-accent rounded-full transform rotate-6 transition-transform duration-300"></div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/Karan Devkate.png`}
                        alt="Karan Krishnath Devkate"
                        className="w-full h-full object-cover rounded-full shadow-2xl relative"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;