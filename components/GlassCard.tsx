
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isDarkMode?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0, isDarkMode = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 shadow-2xl ${
        isDarkMode 
          ? 'bg-slate-900/40 border-white/10 hover:border-cyan-500/50' 
          : 'bg-white/70 border-slate-200 hover:border-cyan-600/50 shadow-slate-200'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
