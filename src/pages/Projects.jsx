import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const allDomains = ['All', ...new Set(projects.map((p) => p.domain))];
const allTestTypes = ['All', 'Automation', 'Manual', 'API', 'Mobile', 'AI'];

export default function Projects() {
  const [search, setSearch] = useState('');
  const [domainFilter, setDomainFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q)) ||
      p.domain.toLowerCase().includes(q);

    const matchDomain = domainFilter === 'All' || p.domain === domainFilter;

    const matchType =
      typeFilter === 'All' ||
      (typeFilter === 'Automation' && p.stack.some((s) => s.includes('Selenium') || s.includes('Playwright') || s.includes('TestNG'))) ||
      (typeFilter === 'Manual' && p.testing.includes('Manual')) ||
      (typeFilter === 'API' && p.stack.some((s) => s.includes('Postman') || s.includes('API'))) ||
      (typeFilter === 'Mobile' && (p.domain.includes('Mobile') || p.testing.some((t) => t.includes('Device')))) ||
      (typeFilter === 'AI' && p.category.includes('AI'));

    return matchSearch && matchDomain && matchType;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 grid-bg">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-badge"
          >
            <Layers size={12} /> All Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-5xl text-white mt-4 mb-4"
          >
            {projects.length} Projects,{' '}
            <span className="gradient-text">Zero Compromises</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-mono text-sm text-slate-400 max-w-xl mx-auto"
          >
            Click any project card to expand and view detailed achievements, metrics, and test coverage.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-5 border border-white/5 mb-8"
        >
          {/* Search */}
          <div className="relative mb-4">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
            <input
              type="text"
              placeholder="Search by project, tech, or domain..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/8 rounded-xl pl-10 pr-4 py-3 font-mono text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-accent-cyan/40 transition-colors"
            />
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Filter size={11} className="text-slate-600" />
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">Domain:</span>
            </div>
            {allDomains.map((d) => (
              <button
                key={d}
                onClick={() => setDomainFilter(d)}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  domainFilter === d
                    ? 'text-accent-cyan border-accent-cyan/40 bg-accent-cyan/10'
                    : 'text-slate-500 border-white/8 hover:text-white hover:border-white/20'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-2">
              <Filter size={11} className="text-slate-600" />
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">Type:</span>
            </div>
            {allTestTypes.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  typeFilter === t
                    ? 'text-accent-blue border-accent-blue/40 bg-accent-blue/10'
                    : 'text-slate-500 border-white/8 hover:text-white hover:border-white/20'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono text-xs text-slate-600">
            Showing <span className="text-accent-cyan">{filtered.length}</span> of {projects.length} projects
          </p>
          {(search || domainFilter !== 'All' || typeFilter !== 'All') && (
            <button
              onClick={() => { setSearch(''); setDomainFilter('All'); setTypeFilter('All'); }}
              className="font-mono text-xs text-slate-600 hover:text-accent-cyan transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Projects list */}
        {filtered.length > 0 ? (
          <div className="space-y-4">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-syne font-bold text-white text-lg mb-2">No projects found</p>
            <p className="font-mono text-xs text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-2xl p-8 border border-white/5 text-center"
        >
          <h3 className="font-syne font-bold text-2xl text-white mb-2">
            Full STLC Coverage, <span className="gradient-text">Every Sprint</span>
          </h3>
          <p className="font-mono text-xs text-slate-400 max-w-lg mx-auto mb-6">
            Each project followed a rigorous test lifecycle — from test planning and case authoring through execution, defect tracking, and sign-off.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Test Planning', icon: '📋' },
              { label: 'Test Execution', icon: '▶️' },
              { label: 'Defect Tracking', icon: '🐛' },
              { label: 'UAT Sign-off', icon: '✅' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4 bg-white/3 border border-white/5 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-mono text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
