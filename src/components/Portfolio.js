import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Server, ChevronDown, ExternalLink, Award, GraduationCap, Briefcase, User, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    'Programming Languages': ['JavaScript', 'Java', 'C++', 'C'],
    'Frontend Technologies': ['React.js', 'Tailwind CSS', 'CSS', 'HTML'],
    'Backend Technologies': ['Node.js', 'Express.js'],
    'Database Systems': ['MongoDB', 'MySQL'],
    'Development Tools': ['Git', 'VS Code', 'Postman', 'npm'],
    'Core Concepts': ['REST APIs', 'JWT', 'CRUD Operations', 'OOP', 'DBMS', 'DSA']
  };

  const projects = [
    {
      title: 'ProTasker - Enterprise Task Management System',
      description: 'Full-stack MERN application supporting 1000+ concurrent users with JWT authentication and role-based access control.',
      highlights: [
        'Secure authentication with refresh tokens reducing session timeout by 90%',
        'RESTful APIs achieving 99.9% uptime and sub-200ms response times',
        'Admin dashboard with privilege management and user analytics'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'bcrypt'],
      color: 'from-blue-500 to-purple-600',
      github: 'https://github.com/pratheeshabenedict/ProTasker'
    },
    {
      title: 'Advanced React Notes Application',
      description: 'Responsive note-taking application using React hooks supporting 500+ daily users.',
      highlights: [
        'Context API reducing prop drilling by 80%',
        'Persistent dark/light theme toggle with localStorage',
        'Performance optimization reducing re-renders by 60%'
      ],
      tech: ['React.js', 'Context API', 'Tailwind CSS', 'localStorage API', 'React Hooks'],
      color: 'from-green-500 to-teal-600',
      github: 'https://github.com/pratheeshabenedict/NotebookApp'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable real-time messaging platform using Socket.io supporting 200+ concurrent connections.',
      highlights: [
        'WebSocket communication for instant message delivery',
        'Live user presence indicators and typing indicators',
        'Responsive chat interface with emoji support'
      ],
      tech: ['React.js', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB', 'WebSocket'],
      color: 'from-orange-500 to-red-600',
      github: 'https://github.com/pratheeshabenedict/Chat'
    }
  ];

  const experience = [
    {
      company: 'Checkpoint Systems',
      role: 'Frontend Developer Intern',
      period: 'Jan 2025 - May 2025',
      description: 'Spearheaded development of enterprise-grade inventory management interface serving 500+ retail locations.',
      achievements: [
        'Architected responsive React.js components achieving 98% cross-browser compatibility',
        '40% improvement in page load speeds',
        'Implemented Redux Toolkit reducing data inconsistencies by 85%'
      ]
    },
    {
      company: 'Nxt Logic Software Solutions',
      role: 'Web Developer Intern',
      period: 'Aug 2023 - Sep 2023',
      description: 'Engineered enterprise-level authentication system handling 10,000+ user accounts with zero security breaches.',
      achievements: [
        'Comprehensive role-based access control (RBAC) using MERN stack',
        'Delivered 99.8% uptime authentication service',
        'Advanced security features including password policies and audit logging'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pratheesha
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'experience', 'projects', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${activeSection === section ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/70'
                    }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['hero', 'about', 'skills', 'experience', 'projects', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="text-center z-10 px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Pratheesha
            </h1>
            <div className="text-2xl md:text-3xl mb-8 text-gray-300">
              <span className="inline-block animate-bounce delay-100">Full</span>
              <span className="inline-block animate-bounce delay-200 mx-2">Stack</span>
              <span className="inline-block animate-bounce delay-300">Developer</span>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-400 leading-relaxed">
              Passionate about building scalable web applications with modern technologies.
              Expertise in MERN stack development with a focus on user experience and performance optimization.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="tel:9042181904" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Phone size={24} />
              </a>
              <a href="mailto:pratheesha1925@gmail.com" className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://github.com/pratheeshabenedict" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pratheesha-b-667562225/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-700 rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-white/60 hover:text-white transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="text-blue-400" size={20} />
                  <span>Bangalore, Karnataka</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Full Stack Developer with expertise in MERN stack development and strong problem-solving abilities.
                  Experienced in building scalable web applications with focus on user experience, performance optimization,
                  and secure authentication systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Proven track record of developing responsive, industry-standard applications with modern technologies
                  and best practices. Passionate about creating efficient, user-friendly solutions that make a real impact.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">Experience</span>
                    <span className="text-white">6 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">Projects Completed</span>
                    <span className="text-white">10+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">Technologies</span>
                    <span className="text-white">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">Education</span>
                    <span className="text-white">B.Tech IT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={category}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {category.includes('Programming') && <Code className="text-blue-400 mr-3" size={24} />}
                    {category.includes('Frontend') && <Globe className="text-green-400 mr-3" size={24} />}
                    {category.includes('Backend') && <Server className="text-orange-400 mr-3" size={24} />}
                    {category.includes('Database') && <Database className="text-purple-400 mr-3" size={24} />}
                    {category.includes('Development') && <Code className="text-pink-400 mr-3" size={24} />}
                    {category.includes('Core') && <Award className="text-yellow-400 mr-3" size={24} />}
                    <h3 className="text-xl font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="text-blue-400" size={16} />
                        <span className="text-blue-400 text-lg font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Key Projects
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group`}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-6`}></div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-2 duration-300"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Education & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">B. Tech - Information Technology</h4>
                    <p className="text-blue-400 font-semibold">CGPA: 8.3</p>
                    <p className="text-gray-400">Coimbatore Institute of Technology</p>
                    <p className="text-gray-500">2021-2025</p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Higher Secondary Education</h4>
                    <p className="text-green-400 font-semibold">Grade: 95%</p>
                    <p className="text-gray-400">Christuraja Higher Sec School</p>
                    <p className="text-gray-500">2019-2020</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-6">
                  <Award className="text-yellow-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Udemy - Full Stack Development',
                    'Udemy - React Complete Guide',
                    'Great Learning - Data Analysis using Excel'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl font-bold mb-6 text-white">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's connect and discuss how we can create something amazing together.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="tel:9042181904"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Me</span>
                </a>
                <a
                  href="mailto:pratheesha1925@gmail.com"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Pratheesha. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;