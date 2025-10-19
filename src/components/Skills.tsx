import React from 'react';
import {
    FaJava,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaDatabase,
    FaReact,
    FaJenkins,
    FaGithub,
    FaBitbucket,
    FaCogs,
    FaProjectDiagram,
} from 'react-icons/fa';
import {
    SiSpring,
    SiPostgresql,
    SiMysql,
    SiPostman,
    SiSwagger,
    SiJunit5,
    SiApachemaven,
    SiEclipsemosquitto,
    SiSonarqube,
    SiApachekafka,
    SiJsonwebtokens,
} from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";

import { GrServices } from 'react-icons/gr';
import { TbApi, TbSql } from 'react-icons/tb';
import IconWrapper from './IconWrapper';

interface Skill {
    name: string;
    icon: React.ReactElement;
}

const skillsData: { category: string; skills: Skill[] }[] = [
    {
        category: 'Core & Frameworks',
        skills: [
            { name: 'Java 8', icon: <IconWrapper Icon={FaJava} /> },
            { name: 'Spring Boot', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Spring MVC', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Spring Data JPA', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Spring Framework', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Resilience4j', icon: <IconWrapper Icon={FaCogs} /> },
            { name: 'JWT', icon: <IconWrapper Icon={SiJsonwebtokens} /> },
            { name: 'Microservices', icon: <IconWrapper Icon={GrServices} /> },
            { name: 'REST APIs', icon: <IconWrapper Icon={TbApi} /> },
        ],
    },
    {
        category: 'Microservices & Messaging',
        skills: [
            { name: 'Eureka Server (Service Discovery)', icon: <IconWrapper Icon={GrServices} /> },
            { name: 'API Gateway', icon: <IconWrapper Icon={TbApi} /> },
            { name: 'WebClient', icon: <IconWrapper Icon={TbApi} /> },
            { name: 'RestTemplate', icon: <IconWrapper Icon={TbApi} /> },
            { name: 'Apache Kafka', icon: <IconWrapper Icon={SiApachekafka} /> },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'PostgreSQL', icon: <IconWrapper Icon={SiPostgresql} /> },
            { name: 'MySQL', icon: <IconWrapper Icon={SiMysql} /> },
            { name: 'SQL', icon: <IconWrapper Icon={TbSql} /> },
            { name: 'RDBMS', icon: <IconWrapper Icon={FaDatabase} /> },
            { name: 'DBeaver', icon: <IconWrapper Icon={FaDatabase} /> },
            { name: 'pgAdmin', icon: <IconWrapper Icon={FaDatabase} /> },
        ],
    },
    {
        category: 'DevOps & Cloud',
        skills: [
            { name: 'AWS (EC2, IAM, RDS)', icon: <IconWrapper Icon={FaAws} /> },
            { name: 'Docker', icon: <IconWrapper Icon={FaDocker} /> },
            { name: 'DockerHub', icon: <IconWrapper Icon={FaDocker} /> },
            { name: 'Jenkins CI/CD', icon: <IconWrapper Icon={FaJenkins} /> },
            { name: 'Git', icon: <IconWrapper Icon={FaGitAlt} /> },
            { name: 'GitHub', icon: <IconWrapper Icon={FaGithub} /> },
            { name: 'Bitbucket', icon: <IconWrapper Icon={FaBitbucket} /> },
            { name: 'SonarQube', icon: <IconWrapper Icon={SiSonarqube} /> },
            { name: 'Cloud Deployment', icon: <IconWrapper Icon={FaAws} /> },
        ],
    },
    {
        category: 'Testing & Tools',
        skills: [
            { name: 'Postman', icon: <IconWrapper Icon={SiPostman} /> },
            { name: 'Swagger', icon: <IconWrapper Icon={SiSwagger} /> },
            { name: 'JUnit', icon: <IconWrapper Icon={SiJunit5} /> },
            { name: 'Maven', icon: <IconWrapper Icon={SiApachemaven} /> },
            { name: 'MobaXterm', icon: <IconWrapper Icon={SiEclipsemosquitto} /> },
            { name: 'PlantUML', icon: <IconWrapper Icon={FaProjectDiagram} /> },
        ],
    },
    {
        category: 'Frontend & Methodologies',
        skills: [
            { name: 'React', icon: <IconWrapper Icon={FaReact} /> },
            { name: 'Next.js', icon: <IconWrapper Icon={RiNextjsFill} /> },
            { name: 'Agile & SDLC', icon: <IconWrapper Icon={GrServices} /> },
            { name: 'Clean Architecture', icon: <IconWrapper Icon={GrServices} /> },
            { name: 'SOLID Principles', icon: <IconWrapper Icon={GrServices} /> },
            { name: 'Unit Testing', icon: <IconWrapper Icon={SiJunit5} /> },
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <section className="py-24">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-light-slate mb-12 flex items-center">
                <span className="text-accent-light dark:text-accent mr-4">02.</span> My Skills
                <span className="flex-grow h-px bg-slate-300 dark:bg-dark-slate ml-6"></span>
            </h2>
            <div className="space-y-12">
                {skillsData.map((categoryGroup, index) => (
                    <div
                        key={index}
                        className="opacity-0 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                    >
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-light-slate mb-6">
                            {categoryGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {categoryGroup.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex items-center bg-slate-100 dark:bg-secondary py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-accent/20"
                                >
                                    <span className="w-6 h-6 mr-3 text-accent-light dark:text-accent">{skill.icon}</span>
                                    <span className="text-slate-700 dark:text-slate">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;


