import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-surface-dark/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
              : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-heading font-bold text-xl tracking-tight group"
          >
            <span className={isDark ? 'text-white' : 'text-gray-900'}>P</span>
            <span className="text-accent">B</span>
            <span
              className={`text-xs font-body font-normal ml-2 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path
                    ? 'text-accent active'
                    : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDark
                  ? 'text-gray-400 hover:text-accent hover:bg-white/5'
                  : 'text-gray-500 hover:text-accent hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="mailto:pratheesha1925@gmail.com"
              className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
            >
              Hire Me
            </a>

            <button
              className={`md:hidden p-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 ${isDark ? 'bg-surface-dark' : 'bg-white'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`font-heading font-bold text-3xl tracking-tight transition-colors ${
                location.pathname === item.path
                  ? 'text-accent'
                  : isDark
                  ? 'text-white hover:text-accent'
                  : 'text-gray-900 hover:text-accent'
              } ${menuOpen ? 'animate-fade-up opacity-0 [animation-fill-mode:forwards]' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:pratheesha1925@gmail.com"
            className="btn-primary mt-4"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}