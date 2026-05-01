import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const mailto = `mailto:pratheesha1925@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass = `w-full px-4 py-3 border text-sm font-body outline-none transition-all duration-200 focus:border-accent ${
    isDark
      ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:bg-white/8'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white shadow-sm'
  }`;

  return (
    <div className={`min-h-screen pt-24 pb-20 ${isDark ? 'bg-surface-dark text-white' : 'bg-surface-light text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <p className="section-label">Let's Talk</p>
          <h1 className="section-title mt-2">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className={`mt-4 text-lg max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Open to full-time opportunities, freelance projects, and interesting collaborations. Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              { icon: Mail, label: 'Email', value: 'pratheesha1925@gmail.com', href: 'mailto:pratheesha1925@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9042181904', href: 'tel:+919042181904' },
              { icon: MapPin, label: 'Location', value: 'Bangalore, Karnataka, India', href: null },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <div
                key={label}
                className={`flex items-start gap-4 p-5 border animate-fade-up opacity-0 [animation-fill-mode:forwards] transition-all duration-200 ${
                  isDark ? 'border-white/10 bg-white/3 hover:border-accent/30' : 'border-gray-100 bg-white shadow-sm hover:border-accent/30'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <div className={`text-xs font-display tracking-widest uppercase mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className={`font-medium text-sm hover:text-accent transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className={`font-medium text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div
              className={`p-5 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${
                isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <p className="section-label mb-4">Profiles</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/pratheeshabenedict', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/pratheesha-b-667562225/', icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-3 border transition-all duration-200 hover:border-accent hover:text-accent text-sm font-display font-medium ${
                      isDark ? 'border-white/10 text-gray-400' : 'border-gray-200 text-gray-500'
                    }`}
                  >
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="border border-accent/30 bg-accent/5 p-5 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-accent font-display font-semibold text-sm tracking-wider uppercase">Available</span>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Open to full-time roles as a Full Stack / Frontend / Backend Developer. Typically responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div
              className={`p-8 border animate-fade-up opacity-0 [animation-fill-mode:forwards] ${
                isDark ? 'border-white/10 bg-white/3' : 'border-gray-100 bg-white shadow-sm'
              }`}
            >
              <h2 className={`font-display font-bold text-xl mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h2>

              {sent && (
                <div className="flex items-center gap-3 p-4 border border-accent/30 bg-accent/10 mb-6">
                  <CheckCircle size={18} className="text-accent" />
                  <p className="text-accent font-display font-medium text-sm">
                    Message sent! I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-display tracking-widest uppercase mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-display tracking-widest uppercase mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-display tracking-widest uppercase mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-display tracking-widest uppercase mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about the opportunity or project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-2"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>

              <p className={`text-xs mt-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                This will open your email client pre-filled with your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}