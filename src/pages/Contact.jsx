import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Send, MessageSquare, CheckCircle, ArrowRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'vishalsk797@gmail.com',
    href: 'mailto:vishalsk797@gmail.com',
    color: '#00f5d4',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 84897 93616',
    href: 'tel:+918489793616',
    color: '#38bdf8',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vishalsk797',
    href: 'https://linkedin.com/in/vishalsk797',
    color: '#a78bfa',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/vishalsk797',
    href: 'https://github.com/vishalsk797',
    color: '#4ade80',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
    color: '#fb923c',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const mailtoUrl = `mailto:vishalsk797@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoUrl;

    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 grid-bg">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-badge"
          >
            <MessageSquare size={12} /> Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-5xl text-white mt-4 mb-4"
          >
            Let's Build <span className="gradient-text">Quality Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-mono text-sm text-slate-400 max-w-xl mx-auto"
          >
            Open to full-time QA roles, freelance testing projects, or just a conversation about software quality. I typically respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Availability banner */}
            <div className="glass-card rounded-2xl p-5 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="status-dot" />
                <span className="font-syne font-semibold text-green-400 text-sm">Available Now</span>
              </div>
              <p className="font-mono text-xs text-slate-400 leading-relaxed">
                Currently open to QA Engineer opportunities in Chennai or remote. Ready to join immediately.
              </p>
            </div>

            {/* Contact cards */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-5">
              <h3 className="font-syne font-bold text-white text-sm">Contact Details</h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-slate-400 hover:text-accent-cyan transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-mono text-xs text-slate-400">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What I'm looking for */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <h3 className="font-syne font-bold text-white text-sm mb-4">What I'm Looking For</h3>
              <ul className="space-y-2.5">
                {[
                  'QA Engineer / SDET roles',
                  'Manual + Automation hybrid positions',
                  'Remote or Chennai-based',
                  'Product companies / startups',
                  'Agile/Scrum environments',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <ArrowRight size={11} className="text-accent-cyan flex-shrink-0" />
                    <span className="font-mono text-xs text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 border border-accent-cyan/25 flex items-center justify-center">
                  <Send size={16} className="text-accent-cyan" />
                </div>
                <h2 className="font-syne font-bold text-white text-lg">Send a Message</h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-green-400" />
                  </div>
                  <h3 className="font-syne font-bold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="font-mono text-xs text-slate-400 max-w-xs">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 font-mono text-xs text-slate-300 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 font-mono text-xs text-slate-300 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="QA Engineer Opportunity / Collaboration / etc."
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 font-mono text-xs text-slate-300 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project you have in mind..."
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 font-mono text-xs text-slate-300 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bg-primary/40 border-t-bg-primary rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[10px] text-slate-700 text-center">
                    * This form uses mailto. Your default email client will open.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
