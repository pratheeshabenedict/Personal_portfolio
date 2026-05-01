import { useState } from 'react';
import { Github, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data';
import ProjectDrawer from '../components/ProjectDrawer';

export default function Projects() {
  const { isDark } = useTheme();

  // null  → drawer closed
  // index → which project is open
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const selectedProject = selectedIdx !== null ? projects[selectedIdx] : null;

  function openDrawer(idx) {
    setSelectedIdx(idx);
    setActiveTab('overview');
  }

  function closeDrawer() {
    setSelectedIdx(null);
  }

  return (
    <>
      <div
        className={`min-h-screen pt-24 pb-20 ${isDark ? 'bg-surface-dark text-white' : 'bg-surface-light text-gray-900'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* ── Header ── */}
          <div className="mb-16 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
            <p className="section-label">What I've Built</p>
            <h1 className="section-title mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className={`mt-4 text-lg max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Production-grade applications demonstrating full-stack expertise, scalability,
              and security best practices.
            </p>
          </div>

          {/* ── Projects Grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <button
                key={proj.name}
                onClick={() => openDrawer(idx)}
                aria-haspopup="dialog"
                aria-label={`Open ${proj.name} system design`}
                className={`group relative border flex flex-col text-left w-full transition-all duration-300
                  animate-fade-up opacity-0 [animation-fill-mode:forwards]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                  ${isDark
                    ? 'bg-white/3 border-white/10 hover:border-accent/40 hover:bg-white/5'
                    : 'bg-white border-gray-100 hover:border-accent/40 shadow-sm hover:shadow-xl'
                  }`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Colour accent bar */}
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{ background: proj.color }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Name + GitHub icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-4xl mb-3">{proj.icon}</div>
                      <h2 className={`font-display font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {proj.name}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      {/* Stop propagation so GitHub link doesn't also open drawer */}
                      <a
                        href={proj.github || 'https://github.com/pratheeshabenedict'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 border transition-colors hover:border-accent hover:text-accent ${isDark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-400'
                          }`}
                        aria-label={`GitHub - ${proj.name}`}
                      >
                        <Github size={15} />
                      </a>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-5 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {proj.description}
                  </p>

                  {/* Key metrics */}
                  <div className={`p-3 mb-5 border ${isDark ? 'border-white/5 bg-white/2' : 'border-gray-50 bg-gray-50'
                    }`}>
                    <div className="flex items-center gap-1 mb-2">
                      <Zap size={12} className="text-accent" />
                      <span className="text-accent text-xs font-display font-semibold tracking-wider uppercase">
                        Key Metrics
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {proj.highlights.map((h) => (
                        <div
                          key={h}
                          className={`text-xs px-2 py-1 ${isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                          · {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`tag text-[10px] py-0.5 ${isDark ? 'tag-dark' : 'tag-light'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* System design CTA hint */}
                  <div className={`mt-4 flex items-center gap-1.5 text-[10px] font-display font-semibold
                    tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    style={{ color: 'var(--accent)' }}
                  >
                    <span>View System Design</span>
                    <span>↗</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ── GitHub CTA ── */}
          <div
            className={`mt-16 p-10 border text-center animate-fade-up opacity-0 [animation-fill-mode:forwards] ${isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
              }`}
          >
            <h3 className={`font-display font-bold text-2xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'
              }`}>
              See More on GitHub
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Explore all my repositories, contributions, and open source work.
            </p>
            <a
              href="https://github.com/pratheeshabenedict"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Github size={16} />
              @pratheeshabenedict
            </a>
          </div>
        </div>
      </div>

      {/* ── System Design Drawer (rendered outside page flow) ── */}
      <ProjectDrawer
        project={selectedProject}
        activeTab={activeTab}
        onClose={closeDrawer}
        onTabChange={setActiveTab}
      />
    </>
  );
}