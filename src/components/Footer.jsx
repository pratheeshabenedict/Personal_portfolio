import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`border-t py-10 px-6 md:px-10 ${isDark ? 'bg-surface-dark border-white/5' : 'bg-white border-gray-100'
        }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
            P<span className="text-accent">B</span>
          </span>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Pratheesha. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: 'https://github.com/pratheeshabenedict', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/pratheesha-b-667562225/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:pratheesha1925@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`p-2.5 border transition-all duration-200 hover:border-accent hover:text-accent ${isDark
                  ? 'border-white/10 text-gray-500'
                  : 'border-gray-200 text-gray-400'
                }`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <nav className="flex items-center gap-6">
          {['/', '/about', '/projects', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Projects', 'Contact'];
            return (
              <Link
                key={path}
                to={path}
                className={`text-xs font-display tracking-widest uppercase transition-colors ${isDark ? 'text-gray-500 hover:text-accent' : 'text-gray-400 hover:text-accent'
                  }`}
              >
                {labels[i]}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}