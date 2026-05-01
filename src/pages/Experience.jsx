import { useTheme } from '../hooks/useTheme';
import { experience } from '../data';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-20 ${isDark ? 'bg-surface-dark text-white' : 'bg-surface-light text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <p className="section-label">Career</p>
          <h1 className="section-title mt-2">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className={`mt-4 text-lg max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional journey building production-grade applications and driving measurable impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-white/5' : 'bg-gray-200'}`} />

          <div className="space-y-16">
            {experience.map((job, idx) => (
              <div
                key={job.company}
                className={`relative animate-fade-up opacity-0 [animation-fill-mode:forwards]`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-accent bg-surface-dark z-10"
                  style={{ top: '24px' }}
                />

                <div className={`ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}>
                  <div
                    className={`p-8 border transition-all duration-300 ${
                      isDark
                        ? 'bg-white/3 border-white/10 hover:border-accent/30 hover:bg-white/5'
                        : 'bg-white border-gray-100 hover:border-accent/30 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    {/* Job header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-display font-semibold tracking-widest uppercase px-2 py-0.5"
                            style={{ background: job.color + '20', color: job.color, border: `1px solid ${job.color}40` }}
                          >
                            {job.type}
                          </span>
                        </div>
                        <h2 className={`font-display font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {job.role}
                        </h2>
                        <div className="flex items-center gap-1 mt-1">
                          <Briefcase size={14} className="text-accent" />
                          <span className="text-accent font-display font-semibold text-base">{job.company}</span>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <Calendar size={12} />
                          {job.period}
                        </div>
                        <div className={`flex items-center gap-1 text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <MapPin size={12} />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {job.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                          <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                      {job.tags.map(tag => (
                        <span
                          key={tag}
                          className={`tag ${isDark ? 'tag-dark' : 'tag-light'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education callout */}
        <div
          className={`mt-20 p-8 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${
            isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="section-label">Education</p>
              <h3 className={`font-display font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Coimbatore Institute of Technology
              </h3>
              <p className="text-accent font-medium mt-1">B.Tech in Information Technology · 2021 – 2025</p>
            </div>
            <div className={`shrink-0 text-center p-6 border ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
              <div className="font-display font-bold text-4xl text-accent">8.3</div>
              <div className={`text-sm font-display mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>CGPA / 10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}