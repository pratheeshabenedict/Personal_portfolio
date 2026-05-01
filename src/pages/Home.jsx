import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { profile, stats } from '../data';

const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'React.js Specialist', 'Node.js Developer'];

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout;

    if (!deleting && subIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setSubIndex(s => s + (deleting ? -1 : 1)),
        deleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="cursor" />
    </span>
  );
}

export default function Home() {
  const { isDark } = useTheme();
  const heroRef = useRef(null);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-surface-dark text-white' : 'bg-surface-light text-gray-900'}`}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background orbs */}
        <div
          className="orb w-96 h-96 top-1/4 -right-20 opacity-20"
          style={{ background: isDark ? 'radial-gradient(circle, #00E5CC, transparent)' : 'radial-gradient(circle, #00E5CC55, transparent)' }}
        />
        <div
          className="orb w-64 h-64 bottom-1/4 -left-10 opacity-10"
          style={{
            background: 'radial-gradient(circle, #00E5CC, transparent)',
            animationDelay: '4s',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: '100ms' }}
              >
                <span className="section-label">Available for Opportunities</span>
              </div>

              <h1
                className="section-title mt-2 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: '200ms' }}
              >
                Hey, I'm{' '}
                <span className="gradient-text">Pratheesha</span>
              </h1>

              <div
                className={`text-2xl md:text-3xl font-display font-medium mt-4 animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                style={{ animationDelay: '300ms' }}
              >
                <Typewriter words={roles} />
              </div>

              <p
                className={`mt-6 text-base md:text-lg leading-relaxed max-w-xl animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                style={{ animationDelay: '400ms' }}
              >
                Building scalable, enterprise-grade web applications with React.js and Node.js.
                Boosted performance by 45%, reduced vulnerabilities by 90%, and maintained 99.9% API uptime in production.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 mt-8 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: '500ms' }}
              >
                <Link to="/projects" className="btn-primary">
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Let's Talk
                </Link>
              </div>

              {/* Social */}
              <div
                className="flex items-center gap-4 mt-8 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: '600ms' }}
              >
                {[
                  { href: 'https://github.com/pratheeshabenedict', icon: Github },
                  { href: 'https://www.linkedin.com/in/pratheesha-b-667562225/', icon: Linkedin },
                  { href: 'mailto:pratheesha1925@gmail.com', icon: Mail },
                ].map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 border transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-1 ${isDark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-400'
                      }`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
                <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  Bangalore, India
                </span>
              </div>
            </div>

            {/* Right - Stats Card */}
            <div
              className="animate-fade-up opacity-0 [animation-fill-mode:forwards] hidden lg:block"
              style={{ animationDelay: '400ms' }}
            >
              <div
                className={`relative p-8 border ${isDark ? 'bg-white/3 border-white/10' : 'bg-white border-gray-100 shadow-2xl shadow-gray-100'
                  }`}
              >
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-accent" />
                <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center">
                  <span className="text-surface-dark text-xs font-bold">↗</span>
                </div>

                <p className="section-label mb-6">Impact in Numbers</p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '45%', label: 'Performance\nImprovement', note: 'via code splitting & lazy loading' },
                    { value: '90%', label: 'Security\nVulnerabilities Reduced', note: 'AES + JWT + OWASP' },
                    { value: '99.9%', label: 'API\nUptime', note: 'sub-200ms response times' },
                    { value: '30+', label: 'Production\nModules Built', note: 'at Arbeit AI' },
                  ].map(({ value, label, note }) => (
                    <div
                      key={value}
                      className={`p-4 border transition-colors ${isDark ? 'border-white/5 hover:border-accent/30' : 'border-gray-100 hover:border-accent/30'
                        }`}
                    >
                      <div className="font-display font-bold text-3xl text-accent">{value}</div>
                      <div className={`font-display font-semibold text-sm mt-1 whitespace-pre-line leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {label}
                      </div>
                      <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{note}</div>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 pt-6 border-t flex items-center justify-between ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                  <div>
                    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Education</div>
                    <div className={`font-display font-semibold text-sm mt-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      B.Tech IT • CGPA 8.3
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Coimbatore Institute of Technology
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Open to work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <ChevronDown size={20} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
          </div>
        </div>
      </section>

      {/* Tech Strip */}
      <section className={`py-6 border-y overflow-hidden ${isDark ? 'border-white/5 bg-white/2' : 'border-gray-100 bg-white'}`}>
        <div className="flex gap-10 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'JWT', 'OAuth 2.0', 'Socket.io', 'TypeScript', 'REST APIs', 'MERN Stack',
            'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'JWT', 'OAuth 2.0', 'Socket.io', 'TypeScript', 'REST APIs', 'MERN Stack'].map((tech, i) => (
              <span
                key={i}
                className={`font-display font-semibold text-sm tracking-widest uppercase ${i % 4 === 0 ? 'text-accent' : isDark ? 'text-gray-600' : 'text-gray-300'
                  }`}
              >
                {tech} <span className="mx-4 text-accent/30">·</span>
              </span>
            ))}
        </div>
      </section>

      {/* Quick feature sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 dark:bg-white/5">
          {[
            {
              icon: '⚡',
              title: 'Performance First',
              body: 'Achieved 45% performance improvement using code splitting, lazy loading, and memoization with 100% Lighthouse SEO score.',
            },
            {
              icon: '🔐',
              title: 'Security Expert',
              body: 'Implemented AES encryption, HTTP-only cookies, RBAC, and JWT auth - reducing vulnerabilities by 90% aligned with OWASP.',
            },
            {
              icon: '🌐',
              title: 'Full Stack MERN',
              body: 'From React frontends to Express APIs and MongoDB - end-to-end development with 99.9% API uptime in production.',
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className={`p-8 group transition-all duration-300 ${isDark ? 'bg-surface-dark hover:bg-white/3' : 'bg-white hover:bg-gray-50'
                }`}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className={`font-display font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{body}</p>
              <div className="w-0 h-px bg-accent mt-4 transition-all duration-500 group-hover:w-12" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className={`border-y ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label">Ready to collaborate?</p>
            <h2 className={`font-display font-bold text-3xl md:text-4xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let's build something <span className="gradient-text">remarkable</span> together.
            </h2>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className={`btn-outline`}>
              See Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}