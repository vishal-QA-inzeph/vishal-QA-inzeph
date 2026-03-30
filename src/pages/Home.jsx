import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Shield, Zap, Code2, CheckCircle2,
  Github, Linkedin, Mail, Layers, Bug, Terminal, ChevronRight
} from 'lucide-react';
import { projects, stats } from '../data/projects';
import { techStack } from '../data/skills';
import ProjectCard from '../components/ProjectCard';

// Animated counter hook
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target);
    if (isNaN(num)) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Stat counter card
function StatCard({ stat, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const num = parseInt(stat.value);
  const count = useCounter(num, 1500, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-accent-cyan/20 transition-all duration-300 text-center group"
    >
      <div className="font-syne font-bold text-3xl gradient-text mb-1">
        {isNaN(num) ? stat.value : `${count}${stat.suffix}`}
      </div>
      <div className="font-mono text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
}

// Floating badge component
function FloatingBadge({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      className={`absolute glass-card border border-white/10 rounded-xl px-3 py-2 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

// Typing text
function TypingText({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const delay = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting && displayed === word) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && displayed === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setDisplayed(deleting ? displayed.slice(0, -1) : word.slice(0, displayed.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [displayed, deleting, index, words]);

  return (
    <span className="gradient-text typing-cursor">{displayed}</span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const typingWords = [
    'QA Engineer',
    'Automation Tester',
    'Test Strategist',
    'Bug Hunter',
    'STLC Specialist',
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen grid-bg">
      {/* ======= HERO ======= */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      >
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-orb bg-accent-cyan/8 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 glow-orb bg-accent-blue/8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb bg-accent-purple/5 pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-green-500/20 mb-8"
          >
            <span className="status-dot" />
            <span className="font-mono text-xs text-green-400">Available for Opportunities</span>
            <span className="font-mono text-xs text-slate-600">•</span>
            <span className="font-mono text-xs text-slate-500">Chennai, India</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            Vishal
            <br />
            <span className="gradient-text">Karthikeyan</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-syne font-semibold text-2xl sm:text-3xl text-white mb-6 h-10"
          >
            <TypingText words={typingWords} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            1+ year ensuring software excellence through{' '}
            <span className="text-accent-cyan">Selenium + TestNG</span>,{' '}
            <span className="text-accent-blue">Playwright</span>, and rigorous{' '}
            <span className="text-accent-purple">Manual Testing</span> across ERP, HRMS, SaaS, and EdTech platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={15} />
            </Link>
            <a href="/Vishal_Karthikeyan_Resume.pdf" download className="btn-outline flex items-center gap-2">
              <Download size={15} /> Download Resume
            </a>
            <a href="mailto:vishalsk797@gmail.com" className="btn-outline flex items-center gap-2">
              <Mail size={15} /> Let's Talk
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {[
              { icon: <Github size={16} />, href: 'https://github.com/vishalsk797', label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/vishalsk797', label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: 'mailto:vishalsk797@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-slate-500 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent-cyan/50 to-transparent" />
        </motion.div>
      </section>

      {/* ======= STATS ======= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-center"
          >
            <span className="section-badge">
              <Zap size={12} /> By The Numbers
            </span>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ======= WHAT I DO ======= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-badge">
              <Shield size={12} /> What I Do
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mt-3">
              Quality is not an act,<br />
              <span className="gradient-text">it's a habit.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Bug size={22} />,
                color: '#00f5d4',
                title: 'Manual Testing',
                desc: 'Comprehensive test planning, execution, and defect management across Functional, Regression, UAT, and Exploratory testing.',
                skills: ['Test Case Design', 'STLC', 'Defect Lifecycle', 'RBAC Testing'],
              },
              {
                icon: <Code2 size={22} />,
                color: '#38bdf8',
                title: 'Test Automation',
                desc: 'Building scalable Selenium WebDriver + TestNG (Java) frameworks with POM pattern, and Playwright (TypeScript) automation suites.',
                skills: ['Selenium + TestNG', 'Playwright', 'POM Framework', 'Extent Reports'],
              },
              {
                icon: <Terminal size={22} />,
                color: '#a78bfa',
                title: 'API & DB Testing',
                desc: 'REST API validation via Postman, SQL-based data integrity checks, and end-to-end backend verification.',
                skills: ['Postman (REST)', 'SQL Joins', 'Schema Validation', 'Data-Driven'],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}08, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25`, color: item.color }}
                >
                  {item.icon}
                </div>

                <h3 className="font-syne font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="font-mono text-xs text-slate-500 leading-relaxed mb-4">{item.desc}</p>

                <ul className="space-y-1.5">
                  {item.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <CheckCircle2 size={11} style={{ color: item.color }} />
                      <span className="font-mono text-[11px] text-slate-400">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= TECH STACK ======= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-badge">
              <Layers size={12} /> Tech Stack
            </span>
            <h2 className="font-syne font-bold text-2xl text-white mt-3">Tools of the Trade</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, type: 'spring' }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="glass-card border border-white/7 rounded-xl px-4 py-3 flex items-center gap-2.5 cursor-default hover:border-accent-cyan/25 transition-all duration-200 group"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="font-mono text-xs text-slate-400 group-hover:text-white transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FEATURED PROJECTS ======= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="section-badge">
                <Zap size={12} /> Featured Work
              </span>
              <h2 className="font-syne font-bold text-3xl text-white mt-3">
                Projects That <span className="gradient-text">Shipped Quality</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-2 font-mono text-xs text-accent-cyan hover:text-white transition-colors group"
            >
              View All
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======= CTA BANNER ======= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative animated-border glass-card rounded-3xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5 pointer-events-none" />
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-4 relative z-10">
              Ready to ship <span className="gradient-text">bug-free</span> software?
            </h2>
            <p className="font-mono text-sm text-slate-400 max-w-xl mx-auto mb-8 relative z-10">
              Let's collaborate and bring quality assurance to your next project. I'm currently open to full-time QA roles.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Get In Touch <ArrowRight size={15} />
              </Link>
              <a href="mailto:vishalsk797@gmail.com" className="btn-outline flex items-center gap-2">
                <Mail size={15} /> vishalsk797@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
