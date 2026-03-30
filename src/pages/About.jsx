import { motion } from 'framer-motion';
import {
  User, GraduationCap, Award, MapPin, Phone, Mail,
  Briefcase, Calendar, CheckCircle2, Zap, Code2, Shield
} from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

const timeline = [
  {
    period: 'Jan 2025 – Present',
    role: 'QA Engineer (Software Test Engineer)',
    company: 'Inzeph Software Ventures',
    location: 'Chennai, India',
    color: '#00f5d4',
    points: [
      'Working across 8 projects spanning ERP, HRMS, SaaS Marketplace, EdTech, and Mobile domains',
      'Building and maintaining Selenium WebDriver + TestNG automation frameworks with POM pattern',
      'Led Playwright (TypeScript) migration using Antigravity AI Framework for ERP platforms',
      'REST API testing via Postman, SQL data validation, and Jira defect management each sprint',
    ],
  },
  {
    period: 'Jul 2024 – Mar 2025',
    role: 'QA Certification Training',
    company: 'Qspiders Training Institute',
    location: 'Chennai',
    color: '#a78bfa',
    points: [
      'Core Java fundamentals and Object-Oriented Programming',
      'Manual Testing — SDLC, STLC, Agile/Scrum methodologies',
      'Automation Testing with Selenium WebDriver + TestNG',
      'SQL — Joins, Subqueries, Aggregations, and Data Validation',
    ],
  },
  {
    period: 'Jul 2020 – May 2024',
    role: 'B.Tech – Information Technology',
    company: 'Adithya Institute of Technology',
    location: 'Coimbatore',
    color: '#38bdf8',
    points: [
      'Bachelor of Technology in Information Technology',
      'Strong foundation in software engineering, databases, and algorithms',
    ],
  },
];

const domains = [
  { label: 'Enterprise ERP', icon: '⚡', color: '#00f5d4' },
  { label: 'HRMS', icon: '👥', color: '#a78bfa' },
  { label: 'SaaS Marketplace', icon: '🛒', color: '#38bdf8' },
  { label: 'EdTech / AI', icon: '🦉', color: '#4ade80' },
  { label: 'Event Management', icon: '🎟️', color: '#fb923c' },
  { label: 'LMS', icon: '📚', color: '#818cf8' },
  { label: 'Mobile Apps', icon: '📱', color: '#f472b6' },
  { label: 'School Management', icon: '🏫', color: '#fbbf24' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 grid-bg">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-badge"
          >
            <User size={12} /> About Me
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-5xl text-white mt-4 mb-4"
          >
            The QA Engineer <span className="gradient-text">behind the tests</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-mono text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about software quality, automation efficiency, and delivering defect-free experiences.
            Based in Chennai, working across diverse domains to make software more reliable.
          </motion.p>
        </div>

        {/* Bio + Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-20">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card rounded-2xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 border border-accent-cyan/25 flex items-center justify-center">
                <Shield size={18} className="text-accent-cyan" />
              </div>
              <h2 className="font-syne font-bold text-white text-lg">Professional Summary</h2>
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-400 leading-relaxed">
              <p>
                QA Engineer with <span className="text-accent-cyan font-medium">1+ year of hands-on experience</span> in both Manual and Automation Testing across enterprise platforms, SaaS products, and mobile applications.
              </p>
              <p>
                Proficient in <span className="text-accent-blue font-medium">Selenium WebDriver + TestNG (Java)</span> and <span className="text-accent-purple font-medium">Playwright (TypeScript)</span>, leveraging the Page Object Model pattern to build scalable, maintainable automation frameworks.
              </p>
              <p>
                Delivered <span className="text-accent-cyan font-medium">end-to-end STLC coverage</span> across ERP, HRMS, LMS, EdTech, and Event Management domains. Led the Antigravity AI Framework migration for AI-assisted automation at Inzeph Software Ventures.
              </p>
              <p>
                Experienced in <span className="text-white font-medium">Agile/Scrum delivery</span>, SQL data validation, REST API testing via Postman, and Jira defect lifecycle management — consistently achieving zero critical defect leakage.
              </p>
            </div>
          </motion.div>

          {/* Contact + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact info */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <h3 className="font-syne font-bold text-white text-sm mb-5">Contact Info</h3>
              <div className="space-y-3">
                {[
                  { icon: <MapPin size={13} />, label: 'Chennai, Tamil Nadu, India' },
                  { icon: <Phone size={13} />, label: '+91 84897 93616' },
                  { icon: <Mail size={13} />, label: 'vishalsk797@gmail.com' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="text-accent-cyan">{item.icon}</div>
                    <span className="font-mono text-xs text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-white/5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="status-dot" />
                  <span className="font-mono text-xs text-green-400">Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <h3 className="font-syne font-bold text-white text-sm mb-5">Quick Facts</h3>
              <div className="space-y-2.5">
                {[
                  { icon: <Briefcase size={12} />, text: '1+ year experience at Inzeph', color: '#00f5d4' },
                  { icon: <Code2 size={12} />, text: '8 projects delivered', color: '#38bdf8' },
                  { icon: <GraduationCap size={12} />, text: 'B.Tech IT — 2024', color: '#a78bfa' },
                  { icon: <Award size={12} />, text: 'Qspiders Certified — 2025', color: '#4ade80' },
                  { icon: <Calendar size={12} />, text: 'Available Immediately', color: '#fb923c' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    <div className="flex-shrink-0" style={{ color: f.color }}>{f.icon}</div>
                    <span className="font-mono text-xs text-slate-400">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <h3 className="font-syne font-bold text-white text-sm mb-4">Languages</h3>
              <div className="space-y-2">
                {[
                  { lang: 'Tamil', level: 'Native', pct: 100, color: '#00f5d4' },
                  { lang: 'English', level: 'Professional', pct: 90, color: '#38bdf8' },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-slate-400">{l.lang}</span>
                      <span className="font-mono text-xs" style={{ color: l.color }}>{l.level}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full">
                      <div className="h-full rounded-full" style={{ width: `${l.pct}%`, background: l.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Domains Tested */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="section-badge"><Zap size={12} /> Domain Coverage</span>
            <h2 className="font-syne font-bold text-3xl text-white mt-3">
              Tested Across <span className="gradient-text">8 Domains</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {domains.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="glass-card rounded-xl p-4 border border-white/5 hover:border-white/10 text-center transition-all duration-200 cursor-default"
              >
                <div className="text-2xl mb-2">{d.icon}</div>
                <p className="font-mono text-xs text-slate-400 leading-snug">{d.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="section-badge"><Calendar size={12} /> Experience</span>
            <h2 className="font-syne font-bold text-3xl text-white mt-3">
              Career <span className="gradient-text">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-blue/30 to-transparent" />

            <div className="space-y-10 pl-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[43px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: item.color,
                      background: `${item.color}25`,
                      boxShadow: `0 0 12px ${item.color}40`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-syne font-bold text-white text-base">{item.role}</h3>
                        <p className="font-mono text-sm mt-0.5" style={{ color: item.color }}>{item.company}</p>
                        <p className="font-mono text-xs text-slate-600 flex items-center gap-1 mt-1">
                          <MapPin size={10} /> {item.location}
                        </p>
                      </div>
                      <span
                        className="font-mono text-xs px-3 py-1.5 rounded-full"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                          color: item.color,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                          <span className="font-mono text-xs text-slate-400 leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="text-center mb-12">
            <span className="section-badge"><Zap size={12} /> Skills</span>
            <h2 className="font-syne font-bold text-3xl text-white mt-3">
              Technical <span className="gradient-text">Proficiency</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <SkillCard key={cat.title} category={cat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
