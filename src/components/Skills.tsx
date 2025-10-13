import React from 'react';
import { FaJava, FaAws, FaDocker, FaGitAlt, FaDatabase, FaReact, FaJenkins, FaGithub } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiMysql, SiPostman, SiSwagger, SiJunit5, SiApachemaven } from 'react-icons/si';
import { GrServices } from 'react-icons/gr';
import { TbApi, TbSql } from 'react-icons/tb';
import { IconType } from 'react-icons';
import IconWrapper from './IconWrapper';

interface Skill {
    name: string;
    icon: React.ReactElement; // Keep React.ReactElement for rendered icon
}

const skillsData: { category: string; skills: Skill[] }[] = [
    {
        category: 'Core & Frameworks',
        skills: [
            { name: 'Java 8', icon: <IconWrapper Icon={FaJava} /> },
            { name: 'Spring Boot', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Spring MVC', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Spring Data JPA', icon: <IconWrapper Icon={SiSpring} /> },
            { name: 'Microservices', icon: <IconWrapper Icon={GrServices} /> },
            { name: 'REST APIs', icon: <IconWrapper Icon={TbApi} /> },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'PostgreSQL', icon: <IconWrapper Icon={SiPostgresql} /> },
            { name: 'MySQL', icon: <IconWrapper Icon={SiMysql} /> },
            { name: 'SQL', icon: <IconWrapper Icon={TbSql} /> },
            { name: 'RDBMS', icon: <IconWrapper Icon={FaDatabase} /> },
        ],
    },
    {
        category: 'DevOps & Cloud',
        skills: [
            { name: 'AWS (EC2, RDS)', icon: <IconWrapper Icon={FaAws} /> },
            { name: 'Docker', icon: <IconWrapper Icon={FaDocker} /> },
            { name: 'Jenkins', icon: <IconWrapper Icon={FaJenkins} /> },
            { name: 'Git', icon: <IconWrapper Icon={FaGitAlt} /> },
            { name: 'GitHub', icon: <IconWrapper Icon={FaGithub} /> },
        ],
    },
    {
        category: 'Frontend & Others',
        skills: [
            { name: 'React', icon: <IconWrapper Icon={FaReact} /> },
            { name: 'Postman', icon: <IconWrapper Icon={SiPostman} /> },
            { name: 'Swagger', icon: <IconWrapper Icon={SiSwagger} /> },
            { name: 'JUnit', icon: <IconWrapper Icon={SiJunit5} /> },
            { name: 'Maven', icon: <IconWrapper Icon={SiApachemaven} /> },
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
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-light-slate mb-6">{categoryGroup.category}</h3>
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