import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle, TrendingUp } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative group"
    >
      <div
        className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer
          ${expanded ? 'border-opacity-50' : 'border-white/5 hover:border-white/10'}
        `}
        style={{
          borderColor: expanded ? `${project.color}40` : undefined,
          boxShadow: expanded ? `0 0 30px ${project.color}10, 0 20px 60px rgba(0,0,0,0.4)` : undefined,
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Top accent line */}
        <div
          className="h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* Card Header */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 mt-0.5"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}25`,
                }}
              >
                {project.icon}
              </div>

              {/* Title block */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-syne font-bold text-white text-base">{project.title}</h3>
                  {project.featured && (
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}30`,
                        color: project.color,
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-slate-500 mb-3">{project.subtitle}</p>

                {/* Domain + Testing type tags */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-tag">{project.domain}</span>
                  {project.testing.slice(0, 2).map((t) => (
                    <span key={t} className="tech-tag-green">{t}</span>
                  ))}
                  {project.testing.length > 2 && (
                    <span className="tech-tag">+{project.testing.length - 2}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: metrics + toggle */}
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              {project.metrics.slice(0, 1).map((m) => (
                <div key={m.label} className="text-right">
                  <div
                    className="font-syne font-bold text-lg leading-none"
                    style={{ color: project.color }}
                  >
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] text-slate-600 mt-0.5">{m.label}</div>
                </div>
              ))}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: expanded ? `${project.color}20` : 'rgba(255,255,255,0.04)',
                  color: expanded ? project.color : '#64748b',
                }}
              >
                {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </div>
          </div>

          {/* Stack chips preview */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#64748b',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div
                className="mx-6 mb-6 p-5 rounded-xl"
                style={{
                  background: `${project.color}06`,
                  border: `1px solid ${project.color}15`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={13} style={{ color: project.color }} />
                  <span className="font-mono text-xs font-medium" style={{ color: project.color }}>
                    Key Achievements
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle
                        size={13}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: project.color }}
                      />
                      <span className="font-mono text-xs text-slate-400 leading-relaxed">{h}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* All metrics */}
                {project.metrics.length > 1 && (
                  <div className="mt-4 pt-4 border-t flex gap-6" style={{ borderColor: `${project.color}15` }}>
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-syne font-bold text-base" style={{ color: project.color }}>
                          {m.value}
                        </div>
                        <div className="font-mono text-[10px] text-slate-600">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
