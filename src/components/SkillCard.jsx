import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function SkillBar({ skill, color, visible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs text-slate-400 group-hover:text-white transition-colors duration-200">
          {skill.name}
        </span>
        <span className="font-mono text-xs font-medium" style={{ color }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: visible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillCard({ category, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
      style={{
        ['--card-color']: category.color,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{
            background: category.bgColor,
            border: `1px solid ${category.borderColor}`,
          }}
        >
          {category.icon}
        </div>
        <div>
          <h3 className="font-syne font-bold text-white text-sm">{category.title}</h3>
          <p className="font-mono text-[11px] text-slate-600">{category.skills.length} skills</p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        {category.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={category.color}
            visible={visible}
          />
        ))}
      </div>

      {/* Bottom accent */}
      <div
        className="mt-5 pt-5 border-t"
        style={{ borderColor: `${category.color}15` }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-slate-600">Avg. Proficiency</span>
          <span
            className="font-syne font-bold text-sm"
            style={{ color: category.color }}
          >
            {Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
