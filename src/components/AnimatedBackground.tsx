import React from 'react';

const Fish: React.FC = () => (
    <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
            d="M 98,25 C 98,35 75,48 50,48 C 25,48 2,35 2,25 C 2,15 25,2 50,2 C 75,2 98,15 98,25 Z"
            fill="currentColor"
            stroke="none"
        />
        <path d="M 98,25 L 75,10 L 75,40 Z" fill="currentColor" stroke="none" />
        <circle cx="20" cy="22" r="3" fill="#020617" />
    </svg>
);

const Arrow: React.FC = () => (
    <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
            d="M 10,10 L 90,10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
        />
        <polygon points="90,5 100,10 90,15" fill="currentColor" />
        <polygon points="10,5 0,10 10,15" fill="currentColor" />
    </svg>
);

// Interface with union 
interface ElementInstance {
    id: number;
    top: string;
    size: string;
    duration: string;
    delay: string;
    opacity: number;
    color: string;
    zIndex: number;
    type: 'fish' | 'arrow';
}

// Generate instances
const generateInstances = (count: number, type: 'fish' | 'arrow'): ElementInstance[] =>
    Array.from({ length: count }).map((_, i) => {
        const base = {
            id: i,
            top: `${Math.random() * 95}%`,
            size: `${Math.random() * 3 + 1.5}rem`,
            duration: `${Math.random() * 15 + 25}s`,
            delay: `${Math.random() * -30}s`,
            opacity: Math.random() * 0.3 + 0.2,
            zIndex: Math.random() > 0.5 ? 10 : 0,
        };
        let color: string;
        switch (type) {
            case 'fish':
                color = `hsl(180, 70%, ${Math.random() * 30 + 40}%)`;
                base.size = `${Math.random() * 5 + 2}rem`;
                break;
            case 'arrow':
                color = `hsl(30, 80%, ${Math.random() * 20 + 50}%)`;
                break;
            default:
                color = `hsl(0, 0%, 50%)`;
                break;
        }
        return { ...base, color, type };
    });

const allInstances: ElementInstance[] = [
    ...generateInstances(15, 'fish'),
    ...generateInstances(10, 'arrow'),
].sort(() => Math.random() - 0.5);

const AnimatedBackground: React.FC = () => {
    const renderElement = (instance: ElementInstance) => {
        let element;
        switch (instance.type) {
            case 'fish':
                element = <Fish />;
                break;
            case 'arrow':
                element = <Arrow />;
                break;
        }
        const className = instance.type === 'fish' ? 'animate-swim' : 'animate-arrow';
        return (
            <div
                key={instance.id}
                className={`absolute left-0 ${className}`}
                style={{
                    top: instance.top,
                    width: instance.size,
                    height: 'auto',
                    animationDuration: instance.duration,
                    animationDelay: instance.delay,
                    opacity: instance.opacity,
                    color: instance.color,
                    zIndex: instance.zIndex,
                }}
            >
                {element}
            </div>
        );
    };

    return (
        <>
            <style>{`
                body {
                    background-color: #020617; /* Dark background to contrast with arrows */
                }
                @keyframes swim {
                    0% { transform: translateX(-100%) scaleX(1); }
                    49.99% { transform: translateX(calc(100vw + 100%)) scaleX(1); }
                    50% { transform: translateX(calc(100vw + 100%)) scaleX(-1); }
                    99.99% { transform: translateX(-100%) scaleX(-1); }
                    100% { transform: translateX(-100%) scaleX(1); }
                }
                @keyframes animate-arrow {
                    0% { transform: translateX(-100%) rotate(0deg); }
                    25% { transform: translateX(25vw) rotate(-10deg); }
                    50% { transform: translateX(50vw) rotate(0deg); }
                    75% { transform: translateX(75vw) rotate(10deg); }
                    100% { transform: translateX(100vw + 100%) rotate(0deg); }
                }
                .animate-swim {
                    animation: swim linear infinite;
                    will-change: transform;
                }
                .animate-arrow {
                    animation: animate-arrow ease-in-out infinite;
                    will-change: transform;
                }
                .text-shadow {
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                }
            `}</style>
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden" aria-hidden="true">
                {allInstances.map(renderElement)}
            </div>
        </>
    );
};

export default AnimatedBackground;