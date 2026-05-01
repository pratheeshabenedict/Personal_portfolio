import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { skills } from '../data';

function SkillBar({ name, level, delay = 0 }) {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className={`font-display font-medium text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {name}
        </span>
        <span className="text-accent font-display font-bold text-sm">{level}%</span>
      </div>
      <div className={`h-1 w-full ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
        <div
          className="h-full bg-accent transition-all ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDuration: '1.2s',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Security: '🔐',
  DevOps: '🚀',
};

const categoryColors = {
  Frontend: '#00E5CC',
  Backend: '#7FFFF0',
  Database: '#00B5A0',
  Security: '#00E5CC',
  DevOps: '#7FFFF0',
};

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-20 ${isDark ? 'bg-surface-dark text-white' : 'bg-surface-light text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <p className="section-label">Expertise</p>
          <h1 className="section-title mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className={`mt-4 text-lg max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A full-stack toolkit spanning modern frontend frameworks, backend services, databases, and security engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], catIdx) => (
            <div
              key={category}
              className={`p-6 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${
                isDark ? 'bg-white/3 border-white/10' : 'bg-white border-gray-100 shadow-sm'
              }`}
              style={{ animationDelay: `${catIdx * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 flex items-center justify-center text-lg"
                  style={{ background: categoryColors[category] + '20' }}
                >
                  {categoryIcons[category]}
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-base"
                    style={{ color: categoryColors[category] }}
                  >
                    {category}
                  </h3>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {skillList.length} technologies
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {skillList.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 100 + i * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div
          className={`mt-16 p-10 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${
            isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
          }`}
        >
          <p className="section-label mb-6">All Technologies</p>
          <div className="flex flex-wrap gap-3">
            {[
              'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'MySQL',
              'Redux Toolkit', 'Context API', 'React Hooks', 'Tailwind CSS', 'HTML5', 'CSS3',
              'JavaScript ES6+', 'JWT', 'OAuth 2.0', 'Passport.js', 'Socket.io', 'WebSockets',
              'AES Encryption', 'bcrypt', 'RBAC', 'OWASP', 'HTTP-only Cookies',
              'Git', 'Postman', 'VS Code', 'npm', 'Agile', 'SDLC',
              'RESTful APIs', 'Dependency Injection', 'Java', 'C++', 'C',
            ].map((tech, i) => (
              <span
                key={tech}
                className={`tag transition-colors hover:border-accent hover:text-accent cursor-default ${
                  isDark ? 'tag-dark' : 'tag-light'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}