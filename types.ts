
// Add React import for React.ReactNode
import React from 'react';

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export enum ExperimentVariant {
  CONTROL = 'control',
  VARIANT_B = 'variant_b'
}