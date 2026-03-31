import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./components/Logo";
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Database, 
  Github, 
  Linkedin, 
  Menu,
  X,
  Cpu,
  Globe,
  Sparkles,
  ChevronRight,
  Award,
  Phone,
  Send,
  Cloud,
  GraduationCap,
  Code2,
  Layers,
  Terminal,
  Settings
} from "lucide-react";

// --- Utility Components ---

const Marquee = ({ children, reverse = false }) => (
  <div className="flex overflow-hidden mask-fade-edges py-12">
    <div className={`flex whitespace-nowrap ${reverse ? 'flex-row-reverse' : ''} marquee-track`}>
      {children}
      {children}
    </div>
  </div>
);

const SectionHeading = ({ number, title, subtitle }) => (
  <div className="mb-16 md:mb-24">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-label text-primary text-sm font-bold tracking-widest uppercase">
        [{number}]
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
    <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6">
      {title}
    </h2>
    {subtitle && (
      <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen atmosphere selection:bg-primary/30 selection:text-black">
      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop scrolled={scrolled} />
    </div>
  );
}

function BackToTop({ scrolled }) {
  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-black rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30 hover:scale-110 transition-transform"
        >
          <ArrowUpRight size={24} className="-rotate-45" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Navbar({ scrolled, isMenuOpen, setIsMenuOpen }) {
  const navLinks = [
    { name: 'About', href: '#about', number: '01' },
    { name: 'Experience', href: '#experience', number: '02' },
    { name: 'Projects', href: '#projects', number: '03' },
    { name: 'Skills', href: '#skills', number: '04' },
    { name: 'Contact', href: '#contact', number: '05' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-nav' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-display font-bold tracking-tighter flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Logo className="w-8 h-8" />
          <span className="hidden sm:inline">KARAN DEVKATE</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group flex flex-col items-start"
            >
              <span className="text-[10px] font-label text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {link.number}
              </span>
              <span className="text-sm font-medium tracking-tight hover:text-primary transition-colors">
                {link.name.toUpperCase()}
              </span>
            </a>
          ))}
          <a 
            href="Karan_Devkate_Java_Developer.pdf" 
            download="Karan_Devkate_Java_Developer.pdf"
            target="_blank"
            className="px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

function MobileMenu({ setIsMenuOpen }) {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {navLinks.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          onClick={() => setIsMenuOpen(false)}
          className="text-4xl font-display font-bold hover:text-primary transition-colors"
        >
          {link.name}
        </a>
      ))}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary" />
              <span className="font-label text-primary text-sm font-bold tracking-[0.3em] uppercase">
                Java Developer
              </span>
            </div>
            
            <h1 className="text-display mb-12">
              KARAN <br />
              <span className="text-primary">DEVKATE.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-xl">
                Java Backend Developer with experience in designing and developing scalable <span className="text-white font-semibold">RESTful APIs and Microservices</span> using Spring Boot.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a href="#contact" className="group flex items-center gap-4 px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform">
                  HIRE ME
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/karandevkate" target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/karandevkate/" target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-[400px] h-[500px] mx-auto rounded-[60px] overflow-hidden border border-white/10 glass-card">
              <img 
                src="Karan.png" 
                alt="Karan Krishnath Devkate" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
            </div>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}

