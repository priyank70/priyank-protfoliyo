
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Sun,
  Moon
} from 'lucide-react';
import { ExperimentVariant } from './types';
import { EXPERIENCES, EDUCATION, CORE_SKILLS, TECH_STACK } from './constants';
import GlassCard from './components/GlassCard';
import LiveExperimentToggle from './components/LiveExperimentToggle';

const App: React.FC = () => {
  const [variant, setVariant] = useState<ExperimentVariant>(ExperimentVariant.CONTROL);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Logic to prevent "refusal to connect" by ensuring internal links use SPA behavior
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryColor = variant === ExperimentVariant.CONTROL 
    ? (isDarkMode ? 'text-cyan-400' : 'text-cyan-600') 
    : (isDarkMode ? 'text-emerald-400' : 'text-emerald-600');

  const primaryBg = variant === ExperimentVariant.CONTROL 
    ? 'bg-cyan-500' 
    : 'bg-emerald-500';

  const primaryBorder = variant === ExperimentVariant.CONTROL 
    ? (isDarkMode ? 'border-cyan-500/50' : 'border-cyan-600/50') 
    : (isDarkMode ? 'border-emerald-500/50' : 'border-emerald-600/50');

  const textColor = isDarkMode ? 'text-slate-100' : 'text-slate-900';
  const subTextColor = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const sectionBg = isDarkMode ? 'bg-slate-950' : 'bg-slate-50';
  const bodyBg = isDarkMode ? 'bg-slate-950' : 'bg-white';

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#020617' : '#ffffff';
    document.body.className = isDarkMode ? 'text-slate-100' : 'text-slate-900';
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bodyBg} ${textColor}`}>
      <LiveExperimentToggle variant={variant} setVariant={setVariant} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        isDarkMode 
          ? 'bg-slate-950/80 border-white/5' 
          : 'bg-white/80 border-slate-200'
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className={`w-10 h-10 ${primaryBg} rounded-lg flex items-center justify-center font-bold text-xl text-white`}>
              P
            </div>
            <span className="font-montserrat text-xl font-bold tracking-tight">
              Priyank<span className={primaryColor}>.G</span>
            </span>
          </motion.div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {['Expertise', 'Experience', 'Education', 'Stack'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className={`${subTextColor} hover:${textColor} transition-colors uppercase tracking-widest text-[10px] font-bold`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full border transition-all ${
                isDarkMode ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`px-5 py-2 rounded-full border ${primaryBorder} ${primaryColor} hover:bg-slate-500/5 transition-all text-xs uppercase font-bold`}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Background Elements */}
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] rounded-full -z-10 animate-pulse ${isDarkMode ? 'bg-cyan-600/10' : 'bg-cyan-200/40'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full -z-10 animate-pulse delay-1000 ${isDarkMode ? 'bg-purple-600/10' : 'bg-purple-200/30'}`} />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 ${
                isDarkMode ? 'bg-slate-900 border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'
              }`}>
                <Sparkles className={`w-3 h-3 ${primaryColor}`} />
                <span>Experimentation & Performance Architect</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 leading-tight">
                Priyank G.<br />
                <span className={primaryColor}>CRO & Frontend</span> Developer
              </h1>
              
              <p className={`${subTextColor} text-lg md:text-xl max-w-xl mb-8 leading-relaxed`}>
                Building high-performance web experiences and improving conversion rates by up to <span className="text-emerald-500 font-bold border-b-2 border-emerald-500/30">25%</span> through data-driven UI experiments.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-8 py-4 rounded-xl ${primaryBg} text-white font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20`}
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </button>
                <a href="https://linkedin.com/in/priyank-gadhethariya" target="_blank" className={`px-8 py-4 rounded-xl border font-bold flex items-center gap-2 transition-all ${
                  isDarkMode ? 'bg-slate-900/80 border-white/10 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
                }`}>
                  LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className={`mt-12 flex items-center gap-8 ${isDarkMode ? 'grayscale opacity-50' : 'opacity-70'}`}>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Trusted By</span>
                <div className="flex gap-6 items-center">
                  <span className="font-bold text-sm">Optimizely</span>
                  <span className="font-bold text-sm">VWO</span>
                  <span className="font-bold text-sm">GA4</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className={`absolute -inset-0.5 ${primaryBg} opacity-20 blur-2xl rounded-3xl`} />
              <div className={`relative border rounded-3xl p-8 overflow-hidden shadow-2xl ${
                isDarkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className={`ml-4 px-3 py-1 rounded text-[10px] font-mono ${isDarkMode ? 'bg-slate-950 text-slate-500' : 'bg-slate-100 text-slate-400'}`}>localhost:3000/experiment-a-b</div>
                </div>
                
                <div className="space-y-4">
                  <div className={`h-4 rounded w-3/4 animate-pulse ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`} />
                  <div className={`h-4 rounded w-1/2 animate-pulse ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`} />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className={`h-24 border rounded-xl p-4 flex flex-col justify-between transition-all duration-300 ${
                      variant === ExperimentVariant.CONTROL 
                        ? `${isDarkMode ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-cyan-50 border-cyan-500/50'}` 
                        : `${isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-slate-50 border-slate-200'}`
                    }`}>
                      <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Control</span>
                      <span className="text-xl font-bold">12.4% CR</span>
                    </div>
                    <div className={`h-24 border rounded-xl p-4 flex flex-col justify-between transition-all duration-300 ${
                      variant === ExperimentVariant.VARIANT_B 
                        ? `${isDarkMode ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-emerald-50 border-emerald-500/50'}` 
                        : `${isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-slate-50 border-slate-200'}`
                    }`}>
                      <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Variant B</span>
                      <span className="text-xl font-bold">15.8% CR</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section id="expertise" className={`py-24 ${sectionBg}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className={`text-xs uppercase tracking-[0.3em] font-bold mb-4 ${primaryColor}`}>Mastery</h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold">Core Expertise</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_SKILLS.map((skill, idx) => (
                <GlassCard key={idx} delay={idx * 0.1} isDarkMode={isDarkMode}>
                  <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm ${
                    isDarkMode ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-100'
                  }`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{skill.name}</h4>
                  <p className={`${subTextColor} text-sm leading-relaxed`}>
                    {skill.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-24 relative overflow-hidden transition-colors ${bodyBg}`}>
          {isDarkMode && <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-600/5 blur-[120px] -z-10" />}
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className={`text-xs uppercase tracking-[0.3em] font-bold mb-4 ${primaryColor}`}>Journey</h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <GlassCard key={idx} className="!p-8" isDarkMode={isDarkMode}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">{exp.company}</h4>
                      <p className={`font-medium ${primaryColor}`}>{exp.role}</p>
                    </div>
                    <div className={`px-4 py-1.5 border rounded-full text-xs font-bold ${
                      isDarkMode ? 'bg-slate-950 border-white/5 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-500'
                    }`}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className={`flex gap-3 ${subTextColor} text-sm leading-relaxed`}>
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${primaryColor}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Stack Grid */}
        <section id="education" className={`py-24 ${sectionBg}`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Education */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className={`text-xs uppercase tracking-[0.3em] font-bold mb-4 ${primaryColor}`}>Background</h2>
                <h3 className="text-4xl font-montserrat font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <GlassCard key={idx} delay={idx * 0.1} isDarkMode={isDarkMode}>
                    <h4 className="text-lg font-bold mb-1">{edu.institution}</h4>
                    <p className={`text-sm font-semibold mb-3 ${primaryColor}`}>{edu.degree} | {edu.period}</p>
                    <p className={`${subTextColor} text-sm leading-relaxed`}>{edu.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Tech Stack Table */}
            <div id="stack" className="lg:col-span-3">
              <div className="mb-12">
                <h2 className={`text-xs uppercase tracking-[0.3em] font-bold mb-4 ${primaryColor}`}>Tools</h2>
                <h3 className="text-4xl font-montserrat font-bold">Technical Stack</h3>
              </div>
              
              <div className={`border rounded-3xl overflow-hidden shadow-2xl ${
                isDarkMode ? 'bg-slate-900/40 border-white/10' : 'bg-white border-slate-200 shadow-slate-200'
              }`}>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 md:divide-slate-200">
                  {TECH_STACK.map((group, idx) => (
                    <div key={idx} className="p-8">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">{group.category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((item, iIdx) => (
                          <div 
                            key={iIdx} 
                            className={`px-4 py-2 border rounded-xl text-sm font-medium transition-all cursor-default ${
                              isDarkMode 
                                ? 'bg-slate-950 border-white/5 hover:border-cyan-500/30 hover:text-cyan-400' 
                                : 'bg-slate-50 border-slate-200 hover:border-cyan-600/30 hover:text-cyan-600'
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className={`py-24 relative overflow-hidden transition-colors ${bodyBg}`}>
          {isDarkMode && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-cyan-600/5 blur-[120px] -z-10" />}
          
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="mb-16">
              <h2 className={`text-xs uppercase tracking-[0.3em] font-bold mb-4 ${primaryColor}`}>Connect</h2>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Let's Optimize Together</h3>
              <p className={subTextColor}>Ready to boost your conversion rates and build high-performance frontend solutions?</p>
            </div>

            <GlassCard className="!p-10 text-left" isDarkMode={isDarkMode}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                        isDarkMode ? 'bg-slate-950/50 border-white/10' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors ${
                        isDarkMode ? 'bg-slate-950/50 border-white/10' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can I help your project?"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none ${
                      isDarkMode ? 'bg-slate-950/50 border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`w-full py-4 rounded-xl ${primaryBg} text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all`}
                >
                  Send Message <MessageSquare className="w-4 h-4" />
                </button>
              </form>
            </GlassCard>

            <div className="mt-16 flex justify-center gap-8">
              <a href="#" className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                isDarkMode ? 'bg-slate-900 border-white/5 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}>
                <Github className={`w-5 h-5 ${subTextColor}`} />
              </a>
              <a href="https://linkedin.com/in/priyank-gadhethariya" target="_blank" className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                isDarkMode ? 'bg-slate-900 border-white/5 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}>
                <Linkedin className={`w-5 h-5 ${subTextColor}`} />
              </a>
              <a href="mailto:priyankgadhethariya.sn@gmail.com" className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                isDarkMode ? 'bg-slate-900 border-white/5 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}>
                <Mail className={`w-5 h-5 ${subTextColor}`} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-12 border-t text-center text-xs font-medium transition-colors ${
        isDarkMode ? 'bg-slate-950 border-white/5 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-2">&copy; {new Date().getFullYear()} Priyank G. Designed with Precision & Performance.</p>
          <p className="uppercase tracking-[0.2em] opacity-30">Conversion Rate Optimization | Frontend Architecture</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
