import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-light-slate mb-8 flex items-center">
        <span className="text-accent-light dark:text-accent mr-4">01.</span> About Me
        <span className="flex-grow h-px bg-slate-300 dark:bg-dark-slate ml-6"></span>
      </h2>
      <div className="max-w-3xl mx-auto text-slate-600 dark:text-slate">
        <div>
          <p className="mb-4">
            Hello! I'm Karan, a Java Backend Developer with over 10 months of hands-on experience in designing and developing RESTful APIs and Microservices using Spring Boot. My journey in software development has been driven by a passion for creating efficient and scalable backend systems.
          </p>
          <p className="mb-4">
            I have experience in database management with PostgreSQL and MySQL, and I'm proficient in deploying applications on AWS with Docker and Jenkins for CI/CD pipelines. I enjoy enhancing performance, documenting APIs thoroughly, and working collaboratively in Agile environments to deliver high-quality software.
          </p>
           <p>
            I am committed to developing robust backend systems and continuously learning new technologies to contribute effectively to challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;