function MarqueeSection() {
  const techs = ['SPRING BOOT', 'MICROSERVICES', 'POSTGRESQL', 'AWS', 'DOCKER', 'KAFKA', 'REDIS', 'JAVA 17', 'KUBERNETES', 'JENKINS', 'ANSIBLE'];
  return (
    <div className="border-y border-white/5 bg-white/[0.02]">
      <Marquee>
        {techs.map((tech) => (
          <div key={tech} className="flex items-center gap-8 mx-12">
            <span className="text-4xl md:text-6xl font-display font-black text-white/10 hover:text-primary/40 transition-colors cursor-default">
              {tech}
            </span>
            <Sparkles className="text-primary/20" size={32} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          number="01" 
          title="SUMMARY" 
          subtitle="Dedicated to creating reliable and high-quality software systems."
        />
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <p className="text-2xl text-on-surface-variant leading-relaxed">
              Java Backend Developer with 1 year of experience focused on 
              <span className="text-white"> designing and developing scalable RESTful APIs and Microservices</span> using Spring Boot. 
              Strong skills in database management with PostgreSQL and MySQL, along with application deployment on AWS using Docker.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-label text-primary text-xs font-bold tracking-widest mb-2 uppercase">Experience</h4>
                <p className="text-3xl font-display font-bold">1 YEAR</p>
              </div>
              <div>
                <h4 className="font-label text-primary text-xs font-bold tracking-widest mb-2 uppercase">Core Tech</h4>
                <p className="text-3xl font-display font-bold">JAVA/SPRING</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Cpu />, title: 'Microservices', desc: 'Spring Cloud, Eureka, API Gateway' },
              { icon: <Database />, title: 'Databases', desc: 'PostgreSQL, MySQL, Redis' },
              { icon: <Cloud />, title: 'DevOps', desc: 'Docker, Kubernetes, AWS, Jenkins' },
              { icon: <Globe />, title: 'Backend', desc: 'Java 17, Spring Boot, JPA' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 glass-card rounded-3xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'First Quad Tech Solutions – Pune',
      period: 'Nov 2024 – Present',
      points: [
        'Designed and integrated RESTful APIs and backend workflows for the Society Maintenance App using Spring Boot and PostgreSQL.',
        'Utilized Caffeine caching to improve performance by 30%.',
        'Integrated AWS RDS database to ensure data consistency and seamless collaboration across the team.',
        'Automated key processes using CRON expressions, improving system efficiency and reducing manual overhead.',
        'Enhanced code quality through unit testing, SonarQube static analysis, and API testing/documentation using Swagger and Postman.',
        'Deployed and managed the application on AWS EC2, optimizing performance and reliability.',
        'Collaborated in an Agile environment, tracked sprint progress, and coordinated across teams to improve delivery quality.'
      ]
    },
    {
      role: 'Java Developer Intern',
      company: 'First Quad Tech Solutions – Pune',
      period: 'Jun 2024 – Nov 2024',
      points: [
        'Applied Spring Boot and Microservices architecture to develop a Company Rating Application using Java, Eureka Server, PostgreSQL, and Angular.',
        'Built modular backend services and RESTful APIs; documented endpoints with Swagger.',
        'Implemented inter-service communication using RestTemplate and WebClient to enhance system scalability and reliability.',
        'Integrated frontend components for real-time user ratings and reviews.',
        'Gained hands-on expertise in microservices architecture, API development, and system scalability.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.02]">
      <div className="container mx-auto">
        <SectionHeading 
          number="02" 
          title="EXPERIENCE" 
          subtitle="Professional journey and technical contributions."
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-[1fr_2fr] gap-8 p-12 border border-white/5 rounded-[40px] hover:bg-white/[0.03] transition-colors"
            >
              <div>
                <span className="font-label text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                  {exp.period}
                </span>
                <h3 className="text-3xl font-display font-bold mb-2">{exp.role}</h3>
                <p className="text-xl text-on-surface-variant">{exp.company}</p>
              </div>
              <ul className="space-y-4">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-4 text-on-surface-variant leading-relaxed">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Paymaster – Automated Payroll System',
      problem: 'The monthly payroll procedure was manual, slow, and prone to calculation errors.',
      solution: 'Developed an automated payroll backend using Spring Boot and PostgreSQL, containerized it with Docker, and deployed it using Ansible Playbooks with securely managed secrets. Implemented scheduled payroll processing and automated salary slip generation.',
      outcome: 'Reduced payroll processing time by 70%, eliminated manual errors, and increased operational reliability.',
      tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Ansible', 'Secrets Management'],
      image: 'https://picsum.photos/seed/payroll/800/600'
    },
    {
      title: 'Company Rating Application',
      problem: 'The monolithic system was difficult to scale, slow to update, and hard to maintain.',
      solution: 'Built the application using independent Spring Boot microservices, integrating Eureka Server for service discovery, an API Gateway for routing, WebClient for inter-service communication, and PostgreSQL for reliable data handling.',
      outcome: 'Enhanced scalability and modular deployments by approximately 70%, leading to faster response times and smoother maintenance.',
      tags: ['Microservices', 'Eureka', 'Spring Cloud', 'WebClient', 'API Gateway'],
      image: 'https://picsum.photos/seed/rating/800/600'
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          number="03" 
          title="PROJECTS" 
          subtitle="Featured systems and architectural implementations."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full overflow-hidden rounded-[40px] glass-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-12 right-12">
                   <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-12 space-y-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">The Problem</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">The Solution</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">The Outcome</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-medium italic">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-label uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: 'Core & Languages',
      icon: <Code2 size={24} />,
      skills: ['Java 8', 'Java 17', 'Collections Framework', 'Multithreading', 'Exception Handling', 'OOP']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers size={24} />,
      skills: ['Spring Framework', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Resilience4j', 'JWT', 'Hibernate']
    },
    {
      title: 'Microservices & Messaging',
      icon: <Globe size={24} />,
      skills: ['REST APIs', 'Eureka Server', 'Spring Cloud Config', 'API Gateway', 'WebClient', 'RestTemplate', 'Apache Kafka']
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['PostgreSQL', 'MySQL', 'SQL', 'DBeaver', 'pgAdmin', 'RDBMS Management', 'Redis']
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      skills: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Kubernetes', 'DockerHub', 'Jenkins CI/CD', 'AWS (EC2, IAM, RDS)', 'Ansible']
    },
    {
      title: 'Tools & Methodology',
      icon: <Settings size={24} />,
      skills: ['Postman', 'Swagger', 'MobaXterm', 'Maven', 'UML (PlantUML)', 'Agile', 'SDLC', 'Clean Architecture', 'SOLID', 'Unit Testing']
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading 
          number="04" 
          title="SKILLS" 
          subtitle="Comprehensive technical expertise across the full backend stack."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((cat, i) => (
            <div key={i} className="p-10 border border-white/5 rounded-[40px] hover:bg-white/[0.02] transition-colors flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-display font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs hover:bg-primary hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    {
      title: 'Bachelor of Engineering in Computer Science',
      issuer: 'AISSMS College of Engineering',
      date: 'Jul 2023',
      icon: <GraduationCap className="text-primary" />
    },
    {
      title: 'Master Microservices with Spring Boot, Docker, Kubernetes',
      issuer: 'Udemy',
      date: 'Nov 2025',
      icon: <Award className="text-primary" />
    },
    {
      title: 'Java Spring Framework 6 with Spring Boot 3',
      issuer: 'Udemy',
      date: 'Dec 2024',
      icon: <Award className="text-primary" />
    },
    {
      title: 'Java Full Stack Development Training',
      issuer: 'CIIT Training Institute, Pune',
      date: '2024',
      icon: <Award className="text-primary" />
    }
  ];

  return (
    <section id="certifications" className="py-32 px-6 bg-white/[0.02]">
      <div className="container mx-auto">
        <SectionHeading 
          number="05" 
          title="CREDENTIALS" 
          subtitle="Validated expertise and formal education."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <div key={i} className="flex items-center gap-8 p-10 glass-card rounded-[40px] group hover:bg-white/[0.05] transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <span className="text-xs font-label text-primary uppercase tracking-widest mb-2 block">{cert.date}</span>
                <h3 className="text-2xl font-display font-bold mb-1">{cert.title}</h3>
                <p className="text-on-surface-variant">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwjopok", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto glass-card rounded-[60px] overflow-hidden grid lg:grid-cols-2">
          <div className="p-16 lg:p-24 bg-primary text-black">
            <SectionHeading 
              number="06" 
              title="CONTACT" 
              subtitle="Let's build something extraordinary together."
            />
            
            <div className="space-y-12 mt-16">
              <div className="flex items-center gap-8">
                <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Email</p>
                  <p className="text-xl md:text-2xl font-display font-bold break-all">karandevkate225@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Phone</p>
                  <p className="text-2xl font-display font-bold">+91 94222 28774</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Location</p>
                  <p className="text-2xl font-display font-bold">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16 lg:p-24">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-primary outline-none transition-colors text-xl font-display"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-primary outline-none transition-colors text-xl font-display"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-primary outline-none transition-colors text-xl font-display resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full py-6 bg-white text-black font-bold rounded-2xl hover:bg-primary transition-colors flex items-center justify-center gap-3 group"
              >
                {status === 'idle' && (
                  <>
                    SEND MESSAGE
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {status === 'submitting' && 'SENDING...'}
                {status === 'success' && 'MESSAGE SENT!'}
                {status === 'error' && 'TRY AGAIN'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm font-label text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <Logo className="w-10 h-10" />
              <h2 className="text-3xl font-display font-bold">KARAN DEVKATE</h2>
            </div>
            <p className="text-on-surface-variant max-w-xs">
              Designing and developing scalable backend architectures with precision and reliability.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/karandevkate" target="_blank" className="text-on-surface-variant hover:text-primary transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/karandevkate/" target="_blank" className="text-on-surface-variant hover:text-primary transition-colors">LINKEDIN</a>
          </div>
          
          <div className="text-on-surface-variant text-sm font-label">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
