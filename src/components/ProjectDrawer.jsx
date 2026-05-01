import { useEffect, useCallback } from 'react';
import { Github, X, Zap, Layers, GitBranch } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// ─────────────────────────────────────────────────────────────
// Architecture node colour map
// matches your existing accent palette + safe contrasts
// ─────────────────────────────────────────────────────────────
const NODE_STYLES = {
  client: {
    light: 'border-accent/50 text-accent bg-accent/5',
    dark:  'border-[#00E5CC]/40 text-[#00E5CC] bg-[#00E5CC]/5',
  },
  api: {
    light: 'border-blue-400/40 text-blue-500 bg-blue-50',
    dark:  'border-[#7FFFF0]/30 text-[#7FFFF0] bg-[#7FFFF0]/5',
  },
  auth: {
    light: 'border-amber-400/50 text-amber-600 bg-amber-50',
    dark:  'border-amber-400/40 text-amber-300 bg-amber-400/5',
  },
  db: {
    light: 'border-accent/40 text-accent bg-accent/5',
    dark:  'border-[#00B5A0]/40 text-[#00B5A0] bg-[#00B5A0]/5',
  },
  ws: {
    light: 'border-purple-400/40 text-purple-600 bg-purple-50',
    dark:  'border-purple-400/35 text-purple-300 bg-purple-400/5',
  },
  cache: {
    light: 'border-sky-400/40 text-sky-600 bg-sky-50',
    dark:  'border-sky-400/30 text-sky-300 bg-sky-400/5',
  },
};

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

function StatBox({ val, lbl, isDark }) {
  return (
    <div className={`p-3 border ${
      isDark
        ? 'bg-white/3 border-white/7'
        : 'bg-gray-50 border-gray-100'
    }`}>
      <div
        className="font-display font-bold text-xl mb-1"
        style={{ color: 'var(--accent)' }}
      >
        {val}
      </div>
      <div className={`text-[10px] font-display font-semibold tracking-widest uppercase ${
        isDark ? 'text-gray-500' : 'text-gray-400'
      }`}>
        {lbl}
      </div>
    </div>
  );
}

function ArchNode({ node, isDark }) {
  const styles = NODE_STYLES[node.cls] || NODE_STYLES.api;
  return (
    <div
      className={`border px-3 py-2 text-center font-display font-semibold text-[10px] tracking-widest uppercase transition-transform duration-150 hover:-translate-y-0.5 ${
        isDark ? styles.dark : styles.light
      }`}
    >
      {node.text}
    </div>
  );
}

