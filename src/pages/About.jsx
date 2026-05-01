import { useTheme } from '../hooks/useTheme';
import { profile, education, certifications } from '../data';
import { MapPin, Mail, Phone, Github, Linkedin, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-20 ${isDark ? 'bg-surface-dark text-white' : 'bg-surface-light text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <p className="section-label">Who I Am</p>
          <h1 className="section-title mt-2">
            About <span className="gradient-text">Me</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Bio */}
          <div className="lg:col-span-3 space-y-8">
            {/* Avatar placeholder + intro */}
            <div
              className={`p-8 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
                }`}
              style={{ animationDelay: '100ms' }}
            >
              <div className="flex items-start gap-6">
                {/* Avatar circle */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 bg-accent flex items-center justify-center font-display font-bold text-3xl text-surface-dark">
                    PB
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-surface-dark rounded-full" />
                </div>
                <div>
                  <h2 className={`font-display font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Pratheesha
                  </h2>
                  <p className="text-accent font-display font-medium text-sm tracking-wider mt-0.5">
                    Full Stack Developer · MERN Stack
                  </p>
                  <div className={`flex flex-wrap gap-4 mt-3 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1"><MapPin size={12} /> Bangalore, Karnataka</span>
                    <span className="flex items-center gap-1"><Mail size={12} /> pratheesha1925@gmail.com</span>
                    <span className="flex items-center gap-1"><Phone size={12} /> +91 9042181904</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div
              className={`p-8 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
                }`}
              style={{ animationDelay: '200ms' }}
            >
              <h3 className={`font-display font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Professional Summary
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Results-driven Application Developer with hands-on experience building scalable, enterprise-grade applications
                using Java, Node.js, and MERN stack technologies. Demonstrated ability to boost application performance by 45%,
                reduce security vulnerabilities by 90%, and maintain 99.9% API uptime across production systems.
              </p>
              <p className={`leading-relaxed mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Proficient in Software Development Life Cycle (SDLC), RESTful API design, transaction management,
                JWT/OAuth 2.0 authentication, and DevOps practices. B.Tech in Information Technology with 8.3 CGPA (2025).
              </p>
            </div>

            {/* What I do */}
            <div
              className={`p-8 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
                }`}
              style={{ animationDelay: '300ms' }}
            >
              <h3 className={`font-display font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                What I Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '⚡', title: 'Performance Optimization', desc: 'Code splitting, lazy loading, memoization, virtualization' },
                  { icon: '🔐', title: 'Security Engineering', desc: 'AES encryption, JWT, OAuth 2.0, RBAC, OWASP compliance' },
                  { icon: '🏗️', title: 'Scalable Architecture', desc: 'MERN stack, RESTful APIs, WebSockets, modular design' },
                  { icon: '🎨', title: 'UI/UX Development', desc: 'React.js, Tailwind CSS, responsive & accessible interfaces' },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className={`p-4 border transition-colors ${isDark ? 'border-white/5 hover:border-accent/30' : 'border-gray-100 hover:border-accent/30'
                      }`}
                  >
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className={`font-display font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Info cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <div
              className={`p-6 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
                }`}
              style={{ animationDelay: '150ms' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-accent" />
                <span className="section-label mb-0">Education</span>
              </div>
              <div className={`border-l-2 border-accent pl-4`}>
                <div className={`font-display font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {education.institution}
                </div>
                <div className="text-accent text-sm font-medium mt-0.5">{education.degree}</div>
                <div className={`flex items-center justify-between mt-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>{education.period}</span>
                  <span className={`font-display font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div
              className={`p-6 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
                }`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-accent" />
                <span className="section-label mb-0">Certifications</span>
              </div>
              <div className="space-y-3">
                {certifications.map(cert => (
                  <div
                    key={cert.name}
                    className={`flex items-start gap-3 p-3 border ${isDark ? 'border-white/5 bg-white/2' : 'border-gray-50 bg-gray-50'
                      }`}
                  >
                    <span className="text-xl shrink-0">{cert.icon}</span>
                    <div>
                      <div className={`font-display font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {cert.name}
                      </div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div
              className={`p-6 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
                }`}
              style={{ animationDelay: '250ms' }}
            >
              <p className="section-label">Connect</p>
              <div className="space-y-3 mt-2">
                {[
                  { label: 'GitHub', href: 'https://github.com/pratheeshabenedict', icon: Github, handle: '@pratheeshabenedict' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pratheesha-b-667562225/', icon: Linkedin, handle: 'pratheesha-b' },
                  { label: 'Email', href: 'mailto:pratheesha1925@gmail.com', icon: Mail, handle: 'pratheesha1925@gmail.com' },
                ].map(({ label, href, icon: Icon, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 border transition-all duration-200 group hover:border-accent ${isDark ? 'border-white/5' : 'border-gray-100'
                      }`}
                  >
                    <Icon size={16} className="text-accent" />
                    <div>
                      <div className={`font-display font-semibold text-xs ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} group-hover:text-accent transition-colors`}>{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="border border-accent/30 p-6 bg-accent/5 animate-fade-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-accent font-display font-semibold text-sm tracking-wider uppercase">
                  Open to Work
                </span>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Currently seeking Full Stack / MERN Developer roles. Available for full-time positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}