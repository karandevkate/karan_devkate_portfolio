import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    title: 'Company Rating Application',
    description: 'A scalable application developed during an internship. Features modular backend services, inter-service communication, and real-time user ratings and reviews.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'Eureka Server', 'React', 'PostgreSQL', 'Swagger'],
    githubUrl: 'https://github.com/karandevkate'
  },
  {
    title: 'Online Student Exam Portal',
    description: 'A web-based examination system to manage students, subjects, and question banks. Includes secure CRUD operations and enables efficient administration of exam content.',
    stack: ['Java', 'Spring Boot', 'SQL', 'REST API', 'Thymeleaf'],
    githubUrl: 'https://github.com/karandevkate'
  },
  {
    title: 'Society Maintenance App Backend',
    description: 'Designed and integrated RESTful APIs and backend workflows. Utilized Caffeine caching to improve performance by 30% and integrated AWS RDS for data consistency.',
    stack: ['Spring Boot', 'PostgreSQL', 'AWS RDS', 'Caffeine Cache', 'Swagger', 'Postman'],
    githubUrl: 'https://github.com/karandevkate'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-secondary p-6 rounded-lg shadow-lg flex flex-col h-full transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-accent/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-light-slate group-hover:text-accent-light dark:group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate hover:text-accent-light dark:hover:text-accent transition-colors duration-300"
              >
                <IconWrapper Icon={FaGithub} />
              </a>
            )}
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate text-sm mb-4">{project.description}</p>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2 text-xs">
          {project.stack.map((tech, i) => (
            <li
              key={i}
              className="bg-blue-100 text-blue-800 dark:bg-dark-slate dark:text-accent px-3 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-light-slate mb-12 flex items-center">
        <span className="text-accent-light dark:text-accent mr-4">03.</span> My Projects
        <span className="flex-grow h-px bg-slate-300 dark:bg-dark-slate ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;