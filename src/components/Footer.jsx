import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const socials = [
  { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://linkedin.com/in/vishalsk797' },
  { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/vishalsk797' },
  { icon: <Mail size={16} />, label: 'Email', href: 'mailto:vishalsk797@gmail.com' },
];

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-32">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
                <span className="font-syne font-bold text-sm text-bg-primary">VK</span>
              </div>
              <div>
                <p className="font-syne font-bold text-white text-sm">Vishal Karthikeyan</p>
                <p className="font-mono text-xs text-accent-cyan">QA Engineer</p>
              </div>
            </div>
            <p className="font-mono text-xs text-slate-500 leading-relaxed">
              Ensuring software quality through precision testing, automation frameworks, and relentless attention to detail.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500">
              <MapPin size={12} />
              <span className="font-mono text-xs">Chennai, Tamil Nadu, India</span>
            </div>
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="status-dot" />
              <span className="font-mono text-xs text-green-400">Open to Opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-syne font-semibold text-white text-sm mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-mono text-xs text-slate-500 hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="text-accent-cyan/30 group-hover:text-accent-cyan transition-colors">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-syne font-semibold text-white text-sm mb-5">Get In Touch</p>
            <div className="space-y-3">
              <a href="mailto:vishalsk797@gmail.com" className="block font-mono text-xs text-slate-500 hover:text-accent-cyan transition-colors">
                vishalsk797@gmail.com
              </a>
              <a href="tel:+918489793616" className="block font-mono text-xs text-slate-500 hover:text-accent-cyan transition-colors">
                +91 84897 93616
              </a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600">
            © {year} Vishal Karthikeyan. Crafted with precision.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-600">Built with</span>
            <span className="font-mono text-xs text-accent-cyan">React</span>
            <span className="font-mono text-xs text-slate-600">+</span>
            <span className="font-mono text-xs text-accent-blue">Vite</span>
            <span className="font-mono text-xs text-slate-600">+</span>
            <span className="font-mono text-xs text-accent-purple">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