function ArchDiagram({ archLayers, isDark }) {
  return (
    <div className={`p-4 border mb-5 ${
      isDark ? 'bg-black/30 border-white/6' : 'bg-gray-50 border-gray-100'
    }`}>
      {archLayers.map((layer, li) => (
        <div key={layer.label}>
          {li > 0 && (
            <div className={`flex justify-center my-1 text-sm ${
              isDark ? 'text-white/20' : 'text-gray-300'
            }`}>↓</div>
          )}
          <div className={`font-display text-[9px] tracking-[0.25em] uppercase font-semibold text-center mb-2 mt-3 ${
            isDark ? 'text-white/20' : 'text-gray-300'
          }`}>
            {layer.label}
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {layer.nodes.map((node, ni) => (
              <div key={node.text} className="flex items-center gap-2">
                {ni > 0 && (
                  <span className={isDark ? 'text-white/20' : 'text-gray-300'}>→</span>
                )}
                <ArchNode node={node} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FlowStep({ step, index, isDark, isLast }) {
  return (
    <div className="flex gap-4 relative">
      {/* Connector line */}
      {!isLast && (
        <div
          className={`absolute left-4 top-8 bottom-0 w-px ${
            isDark ? 'bg-white/7' : 'bg-gray-100'
          }`}
        />
      )}

      {/* Step number */}
      <div
        className="flex-shrink-0 w-8 h-8 border flex items-center justify-center font-display font-bold text-[11px] z-10 relative"
        style={{
          borderColor: 'var(--accent)',
          color: 'var(--accent)',
          background: 'color-mix(in srgb, var(--accent) 5%, transparent)',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className={`pb-5 flex-1 ${isLast ? '' : ''}`}>
        <div className={`font-display font-bold text-sm pt-1 mb-1 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {step.title}
        </div>
        <div className={`text-xs leading-relaxed mb-2 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {step.desc}
        </div>
        {step.code && (
          <div className={`px-3 py-2 border font-mono text-[10px] leading-relaxed whitespace-pre-wrap break-all ${
            isDark
              ? 'bg-black/40 border-white/6 text-[#7FFFF0]'
              : 'bg-gray-50 border-gray-100 text-blue-600'
          }`}>
            {step.code}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Tab definitions
// ─────────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview',      label: 'Overview',     Icon: Zap },
  { id: 'architecture',  label: 'Architecture', Icon: Layers },
  { id: 'flow',          label: 'Data Flow',    Icon: GitBranch },
];

// ─────────────────────────────────────────────────────────────
// Main Drawer component
// ─────────────────────────────────────────────────────────────
export default function ProjectDrawer({ project, activeTab, onClose, onTabChange }) {
  const { isDark } = useTheme();

  // Close on Escape key
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, handleKey]);

  if (!project) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* ── Drawer ── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} system design`}
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-[680px] flex flex-col
          transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isDark
            ? 'bg-[#111] border-l border-white/8'
            : 'bg-white border-l border-gray-100 shadow-2xl'
          }`}
      >
        {/* Colour accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: project.color }}
        />

        {/* ── Header ── */}
        <div className={`flex items-start justify-between gap-3 px-6 pt-6 pb-4 border-b flex-shrink-0 ${
          isDark ? 'border-white/7' : 'border-gray-100'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none">{project.icon}</span>
            <div>
              <h2 className={`font-display font-bold text-xl leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {project.name}
              </h2>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {project.stack.slice(0, 3).join(' · ')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close drawer"
            className={`w-8 h-8 flex items-center justify-center border transition-colors flex-shrink-0 ${
              isDark
                ? 'border-white/10 text-gray-500 hover:border-white/20 hover:text-white bg-white/3 hover:bg-white/7'
                : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <X size={14} />
          </button>
        </div>

        {/* ── Tabs ── */}
        <div className={`flex flex-shrink-0 px-6 border-b ${
          isDark ? 'border-white/7' : 'border-gray-100'
        }`}>
          {TABS.map(({ id, label, Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                className={`flex items-center gap-1.5 px-4 py-3 font-display text-[10px] font-semibold tracking-[0.15em] uppercase border-b-2 -mb-px transition-colors duration-200 ${
                  isActive
                    ? 'border-accent text-accent'
                    : isDark
                      ? 'border-transparent text-gray-500 hover:text-gray-300'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
                style={isActive ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : {}}
              >
                <Icon size={11} />
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto px-6 py-5 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">

          {/* ────── OVERVIEW ────── */}
          {activeTab === 'overview' && (
            <div>
              {/* Stats grid */}
              {project.stats && (
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {project.stats.map((s) => (
                    <StatBox key={s.lbl} val={s.val} lbl={s.lbl} isDark={isDark} />
                  ))}
                </div>
              )}

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-5 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              {/* Key highlights */}
              <div className={`p-3 mb-5 border ${
                isDark ? 'border-white/5 bg-white/2' : 'border-gray-50 bg-gray-50'
              }`}>
                <div className="flex items-center gap-1.5 mb-3">
                  <Zap size={11} style={{ color: 'var(--accent)' }} />
                  <span
                    className="font-display font-semibold text-[10px] tracking-widest uppercase"
                    style={{ color: 'var(--accent)' }}
                  >
                    Key Highlights
                  </span>
                </div>
                <ul className="space-y-1">
                  {project.highlights.map((h) => (
                    <li key={h} className={`flex items-start gap-2 text-xs leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }}>·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full stack */}
              <p className={`font-display font-semibold text-[10px] tracking-[0.25em] uppercase mb-2 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className={`tag text-[10px] py-0.5 ${isDark ? 'tag-dark' : 'tag-light'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub CTA */}
              <a
                href={project.github || 'https://github.com/pratheeshabenedict'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <Github size={14} />
                View on GitHub
              </a>
            </div>
          )}

          {/* ────── ARCHITECTURE ────── */}
          {activeTab === 'architecture' && project.archLayers && (
            <div>
              <ArchDiagram archLayers={project.archLayers} isDark={isDark} />

              <p className={`font-display font-semibold text-[10px] tracking-[0.25em] uppercase mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Layer Breakdown
              </p>

              <div className="space-y-3">
                {project.archLayers.map((layer) => (
                  <div
                    key={layer.label}
                    className={`p-3 border ${
                      isDark ? 'border-white/5 bg-white/2' : 'border-gray-100 bg-gray-50'
                    }`}
                  >
                    <div className={`font-display font-bold text-xs mb-1 ${
                      isDark ? 'text-white/70' : 'text-gray-700'
                    }`}>
                      {layer.label}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {layer.nodes.map((n) => n.text).join(' → ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ────── DATA FLOW ────── */}
          {activeTab === 'flow' && project.flowSteps && (
            <div>
              {project.flowSteps.map((step, i) => (
                <FlowStep
                  key={step.title}
                  step={step}
                  index={i}
                  isDark={isDark}
                  isLast={i === project.flowSteps.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}