
import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, MousePointer2 } from 'lucide-react';
import { ExperimentVariant } from '../types';

interface LiveExperimentToggleProps {
  variant: ExperimentVariant;
  setVariant: (v: ExperimentVariant) => void;
}

const LiveExperimentToggle: React.FC<LiveExperimentToggleProps> = ({ variant, setVariant }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div 
        className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-full p-2 flex items-center gap-2 shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <div className="px-3 py-1 text-xs font-bold text-cyan-400 uppercase tracking-widest hidden md:block">
          Live Experiment
        </div>
        <div className="flex bg-slate-950 rounded-full p-1 border border-white/5">
          <button
            onClick={() => setVariant(ExperimentVariant.CONTROL)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
              variant === ExperimentVariant.CONTROL 
              ? 'bg-cyan-600 text-white shadow-lg' 
              : 'text-slate-400 hover:text-white'
            }`}
          >
            <MousePointer2 className="w-3 h-3" />
            Control
          </button>
          <button
            onClick={() => setVariant(ExperimentVariant.VARIANT_B)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
              variant === ExperimentVariant.VARIANT_B 
              ? 'bg-emerald-500 text-white shadow-lg' 
              : 'text-slate-400 hover:text-white'
            }`}
          >
            <FlaskConical className="w-3 h-3" />
            Variant B
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveExperimentToggle;
