import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X } from 'lucide-react';
import { GithubIcon } from './Icons';

// Removed CaseStudyModal to display Case Study directly on the card as requested.

const ProjectCard = ({ project, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass rounded-[2rem] overflow-hidden group hover:border-indigo-500 transition-all flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-6 group-hover:text-indigo-500 transition-colors">{project.title}</h3>
        
        <div className="space-y-5 mb-8 flex-grow">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-500">Problem:</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{project.problem}</p>
          </div>
          
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-500">Solution:</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-500">Tech Stack:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-bold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-purple-500">Case Study:</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1 italic leading-relaxed">{project.caseStudy}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md">
            Live Demo <ExternalLink size={18} />
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold rounded-xl transition-all shadow-sm">
            GitHub <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Jewellery Design Generator',
      problem: 'Users ko custom jewellery design karna difficult tha and visualize karne me problem hoti thi.',
      solution: 'AI-based tool jo text se jewellery design generate karta hai aur human models par overlay karta hai.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'AI API'],
      caseStudy: 'Learned API integration for AI models. Faced UI alignment issue -> solved using flexbox and grid layouts.',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Freelance Marketplace',
      problem: 'Freelancers ko high-end clients ke liye ek secure aur trusted platform nahi mil raha tha.',
      solution: 'Ek premium marketplace system banaya jisme escrow payments aur real-time chat integrated hai.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      caseStudy: 'Learned handling real-time data with WebSockets. Faced state management complexity -> solved using Redux Toolkit.',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Portfolio Website',
      problem: 'As a developer, apni online presence and professional identity showcase karne ke liye koi strong medium nahi tha.',
      solution: 'Ek highly responsive aur modern personal portfolio banaya jisme dark mode aur animations hain.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      caseStudy: 'Learned advanced Framer Motion animations. Faced dark mode toggle bugs -> solved using Context API and localStorage.',
      demoUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my best work, solving real-world problems with elegant code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
