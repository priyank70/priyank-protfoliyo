
import React from 'react';
import { 
  TrendingUp, 
  Code2, 
  Layers, 
  Zap, 
  Layout, 
  Search, 
  Figma, 
  Database, 
  Globe, 
  Smartphone,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { Experience, Education, Skill } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Spinnennetz",
    role: "CRO Developer / Frontend Developer",
    period: "2023 – Present",
    highlights: [
      "Implemented hardcoded CRO experiments directly into production environments without affecting core codebase.",
      "Improved conversion rate by up to 15–25% through UI/UX optimizations and DOM rendering logic.",
      "Built and tested dynamic UI variations using clean, modular JavaScript.",
      "Performed experiment QA, cross-browser testing, and performance checks.",
      "Worked closely with analytics teams to validate tracking accuracy."
    ]
  },
  {
    company: "Freelance",
    role: "CRO / Frontend Developer",
    period: "2024 – Present",
    highlights: [
      "Delivered CRO solutions for international clients in US & UK markets.",
      "Designed and executed A/B test strategies based on deep user behavior analysis.",
      "Built custom JavaScript experiments for landing pages and complex funnels.",
      "Improved CTA click-through rates by 20%+ on multiple high-traffic projects.",
      "Optimized page load performance and experiment execution timing."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Swarrnim Startup & Innovation University",
    degree: "BSC-IT",
    period: "2023 – 2025",
    description: "Focusing on IT skills in programming, web development, and innovation-driven problem solving."
  },
  {
    institution: "Creative Design and Multimedia Institute",
    degree: "Web Development Course",
    period: "2022 – 2023",
    description: "Specialized in front-end technologies: HTML, CSS, SASS, JS, jQuery, PHP, MySQL, and Figma."
  }
];

export const CORE_SKILLS: Skill[] = [
  {
    name: "Conversion Rate Optimization (CRO)",
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    description: "Strategic data-driven improvements to maximize user actions."
  },
  {
    name: "A/B Testing",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    description: "Rigorous split testing using Optimizely, VWO, and custom scripts."
  },
  {
    name: "JavaScript (ES6+)",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    description: "Expert DOM manipulation and high-performance logic."
  },
  {
    name: "React.js",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    description: "Building scalable, interactive user interfaces with modern hooks."
  },
  {
    name: "Shopify Development",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    description: "Optimizing e-commerce flows and custom theme logic."
  },
  {
    name: "Performance Optimization",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    description: "Perfecting Web Vitals and lightning-fast execution timing."
  }
];

export const TECH_STACK = [
  { category: "Frontend", items: ["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "React.js"] },
  { category: "Backend & DB", items: ["PHP", "MySQL"] },
  { category: "Platforms", items: ["Shopify", "WordPress", "Optimizely", "VWO", "GA4"] },
  { category: "Design & Process", items: ["Figma", "Git", "Jira", "Agile"] }
];
